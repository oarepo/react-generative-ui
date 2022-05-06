import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomIcon } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { CustomIconLayoutConfig } from './CustomIcon';

const meta: Meta = {
  title: 'Elements/Custom Icon',
  component: CustomIcon,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <CustomIcon  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SemanticIcon = Template.bind({});

SemanticIcon.args = {
  config: {
    component: 'custom-icon',
    name: 'thumbs up',
    color: 'green'
  } as CustomIconLayoutConfig
};

export const ImageIcon = Template.bind({});

ImageIcon.args = {
  config: {
    component: 'custom-icon',
    name: 'wireframe',
    nameMap: {
      wireframe: {
        src: 'https://semantic-ui.com//images/wireframe/image.png'
      }
    }
  }
}