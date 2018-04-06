

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CasesPage
// ====================================================

export type CasesPage_pageCases = {
  __typename: "PageCases",
  headerImage: ?string,
  headerText1: ?string,
  headerText2: ?string,
  headerTextBgColor: ?string,
};

export type CasesPage_cases = {
  __typename: "Case",
  location: string,
  shortDescription: string,
  slug: string,
  thumbnailImage: string,
  title: string,
};

export type CasesPage = {
  pageCases: CasesPage_pageCases,
  cases: Array<?CasesPage_cases>,
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