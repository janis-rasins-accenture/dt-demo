import { ThemeProvider, Brand, Variant } from '@dt-demo/foundation';
import { StyledApp, StyledTitle } from './styles/app.styles';

export function App() {
  return (
    <ThemeProvider brand={Brand.MAIN} mode={Variant.LIGHT}>
      <StyledApp>
        <StyledTitle>Hello world!</StyledTitle>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
