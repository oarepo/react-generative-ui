// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment } from "react"
import { useResolvedDataProps } from "../hooks"
import { UIFragmentContext } from "../types"

/**
 * A Fragment component outputing raw data as its children.
 */
export const Raw: FC<UIFragmentContext> = ({
    config,
}) => {
    const { data } = config

    const resolvedProps = useResolvedDataProps(data)
    console.log(resolvedProps, data)
    return (
        <Fragment {...resolvedProps}>
            {resolvedProps?.children}
        </Fragment>
    )
}