import {eslintConfig, globals} from "wescfg"

export default [
	{
		files: ["**/*.{js,mjs,ts}"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	...eslintConfig,
]
