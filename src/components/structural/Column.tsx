// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext } from "../../types"

export interface ColumnLayoutConfig extends UILayoutConfig {
    items: UILayoutConfig[]
}

/**
 * Component putting its children items into a single responsive column.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Column for available props.
 */
export const Column: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const { component, items, stretched = true, ...rest } = config as ColumnLayoutConfig
    return (
        <Grid.Column stretched={stretched} {...rest}>
            {items?.map((item: UILayoutConfig, index) => (
                renderUIFragment(item, index)
            ))}
        </Grid.Column>
    )
}
