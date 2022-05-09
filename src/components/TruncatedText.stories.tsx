import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TruncatedText } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Elements/TruncatedText',
  component: TruncatedText,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <TruncatedText  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'truncated-text',
    lines: 2,
    text: 'Tis text is truncated, '.repeat(100)
  }
};

export const Shorter = Template.bind({});
Shorter.args = {
  config: {
    component: 'truncated-text',
    lines: 4,
    text: 'Tis textt is too short to be truncated'
  }
}