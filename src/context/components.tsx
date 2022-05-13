// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';

import {
  Authority,
  AuthorityIdentifier,
  Column,
  Raw,
  Row,
  SemanticFallback,
  TruncatedText,
  List,
  Placeholder,
  Grid,
  Item,
  CustomIcon,
} from '../components';
import { ComponentMap } from '../types';

export const defaultComponents = {
  authority: Authority,
  'authority-identifier': AuthorityIdentifier,
  column: Column,
  row: Row,
  list: List,
  raw: Raw,
  grid: Grid,
  'custom-icon': CustomIcon,
  placeholder: Placeholder,
  item: Item,
  'truncated-text': TruncatedText,
  _fallback: SemanticFallback
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
