
export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  imageUrl: string;
  year: string;
  description?: string;
  status: 'Completed' | 'Under Development' | 'In Planning';
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BoardMember extends Leader {
  fullBio: string;
  expertise: string[];
  experienceYears: number;
}

export interface Office {
  region: string;
  address: string;
  email: string;
  phone: string;
  image: string;
  coordinates?: { lat: number; lng: number };
}

export interface MediaMention {
  id: string;
  title: string;
  source: string;
  date: string;
  link: string;
}
