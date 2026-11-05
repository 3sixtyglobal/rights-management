// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of Rights Management data.
 */
export const RightsManagementTypes = {
	/**
	 * Represents data access request.
	 */
	DataAccessRequest: "DataAccessRequest",

	/**
	 * Represents data access request with object.
	 */
	DataAccessRequestWithObject: "DataAccessRequestWithObject",

	/**
	 * Represents data access request query.
	 */
	DataAccessQuery: "DataAccessQuery",

	/**
	 * Represents data access request query response.
	 */
	DataAccessQueryResponse: "DataAccessQueryResponse"
} as const;

/**
 * The types of Rights Management data.
 */
export type RightsManagementTypes =
	(typeof RightsManagementTypes)[keyof typeof RightsManagementTypes];
