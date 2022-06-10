// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { useData, useItems } from "../../hooks"

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
        item = { component: 'span' },
        dataField,
        ...rest
    } = config as ColumnLayoutConfig

    const dataContext = useData(data, dataField)
    const resolvedItems = dataContext != null
        ? dataContext
        : items

    console.log(resolvedItems, items, config)

    const columnItems = useItems(resolvedItems, item)
    return (
        <Grid.Column {...rest}>
            {columnItems?.map((columnItem: LayoutFragmentConfig, index: number) => (
                LayoutFragment({ config: { key: index, ...columnItem, data: dataContext } })
            ))}
        </Grid.Column>
    )
}
