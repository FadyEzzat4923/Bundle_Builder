import {
  useBundleStore,
  useSelectedCounts,
  useHasHydrated,
} from "./store/bundleStore";
import AccordionStep from "./components/AccordionStep";
import ReviewPanel from "./components/ReviewPanel";

export default function App() {
  const hasHydrated = useHasHydrated();
  const steps = useBundleStore((s) => s.steps);
  const activeStep = useBundleStore((s) => s.activeStep);
  const setActiveStep = useBundleStore((s) => s.setActiveStep);
  const selectedCounts = useSelectedCounts();

  if (!hasHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="text-center my-3">
        <h1 className="font-bold text-gray-900 lg:hidden md:hidden sm:hidden block text-[31.88px]">
          Let's get started!
        </h1>
      </header>

      {/* Two-column layout */}
      <main className="xl:px-10 lg:px-10 px-5 mx-auto sm:px-6 py-6 grid grid-cols-1 md:grid-cols-[1fr_380px] xl:grid-cols-1 gap-6 items-start">
        {/* Left: builder accordion */}
        <div className="flex flex-col gap-2">
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
        <div className="lg:sticky lg:top-2">
          <ReviewPanel />
        </div>
      </main>
    </div>
  );
}
