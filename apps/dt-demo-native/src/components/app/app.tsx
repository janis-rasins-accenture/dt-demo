import React from 'react';
import { useColorScheme, View } from 'react-native';
import { ThemeProvider } from '@dt-demo/foundation-native';
import { Brand, Variant } from '@dt-demo/design-tokens';
import { StyledSafeAreaView, StyledScrollView, StyledStatusBar } from './app.styles';
import { StandardButton } from '@dt-demo/buttons-native';

export const App = () => {
  const mode = useColorScheme() ?? 'light';
  const isDarkMode = mode === 'dark';

  return (
    <ThemeProvider mode={mode as Variant} brand={Brand.MAIN}>
      <StyledStatusBar $isDarkMode={isDarkMode} />
      <StyledSafeAreaView $isDarkMode={isDarkMode}>
        <StyledScrollView $isDarkMode={isDarkMode}>
          <View style={{ padding: 30, alignSelf: 'center' }}>
            <StandardButton label="Button label" />
          </View>
        </StyledScrollView>
      </StyledSafeAreaView>
    </ThemeProvider>
  );
};

export default App;
