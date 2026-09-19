import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, UserCheck, Award, Lock, CheckCircle2 } from 'lucide-react';

interface ReviewersPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewersPage: React.FC<ReviewersPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Peer Review Community
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Reviewer guidelines
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Peer reviewers are central to the quality of the journal. We are grateful to every reviewer who gives their time and expertise.
          </p>
        </div>

        {/* Before accepting an invitation */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Before accepting an invitation
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Accept only if the manuscript is within your expertise and you can report within 21 days.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Decline if you have a competing interest, including recent collaboration with, or supervision of, any author, or a direct commercial interest.</span>
            </li>
          </ul>
        </div>

        {/* Writing the review */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Writing the review
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Summarise the manuscript and its main contribution.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Assess originality, significance, methodological rigour, adherence to reporting standards, ethics, interpretation of results and clarity.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Separate major concerns from minor points, and make specific, constructive suggestions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Give separate confidential comments to the editor where needed, and a recommendation: accept, minor revision, major revision or reject.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
              <span>Write courteously. Personal remarks are not acceptable.</span>
            </li>
          </ul>
        </div>

        {/* Confidentiality */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-700" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Confidentiality
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Manuscripts are confidential. Do not share them, contact the authors, use unpublished findings, or upload manuscripts or reports to generative AI tools.
          </p>
        </div>

        {/* Recognition */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-700" />
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Recognition
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Reviewers may receive a review certificate and may record verified reviews on ORCID. The journal publishes an annual list thanking its reviewers. Reviewers can register at{' '}
            <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs font-semibold">
              https://wijeas.in/reviewer-registration
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
};
