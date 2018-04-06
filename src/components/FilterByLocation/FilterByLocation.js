// @flow

import * as React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import Filter from './Filter'
import PaddedRow from '../Grid/PaddedRow'

type Props = {
  children: (location: Iteam.ValidLocation) => React.Node,
}

type State = {
  location: Iteam.ValidLocation,
}

const Filters = PaddedRow.extend`
  display: flex;
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
