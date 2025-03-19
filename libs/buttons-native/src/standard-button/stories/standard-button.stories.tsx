import type { Meta, StoryContext, StoryFn, StoryObj } from '@storybook/react';
import args from './args.stories';
import StandardButton from '../standard-button';
import { action } from '@storybook/addon-actions';
import Placeholder from './assets/Placeholder';
import { StyledContainer } from './standard-button-stories.styles';

const meta: Meta<typeof StandardButton> = {
  component: StandardButton,
  title: 'Components/Buttons/Standard Button/All Stories',
  argTypes: args.argTypes,
  parameters: {
    controls: { disable: true },
  },
  decorators: (Story: StoryFn, context: StoryContext) => {
    return (
      <StyledContainer>
        <Story {...context} />
      </StyledContainer>
    );
  },
};
export default meta;
type Story = StoryObj<typeof StandardButton>;

export const PrimaryNative: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
  },
};

export const SecondaryNative: Story = {
  args: {
    $variant: 'secondary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
  },
};

export const FullWidthNative: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
    $isFullWidth: true,
  },
};

export const InvertedNative: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    $isInverted: true,
    onPress: action('onPress', { depth: 5 }),
  },
};

export const WithIconNative: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
    icon: Placeholder,
  },
};

export const WithIconsNative: Story = {
  args: {
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
    icon: Placeholder,
  },
  render: (args) => (
    <>
      <StandardButton {...args} $variant="primary" />
      <StandardButton {...args} $variant="secondary" />
    </>
  ),
};
