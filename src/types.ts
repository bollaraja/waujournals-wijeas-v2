export type PageId =
  | 'home'
  | 'about'
  | 'scope'
  | 'board'
  | 'authors'
  | 'submission'
  | 'why-publish'
  | 'apc'
  | 'cfp'
  | 'special-issues'
  | 'reviewers'
  | 'current'
  | 'past'
  | 'article'
  | 'policies'
  | 'standards'
  | 'indexing'
  | 'frequency'
  | 'contact'
  | `policy-${string}`;

export interface ScopeArea {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  associateEditor?: string;
}

export interface PolicyItem {
  id: string;
  title: string;
  summary: string;
  body?: string;
  link?: string;
}

export interface BoardMember {
  role: string;
  name: string;
  degree?: string;
  affiliation: string;
  country: string;
  orcid?: string;
  email?: string;
  isTbc?: boolean;
}

export interface ArticleTypeInfo {
  type: string;
  description: string;
  wordLimit: string;
  peerReviewed: boolean;
}
