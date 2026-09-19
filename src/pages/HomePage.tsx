import React from 'react';
import { PageId } from '../types';
import { SCOPE_AREAS, WHY_PUBLISH_BENEFITS, JOURNAL_META } from '../data/journalData';
import { Sidebar } from '../components/Sidebar';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Award, 
  FileCheck, 
  Users, 
  CheckCircle2, 
  Archive,
  BookOpen,
  FileText,
  Send,
  Layers,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, any> = {
    ShieldCheck,
    Clock,
    Globe,
    Award,
    FileCheck,
    Users,
    CheckCircle2,
    Archive,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Lead Intro Box */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-700" />
            
            <p className="font-serif text-lg sm:text-xl text-slate-800 leading-relaxed mb-4 font-normal">
              WIJEAS publishes original research across the engineering disciplines and the applied sciences that underpin them. It brings computing, civil, mechanical, electrical and bio-engineering work into one venue, on a single condition: every contribution must advance an engineered solution, method, system or design.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              WAU International Journal of Engineering and Applied Sciences is an open access, peer-reviewed quarterly journal published by We Avec U (WAU) Group. Every article is free to read, download and reuse under a Creative Commons Attribution 4.0 International licence.
            </p>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('submission')}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Manuscript</span>
              </button>
              <button
                onClick={() => onNavigate('scope')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Explore Aims & Scope</span>
              </button>
            </div>
          </div>

          {/* Why Publish With Us Section */}
          <div>
            <div className="flex items-center justify-between mb-5 border-b border-slate-200 pb-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900 tracking-tight">
                  Why publish with us
                </h2>
                <p className="text-xs text-slate-500 mt-1">Author-centric publishing values aligned with international rigor</p>
              </div>
              <button
                onClick={() => onNavigate('why-publish')}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Read detailed criteria</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_PUBLISH_BENEFITS.map((benefit, idx) => {
                const IconComponent = iconMap[benefit.icon] || CheckCircle2;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-lg border border-slate-200 shadow-xs hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-md bg-blue-50 text-blue-700 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans font-bold text-sm text-slate-900 leading-snug">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What We Publish (Scope Areas) */}
          <div>
            <div className="flex items-center justify-between mb-5 border-b border-slate-200 pb-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900 tracking-tight">
                  What we publish
                </h2>
                <p className="text-xs text-slate-500 mt-1">Six specialized engineering and applied scientific domains</p>
              </div>
              <button
                onClick={() => onNavigate('scope')}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Read the full aims and scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3.5">
              {SCOPE_AREAS.map((scope, idx) => (
                <div
                  key={scope.id}
                  className="p-4 sm:p-5 bg-white rounded-lg border-l-4 border-l-blue-700 border-y border-r border-slate-200 shadow-xs hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-base sm:text-lg font-medium text-slate-900">
                      {scope.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 font-medium shrink-0">
                      Area {idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {scope.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                onClick={() => onNavigate('scope')}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
              >
                <span>Read the full aims and scope</span> →
              </button>
            </div>
          </div>

          {/* Current Issue Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate-900 tracking-tight">
                  Current issue
                </h2>
                <p className="text-xs text-slate-500 mt-1">Scheduled inaugural volume release</p>
              </div>
              <button
                onClick={() => onNavigate('past')}
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Browse past issues</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-xl border border-dashed border-slate-300 p-6 sm:p-8 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-medium text-slate-900">
                Volume 1, Issue 1
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Volume 1, Issue 1 will appear here with its table of contents. Accepted articles are published online first under Articles in press.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => onNavigate('article')}
                  className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>See the sample article page</span>
                </button>
                <button
                  onClick={() => onNavigate('past')}
                  className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Browse past issues
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <Sidebar onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
};
