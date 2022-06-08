// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types";
import { Grid as SemanticGrid, SemanticWIDTHS } from 'semantic-ui-react'
import { RowLayoutConfig, RowWrapper } from "./Row";
import { ColumnLayoutConfig, ColumnWrapper } from "./Column";
import { ErrorMessage } from "..";

export interface GridLayoutConfig extends LayoutFragmentConfig {
    /* Number of columns rendered per each row in a grid */
    columnsPerRow?: SemanticWIDTHS | "equal",
    /* Layout definition of column items */
    columns?: ColumnLayoutConfig[],
    /* Layour definition of row items */
    rows?: RowLayoutConfig[],
}

/**
 * Component putting its children items into separate columns.
 * See https://react.semantic-ui.com/collections/grid/ for available props.
 */
export const Grid: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
    key
}) => {
    const {
        component,
        columnsPerRow = 'equal',
        container = true,
        columns,
        rows,
        ...rest
    } = config as GridLayoutConfig

    if (columns?.length) {
        return <SemanticGrid key={key} container={container} columns={columnsPerRow} {...rest}>
            {columns?.map((column, columnIndex) => (
                <ColumnWrapper {...{ config: column, data, key: columnIndex }} />
            ))}
        </SemanticGrid>
    } else if (rows?.length) {
        return <SemanticGrid key={key} container={container} {...rest}>
            {rows?.map((row, index) => (
                <RowWrapper {...{ config: row, data, key: index }} />
            ))}
        </SemanticGrid>
    } else {
        return <ErrorMessage key={key} component='grid'>Expected either rows or columns</ErrorMessage>
    }
}
