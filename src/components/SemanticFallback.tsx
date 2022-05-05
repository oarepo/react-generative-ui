// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Placeholder } from "semantic-ui-react"
import { UIFragmentContext, UIFragmentProps } from "../types"
import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'
import { useResolvedDataProps } from "../hooks"
import { Fallback } from "./Fallback"


/**
 * A component that tries to use SemanticUI element.
 *
 * If any usable element could not be found for a component,
 * it renders a Fallback component.
 */
export const SemanticFallback: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { component, data, ...rest } = config
    const resolvedProps = useResolvedDataProps(data, { ...rest } as UIFragmentProps)

    const SemanticElementOrFallback = React.lazy(() => import('semantic-ui-react')
        .then(module => {
            const semanticComp = _get(module, _capitalize(_camelCase(component)))
            return { default: semanticComp || Fallback }
        }));
    return (
        <React.Suspense fallback={<Placeholder><Placeholder.Line length="very short" /></Placeholder>}>
            <SemanticElementOrFallback {...resolvedProps} component={component}>
            </SemanticElementOrFallback>
        </React.Suspense>
    )
}