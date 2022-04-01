// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { Grid, GridColumnProps } from "semantic-ui-react"
import { useFragmentComponent } from "../hooks"
import { UIFragmentConfig, UIFragmentContext } from "../UIGenerator/types"

export const Column: FC<UIFragmentContext> = ({
    config,
    components
}) => {
    const { items, props } = config

    return (
        <Grid.Column {...props as GridColumnProps}>
            {items?.map((item: UIFragmentConfig, index) => (
                <Grid.Row key={index}>
                    {useFragmentComponent(components, item)}
                </Grid.Row>
            ))}
        </Grid.Column>
    )
}