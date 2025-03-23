import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled(View)``;

export const StyledText = styled(Text)`
  ${({ theme }) => theme.typography['title-small-bold']}
`;

export const StyledButtonsContainer = styled(View)`
  align-self: center;
  gap: 16px;
  margin-top: 16px;
  flex-direction: row;
`;

export const StyledTextContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;
