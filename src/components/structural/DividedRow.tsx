// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import _isString from 'lodash/isString';
import { useSeparatedItems } from "../../hooks";
import { LayoutFragment } from "../../GeneratedLayout";


export interface DividedRowLayoutConfig extends LayoutFragmentConfig {
    separator: LayoutFragmentConfig
}

/**
 * Component rendering its children items in a flexbox row.
 * Items can optionally be separated by a separator component.
 */
export const DividedRow: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        items,
        separator = { component: 'separator' },
        key,
        ...rest
    } = config as DividedRowLayoutConfig

    const separatedItems = useSeparatedItems(items, separator)

    return LayoutFragment({
        config: {
            component: 'row',
            children: separatedItems,
            key,
            ...rest
        },
        data,
    })
}