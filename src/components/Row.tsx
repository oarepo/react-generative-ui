// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from "react"
import { Grid, GridRowProps } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext, UIFragmentProps } from "../types"

/**
 * Component rendering its children items in a single row separated by a given separator.
 * Separator prop could be either a string or a registered component key.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Row for available props.
 */
// TODO: this could be eliminated
export const Row: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { props, items } = config
    const { separator, ...rest } = props || {} as UIFragmentProps

    return (
        <Grid.Row {...rest as GridRowProps}>
            {items?.map((item: UILayoutConfig, index) =>
                <Fragment key={index}>
                    {renderUIFragment(item, index)}
                    {index < items.length - 1 && (separator || ' ')}
                </Fragment>
            )}
        </Grid.Row>
    )
}