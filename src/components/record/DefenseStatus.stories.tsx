import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DefenseStatus } from './DefenseStatus';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Record/Defense status',
  component: DefenseStatus,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LayoutFragmentProps> = (args) => <DefenseStatus  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Defended = Template.bind({});
Defended.args = {
  config: {
    component: 'defense-status',
    defended: true
  },
};

export const NotDefended = Template.bind({});
NotDefended.args = {
  config: {
    component: 'defense-status',
    defended: false
  },
};

export const DefendedFromData = Template.bind({});
DefendedFromData.args = {
  config: {
    component: 'defense-status',
    dataField: 'defenseStatus'
  },
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
  }
}
