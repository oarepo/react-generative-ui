// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { DataContext } from "../../context"
import { useResolvedData } from "../../hooks"
import { UIFragmentContext, UILayoutConfig } from "../../types"

export interface DefenseStatusLayoutConfig extends UILayoutConfig {
    dateDefended?: Date
    defended: boolean,
    defendedComponent?: UILayoutConfig,
    notDefendedComponent?: UILayoutConfig
}

/**
 * Displays a status of work (thesis) defense.
*/
export const DefenseStatus: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
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

    const Defended = (props: React.PropsWithChildren<{}>) => renderUIFragment({
        ...defendedComponent,
        // TODO: maybe support rendering date?
        // dateDefended: resolvedDateDefended,
        ...props
    })

    const NotDefended = (props: React.PropsWithChildren<{}>) => renderUIFragment({
        ...notDefendedComponent,
        ...props
    })

    const {
        defended: resolvedDefended,
        // TODO: support rendering date
        // dateDefended: resolvedDateDefended
    } = dataField
            ? useResolvedData(React.useContext(DataContext), dataField)
            : { defended }

    // @ts-ignore 2559
    return resolvedDefended && (<Defended {...rest} />) || (<NotDefended {...rest} />)
}