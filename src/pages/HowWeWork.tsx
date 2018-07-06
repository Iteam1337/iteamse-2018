import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { HowWeWorkPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import { set } from '../utils/googleAnalytics'
import howWeWorkImage2 from './img/illustrations-group-2.svg'
import howWeWorkImage from './img/illustrations-group-3.svg'

export const HOW_WE_WORK_PAGE_QUERY = gql`
  query HowWeWorkPage {
    pageHowWeWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      customersText
      customersTitle
      hiringTitle
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
  componentDidMount() {
    set('hur-vi-jobbar')
  }

  render() {
    return (
      <HowWeWorkQuery query={HOW_WE_WORK_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageHowWeWork } = data

          return (
            <>
              <Helmet>
                <title>Iteam - There's a better way | Hur vi jobbar</title>
                <meta
                  name="og:title"
                  content="Iteam - There's a better way | Hur vi jobbar"
                />
                <meta
                  name="twitter:title"
                  content="Iteam - There's a better way | Hur vi jobbar"
                />
                {pageHowWeWork.headerImage && (
                  <meta
                    name="og:image"
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
                <ImageBleed image={pageHowWeWork.imageBleed} />
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
