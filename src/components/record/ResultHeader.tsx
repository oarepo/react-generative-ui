// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Header } from "semantic-ui-react"
import { useDataContext } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"

export interface ResultHeaderLayoutConfig extends LayoutFragmentConfig {
    linksField?: string,
    title?: string,
    links?: object
}

/**
 * Renders a header title of a record search result.
*/
export const ResultHeader: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        title,
        links,
        dataField,
        linksField,
        as = 'a',
        ...rest
    } = config as ResultHeaderLayoutConfig

    const { self: resolvedSelfLink } = linksField && data
        ? useDataContext(data, linksField)
        : (links || {})

    const resolvedTitle = dataField && data
        ? useDataContext(data, dataField)
        : title

    console.log(resolvedTitle, resolvedSelfLink, data)

    return <Header as={as} {...resolvedSelfLink && ({ ...{ href: resolvedSelfLink } })} {...rest} >
        {resolvedTitle}
    </Header>
}
