import { createGlobalStyle } from 'styled-components';
import {
  WorkSansBold,
  WorkSansMedium,
  WorkSansRegular,
  WorkSansItalicRegular,
  WorkSansSemiBold,
} from './work-sans';

export const WorkSans = createGlobalStyle`
  @font-face {
    font-family: 'WorkSans-Bold';
    src:
      local('WorkSans-Bold'),
      url('${WorkSansBold}') format('woff');
  }

  @font-face {
    font-family: 'WorkSans-Medium';
    src:
      local('WorkSans-Medium'),
      url('${WorkSansMedium}') format('woff');
  }

  @font-face {
    font-family: 'WorkSans-Regular';
    src:
      local('WorkSans-Regular'),
      url('${WorkSansRegular}') format('woff');
  }

  @font-face {
    font-family: 'WorkSans-SemiBold';
    src:
      local('WorkSans-SemiBold'),
      url('${WorkSansSemiBold}') format('woff');
  }

  @font-face {
    font-family: 'WorkSans-Italic';
    src:
      local('WorkSansItalic-Regular'),
      url('${WorkSansItalicRegular}') format('woff');
  }
`;
