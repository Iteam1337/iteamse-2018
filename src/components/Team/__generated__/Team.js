

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Team
// ====================================================

export type Team_teamMembers = {
  __typename: "TeamMember",
  avatar: string,
  email: string,
  location: string,
  name: string,
  phoneNumber: ?string,
  short: string,
  title: string,
};

export type Team = {
  teamMembers: Array<Team_teamMembers>
};

export type TeamVariables = {
  shortName: Array<string>
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