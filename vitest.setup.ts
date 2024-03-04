import { beforeEach, vi } from "vitest";

beforeEach(() => {
	console.log("!* beforeEach", beforeEach);
	vi.restoreAllMocks();
});
