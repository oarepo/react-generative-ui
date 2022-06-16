// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import clsx from "clsx"
import * as React from "react"
import { Icon, Message } from "semantic-ui-react"
import { LayoutFragmentConfig } from "../../types"


/**
 * An error message to be shown.
 */
export const ErrorMessage: React.FC<LayoutFragmentConfig> = ({
    component,
    content,
    children,
    className,
    ...rest
}) => {
    // @ts-ignore 2786 until Semantic-UI fully compatible with React 18
    return <Message
        size="tiny"
        icon
        negative
        compact
        floating
        className={clsx(className, 'oarepo-error')}
        {...((content && !children) && { content })}
        {...rest}>
        {/* @ts-ignore 2786 */}
        <Icon name="warning sign" />
        <Message.Header>Error rendering {component}:&nbsp;</Message.Header>
        <Message.Content>{children}</Message.Content>
    </Message>
}
