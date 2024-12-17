import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import StandardButton from '../standard-button';
import { StandardButtonProps } from '../standard-button.types';
import Placeholder from './assets/Placeholder';

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
    $isFullWidth: {
      control: { type: 'boolean' },
      type: 'string',
      description: 'Sets button width.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'bool' },
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
    'aria-label': {
      control: 'text',
      description:
        'ARIA label for cases where a text label is not visible on the screen. If unset label will be used.',
      table: {
        type: { summary: 'string' },
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
    onClick: {
      action: 'onClick',
      description: "An 'onClick' event handler can be attached",
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: 'func' },
      },
    },
  },
};

export default meta;

export const Args: StoryObj<React.PropsWithChildren<StandardButtonProps>> = ({
  icon,
  ...rest
}: StandardButtonProps) => {
  return <StandardButton {...rest} onClick={action('onClick', { depth: 5 })} icon={icon} />;
};

Args.args = {
  $variant: 'primary',
  $isFullWidth: false,
  label: 'Default label',
  'aria-label': 'Default Button',
  disabled: false,
  $isInverted: false,
};
