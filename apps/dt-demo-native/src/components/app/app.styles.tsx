import { SafeAreaView, ScrollView, StatusBar, StatusBarProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

interface StyledSafeAreaViewProps extends MinimalProps {}
interface StyledScrollViewProps extends MinimalProps {}
interface StyledStatusBarProps extends StatusBarProps, MinimalProps {}
interface MinimalProps {
  $isDarkMode: boolean;
}

const mode = (isDarkMode: boolean) => (isDarkMode ? Colors.darker : Colors.lighter);

export const StyledSafeAreaView = styled(SafeAreaView)<StyledSafeAreaViewProps>`
  background-color: ${({ $isDarkMode }) => mode($isDarkMode)};
  flex: 1;
`;

export const StyledScrollView = styled(ScrollView)<StyledScrollViewProps>`
  background-color: ${({ $isDarkMode }) => mode($isDarkMode)};
  padding: 16px;
`;
export const StyledStatusBar = styled(StatusBar)<StyledStatusBarProps>`
  background-color: ${({ $isDarkMode }) => mode($isDarkMode)};
`;
