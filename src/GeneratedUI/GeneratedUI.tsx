// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { ComponentMap, UIFragmentConfig, UIGeneratorProps } from '../types';
import { AvailableComponents, DataContext, defaultComponents } from '../context';
import _mapKeys from 'lodash/mapKeys'
import _get from 'lodash/get'
import { UIFragment } from './UIFragment';

/**
 * Generated user-configured UI view
 */
export const GeneratedUI: React.FC<UIGeneratorProps> = ({ config, data, components }) => {
    const availableComponents = {
        ...components,
        ...defaultComponents
    } as ComponentMap

    return (
        <AvailableComponents.Provider value={availableComponents}>
            <DataContext.Provider value={data}>
                {config?.map((fragment: UIFragmentConfig, index: number) =>
                    UIFragment(fragment, index)
                )}
            </DataContext.Provider>
        </AvailableComponents.Provider>)
}
