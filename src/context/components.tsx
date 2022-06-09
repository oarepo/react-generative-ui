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
  Label,
  Placeholder,
  Grid,
  Item,
  Span,
  Icon,
  DefenseStatus,
  Separator,
  ResultHeader,
  DividedRow,
  Header,
  Container,
  Segment,
  Button,
} from '../components';
import { ComponentMap } from '../types';

export const defaultComponents = {
  container: Container,
  button: Button,
  authority: Authority,
  'authority-identifier': AuthorityIdentifier,
  'defense-status': DefenseStatus,
  'result-header': ResultHeader,
  column: Column,
  row: Row,
  'divided-row': DividedRow,
  list: List,
  label: Label,
  header: Header,
  raw: Raw,
  grid: Grid,
  span: Span,
  separator: Separator,
  'icon': Icon,
  placeholder: Placeholder,
  item: Item,
  'truncated-text': TruncatedText,
  'segment': Segment
} as ComponentMap;

export const AvailableComponents = React.createContext(defaultComponents);
