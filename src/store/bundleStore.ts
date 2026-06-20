import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Step, ReviewItem, StepId } from "../types";
import initialSteps, { reviewCategories } from "../data/products";

interface BundleState {
  steps: Step[];
  activeStep: number;

  // Actions
  setActiveStep: (index: number) => void;
  setQty: (
    stepId: StepId,
    productId: string,
    variantId: string | null,
    qty: number,
  ) => void;
  setActiveVariant: (
    stepId: StepId,
    productId: string,
    variantId: string,
  ) => void;

  // Hydration
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _stepsData?: any;
}

export const useBundleStore = create<BundleState>()(
  persist(
    (set) => ({
      steps: initialSteps,
      activeStep: 0,
      _hasHydrated: false,

      setActiveStep: (index) =>
        set((state) => ({
          activeStep: state.activeStep === index ? -1 : index,
        })),

      setQty: (stepId, productId, variantId, qty) =>
        set((state) => ({
          steps: state.steps.map((step) => {
            if (step.id !== stepId) return step;
            return {
              ...step,
              products: step.products.map((p) => {
                if (p.id !== productId) return p;
                if (variantId && p.variants) {
                  return {
                    ...p,
                    variants: p.variants.map((v) =>
                      v.id === variantId ? { ...v, qty: Math.max(0, qty) } : v,
                    ),
                  };
                }
                return { ...p, qty: Math.max(0, qty) };
              }),
            };
          }),
        })),

      setActiveVariant: (stepId, productId, variantId) =>
        set((state) => ({
          steps: state.steps.map((step) => {
            if (step.id !== stepId) return step;
            return {
              ...step,
              products: step.products.map((p) =>
                p.id === productId ? { ...p, activeVariant: variantId } : p,
              ),
            };
          }),
        })),

      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "bundle-builder-config",
      partialize: (state) => ({
        // Only persist these fields, not the JSX elements in steps
        activeStep: state.activeStep,
        _hasHydrated: state._hasHydrated,
        // Store only the quantity and variant data
        _stepsData: state.steps.map((step) => ({
          id: step.id,
          products: step.products.map((p) => ({
            id: p.id,
            qty: p.qty,
            activeVariant: p.activeVariant,
            variants:
              p.variants?.map((v) => ({ id: v.id, qty: v.qty })) || null,
          })),
        })),
      }),
      onRehydrateStorage: () => (state) => {
        if (state && state._stepsData) {
          // Merge persisted data back into initialSteps
          const stepsData = state._stepsData;
          state.steps = initialSteps.map((step) => {
            const stepData = stepsData.find(
              (s: { id: string }) => s.id === step.id,
            );
            if (!stepData) return step;
            return {
              ...step,
              products: step.products.map((p) => {
                const productData = stepData.products.find(
                  (pd: { id: string }) => pd.id === p.id,
                );
                if (!productData) return p;
                return {
                  ...p,
                  qty: productData.qty,
                  activeVariant: productData.activeVariant,
                  variants:
                    p.variants?.map((v) => {
                      const variantData = productData.variants?.find(
                        (vd: { id: string }) => vd.id === v.id,
                      );
                      return variantData ? { ...v, qty: variantData.qty } : v;
                    }) || null,
                };
              }),
            };
          });
          delete state._stepsData;
        }
        if (state) state.setHasHydrated(true);
      },
    },
  ),
);

// ── Selectors ────────────────────────────────────────────────────────────────

export function useReviewItems(): ReviewItem[] {
  const steps = useBundleStore((s) => s.steps);

  return steps.flatMap((step) => {
    const category = reviewCategories[step.id];
    const items: ReviewItem[] = [];

    step.products.forEach((p) => {
      if (p.variants) {
        p.variants.forEach((v) => {
          if (v.qty > 0) {
            items.push({
              key: `${p.id}-${v.id}`,
              stepId: step.id as StepId,
              productId: p.id,
              variantId: v.id,
              name: `${p.name} – ${v.label}`,
              assets: p.assets,
              image: v.image || p.image,
              price: p.price,
              comparePrice: p.comparePrice,
              priceSuffix: p.priceSuffix,
              qty: v.qty,
              category,
              maxQty: p.maxQty,
              isFree: p.isFree,
            });
          }
        });
      } else {
        const qty = p.qty ?? 0;
        if (qty > 0) {
          items.push({
            key: p.id,
            stepId: step.id as StepId,
            productId: p.id,
            variantId: null,
            name: p.name,
            assets: p.assets,
            image: p.image,
            price: p.price,
            comparePrice: p.comparePrice,
            priceSuffix: p.priceSuffix,
            qty,
            category,
            maxQty: p.maxQty,
            isFree: p.isFree,
          });
        }
      }
    });

    return items;
  });
}

export function useTotals() {
  const items = useReviewItems();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const compareTotal = items.reduce(
    (s, i) => s + (i.comparePrice ?? i.price) * i.qty,
    0,
  );
  const savings = compareTotal - subtotal;
  return { subtotal, compareTotal, savings };
}

export function useSelectedCounts(): number[] {
  const steps = useBundleStore((s) => s.steps);
  return steps.map((step) => {
    let count = 0;
    step.products.forEach((p) => {
      if (p.variants) {
        if (p.variants.some((v) => v.qty > 0)) count++;
      } else if ((p.qty ?? 0) > 0) {
        count++;
      }
    });
    return count;
  });
}

// Hydration check hook
export function useHasHydrated() {
  const hasHydrated = useBundleStore((s) => s._hasHydrated);
  return hasHydrated;
}
