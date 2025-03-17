import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, highlighted }) => {
  return (
    <div
      className={`w-[304px] max-w-full p-6 flex flex-col justify-between rounded-[32px] border shadow-md 
        ${highlighted
          ? "bg-gradient-to-b from-[#0A84FF]/40 to-[#064F9900] border-[#0A84FF] shadow-[0px_0px_22.6px_3px_#0A84FF63]" 
          : "bg-[#0E0E0E] border-[#F2F2F224]"
        }`}
    >
      {/* Plan & Features */}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <hr className="my-3 border-[#AAAAAA]/40" />
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-[#FFFFFF] text-sm">
              <Check className="w-4 h-4 text-[#0A84FF]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Price & Button */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-white">{price}/month</h2>
        <button
          className={`mt-8 w-full py-4 text-sm font-bold rounded-full transition
            ${highlighted 
              ? "bg-[#0A84FF] text-white shadow-[0px_0px_22.6px_3px_#0A84FF63] hover:bg-[#0A84FF]/80" 
              : "border border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF]/20"
            }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
