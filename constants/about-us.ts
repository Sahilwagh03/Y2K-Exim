export interface LeaderMember {
  name: string;
  role: string;
  quals: string[];
  imageSrc: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  }[];
  bio: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  stepNumber: number;
  icon: string; // FontAwesome icon class name
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string; // FontAwesome icon class name or svg index descriptor
  features: string[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: string; // FontAwesome icon class name
}

export const heroContent = {
  eyebrow: "Y2K EXIM GROUP",
  title: "About Us",
  description: "Learn about our journey, mission, and the values that drive us to deliver excellence in everything we do."
};

export const storyContent = {
  eyebrow: "Since 2000",
  title: "From Humble Beginnings to Industry Leaders",
  foundedYear: "2000",
  foundedLabel: "Founded",
  imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  imageAlt: "Our Professional Team",
  paragraphs: [
    "Y2K EXIM SERVICES established in 2000, which is located in Mumbai, India & Branches at Chennai, Delhi, Kolkata & Gujrat (Kandla & Mundra).",
    "The company is formed purely to cater to the ever-increasing demand for Custom Duty Refund, Custom Clearance, Freight forwarding, and Logistics requirement within India.",
    "We are Master in all kind of getting duty Refunds and any other matters like license and all solutions at any work at customs & DGFT.",
    "The company today is fully geared and equipped with our own infrastructure and expertise to transport cargoes, be it by Sea, Air or Land to any part of the world.",
    "Y2K EXIM SERVICES is part of a very elaborate network which includes numerous shipping lines and a myriad of transport agencies.",
    "We offer personalized service at reasonable rates and we guarantee a long term collaboration through our value added services."
  ]
};

export const missionVisionContent = {
  title: "Mission & Vision",
  subtitle: "What drives us and where we're headed",
  
  missionTitle: "Our Mission",
  missionText: "Our mission is to offer a structured work environment and expert-driven services that simplify business processes and ensure compliance.",
  missionPoints: [
    "Maintaining a professional, structured workplace",
    "Delivering accurate, expert-led solutions",
    "Ensuring ease in doing business",
    "Building lasting, transparent relationships"
  ],

  visionTitle: "Our Vision",
  visionText: "To redefine consulting excellence in India through digital innovation, client-centric services, and a commitment to reliability and transparency.",
  visionPoints: [
    "Drive Digitalisation by enabling most transactions online",
    "Promote faceless and paperless processes with minimal dependency",
    "Ensure error-free and risk-free service delivery",
    "Achieve the best turnaround time for every transaction",
    "Offer high-quality services at affordable and transparent pricing"
  ]
};

export const leadershipContent = {
  eyebrow: "Leadership · Y2K Exim",
  title: "Advocating Legal Compliance & Trade Excellence",
  subtitle: "The leadership behind our compliance, litigation, and global trade solutions.",
  members: [
    {
      name: "Pramod Kasale",
      role: "Director",
      quals: ["Advocate", "LLB"],
      imageSrc: "/img/leaders/pramod-kasale.jpg",
      imageAlt: "Pramod Kasale, Director & Advocate",
      stats: [
        { value: "LLB", label: "Advocate" },
        { value: "2000", label: "Founded Y2K Exim" },
        { value: "Legal", label: "Customs Advisory" },
        { value: "Director", label: "Operations" }
      ],
      bio: [
        "Pramod Kasale is a practicing Advocate and a Director at Y2K Exim Services Pvt. Ltd.",
        "He specializes in legal compliance, customs clearance advisory, and trade litigation, guiding clients through complex regulatory frameworks at customs and DGFT."
      ]
    }
  ]
};

export const journeyTimeline: TimelineItem[] = [
  {
    year: "2001",
    title: "Foundation",
    description: "Established Proprietorship Company \"Kireeti EXIM Services\" in Nagpur (MS)."
  },
  {
    year: "2005",
    title: "First Major Project",
    description: "Opened Branch Office in Raipur (CG) and arranged 1st licence from DGFT, on the inauguration of the office."
  },
  {
    year: "2006",
    title: "Expansion Begins",
    description: "After success in Northern Region, moved to Southern Region and opened another Branch Office in Guntur (AP) to cover Textile, Tobacco, and Spices segments."
  },
  {
    year: "2007",
    title: "National Recognition",
    description: "Introduced \"Subsidy Wing\" to cater Industrial Subsidies PAN India."
  },
  {
    year: "2010",
    title: "Rapid Growth Phase",
    description: "Opened a new branch in Visakhapatnam (AP) to cover Marine and Agro-based segments."
  },
  {
    year: "2012",
    title: "Delhi Operations Started",
    description: "Created a strong base in New Delhi to arrange various government permits and Industrial Subsidies from Cabinet Ministries for valued clients PAN India."
  },
  {
    year: "2013",
    title: "Entry into Western Region",
    description: "Entered Western Region through Mumbai, a Global Financial Hub, to serve Corporate and MNC clients."
  },
  {
    year: "2014",
    title: "Digital Transformation",
    description: "Completely digitalised our work base and created a paperless work environment."
  },
  {
    year: "2017",
    title: "PAN India Support Center",
    description: "Centralized functional working by establishing Corporate Office in Hyderabad (TS) with well qualified and experienced professionals who are motivated to provide Single Window base Services."
  },
  {
    year: "2018",
    title: "Technology Integration",
    description: "Implemented ERP System to enhance work capacity & capability and to deliver quality services committed on time for client's utmost satisfaction."
  }
];

export const workflowContent = {
  title: "Our Work Flow",
  subtitle: "A systematic approach to delivering excellence",
  steps: [
    {
      stepNumber: 1,
      icon: "fas fa-comments",
      title: "Lead Generation",
      description: "Receive Enquiry and assign unique sales lead number"
    },
    {
      stepNumber: 2,
      icon: "fas fa-file-alt",
      title: "Document Collection",
      description: "Inform client, collect and check required documents"
    },
    {
      stepNumber: 3,
      icon: "fas fa-sliders-h",
      title: "Application Preparation",
      description: "Prepare application and get client approval"
    },
    {
      stepNumber: 4,
      icon: "fas fa-paper-plane",
      title: "Submission & Tracking",
      description: "Submit documents and track application status"
    },
    {
      stepNumber: 5,
      icon: "fas fa-redo-alt",
      title: "Follow-up",
      description: "Handle corrections and additional documents requests."
    },
    {
      stepNumber: 6,
      icon: "fas fa-check-circle",
      title: "Approval & Update",
      description: "Receive approval and notify client."
    }
  ]
};

export const qualityServices = [
  {
    title: "Government Liaison Support",
    description: "Expert assistance to secure permits and subsidies efficiently for your business growth.",
    icon: "fas fa-university",
    features: [
      "Government permit processing",
      "Industrial subsidy facilitation",
      "Cabinet ministry liaison",
      "PAN India service coverage"
    ]
  },
  {
    title: "Compliance & Documentation",
    description: "Accurate handling of all documentation to ensure smooth approvals and audits.",
    icon: "fas fa-file-signature",
    features: [
      "Document verification",
      "Application preparation",
      "Submission management",
      "Status tracking"
    ]
  },
  {
    title: "Consultation & Advisory",
    description: "Strategic advice to help clients meet regulatory requirements and optimize operations.",
    icon: "fas fa-handshake",
    features: [
      "Policy guidance",
      "Regulatory updates",
      "Process optimization",
      "Risk assessment"
    ]
  },
  {
    title: "Client Support & Follow-Up",
    description: "Proactive communication and timely follow-up to keep you informed and satisfied.",
    icon: "fas fa-headset",
    features: [
      "Application follow-up",
      "Corrections handling",
      "Regular progress updates",
      "Client feedback management"
    ]
  }
];

export const achievementsContent = {
  title: "Our Achievements",
  subtitle: "Numbers that speak volumes about our success",
  stats: [
    {
      value: "30",
      label: "Years Experience",
      icon: "fas fa-clock"
    },
    {
      value: "3000",
      label: "Satisfied Clients",
      icon: "fas fa-users"
    },
    {
      value: "98",
      label: "Success Rate",
      icon: "fas fa-check-double"
    },
    {
      value: "24",
      label: "States & UTs Served",
      icon: "fas fa-map-marked-alt"
    }
  ]
};
