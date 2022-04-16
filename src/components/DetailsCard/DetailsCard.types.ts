import { ScreenSize } from '@/typings';

export type SocialMediaName = 'instagram' | 'behance' | 'linkedin' | 'reddit' | 'vimeo';

type SocialMedia = { name: SocialMediaName; link: string }[];

export type DetailsCardVariantProps = {
  fullName: string;
  image: string;
  position: string;
  socialMedia?: SocialMedia;
  phone?: string;
  email?: string;
  address?: string;
  isFreelancer: boolean | string;
  resumeLink?: string;
};

export type DetailsCardProps = {
  type: ScreenSize;
};
