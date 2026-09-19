import React from 'react';
import { PageId } from '../types';
import { SCOPE_AREAS } from '../data/journalData';
import { Send, Calendar, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';

interface CallForPapersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CallForPapersPage: React.FC<CallForPapersPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Announcements
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Call for papers
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            WAU International Journal of Engineering and Applied Sciences invites original research articles, reviews and other contributions for{' '}
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-sm font-semibold">
              Volume X, Issue Y
            </span>.
          </p>
        </div>

        {/* Topics of Interest (Scope Areas) */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-200">
            Topics of interest include, but are not limited to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCOPE_AREAS.map((scope, idx) => (
              <div
                key={scope.id}
                className="p-4 bg-white rounded-lg border border-slate-200 shadow-xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    {scope.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">Area {idx + 1}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {scope.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Submit */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Why submit
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Double-anonymous peer review by international experts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Immediate open access under CC BY 4.0, with authors retaining copyright.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Crossref DOI and long-term preservation for every article.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>No submission or review fees; waivers available.</span>
            </li>
          </ul>
        </div>

        {/* Submitting Schedule */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Submitting
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Submissions are welcome at any time and are published online on acceptance. Manuscripts received by{' '}
            <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-semibold">
              date
            </span>{' '}
            will be considered for{' '}
            <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-semibold">
              issue
            </span>.
          </p>
          <div>
            <button
              onClick={() => onNavigate('submission')}
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit manuscript</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
