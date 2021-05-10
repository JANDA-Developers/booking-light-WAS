interface IPolicy {
    title: string;
    policy: string;
    require?: boolean;
}

interface policyBuildProp {}

class Policy {
    title: string;
    content: string;
    require: boolean;

    constructor(policy: IPolicy) {
        this.title = policy.title;
        this.content = policy.policy;
        this.require = policy.require || true;
    }

    public replace() {}
}

export const defaultPolicies: Policy[] = [
    new Policy({
        require: true,
        policy: "",
        title: "이용약관(공정거래위원회 표준 약관)",
    }),
    new Policy({
        require: true,
        policy: "",
        title: "개인정보처리방침",
    }),
    new Policy({
        policy: "",
        title: "마케팅활용동의 및 광고수신동의",
    }),
    new Policy({
        policy: "국내여행표준약관",
        title: "",
    }),
    new Policy({
        policy: "국외여행표준약관",
        title: "",
    }),
];

export const POLICY = {
    policies: defaultPolicies as Policy[],
    build(props: policyBuildProp) {
        this.policies.forEach((p) => p.replace());
    },
};
