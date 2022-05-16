import React from 'react';
import { Meta, Story, StoryFn } from '@storybook/react';
import { Authority } from '..';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { useParameter, useState } from '@storybook/addons';
import { DataContext } from '../../context/data';
import { UIFragment } from '../../GeneratedUI/UIFragment';

const DataContextDecorator = (Story: StoryFn) => {
  const initialState = useParameter('data', {})

  const [data] = useState({ ...initialState })

  return <><DataContext.Provider value={data}><Story /></DataContext.Provider></>
}


const meta: Meta = {
  title: 'Elements/Authority',
  component: Authority,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [DataContextDecorator]
};

export default meta;

const Template: Story<UIFragmentContext> = (args) => <Authority  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Person = Template.bind({});

Person.args = {
  config: {
    component: 'authority',
    fullName: 'John Doe'
  },
  renderUIFragment: UIFragment
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
  renderUIFragment: UIFragment
};

export const PersonWithRole = Template.bind({});
PersonWithRole.args = {
  config: {
    component: 'authority',
    fullName: 'John Doe',
    role: 'developer'
  },
  renderUIFragment: UIFragment
};


export const PersonFromData = Template.bind({});
PersonFromData.args = {
  config: {
    component: 'authority',
    dataField: 'personData'
  },
  renderUIFragment: UIFragment
};

PersonFromData.parameters = {
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
  }
}