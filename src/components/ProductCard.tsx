import type { Product, StepId } from "../types";
import { useBundleStore } from "../store/bundleStore";
import QuantityStepper from "./QuantityStepper";

interface Props {
  product: Product;
  stepId: StepId;
}

export default function ProductCard({ product, stepId }: Props) {
  const setQty = useBundleStore((s) => s.setQty);
  const setActiveVariant = useBundleStore((s) => s.setActiveVariant);

  const activeVariant =
    product.variants?.find((v) => v.id === product.activeVariant) ?? null;
  const firstVariant = product.variants?.[0] ?? null;
  const currentQty = activeVariant ? activeVariant.qty : (product.qty ?? 0);
  const isSelected = product.variants
    ? product.variants.some((v) => v.qty > 0)
    : currentQty > 0;

  const handleQty = (qty: number) => {
    setQty(stepId, product.id, product.activeVariant, qty);
  };

  const displayImage =
    activeVariant?.image || firstVariant?.image || product.image;

  return (
    <div
      className={`
        relative flex lg:flex-row xl:flex-col flex-col bg-white rounded-xl border-2 transition-all duration-200 overflow-hidden
        ${
          isSelected
            ? "border-indigo-500 shadow-[0_0_0_1px_#4F46E5,0_4px_12px_rgba(79,70,229,0.12)]"
            : "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
        }
      `}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="w-full lg:w-1/3 xl:w-full aspect-4/3 overflow-hidden flex items-center justify-center">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {product.description}{" "}
          <span className="text-sm text-indigo-600 hover:underline font-medium cursor-pointer">
            Learn More
          </span>
        </p>

        {/* Variant chips */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex gap-1.5 flex-wrap">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(stepId, product.id, v.id)}
                className={`
                  flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium transition-all
                  ${
                    product.activeVariant === v.id
                      ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                      : "border-gray-300 text-gray-600 hover:border-gray-400"
                  }
                `}
                title={v.label}
              >
                {v.image ? (
                  <img
                    src={v.image}
                    alt={v.label}
                    className="w-4 h-4 rounded shrink-0 object-cover"
                  />
                ) : (
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border border-gray-300"
                    style={{ backgroundColor: v.color }}
                  />
                )}
                {v.label}
                {v.qty > 0 && (
                  <span className="ml-0.5 bg-indigo-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {v.qty}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Footer: price + stepper */}
        <div className="flex items-center justify-between mt-1 gap-2">
          <QuantityStepper
            qty={currentQty}
            onChange={handleQty}
            max={product.maxQty ?? 99}
          />

          <div className="flex lg:flex-col gap-1">
            {product.comparePrice && (
              <span className="text-[16px] text-[#D8392B] line-through">
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
            <span className="text-base font-bold text-[#575757]">
              ${product.price.toFixed(2)}
              {product.priceSuffix && (
                <span className="text-[16px] font-normal text-[#575757]">
                  {product.priceSuffix}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
