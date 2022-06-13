// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from "react"
import { useDataContext } from "../../hooks"
import { LayoutFragmentProps } from "../../types"

/**
 * A Fragment component outputing raw data as its children.
 */
export const Raw: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField && data
        ? useDataContext(data, dataField)
        : children

    return (
        <Fragment {...rest}>
            {resolvedChildren}
        </Fragment>
    )
}