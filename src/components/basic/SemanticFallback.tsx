// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Placeholder } from "semantic-ui-react"
import { UIFragmentContext, UILayoutConfig } from "../../types"
import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'
import _capitalize from 'lodash/capitalize'
import { useResolvedData } from "../../hooks"
import { Fallback } from "../basic/Fallback"
import { DataContext } from "../../context"


/**
 * A component that tries to use SemanticUI element.
 *
 * If any usable element could not be found for a component,
 * it renders a Fallback component.
 */
export const SemanticFallback: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const { component, dataField, children, ...rest } = config as UILayoutConfig

    const resolvedChildren = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : children

    const SemanticElementOrFallback = React.lazy(() => import('semantic-ui-react')
        .then(module => {
            const semanticComp = _get(module, _capitalize(_camelCase(component)))
            return { default: semanticComp || Fallback }
        }));

    return (
        <React.Suspense fallback={<Placeholder><Placeholder.Line length="very short" /></Placeholder>}>
            <SemanticElementOrFallback {...rest} data-component={component}>
                {resolvedChildren}
            </SemanticElementOrFallback>
        </React.Suspense>
    )
}