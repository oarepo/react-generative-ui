// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _isArray from 'lodash/isArray'

const dataMatchesItems = (data: any[], items: any[]) => _isArray(data) && data?.length === items?.length

export { dataMatchesItems }