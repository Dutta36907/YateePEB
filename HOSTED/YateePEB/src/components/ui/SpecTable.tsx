import React from "react";
import { ProductSpecification } from "@/types";
import { cn } from "@/lib/utils";

interface SpecTableProps {
  specifications: ProductSpecification[];
  title?: string;
  className?: string;
}

export const SpecTable: React.FC<SpecTableProps> = ({
  specifications,
  title = "Technical Specifications",
  className,
}) => {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs", className)}>
      {title && (
        <div className="bg-slate-900 px-6 py-4 text-white border-b border-slate-800">
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">Compliant with IS 800, AISC 360, MBMA and ASTM standards</p>
        </div>
      )}

      <div className="divide-y divide-slate-100 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3.5">Parameter / Feature</th>
              <th className="px-6 py-3.5">Standard Specification</th>
              <th className="px-6 py-3.5">Design Code / Standard</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {specifications.map((spec, idx) => (
              <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-900">{spec.parameter}</td>
                <td className="px-6 py-4 text-slate-700 font-mono text-xs sm:text-sm">{spec.value}</td>
                <td className="px-6 py-4 text-slate-500 text-xs">
                  <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-medium">
                    {spec.standard || "IS / MBMA"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
