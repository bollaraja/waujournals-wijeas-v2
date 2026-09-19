import React from 'react';
import { PageId } from '../types';
import { JOURNAL_META } from '../data/journalData';
import { 
  Send, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Award, 
  UserCheck, 
  FileText,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: PageId) => void;
  variant?: 'general' | 'authors' | 'about';
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, variant = 'general' }) => {
  return (
    <aside className="w-full space-y-5">
      {/* Submit Your Research Card */}
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-blue-900">
          <Send className="w-4 h-4 text-blue-600" />
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900">
            Submit your research
          </h2>
        </div>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Submissions are open all year. Read the author guidelines, then submit through the online system.
        </p>
        <div className="space-y-2">
          <button
            onClick={() => onNavigate('submission')}
            className="w-full py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit manuscript</span>
          </button>
          <button
            onClick={() => onNavigate('authors')}
            className="w-full py-2 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Author guidelines</span>
          </button>
        </div>
      </div>

      {/* Journal at a Glance Table */}
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
        <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>Journal at a glance</span>
          <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase">WIJEAS</span>
        </h2>
        <div className="text-xs">
          <dl className="divide-y divide-slate-100">
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">Publisher</dt>
              <dd className="text-slate-800 font-medium text-right">{JOURNAL_META.publisher}</dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">Frequency</dt>
              <dd className="text-slate-800 text-right">{JOURNAL_META.frequency}</dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">Peer review</dt>
              <dd className="text-slate-800 text-right">Double-anonymous, 2+ reviewers</dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">First decision</dt>
              <dd className="text-slate-800 font-semibold text-emerald-700 text-right">{JOURNAL_META.firstDecisionTarget}</dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">Access</dt>
              <dd className="text-slate-800 text-right font-medium text-blue-700">Open access, CC BY 4.0</dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">DOI</dt>
              <dd className="text-slate-800 text-right">Crossref <span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded text-[11px]">prefix</span></dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">Editor-in-Chief</dt>
              <dd className="text-slate-800 text-right"><span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded text-[11px]">name, affiliation, country</span></dd>
            </div>
            <div className="py-2 flex justify-between gap-2">
              <dt className="text-slate-500 font-medium shrink-0">First issue</dt>
              <dd className="text-slate-800 text-right"><span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded text-[11px]">Volume 1, Issue 1, month year</span></dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Author / Specific Panels based on variant */}
      {variant === 'authors' ? (
        <>
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Charges
            </h2>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              No submission or review fees. A charge applies only after acceptance, with waivers available.
            </p>
            <button
              onClick={() => onNavigate('apc')}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
            >
              <span>Article processing charges</span> →
            </button>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              More for authors
            </h2>
            <ul className="space-y-2 text-xs text-slate-700">
              <li>
                <button onClick={() => onNavigate('why-publish')} className="text-blue-700 hover:underline text-left cursor-pointer">
                  • Why publish with us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('submission')} className="text-blue-700 hover:underline text-left cursor-pointer">
                  • Submission process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cfp')} className="text-blue-700 hover:underline text-left cursor-pointer">
                  • Call for papers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('special-issues')} className="text-blue-700 hover:underline text-left cursor-pointer">
                  • Special issues and conference papers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviewers')} className="text-blue-700 hover:underline text-left cursor-pointer">
                  • Reviewer guidelines
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : variant === 'about' ? (
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            Standards & Indexing
          </h2>
          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            COPE Core Practices; Principles of Transparency and Best Practice in Scholarly Publishing; CC BY 4.0; Crossref DOIs; ORCID; CRediT.
          </p>
          <ul className="space-y-2 text-xs text-blue-700">
            <li>
              <button onClick={() => onNavigate('standards')} className="hover:underline text-left cursor-pointer">
                → Standards and best practice
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('indexing')} className="hover:underline text-left cursor-pointer">
                → Indexing and abstracting
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('frequency')} className="hover:underline text-left cursor-pointer">
                → Publication frequency
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          {/* Call for Papers Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Call for papers</span>
            </h2>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              We welcome original research, reviews and short communications for the next quarterly issue. Submissions are accepted throughout the year.
            </p>
            <button
              onClick={() => onNavigate('cfp')}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
            >
              <span>Read the call for papers</span> →
            </button>
          </div>

          {/* Join as Reviewer Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>Join as a reviewer</span>
            </h2>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Researchers in engineering and the applied sciences can register to review. Verified reviews can be recorded on ORCID.
            </p>
            <button
              onClick={() => onNavigate('reviewers')}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
            >
              <span>Reviewer guidelines</span> →
            </button>
          </div>
        </>
      )}
    </aside>
  );
};
