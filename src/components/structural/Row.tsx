// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext } from "../../types"
import _isString from 'lodash/isString';


export interface RowLayoutConfig extends UILayoutConfig {
    items: [],
    separator: string | UILayoutConfig
}

/**
 * Component rendering its children items in a flexbox row.
 * Items can optionally be separated by a separator component.
 */
export const Row: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const { component, items, separator = ' ', ...rest } = config as RowLayoutConfig

    const Separator = _isString(separator) ? separator : renderUIFragment(separator)

    return (
        <Grid.Row {...rest}>
            {items?.map(
                (item: UILayoutConfig, index) =>
                    <React.Fragment key={index}>
                        {renderUIFragment(item, index)}
                        {index < items.length - 1 && Separator}
                    </React.Fragment>
            )}
        </Grid.Row>
    )
}