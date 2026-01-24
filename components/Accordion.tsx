import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-brand-light-green/30 rounded-lg bg-white overflow-hidden shadow-sm">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-brand-green flex-shrink-0" />
            ) : (
              <ChevronDown className="text-brand-green flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-brand-cream/30 text-gray-700 leading-relaxed border-t border-gray-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};