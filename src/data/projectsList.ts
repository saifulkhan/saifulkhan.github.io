export interface ProjectEntry {
  title: string;
  description: string;
  organisation: string[];
  status: 'Ongoing' | 'Completed';
  role: string[];
  funding: string[];
  tags: string[];
}

const projectsList: ProjectEntry[] = [
  {
    title:
      'Visualisation for Machine Learning for Human-centred Decision-making (VIS4ML4HD)',
    description:
      'Building comprehensive software infrastructure to support machine learning with human-centred decision-making.',
    organisation: ['STFC', 'University of Oxford'],
    status: 'Ongoing',
    role: ['Co-I', 'Researcher'],
    funding: ['EPSRC', '£575k'],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title:
      'Bridging the Gap: Correlative Imaging Across Length Scales from Molecules to Organisms – From Bench to Bedside and Back Again',
    description: 'Bioimaging software development.',
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['Co-I'],
    funding: ['UKRI', '£1.3m'],
    tags: ['Machine Learning'],
  },
  {
    title: 'Data & Analytics Facility for National Infrastructure (DAFNI)',
    description:
      'User liaison and support for national infrastructure analytics and data management.',
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['User Liaison'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'Tokamak Fusion Data Management, Active Learning, and Visualization',
    description:
      'Software infrastructure for tokamak fusion data management, active learning, and visualization in collaboration with the UK Atomic Energy Authority (UKAEA).',
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Co-I'],
    funding: ['UKAEA', '£64k'],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'Climate Resilience Decision Optimiser (CReDO)',
    description:
      'Development of a digital elicitation tool for climate resilience decision optimiser.',
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Research Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'HyperCrop',
    description:
      'Short project demonstrating capabilities of machine learning for crop disease prediction from hyperspectral data.',
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Researcher'],
    funding: [],
    tags: ['Machine Learning'],
  },
  {
    title: 'LLM for Grant Proposal Search',
    description:
      'Short project demonstrating the use of large language models (LLMs) for grant proposal search.',
    organisation: ['STFC', 'UKRI'],
    status: 'Completed',
    role: ['Data Scientist'],
    funding: [],
    tags: ['Machine Learning', 'Large Language Model'],
  },
  {
    title: 'LLM for DataGateway',
    description:
      'Development of a large language model (LLM) for semantic search, clustering, and topic modeling of scientific data.',
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Data Scientist'],
    funding: [],
    tags: ['Machine Learning', 'Large Language Model'],
  },
  {
    title: 'Square Kilometre Array (SKA): Streaming and Visualization',
    description:
      'Development of a comprehensive streaming and visualization infrastructure for SKA.',
    organisation: ['University of Oxford', 'SKA'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['STFC'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Rapid Assistance in Modelling the Pandemic Visualization (RAMPVIS)',
    description:
      'Visualisation and visual analytics infrastructure for supporting modeling scientists and epidemiologists during the COVID-19 pandemic.',
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['EPSRC'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Data, Workflow, and Provenance Management',
    description:
      'Development of a comprehensive infrastructure for data, workflow, and provenance management and search for Horus Security Consultancy Ltd. UK',
    organisation: ['University of Oxford', 'Horus'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['Innovate UK'],
    tags: ['Software Engineering'],
  },
  {
    title: 'Visual Bulletin Analytics System (VBAS)',
    description:
      'Development of seismological data analytics and visualization infrastructure for International Seismological Centre (ISC), UK.',
    organisation: ['University of Oxford', 'ISC'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['Innovate UK'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Visualisation Assisted Enterprise Search Engine',
    description:
      'Prototype enterprise search and visualization infrastructure developed as part of my DPhil research.',
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['DPhil/PhD Student'],
    funding: ["Laing O'Rourke"],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'Oracle Database Development',
    description: 'Software engineering for Oracle relational database.',
    organisation: ['Oracle'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'AC800 Web',
    description:
      "Development of software for ABB's industrial automation controller.",
    organisation: ['ABB'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
];

export default projectsList;
