// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig } from "../types"
import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'


/**
 * A Fallback is trying to render a HTML element from component string.
 * 
 * A warning is logged to browser console, if component string is an
 * unknown HTML element and component props is rendered as default span.
 */
export const Fallback: React.FC<UILayoutConfig> = (props) => {
    const { 'data-component': dataComponent, ...attrs } = props

    return <>{React.createElement(dataComponent, attrs)}</>
}
