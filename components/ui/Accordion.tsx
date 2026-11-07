'use client';

import { useState } from 'react';

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="rounded-2xl border border-bank-border bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-bank-navy">{item.question}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bank-ivory text-lg text-bank-navy">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? <p className="border-t border-bank-border px-5 py-4 text-base leading-7 text-bank-muted">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
