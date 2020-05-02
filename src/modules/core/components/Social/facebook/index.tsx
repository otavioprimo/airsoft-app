import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

import {Text, Icon} from '../commonStyle';
import {ButtonSocial} from './styles';

interface Props extends TouchableOpacityProps {}

export default function google(props: Props) {
  return (
    <ButtonSocial {...props}>
      <Icon icon={faFacebookF} />
      <Text>Facebook</Text>
    </ButtonSocial>
  );
}
