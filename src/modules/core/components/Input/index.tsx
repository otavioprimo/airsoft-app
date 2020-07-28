import React, {useState, useEffect, useRef} from 'react';
import {
  ContainerInput,
  ContainerIcon,
  Icon,
  InputText,
  ContainerText,
  Label,
} from './style';
import {TextInputProps, Animated, Easing} from 'react-native';

interface Props extends TextInputProps {
  leftIcon?: any;
  label?: string;
  refProp?(ref: any): any;
}

const Input = React.forwardRef((props: Props, ref: any) => {
  const ANIMATION_INACTIVE = 0;
  const ANIMATION_ACTIVE = 1;

  const LABEL_TRANSLATE_Y_FOCUSED = 10;
  const LABEL_TRANSLATE_Y_FOCUSED_OUT = -10;

  const LABEL_TRANSLATE_X_FOCUSED = 10;
  const LABEL_TRANSLATE_X_FOCUSED_OUT = props.leftIcon ? -30 : 0;

  const LABEl_FONT_SIZE_FOCUSED = 10;
  const LABEl_FONT_SIZE_FOCUSED_OUT = 14;

  const [focused, setFocused] = useState(false);
  const [typed, setTyped] = useState(false);

  const labelTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shouldAnimate = typed || focused;

    Animated.timing(labelTranslate, {
      toValue: shouldAnimate ? 0 : 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  }, [focused, typed]);

  return (
    <ContainerInput>
      {props.leftIcon && (
        <ContainerIcon>
          <Icon icon={props.leftIcon} />
        </ContainerIcon>
      )}
      <ContainerText>
        {props.label && (
          <Label
            focused={focused}
            style={{
              fontSize:
                typed || focused
                  ? LABEl_FONT_SIZE_FOCUSED
                  : LABEl_FONT_SIZE_FOCUSED_OUT,
              transform: [
                {
                  translateY: labelTranslate.interpolate({
                    inputRange: [ANIMATION_INACTIVE, ANIMATION_ACTIVE],
                    outputRange: [
                      LABEL_TRANSLATE_Y_FOCUSED_OUT,
                      LABEL_TRANSLATE_Y_FOCUSED,
                    ],
                  }),
                },
                {
                  translateX: labelTranslate.interpolate({
                    inputRange: [ANIMATION_INACTIVE, ANIMATION_ACTIVE],
                    outputRange: [
                      LABEL_TRANSLATE_X_FOCUSED_OUT,
                      LABEL_TRANSLATE_X_FOCUSED,
                    ],
                  }),
                },
              ],
            }}>
            {props.label}
          </Label>
        )}

        <InputText
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(text) => {
            setTyped(Boolean(text));
            if (props.onChangeText) props.onChangeText(text);
          }}
          underlineColorAndroid="transparent"
          ref={ref}
        />
      </ContainerText>
    </ContainerInput>
  );
});

export default Input;
