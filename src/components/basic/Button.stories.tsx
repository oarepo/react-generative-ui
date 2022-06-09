import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';
import { Button } from './Button';

const meta: Meta = {
  title: 'Basic Elements/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Button  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'button',
    children: 'Simple button',
  }
};

export const AsLink = Template.bind({});

AsLink.args = {
  config: {
    as: 'a',
    component: 'button',
    children: 'Button as link',
    href: '#'
  }
}