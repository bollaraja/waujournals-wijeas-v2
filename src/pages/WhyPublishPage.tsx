import React from 'react';
import { PageId } from '../types';
import { WHY_PUBLISH_BENEFITS } from '../data/journalData';
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  Award, 
  FileCheck, 
  Users, 
  CheckCircle2, 
  Archive,
  Send,
  BookOpen
} from 'lucide-react';

interface WhyPublishPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyPublishPage: React.FC<WhyPublishPageProps> = ({ onNavigate }) => {
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
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Author Advantages
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Why publish with us
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Discover the foundational principles and author protections built into every stage of the WIJEAS publication lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {WHY_PUBLISH_BENEFITS.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-serif font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                      {benefit.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bottom */}
        <div className="p-6 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-medium">Ready to submit your manuscript?</h3>
            <p className="text-xs text-slate-300 mt-0.5">Benefit from double-anonymous review and global open access distribution.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('submission')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Manuscript</span>
            </button>
            <button
              onClick={() => onNavigate('authors')}
              className="px-4 py-2 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Author Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
