import React from 'react';
import {ContainerInput, ContainerIcon, Icon, InputText} from './style';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  leftIcon: any;
  refProp?: any;
}

const Input = React.forwardRef((props: Props, ref) => {
  return (
    <ContainerInput>
      {props.leftIcon && (
        <ContainerIcon>
          <Icon icon={props.leftIcon} />
        </ContainerIcon>
      )}
      <InputText {...props} underlineColorAndroid="transparent" ref={ref} />
    </ContainerInput>
  );
});

export default Input;
