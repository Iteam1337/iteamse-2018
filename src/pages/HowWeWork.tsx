import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { HowWeWorkPageQuery } from '../../typings/vimlacms'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import howWeWorkImage2 from './img/illustrations-group-2.svg'
import howWeWorkImage from './img/illustrations-group-3.svg'

export const HOW_WE_WORK_PAGE_QUERY = gql`
  query HowWeWorkPage {
    pageHowWeWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      customersText
      customersTitle
      hiringTitle
      imageBleed
      methodText
      methodTitle
      sharingText
      sharingTitle
      teamText
      teamTitle
    }
  }
`

class HowWeWorkQuery extends Query<HowWeWorkPageQuery> {}

const HowWeWork = () => {
  return (
    <HowWeWorkQuery query={HOW_WE_WORK_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { pageHowWeWork } = data

        return (
          <>
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

            <Team bgColor="blue" shortName={['rln', 'msr']} />
          </>
        )
      }}
    </HowWeWorkQuery>
  )
}

export default HowWeWork
