// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UILayoutConfig, UIFragmentContext } from "../types";
import { Grid as SemanticGrid, SemanticWIDTHS } from 'semantic-ui-react'

export interface GridLayoutConfig extends UILayoutConfig {
    /* Number of columns rendered per each row in a grid */
    columnsPerRow?: SemanticWIDTHS | "equal",
    /* Layout definition of column items */
    columns?: UILayoutConfig[],
    /* Layour definition of row items */
    rows?: GridRowLayoutConfig[],
    /** Any extra props passed down to Grid component */
    [key: string]: any
}

export interface GridProps {
    stretched?: boolean
    /** Any extra props passed directly to Grid wrapper component */
    [key: string]: any
}

export interface GridRowLayoutConfig {
    columns: UILayoutConfig[]
    stretched: boolean
    /** Any extra props passed down to Grid Row column components */
    [key: string]: any
}

/**
 * Component putting its children items into separate columns.
 * See https://react.semantic-ui.com/collections/grid/ for available props.
 */
export const Grid: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { component, ...props } = config
    const { columnsPerRow = 1, columns, rows, ...restInnerProps } = props as GridLayoutConfig
    const { stretched = true, ...rest } = restInnerProps as GridProps

    const ColumnWrapper = ({ ...props }) => {
        const { component, key } = props
        if (!component) {
            props.component = 'column'
        } else if (component !== 'column') {
            return renderUIFragment({ component: 'column', items: [props] })
        }
        return renderUIFragment(props, key)
    }

    if (columns?.length) {
        return <SemanticGrid container columns={columnsPerRow} {...rest}>
            {columns?.map((column: UILayoutConfig, index) => (
                <SemanticGrid.Column key={index} stretched={stretched} {...restInnerProps}>
                    {renderUIFragment(column, index)}
                </SemanticGrid.Column>
            ))}
        </SemanticGrid>
    } else if (rows?.length) {
        return <SemanticGrid {...rest}>
            {rows?.map(({ columns }, index) => (
                <SemanticGrid.Row key={index} stretched={stretched} {...restInnerProps}>
                    {columns.map(
                        (column: UILayoutConfig, columnIndex) => (
                            <ColumnWrapper {...column} key={columnIndex} />
                        ))}
                </SemanticGrid.Row>
            ))}
        </SemanticGrid>
    } else {
        return <div className="error">
            Error rendering grid: either rows or columns expected.
        </div>
    }
}

