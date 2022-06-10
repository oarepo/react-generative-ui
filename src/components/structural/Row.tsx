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
        columnsPerRow = 'equal',
        columns,
        children,
        dataField,
        ...rest
    } = config as RowLayoutConfig



    if (children?.length && columns?.length) {
        return <ErrorMessage component={component} {...rest}>
            Only one of 'children' or 'columns' could be specified.
        </ErrorMessage>
    }

    return (
        <Grid.Row columns={columnsPerRow} {...rest}>
            {children?.length && children ||
                columns?.map(
                    (column: LayoutFragmentConfig, index) =>
                        <ColumnWrapper key={index} {...{ config: column, data }} />
                )}
        </Grid.Row>
    )
}