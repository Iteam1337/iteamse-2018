const { gql } = require('apollo-server-micro')

module.exports = gql`
  enum Location {
    Stockholm
  }

  # Office location
  type Address {
    address1: String!
    address2: String!
    city: String!
    contactMail: String!
    contactPhone: String!
    orgNumber: String!
    title: String!
    zip: String!
  }

  # A case
  type Case {
    thumbnailImage: String
    casePageImage: String
    casePageBackgroundImage: String
    logo: String!
    headerBgColor: String
    team: [String!]
    title: String!
    location: String!
    slug: String!
    tags: [String]!
    shortDescription: String!
    introductionTitle: String!
    introduction: String!
    processTitle: String!
    process: String!
    developmentTitle: String!
    development: String!
    aboutCompanyTitle: String!
    aboutCompany: String!
    partnersTitle: String
    partners: String
    contactTitle: String
    contact: String
    quote: String
    quotePerson: String
    quoteBgColor: String
    frameworks: [String]
    frameworksTitle: String!
  }

  # An offer
  type Offer {
    offerIntroImage: String!
    offerTitle: String!
    offerIntroText: String!
    offerLead: String!
    offerUspOneTitle: String!
    offerUspOneText: String!
    offerUspTwoTitle: String!
    offerUspTwoText: String!
    offerUspThreeTitle: String
    offerUspThreeText: String
    offerUspFourTitle: String
    offerUspFourText: String
    offerIllustrationImage: String!
    offerOrder: Int!
  }

  interface Page {
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
  }

  # A coworker
  type TeamMember {
    headerImage: String
    headerTextBgColor: String
    avatar: String!
    background: String!
    backgroundTitle: String!
    competence: String!
    competenceTitle: String!
    name: String!
    email: String!
    location: String!
    phoneNumber: String
    short: String!
    team: [String!]
    title: String!
    why: String!
    whyTitle: String!
  }

  # Available job position
  type OpenPosition implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    # custom fields
    id: String!
    application: String!
    applicationTitle: String!
    aboutUs: String!
    aboutUsTitle: String!
    bonusKnowledge: String!
    bonusKnowledgeTitle: String!
    contactTitle: String!
    contentImage: String!
    knowledge: String!
    knowledgeTitle: String!
    location: String!
    perks: String!
    perksTitle: String!
    role: String!
    roleTitle: String!
    technicalities: String!
    technicalitiesTitle: String!
    title: String!
  }

  # Page /om-oss
  type PageAboutUs implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    # custom fields
    funText: String!
    funTitle: String!
    goodText: String!
    goodTitle: String!
    imageBleed: String!
    stabilityIcons: [String]!
    stabilityText: String!
    stabilityTitle: String!
    valueText: String!
    valueTitle: String!
    contactTitle: String!
  }

  # Page /
  type PageStart implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    # custom fields
    codeMobileImage: String
    codeText: String!
    codeTitle: String!
    codeLogo: String
    codeSlug: String!
    codeLinkText: String!
    cultureMobileImage: String
    cultureText: String!
    cultureTitle: String!
    cultureLogo: String
    cultureSlug: String!
    cultureLinkText: String!
    strategyMobileImage: String
    strategyText: String!
    strategyTitle: String!
    strategyLogo: String
    strategySlug: String!
    strategyLinkText: String!
    contactTitle: String!
  }

  # Page /
  type PageStart2019 {
    # interface
    headerImage: String
    headerText1: String!
    headerLead: String!
    headerTextBgColor: String
    team: [String!]
    # custom fields
    weAreTitle: String!
    weAreText: String!
    weOfferTitle: String!
    weOfferText: String!
    ourMethodTitle: String!
    ourMethodText: String!
    ctaButtonText: String!
    ctaTitle: String!
    ctaText: String!
  }

  # Page /teamet
  type PageTeam implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    contactTitle: String!
  }

  # Page /hur-vi-jobbar
  type PageHowWeWork implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    # custom fields
    customersText: String!
    customersTitle: String!
    hiringTitle: String!
    openApplicationHeader: String!
    openApplicationText: String!
    imageBleed: String!
    methodText: String!
    methodTitle: String!
    sharingText: String!
    sharingTitle: String!
    teamText: String!
    teamTitle: String!
    contactTitle: String!
  }

  # Page /jobba-hos-oss
  type PageWork implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    contactTitle: String!
    openApplicationLabel: String!
    openApplicationText: String!
  }

  # Page /erbjudanden
  type PageOffers implements Page {
    # interface
    headerImage: String!
    headerText1: String!
    headerText2: String
    headerTextBgColor: String!
    team: [String!]
    contactTitle: String!
    # custom fields
    offersLeadText: String!
  }

  # Page /case
  type PageCases implements Page {
    # interface
    headerImage: String
    headerText1: String
    headerText2: String
    headerTextBgColor: String
    team: [String!]
    contactTitle: String!
  }

  type Query {
    addresses: [Address!]!
    cases: [Case]!
    case(slug: String!): Case
    openpositions: [OpenPosition!]!
    offers: [Offer!]!
    pageAboutUs: PageAboutUs!
    pageCases: PageCases!
    pageHowWeWork: PageHowWeWork!
    pageStart: PageStart!
    pageStart2019: PageStart2019!
    pageOffers: PageOffers!
    pageOpenPosition(id: String!): OpenPosition!
    pageTeam: PageTeam!
    pageWork: PageWork!
    # Get all team members sorted by name with an optional limit
    team(limit: Int): [TeamMember!]!
    # Get a specific team member using it's short name
    teamMember(shortName: String!): TeamMember
    # Get some team member using their short names
    teamMembers(shortName: [String!]!): [TeamMember!]!
  }
`
