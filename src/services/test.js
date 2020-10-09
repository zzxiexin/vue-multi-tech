import { get } from "./http";
const TEST_API = {
  test: function(params) {
    return get("/dat1a.json", params);
  }
};
export default TEST_API;
