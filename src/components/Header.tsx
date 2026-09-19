import React, { useState } from 'react';
import { JOURNAL_META } from '../data/journalData';
import { PageId } from '../types';
import { 
  BookOpen, 
  Search, 
  Menu, 
  X, 
  Send, 
  FileText, 
  CheckCircle2, 
  ChevronDown,
  Globe2
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authorsDropdownOpen, setAuthorsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home' as PageId, label: 'Home' },
    { 
      id: 'about' as PageId, 
      label: 'About',
      hasDropdown: true,
      subItems: [
        { id: 'about' as PageId, label: 'About the Journal' },
        { id: 'standards' as PageId, label: 'Standards & Best Practice' },
        { id: 'indexing' as PageId, label: 'Indexing & Abstracting' },
        { id: 'frequency' as PageId, label: 'Publication Frequency' },
      ]
    },
    { id: 'scope' as PageId, label: 'Aims & Scope' },
    { id: 'board' as PageId, label: 'Editorial Board' },
    { 
      id: 'authors' as PageId, 
      label: 'For Authors',
      hasDropdown: true,
      subItems: [
        { id: 'authors' as PageId, label: 'Author Guidelines' },
        { id: 'submission' as PageId, label: 'Submission Process' },
        { id: 'why-publish' as PageId, label: 'Why Publish with Us' },
        { id: 'apc' as PageId, label: 'Article Processing Charges' },
        { id: 'cfp' as PageId, label: 'Call for Papers' },
        { id: 'special-issues' as PageId, label: 'Special Issues & Conferences' },
        { id: 'reviewers' as PageId, label: 'Reviewer Guidelines' },
      ]
    },
    { id: 'current' as PageId, label: 'Current Issue' },
    { id: 'past' as PageId, label: 'Past Issues' },
    { id: 'policies' as PageId, label: 'Policies' },
    { id: 'contact' as PageId, label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAuthorsDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const isCurrentActive = (item: typeof navItems[0]) => {
    if (currentPage === item.id) return true;
    if (item.subItems && item.subItems.some(sub => sub.id === currentPage)) return true;
    if (item.id === 'policies' && currentPage.startsWith('policy-')) return true;
    return false;
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-xs relative z-30">
      {/* Top Utility Bar */}
      <div className="bg-[#0B1E36] text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              Published by <strong className="text-white font-semibold ml-1">{JOURNAL_META.publisher}</strong>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              ISSN <span className="bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded text-[11px] font-mono">shown once assigned</span> (online)
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Open Access (CC BY 4.0)
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 ml-auto">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded transition-colors text-xs cursor-pointer"
              title="Search journal"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Search journal</span>
            </button>
            <button
              onClick={() => handleNavClick('submission')}
              className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded shadow-xs transition-colors text-xs cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Submit Manuscript</span>
            </button>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="bg-linear-to-b from-white to-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Academic Spine Bar */}
            <div className="w-2.5 sm:w-3.5 self-stretch bg-linear-to-b from-[#1F4FA8] via-[#163B7C] to-[#0E244D] rounded-xs shrink-0 shadow-xs" />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-900 border border-blue-200/80 text-xs font-bold tracking-wider rounded">
                  {JOURNAL_META.shortTitle}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Peer Reviewed Quarterly Journal
                </span>
              </div>

              <h1 
                onClick={() => handleNavClick('home')}
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 hover:text-blue-900 cursor-pointer transition-colors leading-tight mb-2"
              >
                {JOURNAL_META.title}
              </h1>

              <p className="font-serif italic text-base sm:text-lg text-slate-600 mb-5">
                "{JOURNAL_META.tagline}"
              </p>

              {/* Colophon Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 pt-3 border-t border-slate-200 text-xs text-slate-600">
                <div className="pr-2 border-r border-slate-200/80">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">ISSN (online)</span>
                  <span className="font-medium text-slate-800 bg-amber-50 text-amber-800 px-1 py-0.5 rounded text-[11px]">once assigned</span>
                </div>
                <div className="pr-2 border-r border-slate-200/80">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Frequency</span>
                  <span className="font-medium text-slate-800">Quarterly</span>
                </div>
                <div className="pr-2 sm:border-r border-slate-200/80">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Peer review</span>
                  <span className="font-medium text-slate-800">Double-anonymous</span>
                </div>
                <div className="pr-2 border-r border-slate-200/80">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Licence</span>
                  <span className="font-medium text-slate-800">CC BY 4.0</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Established</span>
                  <span className="font-medium text-slate-800 bg-amber-50 text-amber-800 px-1 py-0.5 rounded text-[11px]">first issue date</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation links */}
            <div className="hidden lg:flex items-center space-x-1 overflow-x-auto py-1">
              {navItems.map((item) => {
                const isActive = isCurrentActive(item);

                if (item.hasDropdown) {
                  const isDropdownActive = item.id === 'about' ? aboutDropdownOpen : authorsDropdownOpen;
                  const setDropdownActive = item.id === 'about' ? setAboutDropdownOpen : setAuthorsDropdownOpen;

                  return (
                    <div 
                      key={item.id} 
                      className="relative group"
                      onMouseEnter={() => setDropdownActive(true)}
                      onMouseLeave={() => setDropdownActive(false)}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`px-3 py-3 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 cursor-pointer ${
                          isActive
                            ? 'text-blue-700 border-blue-600'
                            : 'text-slate-700 hover:text-blue-600 border-transparent'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
                      </button>

                      {isDropdownActive && (
                        <div className="absolute top-full left-0 w-64 bg-white rounded-b-md shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.subItems?.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-blue-50 hover:text-blue-800 flex items-center justify-between cursor-pointer ${
                                currentPage === sub.id ? 'bg-blue-50/80 text-blue-700 font-semibold' : 'text-slate-700'
                              }`}
                            >
                              <span>{sub.label}</span>
                              {currentPage === sub.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                      isActive
                        ? 'text-blue-700 border-blue-600'
                        : 'text-slate-700 hover:text-blue-600 border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Quick action buttons on navbar right */}
            <div className="hidden lg:flex items-center gap-2 pl-4">
              <button
                onClick={() => handleNavClick('article')}
                className="px-2.5 py-1.5 text-xs text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Sample Article</span>
              </button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden flex items-center justify-between w-full py-2.5">
              <span className="font-serif font-semibold text-slate-900 text-sm truncate max-w-[200px] sm:max-w-xs">
                {JOURNAL_META.shortTitle}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenSearch}
                  className="p-2 text-slate-600 hover:text-blue-700 rounded-md"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-slate-600 hover:text-blue-700 rounded-md"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.id} className="py-1">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isCurrentActive(item)
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.subItems && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-200 ml-3">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`w-full text-left px-3 py-1.5 text-xs rounded transition-colors ${
                            currentPage === sub.id
                              ? 'text-blue-700 font-semibold bg-blue-50/50'
                              : 'text-slate-600 hover:text-blue-600'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200">
                <button
                  onClick={() => handleNavClick('submission')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Manuscript</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
