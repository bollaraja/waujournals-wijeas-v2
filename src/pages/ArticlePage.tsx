import React, { useState } from 'react';
import { PageId } from '../types';
import { CitationModal } from '../components/CitationModal';
import { 
  Download, 
  BookOpen, 
  Quote, 
  Share2, 
  Calendar, 
  CheckCircle, 
  FileText, 
  ExternalLink,
  ShieldAlert,
  Info
} from 'lucide-react';

interface ArticlePageProps {
  onNavigate: (page: PageId) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ onNavigate }) => {
  const [citationModalOpen, setCitationModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Article Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Research Article
            </span>
            <span className="text-xs text-slate-500">
              Sample layout for every article page
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xl sm:text-2xl font-bold">
              Article title
            </span>
          </h1>

          {/* Authors and affiliations */}
          <div className="space-y-1.5 pt-1">
            <div className="text-sm font-medium text-slate-800 flex flex-wrap items-center gap-2">
              <span className="bg-amber-50 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Author One</span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-1 rounded font-mono">ORCID</span>
              <span>,</span>
              <span className="bg-amber-50 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Author Two</span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-1 rounded font-mono">ORCID</span>
            </div>
            <p className="text-xs text-slate-500">
              <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">
                Department, institution, city, country
              </span>
            </p>
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-200 text-xs">
            <div className="pr-2 border-r border-slate-100">
              <dt className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Received</dt>
              <dd className="text-slate-800 font-mono mt-0.5"><span className="bg-amber-50 text-amber-800 px-1 rounded">date</span></dd>
            </div>
            <div className="pr-2 sm:border-r border-slate-100">
              <dt className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Revised</dt>
              <dd className="text-slate-800 font-mono mt-0.5"><span className="bg-amber-50 text-amber-800 px-1 rounded">date</span></dd>
            </div>
            <div className="pr-2 border-r border-slate-100">
              <dt className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Accepted</dt>
              <dd className="text-slate-800 font-mono mt-0.5"><span className="bg-amber-50 text-amber-800 px-1 rounded">date</span></dd>
            </div>
            <div>
              <dt className="text-slate-500 font-bold uppercase tracking-wider text-[11px]">Published</dt>
              <dd className="text-slate-800 font-mono mt-0.5"><span className="bg-amber-50 text-amber-800 px-1 rounded">date</span></dd>
            </div>
          </div>

          {/* DOI and Issue info */}
          <div className="text-xs text-slate-600 space-y-1">
            <p>
              DOI:{' '}
              <span className="text-blue-700 font-mono bg-blue-50 px-1.5 py-0.5 rounded">
                https://doi.org/10.xxxx/wijeas.xxxx
              </span>
            </p>
            <p>
              Volume <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono">X</span>, Issue{' '}
              <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono">Y</span>. Licence: CC BY 4.0
            </p>
          </div>

          {/* Abstract */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Abstract
            </h2>
            <div className="font-serif text-sm sm:text-base text-slate-700 leading-relaxed italic bg-slate-50/70 p-4 rounded-lg border border-slate-200/80">
              <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs not-italic">
                Structured abstract: Purpose; Methods or Approach; Findings; Conclusions or Implications. Up to 250 words.
              </span>
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Keywords
            </h2>
            <p className="text-sm text-slate-700">
              <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">
                four to six keywords
              </span>
            </p>
          </div>

          {/* Declarations */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Declarations
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 font-semibold shrink-0">Funding:</strong>
                <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono text-xs">funder and grant number</span>
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 font-semibold shrink-0">Competing interests:</strong>
                <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono text-xs">statement</span>
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 font-semibold shrink-0">Author contributions (CRediT):</strong>
                <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono text-xs">statement</span>
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 font-semibold shrink-0">Ethics approval:</strong>
                <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono text-xs">committee and reference</span>
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-slate-900 font-semibold shrink-0">Data availability:</strong>
                <span className="bg-amber-50 text-amber-800 px-1 rounded font-mono text-xs">repository and identifier</span>
              </li>
            </ul>
          </div>

          {/* Required Page Metadata Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-700" />
              <h2 className="font-serif text-base font-semibold text-slate-900">
                Required page metadata
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Build note for SOXIT: every article page carries Google Scholar citation meta tags in the page head — citation_title, citation_author (one per author, each followed by citation_author_institution and citation_author_orcid), citation_publication_date, citation_journal_title, citation_issn, citation_volume, citation_issue, citation_firstpage, citation_lastpage, citation_doi, citation_pdf_url, citation_abstract_html_url, citation_publisher, citation_keywords, citation_language. The PDF must be publicly accessible without login.
            </p>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="lg:col-span-4 space-y-5">
          {/* Read Panel */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100">
              Read
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => alert('Sample article PDF download demonstration.')}
                className="w-full py-2.5 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => alert('Full text HTML reading view.')}
                className="w-full py-2 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span>Read full text (HTML)</span>
              </button>
            </div>
          </div>

          {/* Cite this article Panel */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>Cite this article</span>
              <Quote className="w-4 h-4 text-blue-600" />
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Citation in IEEE reference style (numbered, in order of citation), with export to RIS and BibTeX.
            </p>
            <button
              onClick={() => setCitationModalOpen(true)}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Quote className="w-3.5 h-3.5 text-slate-600" />
              <span>Get Citations (IEEE, BibTeX, RIS)</span>
            </button>
          </div>
        </div>
      </div>

      <CitationModal
        isOpen={citationModalOpen}
        onClose={() => setCitationModalOpen(false)}
      />
    </div>
  );
};
