import React from 'react';
import { Link } from '@mui/material';

export interface ProjectEntry {
  title: string;
  description: string | React.ReactNode;
  organisation: string[];
  status: 'Ongoing' | 'Completed';
  role: string[];
  funding: string[];
  tags: string[];
}

const projectsList: ProjectEntry[] = [
  {
    title: 'UrbanAIR: Digital Twin as a Service (DTaaS) for Urban Air Quality',
    description: (
      <>
        Cities need street-level, real-time environmental intelligence to protect public health and plan for climate
        resilience. Leading the development of the EU-funded{' '}
        <Link
          href="https://www.urbanair-project.eu/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1565c0' }}
        >
          UrbanAIR
        </Link>{' '}
        Digital Twin as a Service (DTaaS) platform, delivering real-time, street-level air quality and heat resilience
        forecasts across three European cities, in collaboration with international partners including VITO (Belgium)
        and Antwerp City Council.
      </>
    ),
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['Technical Lead'],
    funding: ['EU'],
    tags: ['Software Engineering', 'Machine Learning'],
  },
  {
    title: 'A Long-term VIS-enabled Infrastructure for Supporting ML-assisted Human Decision-making',
    description: (
      <>
        Machine learning (ML) developers often train many models for a task, keep the best one and discard the rest. Yet
        imperfect models with different strengths can work well together, like people in a team. This{' '}
        <Link
          href="https://gtr.ukri.org/find-research-and-innovation/project/a2a9344d-1d0d-48f2-8307-43ffb2abada1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1565c0' }}
        >
          EPSRC
        </Link>
        -funded project uses visualization, which lets people take in the profiles of these models at a glance. It
        builds tools to catalogue and test large pools of ML models and combine them into effective teams (ensembles).
        The tools also help decision-makers spot unusual or conflicting predictions. I lead the development of the
        ensemble models, the overall system and the data virtualization services. These services bring scattered data
        sources together for large-scale ML. My work also uses large language models (LLMs) to automatically generate
        metadata for datasets and help AI agents find the right services.
      </>
    ),
    organisation: ['STFC', 'University of Oxford'],
    status: 'Ongoing',
    role: ['Co-PI'],
    funding: ['EPSRC', '£584k'],
    tags: ['Visualization', 'Machine Learning', 'Large Language Model', 'Software Engineering'],
  },
  // {
  //   title:
  //     'Bridging the Gap: Correlative Imaging Across Length Scales from Molecules to Organisms – From Bench to Bedside and Back Again',
  //   description: (
  //     <>
  //       Understanding protein mechanisms in cancer progression requires integrating data across imaging scales and
  //       modalities. This{' '}
  //       <Link
  //         href="https://gtr.ukri.org/projects?ref=ST%2FY004183%2F1"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         sx={{ color: '#1565c0' }}
  //       >
  //         UKRI
  //       </Link>
  //       -funded project combines AI/ML with advanced imaging to analyze patient biobank samples, developing automated
  //       workflows to accelerate discovery of mechanisms behind cancer progression and treatment resistance.
  //     </>
  //   ),
  //   organisation: ['STFC'],
  //   status: 'Ongoing',
  //   role: ['Co-I'],
  //   funding: ['UKRI', '£1.3m'],
  //   tags: ['Machine Learning'],
  // },
  {
    title: 'DAFNI Data Bridge',
    description: (
      <>
        UK infrastructure research increasingly depends on modelling and analysis at unprecedented scale. The{' '}
        <Link href="https://www.dafni.ac.uk" target="_blank" rel="noopener noreferrer" sx={{ color: '#1565c0' }}>
          Data &amp; Analytics Facility for National Infrastructure (DAFNI)
        </Link>{' '}
        is a national computing platform that enables researchers to run advanced simulations across transport, water,
        energy, and city-scale systems. Led the development of a cross-platform data bridge connecting DAFNI and CEDA
        (Centre for Environmental Data Analysis) services to accelerate environmental modelling and streamline
        researcher access to national data resources.
      </>
    ),
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['Technical Lead', 'User Liaison'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'Tokamak Fusion Data Management, Active Learning, and Visualization',
    description: (
      <>
        Nuclear fusion experiments generate massive datasets that remain inaccessible to modern data science methods. In
        collaboration with the UK Atomic Energy Authority (UKAEA), supervised the development of{' '}
        <Link href="https://mastapp.site/" target="_blank" rel="noopener noreferrer" sx={{ color: '#1565c0' }}>
          FAIR-MAST
        </Link>{' '}
        for the Mega Ampere Spherical Tokamak (MAST). It makes fusion data FAIR (findable, accessible, interoperable and
        reusable) and opens it up for visual analytics and AI/ML. It is the first comprehensive data management system
        of its kind in fusion research. Following this success, built a prototype showing how active learning and
        visualization can help experts annotate fusion diagnostic data.
      </>
    ),
    organisation: ['STFC'],
    status: 'Completed',
    role: ['PI'],
    funding: ['UKAEA', '£64k'],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'LLM for Semantic Search & Information Retrieval',
    description:
      "Led development of LLM-based semantic search, information retrieval, and automated metadata generation at STFC, including (a) grant proposal search and (b) semantic search, clustering, and topic modelling of scientific data from STFC's DataGateway.",
    organisation: ['STFC', 'UKRI'],
    status: 'Completed',
    role: ['Data Scientist'],
    funding: [],
    tags: ['Machine Learning', 'Large Language Model'],
  },
  {
    title: 'HyperCrop',
    description:
      'Applied machine learning to hyperspectral imaging for crop disease prediction, in collaboration with RAL Space.',
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Researcher'],
    funding: [],
    tags: ['Machine Learning'],
  },
  {
    title: 'Rapid Assistance in Modelling the Pandemic Visualization (RAMPVIS)',
    description: (
      <>
        During COVID-19, epidemiologists needed to make high-stakes decisions from tens of thousands of rapidly evolving
        datasets, with no existing infrastructure to visualize or search them at that scale. Initially volunteered as a
        software architect for the Royal Society&apos;s{' '}
        <Link
          href="https://royalsociety.org/news-resources/projects/ramp/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1565c0' }}
        >
          RAMP
        </Link>{' '}
        initiative, where a working system was needed within three months. To meet this deadline, ran an agile process
        built on continuous, direct stakeholder engagement instead of fixed sprints. Later, funded by EPSRC, led
        development of{' '}
        <Link
          href="https://sites.google.com/view/rampvis/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1565c0' }}
        >
          RAMPVIS
        </Link>
        , a visual analytics infrastructure, in collaboration with the UK visualization research community and the
        Scottish COVID Response Consortium (SCRC). Designed and implemented infrastructure for rapidly deploying
        visualizations, dashboards, and search capabilities across tens of thousands of heterogeneous, continuously
        evolving datasets, and developed novel methods for semi-automated visualization generation.
      </>
    ),
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['Software Architect (Volunteer)', 'Postdoctoral Researcher'],
    funding: ['EPSRC'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Square Kilometre Array (SKA): Streaming and Visualization',
    description: (
      <>
        The{' '}
        <Link href="https://www.skao.int/en" target="_blank" rel="noopener noreferrer" sx={{ color: '#1565c0' }}>
          SKA
        </Link>{' '}
        is the world&apos;s largest radio telescope, generating astronomical data at a volume and rate where real-time
        streaming and visualization are essential to monitor and act on data as it arrives. Led the design and
        development of a scalable, real-time streaming and visualization infrastructure to meet this need, with a
        low-latency data streaming architecture and web-based rendering pipelines for high-volume data streams.
      </>
    ),
    organisation: ['University of Oxford', 'SKA'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['STFC'],
    tags: ['Visualization', 'Software Engineering'],
  },
  // {
  //   title: 'Climate Resilience Decision Optimiser (CReDO)',
  //   description: 'Development of a digital elicitation tool for climate resilience decision optimiser.',
  //   organisation: ['STFC'],
  //   status: 'Completed',
  //   role: ['Research Software Engineer'],
  //   funding: [],
  //   tags: ['Software Engineering'],
  // },
  {
    title: 'Data, Workflow, and Provenance Management',
    description:
      "Horus Security Consultancy's intelligence services depend on large-scale open-source data, but manual workflows could no longer keep pace with the growing volume of online sources. In this Innovate UK-funded university-industry collaboration, led development of a prototype system for scalable, automated open-source intelligence gathering: worked with analysts to capture operational workflows and translate domain requirements into system architecture, and designed and implemented an end-to-end platform for data ingestion, management, search, and provenance, providing analysts with efficient access to information. Later joined Horus as Lead Data Scientist to lead the transition of the prototype from proof-of-concept to commercial software, building and leading a team of software engineers to deliver multiple customer-facing products.",
    organisation: ['University of Oxford', 'Horus'],
    status: 'Completed',
    role: ['Postdoctoral Researcher', 'Lead Data Scientist'],
    funding: ['Innovate UK'],
    tags: ['Software Engineering'],
  },
  {
    title: 'Visual Bulletin Analytics System (VBAS)',
    description: (
      <>
        Seismologists at the International Seismological Centre (ISC) previously relied on inefficient, paper-based
        workflows to review complex seismic events across multiple data types. Developed{' '}
        <Link
          href="https://www.isc.ac.uk/iscbulletin/review/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1565c0' }}
        >
          VBAS
        </Link>
        —an interactive visualization system that integrates diverse seismological data, including hypocentres,
        magnitudes, phase arrivals, travel-time curves, seismicity maps, station geometry, and more. VBAS provides a
        unified interface that helps ISC analysts detect patterns, identify anomalies, and perform data analysis far
        more efficiently. The system replaced the ISC&apos;s 30-year-old paper-based process.
      </>
    ),
    organisation: ['University of Oxford', 'ISC'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['Innovate UK'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Visualization Assisted Enterprise Search Engine',
    description:
      "Laing O'Rourke, an international engineering and construction company, holds a vast archive of project knowledge whose reuse and monetization depend on searching it quickly and reliably—beyond what standard enterprise search could provide. Developed a proof-of-concept visualization-assisted search engine to address this challenge: a focus+context visualization for rapid observation of false positives and false negatives in search results, a Search Provenance Graph with visual representations of search collaboration, and a special-purpose enterprise search engine with machine learning of ontologies to improve search precision and recall.",
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['D.Phil. (Ph.D.) Research'],
    funding: ["Laing O'Rourke"],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'Oracle Database',
    description:
      "Oracle's database runs mission-critical operations for customers worldwide, where defects or missing features can disrupt business operations—making reliable engineering essential. Developed and debugged Oracle database service features, and independently identified the need for, designed, and built automation tools that improved efficiency and reduced cost across the patch build, test, and delivery pipeline.",
    organisation: ['Oracle'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'AC800 Web',
    description:
      "Commercial real-time operating systems (RTOS) added significant licensing cost to industrial automation controllers, motivating ABB's investigation of Linux as a free, real-time-capable alternative for these time-critical embedded systems. Developed Linux system software for ABB's industrial automation controllers and conducted performance benchmarks across various Linux RTOS flavours to assess real-time suitability.",
    organisation: ['ABB'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
];

export default projectsList;
