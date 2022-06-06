/** 全局唯一数据中心 **/
import { init } from "@rematch/core";

import app from "./models/app";

const store = init({
  app,
});
export default store