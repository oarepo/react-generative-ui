// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { useResolvedData } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import TextTruncate from 'react-text-truncate'
import { LayoutFragment } from "../../GeneratedLayout"

export interface TruncatedTextLayoutConfig extends LayoutFragmentConfig {
    /** Number of lines displayed in truncated state */
    lines: number,
    /** Ellipsis character (default: `…`) */
    ellipsis: string,
    /** Text to be rendered truncated */
    text: string,
    /** Component description to render 'Show more|less' toggle button */
    expandToggle: LayoutFragmentConfig
}

/**
 * Longer text that will be displayed truncated, with an option to show more.
 */
export const TruncatedText: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
    key
}) => {
    const [expanded, setExpanded] = React.useState(false)

    const {
        component,
        dataField,
        text,
        lines = 1,
        ellipsis = "…",
        expandToggle = {
            component: 'a',
            href: '#',
            children: `> Show ${!expanded ? 'more' : 'less'}`
        },
        ...rest
    } = config as TruncatedTextLayoutConfig

    const resolvedText = dataField && data
        ? useResolvedData(data, dataField)
        : text?.toString()


    const toggleExpanded: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        setExpanded(!expanded)
    }

    const ExpandToggle = LayoutFragment({
        config: {
            ...expandToggle,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => toggleExpanded(e),
            expanded,
        },
        data,
        key
    })

    return (
        expanded && <p>{resolvedText}{ExpandToggle}</p> ||
        <TextTruncate
            key={key}
            line={lines}
            truncateText={ellipsis}
            text={resolvedText}
            textTruncateChild={ExpandToggle}
            {...rest}
        />
    )
}