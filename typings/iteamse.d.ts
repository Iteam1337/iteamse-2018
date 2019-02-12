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
    contactTitle: string,
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
    casePageImage: string | null,
    casePageBackgroundImage: string | null,
    frameworks: Array< string | null > | null,
    frameworksTitle: string,
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
    partners: string | null,
    partnersTitle: string | null,
    contact: string | null,
    contactTitle: string | null,
    team: Array< string > | null,
    quote: string | null,
    quotePerson: string | null,
    quoteBgColor: string | null,
  } | null,
};

export interface CasesPageQuery {
  pageCases:  {
    __typename: "PageCases",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    contactTitle: string,
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

export interface StartQuery {
  pageStart2019:  {
    __typename: "PageStart2019",
    team: Array< string > | null,
    headerText1: string,
    headerLead: string,
    weAreTitle: string,
    weAreText: string,
    weOfferTitle: string,
    weOfferText: string,
    ourMethodTitle: string,
    ourMethodText: string,
    ctaButtonText: string,
    ctaTitle: string,
    ctaText: string,
  },
};

export interface HowWeWorkPageQuery {
  openpositions:  Array< {
    __typename: "OpenPosition",
    location: string,
    id: string,
    title: string,
  } >,
  pageHowWeWork:  {
    __typename: "PageHowWeWork",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    contactTitle: string,
    customersText: string,
    customersTitle: string,
    hiringTitle: string,
    openApplicationText: string,
    openApplicationHeader: string,
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

export interface OffersPageQuery {
  pageOffers:  {
    __typename: "PageOffers",
    headerImage: string,
    headerText1: string,
    headerText2: string | null,
    headerTextBgColor: string,
    contactTitle: string,
    team: Array< string > | null,
    offersLeadText: string,
  },
  offers:  Array< {
    __typename: "Offer",
    offerIntroImage: string,
    offerTitle: string,
    offerIntroText: string,
    offerLead: string,
    offerUspOneTitle: string,
    offerUspOneText: string,
    offerUspTwoTitle: string,
    offerUspTwoText: string,
    offerUspThreeTitle: string | null,
    offerUspThreeText: string | null,
    offerUspFourTitle: string | null,
    offerUspFourText: string | null,
    offerIllustrationImage: string,
    offerOrder: number,
  } >,
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
    contactTitle: string,
    contentImage: string,
    knowledge: string,
    knowledgeTitle: string,
    location: string,
    perks: string,
    perksTitle: string,
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
    body: string | null,
    headerImage: string | null,
    headerText1: string,
    headerText2: string,
    headerTextBgColor: string | null,
    team: Array< string > | null,
    contactTitle: string,
  },
};

export interface TeamPageQuery {
  pageTeam:  {
    __typename: "PageTeam",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    contactTitle: string,
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
  } | null,
};

export interface WorkPageQuery {
  pageWork:  {
    __typename: "PageWork",
    headerImage: string | null,
    headerText1: string | null,
    headerText2: string | null,
    headerTextBgColor: string | null,
    contactTitle: string,
    openApplicationText: string,
    openApplicationLabel: string,
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
