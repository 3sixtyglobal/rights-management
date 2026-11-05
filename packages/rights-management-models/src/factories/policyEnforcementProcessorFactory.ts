// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { IPolicyEnforcementProcessor } from "../models/pep/IPolicyEnforcementProcessor.js";

/**
 * Factory for managing policy enforcement processors registration and retrieval.
 */
export const PolicyEnforcementProcessorFactory = Factory.createFactory<IPolicyEnforcementProcessor>(
	"policy-enforcement-processor"
);
