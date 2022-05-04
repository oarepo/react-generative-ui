// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';

import {
  Authority,
  AuthorityIdentifier,
  Column,
  Columns,
  Raw,
  Row,
  SemanticFallback,
  TruncatedText,
  List,
  Placeholder,
  Grid,
} from '../components';
import { ComponentMap } from '../types';

export const defaultComponents = {
  authority: Authority,
  'authority-identifier': AuthorityIdentifier,
  columns: Columns,
  column: Column,
  row: Row,
  list: List,
  raw: Raw,
  grid: Grid,
  placeholder: Placeholder,
  'horizontal-list': List,
  'truncated-text': TruncatedText,
  _fallback: SemanticFallback
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
