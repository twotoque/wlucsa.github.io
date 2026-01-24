import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { locations } from './locations';

const SavingsCalculator = () => {
  const [spendings, setSpendings] = useState<Record<number, string>>({});
  const [isOpen, setIsOpen] = useState(false);

  // Checks for specifically the "XX% OFF" format (case insensitive)
  const getDiscountPercent = (value: string | number): number => {
    const strValue = String(value).toUpperCase();
    const match = strValue.match(/(\d+)%\s*OFF/);
    
    // If it doesn't match the format exactly, return 0 (skip)
    return match ? parseFloat(match[1]) / 100 : 0;
  };

  const totalSavings = locations.reduce((acc, store) => {
    const spend = parseFloat(spendings[store.id] || "0");
    const discountMultiplier = getDiscountPercent(store.discount);
    return acc + (spend * discountMultiplier);
  }, 0);

  const handleInputChange = (id: number, value: string) => {
    setSpendings((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="mt-10 relative bg-[#61918e] p-8 md:p-12 min-h-[100px] flex flex-col overflow-hidden transition-all duration-300 shadow-xl border-4 border-[#ccdbdb]/60 rounded-xl">
      
      <div 
        className="flex flex-col md:flex-row justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-center md:text-left z-20">
          {isOpen && (
            <h2 className="font-medium !text-white/80 uppercase tracking-wide text-sm mb-1 animate-fadeIn">
              Total Combined Savings
            </h2>
          )}
          <h1 className="text-2xl md:text-5xl max-w-[100%] md:max-w-[80%] font-black text-white uppercase transition-all duration-300">
            {isOpen 
              ? `$${totalSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
              : "See how much you'll save"}
          </h1>
        </div>

        <button className="mt-6 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full !bg-[#61918e] !text-white text-lg font-bold transition-all border border-white/10 active:scale-95">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 mt-10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations
            
            // Filter out locations that don't have a parsable discount ("XX% OFF")
            .filter(store => /(\d+)%\s*OFF/i.test(store.discount))
            .map((store) => (
              <div key={store.id} className="flex flex-col p-4 border border-white/20 bg-black/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider truncate mr-2">
                    {store.title}
                  </span>
                  <span className="text-white bg-black/30 px-2 py-0.5 rounded-lg text-[10px] font-black">
                    {store.discount}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 pl-7 pr-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    value={spendings[store.id] || ''}
                    onChange={(e) => handleInputChange(store.id, e.target.value)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;