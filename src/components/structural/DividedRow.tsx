// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { useDataContext, useSeparatedItems } from "../../hooks";
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
        item,
        dataField,
        separator = { component: 'separator' },
        ...rest
    } = config as DividedRowLayoutConfig

    const dataContext = useDataContext(data, dataField)
    const itemsData = dataField && dataContext != null
        ? dataContext
        : items

    const separatedItems = useSeparatedItems(itemsData, separator)

    return LayoutFragment({
        config: {
            component: 'row',
            children: separatedItems,
            ...rest
        },
        data: dataContext,
    })
}

DividedRow.prototype.takesArray = true