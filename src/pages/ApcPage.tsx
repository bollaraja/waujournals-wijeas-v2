import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, HeartHandshake, CheckCircle2, AlertCircle } from 'lucide-react';

interface ApcPageProps {
  onNavigate: (page: PageId) => void;
}

export const ApcPage: React.FC<ApcPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Transparency & Economics
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Article processing charges
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            The journal does not charge any fee for submission or for peer review.
          </p>
        </div>

        {/* Fee Schedule Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Fee Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700 w-1/2">Submission fee</th>
                  <td className="py-3.5 text-emerald-700 font-bold">None</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Peer review fee</th>
                  <td className="py-3.5 text-emerald-700 font-bold">None</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Article processing charge, on acceptance only</th>
                  <td className="py-3.5 text-slate-800">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      Amount in INR and USD, or "None" if diamond open access — to be approved by the Founder
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Waivers Policy */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-blue-700" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Waivers
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Authors who cannot pay may request a full or partial waiver at submission. Waivers are available in particular to authors from low-income countries (as classified by the World Bank), students and early career researchers without funding. Waiver requests are decided by the publisher, are never visible to editors or reviewers, and have no influence on editorial decisions.
          </p>
          <div className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>
              Charges are payable only after acceptance. The journal never requests payment before a manuscript has been accepted through peer review.
            </span>
          </div>
        </div>

        {/* Navigation Action */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('submission')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            Go to Submission Portal
          </button>
          <button
            onClick={() => onNavigate('authors')}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Author Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};
