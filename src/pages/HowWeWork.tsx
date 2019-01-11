import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { HowWeWorkPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import OpenPositionsBlock from '../components/Blocks/OpenPositionsBlock'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import howWeWorkImage2 from './img/illustrations-group-2.svg'
import howWeWorkImage from './img/illustrations-group-3.svg'

export const HOW_WE_WORK_PAGE_QUERY = gql`
  query HowWeWorkPage {
    openpositions {
      location
      id
      title
    }
    pageHowWeWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      customersText
      customersTitle
      hiringTitle
      openApplicationText
      openApplicationHeader
      imageBleed
      methodText
      methodTitle
      sharingText
      sharingTitle
      team
      teamText
      teamTitle
    }
  }
`

class HowWeWorkQuery extends Query<HowWeWorkPageQuery> {}

export class HowWeWork extends React.Component {
  render() {
    return (
      <HowWeWorkQuery query={HOW_WE_WORK_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { openpositions, pageHowWeWork } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Hur vi jobbar</title>
                <meta property="og:title" content="Iteam | Hur vi jobbar" />
                <meta property="twitter:title" content="Iteam | Hur vi jobbar" />
                {pageHowWeWork.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageHowWeWork.headerImage}`}
                  />
                )}
              </Helmet>
              <Header
                backgroundImage={pageHowWeWork.headerImage}
                messageBgColor={pageHowWeWork.headerTextBgColor}
                messageOne={pageHowWeWork.headerText1}
                messageTwo={pageHowWeWork.headerText2}
              />

              <GridColumn>
                <Block title={pageHowWeWork.teamTitle}>
                  {pageHowWeWork.teamText}
                </Block>
                <ImageBlock image={howWeWorkImage} />
                <Block title={pageHowWeWork.methodTitle}>
                  {pageHowWeWork.methodText}
                </Block>
              </GridColumn>
              <OpenPositionsBlock
                openApplicationText={pageHowWeWork.openApplicationText}
                openApplicationHeader={pageHowWeWork.openApplicationHeader}
                openpositions={openpositions}
                title={pageHowWeWork.hiringTitle}
              />
              <ImageBleed image={pageHowWeWork.imageBleed} />
              <GridColumn>
                <Block title={pageHowWeWork.sharingTitle}>
                  {pageHowWeWork.sharingText}
                </Block>
                <ImageBlock image={howWeWorkImage2} />
                <Block title={pageHowWeWork.customersTitle}>
                  {pageHowWeWork.customersText}
                </Block>
              </GridColumn>

              <Team
                bgColor="blue"
                callToAction={pageHowWeWork.contactTitle}
                shortName={pageHowWeWork.team}
              />
            </>
          )
        }}
      </HowWeWorkQuery>
    )
  }
}

export default HowWeWork
