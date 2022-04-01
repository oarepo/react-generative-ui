// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { UIFragmentConfig, UIFragmentContext } from "../UIGenerator/types";
import { Grid, GridProps, SemanticWIDTHSNUMBER } from 'semantic-ui-react'
import { useFragmentComponent } from "../hooks";

export const Columns: FC<UIFragmentContext> = ({
    config,
    components
}) => {
    const { props, items } = config
    return items?.length && (
        <Grid {...props as GridProps} columns={items.length! as SemanticWIDTHSNUMBER}>
            {config.items?.map((item: UIFragmentConfig, index) => useFragmentComponent(components, item, index))}
        </Grid >
    ) || <Grid {...props as GridProps} />
}

