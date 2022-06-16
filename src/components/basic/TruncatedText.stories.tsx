import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TruncatedText } from './TruncatedText';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Basic Elements/TruncatedText',
  component: TruncatedText,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <TruncatedText  {...args} />;

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

export const CustomExpand = Template.bind({});
CustomExpand.args = {
  config: {
    component: 'truncated-text',
    lines: 4,
    text: 'I will not do this,'.repeat(100),
    expandToggle: {
      component: 'button',
      children: 'Toggle'
    }
  }
}