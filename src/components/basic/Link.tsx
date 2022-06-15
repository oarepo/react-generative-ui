// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { useDataContext } from "../../hooks"
import { LayoutFragmentProps } from "../../types"

/**
 * A a HTML element
 */
export const Link: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, href, children, ...rest } = config

    const dataContext = useDataContext(data, dataField)
    const resolvedHref = dataField && dataContext != null
        ? dataContext
        : href

    return (
        <a href={resolvedHref} {...rest}>
            {children}
        </a>
    )
}