/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcollectionDataInterface
// ====================================================

export interface FcollectionDataInterface {
  __typename: "File" | "User" | "Verification" | "ProductGroup" | "Product" | "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FzoneInfo
// ====================================================

export interface FzoneInfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ffile {
  __typename: "File";
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Ffile_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileImage {
  __typename: "File";
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Fuser_profileImage_tags[];
}

export interface Fuser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fuser {
  __typename: "User";
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: Fuser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: Fuser_zoneinfo;
  smsKey: string | null;
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 유저 역할!
 */
export enum UserRole {
  ANONYMOUS = "ANONYMOUS",
  BUYER = "BUYER",
  SELLER = "SELLER",
  STORE_USER = "STORE_USER",
  SUPERADMIN = "SUPERADMIN",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
