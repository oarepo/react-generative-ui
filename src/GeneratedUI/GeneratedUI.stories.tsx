import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GeneratedUI } from '.';
import { UIFragmentContext, UIGeneratorProps } from '../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Generated UI',
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
    { component: 'label', props: { content: 'This label was generated from config!' } }
  ]
}

export const SimpleDataContent = Template.bind({})
SimpleDataContent.args = {
  data: {
    labelValue: 'This value was fetched from data object!',
    nested: { labelValue: 'And this value was fetched from nested data path!' }
  },
  layout: [
    { component: 'label', data: 'labelValue' },
    { component: 'label', data: 'nested.labelValue' }
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
    { component: 'label', data: { path: 'labels.labelValue1' } },
    {
      component: 'label', data: {
        path: 'labels.labelValue2',
        default: 'This is a default value, because "labels.labelValue2" path is not found!'
      }
    },
    {
      component: 'label',
      props: { content: 'This one uses data to control the "color" property' },
      data: { props: { color: 'labels.coolColor' } }
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

const MyCoolComponent: React.FC<UIFragmentContext> = ({ config }) => {
  const { props } = config
  return (
    <>
      <h1>
        {props?.children}
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
    props: { children: 'My cool component' }
  }]
}