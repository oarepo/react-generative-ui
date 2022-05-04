// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig, UIFragmentContext } from "../types"
import { Placeholder as SemanticPlaceholder } from "semantic-ui-react"
import _times from 'lodash/times'

export enum PlaceholderType {
    Paragraph = 'paragraph',
    ImageHeader = 'image-header',
    Image = 'image',
}


export interface PlaceholderProps extends UILayoutConfig {
    /** Placeholder representation type */
    type?: PlaceholderType
    /** Number of placeholder content lines */
    lines?: number
    /** Any extra props passed down to Placeholder component */
    props?: { [key: string]: any }
}

export interface PlaceholderInnerProps {
    square?: boolean
}

/**
 * A placeholder used to reserve space for content that soon will appear in a layout.
 */
export const Placeholder: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { props, type = 'paragraph', lines = 1 } = config as PlaceholderProps
    const { square, ...rest } = props as PlaceholderInnerProps

    const ParagraphPlaceholder = (
        <SemanticPlaceholder.Paragraph>
            {_times(lines || 1, (num) => <SemanticPlaceholder.Line key={num.toString()} />)}
        </SemanticPlaceholder.Paragraph>
    )

    const placeholderRepresentation = (type: string) => {
        switch (type) {
            case PlaceholderType.Paragraph:
                return ParagraphPlaceholder
            case PlaceholderType.ImageHeader:
                return (
                    <SemanticPlaceholder.Header image>
                        {_times(lines || 1, (num) => <SemanticPlaceholder.Line key={num.toString()} />)}
                    </SemanticPlaceholder.Header>
                )
            case PlaceholderType.Image:
                return (
                    <SemanticPlaceholder.Image {...(square != null && { square: square })} />
                )
            default:
                return ParagraphPlaceholder
        }
    }

    return (
        <SemanticPlaceholder fluid {...rest}>
            {placeholderRepresentation(type)}
        </SemanticPlaceholder>
    )
}