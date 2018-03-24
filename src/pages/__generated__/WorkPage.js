

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WorkPage
// ====================================================

export type WorkPage_pageWork = {
  __typename: "PageWork",
  headerImage: ?string,
  headerText1: ?string,
  headerText2: ?string,
  headerTextBgColor: ?string,
};

export type WorkPage_openpositions = {
  __typename: "OpenPosition",
  id: string,
  location: string,
  role: string,
  title: string,
};

export type WorkPage = {
  pageWork: WorkPage_pageWork,
  openpositions: Array<WorkPage_openpositions>,
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