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


export const ColumnWrapper = ({ renderUIFragment, ...props }: any) => {
    const { component, key } = props
    console.log('wrapper', props, component)
    if (component == undefined) {
        return renderUIFragment({ component: 'column', ...props }, key)
    } else if (component !== 'column') {
        return renderUIFragment({ component: 'column', items: [props] })
    }
    return renderUIFragment(props, key)
}

/**
 * Component putting its children items into a single responsive column.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Column for available props.
 */
export const Column: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const { component, items, ...rest } = config as ColumnLayoutConfig
    console.log('column config ', config)
    return (
        <Grid.Column {...rest}>
            {items?.map((item: UILayoutConfig, index) => (
                renderUIFragment(item, index)
            ))}
        </Grid.Column>
    )
}
