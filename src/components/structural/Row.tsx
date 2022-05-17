// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid, SemanticWIDTHS } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext } from "../../types"
import _isString from 'lodash/isString';


export interface RowLayoutConfig extends UILayoutConfig {
    /* Number of columns rendered per each row in a grid */
    columnsPerRow?: SemanticWIDTHS | "equal",
    /* Layout definition of column items inside row */
    columns?: UILayoutConfig[],
}

/**
 * Component rendering its children items in a flexbox row.
 * Items can optionally be separated by a separator component.
 */
export const Row: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const {
        component,
        columnsPerRow = 1,
        columns,
        ...rest
    } = config as RowLayoutConfig

    return (
        <Grid.Row columns={columnsPerRow} {...rest}>
            {columns?.map(
                (item: UILayoutConfig, index) => renderUIFragment(item, index)
            )}
        </Grid.Row>
    )
}