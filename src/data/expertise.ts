// Content for the expertise map (the Infrastructure section of the home page), adapted from slide 25 of the
// Nov 2026 Oxford workshop talk "Software Infrastructure for Supporting Machine Learning and Numerical Modeling".
// An item with `projects` was delivered in those projects; an item without is on the roadmap
// (what the field still needs) and is shown in grey. Selecting an item shows its `about` text and `papers`.

// A paper in short form: its exact title in publicationsList, and the venue and year to show
export interface PaperCite {
  title: string;
  label: string;
}

// A project on the map. Its title, description, roles, organisations, funding, status and news come from its entry in
// the Projects list (src/data/projects.tsx, same id), so they are written once; the map adds only what that entry
// doesn't have.
export interface MapProject {
  id: string; // id of the entry in the Projects list
  name: string; // short label for pills and tooltips
  highlights?: string[]; // facts the description doesn't give
  links?: { label: string; url: string }[]; // links the description doesn't give, e.g. code
  papers?: PaperCite[]; // each links to that paper's entry in the publication list
}

export interface MapItem {
  id: string;
  label: string;
  note?: string; // second line, e.g. "storage & compute"
  projects?: string[]; // ids of the projects that delivered it; omitted = roadmap
  software?: boolean; // openly available code
  about?: string; // what it is and what was done, shown when the item is selected
  papers?: PaperCite[]; // papers about this item in particular
}

export interface ServiceGroup {
  id: string;
  label: string;
  color: string;
  items: MapItem[];
  itemsLabel?: string; // heading over the items, for a card that also has a second list
  methods?: { label: string; items: MapItem[] }; // second list under the items, e.g. methods that work at any level
}

// A research theme: projects that are selected together (not a colour theme). No caption: picking a theme shows its
// projects' cards, so anything a theme should say goes in those projects' descriptions.
export interface MapTheme {
  id: string;
  label: string;
  projects: string[];
}

// Papers cited in the map; each title must match publicationsList exactly
const PAPERS = {
  dvs: { title: 'Data Virtualization for Machine Learning', label: 'SCC 2025' },
  keywords: {
    title: 'Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service',
    label: 'arXiv 2026',
  },
  multiplexing: { title: 'A Multiplexing Design Space: Theory, Method, and Application', label: 'arXiv 2026' },
  zebraMaps: { title: 'From Visual Multiplexing to Zebra Maps', label: 'VIS 2026 poster' },
  pinnVis: { title: 'Visualization Support for Training PINNs as PDE Solvers', label: 'Engineering CCP 2026' },
  fairMast: { title: 'FAIR-MAST: A Fusion Device Data Management System', label: 'SoftwareX 2024' },
  mastData: {
    title: 'An Open Data Service for Supporting Research in Machine Learning on Tokamak Data',
    label: 'IEEE TPS 2025',
  },
  rampvisService: {
    title: 'Rapid Development of a Data Visualization Service in an Emergency Response',
    label: 'IEEE TSC 2022',
  },
  propagation: { title: 'Propagating Visual Designs to Numerous Plots and Dashboards', label: 'IEEE TVCG 2021' },
  rampvis: {
    title:
      'RAMPVIS: Answering the Challenges of Building Visualisation Capabilities for Large-scale Emergency Responses',
    label: 'Epidemics 2022',
  },
  epiModelling: {
    title: 'Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections and Recommendations',
    label: 'Phil. Trans. A 2022',
  },
  dashboards: { title: 'Dashboard Design Patterns', label: 'IEEE TVCG 2023' },
  storyboard: {
    title: 'Meta-Storyboard Using Feature-Action Patterns: Concept, Techniques, and Case Studies',
    label: 'CGF 2026',
  },
  covidStories: {
    title: 'Creating Storytelling Visualizations for the COVID-19 Pandemic Using Feature-Action Design Patterns',
    label: 'VIS workshop 2023',
  },
  streamingVis: {
    title: 'Web Performance Evaluation of High Volume Streaming Data Visualization',
    label: 'IEEE Access 2023',
  },
  streaming: {
    title: 'Streaming Technologies and Serialization Protocols: Empirical Performance Analysis',
    label: 'IEEE Access 2024',
  },
  searchProvenance: {
    title:
      'Ontology-assisted Provenance Visualization for Supporting Enterprise Search of Engineering and Business Files',
    label: 'AEI 2016',
  },
  thesis: { title: 'Visualization Assisted Enterprise Search Engine', label: 'DPhil thesis 2015' },
} satisfies Record<string, PaperCite>;

export const mapProjects: MapProject[] = [
  {
    id: 'ese',
    name: 'Enterprise Search',
    links: [{ label: 'Code', url: 'https://github.com/saifulkhan/dphil_project_search_interface' }],
    papers: [PAPERS.searchProvenance, PAPERS.thesis],
  },
  {
    id: 'fairmast',
    name: 'FAIR-MAST',
    links: [{ label: 'Code', url: 'https://github.com/ukaea/fair-mast' }],
    papers: [PAPERS.fairMast, PAPERS.mastData],
  },
  {
    id: 'llmsearch',
    name: 'LLM Search',
  },
  {
    id: 'mlinfra',
    name: 'ML Infrastructure',
    highlights: [
      '6 ML applications on one data virtualization service: PDEs, fusion, river flow, wind turbines, speech, images',
    ],
    papers: [PAPERS.dvs, PAPERS.keywords, PAPERS.multiplexing, PAPERS.zebraMaps, PAPERS.pinnVis],
  },
  {
    id: 'rampvis',
    name: 'RAMPVIS',
    highlights: [
      '~11,000 plots and dashboards',
      'In service from August 2020 to the end of 2022 on the STFC cloud',
      'Royal Society RAMP Early Career Investigator Award',
    ],
    links: [
      { label: 'Code (UI)', url: 'https://github.com/ScottishCovidResponse/rampvis-ui' },
      { label: 'Code (server)', url: 'https://github.com/ScottishCovidResponse/rampvis-api' },
    ],
    papers: [PAPERS.rampvisService, PAPERS.propagation, PAPERS.rampvis, PAPERS.storyboard],
  },
  {
    id: 'ska',
    name: 'SKA',
    papers: [PAPERS.streamingVis, PAPERS.streaming],
  },
  {
    id: 'urbanair',
    name: 'UrbanAIR',
  },
  {
    id: 'vbas',
    name: 'VBAS',
    links: [{ label: 'Code', url: 'https://github.com/saifulkhan/isc_vbas' }],
  },
];

export const mapThemes: MapTheme[] = [
  { id: 'twins', label: 'Digital twins', projects: ['urbanair'] },
  { id: 'epi', label: 'Epidemiological modelling', projects: ['rampvis'] },
  { id: 'ml', label: 'Machine learning', projects: ['mlinfra'] },
];

// one project each, so a domain's details are its project cards, after an optional `about` line (e.g. who built the
// models, where that wasn't us)
export const domains: MapItem[] = [
  { id: 'd-construction', label: 'Engineering & construction', projects: ['ese'] },
  { id: 'd-env', label: 'Environment', projects: ['urbanair'] },
  {
    id: 'd-epi',
    label: 'Epidemiology',
    projects: ['rampvis'],
    // talk slides 9–10: the SCRC built the models and the data infrastructure; RAMPVIS added visualization
    about:
      'The Scottish COVID-19 Response Consortium (SCRC) developed six epidemiological models and provided their data infrastructure. RAMPVIS supported the modelling workflow with visualization and visual analytics, from the input data through estimation, inference and simulation to communicating the results.',
  },
  { id: 'd-fusion', label: 'Fusion', projects: ['fairmast'] },
  { id: 'd-pde', label: 'PDEs & CFD', projects: ['mlinfra'] },
  { id: 'd-astro', label: 'Radio astronomy', projects: ['ska'] },
  { id: 'd-research', label: 'Research data', projects: ['llmsearch'] },
  { id: 'd-seismo', label: 'Seismology', projects: ['vbas'] },
];

// Web portals & dashboards last, so it sits over the Visualization card it mostly fronts
export const interfaces: MapItem[] = [
  {
    id: 'i-apis',
    label: 'APIs & data loaders',
    projects: ['mlinfra', 'fairmast'],
    about:
      'Access from code: the data virtualization service has a REST API and feeds virtual datasets straight into ML data loaders, and FAIR-MAST publishes the MAST archive as Zarr and Parquet files in a public object store, with tutorials for loading them.',
    papers: [PAPERS.dvs, PAPERS.mastData],
  },
  { id: 'i-notebooks', label: 'Notebooks' },
  { id: 'i-llm', label: 'LLM assistants' },
  {
    id: 'i-portals',
    label: 'Web portals & dashboards',
    projects: ['rampvis', 'fairmast', 'urbanair', 'ska'],
    about:
      "Web front ends: the RAMPVIS portal, where scientists searched and browsed thousands of plots and dashboards; the FAIR-MAST portal and dashboards for browsing the MAST tokamak's data catalogue; an UrbanAIR dashboard, created with VITO, that shows a green potential map around Antwerp; and browser views of high-volume SKA data streams.",
    papers: [PAPERS.rampvisService, PAPERS.dashboards, PAPERS.streamingVis],
  },
];

export const services: ServiceGroup[] = [
  {
    id: 'discovery',
    label: 'Discovery',
    color: '#00796B',
    items: [
      {
        id: 's-onto',
        label: 'Ontology-driven search',
        projects: ['rampvis', 'ese'],
        about:
          'In RAMPVIS, an ontology links data streams, visual designs and web pages, so scientists can search thousands of plots and developers can find the data streams that fit a design. In the DPhil, a search engine that learns ontologies improves precision and recall when searching engineering files.',
        papers: [PAPERS.propagation, PAPERS.rampvisService, PAPERS.searchProvenance],
      },
      {
        id: 's-semantic',
        label: 'Semantic search with LLMs',
        projects: ['llmsearch'],
        about:
          "LLM-based semantic search over STFC grant proposals and the scientific data in STFC's DataGateway, so people can find relevant records by meaning, not only by exact keywords.",
      },
      {
        id: 's-keywords',
        label: 'LLM keyword generation',
        projects: ['mlinfra'],
        about:
          'When someone creates a virtual dataset, LLMs read its README (metadata, lineage and comments) and generate search keywords, so others can find the dataset instead of building it again.',
        papers: [PAPERS.keywords],
      },
      {
        id: 's-enterprise',
        label: 'Enterprise search',
        projects: ['ese'],
        software: true,
        about:
          "A proof-of-concept search engine for the engineering and business files of Laing O'Rourke. A search provenance graph shows what colleagues have already searched, so users can reason about files a search may have missed.",
        papers: [PAPERS.searchProvenance, PAPERS.thesis],
      },
      { id: 's-recommend', label: 'Dataset & model recommendation' },
    ],
  },
  {
    id: 'integration',
    label: 'Data integration',
    color: '#0E7490',
    items: [
      {
        id: 's-dvs',
        label: 'Data virtualization',
        projects: ['mlinfra'],
        about:
          'Instead of saving copies, ML teams define virtual datasets: links to source data plus the transformations to apply. The service builds the data on demand when a data loader asks for it, with caching, and serves six ML applications (images, speech, PDEs, river flow, wind turbines and fusion).',
        papers: [PAPERS.dvs],
      },
      {
        id: 's-fair',
        label: 'FAIR data management',
        projects: ['fairmast'],
        software: true,
        about:
          'FAIR-MAST makes the archive of the MAST tokamak (about 40,000 experimental shots) findable, accessible, interoperable and reusable, with open data and metadata in a public object store and a data catalogue.',
        papers: [PAPERS.fairMast, PAPERS.mastData],
      },
      {
        id: 's-agents',
        label: 'Data agents',
        projects: ['rampvis'],
        about:
          'Downloader agents fetch new data from the SCRC data infrastructure on a schedule, both captured COVID-19 data and modelling results, and split each data product into the data streams that plots use, so volunteers only had to register new data sources.',
        papers: [PAPERS.rampvisService],
      },
      {
        // simple REST calls, not agents: the user corrected that on 2026-11-23
        id: 's-extapis',
        label: 'External APIs',
        projects: ['urbanair'],
        about:
          'Pulling data from external services through simple REST API calls. In UrbanAIR, this brings external data into the platform, where it feeds the models and dashboards.',
      },
      {
        id: 's-stream',
        label: 'Real-time streaming',
        projects: ['ska'],
        about:
          'A low-latency architecture that streams high-volume telescope data through a messaging system to the web browser, with tools to compare streaming technologies, serialization protocols and rendering performance.',
        papers: [PAPERS.streamingVis, PAPERS.streaming],
      },
      {
        id: 's-prov',
        label: 'Provenance',
        projects: ['ese', 'mlinfra'],
        about:
          "Recording where data and results came from. In enterprise search, a search provenance graph maps out the results and how each search was carried out, so colleagues on a project can see each other's searches and reason about files that may have been missed. In the ML Infrastructure, each virtual dataset records its parent datasets, the transformations applied and their settings, such as a sampling strategy and random seed, so any experiment can be repeated.",
        papers: [PAPERS.searchProvenance, PAPERS.dvs],
      },
    ],
  },
  {
    id: 'analysis',
    label: 'Analysis',
    color: '#4338CA',
    items: [
      {
        id: 's-analytical',
        label: 'Analytical agents',
        projects: ['rampvis'],
        about:
          "After each data update, analytical agents precompute derived data streams, such as how similar the COVID-19 case curves of Scotland's 14 regions are, so plots don't have to compute them on the fly.",
        papers: [PAPERS.rampvisService],
      },
      {
        id: 's-cluster',
        label: 'Clustering & topic modelling',
        projects: ['llmsearch'],
        about:
          "Clustering and topic modelling of the scientific data in STFC's DataGateway, giving an overview of what the collection holds.",
      },
      { id: 's-sensitivity', label: 'Uncertainty & sensitivity' },
    ],
  },
  {
    id: 'models',
    label: 'Models & ensembles',
    color: '#6D28D9',
    items: [
      {
        id: 's-ensembles',
        label: 'Model pool & ensembles',
        projects: ['mlinfra'],
        about:
          'Rather than keeping only the best model, tools catalogue and test large pools of trained models and combine models with different strengths into ensembles, which also help spot unusual or conflicting predictions.',
      },
      {
        id: 's-observability',
        label: 'Model observability',
        projects: ['mlinfra'],
        about:
          'A client, similar to MLflow, captures data from every model run, such as parameters, metrics and outputs, so runs of ML and other models can be followed, compared and repeated.',
      },
      {
        id: 's-pinn',
        label: 'Physics-informed ML (PINNs)',
        projects: ['mlinfra'],
        about:
          "Support for training physics-informed neural networks as PDE solvers: sampling strategies run as data transformations in the data virtualization service, and multiplexed plots show where in the domain training converges and where it doesn't.",
        papers: [PAPERS.pinnVis],
      },
      {
        id: 's-pde-discovery',
        label: 'PDE discovery',
        projects: ['mlinfra'],
        about: 'Learning the partial differential equations (PDEs) that govern a system directly from its data.',
      },
      {
        id: 's-active',
        label: 'Active learning',
        projects: ['fairmast'],
        about:
          'A prototype that uses active learning and visualization to help experts annotate fusion diagnostic data: the model picks the examples most worth labelling, so experts label fewer of them.',
      },
      {
        id: 's-twin',
        label: 'Digital twin as a service',
        projects: ['urbanair'],
        // the user doesn't connect climate and urban models (corrected on 2026-11-23); they deployed City4CFD
        about:
          "A platform on the EU's Destination Earth (DestinE) that offers UrbanAIR's digital twin as a service. It runs TU Delft's City4CFD, which reconstructs 3D city models for urban flow simulations, as a service. UrbanAIR is working towards street-level forecasts of air quality and heat stress for five European cities.",
      },
      { id: 's-profiling', label: 'Model testing & profiling' },
    ],
  },
  {
    id: 'visualization',
    label: 'Visualization',
    color: '#8A3B9E',
    // the four levels of visualization (Chen et al., Epidemics 2022), from one chart to an exponential space of options
    itemsLabel: 'Four levels',
    items: [
      {
        id: 's-dissem',
        label: 'Disseminative',
        projects: ['rampvis', 'mlinfra'],
        about:
          'Informing others, such as policy makers and the public, when the message is already known: often a single chart will do. RAMPVIS and the ML Infrastructure used Meta-StoryBoard to turn COVID-19 data and the progress of ML workflows into stories.',
        papers: [PAPERS.rampvis, PAPERS.storyboard],
      },
      {
        id: 's-observ',
        label: 'Observational',
        projects: ['rampvis', 'mlinfra', 'fairmast', 'urbanair', 'ska', 'vbas', 'ese'],
        about:
          'Routinely viewing many data streams, one after another, so the effort grows with the number of streams. Examples: dashboards of daily COVID-19 data and modelling results with uncertainty, data from MAST fusion experiments in FAIR-MAST, a green potential map around Antwerp in UrbanAIR, live SKA telescope data, seismic events under review in VBAS, enterprise search results, and the data and outputs of ML models.',
        papers: [PAPERS.rampvis, PAPERS.dashboards, PAPERS.streamingVis],
      },
      {
        id: 's-analyt',
        label: 'Analytical',
        // not UrbanAIR (no analytical visualization there yet) and not SKA (observational only); both per the user,
        // 2026-11-23
        projects: ['rampvis', 'mlinfra', 'vbas', 'ese'],
        about:
          "Using algorithms to find similarities, clusters and correlations, where the number of comparisons grows quickly with the data. Examples: comparing COVID-19 case curves across Scotland's 14 regions, finding patterns and anomalies in seismic data, spotting files a search missed, and finding features and patterns in ML data.",
        papers: [PAPERS.rampvis, PAPERS.searchProvenance],
      },
      {
        id: 's-modeldev',
        label: 'Model-developmental',
        projects: ['rampvis', 'mlinfra', 'vbas'],
        about:
          "Helping modellers build and test their models: exploring parameters, ensembles, sensitivity and uncertainty, where the space of options grows exponentially. On RAMPVIS, other teams used the infrastructure to build such views for the SCRC's epidemiological models; for ML, multiplexed plots show how PDE models train.",
        papers: [PAPERS.rampvis, PAPERS.epiModelling, PAPERS.pinnVis],
      },
    ],
    methods: {
      label: 'Methods',
      items: [
        {
          id: 's-propagation',
          label: 'Propagation',
          projects: ['rampvis'],
          software: true,
          about:
            'A method for scaling, usable at any level: a plot or dashboard design is written once, an ontology and multi-criteria search find the data streams it fits, and after a quality check it is propagated to all of them. In RAMPVIS it produced ~11,000 plots and dashboards.',
          papers: [PAPERS.propagation, PAPERS.rampvisService],
        },
        {
          id: 's-msb',
          label: 'Meta-StoryBoard',
          projects: ['rampvis', 'mlinfra'],
          software: true,
          about:
            'A storytelling method, usable at any level: storyboards are written in advance as feature-action patterns (when a feature such as a peak appears, take an action such as adding an annotation), so stories can be told about data that arrives later. Used for COVID-19 data and ML workflows.',
          papers: [PAPERS.storyboard, PAPERS.covidStories],
        },
        {
          id: 's-multiplex',
          label: 'Visual multiplexing',
          projects: ['mlinfra'],
          about:
            'A visual design method, usable at any level: several pieces of information about the same points share one view, layering heatmaps, contours, glyphs and the new zebra maps. Used to compare reference and predicted PDE solutions, residuals and losses while training ML models, and designed with PDE experts.',
          papers: [PAPERS.multiplexing, PAPERS.zebraMaps, PAPERS.pinnVis],
        },
      ],
    },
  },
];

export const workflow: MapItem[] = [
  { id: 'w-auto', label: 'Workflow automation' },
  {
    id: 'w-etl',
    label: 'Orchestration & ETL',
    projects: ['urbanair'],
    about:
      'Bringing data and workflows from academic, government and industry partners into the UrbanAIR platform, where they feed its models and dashboards.',
  },
  { id: 'w-hpc', label: 'HPC & cloud job submission' },
];

export const facilities: MapItem[] = [
  {
    id: 'f-stfc',
    label: 'STFC Cloud',
    note: 'storage & compute',
    projects: ['rampvis'],
    about:
      "Reliable storage and compute, ready within 24 hours at the start of the pandemic. RAMPVIS's visualization, search and analysis services ran on it from August 2020 to the end of 2022.",
  },
  {
    id: 'f-destine',
    label: 'Destination Earth (DestinE)',
    note: 'OpenStack cloud',
    projects: ['urbanair'],
    // only its OpenStack cloud (deploying services, hosting data); none of its ESA, ECMWF or EUMETSAT data or services
    about:
      "OpenStack cloud on the EU's Destination Earth (DestinE) platform, used to deploy UrbanAIR's digital twin as a service and to host data.",
  },
  { id: 'f-hpc', label: 'HPC & AI supercomputers' },
];
