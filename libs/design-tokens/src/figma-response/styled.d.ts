import 'styled-components';
import { Theme } from '../types/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
