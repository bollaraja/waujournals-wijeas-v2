import React from 'react';
import { PageId } from '../types';
import { Sidebar } from '../components/Sidebar';
import { Target, Compass, Sparkles, CheckCircle2, ShieldCheck, Building } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8 prose-content">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              Journal Profile
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
              About the journal
            </h1>
            <p className="font-serif text-lg sm:text-xl text-slate-700 leading-relaxed">
              WIJEAS publishes original research across the engineering disciplines and the applied sciences that underpin them. It brings computing, civil, mechanical, electrical and bio-engineering work into one venue, on a single condition: every contribution must advance an engineered solution, method, system or design.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 mb-2">
                <Compass className="w-5 h-5 text-blue-600" />
                <h2 className="font-serif text-lg font-semibold text-slate-900">Vision</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be a trusted international home for engineering research that turns scientific insight into working solutions for society.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h2 className="font-serif text-lg font-semibold text-slate-900">Mission</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To publish rigorous, reproducible and application-oriented research across all branches of engineering and the applied sciences, reviewed fairly by international experts and freely available to every reader.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Goals
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>Publish four issues every year, on schedule in March, June, September and December, each with at least five peer-reviewed articles.</li>
              <li>Maintain an active editorial board of recognised scholars from several countries, every member listed with full affiliation and ORCID iD.</li>
              <li>Keep peer review fair, transparent and timely, with a first decision targeted within eight weeks.</li>
              <li>Meet in full the evaluation criteria of leading international indexing and abstracting services, and of the UGC Suggestive Parameters.</li>
              <li>Build subject editorial teams covering computing and AI, civil, mechanical, electrical and bio-engineering.</li>
              <li>Grow the share of articles that report industrial application, field validation or open datasets and code.</li>
            </ol>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Core values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-sm text-slate-900 mb-1">Integrity</h3>
                <p className="text-xs text-slate-600">Honest, ethical research and publishing at every stage.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-sm text-slate-900 mb-1">Rigour</h3>
                <p className="text-xs text-slate-600">Decisions based on sound method and evidence.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-sm text-slate-900 mb-1">Openness</h3>
                <p className="text-xs text-slate-600">Free access to knowledge for every reader, everywhere.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-sm text-slate-900 mb-1">Fairness</h3>
                <p className="text-xs text-slate-600">Impartial review, independent of fees, affiliation or nationality.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 sm:col-span-2">
                <h3 className="font-bold text-sm text-slate-900 mb-1">Inclusion</h3>
                <p className="text-xs text-slate-600">A platform for researchers of every country, institution and career stage.</p>
              </div>
            </div>
          </div>

          {/* Readership */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h2 className="font-serif text-xl font-semibold text-slate-900 mb-2">
              Readership
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Researchers, faculty and doctoral scholars in engineering and the applied sciences, industrial R&D teams, and technology practitioners.
            </p>
          </div>

          {/* What distinguishes the journal */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              What distinguishes the journal
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>A clearly bounded scope: the journal publishes only research within its stated aims and declines work that belongs elsewhere, so readers and authors know exactly what it stands for.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Double-anonymous peer review by at least two independent experts, with editorial decisions made on scholarly merit alone.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Full open access under CC BY 4.0 at no cost to readers, with authors retaining copyright.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Adherence to COPE Core Practices, discipline-specific reporting standards and transparent policies on ethics, data and generative AI.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span>Permanent identifiers and preservation: Crossref DOIs for every article, ORCID iDs for authors, and long-term digital archiving.</span>
              </li>
            </ul>
          </div>

          {/* Ownership and management */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Ownership and management
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              The journal is owned and published by We Avec U (WAU) Group (<span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono">registered legal entity name and registration number</span>), <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono">registered postal address</span>, India. The journal is managed by the Managing Editor under the direction of the Editor-in-Chief. Editorial decisions rest with the Editor-in-Chief and the editorial board, independently of the publisher and of any fee paid.
            </p>
          </div>

          {/* Sources of revenue */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h2 className="font-serif text-xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
              Sources of revenue
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              The journal is funded by <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono">article processing charges (if any) and</span> institutional support from the publisher <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-mono">and any sponsorship</span>. No source of revenue has any influence on editorial decisions.
            </p>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <Sidebar onNavigate={onNavigate} variant="about" />
        </div>
      </div>
    </div>
  );
};
