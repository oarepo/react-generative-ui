import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { Icon, CustomIconLayoutConfig } from './Icon';
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Basic Elements/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Icon  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SemanticIcon = Template.bind({});

SemanticIcon.args = {
  config: {
    component: 'icon',
    name: 'thumbs up',
    color: 'green'
  } as CustomIconLayoutConfig
};

export const ImageIcon = Template.bind({});

ImageIcon.args = {
  config: {
    component: 'icon',
    name: 'wireframe',
    iconSet: {
      wireframe: {
        src: 'https://semantic-ui.com//images/wireframe/image.png'
      }
    }
  }
}

export const DataIcon = Template.bind({});

DataIcon.args = {
  data: {
    iconName: 'wireframe'
  },
  config: {
    component: 'icon',
    dataField: 'iconName',
    iconSet: {
      wireframe: {
        src: 'https://semantic-ui.com//images/wireframe/image.png'
      }
    }
  }
}
