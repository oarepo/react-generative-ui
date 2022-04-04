// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment, useContext } from 'react';

import { AvailableComponents, DataContext } from './context';
import { DataProps, UIFragmentConfig } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapKeys from 'lodash/mapKeys'

export const useDataProps = (data: string | DataProps) => {
  if (data === undefined) return;

  const dataContext = useContext(DataContext);
  if (_isString(data)) {
    return _get(dataContext, data, '');
  } else {
    return _get(dataContext, data.path, data.default || '');
  }
};

export const useUIFragment = (config: UIFragmentConfig, index?: number) => {
  const { props, component } = config
  const components = useContext(AvailableComponents)

  const translatedProps = _mapKeys(props, (_value: string, key: string) => {
    return key === 'class' ? 'className' : key
  })

  const renderContext = {
    renderUIFragment: useUIFragment,
    config: { ...config, props: translatedProps }
  }

  const UIFragmentComponent = _get(components, component, components['_fallback'])

  if (index !== undefined) {
    return <Fragment key={index}>{UIFragmentComponent(renderContext)}</Fragment>
  } else {
    return <>{UIFragmentComponent(renderContext)}</>
  }
}
