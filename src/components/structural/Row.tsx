// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid, SemanticWIDTHS } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext } from "../../types"
import _isString from 'lodash/isString';
import { ColumnWrapper } from "./Column";
import { ErrorMessage } from "..";


export interface RowLayoutConfig extends UILayoutConfig {
    /* Number of columns rendered per each row in a grid */
    columnsPerRow?: SemanticWIDTHS | "equal",
    /* Layout definition of column items inside row */
    columns?: UILayoutConfig[],
}

export const RowWrapper = ({ renderUIFragment, ...props }: any) => {
    const { component, key, ...rest } = props
    if (!component || component !== 'row') {
        return renderUIFragment({ component: 'row', ...rest }, key)
    }
    return renderUIFragment(props, key)
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
        columnsPerRow = 'equal',
        columns,
        children,
        ...rest
    } = config as RowLayoutConfig

    if (children?.length && columns?.length) {
        return <ErrorMessage component={component}>
            Only one of 'children' or 'columns' could be specified.
        </ErrorMessage>
    }

    return (
        <Grid.Row columns={columnsPerRow} {...rest}>
            {children?.length && children ||
                columns?.map(
                    (column: UILayoutConfig, index) =>
                        <ColumnWrapper
                            key={index}
                            renderUIFragment={renderUIFragment}
                            {...column} />
                )}
        </Grid.Row>
    )
}