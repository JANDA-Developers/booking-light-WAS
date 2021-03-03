import { gql } from "@apollo/client"

export const F_SYSTEMNOTI = gql`
    fragment FsystemNoti on SystemNoti {
        _id
        createdAt
        updatedAt
        type
        content
        isRead
    }
`
