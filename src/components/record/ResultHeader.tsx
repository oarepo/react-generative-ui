// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Header } from "semantic-ui-react"
import { DataContext } from "../../context"
import { useResolvedData } from "../../hooks"
import { UIFragmentContext, UILayoutConfig } from "../../types"

export interface ResultHeaderLayoutConfig extends UILayoutConfig {
    linksField?: string,
    title?: string,
    links?: object
}

/**
 * Renders a header title of a record search result.
*/
export const ResultHeader: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
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

    const data = React.useContext(DataContext)

    const { self: resolvedSelfLink } = linksField
        ? useResolvedData(data, linksField)
        : (links || {})

    const resolvedTitle = dataField
        ? useResolvedData(data, dataField)
        : title

    return <Header as={as} {...resolvedSelfLink && ({ ...{ href: resolvedSelfLink } })} {...rest} >
        {resolvedTitle}
    </Header>
}