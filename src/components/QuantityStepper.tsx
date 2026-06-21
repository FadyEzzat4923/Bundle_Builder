import { FaMinus, FaPlus } from "react-icons/fa";

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
  const btnBase = `flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs`;
  const size = small ? "w-6 h-6" : "w-6 h-6 text-[#E6EBF0]";
  const countSize = small ? "w-6 text-xs" : "w-8 text-sm";

  return (
    <div className="flex items-center rounded overflow-hidden">
      <button
        className={`${btnBase} ${size} ${small ? "bg-white" : "border-2 border-[#E6EBF0]"} rounded-xs`}
        onClick={() => onChange(qty - 1)}
        disabled={qty <= min}
        aria-label="Decrease"
      >
        <FaMinus />
      </button>
      <span
        className={`${countSize} text-center font-semibold text-secondary py-0.5 text-base`}
      >
        {qty}
      </span>
      <button
        className={`${btnBase} ${size} ${small ? "bg-white" : " bg-gray-100"} text-sm rounded-xs`}
        onClick={() => onChange(qty + 1)}
        disabled={qty >= max}
        aria-label="Increase"
      >
        <FaPlus />
      </button>
    </div>
  );
}
