import React from 'react'
import LazyLoad from 'react-lazyload'
import { Map, Marker, TileLayer } from 'react-leaflet'
import styled from '../../theme'
import { SecondaryButton } from '../Button/Button'
import { GridColumnClean } from '../Grid/GridColumn'
import Navigation from './Navigation'

const Wrap = styled(GridColumnClean)`
  background-color: ${({ theme }) => theme.colors.emperor};
  height: 430px;
  position: relative;

  @media (min-width: 481px) {
    height: 700px;
  }
`

const MapNavButton =
  styled(SecondaryButton) <
  { isActive: boolean } >
  `
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cornflowerBlue : theme.colors.alabaster};
  border-color: #E8E8E8;
  border-radius: 0;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#000000')};
  font-size: 14px;
  padding: 12px 34px;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  @media (min-width: 481px) {
    font-size: 16px;
    padding: 12px 44px;
  }
`

export const Content = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0) 100px
  );
  display: grid;
  grid-column: -1 / 1;
  grid-template-rows: auto 1fr;
  grid-template-columns: 30px 1fr 30px;
  z-index: 2;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const MapNav = styled.div`
  align-self: flex-end;
  grid-column: 2;
  grid-row: 2;
  padding-bottom: 30px;

  @media (min-width: 481px) {
    padding-bottom: 40px;
  }
`

const MapWrapper = styled(Map)`
  bottom: 0;
  filter: grayscale(100%);
  grid-column: 1 / -1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`

const DisplayMap = ({ coords }: { coords: [number, number] }) => (
  <MapWrapper center={coords} zoom={15} zoomControl={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={coords} />
  </MapWrapper>
)

interface MapLocation {
  coords: [number, number]
  name: 'Stockholm' | 'Göteborg'
}

const Stockholm: MapLocation = {
  coords: [59.3439169, 18.0672357],
  name: 'Stockholm',
}

const Gothenburg: MapLocation = {
  coords: [57.7001628, 11.9725684],
  name: 'Göteborg',
}

class Header extends React.Component {
  state = {
    currentLocation: Stockholm,
  }

  setCoords = (location: MapLocation) =>
    this.setState({
      currentLocation: location,
    })

  render() {
    const { currentLocation } = this.state

    return (
      <LazyLoad height={700} once>
        <Wrap>
          <DisplayMap coords={currentLocation.coords} />
          <Content>
            <Navigation isInverted noShadow />
            <MapNav>
              <MapNavButton
                isActive={currentLocation === Stockholm}
                onClick={() => this.setCoords(Stockholm)}
              >
                {Stockholm.name}
              </MapNavButton>

              <MapNavButton
                isActive={currentLocation === Gothenburg}
                onClick={() => this.setCoords(Gothenburg)}
              >
                {Gothenburg.name}
              </MapNavButton>
            </MapNav>
          </Content>
        </Wrap>
      </LazyLoad>
    )
  }
}

export default Header
