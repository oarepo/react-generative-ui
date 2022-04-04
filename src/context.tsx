// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { createContext } from 'react';

import { Column, Columns, Row, SemanticFallback } from './components';
import { ComponentMap, UIFragmentContext } from './types';

export const defaultComponents = {
  columns: (context: UIFragmentContext) => (<Columns {...context} />),
  column: (context: UIFragmentContext) => (<Column {...context} />),
  row: (context: UIFragmentContext) => (<Row {...context} />),
  _fallback: (context: UIFragmentContext) => (<SemanticFallback {...context} />)
} as ComponentMap;

export const DataContext = createContext({});

export const AvailableComponents = createContext(defaultComponents);
