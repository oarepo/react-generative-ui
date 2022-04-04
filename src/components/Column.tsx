// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { Grid, GridColumnProps } from "semantic-ui-react"
import { UIFragmentConfig, UIFragmentContext } from "../UIGenerator/types"

export const Column: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { items, props } = config

    return (
        <Grid.Column {...props as GridColumnProps}>
            {items?.map((item: UIFragmentConfig, index) => (
                <Grid.Row key={index}>
                    {renderUIFragment(item)}
                </Grid.Row>
            ))}
        </Grid.Column>
    )
}