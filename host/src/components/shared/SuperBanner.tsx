import React, { PropsWithChildren } from 'react';

import { StyledSuperBannerWrapper, StyledSuperBannerHeading } from './styles';

const SuperBanner = ({ heading, children }: PropsWithChildren<{ heading: string }>) => {
  return (
    <StyledSuperBannerWrapper>
      <StyledSuperBannerHeading>{heading}</StyledSuperBannerHeading>
      {children}
    </StyledSuperBannerWrapper>
  );
};

export default SuperBanner;
