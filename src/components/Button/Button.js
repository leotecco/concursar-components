import React from 'react';

import styled, {css} from 'styled-components/native';

const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  PRIMARY_REVERSE: 'primary-reverse',
  LINK: 'link',
};

const COLOR_BUTTON_CSS = {
  [COLOR.PRIMARY]: css`
    background-color: ${props => props.theme.colors.brand.black};
    border-color: ${props => props.theme.colors.brand.black};
  `,
  [COLOR.SECONDARY]: css`
    background-color: ${props => props.theme.colors.brand.white};
    border-color: ${props => props.theme.colors.brand.black};
  `,
  [COLOR.PRIMARY_REVERSE]: css`
    background-color: ${props => props.theme.colors.brand.white};
    border-color: ${props => props.theme.colors.brand.white};
  `,
  [COLOR.LINK]: css`
    background-color: transparent;
    border-color: transparent;
  `,
};

const COLOR_TEXT_CSS = {
  [COLOR.PRIMARY]: css`
    color: ${props => props.theme.colors.brand.white};
  `,
  [COLOR.SECONDARY]: css`
    color: ${props => props.theme.colors.brand.black};
  `,
  [COLOR.PRIMARY_REVERSE]: css`
    color: ${props => props.theme.colors.brand.black};
  `,
  [COLOR.LINK]: css`
    color: ${props => props.theme.colors.purple};
  `,
};

const color = COLOR_COMPONENT => ({color}) => {
  if (!color) {
    return COLOR_COMPONENT[COLOR.PRIMARY];
  }

  return COLOR_COMPONENT[color];
};

const colorButton = color(COLOR_BUTTON_CSS);
const colorText = color(COLOR_TEXT_CSS);

const ButtonContainer = styled.TouchableOpacity`
  padding-vertical: 16px;
  border-radius: 18px;
  border-width: 1px;
  ${props => colorButton(props)}
`;

const ButtonText = styled.Text`
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  ${props => colorText(props)}
`;

const Button = ({color, onPress = () => {}, children = ''}) => {
  return (
    <ButtonContainer color={color} onPress={onPress}>
      <ButtonText color={color}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
