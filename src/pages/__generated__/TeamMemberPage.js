

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamMemberPage
// ====================================================

export type TeamMemberPage_teamMember = {
  __typename: "TeamMember",
  avatar: string,
  background: string,
  backgroundTitle: string,
  competence: string,
  competenceTitle: string,
  email: string,
  headerImage: ?string,
  headerTextBgColor: ?string,
  location: string,
  name: string,
  phoneNumber: ?string,
  title: string,
  why: string,
  whyTitle: string,
};

export type TeamMemberPage = {
  teamMember: TeamMemberPage_teamMember
};

export type TeamMemberPageVariables = {
  shortName: string
};

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================