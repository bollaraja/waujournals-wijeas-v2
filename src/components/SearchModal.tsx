import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, FileText, Shield, Users, BookOpen } from 'lucide-react';
import { PageId } from '../types';
import { SCOPE_AREAS, POLICIES, ARTICLE_TYPES, WHY_PUBLISH_BENEFITS } from '../data/journalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const searchItems = useMemo(() => {
    const list: Array<{
      title: string;
      category: string;
      desc: string;
      page: PageId;
      icon: any;
    }> = [
      { title: 'Aims & Scope', category: 'General', desc: 'Core disciplines and research focus areas', page: 'scope', icon: BookOpen },
      { title: 'Author Guidelines', category: 'Authors', desc: 'Manuscript preparation, word limits and citation format', page: 'authors', icon: FileText },
      { title: 'Submission Process', category: 'Authors', desc: 'Step-by-step submission instructions and requirements', page: 'submission', icon: FileText },
      { title: 'Article Processing Charges (APC)', category: 'Authors', desc: 'Fee structure, waivers, and diamond open access policy', page: 'apc', icon: FileText },
      { title: 'Editorial Board', category: 'People', desc: 'Editor-in-Chief, Associate Editors, and board members', page: 'board', icon: Users },
      { title: 'Call for Papers', category: 'Announcements', desc: 'Upcoming issue themes and deadlines', page: 'cfp', icon: FileText },
      { title: 'Reviewer Guidelines', category: 'Peer Review', desc: 'Confidentiality, review standards, and COPE criteria', page: 'reviewers', icon: Shield },
      { title: 'Publication Frequency', category: 'About', desc: 'Quarterly publishing schedule and volume breakdown', page: 'frequency', icon: BookOpen },
      { title: 'Standards & UGC Parameters', category: 'Quality', desc: 'COPE Core Practices and UGC Suggestive Parameters', page: 'standards', icon: Shield },
      { title: 'Indexing & Abstracting', category: 'Metrics', desc: 'Crossref DOI, Google Scholar, DOAJ, ORCID', page: 'indexing', icon: BookOpen },
      { title: 'Current Issue', category: 'Content', desc: 'Volume 1 Issue 1 and articles in press', page: 'current', icon: FileText },
      { title: 'Sample Article', category: 'Layout', desc: 'Example formatted research article layout', page: 'article', icon: FileText },
      { title: 'Contact Editorial Office', category: 'Contact', desc: 'Email addresses, publisher details, postal address', page: 'contact', icon: BookOpen },
    ];

    // Add scope areas
    SCOPE_AREAS.forEach((sc) => {
      list.push({
        title: sc.title,
        category: 'Scope Area',
        desc: sc.description,
        page: 'scope',
        icon: BookOpen,
      });
    });

    // Add policies
    POLICIES.forEach((pol) => {
      list.push({
        title: pol.title,
        category: 'Policy',
        desc: pol.summary,
        page: `policy-${pol.id}` as PageId,
        icon: Shield,
      });
    });

    // Add article types
    ARTICLE_TYPES.forEach((at) => {
      list.push({
        title: at.type,
        category: 'Article Type',
        desc: `${at.description} (${at.wordLimit})`,
        page: 'authors',
        icon: FileText,
      });
    });

    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchItems.slice(0, 8);
    const q = query.toLowerCase();
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, searchItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search journal scope, policies, author guidelines, editorial board..."
            className="w-full bg-transparent text-sm text-slate-900 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-200/50"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 divide-y divide-slate-100">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching journal sections found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-blue-50/70 transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900 group-hover:text-blue-900">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 self-center" />
                </button>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Tip: Navigate directly to sections or policies</span>
          <span className="text-[11px] text-slate-400">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
