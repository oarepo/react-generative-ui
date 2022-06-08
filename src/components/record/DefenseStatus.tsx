// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragment } from "../../GeneratedLayout"
import { useResolvedData } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"

export interface DefenseStatusLayoutConfig extends LayoutFragmentConfig {
    dateDefended?: Date
    defended: boolean,
    defendedComponent?: LayoutFragmentConfig,
    notDefendedComponent?: LayoutFragmentConfig
}

/**
 * Displays a status of work (thesis) defense.
*/
export const DefenseStatus: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
    key
}) => {
    const {
        component,
        dataField,
        defended,
        dateDefended,
        defendedComponent = { component: 'span', 'children': '(obhájeno)', style: { color: 'green' } },
        notDefendedComponent = { component: 'span', 'children': '(neobhájeno)', style: { color: 'red' } },
        ...rest
    } = config as DefenseStatusLayoutConfig

    const Defended = (props: React.PropsWithChildren<{}>) => LayoutFragment({
        config: {
            ...defendedComponent,
            // TODO: maybe support rendering date?
            // dateDefended: resolvedDateDefended,
            ...props
        },
        data,
        key
    })

    const NotDefended = (props: React.PropsWithChildren<{}>) => LayoutFragment({
        config: {
            ...notDefendedComponent,
            ...props
        },
        data,
        key
    })

    const {
        defended: resolvedDefended,
        // TODO: support rendering date
        // dateDefended: resolvedDateDefended
    } = dataField && data
            ? useResolvedData(data, dataField)
            : { defended }

    // @ts-ignore 2559
    return resolvedDefended && (<Defended {...rest} />) || (<NotDefended {...rest} />)
}