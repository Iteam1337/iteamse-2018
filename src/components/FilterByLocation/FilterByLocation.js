// @flow

import * as React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import styled from 'styled-components'
import Filter from './Filter'

type Props = {
  children: (location: Iteam.ValidLocation) => React.Node,
}

type State = {
  location: Iteam.ValidLocation,
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
    padding-left: 0;
    padding-right: 0;
  }
`

const Filters = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    grid-column: 2;
  }
`

const LOCATIONS = ['', 'Stockholm', 'Göteborg']

class FilterByLocation extends React.Component<Props, State> {
  props: Props

  state = {
    location: '',
  }

  changeLocation = (location: Iteam.ValidLocation) => {
    this.setState({
      location,
    })
  }

  render () {
    return (
      <React.Fragment>
        <Wrap>
          <Filters>
            {LOCATIONS.map(loc => (
              <Filter
                key={loc}
                location={loc}
                changeLocation={this.changeLocation}
                selected={this.state.location === loc}
              >
                {loc ? loc : 'Alla'}
              </Filter>
            ))}
          </Filters>
        </Wrap>

        {this.props.children(this.state.location)}
      </React.Fragment>
    )
  }
}

export default FilterByLocation
