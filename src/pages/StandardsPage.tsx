import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, CheckCircle2, Award, Landmark, BookOpen } from 'lucide-react';

interface StandardsPageProps {
  onNavigate: (page: PageId) => void;
}

export const StandardsPage: React.FC<StandardsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Benchmarking & Quality
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Standards and best practice
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            The journal's policies and workflows follow recognised international standards for scholarly publishing, and are designed to meet the evaluation criteria used by leading international indexing and abstracting services.
          </p>
        </div>

        {/* Standards the journal follows */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Standards the journal follows
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">COPE Core Practices.</strong> Publication ethics and handling of misconduct.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">Principles of Transparency and Best Practice in Scholarly Publishing.</strong> Joint principles of COPE, DOAJ, OASPA and WAME, covering website content, peer review, ownership, fees and archiving.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">Reporting guidelines.</strong> Discipline-specific reporting standards, including EQUATOR Network guidelines where relevant.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">Open access.</strong> Budapest Open Access Initiative definition; Creative Commons Attribution 4.0 licence.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">Persistent identifiers.</strong> Crossref DOIs for articles, ORCID iDs for authors, CRediT contributor roles.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 font-semibold">Preservation.</strong> Long-term digital archiving.
              </div>
            </li>
          </ul>
        </div>

        {/* Alignment with the UGC Suggestive Parameters */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-700" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Alignment with the UGC Suggestive Parameters
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            For researchers in India, the journal is designed in line with the eight criteria of the University Grants Commission's Suggestive Parameters for peer-reviewed journals: valid ISSN and regular quarterly publication; a qualified editorial board with verifiable affiliations; published editorial policies; quality criteria for published content; recognised publishing standards; research ethics; visibility through open access and indexing; and scholarly impact.
          </p>
          <p className="text-xs text-slate-500 italic pt-1 border-t border-slate-100">
            The UGC does not approve or list individual journals. Institutions assess journals against these parameters themselves.
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('indexing')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            Check Indexing & Abstracting Status
          </button>
        </div>
      </div>
    </div>
  );
};
