import { useState } from "react";
import {
  useBundleStore,
  useReviewItems,
  useTotals,
} from "../store/bundleStore";
import QuantityStepper from "./QuantityStepper";
import Satisfaction from "../../public/Satisfaction.png";
import type { StepId } from "../types";
import { LiaShippingFastSolid } from "react-icons/lia";

const CATEGORY_ORDER = ["Cameras", "Sensors", "Accessories", "Plan"];

export default function ReviewPanel() {
  const setQty = useBundleStore((s) => s.setQty);
  const items = useReviewItems();
  const { subtotal, compareTotal, savings } = useTotals();
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(false);

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof items>>(
    (acc, cat) => {
      const group = items.filter((i) => i.category === cat);
      if (group.length) acc[cat] = group;
      return acc;
    },
    {},
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleCheckout = () => {
    setChecked(true);
    setTimeout(() => setChecked(false), 3000);
  };

  const monthlyMin = (subtotal / 12).toFixed(2);

  return (
    <div className="bg-[#EDF4FF] rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col xl:flex-row xl:gap-10 items-between">
      {/* Header */}
      <div className="flex-1 flex flex-col gap-3 xl:flex-1 xl:border-r xl:border-gray-200">
        <div className="px-5 pt-5 pb-3">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
            Review
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Your security system
          </h2>
          <p className="text-base text-[#1F1F1FBF] mt-1">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </div>

        {/* Line items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-10 text-gray-400 gap-3">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <p className="text-sm">Add items to build your system</p>
          </div>
        ) : (
          <div className="products-review px-5 flex flex-col divide-y divide-gray-100 overflow-y-auto max-h-120 xl:max-h-max">
            {Object.entries(grouped).map(([cat, catItems]) => (
              <div key={cat} className="py-3 border-b border-[#CED6DE]">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                  {cat}
                </p>
                <div className="flex flex-col gap-3">
                  {catItems.map((item) => (
                    <div key={item.key} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`rounded-lg object-cover shrink-0 w-10 h-10`}
                      />
                      <div className="flex-1 min-w-0 flex justify-between items-center">
                        <p className="text-sm font-medium text-[#0B0D10] leading-snug truncate">
                          {item.isPlan && (
                            <span className="text-black">Cam</span>
                          )}{" "}
                          {item.isPlan ? (
                            <span className="text-[#4E2FD2]">{item.name}</span>
                          ) : (
                            item.name
                          )}
                        </p>
                        <div className="flex items-center mt-1.5 gap-2">
                          {!item.isPlan && (
                            <QuantityStepper
                              qty={item.qty}
                              onChange={(qty) =>
                                setQty(
                                  item.stepId as StepId,
                                  item.productId,
                                  item.variantId,
                                  qty,
                                )
                              }
                              max={item.maxQty ?? 99}
                              small
                            />
                          )}
                          <div className="text-right shrink-0 xl:flex gap-1 items-center">
                            {item.comparePrice && (
                              <p className="text-[10px] text-gray-400 line-through">
                                ${(item.comparePrice * item.qty).toFixed(2)}
                                {item.isPlan && (
                                  <span className="text-[10px] font-normal text-gray-400">
                                    {item.priceSuffix}
                                  </span>
                                )}
                              </p>
                            )}
                            {item.isFree ? (
                              <p className="text-sm font-bold text-primary">
                                FREE
                              </p>
                            ) : (
                              <p className="text-sm font-bold text-primary">
                                ${(item.price * item.qty).toFixed(2)}
                                {item.isPlan && (
                                  <span className="text-[10px] font-normal text-gray-400">
                                    {item.priceSuffix}
                                  </span>
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Shipping row */}
            <div className="py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                <LiaShippingFastSolid className="text-[#0AA288] text-2xl" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-800">
                  Fast Shipping
                </p>
              </div>
              <div className="text-right xl:flex gap-1 items-center">
                <p className="text-[10px] text-gray-400 line-through">$5.99</p>
                <p className="text-sm font-bold text-primary">FREE</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pt-5 pb-5 border-t border-gray-100 xl:border-t-0 xl:border-l xl:border-gray-200 flex flex-col gap-3 xl:w-64 xl:flex-1">
        <div className="flex xl:flex-col xl:items-start justify-between items-center xl:gap-3">
          {/* Guarantee + financing */}
          <div className="flex items-start gap-4">
            {/* Seal */}
            <div className="xl:w-33 xl:h-33 w-20 h-20">
              <img src={Satisfaction} alt="Satisfaction Guarantee" />
            </div>
            <div className="flex-1 hidden xl:block">
              <p className="text-xl font-semibold text-gray-900">
                30-day hassle-free returns
              </p>
              <p className="text-xl text-gray-500 mt-3 w-8/10">
                If you're not totally in love with the product, we will refund
                you 100%.
              </p>
            </div>
          </div>

          {/* Financing pill + total row */}
          <div className="w-full flex xl:flex-row xl:items-center flex-col items-end justify-between">
            <span className="text-xs bg-primary-bg text-white font-semibold px-3 py-1 rounded-full">
              as low as ${monthlyMin}/mo
            </span>
            <div className="text-right flex gap-3 items-center">
              {savings > 0 && (
                <p className="xl:text-[22px] text-xl text-[#6F7882] line-through">
                  ${compareTotal.toFixed(2)}
                </p>
              )}
              <p className="xl:text-[28px] text-[28px] font-bold text-primary">
                ${subtotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Savings */}
        {savings > 0 && (
          <p className="text-xs font-semibold text-green text-center -mt-1">
            Congrats! You're saving ${savings.toFixed(2)} on your security
            bundle!
          </p>
        )}

        {/* Checkout */}
        <button
          onClick={handleCheckout}
          className="w-full py-3.5 bg-primary-bg hover:bg-indigo-800 text-white font-bold text-base rounded-xl transition-colors duration-200"
        >
          {checked ? "✓ Order placed!" : "Checkout"}
        </button>

        {/* Save */}
        <button
          onClick={handleSave}
          className="text-center text-xs text-secondary hover:text-gray-800 underline underline-offset-2 transition-colors"
        >
          {saved ? "✓ Saved!" : "Save my system for later"}
        </button>
      </div>
    </div>
  );
}
