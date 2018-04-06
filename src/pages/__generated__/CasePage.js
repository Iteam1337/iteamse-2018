

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CasePage
// ====================================================

export type CasePage_workCase = {
  __typename: "Case",
  headerBgColor: ?string,
  logo: string,
  slug: string,
  thumbnailImage: string,
  tags: Array<?string>,
  title: string,
  introduction: string,
  introductionTitle: string,
  process: string,
  processTitle: string,
  development: string,
  developmentTitle: string,
  aboutCompany: string,
  aboutCompanyTitle: string,
  partners: string,
  partnersTitle: string,
  contact: string,
  contactTitle: string,
  quote: ?string,
  quotePerson: ?string,
};

export type CasePage = {
  workCase: ?CasePage_workCase
};

export type CasePageVariables = {
  slug: string
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