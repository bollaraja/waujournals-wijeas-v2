import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ScopePage } from './pages/ScopePage';
import { EditorialBoardPage } from './pages/EditorialBoardPage';
import { AuthorGuidelinesPage } from './pages/AuthorGuidelinesPage';
import { SubmissionPage } from './pages/SubmissionPage';
import { WhyPublishPage } from './pages/WhyPublishPage';
import { ApcPage } from './pages/ApcPage';
import { CallForPapersPage } from './pages/CallForPapersPage';
import { SpecialIssuesPage } from './pages/SpecialIssuesPage';
import { ReviewersPage } from './pages/ReviewersPage';
import { CurrentIssuePage } from './pages/CurrentIssuePage';
import { PastIssuesPage } from './pages/PastIssuesPage';
import { ArticlePage } from './pages/ArticlePage';
import { PoliciesPage } from './pages/PoliciesPage';
import { StandardsPage } from './pages/StandardsPage';
import { IndexingPage } from './pages/IndexingPage';
import { FrequencyPage } from './pages/FrequencyPage';
import { ContactPage } from './pages/ContactPage';
import { ArrowUp, Bell, Sparkles } from 'lucide-react';
import { JOURNAL_META } from './data/journalData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hash synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
      if (!rawHash) {
        setCurrentPage('home');
      } else {
        setCurrentPage(rawHash as PageId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title
  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: 'Home',
      about: 'About the Journal',
      scope: 'Aims and Scope',
      board: 'Editorial Board',
      authors: 'Author Guidelines',
      submission: 'Submission Process',
      'why-publish': 'Why Publish with Us',
      apc: 'Article Processing Charges',
      cfp: 'Call for Papers',
      'special-issues': 'Special Issues & Conference Papers',
      reviewers: 'Reviewer Guidelines',
      current: 'Current Issue',
      past: 'Past Issues',
      article: 'Sample Article Page',
      policies: 'Policies',
      standards: 'Standards and Best Practice',
      indexing: 'Indexing and Abstracting',
      frequency: 'Publication Frequency',
      contact: 'Contact',
    };

    let titlePrefix = 'Home';
    if (currentPage.startsWith('policy-')) {
      const polName = currentPage.replace('policy-', '').replace(/-/g, ' ');
      titlePrefix = polName.charAt(0).toUpperCase() + polName.slice(1) + ' Policy';
    } else if (titleMap[currentPage]) {
      titlePrefix = titleMap[currentPage];
    }

    if (currentPage === 'home') {
      document.title = JOURNAL_META.title;
    } else {
      document.title = `${titlePrefix} | ${JOURNAL_META.title}`;
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage.startsWith('policy-')) {
      return <PoliciesPage currentPage={currentPage} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'scope':
        return <ScopePage onNavigate={handleNavigate} />;
      case 'board':
        return <EditorialBoardPage onNavigate={handleNavigate} />;
      case 'authors':
        return <AuthorGuidelinesPage onNavigate={handleNavigate} />;
      case 'submission':
        return <SubmissionPage onNavigate={handleNavigate} />;
      case 'why-publish':
        return <WhyPublishPage onNavigate={handleNavigate} />;
      case 'apc':
        return <ApcPage onNavigate={handleNavigate} />;
      case 'cfp':
        return <CallForPapersPage onNavigate={handleNavigate} />;
      case 'special-issues':
        return <SpecialIssuesPage onNavigate={handleNavigate} />;
      case 'reviewers':
        return <ReviewersPage onNavigate={handleNavigate} />;
      case 'current':
        return <CurrentIssuePage onNavigate={handleNavigate} />;
      case 'past':
        return <PastIssuesPage onNavigate={handleNavigate} />;
      case 'article':
        return <ArticlePage onNavigate={handleNavigate} />;
      case 'policies':
        return <PoliciesPage currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'standards':
        return <StandardsPage onNavigate={handleNavigate} />;
      case 'indexing':
        return <IndexingPage onNavigate={handleNavigate} />;
      case 'frequency':
        return <FrequencyPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#172033] selection:bg-blue-100 selection:text-blue-900">
      {/* Top Notification / Call for Papers Banner */}
      <aside aria-label="Announcement" className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-2 px-4 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-semibold text-amber-300 shrink-0">Call for Papers:</span>
            <span className="text-slate-200 truncate">
              Volume 1 Inaugural Issue Submissions Open. Double-anonymous peer review with rapid first decision.
            </span>
          </div>
          <button
            onClick={() => handleNavigate('cfp')}
            className="shrink-0 text-amber-300 hover:text-white underline font-semibold text-xs ml-2 cursor-pointer"
          >
            View CFP details →
          </button>
        </div>
      </aside>

      {/* Main Journal Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        {renderPage()}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Live Journal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
