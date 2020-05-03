import React from 'react';

import {Image} from './style';

const LogoApp = require('~/assets/demon.png');

export default function Logo() {
  return <Image source={LogoApp} resizeMode="stretch" />;
}
