import React, { useState } from 'react';
import { PageId } from '../types';
import { SCOPE_AREAS, KEYWORDS } from '../data/journalData';
import { 
  Cpu, 
  Building2, 
  Wrench, 
  Zap, 
  Dna, 
  Binary, 
  CheckCircle, 
  XCircle, 
  Send, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface ScopePageProps {
  onNavigate: (page: PageId) => void;
}

export const ScopePage: React.FC<ScopePageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const iconMap: Record<string, any> = {
    Cpu,
    Building2,
    Wrench,
    Zap,
    Dna,
    Binary,
  };

  const filteredScopes = selectedTag
    ? SCOPE_AREAS.filter(
        (s) =>
          s.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
          s.description.toLowerCase().includes(selectedTag.toLowerCase())
      )
    : SCOPE_AREAS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Editorial Framework
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Aims and scope
          </h1>
          <p className="font-serif text-lg sm:text-xl text-slate-700 leading-relaxed">
            WAU International Journal of Engineering and Applied Sciences publishes original research in engineering and the applied sciences.
          </p>
        </div>

        {/* Aims */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Aims
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Publish rigorous, reproducible engineering research that advances methods, systems and applications.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Provide a single, credible venue for work that crosses engineering branches, such as AI in structural monitoring or energy systems for medical devices.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Connect academic research with industrial practice through application-focused articles, case studies and technical notes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Hold every article to international standards of peer review, reporting and research integrity, whatever the author's country or career stage.</span>
            </li>
          </ul>
        </div>

        {/* Scope Areas */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                Scope
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                The journal welcomes submissions in the following areas. Each area is handled by its own Associate Editor.
              </p>
            </div>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-xs text-blue-700 hover:text-blue-900 underline self-start sm:self-auto"
              >
                Clear filter ({selectedTag})
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredScopes.map((scope, idx) => {
              const IconComp = iconMap[scope.iconName || 'Cpu'] || Cpu;
              return (
                <div
                  key={scope.id}
                  className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-slate-900">
                        {scope.title}
                      </h3>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        Area {idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {scope.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Out of Scope */}
        <div className="bg-red-50/40 border border-red-200 rounded-xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-red-900">
            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
            <h2 className="font-serif text-lg sm:text-xl font-semibold text-slate-900">
              Out of scope
            </h2>
          </div>
          <p className="text-sm text-slate-700">
            To keep the scope clear and to direct each manuscript to the most suitable venue, the journal does not consider:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>Purely theoretical science with no engineering realisation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>Security, cryptography and digital forensics research, which is directed to WAU International Journal of Cyber Security, Cyber Crime and Cyber Psychology.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>Health technology where the contribution is clinical rather than engineering, which is directed to WAU International Journal of Health and Medical Sciences.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 italic pt-1">
            Manuscripts outside the scope are returned at initial screening, usually within 7 days, without peer review, so that authors can submit elsewhere promptly.
          </p>
        </div>

        {/* Keywords */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600" />
            <h2 className="font-serif text-lg font-semibold text-slate-900">
              Keywords
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {KEYWORDS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Action Bottom */}
        <div className="p-6 bg-blue-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-medium">Ready to submit your engineering research?</h3>
            <p className="text-xs text-blue-200 mt-0.5">Submissions within scope are screened within 7 days.</p>
          </div>
          <button
            onClick={() => onNavigate('submission')}
            className="px-4 py-2 bg-white text-blue-900 hover:bg-blue-50 font-semibold text-xs rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Manuscript</span>
          </button>
        </div>
      </div>
    </div>
  );
};
