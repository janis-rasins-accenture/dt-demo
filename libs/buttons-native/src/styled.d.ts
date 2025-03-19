import 'styled-components';
import { Theme } from '@dt-demo/design-tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
