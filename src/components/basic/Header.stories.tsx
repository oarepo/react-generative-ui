import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { Header, HeaderLayoutConfig } from './Header';
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Basic Elements/Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Header  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'header',
    content: 'Simple header',
    color: 'green'
  } as HeaderLayoutConfig
};

export const DataHeader = Template.bind({});

DataHeader.args = {
  data: {
    content: 'This content is from data'
  },
  config: {
    component: 'header',
    dataField: 'content',
  }
}
