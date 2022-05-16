import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid } from './Grid';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../../GeneratedUI';

const meta: Meta = {
  title: 'Structural/Grid',
  component: Grid,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Grid {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Columns = Template.bind({});

Columns.args = {
  config: {
    'component': 'grid',
    'columnsPerRow': 2,
    'className': 'demo',
    'columns': [
      {
        'component': 'placeholder',
      },
      {
        'component': 'placeholder',
      }
    ]
  }, renderUIFragment: UIFragment
};

export const Rows = Template.bind({});
Rows.args = {
  config: {
    "component": "grid",
    "className": "demo",
    "columnsPerRow": 2,
    "rows": [
      {
        "columns": [
          {
            "component": "placeholder",
          },
          {
            "component": "placeholder",
          }
        ]
      },
      {
        "columns": [
          {
            "className": "ten wide",
            "items": [
              {
                "component": "placeholder",
              }
            ]
          },
          {
            "component": "placeholder",
          }
        ]
      }
    ]
  }, renderUIFragment: UIFragment
};