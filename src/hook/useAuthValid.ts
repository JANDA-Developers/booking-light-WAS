import { useContext } from "react"
import { SuperAppContext } from "../superAdmin/helper/superContext"

export const useOwnerFilter = <T>(filter:T):T | undefined => {
    const {superMe} = useContext(SuperAppContext);
    if (superMe) return undefined;
    return filter
}