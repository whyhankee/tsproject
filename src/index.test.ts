import {describe, expect, test} from "vitest"

import {main} from "./index"

describe("index", () => {
	test("main should not crash", () => {
		expect(() => main()).not.toThrow()
	})
})
