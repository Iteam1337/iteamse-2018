import L from 'leaflet'
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

export const Content = styled.div`
  display: grid;
  grid-column: -1 / 1;
  grid-template-rows: auto 1fr;
  grid-template-columns: 30px 1fr 30px;
  z-index: 2;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const LocationNavigation = styled.div`
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
  grid-column: 1 / -1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`

const StyledTileLayer = styled(TileLayer)`
  filter: grayscale(100%);
`

const LocationButton =
  styled(SecondaryButton) <
  { isActive: boolean } >
  `
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cornflowerBlue : theme.colors.alabaster};
  border-color: #E8E8E8;
  border-radius: 0;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#000000')};
  font-size: 14px;
  padding: 10px 24px;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  @media (min-width: 481px) {
    font-size: 16px;
    padding: 14px 34px;
  }
`

const markerIcon = L.icon({
  iconSize: L.point(60, 73),
  iconUrl: require('./img/marker-icon.png'),
})

const LocationMap = ({ coords }: { coords: [number, number] }) => (
  <MapWrapper center={coords} zoom={18} zoomControl={false}>
    <StyledTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker icon={markerIcon} position={coords} />
  </MapWrapper>
)

type Address = {
  address1: string
  city: string
  contactMail: string
  contactPhone: string
  mapLocation: {
    lat: number
    lon: number
  }
  title: string
  zip: string
}

interface ContactHeaderProps {
  addresses: Address[]
}

interface ContactHeaderState {
  currentLocation: Address
}

class Header extends React.Component<ContactHeaderProps, ContactHeaderState> {
  state = {
    currentLocation: this.props.addresses[0],
  }

  setLocation = (location: Address) =>
    this.setState({
      currentLocation: location,
    })

  render() {
    const { currentLocation } = this.state

    return (
      <LazyLoad height={700} once>
        <Wrap>
          <LocationMap
            coords={[
              currentLocation.mapLocation.lat,
              currentLocation.mapLocation.lon,
            ]}
          />
          <Content>
            <Navigation isInverted noShadow />
            <LocationNavigation>
              {this.props.addresses.map(address => (
                <LocationButton
                  key={address.city}
                  isActive={currentLocation.city === address.city}
                  onClick={() => this.setLocation(address)}
                >
                  {address.city}
                </LocationButton>
              ))}
            </LocationNavigation>
          </Content>
        </Wrap>
      </LazyLoad>
    )
  }
}

export default Header
