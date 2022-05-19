// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UILayoutConfig, UIFragmentContext } from "../../types";
import { Grid as SemanticGrid, SemanticWIDTHS } from 'semantic-ui-react'
import { RowLayoutConfig, RowWrapper } from "./Row";
import { ColumnLayoutConfig, ColumnWrapper } from "./Column";
import { ErrorMessage } from "..";

export interface GridLayoutConfig extends UILayoutConfig {
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
export const Grid: FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
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
        return <SemanticGrid container={container} columns={columnsPerRow} {...rest}>
            {columns?.map((column, columnIndex) => (
                <ColumnWrapper key={columnIndex} renderUIFragment={renderUIFragment} {...column} />
            ))}
        </SemanticGrid>
    } else if (rows?.length) {
        return <SemanticGrid container={container} {...rest}>
            {rows?.map((row, index) => (
                <RowWrapper key={index} renderUIFragment={renderUIFragment} {...row} />
            ))}
        </SemanticGrid>
    } else {
        return <ErrorMessage component='grid'>Expected either rows or columns</ErrorMessage>
    }
}
