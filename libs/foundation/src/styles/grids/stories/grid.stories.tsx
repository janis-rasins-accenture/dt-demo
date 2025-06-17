import type { Meta, StoryObj } from '@storybook/react';
import Grids from './grids';

const meta: Meta<typeof Grids> = {
  component: Grids,
  title: 'Components/Foundation/Grids/All Stories',
};

export default meta;

type Story = StoryObj<typeof Grids>;

export const GridExample: Story = {
  name: 'Grid Example',
};
