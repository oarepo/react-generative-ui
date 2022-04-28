// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { List } from 'semantic-ui-react';

import { Column, Columns, Raw, Row, SemanticFallback, TruncatedText } from '../components';
import { ComponentMap, UIFragmentContext } from '../types';

export const defaultComponents = {
  columns: (context: UIFragmentContext) => (<Columns {...context} />),
  column: (context: UIFragmentContext) => (<Column {...context} />),
  row: (context: UIFragmentContext) => (<Row {...context} />),
  list: (context: UIFragmentContext) => (<List {...context} />),
  raw: (context: UIFragmentContext) => (<Raw {...context} />),
  'horizontal-list': (context: UIFragmentContext) => (<List {...context} />),
  'truncated-text': (context: UIFragmentContext) => (<TruncatedText {...context} />),
  _fallback: (context: UIFragmentContext) => (<SemanticFallback {...context} />)
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
