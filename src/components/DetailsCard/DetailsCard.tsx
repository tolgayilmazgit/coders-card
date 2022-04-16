import React from 'react';

import { developer } from '@/data/developer';

import type { DetailsCardProps, DetailsCardVariantProps } from './DetailsCard.types';
import { DetailsCardDesktop } from './DetailsCardDesktop';
import { DetailsCardMobile } from './DetailsCardMobile';
import { DetailsCardTablet } from './DetailsCardTablet';

export const DetailsCard = ({ type }: DetailsCardProps) => {
  const props: DetailsCardVariantProps = {
    fullName: `${developer.firstName} ${developer.lastName}`,
    address: `${developer.city}, ${developer.country}`,
    image: developer.avatar,
    position: developer.position,
    socialMedia: [
      { name: 'instagram', link: developer.socialMedia.instagram ?? '' },
      { name: 'behance', link: developer.socialMedia.behance ?? '' },
      { name: 'linkedin', link: developer.socialMedia.linkedin ?? '' },
      { name: 'reddit', link: developer.socialMedia.reddit ?? '' },
      { name: 'vimeo', link: developer.socialMedia.vimeo ?? '' },
    ],
    phone: developer.phone,
    email: developer.email,
    isFreelancer: developer.isFreelancer,
    resumeLink: developer.cv,
  };

  if (type === 'desktop') return <DetailsCardDesktop {...props} />;
  if (type === 'tablet') return <DetailsCardTablet {...props} />;

  return <DetailsCardMobile {...props} />;
};
