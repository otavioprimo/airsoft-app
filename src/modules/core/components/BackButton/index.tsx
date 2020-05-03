import React from 'react';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import {Container, Icon, TextBack} from './styles';
import * as RootNavigation from '~/utils/rootNavigation';

export default function BackButton() {
  const onBack = () => {
    RootNavigation.goBack();
  };
  return (
    <Container onPress={onBack}>
      <Icon icon={faChevronLeft} />
      <TextBack>Voltar</TextBack>
    </Container>
  );
}
