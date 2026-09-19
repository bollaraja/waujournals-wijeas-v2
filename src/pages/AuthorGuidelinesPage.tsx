import React from 'react';
import { PageId } from '../types';
import { Sidebar } from '../components/Sidebar';
import { ARTICLE_TYPES } from '../data/journalData';
import { 
  FileText, 
  CheckSquare, 
  Send, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle,
  Table
} from 'lucide-react';

interface AuthorGuidelinesPageProps {
  onNavigate: (page: PageId) => void;
}

export const AuthorGuidelinesPage: React.FC<AuthorGuidelinesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              Instructions for Authors
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
              Author guidelines
            </h1>
            <p className="font-serif text-lg text-slate-700 leading-relaxed">
              Complete instructions for preparing, structuring, and submitting original manuscripts for double-anonymous peer review.
            </p>
          </div>

          {/* Before You Submit */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Before you submit
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Confirm that the manuscript fits the <button onClick={() => onNavigate('scope')} className="text-blue-700 hover:underline font-medium">aims and scope</button>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Confirm that it is original, not published and not under consideration elsewhere.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Obtain ethics approval and consent where required, and prepare the relevant reporting checklist.</span>
              </li>
            </ul>
          </div>

          {/* Manuscript Preparation */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Manuscript preparation
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <strong className="text-slate-900 font-semibold">Language.</strong> English, in clear academic style. Authors may use professional language editing; this does not guarantee acceptance.
              </li>
              <li>
                <strong className="text-slate-900 font-semibold">File format.</strong> Microsoft Word (.docx) or LaTeX, with figures in high resolution (at least 300 dpi).
              </li>
              <li>
                <strong className="text-slate-900 font-semibold">Anonymisation.</strong> Submit a separate title page. Remove author names, affiliations, acknowledgements and self-identifying references from the anonymised manuscript.
              </li>
            </ul>

            {/* Title Page Subsection */}
            <div className="pt-3 border-t border-slate-100">
              <h3 className="font-serif text-lg font-semibold text-slate-900 mb-2">
                Title page (separate file)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>Concise, informative title (up to 20 words).</li>
                <li>Full names, affiliations, countries, emails and ORCID iDs of all authors.</li>
                <li>Corresponding author details.</li>
                <li>Affiliations in full: department, institution, city and country for every author. Authors without an institutional affiliation should state "Independent Researcher" with city and country.</li>
                <li>Funding: the name of each funder and the grant or award number, or the statement that the research received no specific grant from any funding agency.</li>
                <li>Funding statement, competing interests statement, CRediT author contributions, acknowledgements, ethics statement and data availability statement.</li>
              </ul>
            </div>

            {/* Anonymised Manuscript Subsection */}
            <div className="pt-3 border-t border-slate-100">
              <h3 className="font-serif text-lg font-semibold text-slate-900 mb-2">
                Anonymised manuscript
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong className="text-slate-900 font-semibold">Abstract.</strong> Up to 250 words. Research articles use a structured abstract: Background or Purpose; Methods or Approach; Findings; Conclusions or Implications. The abstract must stand alone and contain no citations.
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">Keywords.</strong> Four to six keywords that do not repeat the title.
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">Main text.</strong> Introduction; Literature Review (where appropriate); Methods; Results; Discussion; Limitations; Conclusion. Theoretical articles may use a structure suited to the argument.
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">Tables and figures.</strong> Numbered consecutively, cited in the text, with self-explanatory titles and legends.
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">References.</strong> IEEE reference style (numbered, in order of citation). Every in-text citation must appear in the reference list and every reference must be cited. Include DOIs for all references that have them. Cite primary, peer-reviewed sources wherever possible.
                </li>
              </ul>
            </div>
          </div>

          {/* Article Types Table */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                Article types
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Word limits exclude the title page, abstract, references, tables and figure legends. The editors may allow longer articles where justified.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="py-2.5 pr-4 font-semibold">Article Type</th>
                    <th className="py-2.5 pr-4 font-semibold">Description & Scope</th>
                    <th className="py-2.5 font-semibold">Word Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ARTICLE_TYPES.map((art, i) => (
                    <tr key={i} className="hover:bg-slate-50/70">
                      <td className="py-3 pr-4 font-semibold text-slate-900 whitespace-nowrap">
                        {art.type}
                      </td>
                      <td className="py-3 pr-4 text-slate-600">
                        {art.description}
                      </td>
                      <td className="py-3 text-slate-700 whitespace-nowrap font-medium">
                        {art.wordLimit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 italic">
              All article types except Editorials are peer reviewed. Every article type is published under the same open access licence and receives a DOI.
            </p>
          </div>

          {/* Reporting Standards */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Reporting standards
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>Describe the experimental set-up, materials, parameters, instrumentation and measurement uncertainty in sufficient detail for replication.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>Benchmark proposed methods against established baselines using standard datasets or test conditions, and report statistical variation across repeated runs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>For machine learning work, state dataset provenance and licence, train, validation and test splits, hyperparameters, compute resources and evaluation protocol.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>Provide a code and data availability statement; deposit code in a public repository (for example GitHub with a Zenodo DOI) wherever possible.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>Report units in SI and follow relevant national or international standards (for example BIS, IEC, ISO, ASTM) where they apply.</span>
              </li>
            </ul>
          </div>

          {/* How Review Works */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              How review works
            </h2>
            <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>Screening for scope, completeness, similarity and ethics, usually within 7 days.</li>
              <li>Assignment to the Associate Editor for the scope area.</li>
              <li>Double-anonymous review by at least two independent experts.</li>
              <li>Decision: accept, minor revision, major revision or reject. First decision targeted within 8 weeks.</li>
              <li>Copyediting, author proofs and online publication with a DOI.</li>
            </ol>
            <p className="text-xs text-slate-500 italic pt-1">
              These are targets, not guarantees. The journal never shortens review to meet a timeline.
            </p>
          </div>

          {/* Submission Checklist */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-700" />
              <h2 className="font-serif text-xl font-semibold text-slate-900">
                Submission checklist
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {[
                'Manuscript is within scope and within the word limit for its article type.',
                'Title page and anonymised manuscript are prepared as separate files.',
                'Structured abstract and keywords are included.',
                'Ethics approval, consent and any trial registration are stated.',
                'Reporting guideline checklist is attached where applicable.',
                'Funding, competing interests, CRediT contributions and data availability statements are complete.',
                'References follow the journal style and include DOIs.',
                'Permissions for third-party material have been obtained.',
                'Any use of generative AI is disclosed.',
                'A cover letter explains the contribution and confirms originality.',
              ].map((check, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded border border-blue-500 flex items-center justify-center text-blue-700 shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <Sidebar onNavigate={onNavigate} variant="authors" />
        </div>
      </div>
    </div>
  );
};
