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

export const Primary: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
  },
};

export const Secondary: Story = {
  args: {
    $variant: 'secondary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
  },
};

export const FullWidth: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
    $isFullWidth: true,
  },
};

export const Inverted: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    $isInverted: true,
    onClick: action('onClick', { depth: 5 }),
  },
};

export const WithIcon: Story = {
  args: {
    $variant: 'primary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
    icon: <Placeholder />,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
    icon: <Placeholder />,
  },
  render: (args) => (
    <>
      <StandardButton {...args} $variant="primary" />
      <StandardButton {...args} $variant="secondary" />
    </>
  ),
};
