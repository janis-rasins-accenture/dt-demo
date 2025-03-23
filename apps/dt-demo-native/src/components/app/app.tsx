import React from 'react';
import { useColorScheme, View } from 'react-native';
import { ThemeProvider } from '@dt-demo/foundation-native';
import { Brand, Variant } from '@dt-demo/design-tokens';
import { StyledSafeAreaView, StyledScrollView, StyledStatusBar } from './app.styles';
import Counter from '../counter/counter';

export const App = () => {
  const mode = useColorScheme() ?? 'light';
  const isDarkMode = mode === 'dark';

  return (
    <ThemeProvider mode={mode as Variant} brand={Brand.MAIN}>
      <StyledStatusBar $isDarkMode={isDarkMode} />
      <StyledSafeAreaView $isDarkMode={isDarkMode}>
        <StyledScrollView $isDarkMode={isDarkMode}>
          <View>
            <Counter />
          </View>
        </StyledScrollView>
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

export default App;
