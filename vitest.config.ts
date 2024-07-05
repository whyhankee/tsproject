import {defineConfig} from "vitest/config"

export default defineConfig({
	test: {
		setupFiles: ["./vitest.setup.ts"],
		include: ["./src/**/*.test.ts"],
		coverage: {
			provider: "v8",
			thresholds: {
				functions: 95,
				lines: 95,
				statements: 95,
				branches: 95,
			},
		},
	},
})
