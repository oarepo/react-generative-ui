// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, lazy, Suspense } from "react"
import { Icon, Label, Placeholder } from "semantic-ui-react"
import { UIFragmentContext } from "../types"
import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'
import { useDataProps } from "../hooks"


/**
 * A component that tries to use SemanticUI element or renders
 * a Fallback component if requested component is unknown.
 */
export const SemanticFallback: FC<UIFragmentContext> = ({
    config,
}) => {
    const { component, props, data } = config

    const FallbackComponent: FC = () => <Label basic color="red" >
        <Icon name="warning sign" />
        Component '{component}' not found
    </Label>

    const SemanticElementOrDefault = lazy(() => import('semantic-ui-react')
        .then(module => {
            return { default: _get(module, _capitalize(_camelCase(component)), FallbackComponent) }
        }));

    return (
        <Suspense fallback={<Placeholder><Placeholder.Line length="very short" /></Placeholder>}>
            <SemanticElementOrDefault {...props}>
                {data && useDataProps(data)}
            </SemanticElementOrDefault>
        </Suspense>
    )
}