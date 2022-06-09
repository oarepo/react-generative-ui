import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { Label, LabelLayoutConfig } from './Label';
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Basic Elements/Label',
  component: Label,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Label  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'label',
    content: 'simple label',
    color: 'green'
  } as LabelLayoutConfig
};

export const DataLabel = Template.bind({});

DataLabel.args = {
  data: {
    content: 'this content is from data'
  },
  config: {
    component: 'label',
    dataField: 'content',
  }
}
