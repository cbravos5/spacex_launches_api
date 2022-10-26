import app from "./app";
import * as configs from "./configs/appConfigs";

app.listen(configs.APP_PORT, () => {
  console.log(`server listening on ${configs.APP_PORT}`);
});
