// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UIFragmentConfig, UIFragmentContext } from "../types"
import { Placeholder as SemanticPlaceholder } from "semantic-ui-react"

export enum PlaceholderType {
    Paragraph = 'paragraph',
    ImageHeader = 'image-header',
    Image = 'image',
}


export interface PlaceholderProps extends UIFragmentConfig {
    /** Placeholder representation type */
    type?: PlaceholderType
    /** Number of placeholder content lines */
    lines?: Number
    /** Any extra props passed down to Placeholder component */
    props?: { [key: string]: any }
}

/**
 * A placeholder used to reserve space for content that soon will appear in a layout.
 */
export const Placeholder: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { props, type = 'paragraph', lines = 1 } = config as PlaceholderProps

    const ParagraphPlaceholder = (
        <SemanticPlaceholder.Paragraph>
            {[...Array(lines)].map(() => <SemanticPlaceholder.Line />)}
        </SemanticPlaceholder.Paragraph>
    )

    const placeholderRepresentation = (type: string) => {
        switch (type) {
            case PlaceholderType.Paragraph:
                return ParagraphPlaceholder
            case PlaceholderType.ImageHeader:
                return (
                    <SemanticPlaceholder.Header image>
                        {[...Array(lines)].map(() => <SemanticPlaceholder.Line />)}
                    </SemanticPlaceholder.Header>
                )
            case PlaceholderType.Image:
                return (
                    <SemanticPlaceholder.Image {...(props?.square != null && { square: props.square! })} />
                )
            default:
                return ParagraphPlaceholder
        }
    }

    return (
        <SemanticPlaceholder fluid {...props}>
            {placeholderRepresentation(type)}
        </SemanticPlaceholder>
    )
}