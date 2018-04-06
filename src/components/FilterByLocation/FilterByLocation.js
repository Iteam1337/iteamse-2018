// @flow

import * as React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import Filter from './Filter'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'

type Props = {
  children: (location: Iteam.ValidLocation) => React.Node,
}

type State = {
  location: Iteam.ValidLocation,
}

const Wrap = GridRow.extend`
  padding-top: 40px;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Filters = GridContent.extend`
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
