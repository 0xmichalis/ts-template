import { expect } from "chai";

import { ConfigService } from "../src/config";

describe("ConfigService", () => {
  it("returns empty string for unknown keys", () => {
    const svc = new ConfigService();
    const value = svc.get("SOME_UNKNOWN_KEY_THAT_SHOULD_NOT_EXIST");
    expect(value).to.equal("");
  });

  it("prefers process.env over parsed config", () => {
    const svc = new ConfigService();
    process.env.__TMP_TEST_KEY = "from-process-env";
    const value = svc.get("__TMP_TEST_KEY");
    expect(value).to.equal("from-process-env");
    delete process.env.__TMP_TEST_KEY;
  });
});
