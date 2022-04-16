import React from 'react';
import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { transformImage } from '@/utils/image';

import type { DetailsCardVariantProps } from './DetailsCard.types';
import { DetailsItem } from './DetailsItem';
import { renderSocialMediaIcon } from './renderSocialMediaIcon';

const AVATAR_SIZE = 160;

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 16,
    padding: theme.spacing(4, 4, 2, 4),
    boxShadow: theme.shadows[5],

    '& .MuiCardContent-root:last-child': {
      paddingBottom: 0,
    },
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    minWidth: AVATAR_SIZE,
    minHeight: AVATAR_SIZE,
    borderRadius: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 3, 0, 3),
  },
  position: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(0.75),
  },
  iconsWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing(2, 0, 4, 0),
  },
  iconLink: {
    width: 21,
    height: 21,
    marginRight: theme.spacing(2),
  },
  icon: {
    boxSizing: 'border-box',
    //background: theme.palette.text.secondary,
    fill: theme.palette.text.secondary,
    //stroke: theme.palette.text.white,
    width: 21,
    height: 21,
    borderRadius: 3,
    padding: 3,
  },
  resetAnchorStyle: {
    textDecoration: 'none',
    color: 'unset',
  },
  moreInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridRowGap: theme.spacing(2.5),
    color: theme.palette.text.secondary,
  },
  detailsItemAvailable: {
    color: theme.palette.success.main,
  },
}));

export const DetailsCardTablet = ({
  fullName,
  image,
  position,
  socialMedia,
  phone,
  email,
  address,
  isFreelancer,
}: DetailsCardVariantProps) => {
  const classes = useStyles();

  const avatar = transformImage(image, { width: AVATAR_SIZE, height: AVATAR_SIZE });

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.avatar} image={avatar} />
      <CardContent className={classes.content}>
        <Typography variant="h1">{fullName}</Typography>
        <Typography variant="subtitle1" className={classes.position}>
          {position}
        </Typography>
        <Box className={classes.iconsWrapper}>
          {socialMedia?.map((media) => (
            <a className={classes.iconLink} key={media.name} href={media.link}>
              {renderSocialMediaIcon(media.name, classes.icon)}
            </a>
          ))}
        </Box>
        <Box className={classes.moreInfo}>
          {phone && (
            <DetailsItem label={phone} icon="phone" className={classes.resetAnchorStyle} isLink href={`tel:${phone}`} />
          )}
          {email && (
            <DetailsItem
              className={classes.resetAnchorStyle}
              label={email}
              icon="mail"
              isLink
              href={`mailto:${email}`}
            />
          )}
          {address && <DetailsItem label={address} icon="map-pin" />}
          {isFreelancer && (
            <DetailsItem className={classes.detailsItemAvailable} label="Available for freelance" icon="check" />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
