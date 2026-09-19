import React from 'react';
import { PageId } from '../types';
import { JOURNAL_META } from '../data/journalData';
import { ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0D1826] text-slate-300 border-t border-slate-800 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80">
          {/* Main publication info */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-900/60 text-blue-300 border border-blue-700/50 text-xs font-bold rounded">
                {JOURNAL_META.shortTitle}
              </span>
              <span className="text-xs text-slate-400 font-medium">Open Access Quarterly Journal</span>
            </div>

            <h2 className="font-serif text-lg sm:text-xl font-medium text-white leading-snug">
              {JOURNAL_META.title}
            </h2>

            <p className="text-xs text-slate-400 leading-relaxed">
              ISSN <span className="text-amber-300 bg-amber-950/60 px-1 py-0.5 rounded font-mono">shown once assigned</span> (online). Quarterly. Open access under Creative Commons Attribution 4.0 International (CC BY 4.0).
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p className="font-medium text-slate-300">{JOURNAL_META.publisher}</p>
              <p><span className="text-amber-300/80 bg-amber-950/40 px-1 py-0.5 rounded">Registered postal address</span>, India</p>
              <p>Email: <span className="text-blue-300">{JOURNAL_META.email}</span></p>
              <p>Website: <span className="text-slate-300">{JOURNAL_META.website}</span></p>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-md border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Policies follow COPE Core Practices and are designed in line with the UGC Suggestive Parameters for peer-reviewed journals.</span>
            </div>
          </div>

          {/* Column 2: Journal links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Journal Information
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About the Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('scope')} className="hover:text-white transition-colors cursor-pointer">
                  Aims and Scope
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('board')} className="hover:text-white transition-colors cursor-pointer">
                  Editorial Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('standards')} className="hover:text-white transition-colors cursor-pointer">
                  Standards and Best Practice
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('indexing')} className="hover:text-white transition-colors cursor-pointer">
                  Indexing & Abstracting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('frequency')} className="hover:text-white transition-colors cursor-pointer">
                  Publication Frequency
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Editorial Office
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Authors & Reviewers */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Authors & Reviewers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <button onClick={() => onNavigate('authors')} className="text-left hover:text-white transition-colors cursor-pointer">
                Author Guidelines
              </button>
              <button onClick={() => onNavigate('submission')} className="text-left hover:text-white transition-colors cursor-pointer">
                Submission Process
              </button>
              <button onClick={() => onNavigate('apc')} className="text-left hover:text-white transition-colors cursor-pointer">
                Article Processing Charges
              </button>
              <button onClick={() => onNavigate('cfp')} className="text-left hover:text-white transition-colors cursor-pointer">
                Call for Papers
              </button>
              <button onClick={() => onNavigate('reviewers')} className="text-left hover:text-white transition-colors cursor-pointer">
                Reviewer Guidelines
              </button>
              <button onClick={() => onNavigate('policies')} className="text-left hover:text-white transition-colors cursor-pointer">
                Journal Policies Hub
              </button>
              <button onClick={() => onNavigate('current')} className="text-left hover:text-white transition-colors cursor-pointer">
                Current Issue
              </button>
              <button onClick={() => onNavigate('past')} className="text-left hover:text-white transition-colors cursor-pointer">
                Past Issues
              </button>
              <button onClick={() => onNavigate('article')} className="text-left hover:text-white transition-colors cursor-pointer">
                Sample Article Page
              </button>
              <button onClick={() => onNavigate('policy-privacy')} className="text-left hover:text-white transition-colors cursor-pointer">
                Privacy Statement
              </button>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('submission')}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium transition-colors"
              >
                Submit Your Manuscript
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} We Avec U (WAU) Group. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Published under CC BY 4.0 Open Access</span>
            <span>•</span>
            <button onClick={() => onNavigate('policy-copyright')} className="hover:text-slate-400 underline">
              Copyright Terms
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
