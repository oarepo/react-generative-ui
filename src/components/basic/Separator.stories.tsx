import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Separator } from './Separator';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Elements/Separator',
  component: Separator,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Separator  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Double = Template.bind({});

Double.args = {
  config: {
    component: 'separator',
  }
};

export const Single = Template.bind({});
Single.args = {
  config: {
    component: 'separator',
    double: false
  }
};
