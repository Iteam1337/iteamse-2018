import * as React from 'react'
import { ValidLocation } from '../../../typings/iteam'
import PaddedRow from '../Grid/PaddedRow'
import Filter from './Filter'

type Props = {
  children: (location: ValidLocation) => React.ReactNode
}

type State = {
  location: ValidLocation
}

const Filters = PaddedRow.extend`
  display: flex;
`

const LOCATIONS = ['', 'Stockholm', 'Göteborg'] as ValidLocation[]

class FilterByLocation extends React.Component<Props, State> {
  state = {
    location: '' as ValidLocation,
  }

  changeLocation = (location: ValidLocation) => {
    this.setState({
      location,
    })
  }

  render() {
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
