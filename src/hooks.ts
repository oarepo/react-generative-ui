// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useContext } from 'react';
import { DataContext } from './context';
import _get from 'lodash/get';
import _isString from 'lodash/isString';
import { DataProps } from './types';

export const useDataProps = (data: string | DataProps) => {
  if (data === undefined) return;

  console.log('?', data);
  const dataContext = useContext(DataContext);
  if (_isString(data)) {
    console.log('=', _get(dataContext, data, ''));
    return _get(dataContext, data, '');
  } else {
    console.log('=', _get(dataContext, data.path, data.default || ''));
    return _get(dataContext, data.path, data.default || '');
  }
};
