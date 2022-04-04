// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { createContext } from 'react';
import { Icon, Label as SemanticLabel } from 'semantic-ui-react';

import { Column, Columns, Label, Header, Row } from './components';
import { ComponentMap, UIFragmentContext } from './UIGenerator/types';

export const defaultComponents = {
  columns: (context: UIFragmentContext) => (
    <Columns {...context} />
  ),
  column: (context: UIFragmentContext) => (
    <Column {...context} />
  ),
  row: (context: UIFragmentContext) => (
    <Row {...context} />
  ),
  label: (context: UIFragmentContext) => (
    <Label {...context} />
  ),
  header: (context: UIFragmentContext) => (
    <Header {...context} />
  ),
  // @ts-ignore 7031
  _fallback: ({ config }) => (
    <SemanticLabel basic color="red" >
      <Icon name="warning sign" />
      Component '{config.component}' not found
    </SemanticLabel>
  )
} as ComponentMap;

export const DataContext = createContext({});

export const AvailableComponents = createContext(defaultComponents);
