import { gql } from "@apollo/client";
import {
    F_NOTIFICATION_MANAGER,
    F_NOTIFICATION_SENDER,
    F_NOTIFICATION_TEMPLATE,
    F_PAGEINFO,
    F_STORE,
    F_USER,
    F_USERERROR,
    F_VERIFICATION,
} from "./fragment/fragments";

export const BUSINESS_USER_RESET_PASSWORD = gql`
    mutation businessUserResetPassword($newPassword: String!) {
        BusinessUserResetPassword(newPassword: $newPassword) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const CUSTOMER_USER_RESET_PASSWORD = gql`
    mutation customerResetPassword($newPassword: String!) {
        CustomerResetPassword(newPassword: $newPassword) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const BUSINESS_USER_FIND_EMAIL = gql`
    mutation businessUserFindEmail {
        BusinessUserFindEmail {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_FIND_BY_ID = gql`
    query userFindById($userId: ObjectId!) {
        UserFindById(userId: $userId) {
            ...Fuser
        }
    }
    ${F_USER}
`;

export const USER_DELETE = gql`
    mutation userDelete($userId: ObjectId!) {
        UserDelete(userId: $userId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_UPDATE = gql`
    mutation userUpdate($userId: ObjectId!, $input: UserUpdateInput!) {
        UserUpdate(userId: $userId, input: $input) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const CUSTOMER_USER_FIND_EMAIL = gql`
    mutation customerFindEmail {
        CustomerFindEmail {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_OUT = gql`
    mutation signOut {
        SignOut {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_UP = gql`
    mutation signUp($input: SignUpInput!) {
        SignUp(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_IN = gql`
    mutation signIn($input: SignInInput!) {
        SignIn(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const STORE_SIGNIN_ANONYMOUSE_START = gql`
    mutation storeSignInAnonymousStart(
        $input: StoreSignInAnonymousStartInput!
    ) {
        StoreSignInAnonymousStart(input: $input) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fverification
            }
        }
    }
    ${F_VERIFICATION}
    ${F_USERERROR}
`;

export const STORE_SIGNIN_ANONYMOUSE_COMPLETE = gql`
    mutation storeSignInAnonymousComplete(
        $input: StoreSignInAnonymousCompleteInput!
        $extraInfo: StoreSignInAnonymousCompleteExtraInfoInput
    ) {
        StoreSignInAnonymousComplete(input: $input, extraInfo: $extraInfo) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fverification
            }
        }
    }
    ${F_VERIFICATION}
    ${F_USERERROR}
`;

export const ME = gql`
    query me {
        Me {
            ...Fuser
            stores {
                ...Fstore
                items {
                    _id
                    name
                }
            }
        }
    }
    ${F_STORE}
    ${F_USER}
`;

export const SUPER_ME = gql`
    query superMe {
        SuperMe {
            ...Fuser
        }
    }
    ${F_USER}
`;

export const MY_NOTIFICATION_MANAGER = gql`
    query myNotificationManager {
        MyNotificationManager {
            ...FnotificationManager
            senders {
                ...FnotificationSender
            }
        }
    }
    ${F_NOTIFICATION_SENDER}
    ${F_NOTIFICATION_MANAGER}
`;

export const PROFILE = gql`
    query profile($role: UserRole!) {
        Profile(role: $role) {
            ...Fuser
        }
    }
    ${F_USER}
`;

export const USER_DUPLICATE_CHECK = gql`
    query userDuplicateCheck(
        $role: UserRole!
        $target: String!
        $value: String!
    ) {
        UserDuplicateCheck(role: $role, target: $target, value: $value) {
            duplicated
        }
    }
`;

export const PROFILE_UPDATE_FOR_BUSINESS_USER = gql`
    mutation profileUpdateForBusinessUser(
        $input: ProfileUpdateForBusinessUserInput!
        $pw: String!
    ) {
        ProfileUpdateForBusinessUser(input: $input, pw: $pw) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const STORE_SIGINUP = gql`
    mutation storeSignUp($input: StoreSignUpInput!) {
        StoreSignUp(input: $input) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USERERROR}
    ${F_USER}
`;

export const USER_LIST = gql`
    query userList(
        $sort: [_IUserSort!]
        $filter: _IUserFilter
        $pagingInput: OffsetPagingInput!
    ) {
        UserList(sort: $sort, filter: $filter, pagingInput: $pagingInput) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fuser
            }
        }
    }
    ${F_PAGEINFO}
    ${F_USER}
`;
