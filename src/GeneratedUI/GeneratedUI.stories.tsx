import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GeneratedUI } from '.';
import { UIFragmentContext, UIGeneratorProps } from '../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Views/Generated',
  component: GeneratedUI,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UIGeneratorProps> = (args) => <GeneratedUI {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  layout: [
    { component: 'label', content: 'This label was generated from config!' }
  ]
}

export const SimpleDataContent = Template.bind({})
SimpleDataContent.args = {
  data: {
    labelValue: 'This value was fetched from data object!',
    nested: { labelValue: 'And this value was fetched from nested data path!' }
  },
  layout: [
    { component: 'label', dataField: 'labelValue' },
    { component: 'label', dataField: 'nested.labelValue' }
  ]
}

export const ComplexDataContent = Template.bind({})
ComplexDataContent.args = {
  data: {
    labels: {
      labelValue1: 'This value was fetched from data object!',
      coolColor: 'blue'
    }
  },
  layout: [
    { component: 'label', dataField: { path: 'labels.labelValue1' } },
    {
      component: 'label', dataField: {
        path: 'labels.labelValue2',
        default: 'This is a default value, because "labels.labelValue2" path is not found!'
      }
    }
  ]
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ResultListItem = Template.bind({});
const data = require('./assets/ui-data-list-item.json')
const layout = require('./assets/ui-config-list-item.json')

ResultListItem.args = { data, layout };


export const UserProvidedComponent = Template.bind({});

const MyCoolComponent: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({ config }) => {
  const { children } = config
  return (
    <>
      <h1>
        {children}
      </h1>
      <p>This component was provided externally</p>
    </>
  )
}

UserProvidedComponent.args = {
  components: {
    cool: MyCoolComponent
  },
  layout: [{
    component: 'cool',
    children: 'My cool component'
  }]
}