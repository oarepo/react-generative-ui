// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Icon, Message } from "semantic-ui-react"
import { LayoutFragmentConfig } from "../../types"


/**
 * A Fallback is trying to render a HTML element from component string.
 * 
 * A warning is logged to browser console, if component string is an
 * unknown HTML element and component props is rendered as default span.
 */
export const ErrorMessage: React.FC<LayoutFragmentConfig> = ({ component, children }) => {
    // @ts-ignore 2786 until Semantic-UI fully compatible with React 18
    return <Message size="tiny" icon negative>
        {/* @ts-ignore 2786 */}
        <Icon name="warning sign" />
        <Message.Header>Error rendering {component}:&nbsp;</Message.Header>
        <Message.Content>{children}</Message.Content>
    </Message>
}
