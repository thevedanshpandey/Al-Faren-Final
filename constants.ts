
import { Project, Service, Leader, Office, MediaMention, BoardMember } from './types';

export const NARRATIVE = {
  heritage: {
    title: "50 Years of Authority",
    description: "Since 1974, Al Faren & Partners has evolved from a boutique architectural practice into a global powerhouse. Our journey is defined by structural honesty and a commitment to cultural landmarks that stand the test of centuries.",
    stats: [
      { year: "1974", event: "Foundation in Mumbai" },
      { year: "1998", event: "Expansion into Dubai Masterplanning" },
      { year: "2012", event: "50M Sq. Ft Milestone Reached" },
      { year: "2024", event: "Global Hub established in DIFC, Dubai" },
      { year: "Present Day", event: "Projects Delivered Across Multiple International Locations" }
    ]
  },
  synergy: {
    dubai: "The Conceptual Heart: Our Dubai studio at DIFC serves as the global forge for architectural vision, where international trends and luxury standards are synthesized into unique concepts.",
    india: "The Implementation Muscle: Our Mumbai and Delhi offices translate grand visions into structural reality, providing the technical governance required for massive institutional and infrastructure scales."
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'iconic-wankhede',
    name: 'Wankhede Stadium',
    location: 'Mumbai, India',
    category: 'Sports',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-10-07_at_05.38.29.webp?v=1696640028',
    year: '1974',
    status: 'Completed',
    description: 'The world-renowned cricket cathedral. Originally designed in 1974 and completely reimagined for the 2011 ICC World Cup Finals.'
  },
  {
    id: 'iconic-yamuna',
    name: 'Yamuna Velodrome',
    location: 'New Delhi, India',
    category: 'Sports',
    imageUrl: 'https://alfaren.ae/images/Indiragandhistadium.jpg',
    year: '1982',
    status: 'Completed',
    description: 'Commissioned for the 1982 Asian Games, this iconic structure remains a pillar of Indian sports infrastructure.'
  },
  {
    id: 'iconic-lilavati',
    name: 'Lilavati Super Specialty Hospital',
    location: 'Mumbai, India',
    category: 'Healthcare',
    imageUrl: 'https://alfarren.com/wp-content/uploads/2022/06/hospitality-projects-full.jpg',
    year: '1998',
    status: 'Completed',
    description: 'A premier multi-specialty healthcare institution that redefined hospital hospitality in India.'
  },
  {
    id: 'iconic-bcci',
    name: 'BCCI Headquarters',
    location: 'Mumbai, India',
    category: 'Institutional',
    imageUrl: 'https://alfaren.ae/images/Garware-Club.jpeg',
    year: '2006',
    status: 'Completed',
    description: 'The administrative heart of Indian cricket, combining executive office architecture with high-performance sports management facilities.'
  },
  {
    id: 'iconic-hyderabad',
    name: 'Rajiv Gandhi Cricket Stadium',
    location: 'Hyderabad, India',
    category: 'Sports',
    imageUrl: 'https://archup.net/wp-content/uploads/2023/11/Rajiv-Gandhi-International-Cricket-Stadium.webp',
    year: '2008',
    status: 'Completed',
    description: 'A major international venue with a capacity for 55,000 spectators, engineered for optimal sightlines.'
  },
  {
    id: 'iconic-nsci',
    name: 'NSCI Worli',
    location: 'Mumbai, India',
    category: 'Sports',
    imageUrl: 'https://alfaren.ae/images/DSC04986.JPG',
    year: '2014',
    status: 'Completed',
    description: 'One of the largest indoor multipurpose arenas in India, serving as a hub for international sports and entertainment events.'
  },
  {
    id: 'iconic-reliance',
    name: 'Sir H. N. Reliance Foundation Hospital',
    location: 'Mumbai, India',
    category: 'Healthcare',
    imageUrl: 'https://www.rfhospital.org/sites/default/files/2025-07/RFH_hospital-banner.jpg',
    year: '2014',
    status: 'Completed',
    description: 'A 19-storey medical marvel integrating heritage restoration with cutting-edge robotic surgery suites.'
  },
  {
    id: 'iconic-mca',
    name: 'Mumbai Cricket Association (BKC)',
    location: 'Mumbai, India',
    category: 'Sports',
    imageUrl: 'https://www.shashiprabhu.com/images/projects/interior-design/Symboysis/s7.jpg',
    year: '2016',
    status: 'Completed',
    description: 'State-of-the-art training and administrative facility in the heart of the Bandra Kurla Complex.'
  },
  {
    id: 'iconic-bmc',
    name: 'BMC Headquarters Annex',
    location: 'Mumbai, India',
    category: 'Institutional',
    imageUrl: 'https://alfaren.ae/images/Ext Bldg-Color-02.jpg',
    year: '2019',
    status: 'Completed',
    description: 'An annex to the historic Mumbai municipal headquarters, blending neoclassical aesthetics with modern utility.'
  },
  {
    id: 'iconic-msrtc',
    name: 'MSRTC Pune',
    location: 'Pune, India',
    category: 'Infrastructure',
    imageUrl: 'https://alfaren.ae/images/Panvel-Bus-Port1.jpg',
    year: '2022',
    status: 'Completed',
    description: 'Reimagining public bus transit as high-end airport-style infrastructure in Shivajinagar.'
  },
  {
    id: 'iconic-iit',
    name: 'IIT Dhanbad',
    location: 'Dhanbad, India',
    category: 'Institutional',
    imageUrl: 'https://alfaren.ae/images/iit%20dhanbad.webp',
    year: '2022',
    status: 'Completed',
    description: 'A sprawling educational development for one of India\'s premier engineering institutes.'
  },
  {
    id: 'iconic-tata',
    name: 'TATA Gymnastic Center',
    location: 'Jamshedpur, India',
    category: 'Sports',
    imageUrl: 'https://alfarren.com/wp-content/uploads/2022/06/auditorium-full.jpg',
    year: '2022',
    status: 'Completed',
    description: 'High-performance sports center dedicated to gymnastic excellence.'
  },
  {
    id: 'iconic-sies',
    name: 'SIES Research Center',
    location: 'Navi Mumbai, India',
    category: 'Institutional',
    imageUrl: 'https://www.symbiosis.ac.in/images/home/SUHRC_PHOTO.jpg',
    year: '2023',
    status: 'Completed',
    description: 'Specialized scientific research environment built for future technological exploration.'
  },
  {
    id: 'v-front',
    name: 'The Sovereign Palace',
    location: 'Dubai, UAE',
    category: 'Residential',
    imageUrl: 'https://alfaren.ae/images/FRONT.webp',
    year: '2024',
    status: 'Completed',
    description: 'An iconic neoclassical masterpiece defining ultra-luxury living on an international scale.'
  },
  // Villa Collection
  { id: 'v1', name: 'Villa Ahmad Estate', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/Ahmad-2.JPG', year: '2022', status: 'Completed', description: 'Bespoke luxury villa featuring grand proportions and traditional Middle Eastern architectural cues.' },
  { id: 'v2', name: 'AR-16 Private Residence', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/AR16.JPG', year: '2021', status: 'Completed', description: 'A contemporary take on traditional forms, optimizing light and spatial privacy.' },
  { id: 'v3', name: 'AR-48 Luxury Manor', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/AR48.JPG', year: '2022', status: 'Completed', description: 'Expansive residential estate focusing on indoor-outdoor living and premium finishes.' },
  { id: 'v4', name: 'The Glass Pavilion Villa', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/DSC02705.JPG', year: '2023', status: 'Completed', description: 'Modern minimalist residence emphasizing transparency and structural lightness.' },
  { id: 'v5', name: 'Neo-Classical Estate', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/DSC03221.JPG', year: '2021', status: 'Completed', description: 'Timeless architectural language applied to a modern functional plan.' },
  { id: 'v7', name: 'The Khoory Mansion', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/Khoory-1.JPG', year: '2020', status: 'Completed', description: 'Grand-scale residential architecture defining the luxury skyline of private Dubai.' },
  { id: 'v9', name: 'Palm Jumeirah Villa', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/IMG_4230.JPG', year: '2021', status: 'Completed', description: 'Exclusive waterfront living featuring bespoke stone craftsmanship.' },
  { id: 'v11', name: 'Ivory Heights Estate', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/IMG_4291.JPG', year: '2022', status: 'Completed', description: 'Pure white volumes and clean lines define this luxury residence.' },
  { id: 'v12', name: 'The Atrium Villa', location: 'Dubai, UAE', category: 'Villa', imageUrl: 'https://alfaren.ae/images/IMG_4296.JPG', year: '2022', status: 'Completed', description: 'Centered around a grand internal court, bringing light into every space.' }
];

export const OFFICES: Office[] = [
  {
    region: 'Dubai Studio: Global Hub',
    address: 'Innovation Suite, Emirates Financial Towers, DIFC, Dubai, UAE',
    email: 'studio@alfaren.com',
    phone: '+971 4 000 000',
    image: 'https://alfaren.ae/images/IMG_4331.JPG'
  },
  {
    region: 'Mumbai: Head Office',
    address: 'Executive Heights, Bandra Kurla Complex (BKC), Mumbai, India',
    email: 'india@alfaren.com',
    phone: '+91 22 0000 0000',
    image: 'https://alfaren.ae/images/Garware-Club.jpeg'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Master Planning',
    description: 'Large-scale urban frameworks designed to optimize land use and long-term institutional value.',
    iconName: 'Map'
  },
  {
    title: 'Institutional Landmarks',
    description: 'Civic landmarks, museums, and educational campuses designed for multi-generational impact.',
    iconName: 'Building'
  },
  {
    title: 'Ultra-Luxury Estates',
    description: 'Bespoke residential architecture with a legacy of 1500+ private villas across Dubai and India.',
    iconName: 'PenTool'
  },
  {
    title: 'Healthcare Architecture',
    description: 'High-precision medical facilities integrating technical engineering with patient comfort.',
    iconName: 'ShieldCheck'
  }
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Shashi Prabhu',
    role: 'Sr. Founder (Chairman Emeritus)',
    image: 'https://www.shashiprabhu.com/images/team/shashi-prabhu.jpg',
    bio: 'The visionary architect behind India\'s iconic sports and healthcare infrastructure for over five decades.',
    fullBio: 'Shashi Prabhu is a legendary figure in the architectural landscape of India, having founded the firm in 1974. With an career spanning over 50 years, his portfolio includes some of the nation\'s most recognized landmarks, from the Wankhede Stadium to the Lilavati Super Specialty Hospital. His leadership philosophy is rooted in structural honesty and the belief that architecture must serve as a cultural landmark for centuries.',
    expertise: ['Institutional Architecture', 'Civic Design', 'Legacy Planning'],
    experienceYears: 50
  },
  {
    name: 'Atul Prabhu',
    role: 'Sr. Associate (Design Principal)',
    image: 'https://alfaren.ae/images/Atul_prabhu.webp',
    bio: 'Guiding the firm’s global Design Strategy and conceptual leadership from the Dubai Hub.',
    fullBio: 'Atul Prabhu leads the firm\'s conceptual vision and international expansion. Based in the Dubai Studio at DIFC, he specializes in high-scale master planning and the modernization of institutional forms. His approach bridges visionary aesthetic ambition with rigorous structural logic, ensuring that Al Faren remains at the forefront of global architectural trends.',
    expertise: ['Global Master Planning', 'Conceptual Design', 'Strategic Innovation'],
    experienceYears: 28
  },
  {
    name: 'Sharad Vengurlekar',
    role: 'Senior Member — Design Studio, Dubai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
    bio: 'A distinguished member of the Design Studio in Dubai, contributing to international design excellence.',
    fullBio: 'Sharad Vengurlekar brings extensive experience to the Dubai Design Studio, focusing on high-end residential and commercial concepts. His work is characterized by a deep understanding of luxury standards and the integration of contemporary forms with functional elegance, ensuring every project meets the highest international benchmarks.',
    expertise: ['Luxury Design', 'Commercial Concepts', 'International Standards'],
    experienceYears: 32
  },
  {
    name: 'Anil Kamble',
    role: 'Operations & Project Liaison — Senior Advisory Board',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800',
    bio: 'Strategic advisor focusing on operations and institutional project liaison.',
    fullBio: 'Anil Kamble serves on the Senior Advisory Board, bridging the gap between grand architectural vision and operational reality. With a focus on project liaison and institutional coordination, he ensures that complex developments are navigated through regulatory frameworks with precision and efficiency.',
    expertise: ['Operations', 'Project Liaison', 'Regulatory Navigation'],
    experienceYears: 30
  },
  {
    name: 'Vikas Suryawanshi',
    role: 'Strategic Planning & Finance — Senior Advisory Board',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800',
    bio: 'Advising on the financial architecture and strategic growth of global initiatives.',
    fullBio: 'Vikas Suryawanshi provides critical oversight on strategic planning and financial governance. His expertise ensures the long-term viability and fiscal health of the firm\'s massive institutional and masterplanning projects, aligning economic strategy with visionary design goals.',
    expertise: ['Strategic Planning', 'Finance', 'Institutional Governance'],
    experienceYears: 28
  },
  {
    name: 'Anitha.S',
    role: 'Promoter — India Associate Firm',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
    bio: 'Driving the strategic growth and foundational stability of the India Associate Firm.',
    fullBio: 'Anitha.S is a key promoter of the India Associate Firm, playing a pivotal role in its regional expansion and institutional positioning. Her leadership focuses on fostering strategic partnerships and ensuring the firm\'s technical governance meets the highest standards of excellence.',
    expertise: ['Strategic Growth', 'Partnership Development', 'Institutional Positioning'],
    experienceYears: 25
  },
  {
    name: 'Pradnya. K',
    role: 'Promoter — India Associate Firm',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800',
    bio: 'Ensuring foundational excellence and strategic alignment for regional operations.',
    fullBio: 'Pradnya. K serves as a promoter for the India Associate Firm, dedicated to maintaining the foundational integrity and strategic alignment of the firm\'s operations in the subcontinent. Her role involves high-level oversight of regional projects and the cultivation of a culture of architectural excellence.',
    expertise: ['Foundational Integrity', 'Regional Oversight', 'Architectural Excellence'],
    experienceYears: 22
  }
];

export const LEADERSHIP: Leader[] = BOARD_MEMBERS.slice(0, 2); // Legacy support for basic views

export const MEDIA: MediaMention[] = [
  {
    id: 'm1',
    title: 'The Dubai Hub: Reimagining Global Masterplanning',
    source: 'Financial Times Architecture',
    date: '2023',
    link: '#'
  },
  {
    id: 'm2',
    title: '1500+ Villas and Counting: A Legacy of Excellence',
    source: 'The National',
    date: '2023',
    link: '#'
  },
  {
    id: 'm3',
    title: 'Recognized among Top Architectural Companies in India',
    source: 'The Economic Times',
    date: '2024',
    link: '#'
  },
  {
    id: 'm4',
    title: 'International Sports Infrastructure Development',
    source: 'SPA Sports Profile',
    date: '2024',
    link: '#'
  },
  {
    id: 'm5',
    title: 'Global Client Trust and Government Projects',
    source: 'SPA Sports Profile',
    date: '2024',
    link: '#'
  },
  {
    id: 'm6',
    title: 'International Design and Technical Collaborations',
    source: 'SPA Sports Profile',
    date: '2024',
    link: '#'
  }
];
