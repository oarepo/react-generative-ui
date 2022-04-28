// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Icon, Label } from "semantic-ui-react"
import { AllUIFragmentProps } from "../types"
import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'


export interface FallbackComponentProps extends AllUIFragmentProps {
    component: string
}

/**
 * A fallback component to be displayed if no suitable component is found.
 */
export const Fallback: React.FC<FallbackComponentProps> = ({
    component,
}) => {
    return (
        <Label basic color="red" >
            <Icon name="warning sign" />
            Component '{component}' not found
        </Label>
    )
}
