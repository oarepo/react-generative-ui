// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { useArrayDataContext, useDataContext } from "../../hooks"

export interface ColumnLayoutConfig extends LayoutFragmentConfig { }

/**
 * A component wrapping the layout inside a column component
 */
export const ColumnWrapper: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, items } = config
    const wrapperConfig = component == undefined || component !== 'column'
        ? { component: 'column', ...(items ? { items: items } : { items: [config] }) }
        : config

    return LayoutFragment({
        config: wrapperConfig,
        data,
    })
}

/**
 * Component putting its children items into a single responsive column.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Column for available props.
 */
export const Column: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        items,
        dataField,
        ...rest
    } = config as ColumnLayoutConfig

    const dataContext = useDataContext(data, dataField)
    const dataItems = dataField && dataContext != null
        ? dataContext
        : items

    const ColumnItems = dataItems?.map((columnItem: LayoutFragmentConfig, index: number) => (
        LayoutFragment({
            config: { key: index, ...columnItem },
            data: useArrayDataContext(dataContext, dataItems, index)
        })
    ))

    return (
        <Grid.Column {...rest}>
            {ColumnItems}
        </Grid.Column>
    )
}
