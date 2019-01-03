import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { ContactPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import { SecondaryButton } from '../components/Button/Button'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Input, { TextArea } from '../components/Input/Input'
import Link from '../components/Link/Link'
import Team from '../components/Team/Team'
import H4 from '../components/Typography/H4'
import Paragraph from '../components/Typography/Paragraph'
import styled from '../theme'
import messageSentImage from './img/heart-emoji.svg'

export const CONTACT_PAGE_QUERY = gql`
  query ContactPage {
    pageContact {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      descriptionTitle
      descriptionText
      workTitle
      workText
      team
      contactTitle
    }
  }
`

const Fieldset = styled.section`
  display: grid;
  grid-auto-columns: auto;
  grid-gap: 10px;
  margin-bottom: 15px;

  @media (min-width: 1025px) {
    margin-top: 48px;
  }
`

const ContactWrap = styled.div`
  margin-top: 25px;
`

const ContactInput = styled(Input)`
  grid-column: span 2;

  @media (min-width: 1025px) {
    grid-column: auto;
  }
`

const ContactTextArea = styled(TextArea)`
  height: 128px;
  grid-column: span 2;
`

const MessageSentWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.concrete};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 48px;
  padding: 42px;

  > * + * {
    margin-left: 10px;
  }
`

class ContactQuery extends Query<ContactPageQuery> {}

export class Operations extends React.Component {
  state = {
    messageSent: false,
  }

  handleMessageSubmit = (_event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      messageSent: true,
    })
  }

  render() {
    return (
      <ContactQuery query={CONTACT_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageContact } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Kontakt</title>
                <meta property="og:title" content="Iteam | Kontakt" />
                <meta property="twitter:title" content="Iteam | Kontakt" />
              </Helmet>
              <Header
                backgroundImage={pageContact.headerImage}
                messageBgColor={pageContact.headerTextBgColor}
                messageOne={pageContact.headerText1}
                messageTwo={pageContact.headerText2}
              />

              <GridColumn>
                <Block title={pageContact.descriptionTitle}>
                  {pageContact.descriptionText}

                  <ContactWrap>
                    {this.state.messageSent ? (
                      <MessageSentWrap>
                        <div>
                          <H4>Ditt meddelande har skickats!</H4>
                          <Paragraph>
                            Vi återkommer till dig så snart som möjligt.
                          </Paragraph>
                          <Link to="/case">Se våra case så länge</Link>
                        </div>
                        <img src={messageSentImage} alt="Tack" />
                      </MessageSentWrap>
                    ) : (
                      <>
                        <Fieldset>
                          <ContactInput type="text" placeholder="Ditt namn" />
                          <ContactInput type="email" placeholder="E-post" />
                          <ContactTextArea placeholder="Meddelande" />
                        </Fieldset>
                        <SecondaryButton
                          color="primary"
                          onClick={this.handleMessageSubmit}
                        >
                          Skicka
                        </SecondaryButton>
                      </>
                    )}
                  </ContactWrap>
                </Block>
                <Block title={pageContact.workTitle}>
                  {pageContact.workText}
                </Block>
              </GridColumn>

              <Team
                bgColor="green"
                shortName={pageContact.team}
                callToAction={pageContact.contactTitle}
              />
            </>
          )
        }}
      </ContactQuery>
    )
  }
}

export default Operations
