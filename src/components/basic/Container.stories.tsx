import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';
import { Container } from './Container';

const meta: Meta = {
  title: 'Basic Elements/Container',
  component: Container,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Container  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'container',
    children: 'contained content',
  }
};
