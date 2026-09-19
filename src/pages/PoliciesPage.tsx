import React, { useState } from 'react';
import { PageId, PolicyItem } from '../types';
import { POLICIES } from '../data/journalData';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  ArrowLeft, 
  Search,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface PoliciesPageProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ currentPage, onNavigate }) => {
  const [openPolicyId, setOpenPolicyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Check if we are viewing a single policy page (e.g. policy-peer-review)
  const isIndividualPolicy = currentPage.startsWith('policy-');
  const individualPolicyId = isIndividualPolicy ? currentPage.replace('policy-', '') : null;
  const currentPolicy = POLICIES.find((p) => p.id === individualPolicyId);

  // If viewing a single policy page
  if (isIndividualPolicy && currentPolicy) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-3xl space-y-6">
          <div>
            <button
              onClick={() => onNavigate('policies')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all policies</span>
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Editorial Policy
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              {currentPolicy.title}
            </h1>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {currentPolicy.body ? (
              <div 
                className="text-sm text-slate-700 leading-relaxed space-y-4 prose-content"
                dangerouslySetInnerHTML={{ __html: currentPolicy.body }}
              />
            ) : (
              <div className="text-sm text-slate-700 space-y-3">
                <p>{currentPolicy.summary}</p>
                {currentPolicy.link && (
                  <button
                    onClick={() => onNavigate(currentPolicy.link?.replace('#/', '') as PageId)}
                    className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs hover:underline"
                  >
                    <span>View dedicated page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => onNavigate('policies')}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
              >
                ← Back to all policies
              </button>
              <span className="text-xs text-slate-400">COPE Core Practices Aligned</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, render Policies Hub
  const filteredPolicies = POLICIES.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Integrity & Governance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-3 tracking-tight">
            Policies
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Full policy text is published on a dedicated page for each policy. Summaries:
          </p>
        </div>

        {/* Search / Filter Filter */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policies (e.g. peer review, AI, copyright, waivers, retractions)..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
          />
        </div>

        {/* Policy list */}
        <div className="space-y-3">
          {filteredPolicies.map((p) => {
            const isOpen = openPolicyId === p.id;
            const fullLink = p.link ? p.link.replace('#/', '') as PageId : (`policy-${p.id}` as PageId);

            return (
              <div
                key={p.id}
                className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenPolicyId(isOpen ? null : p.id)}
                  className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-serif font-semibold text-base text-slate-900">
                      {p.title}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    {isOpen ? 'Collapse' : 'Expand'}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-3 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p.summary}
                    </p>
                    <div>
                      <button
                        onClick={() => onNavigate(fullLink)}
                        className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Read the full {p.title.toLowerCase()} policy</span> →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
