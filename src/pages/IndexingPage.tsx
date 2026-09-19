import React from 'react';
import { PageId } from '../types';
import { Search, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface IndexingPageProps {
  onNavigate: (page: PageId) => void;
}

export const IndexingPage: React.FC<IndexingPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Discoverability
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Indexing and abstracting
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            The journal is listed only in services where inclusion has been confirmed. This page is updated as indexing is granted.
          </p>
        </div>

        {/* Indexing Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-2.5 pr-4">Service</th>
                  <th className="py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900">
                    Crossref (DOI registration)
                  </td>
                  <td className="py-3.5">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      display once membership is active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900">
                    Google Scholar
                  </td>
                  <td className="py-3.5">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      display once articles appear
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900">
                    ORCID integration
                  </td>
                  <td className="py-3.5">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      display once enabled
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900">
                    DOAJ
                  </td>
                  <td className="py-3.5">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      display only once accepted
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              The journal does not use or display metrics from unrecognised impact factor services.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
