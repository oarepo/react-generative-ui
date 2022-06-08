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
  TruncatedText,
  List,
  Placeholder,
  Grid,
  Item,
  Icon,
  DefenseStatus,
  Separator,
  ResultHeader,
  DividedRow,
} from '../components';
import { ComponentMap } from '../types';

export const defaultComponents = {
  authority: Authority,
  'authority-identifier': AuthorityIdentifier,
  'defense-status': DefenseStatus,
  'result-header': ResultHeader,
  column: Column,
  row: Row,
  'divided-row': DividedRow,
  list: List,
  raw: Raw,
  grid: Grid,
  separator: Separator,
  'icon': Icon,
  placeholder: Placeholder,
  item: Item,
  'truncated-text': TruncatedText,
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
