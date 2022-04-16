import { attributes } from '../../content/developer.md';

type Developer = {
  firstName: string;
  lastName: string;
  avatar: string;
  position: string;
  phone?: string;
  email: string;
  city: string;
  country: string;
  isFreelancer: boolean;
  cv?: string;
  socialMedia: {
    instagram?: string;
    behance?: string;
    linkedin?: string;
    reddit?: string;
    vimeo?: string;
  };
};

export const developer: Developer = attributes;
