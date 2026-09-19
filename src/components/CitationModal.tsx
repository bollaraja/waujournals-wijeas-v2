import React, { useState } from 'react';
import { X, Check, Copy, Download } from 'lucide-react';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleTitle?: string;
  authors?: string;
  journal?: string;
  year?: string;
  volume?: string;
  issue?: string;
  doi?: string;
}

export const CitationModal: React.FC<CitationModalProps> = ({
  isOpen,
  onClose,
  articleTitle = 'Advanced High-Performance Structural Optimization Algorithm with Machine Learning Surrogate Models',
  authors = 'Author One, Author Two',
  journal = 'WAU International Journal of Engineering and Applied Sciences (WIJEAS)',
  year = '2026',
  volume = '1',
  issue = '1',
  doi = 'https://doi.org/10.xxxx/wijeas.2026.0101',
}) => {
  const [activeTab, setActiveTab] = useState<'ieee' | 'apa' | 'bibtex' | 'ris'>('ieee');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const citations = {
    ieee: `${authors}, "${articleTitle}," ${journal}, vol. ${volume}, no. ${issue}, ${year}, doi: ${doi}.`,
    apa: `${authors}. (${year}). ${articleTitle}. ${journal}, ${volume}(${issue}). ${doi}`,
    bibtex: `@article{wijeas_${year}_${volume}_${issue},
  title = {${articleTitle}},
  author = {${authors}},
  journal = {${journal}},
  volume = {${volume}},
  number = {${issue}},
  year = {${year}},
  publisher = {We Avec U (WAU) Group},
  doi = {${doi}}
}`,
    ris: `TY  - JOUR
TI  - ${articleTitle}
AU  - ${authors}
JO  - ${journal}
VL  - ${volume}
IS  - ${issue}
PY  - ${year}
PB  - We Avec U (WAU) Group
DO  - ${doi}
ER  - `,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = activeTab === 'bibtex' ? 'bib' : activeTab === 'ris' ? 'ris' : 'txt';
    const blob = new Blob([citations[activeTab]], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `citation_${activeTab}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-serif text-lg font-semibold text-slate-900">
            Cite this Article
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs text-slate-500 mb-3 font-medium">Select citation standard:</p>
          <div className="flex border-b border-slate-200 mb-4 gap-1">
            {(['ieee', 'apa', 'bibtex', 'ris'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab === 'ieee' ? 'IEEE (Preferred)' : tab}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
            {citations[activeTab]}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .{activeTab === 'bibtex' ? 'bib' : activeTab === 'ris' ? 'ris' : 'txt'}</span>
            </button>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded shadow-xs transition-colors cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Citation'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
