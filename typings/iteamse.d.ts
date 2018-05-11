/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface FooterQuery {
  addresses:  Array< {
    __typename: "Address",
    address1: string,
    city: string,
    contactMail: string,
    contactPhone: string,
    orgNumber: string,
    title: string,
    zip: string,
  } >,
};

export interface TeamQueryVariables {
  shortName: Array< string >,
};

export interface TeamQuery {
  teamMembers:  Array< {
    __typename: "TeamMember",
    avatar: string,
    email: string,
    location: string,
    name: string,
    phoneNumber: string | null,
    short: string,
    title: string,
  } >,
};

export interface AboutPageQuery {
  pageAboutUs:  {
    __typename: "PageAboutUs",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    funText: string,
    funTitle: string,
    goodText: string,
    goodTitle: string,
    imageBleed: string,
    stabilityIcons: Array< string | null >,
    stabilityText: string,
    stabilityTitle: string,
    team: Array< string > | null,
    valueText: string,
    valueTitle: string,
  },
};

export interface CasePageQueryVariables {
  slug: string,
};

export interface CasePageQuery {
  workCase:  {
    __typename: "Case",
    headerBgColor: string | null,
    logo: string,
    slug: string,
    thumbnailImage: string | null,
    tags: Array< string | null >,
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
    team: Array< string > | null,
    quote: string | null,
    quotePerson: string | null,
  } | null,
};

export interface CasesPageQuery {
  pageCases:  {
    __typename: "PageCases",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    team: Array< string > | null,
  },
  cases:  Array< {
    __typename: "Case",
    location: string,
    shortDescription: string,
    slug: string,
    thumbnailImage: string | null,
    title: string,
  } | null >,
};

export interface HomePageQuery {
  pageStart:  {
    __typename: "PageStart",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    codeMobileImage: string | null,
    codeText: string,
    codeTitle: string,
    codeLogo: string | null,
    codeSlug: string,
    codeLinkText: string,
    cultureMobileImage: string | null,
    cultureText: string,
    cultureTitle: string,
    cultureLogo: string | null,
    cultureSlug: string,
    cultureLinkText: string,
    strategyMobileImage: string | null,
    strategyText: string,
    strategyTitle: string,
    strategyLogo: string | null,
    strategySlug: string,
    strategyLinkText: string,
    team: Array< string > | null,
  },
};

export interface HowWeWorkPageQuery {
  pageHowWeWork:  {
    __typename: "PageHowWeWork",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    customersText: string,
    customersTitle: string,
    hiringTitle: string | null,
    imageBleed: string,
    methodText: string,
    methodTitle: string,
    sharingText: string,
    sharingTitle: string,
    team: Array< string > | null,
    teamText: string,
    teamTitle: string,
  },
};

export interface OpenPositionPageQueryVariables {
  id: string,
};

export interface OpenPositionPageQuery {
  pageOpenPosition:  {
    __typename: "OpenPosition",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    application: string,
    applicationTitle: string,
    aboutUs: string,
    aboutUsTitle: string,
    bonusKnowledge: string,
    bonusKnowledgeTitle: string,
    contentImage: string,
    knowledge: string,
    knowledgeTitle: string,
    location: string,
    role: string,
    roleTitle: string,
    team: Array< string > | null,
    technicalities: string,
    technicalitiesTitle: string,
    title: string,
  },
};

export interface OperationsPageQuery {
  pageOps:  {
    __typename: "PageOps",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    aboutText: string,
    aboutTitle: string,
    contentImage: string,
    hardwareText: string,
    hardwareTitle: string,
    networkText: string,
    networkTitle: string,
    softwareText: string,
    softwareTitle: string,
    team: Array< string > | null,
  },
};

export interface TeamPageQuery {
  pageTeam:  {
    __typename: "PageTeam",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    team: Array< string > | null,
  },
  team:  Array< {
    __typename: "TeamMember",
    avatar: string,
    email: string,
    location: string,
    name: string,
    phoneNumber: string | null,
    short: string,
    title: string,
  } >,
};

export interface TeamMemberPageQueryVariables {
  shortName: string,
};

export interface TeamMemberPageQuery {
  teamMember:  {
    __typename: "TeamMember",
    avatar: string,
    background: string,
    backgroundTitle: string,
    competence: string,
    competenceTitle: string,
    email: string,
    headerImage: string | null,
    headerTextBgColor: string | null,
    location: string,
    name: string,
    phoneNumber: string | null,
    team: Array< string > | null,
    title: string,
    why: string,
    whyTitle: string,
  },
};

export interface WorkPageQuery {
  pageWork:  {
    __typename: "PageWork",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    team: Array< string > | null,
  },
  openpositions:  Array< {
    __typename: "OpenPosition",
    id: string,
    location: string,
    role: string,
    title: string,
  } >,
};
