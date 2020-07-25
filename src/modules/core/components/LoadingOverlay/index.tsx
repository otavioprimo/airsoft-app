import React from 'react';

import {Container, LoadingIndicator} from './styles';

interface LoadingOverlayProps {
  visible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({visible}) => {
  return visible ? (
    <Container>
      <LoadingIndicator />
    </Container>
  ) : (
    <></>
  );
};

export default LoadingOverlay;
