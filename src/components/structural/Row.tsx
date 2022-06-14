// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid, SemanticWIDTHS } from "semantic-ui-react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { ColumnWrapper } from "./Column";
import { ErrorMessage } from "..";
import { LayoutFragment } from "../../GeneratedLayout";
import { useDataContext } from "../../hooks";


export interface RowLayoutConfig extends LayoutFragmentConfig {
    /* Number of columns rendered per each row in a grid */
    columnsPerRow?: SemanticWIDTHS | "equal",
    /* Layout definition of column items inside row */
    columns?: LayoutFragmentConfig[],
}

export const RowWrapper: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, ...rest } = config
    return LayoutFragment({
        config: {
            component: component == undefined || component !== 'row' ? 'row' : component,
            ...rest
        },
        data,
    })
}


/**
 * Component rendering its children items in a flexbox row.
 * Items can optionally be separated by a separator component.
 */
export const Row: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        columns,
        children,
        dataField,
        items,
        item = { component: 'span' },
        ...rest
    } = config as RowLayoutConfig

    if ((children?.length && columns?.length) || (children?.length && items?.length) || (columns?.length && items?.length)) {
        return <ErrorMessage component={component} {...rest}>
            Only one of 'children', 'columns' or 'items' could be specified.
        </ErrorMessage>
    }

    const dataContext = useDataContext(data, dataField)
    const itemsData = dataField && dataContext != null
        ? dataContext
        : items || children

    return (
        <Grid.Row columns={columns?.length as SemanticWIDTHS} {...rest}>
            {itemsData?.map((itemData: LayoutFragmentConfig, index: number) => (
                LayoutFragment({ config: { key: index, ...item }, data: itemData })
            ))}
            {columns?.length && (
                columns?.map(
                    (columnConfig: LayoutFragmentConfig, index: number) =>
                        <ColumnWrapper key={index} {...{ config: columnConfig, data: dataContext }} />
                )
            )}
        </Grid.Row>
    )
}