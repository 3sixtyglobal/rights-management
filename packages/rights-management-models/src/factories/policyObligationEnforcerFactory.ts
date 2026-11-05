// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { IPolicyObligationEnforcer } from "../models/pdp/IPolicyObligationEnforcer.js";

/**
 * Factory for managing policy obligation enforcer registration and retrieval.
 */
export const PolicyObligationEnforcerFactory = Factory.createFactory<IPolicyObligationEnforcer>(
	"policy-obligation-enforcer"
);
