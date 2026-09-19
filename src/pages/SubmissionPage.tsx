import React from 'react';
import { PageId } from '../types';
import { JOURNAL_META } from '../data/journalData';
import { Send, BookOpen, AlertCircle, CheckCircle, FileUp, Key, UserCheck, Search } from 'lucide-react';

interface SubmissionPageProps {
  onNavigate: (page: PageId) => void;
}

export const SubmissionPage: React.FC<SubmissionPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '1',
      title: 'Register or log in',
      desc: (
        <span>
          Access the submission portal at{' '}
          <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-semibold">
            https://wijeas.in/submit
          </span>
          . New users create an author profile.
        </span>
      ),
      icon: Key,
    },
    {
      num: '2',
      title: 'Enter author & metadata details',
      desc: 'Provide complete details, institutional affiliations, and ORCID iDs for all contributing authors.',
      icon: UserCheck,
    },
    {
      num: '3',
      title: 'Upload manuscript files',
      desc: 'Upload the cover letter, separate title page, fully anonymised manuscript (.docx or LaTeX), high-resolution figures (≥300 dpi), supplementary files, and reporting checklist.',
      icon: FileUp,
    },
    {
      num: '4',
      title: 'Author declarations & submission',
      desc: 'Confirm ethics, conflict of interest, originality, and copyright declarations. An acknowledgement with a unique manuscript ID is dispatched immediately by email.',
      icon: CheckCircle,
    },
    {
      num: '5',
      title: 'Track editorial progress',
      desc: 'Monitor double-anonymous review status and reviewer feedback milestones through the live author dashboard.',
      icon: Search,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Manuscript Portal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Submission process
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Follow the 5-step protocol to submit original research, review articles, and technical notes for double-anonymous peer review.
          </p>
        </div>

        {/* Step-by-step interactive visual cards */}
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-serif font-bold text-base shrink-0">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-base sm:text-lg font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Online System Notice */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 text-xs sm:text-sm text-amber-900 space-y-2 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-950">Online Submissions Only</p>
            <p className="text-amber-800 leading-relaxed">
              Submissions are accepted only through the online system. Email submissions are not accepted except where the system is unavailable, in which case authors should contact{' '}
              <span className="bg-amber-200/80 text-amber-950 px-1 py-0.5 rounded font-mono text-xs">
                {JOURNAL_META.email}
              </span>.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('authors')}
            className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read the author guidelines first</span>
          </button>
          <button
            onClick={() => onNavigate('scope')}
            className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Verify Aims & Scope
          </button>
        </div>
      </div>
    </div>
  );
};
