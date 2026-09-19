import React from 'react';
import { PageId } from '../types';
import { EDITORIAL_BOARD_MEMBERS, SCOPE_AREAS } from '../data/journalData';
import { ShieldCheck, User, Mail, ExternalLink, CheckCircle } from 'lucide-react';

interface EditorialBoardPageProps {
  onNavigate: (page: PageId) => void;
}

export const EditorialBoardPage: React.FC<EditorialBoardPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl space-y-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Governance & Leadership
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Editorial board
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            The editorial board is responsible for the scholarly quality and integrity of the journal. Members are appointed for renewable terms of three years on the basis of their research standing in the field. Every member is listed with full name, institutional affiliation, country and ORCID iD, and has consented to appointment.
          </p>
        </div>

        {/* Editor-in-Chief */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              Editor-in-Chief
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-blue-200 shadow-xs p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-700" />
            <div className="sm:flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Editor-in-Chief
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-sm">Full name, degree</span>
                </h3>
                <p className="text-sm text-slate-600">
                  <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded text-xs font-mono">Institution, country</span>
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                  <span className="flex items-center gap-1 font-mono">
                    <strong className="text-emerald-700">ORCID:</strong>
                    <span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded">ORCID iD</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded">Institutional email</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Associate Editors */}
        <section className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              Associate editors
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              One Associate Editor is appointed for each scope area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCOPE_AREAS.map((scope, idx) => (
              <div
                key={scope.id}
                className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <span className="text-[11px] font-semibold text-blue-800 bg-blue-50/80 px-2 py-0.5 rounded block mb-2 truncate">
                  Associate Editor, {scope.title}
                </span>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                  <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Full name</span>
                </h4>
                <p className="text-xs text-slate-600 mb-2">
                  <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">Institution, country</span>
                </p>
                <div className="text-[11px] text-slate-500 font-mono">
                  ORCID: <span className="bg-amber-50 text-amber-800 px-1 py-0.2 rounded">ORCID iD</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Board Members */}
        <section className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              Editorial board members
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Listed alphabetically by surname.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs"
              >
                <span className="text-[11px] font-medium text-slate-500 block mb-1.5">
                  Editorial Board Member
                </span>
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Full name</span>
                </h4>
                <p className="text-xs text-slate-600 mb-2">
                  <span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded font-mono text-[11px]">Institution, country</span>
                </p>
                <div className="text-[11px] text-slate-500 font-mono">
                  ORCID: <span className="bg-amber-50 text-amber-800 px-1 py-0.2 rounded">ORCID iD</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International Advisory Board */}
        <section className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              International advisory board
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs"
              >
                <span className="text-[11px] font-medium text-slate-500 block mb-1.5">
                  International Advisory Board
                </span>
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Full name</span>
                </h4>
                <p className="text-xs text-slate-600 mb-2">
                  <span className="bg-amber-50 text-amber-800 px-1 py-0.5 rounded font-mono text-[11px]">Institution, country</span>
                </p>
                <div className="text-[11px] text-slate-500 font-mono">
                  ORCID: <span className="bg-amber-50 text-amber-800 px-1 py-0.2 rounded">ORCID iD</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Managing Editor */}
        <section className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
              Managing editor
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs max-w-md">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Managing Editor
            </span>
            <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
              <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono text-xs">Full name</span>
            </h4>
            <p className="text-xs text-slate-700 font-medium mb-1.5">
              We Avec U (WAU) Group
            </p>
            <div className="text-xs text-slate-500">
              Email: <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-mono text-[11px]">Email</span>
            </div>
          </div>
        </section>

        {/* Board Composition Policy */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 pb-2 border-b border-slate-100">
            Board composition policy
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>The board draws members from several countries and institutions. No single institution, including the publisher, will account for more than a small minority of the board.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Every member is listed with full name, institutional affiliation, country and ORCID iD, and has consented to appointment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Members are expected to handle manuscripts, review in their field and advise on journal strategy. Inactive members are replaced at the annual board review.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
              <span>Articles authored by editorial board members, including the Editor-in-Chief, are handled entirely by an independent editor with no conflict of interest, and such articles will not exceed 10% of the content of any volume.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
