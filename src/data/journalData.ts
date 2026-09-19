import { ScopeArea, PolicyItem, ArticleTypeInfo } from '../types';

export const JOURNAL_META = {
  title: 'WAU International Journal of Engineering and Applied Sciences',
  shortTitle: 'WIJEAS',
  publisher: 'We Avec U (WAU) Group',
  tagline: 'Engineering research that is built, tested and applied.',
  issnOnline: 'shown once assigned',
  frequency: 'Quarterly (Mar, Jun, Sep, Dec)',
  peerReview: 'Double-anonymous, 2+ independent reviewers',
  licence: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
  established: 'First issue date (Volume 1, Issue 1)',
  doiPrefix: 'Crossref prefix (once assigned)',
  firstDecisionTarget: 'Target within 8 weeks',
  screeningTarget: 'Within 7 days',
  email: 'editor@wijeas.in',
  website: 'https://wijeas.in',
  location: 'India',
};

export const SCOPE_AREAS: ScopeArea[] = [
  {
    id: 'computing-ai',
    title: 'Computing, Artificial Intelligence and Data Science',
    description: 'Algorithms, machine learning and deep learning, software engineering, data systems, IoT, cloud and edge computing, where the contribution is technical.',
    iconName: 'Cpu',
  },
  {
    id: 'civil-structural',
    title: 'Civil, Structural and Environmental Engineering',
    description: 'Structures, geotechnics, transportation, water resources, construction materials and management, environmental engineering and sustainable infrastructure.',
    iconName: 'Building2',
  },
  {
    id: 'mechanical-materials',
    title: 'Mechanical, Production and Materials Engineering',
    description: 'Design, thermal and fluid systems, manufacturing and additive processes, robotics and mechatronics, materials science and tribology.',
    iconName: 'Wrench',
  },
  {
    id: 'electrical-energy',
    title: 'Electrical, Electronics and Energy Systems',
    description: 'Power systems, renewable energy and storage, power electronics, VLSI and embedded systems, communication and signal processing, control systems.',
    iconName: 'Zap',
  },
  {
    id: 'bio-medical',
    title: 'Biotechnology, Biomedical Engineering and Bioinformatics',
    description: 'Bioprocess engineering, biomaterials, medical devices and imaging, computational biology and bioinformatics.',
    iconName: 'Dna',
  },
  {
    id: 'physics-chemistry-math',
    title: 'Applied Physics, Chemistry and Mathematics',
    description: 'Physical, chemical and mathematical work directed at an engineered application, including computational modelling, simulation and optimisation.',
    iconName: 'Binary',
  },
];

export const KEYWORDS = [
  'engineering',
  'applied sciences',
  'artificial intelligence',
  'machine learning',
  'data science',
  'civil engineering',
  'structural engineering',
  'mechanical engineering',
  'manufacturing',
  'electrical engineering',
  'renewable energy',
  'power electronics',
  'biotechnology',
  'biomedical engineering',
  'sustainability',
];

export const WHY_PUBLISH_BENEFITS = [
  {
    title: 'Rigorous, constructive review',
    description: 'Double-anonymous peer review by at least two independent experts, with detailed feedback that strengthens your work.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Timely decisions',
    description: 'First decision targeted within eight weeks; accepted articles published online with a DOI soon after acceptance.',
    icon: 'Clock',
  },
  {
    title: 'Maximum visibility',
    description: 'Immediate open access under CC BY 4.0, Crossref DOI, ORCID linking and metadata optimised for Google Scholar and scholarly discovery services.',
    icon: 'Globe',
  },
  {
    title: 'You keep your copyright',
    description: 'Authors retain copyright and may share their published article anywhere.',
    icon: 'Award',
  },
  {
    title: 'No hidden costs',
    description: 'No submission or review fees; charges, if any, apply only after acceptance, with waivers available.',
    icon: 'FileCheck',
  },
  {
    title: 'The right readership',
    description: 'A clearly defined scope in engineering and the applied sciences ensures your work reaches the specialists who will read and cite it.',
    icon: 'Users',
  },
  {
    title: 'Trusted standards',
    description: 'Policies aligned with COPE, recognised reporting guidelines and the UGC Suggestive Parameters, and designed to meet the criteria of leading international indexing services.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Permanent record',
    description: 'Long-term digital preservation, so your article remains accessible and citable.',
    icon: 'Archive',
  },
];

export const ARTICLE_TYPES: ArticleTypeInfo[] = [
  {
    type: 'Original Research Article',
    description: 'Full report of original empirical, experimental or theoretical research.',
    wordLimit: 'Up to 8,000 words',
    peerReviewed: true,
  },
  {
    type: 'Review Article',
    description: 'Systematic, scoping, narrative or critical review that synthesises a body of research and sets out future directions.',
    wordLimit: 'Up to 9,000 words',
    peerReviewed: true,
  },
  {
    type: 'Short Communication',
    description: 'Concise report of novel findings of particular importance.',
    wordLimit: 'Up to 3,000 words',
    peerReviewed: true,
  },
  {
    type: 'Technical Note',
    description: 'A concise report of a new method, device, algorithm or significant improvement.',
    wordLimit: 'Up to 4,000 words',
    peerReviewed: true,
  },
  {
    type: 'Industrial Case Study',
    description: 'A documented application of engineering methods in a real industrial or infrastructure setting, with measured outcomes.',
    wordLimit: 'Up to 6,000 words',
    peerReviewed: true,
  },
  {
    type: 'Data or Software Article',
    description: 'Describes a dataset or research software of reuse value, deposited in a recognised open repository.',
    wordLimit: 'Up to 3,000 words',
    peerReviewed: true,
  },
  {
    type: 'Editorial',
    description: 'Commissioned by the Editor-in-Chief. Not peer reviewed; clearly labelled.',
    wordLimit: 'Flexible',
    peerReviewed: false,
  },
  {
    type: 'Book Review',
    description: 'Critical review of a recent scholarly book within scope.',
    wordLimit: 'Up to 2,000 words',
    peerReviewed: true,
  },
];

export const POLICIES: PolicyItem[] = [
  {
    id: 'peer-review',
    title: 'Peer review',
    summary: 'All research content undergoes double-anonymous peer review by at least two independent experts. First decision targeted within eight weeks.',
    body: `
      <p>All research content published in the journal undergoes double-anonymous peer review: reviewers do not know the identity of the authors, and authors do not know the identity of the reviewers.</p>
      <h3>The review process</h3>
      <ol class="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Initial screening.</strong> The editorial office checks scope, completeness, formatting, similarity and adherence to ethics requirements. Manuscripts that fail screening are returned, usually within 7 days.</li>
        <li><strong>Editor assignment.</strong> The Editor-in-Chief assigns the manuscript to the Associate Editor for the relevant scope area, who must have no conflict of interest.</li>
        <li><strong>Reviewer selection.</strong> The handling editor invites at least two independent expert reviewers. At least one reviewer must be external to the editorial board and to the author's institution. Reviewers must not have co-authored with any author in the past three years.</li>
        <li><strong>Review.</strong> Reviewers are asked to return reports within 21 days, assessing originality, methodological soundness, significance, ethics and clarity.</li>
        <li><strong>Decision.</strong> The handling editor weighs the reports and makes a recommendation; the Editor-in-Chief makes the final decision: accept, minor revision, major revision or reject.</li>
        <li><strong>Revision.</strong> Authors respond point by point. Major revisions are normally returned to the original reviewers.</li>
        <li><strong>Acceptance and production.</strong> Accepted articles are copyedited, typeset, proofed by the authors and published online with a DOI.</li>
      </ol>
      <h3>Target timelines</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full border-collapse text-sm">
          <tbody>
            <tr class="border-b border-slate-200"><th class="py-2.5 text-left font-semibold text-slate-600 w-1/2">Initial screening</th><td class="py-2.5 text-slate-800">Within 7 days</td></tr>
            <tr class="border-b border-slate-200"><th class="py-2.5 text-left font-semibold text-slate-600">First decision after review</th><td class="py-2.5 text-slate-800">Within 8 weeks of submission</td></tr>
            <tr><th class="py-2.5 text-left font-semibold text-slate-600">Publication online after acceptance</th><td class="py-2.5 text-slate-800">Within 4 weeks</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-slate-500 italic my-3">These are targets, not guarantees. The journal never shortens review to meet a timeline.</p>
      <h3>Editorial independence</h3>
      <p>Decisions are based only on scholarly merit, relevance to scope and ethical soundness. They are never influenced by payment of fees, the author's institution, nationality, seniority or relationship with the publisher. Fee and waiver information is not visible to editors or reviewers.</p>
      <h3>Publication dates</h3>
      <p>Each article displays its received, revised, accepted and published dates.</p>
    `,
  },
  {
    id: 'publication-ethics',
    title: 'Publication ethics and malpractice',
    summary: 'The journal follows COPE Core Practices and handles all allegations of misconduct using COPE flowcharts.',
    body: `
      <p>The journal follows the Core Practices of the Committee on Publication Ethics (COPE) and handles all allegations of misconduct using COPE flowcharts.</p>
      <h3>Duties of editors</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Evaluate manuscripts solely on intellectual merit, without regard to authors' race, gender, sexual orientation, religion, ethnicity, citizenship or political philosophy.</li>
        <li>Keep all information about submitted manuscripts confidential.</li>
        <li>Declare competing interests and withdraw from handling any manuscript where a conflict exists.</li>
        <li>Respond promptly to ethical complaints and publish corrections, retractions or expressions of concern when needed.</li>
      </ul>
      <h3>Duties of reviewers</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Review objectively and constructively, and support opinions with evidence.</li>
        <li>Treat manuscripts as confidential; do not share, use or upload them to any external tool, including generative AI systems.</li>
        <li>Decline where there is a competing interest or insufficient expertise.</li>
        <li>Alert the editor to suspected plagiarism, duplicate publication, data fabrication or ethical concerns.</li>
      </ul>
      <h3>Duties of authors</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Submit original work that has not been published and is not under consideration elsewhere.</li>
        <li>Report data accurately; fabrication, falsification and image manipulation are misconduct.</li>
        <li>Cite all sources used, and obtain permission to reproduce copyrighted material.</li>
        <li>Disclose all funding and competing interests.</li>
        <li>Notify the editor promptly of any significant error discovered after submission or publication.</li>
      </ul>
      <h3>Misconduct</h3>
      <p>Suspected misconduct, including plagiarism, data fabrication, duplicate submission, citation manipulation, authorship disputes, fraudulent peer review and paper-mill activity, is investigated following COPE guidance. Outcomes may include rejection, correction, retraction, notification of the author's institution and a ban on future submissions.</p>
      <h3>Citation manipulation</h3>
      <p>Editors and reviewers must not require authors to cite their own work or the journal's articles unless the citation is scientifically necessary. Authors must not engage in excessive self-citation or citation stacking.</p>
    `,
  },
  {
    id: 'authorship',
    title: 'Authorship and contributorship',
    summary: 'Authorship must reflect a genuine intellectual contribution, described using CRediT. Gift, guest and ghost authorship are not permitted.',
    body: `
      <p>Authorship must reflect a genuine intellectual contribution. Every listed author must have made a substantial contribution to the conception, design, data, analysis or interpretation of the work; drafted or critically revised it; approved the final version; and agreed to be accountable for it.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Contributions of each author must be described using the CRediT (Contributor Roles Taxonomy) statement.</li>
        <li>A corresponding author must be designated and is responsible for communication with the journal.</li>
        <li>ORCID iDs are required for the corresponding author and strongly encouraged for all authors.</li>
        <li>Gift, guest and ghost authorship are not permitted. Contributors who do not meet the criteria are named in the Acknowledgements.</li>
        <li>Changes to the author list after submission require a signed statement from all authors and the approval of the editor.</li>
        <li>Generative AI tools cannot be listed as authors.</li>
      </ul>
    `,
  },
  {
    id: 'competing-interests',
    title: 'Competing interests',
    summary: 'Authors, reviewers and editors must declare any financial, professional or personal interest that could influence the work.',
    body: `
      <p>A competing interest exists when a financial, professional or personal relationship could influence, or appear to influence, the conduct or reporting of work.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Authors must declare all funding sources and any relationships relevant to the submitted work; where none exist, a statement that the authors declare no competing interests is published.</li>
        <li>Reviewers and editors must declare competing interests and decline to handle affected manuscripts.</li>
        <li>Competing interest statements are published with every article.</li>
      </ul>
    `,
  },
  {
    id: 'research-ethics',
    title: 'Research ethics',
    summary: 'Human-participant work requires prior ethics approval and consent. Dual-use work requires a misuse and mitigation statement.',
    body: `
      <p>The journal publishes only research that has been conducted ethically and responsibly. The following requirements apply to this journal:</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Studies involving human participants, including user studies, usability trials and wearable or biomedical device testing, require prior ethics committee approval and informed consent.</li>
        <li>Work with dual-use potential, for example autonomous systems or surveillance technology, must include a statement on foreseeable misuse and mitigation.</li>
        <li>Environmental field studies must hold any permits required by the relevant authority.</li>
        <li>Authors must include an ethics statement in the manuscript, even where approval was not required, explaining why.</li>
        <li>The editors may request copies of approval letters, consent forms or data, and may decline manuscripts where ethical conduct cannot be verified.</li>
      </ul>
    `,
  },
  {
    id: 'reporting-and-data',
    title: 'Reporting standards and data availability',
    summary: 'Methods must be reported in enough detail to replicate, and every research article carries a data availability statement.',
    body: `
      <h3>Reporting standards</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Describe the experimental set-up, materials, parameters, instrumentation and measurement uncertainty in sufficient detail for replication.</li>
        <li>Benchmark proposed methods against established baselines using standard datasets or test conditions, and report statistical variation across repeated runs.</li>
        <li>For machine learning work, state dataset provenance and licence, train, validation and test splits, hyperparameters, compute resources and evaluation protocol.</li>
        <li>Provide a code and data availability statement; deposit code in a public repository (for example GitHub with a Zenodo DOI) wherever possible.</li>
        <li>Report units in SI and follow relevant national or international standards (for example BIS, IEC, ISO, ASTM) where they apply.</li>
      </ul>
      <h3>Data availability</h3>
      <p>Every research article must include a Data Availability Statement explaining where the data, code and materials supporting the findings can be accessed. Deposit in a recognised public repository with a persistent identifier (for example Zenodo, OSF, Figshare or Dryad) is strongly encouraged. Where data cannot be shared for legal, ethical or confidentiality reasons, the statement must explain why and how qualified researchers may request access.</p>
      <h3>Preprints</h3>
      <p>Posting a preprint on a recognised preprint server does not prevent submission. Authors should disclose the preprint and its DOI at submission and link the published article to the preprint once published.</p>
    `,
  },
  {
    id: 'plagiarism',
    title: 'Plagiarism and similarity',
    summary: 'Every submission is screened before peer review. Reports are read by an editor; there is no automatic numeric threshold.',
    body: `
      <p>Every submission is screened with <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">Crossref Similarity Check (iThenticate)</span> before peer review. The similarity report is examined by an editor; there is no automatic numeric threshold, because acceptable overlap depends on where it occurs.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Copying text, data, figures or ideas without attribution is plagiarism, whatever the source.</li>
        <li>Reusing substantial parts of the authors' own published work without disclosure (text recycling or duplicate publication) is not permitted.</li>
        <li>Manuscripts based on theses or conference papers must disclose the earlier version.</li>
        <li>Plagiarism detected before publication leads to rejection; detected after publication, it leads to correction or retraction under COPE guidance.</li>
      </ul>
    `,
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    summary: 'AI tools cannot be authors. Use beyond basic language correction must be disclosed, and manuscripts must never be uploaded to AI tools by reviewers or editors.',
    body: `
      <h3>For authors</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Generative AI tools may not be listed as authors, because they cannot take responsibility for the work.</li>
        <li>Authors who use generative AI for any purpose beyond basic spelling and grammar correction must disclose the tool, version and purpose in the Methods or Acknowledgements.</li>
        <li>Authors remain fully responsible for the accuracy, originality and integrity of all content, including any AI-assisted text, analysis or code, and must verify all references.</li>
        <li>AI-generated or AI-altered images, figures and data are not permitted unless AI is itself the subject of the research and the use is fully described.</li>
      </ul>
      <h3>For reviewers and editors</h3>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Manuscripts and review reports are confidential and must not be uploaded to generative AI tools.</li>
        <li>Reviewers and editors must not use generative AI to write reviews or make editorial decisions.</li>
      </ul>
    `,
  },
  {
    id: 'corrections',
    title: 'Corrections and retractions',
    summary: 'Corrections, retractions and expressions of concern follow COPE guidelines, are linked to the original article and carry their own DOI.',
    body: `
      <p>The published record is maintained in line with COPE Retraction Guidelines. All notices are linked to the original article, carry their own DOI and are free to read.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li><strong>Correction.</strong> Published when an error affects the article but not its overall findings.</li>
        <li><strong>Retraction.</strong> Published when findings are unreliable because of major error or misconduct, or in cases of plagiarism, duplicate publication or unethical research. Retracted articles remain online, clearly watermarked "Retracted".</li>
        <li><strong>Expression of concern.</strong> Published while an investigation is ongoing or when evidence is inconclusive.</li>
      </ul>
      <p class="mt-3">Articles are removed from the site only in exceptional circumstances, such as legal infringement or a serious risk to health, and a notice explaining the removal is kept.</p>
    `,
  },
  {
    id: 'appeals',
    title: 'Appeals and complaints',
    summary: 'Authors may appeal a rejection once within 30 days. Complaints are acknowledged within 7 days and resolved wherever possible within 30 days.',
    body: `
      <h3>Appeals</h3>
      <p>Authors may appeal a rejection once, by writing to the Editor-in-Chief within 30 days of the decision, explaining in detail why the decision should be reconsidered. Appeals are assessed by an editor not involved in the original decision. The outcome of the appeal is final.</p>
      <h3>Complaints</h3>
      <p>Complaints about the journal's processes, editors or published content should be sent to <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">editor@wijeas.in</span>. Complaints are acknowledged within 7 days and resolved, wherever possible, within 30 days. Complaints about the Editor-in-Chief are directed to the publisher at <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">publisher contact email</span>. If a complaint is not resolved satisfactorily, the complainant may refer the matter to COPE.</p>
    `,
  },
  {
    id: 'open-access',
    title: 'Open access and licensing',
    summary: 'Fully open access. Every article is free to read on publication and published under CC BY 4.0.',
    body: `
      <p>The journal is fully open access. All articles are freely available to read, download, copy, distribute, print, search and link to immediately on publication, without subscription or registration, in accordance with the Budapest Open Access Initiative.</p>
      <p class="my-3">Articles are published under the Creative Commons Attribution 4.0 International licence (CC BY 4.0). Anyone may share and adapt the work for any purpose, provided appropriate credit is given to the original authors and source, a link to the licence is provided, and any changes are indicated.</p>
      <p>The licence is displayed on the article landing page and in the article PDF, and is included in the metadata deposited with Crossref.</p>
    `,
  },
  {
    id: 'copyright',
    title: 'Copyright',
    summary: 'Authors retain copyright without restriction and grant the journal a non-exclusive licence to publish.',
    body: `
      <p>Authors retain copyright in their work without restriction. On acceptance, authors grant the journal a non-exclusive licence to publish the article and to identify itself as the original publisher.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>Authors may deposit any version of their article, including the published version, in institutional or subject repositories and on personal websites immediately, with a link to the published article.</li>
        <li>Authors are responsible for obtaining permission to reproduce any third-party material included in the article.</li>
        <li>Material from third parties that is not covered by CC BY must be clearly labelled.</li>
      </ul>
    `,
  },
  {
    id: 'special-issues-policy',
    title: 'Special issues and conference papers',
    summary: 'Special issues follow the same review and ethics standards as regular issues. Conference papers are considered only as substantially extended manuscripts.',
    link: '#/special-issues',
  },
  {
    id: 'archiving',
    title: 'Archiving',
    summary: 'All articles are deposited for long-term preservation, and every article has a Crossref DOI that will always resolve.',
    body: `
      <p>The journal is committed to the permanent availability of its content.</p>
      <ul class="list-disc pl-6 space-y-2 my-3">
        <li>All articles are deposited for long-term preservation with <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">PKP Preservation Network, Portico or CLOCKSS — arrangement to be confirmed</span>, which ensures access if the journal ceases publication.</li>
        <li>Every article has a Crossref DOI that will always resolve to the article.</li>
        <li>Authors are permitted and encouraged to deposit published articles in institutional and subject repositories.</li>
        <li>The publisher maintains secure off-site backups of all journal content.</li>
      </ul>
    `,
  },
  {
    id: 'advertising',
    title: 'Advertising',
    summary: 'Advertising is kept separate from editorial content and has no influence on editorial decisions.',
    body: `
      <p>The journal does not accept advertising that is misleading, or that relates to products or services inconsistent with its scholarly mission. Any advertising or sponsorship is clearly identified, is kept separate from editorial content, and has no influence on editorial decisions. Sponsored supplements or special issues are peer reviewed to the same standard as regular content and carry a disclosure of the sponsor.</p>
    `,
  },
  {
    id: 'privacy',
    title: 'Privacy',
    summary: 'Personal data entered on this site are used only for the stated purposes of the journal, under the Digital Personal Data Protection Act, 2023.',
    body: `
      <p>Names, email addresses and other personal data entered on this site are used only for the stated purposes of the journal and are not shared with any other party. Personal data are processed in accordance with the Digital Personal Data Protection Act, 2023. Users may request access to, correction of, or deletion of their personal data by writing to <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">editor@wijeas.in</span>.</p>
    `,
  },
];

export const EDITORIAL_BOARD_MEMBERS = [
  {
    section: 'Editor-in-Chief',
    items: [
      {
        role: 'Editor-in-Chief',
        name: 'Full name, degree',
        affiliation: 'Institution, country',
        orcid: 'ORCID iD (e.g. 0000-0002-xxxx-xxxx)',
        email: 'Institutional email address',
        isTbc: true,
      },
    ],
  },
  {
    section: 'Associate Editors',
    subtitle: 'One Associate Editor is appointed for each scope area.',
    items: SCOPE_AREAS.map((scope) => ({
      role: `Associate Editor, ${scope.title}`,
      name: 'Full name, degree',
      affiliation: 'Institution, country',
      orcid: 'ORCID iD',
      email: 'Institutional email',
      isTbc: true,
    })),
  },
  {
    section: 'Editorial Board Members',
    subtitle: 'Listed alphabetically by surname. Appointed for renewable terms of three years.',
    items: Array.from({ length: 6 }).map((_, i) => ({
      role: 'Editorial Board Member',
      name: `Board Member ${i + 1}`,
      affiliation: 'Institution, country',
      orcid: 'ORCID iD',
      isTbc: true,
    })),
  },
  {
    section: 'International Advisory Board',
    subtitle: 'Advising on strategic development, international outreach, and ethical benchmarks.',
    items: Array.from({ length: 3 }).map((_, i) => ({
      role: 'International Advisory Board',
      name: `Advisory Member ${i + 1}`,
      affiliation: 'Institution, country',
      orcid: 'ORCID iD',
      isTbc: true,
    })),
  },
  {
    section: 'Managing Editor',
    items: [
      {
        role: 'Managing Editor',
        name: 'Full name',
        affiliation: 'We Avec U (WAU) Group',
        email: 'managing.editor@wijeas.in',
        isTbc: true,
      },
    ],
  },
];
