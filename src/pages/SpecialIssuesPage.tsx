import React from 'react';
import { PageId } from '../types';
import { Layers, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';

interface SpecialIssuesPageProps {
  onNavigate: (page: PageId) => void;
}

export const SpecialIssuesPage: React.FC<SpecialIssuesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Thematic Collections
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Special issues and conference papers
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Special issues bring together high-quality research on a focused theme within the journal's scope. They follow exactly the same peer review and ethics standards as regular issues.
          </p>
        </div>

        {/* Proposing a Special Issue */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Proposing a special issue
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Proposals are submitted to the Editor-in-Chief with the theme, rationale, relevance to scope, proposed guest editors with affiliations and ORCID iDs, and a timeline.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Guest editors must hold a doctorate or equivalent standing in the field and have a verifiable publication record. Their credentials and competing interests are checked before approval.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>The journal normally publishes no more than one special issue per volume, and special issue articles are assigned to regular quarterly issues.</span>
            </li>
          </ul>
        </div>

        {/* Peer Review of Special Issue Papers */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Peer review of special issue papers
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Every paper is double-anonymous peer reviewed by at least two independent reviewers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Final acceptance decisions are approved by the Editor-in-Chief or a designated regular editor, not by guest editors alone.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Papers authored by a guest editor are handled entirely by a regular editor, and guest editors may author no more than one article in their special issue.</span>
            </li>
          </ul>
        </div>

        {/* Papers from Conferences */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Papers from conferences
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Papers first presented at a conference, including conferences organised by the publisher, are considered only as full, substantially extended manuscripts. They must add significant new content, analysis or results beyond the conference version, disclose the earlier presentation, and undergo full peer review. Presentation at a conference never guarantees acceptance.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            Contact the Editorial Office with a Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
