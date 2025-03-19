import { Preview } from '@storybook/react';
import WithThemeProvider from './utils/with-theme-provider';
import { Brand, Variant } from '../../foundation/src/';

export const globalTypes = {
  brand: {
    name: 'Theme',
    description: 'Brand theme for components',
    defaultValue: Brand.MAIN,
    dynamicTitle: true,
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: Brand.MAIN, title: Brand.MAIN },
        { value: Brand.SIDE, title: Brand.SIDE },
      ],
      showName: true,
      title: 'Theme',
    },
  },
  mode: {
    name: 'Mode',
    description: 'Color theme for components',
    defaultValue: Variant.LIGHT,
    dynamicTitle: true,
    toolbar: {
      icon: 'sun',
      items: [
        { value: Variant.LIGHT, icon: 'sun', title: Variant.LIGHT },
        { value: Variant.DARK, icon: 'moon', title: Variant.DARK },
      ],
      showName: true,
      title: 'Mode',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      disable: true,
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [WithThemeProvider],
};

export default preview;
