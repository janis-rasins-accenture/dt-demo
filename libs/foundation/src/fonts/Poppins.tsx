import { createGlobalStyle } from 'styled-components';
import { PoppinsRegular, PoppinsSemiBold, PoppinsBold, PoppinsItalic } from './poppins/index';

export const Poppins = createGlobalStyle`
  @font-face {
    font-family: 'Poppins-SemiBold';
    src:
      local('Poppins-SemiBold'),
      url('${PoppinsSemiBold}') format('woff');
  }
  @font-face {
    font-family: 'Poppins-Regular';
    src:
      local('Poppins-Regular'),
      url('${PoppinsRegular}') format('woff');
  }
  @font-face {
    font-family: 'Poppins-Bold';
    src:
      local('Poppins-Bold'),
      url('${PoppinsBold}') format('woff');
  }
  @font-face {
    font-family: 'Poppins-Italic';
    src:
      local('Poppins-Italic'),
      url('${PoppinsItalic}') format('woff');
  }
`;
