// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from "react"
import { Grid, GridRowProps } from "semantic-ui-react"
import { UIFragmentConfig, UIFragmentContext, UIListFragmentProps } from "../types"

export const Row: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { props, items } = config
    const { separator, ...rest } = props as UIListFragmentProps

    return (
        <Grid.Row {...rest as GridRowProps}>
            {items?.map((item: UIFragmentConfig, index) =>
                <Fragment key={index}>
                    {renderUIFragment(item)}
                    {index < items.length - 1 && separator}
                </Fragment>
            )}
        </Grid.Row>
    )
}