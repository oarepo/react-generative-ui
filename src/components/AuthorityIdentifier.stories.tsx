import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { AuthorityIdentifier } from './AuthorityIdentifier';

const meta: Meta = {
  title: 'Elements/Authority/Identifier',
  component: AuthorityIdentifier,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <AuthorityIdentifier  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  config: {
    component: 'authority-identifier',
    props: {
      // @ts-ignore
      identifier: 'my-custom-id-1234',
      scheme: 'custom'
    }
  }
};

export const Orcid = Template.bind({});

Orcid.args = {
  config: {
    component: 'authority-identifier',
    props: {
      // @ts-ignore
      identifier: '0000-1111-2222-3333',
      scheme: 'orcid'
    }
  }
}