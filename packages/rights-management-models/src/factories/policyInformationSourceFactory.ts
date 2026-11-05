// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { IPolicyInformationSource } from "../models/pip/IPolicyInformationSource.js";

/**
 * Factory for managing policy information sources registration and retrieval.
 */
export const PolicyInformationSourceFactory = Factory.createFactory<IPolicyInformationSource>(
	"policy-information-source"
);
