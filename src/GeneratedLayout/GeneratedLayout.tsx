// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';
import { ComponentMap, LayoutFragmentConfig, LayoutGeneratorProps } from '../types';
import { AvailableComponents, defaultComponents } from '../context';
import { LayoutFragment } from './LayoutFragment';

/**
 * Generated user-configured UI view
 */
export const GeneratedLayout: React.FC<React.PropsWithoutRef<LayoutGeneratorProps>> = ({ layout, data, components }) => {
    const availableComponents = {
        ...components,
        ...defaultComponents
    } as ComponentMap

    return (
        <AvailableComponents.Provider value={availableComponents}>
            {layout?.map((fragmentConfig: LayoutFragmentConfig, index: number) =>
                LayoutFragment({ config: fragmentConfig, data, key: index })
            )}
        </AvailableComponents.Provider>)
}