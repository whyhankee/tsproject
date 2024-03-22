module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "simple-import-sort", "@stylistic"],
	ignorePatterns: [
		"coverage/**",
		"dist/**"
	],
	rules: {
		"@stylistic/semi": ["error", "always"],
		"@stylistic/indent": ["error", "tab"],
		"@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
		"@stylistic/no-trailing-spaces": ["error"],
		"@stylistic/linebreak-style": ["error", "unix"],
		"@stylistic/object-curly-spacing": ["error", "always"],
		"@stylistic/quotes": [
			"error",
			"double",
			{ avoidEscape: true, allowTemplateLiterals: false },
		],
		"no-unused-vars": ["error"],
		"no-console": [
			"error", {
				allow: ["info", "warn", "error"]
			}
		],
		"require-await": "error",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
	},
};
