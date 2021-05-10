import { Fpolicy } from "../type/api";
import { useIdSelecter } from "./useIdSelecter";

export const usePolicySelecter = (policies: Fpolicy[] | null | undefined) => {
    const idSelecterHook = useIdSelecter((policies || []).map((p) => p._id));

    const checkRequireSelected = (): boolean => {
        let checkedAll = true;
        (policies || []).forEach((policy) => {
            if (policy.require) {
                const targetIsSelected = !!idSelecterHook.selectedIds.find(
                    (si) => si === policy._id
                );
                checkedAll = targetIsSelected;
            }
        });

        return checkedAll;
    };

    return { ...idSelecterHook, checkRequireSelected };
};
