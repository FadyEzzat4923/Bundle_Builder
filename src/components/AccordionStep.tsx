import type { Step, StepId } from "../types";
import ProductCard from "./ProductCard";

interface Props {
  step: Step;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
  selectedCount: number;
  isLast: boolean;
}

export default function AccordionStep({
  step,
  isOpen,
  onToggle,
  onNext,
  selectedCount,
  isLast,
}: Props) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      {/* Step label */}
      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase pt-4 px-1">
        Step {step.stepNumber} of 4
      </p>

      {/* Header button */}
      <button
        className="w-full flex items-center justify-between py-3 px-1 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={step.icon}
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            {step.title}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedCount > 0 && (
            <span className="text-sm font-semibold text-indigo-600">
              {selectedCount} selected
            </span>
          )}
          <svg
            className={`w-4 h-4 text-indigo-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {/* Expanded */}
      {isOpen && (
        <div className="pb-5">
          {/* Cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-4">
            {step.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                stepId={step.id as StepId}
              />
            ))}
          </div>

          {/* Next button */}
          {!isLast && step.nextLabel && (
            <button
              onClick={onNext}
              className="w-full py-3 border-2 border-indigo-600 text-indigo-600 font-semibold text-sm rounded-xl
                         hover:bg-indigo-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              {step.nextLabel}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
