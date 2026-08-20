"use client";

import { useEffect, useState } from "react";

const steps = ["Read", "Understand", "Write", "Practice", "Teach"];

export default function LearningPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        My Learning Philosophy
      </p>

      {/* Single Badge */}
      <div className="inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 md:px-5 py-2 backdrop-blur">
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <div
              key={step}
              className={`flex items-center gap-2 transition-all duration-500 ${
                isActive ? "text-emerald-400" : "text-slate-500"
              }`}
            >
              {/* Bullet */}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                  isActive
                    ? "scale-150 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                    : "bg-slate-700 "
                }`}
              />

              {/* Text */}
              <span className={`text-xs font-medium sm:text-sm `}>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
