import { useBundleStore, useSelectedCounts } from "./store/bundleStore";
import AccordionStep from "./components/AccordionStep";
import ReviewPanel from "./components/ReviewPanel";

export default function App() {
  const steps = useBundleStore((s) => s.steps);
  const activeStep = useBundleStore((s) => s.activeStep);
  const setActiveStep = useBundleStore((s) => s.setActiveStep);
  const selectedCounts = useSelectedCounts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-700 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900">SecureHome</span>
          </div>
          <div className="h-5 w-px bg-gray-200 mx-1" />
          <h1 className="text-2xl font-bold text-gray-900 hidden sm:block">
            Let's get started!
          </h1>
        </div>
      </header>

      {/* Two-column layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
        {/* Left: builder accordion */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 divide-y divide-gray-200">
          {steps.map((step, index) => (
            <AccordionStep
              key={step.id}
              step={step}
              index={index}
              isOpen={activeStep === index}
              onToggle={() => setActiveStep(index)}
              onNext={() => useBundleStore.getState().setActiveStep(index + 1)}
              selectedCount={selectedCounts[index]}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Right: review panel */}
        <div className="lg:sticky lg:top-24">
          <ReviewPanel />
        </div>
      </main>
    </div>
  );
}
