import React from 'react';
import { Meta, Story, StoryFn } from '@storybook/react';
import { DefenseStatus } from './DefenseStatus';
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
  title: 'Record/Defense status',
  component: DefenseStatus,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [DataContextDecorator]
};

export default meta;

const Template: Story<UIFragmentContext> = (args) => <DefenseStatus  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Defended = Template.bind({});
Defended.args = {
  config: {
    component: 'defense-status',
    defended: true
  },
  renderUIFragment: UIFragment
};

export const NotDefended = Template.bind({});
NotDefended.args = {
  config: {
    component: 'defense-status',
    defended: false
  },
  renderUIFragment: UIFragment
};

export const DefendedFromData = Template.bind({});
DefendedFromData.args = {
  config: {
    component: 'defense-status',
    dataField: 'defenseStatus'
  },
  renderUIFragment: UIFragment
};

DefendedFromData.parameters = {
  data: {
    defenseStatus: {
      defended: true,
      dateDefended: '2020-02-02'
    }
  }
}

export const CustomDefendedComponent = Template.bind({});
CustomDefendedComponent.args = {
  config: {
    component: 'defense-status',
    defended: true,
    defendedComponent: {
      component: 'icon',
      name: 'check circle',
      color: 'green'
    }
  }, renderUIFragment: UIFragment
}