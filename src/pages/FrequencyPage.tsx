import React from 'react';
import { PageId } from '../types';
import { Calendar, Clock, CheckCircle2, Send } from 'lucide-react';

interface FrequencyPageProps {
  onNavigate: (page: PageId) => void;
}

export const FrequencyPage: React.FC<FrequencyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Editorial Cadence
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Publication frequency
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            WAU International Journal of Engineering and Applied Sciences is a quarterly journal. It publishes one volume per calendar year, comprising four issues released in March, June, September and December. Each issue contains a minimum of five peer-reviewed articles.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Articles are published online with a DOI as soon as they have completed production ("Articles in press"), and are then assigned to the next scheduled issue. This keeps publication fast for authors and the quarterly schedule regular for readers and indexing services.
          </p>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-2.5 pr-4">Issue</th>
                  <th className="py-2.5 pr-4">Release</th>
                  <th className="py-2.5">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 whitespace-nowrap">Issue 1</td>
                  <td className="py-3.5 pr-4 text-blue-800 font-semibold whitespace-nowrap">March</td>
                  <td className="py-3.5 text-slate-600">Articles accepted and produced from December to February</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 whitespace-nowrap">Issue 2</td>
                  <td className="py-3.5 pr-4 text-blue-800 font-semibold whitespace-nowrap">June</td>
                  <td className="py-3.5 text-slate-600">Articles accepted and produced from March to May</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 whitespace-nowrap">Issue 3</td>
                  <td className="py-3.5 pr-4 text-blue-800 font-semibold whitespace-nowrap">September</td>
                  <td className="py-3.5 text-slate-600">Articles accepted and produced from June to August</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 whitespace-nowrap">Issue 4</td>
                  <td className="py-3.5 pr-4 text-blue-800 font-semibold whitespace-nowrap">December</td>
                  <td className="py-3.5 text-slate-600">Articles accepted and produced from September to November</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-blue-50/60 rounded-lg border border-blue-200/80 text-xs text-blue-900 flex items-center justify-between gap-4">
            <span>Submissions are welcome throughout the year. There are no issue deadlines for regular articles.</span>
            <button
              onClick={() => onNavigate('submission')}
              className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
