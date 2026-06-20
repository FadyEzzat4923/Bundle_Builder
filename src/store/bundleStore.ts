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

  // Derived (computed in selectors below)
}

export const useBundleStore = create<BundleState>()(
  persist(
    (set) => ({
      steps: initialSteps,
      activeStep: 0,

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
    }),
    {
      name: "bundle-builder-config",
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
              image: v.image || p.image,
              price: p.price,
              comparePrice: p.comparePrice,
              priceSuffix: p.priceSuffix,
              qty: v.qty,
              category,
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
