import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Authority } from '..';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';


const meta: Meta = {
  title: 'Record/Authority',
  component: Authority,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LayoutFragmentProps> = (args) => <Authority  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Person = Template.bind({});

Person.args = {
  config: {
    component: 'authority',
    fullName: 'John Doe'
  },
};

export const PersonWithID = Template.bind({});
PersonWithID.args = {
  config: {
    component: 'authority',
    fullName: 'John Doe',
    authorityIdentifiers: [
      {
        identifier: '1234',
        scheme: 'orcid'
      }
    ]
  },
};

export const PersonWithRole = Template.bind({});
PersonWithRole.args = {
  config: {
    component: 'authority',
    fullName: 'John Doe',
    role: 'developer'
  },
};


export const PersonFromData = Template.bind({});
PersonFromData.args = {
  data: {
    personData: {
      fullName: 'Datavid Datovic',
      role: 'data analyst',
      authorityIdentifiers: [
        {
          identifier: '1234',
          scheme: 'orcid'
        }
      ]
    }
  },
  config: {
    component: 'authority',
    dataField: 'personData'
  },
};