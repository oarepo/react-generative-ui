// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UIFragmentConfig, UIFragmentContext } from "../types";
import { Grid, GridProps, SemanticWIDTHSNUMBER } from 'semantic-ui-react'

/**
 * Component putting its children items into separate columns.
 * See https://react.semantic-ui.com/collections/grid/ for available props.
 */
export const Columns: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { props, items } = config

    return items?.length && (
        <Grid {...props as GridProps} columns={items.length! as SemanticWIDTHSNUMBER}>
            {config.items?.map((item: UIFragmentConfig, index) => renderUIFragment(item, index))}
        </Grid >
    ) || <Grid {...props as GridProps} />
}

