// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UILayoutConfig, UIFragmentContext } from "../../types";
import { Grid as SemanticGrid, SemanticWIDTHS } from 'semantic-ui-react'
import { RowLayoutConfig } from "./Row";
import { ColumnLayoutConfig } from "./Column";

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
        columnsPerRow = 1,
        container = true,
        columns,
        rows,
        ...rest
    } = config as GridLayoutConfig

    const ColumnWrapper = (props: any) => {
        const { component, key } = props
        if (!component) {
            props.component = 'column'
        } else if (component !== 'column') {
            return renderUIFragment({ component: 'column', items: [props] }, key)
        }
        return renderUIFragment(props, key)
    }

    const RowWrapper = (props: any) => {
        const { component, key } = props
        if (!component) {
            props.component = 'row'
        } else if (component !== 'row') {
            return renderUIFragment({ component: 'row', columns: [] }, key)
        }
        return renderUIFragment(props, key)
    }

    if (columns?.length) {
        return <SemanticGrid container={container} columns={columnsPerRow} {...rest}>
            {columns?.map((column, columnIndex) => (
                <ColumnWrapper key={columnIndex} {...column} />
            ))}
        </SemanticGrid>
    } else if (rows?.length) {
        return <SemanticGrid container={container} {...rest}>
            {rows?.map((row, index) => (
                <RowWrapper key={index} {...row} />
            ))}
        </SemanticGrid>
    } else {
        return <div className="error">
            Error rendering grid: either rows or columns expected.
        </div>
    }
}
