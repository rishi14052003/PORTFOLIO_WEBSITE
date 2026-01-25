export type Project = {
  id: number;
  title: string;
  blurb: string;
  description: string;
  link: string;
  tags: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  subtitle: string;
  initials: string;
};

export type SkillCategory = {
  category: string;
  items: string;
};

export type EducationData = {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
};

export type ExperienceData = {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export type PublicationData = {
  title: string;
  technologies: string;
  date: string;
  journal: string;
  doi: string;
  links: {
    publication: string;
    github: string;
  };
};
