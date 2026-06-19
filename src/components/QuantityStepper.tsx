interface Props {
  qty: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
  small?: boolean;
}

export default function QuantityStepper({
  qty,
  onChange,
  min = 0,
  max = 99,
  small = false,
}: Props) {
  const btnBase = `flex items-center justify-center text-gray-500 hover:text-gray-800 
                   hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`;
  const size = small ? "w-6 h-6 text-sm" : "w-8 h-8 text-base";
  const countSize = small ? "w-6 text-xs" : "w-8 text-sm";

  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden bg-white">
      <button
        className={`${btnBase} ${size}`}
        onClick={() => onChange(qty - 1)}
        disabled={qty <= min}
        aria-label="Decrease"
      >
        −
      </button>
      <span
        className={`${countSize} text-center font-semibold text-gray-800 border-x border-gray-300 py-0.5`}
      >
        {qty}
      </span>
      <button
        className={`${btnBase} ${size}`}
        onClick={() => onChange(qty + 1)}
        disabled={qty >= max}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}
