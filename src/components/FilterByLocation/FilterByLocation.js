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

const Filters = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
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

        {this.props.children(this.state.location)}
      </React.Fragment>
    )
  }
}

export default FilterByLocation
