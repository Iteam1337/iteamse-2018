

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamPage
// ====================================================

export type TeamPage_pageTeam = {
  __typename: "PageTeam",
  headerImage: ?string,
  headerText1: ?string,
  headerText2: ?string,
  headerTextBgColor: ?string,
};

export type TeamPage_team = {
  __typename: "TeamMember",
  avatar: ?string,
  email: string,
  gravatar: string,
  location: string,
  name: string,
  phoneNumber: ?string,
  title: string,
};

export type TeamPage = {
  pageTeam: TeamPage_pageTeam,
  team: Array<TeamPage_team>,
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