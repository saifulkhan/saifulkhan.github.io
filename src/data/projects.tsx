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
    title: 'Visualisation for Machine Learning for Human-centred Decision-making (VIS4ML4HD)',
    description: (
      <>
        Current AI/ML practice often focuses on selecting a single &ldquo;best&rdquo; model while discarding non-optimal
        alternatives. This leads to missed opportunities because we lack effective ways to understand models&apos; skill
        profiles, use them productively, or combine them meaningfully. Visualization can help address this challenge by
        leveraging the strengths of human visual perception to convey complex, high-volume information more efficiently
        than statistics or algorithms alone. It reduces cognitive load while preserving rich data context, enabling
        faster and more reliable reasoning. This{' '}
        <Link
          href="https://gtr.ukri.org/projects?ref=EP%2FX029557%2F1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          EPSRC
        </Link>
        -funded project develops a visualization-enabled infrastructure and toolset that manages large pools of ML
        models and their performance profiles, supports the construction of effective model ensembles, and empowers
        decision makers to interpret model anomalies and reconcile conflicting predictions.
      </>
    ),
    organisation: ['STFC', 'University of Oxford'],
    status: 'Ongoing',
    role: ['Co-I', 'Researcher'],
    funding: ['EPSRC', '£575k'],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title:
      'Bridging the Gap: Correlative Imaging Across Length Scales from Molecules to Organisms – From Bench to Bedside and Back Again',
    description: (
      <>
        Understanding protein mechanisms in cancer progression requires integrating data across imaging scales and
        modalities. This{' '}
        <Link
          href="https://gtr.ukri.org/projects?ref=ST%2FY004183%2F1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          UKRI
        </Link>
        -funded project combines AI/ML with advanced imaging to analyze patient biobank samples, developing automated
        workflows to accelerate discovery of mechanisms behind cancer progression and treatment resistance.
      </>
    ),
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['Co-I'],
    funding: ['UKRI', '£1.3m'],
    tags: ['Machine Learning'],
  },
  {
    title: 'Data & Analytics Facility for National Infrastructure (DAFNI)',
    description: (
      <>
        UK infrastructure research increasingly depends on modelling and analysis at unprecedented scale.{' '}
        <Link
          href="https://www.dafni.ac.uk"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          DAFNI
        </Link>{' '}
        is a national computing platform that enables researchers to run advanced simulations across transport, water,
        energy, and city-scale systems, generating insights that help make infrastructure more efficient, reliable,
        resilient, and affordable.
      </>
    ),
    organisation: ['STFC'],
    status: 'Ongoing',
    role: ['User Liaison'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'Tokamak Fusion Data Management, Active Learning, and Visualization',
    description: (
      <>
        Nuclear fusion experiments generate massive experimental datasets that remain inaccessible to modern data
        science methods. In collaboration with UK Atomic Energy Authority, led the development of{' '}
        <Link
          href="https://mastapp.site/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          FAIR-MAST
        </Link>{' '}
        for the Mega Ampere Spherical Tokamak (MAST), designing infrastructure that makes fusion data adhere to FAIR
        principles and open-sources it for visual analytics and AI/ML—the first comprehensive data management system of
        its kind in fusion research.
      </>
    ),
    organisation: ['STFC'],
    status: 'Completed',
    role: ['Co-I'],
    funding: ['UKAEA', '£64k'],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'LLM for Semantic Search & Information Retrieval',
    description:
      "Led projects demonstrating the use of large language models (LLMs) at STFC for (a) grant proposal search and (b) semantic search, clustering, and topic modeling of scientific data from STFC's DataGateway.",
    organisation: ['STFC', 'UKRI'],
    status: 'Completed',
    role: ['Data Scientist'],
    funding: [],
    tags: ['Machine Learning', 'Large Language Model'],
  },
  {
    title: 'Rapid Assistance in Modelling the Pandemic Visualization (RAMP-VIS)',
    description: (
      <>
        During COVID-19, epidemiologists and modelling scientists required rapid, intuitive access to pandemic data and
        complex modelling outputs to make informed decisions. In response to the Royal Society&apos;s{' '}
        <Link
          href="https://royalsociety.org/news-resources/projects/ramp/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          RAMP
        </Link>{' '}
        initiative, working with the University of Oxford and the Scottish Covid Response Consortium (SCRC), designed
        and developed{' '}
        <Link
          href="https://sites.google.com/view/rampvis/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          RAMP-VIS
        </Link>
        , a visualization infrastructure that enabled SCRC scientists to efficiently analyse epidemiological data.
      </>
    ),
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['EPSRC'],
    tags: ['Visualization', 'Software Engineering'],
  },
  {
    title: 'Square Kilometre Array (SKA): Streaming and Visualization',
    description: (
      <>
        The world&apos;s largest radio telescope,{' '}
        <Link
          href="https://www.skao.int/en"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
        >
          SKA
        </Link>
        , generates hundreds of TB/second of raw data, requiring real-time visualization at unprecedented scale.
        Designed and implemented a visual analytics system with low-latency data streaming architecture and web-based
        rendering pipelines for high-volume real-time data streams.
      </>
    ),
    organisation: ['University of Oxford', 'SKA'],
    status: 'Completed',
    role: ['Postdoctoral Researcher'],
    funding: ['STFC'],
    tags: ['Visualization', 'Software Engineering'],
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
          sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
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
    title: 'Climate Resilience Decision Optimiser (CReDO)',
    description: 'Development of a digital elicitation tool for climate resilience decision optimiser.',
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
    title: 'Visualisation Assisted Enterprise Search Engine',
    description: 'Prototype enterprise search and visualization infrastructure developed as part of my DPhil research.',
    organisation: ['University of Oxford'],
    status: 'Completed',
    role: ['D.Phil. (Ph.D.) Research'],
    funding: ["Laing O'Rourke"],
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
  },
  {
    title: 'Oracle Database',
    description: 'Software engineering for Oracle relational database management system.',
    organisation: ['Oracle'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
  {
    title: 'AC800 Web',
    description: "Development of software for ABB's industrial automation controller.",
    organisation: ['ABB'],
    status: 'Completed',
    role: ['Software Engineer'],
    funding: [],
    tags: ['Software Engineering'],
  },
];

export default projectsList;
