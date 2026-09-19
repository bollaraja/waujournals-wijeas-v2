import React from 'react';
import { PageId } from '../types';
import { JOURNAL_META } from '../data/journalData';
import { Mail, Building, Globe, Send, MessageSquare, Info } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-3xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            Communication Directory
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 tracking-tight">
            Contact
          </h1>
          <p className="font-serif text-lg text-slate-700 leading-relaxed">
            Get in touch with the editorial board, managing team, or publisher for submission inquiries, review questions, or institutional partnerships.
          </p>
        </div>

        {/* Contact Table Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700 w-1/3">Editorial office</th>
                  <td className="py-3.5 text-blue-700 font-medium">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      editor@wijeas.in
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Editor-in-Chief</th>
                  <td className="py-3.5 text-slate-800">
                    <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-mono text-xs">
                      name and email
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Managing Editor</th>
                  <td className="py-3.5 text-slate-800">
                    <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-mono text-xs">
                      name and email
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Publisher</th>
                  <td className="py-3.5 text-slate-900 font-medium">{JOURNAL_META.publisher}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Postal address</th>
                  <td className="py-3.5 text-slate-800">
                    <span className="bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-mono text-xs">
                      registered postal address
                    </span>, India
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th className="py-3.5 pr-4 font-semibold text-slate-700">Website</th>
                  <td className="py-3.5 text-blue-700 font-medium">{JOURNAL_META.website}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-lg border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              For questions about a submission, please include the manuscript ID in the subject line.
            </span>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('submission')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Go to Manuscript Submission</span>
          </button>
        </div>
      </div>
    </div>
  );
};
