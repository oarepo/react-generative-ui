import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { Authority } from './Authority';
import { UIFragment } from '../GeneratedUI';

const meta: Meta = {
  title: 'Elements/Authority',
  component: Authority,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UIFragmentContext> = (args) => <Authority  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Person = Template.bind({});

Person.args = {
  config: {
    component: 'authority',
    props: {
      children: {
        fullName: 'John Doe'
      }
    }
  },
  renderUIFragment: UIFragment
};

export const PersonWithID = Template.bind({});
PersonWithID.args = {
  config: {
    component: 'authority',
    props: {
      children: {
        fullName: 'John Doe',
        authorityIdentifiers: [
          {
            identifier: '1234',
            scheme: 'orcid'
          }
        ]
      }
    }
  },
  renderUIFragment: UIFragment
};

export const PersonWithRole = Template.bind({});
PersonWithRole.args = {
  config: {
    component: 'authority',
    props: {
      children: {
        fullName: 'John Doe',
        role: 'developer'
      }
    }
  },
  renderUIFragment: UIFragment
};
