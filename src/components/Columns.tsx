// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UIFragmentConfig, UIFragmentContext } from "../UIGenerator/types";
import { Grid, GridProps, SemanticWIDTHSNUMBER } from 'semantic-ui-react'

export const Columns: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { props, items } = config
    console.log(config, renderUIFragment)

    return items?.length && (
        <Grid {...props as GridProps} columns={items.length! as SemanticWIDTHSNUMBER}>
            {config.items?.map((item: UIFragmentConfig, index) => renderUIFragment(item, index))}
        </Grid >
    ) || <Grid {...props as GridProps} />
}

