import React from 'react';

import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.brand.black};
  padding-vertical: 16px;
  border-radius: 18px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.brand.black};
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

const Button = ({onPress = () => {}, children = ''}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
