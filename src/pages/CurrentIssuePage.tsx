import React from 'react';
import { PageId } from '../types';
import { BookOpen, FileText, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CurrentIssuePageProps {
  onNavigate: (page: PageId) => void;
}

export const CurrentIssuePage: React.FC<CurrentIssuePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Serial Publication
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-2 tracking-tight">
            Current issue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            One volume per year, four issues: March, June, September and December. Each issue contains a minimum of five peer-reviewed articles.
          </p>
        </div>

        {/* Current Issue Box */}
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-800">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Volume 1, Issue 1{' '}
              <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-normal">
                month year
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            No issue has been published yet. Volume 1, Issue 1 will appear here with its full table of contents: article title, authors, article type, DOI and PDF link for every article.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('article')}
              className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>See the sample article page</span>
            </button>
          </div>
        </div>

        {/* Articles in press */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Articles in press
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Accepted articles are published here online with a DOI as soon as production is complete, before they are assigned to an issue.
          </p>
        </div>

        {/* Past issues link */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('past')}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Browse past issues</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
