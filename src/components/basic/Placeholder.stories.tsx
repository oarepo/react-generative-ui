import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Placeholder, PlaceholderLayoutConfig } from './Placeholder';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Basic Elements/Placeholder',
  component: Placeholder,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Placeholder  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Paragraph = Template.bind({});

Paragraph.args = {
  config: {
    component: 'placeholder',
  } as PlaceholderLayoutConfig
};

export const ImageHeader = Template.bind({});
ImageHeader.args = {
  config: {
    component: 'placeholder',
    type: 'image-header',
    lines: 3
  } as PlaceholderLayoutConfig
};

export const Image = Template.bind({});
Image.args = {
  config: {
    component: 'placeholder',
    type: 'image',
    square: true,
    fluid: false,
    lines: 3
  } as PlaceholderLayoutConfig
}