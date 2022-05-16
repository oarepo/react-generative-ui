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
  DefenseStatus,
  Separator,
} from '../components';
import { ComponentMap } from '../types';

export const defaultComponents = {
  authority: Authority,
  'authority-identifier': AuthorityIdentifier,
  'defense-status': DefenseStatus,
  column: Column,
  row: Row,
  list: List,
  raw: Raw,
  grid: Grid,
  separator: Separator,
  'custom-icon': CustomIcon,
  placeholder: Placeholder,
  item: Item,
  'truncated-text': TruncatedText,
  _fallback: SemanticFallback
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
