export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface SocialProfile {
  network: string;
  username: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: SocialProfile[];
}

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  startDate: string;
  endDate: string;
  url: string;
}

// Tipe Data Utama yang menggabungkan semuanya
export interface ResumeData {
  personalInfo: PersonalInfo;
  work: Work[];
  education: Education[];
  awards: Award[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}