// @flow

import React from 'react'
import GridRow from '../components/Grid/GridRow'
import GridContent from '../components/Grid/GridContent'
import styled from 'styled-components'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import Team from '../components/Team/Team'
import Header from '../components/Header/Header'

const CASES = [
  {
    location: 'Stockholm',
    shortDescription:
      'Synliggörande av asylsökandes kompetens med digitala verktyg',
    title: 'Arbetsförmedlingen | Digital tjänst',
  },
  {
    location: 'Göteborg',
    shortDescription: 'API som strategisk framtidssatsning',
    title: 'Taxi Stockholm | API',
  },
  {
    location: 'Stockholm',
    shortDescription: 'Från styrelsebeslut till agil verklighet',
    title: 'SEB | Lorem Ipsum',
  },
  {
    location: 'Stockholm',
    shortDescription: 'En rubrik om vad vi gjort för Vimla',
    title: 'Vimla | Backend',
  },
]

const Cases = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 120px;
  padding-top: 60px;
`
const Case = styled.div``
const CaseImage = styled.div`
  background-color: #f1f1f1;
  height: 500px;
  width: 500px;
`
const Meta = styled.div`
  margin-top: 30px;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`
const ShortDescription = styled.div`
  font-size: 25px;
  font-weight: 300;
`

const CasePage = () => {
  return (
    <React.Fragment>
      <Header
        backgroundImage="http://lorempixel.com/1920/1080"
        messageBgColor="green"
        messageOne="Några exempel på"
        messageTwo="sådant vi gjort"
      />

      <GridRow>
        <GridContent>
          <FilterByLocation>
            {location => (
              <Cases>
                {CASES.filter(filterByLocation(location)).map(workCase => (
                  <Case key={workCase.title}>
                    <CaseImage />
                    <Meta>
                      <Title>{workCase.title}</Title>
                      <ShortDescription>
                        {workCase.shortDescription}
                      </ShortDescription>
                    </Meta>
                  </Case>
                ))}
              </Cases>
            )}
          </FilterByLocation>
        </GridContent>
      </GridRow>

      <Team bgColor="green" shortName={['hrn', 'jmn']} />
    </React.Fragment>
  )
}

export default CasePage
