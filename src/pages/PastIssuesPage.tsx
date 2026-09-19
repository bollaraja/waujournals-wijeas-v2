import React from 'react';
import { PageId } from '../types';
import { Archive, Calendar, Layers, Info } from 'lucide-react';

interface PastIssuesPageProps {
  onNavigate: (page: PageId) => void;
}

export const PastIssuesPage: React.FC<PastIssuesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Archive & Volumes
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Past issues
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            All earlier issues, newest first. One volume is published each year with four quarterly issues. Every article stays permanently available with its DOI.
          </p>
        </div>

        {/* Current status notice */}
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-600 space-y-2">
          <p>
            Past issues will be listed here once a second issue has been published. Until then, see the{' '}
            <button onClick={() => onNavigate('current')} className="text-blue-700 hover:underline font-semibold">
              current issue
            </button>.
          </p>
        </div>

        {/* Preview layout of how page will look */}
        <div className="space-y-4">
          <div>
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              How this page will look
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Volume block, newest first, with one card per quarterly issue. Each card opens that issue's table of contents.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-700" />
              <span>Volume 1</span>
              <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-normal">
                year
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { issue: 'Issue 1', date: 'March year', count: 'article count' },
                { issue: 'Issue 2', date: 'June year', count: 'article count' },
                { issue: 'Issue 3', date: 'September year', count: 'article count' },
                { issue: 'Issue 4', date: 'December year', count: 'article count' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border-t-3 border-t-blue-700 border-x border-b border-slate-200 p-4 shadow-xs"
                >
                  <strong className="text-slate-900 font-semibold text-sm block mb-1">
                    {item.issue}
                  </strong>
                  <div className="text-xs text-slate-500">
                    <span className="bg-amber-50 text-amber-800 px-1 py-0.2 rounded font-mono text-[11px]">
                      {item.date}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    <span className="bg-amber-50 text-amber-800 px-1 py-0.2 rounded font-mono text-[11px]">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Build note: list only issues that were actually published. Do not create entries for missed quarters, and never move newly published articles into past issues.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
