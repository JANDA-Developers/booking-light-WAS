import {  } from "@janda-com/front";
import { LocalManager } from "@janda-com/front";

export const storage = new LocalManager<"lastStore">({
    storage: "localStorage"
});
export default storage

