import { eventHandler } from "h3";
import getFile from "../../utils/getFile";

export default eventHandler(async (event) => {
  return await getFile("load.html");
});
