// eslint.config.mjs
import {eslintConfig} from "wescfg"

export default [
	{
		files: ["./src/**/*.{ts}"],
	},
	...eslintConfig,
]
