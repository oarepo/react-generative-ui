// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { ComponentMap, UILayoutConfig, UIGeneratorProps } from '../types';
import { AvailableComponents, DataContext, defaultComponents } from '../context';
import _mapKeys from 'lodash/mapKeys'
import _get from 'lodash/get'
import { UIFragment } from './UIFragment';

/**
 * Generated user-configured UI view
 */
export const GeneratedUI: React.FC<React.PropsWithChildren<UIGeneratorProps>> = ({ layout, data, components }) => {
    const availableComponents = {
        ...components,
        ...defaultComponents
    } as ComponentMap

    return (
        <AvailableComponents.Provider value={availableComponents}>
            <DataContext.Provider value={data}>
                {layout?.map((fragment: UILayoutConfig, index: number) =>
                    UIFragment(fragment, index)
                )}
            </DataContext.Provider>
        </AvailableComponents.Provider>)
}
