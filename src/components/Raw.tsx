// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from "react"
import { DataContext } from "../context"
import { useResolvedData } from "../hooks"
import { UIFragmentContext } from "../types"

/**
 * A Fragment component outputing raw data as its children.
 */
export const Raw: FC<React.PropsWithChildren<UIFragmentContext>> = ({ config }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : children

    return (
        <Fragment {...rest}>
            {resolvedChildren}
        </Fragment>
    )
}