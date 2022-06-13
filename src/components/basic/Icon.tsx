// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import {
    Icon as SemanticIcon,
    Image as SemanticImage,
    SemanticICONS,
    StrictImageProps
} from "semantic-ui-react"
import { useDataContext } from "../../hooks"
import { ErrorMessage } from "./ErrorMessage"


export interface CustomIconLayoutConfig extends LayoutFragmentConfig {
    /** Mapping used to translate name prop to actual icon name/image source */
    iconSet?: { [key: string]: SemanticICONS | StrictImageProps }
    /** Icon name */
    name: string
    /** Any extra props passed to Icon element */
    [key: string]: any
}


/**
 * An Icon, that renders either as a custom
 * SVG graphic or as a built-in Semantic-UI Icon.
 */
export const Icon: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        dataField,
        name,
        iconSet,
        className,
        ...rest
    } = config as CustomIconLayoutConfig

    const _getIcon = (name: string) => {
        return iconSet ? iconSet[name] : name
    }

    const resolvedName = dataField && data
        ? useDataContext(data, dataField)
        : name

    const iconData = _getIcon(resolvedName)

    if (iconData) {
        if (typeof iconData === 'string') {
            // @ts-ignore until Semantic-UI supports React 18
            return <SemanticIcon
                className={className}
                name={iconData as SemanticICONS}
                {...rest} />
        } else {
            return <SemanticImage
                className={className}
                {...iconData}
                {...rest} />
        }
    }
    return <ErrorMessage component={component}>Unknown icon: {name}.</ErrorMessage>
}
