import React, { ReactElement } from 'react';
import { FaInstagramSquare, FaBehanceSquare, FaLinkedin, FaRedditSquare, FaVimeoSquare } from "react-icons/fa";

import type { SocialMediaName } from './DetailsCard.types';

const socialMediaIcons = {
  instagram: FaInstagramSquare  ,
  behance: FaBehanceSquare,
  linkedin: FaLinkedin,
  reddit: FaRedditSquare,
  vimeo: FaVimeoSquare,
};

export const renderSocialMediaIcon = (socialMediaName: SocialMediaName, className: string): ReactElement => {
  const Icon = socialMediaIcons[socialMediaName];

  return <Icon className={className} />;
};
