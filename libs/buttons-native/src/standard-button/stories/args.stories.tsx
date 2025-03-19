import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import StandardButton from '../standard-button';
import { StandardButtonProps } from '../standard-button.types';
import Placeholder from './assets/Placeholder';
import { StyledContainer } from './standard-button-stories.styles';

const meta: Meta<typeof StandardButton> = {
  title: 'Components/Buttons/Standard Button/Args',
  component: StandardButton,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    $variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      type: 'string',
      description: 'Renders one of the selected visual styles.',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: '"primary" | "secondary"' },
      },
    },
    label: {
      control: 'text',
      description: 'Content to be rendered on the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['No icon', 'Placeholder'],
      description: 'Sets icon to be displayed left of the button label.',
      mapping: {
        Placeholder: <Placeholder />,
        'No icon': null,
      },
      table: {
        defaultValue: { summary: 'No icon' },
      },
    },
    $isInverted: {
      control: { type: 'boolean' },
      description: 'Determines whether the color scheme is inverted',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables all button interactions',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'bool' },
      },
    },
    onPress: {
      action: 'onPress',
      description: "An 'onPress' event handler can be attached",
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: 'func' },
      },
    },
  },
};

export default meta;

export const ArgsNative: StoryObj<React.PropsWithChildren<StandardButtonProps>> = ({
  icon,
  ...rest
}: StandardButtonProps) => {
  return (
    <StyledContainer>
      <StandardButton {...rest} onPress={action('onPress', { depth: 5 })} icon={icon} />
    </StyledContainer>
  );
};

ArgsNative.args = {
  $variant: 'primary',
  label: 'Default label',
  disabled: false,
  $isInverted: false,
};
