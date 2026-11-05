// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The mode that can be used to retrieve information from PIP sources.
 */
export const PolicyInformationAccessMode = {
	/**
	 * Public.
	 */
	Public: "public",

	/**
	 * Private.
	 */
	Private: "private",

	/**
	 * Any.
	 */
	Any: "any"
} as const;

/**
 * The mode that can be used to retrieve information from PIP sources.
 */
export type PolicyInformationAccessMode =
	(typeof PolicyInformationAccessMode)[keyof typeof PolicyInformationAccessMode];
