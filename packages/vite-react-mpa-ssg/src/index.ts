import { merge } from "es-toolkit/object";

import type { PluginOption } from "vite";
import type { VitePluginOptions } from "./types";

const DEFAULT_OPTIONS: VitePluginOptions = {};

export default function viteReactMpaSSGPlugin(
	options: Partial<VitePluginOptions> = {},
): PluginOption {
	const option = merge(DEFAULT_OPTIONS, options);

	return [];
}
