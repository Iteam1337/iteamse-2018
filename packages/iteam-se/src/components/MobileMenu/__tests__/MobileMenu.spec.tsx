import { queries } from 'dom-testing-library'
import 'dom-testing-library/extend-expect'
import React from 'react'
import { cleanup, fireEvent, render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import MobileMenu from '../MobileMenu'

afterEach(cleanup)

describe('components/MobileMenu', () => {
  const mocks = []

  it('renders MobileMenu and can open it', async () => {
    window.resizeTo(411, 500)

    const { getByText, getByTestId, container } = render(
      <MockedQuery location={{ pathname: '/' }} mocks={mocks}>
        <MobileMenu />
      </MockedQuery>
    )

    // Mobile menu should not be open
    expect(queries.queryByText(container, 'Om')).not.toBeInTheDocument()

    // Assert that we have a mobile button and click it
    await wait(() => getByTestId('btn-mobile-menu'))
    fireEvent.click(getByTestId('btn-mobile-menu'))

    // Mobile menu should be open
    expect(getByText('Om')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should close the menu when navigating', async () => {
    const { getByText, getByTestId, container } = render(
      <MockedQuery location={{ pathname: '/' }} mocks={mocks}>
        <MobileMenu />
      </MockedQuery>
    )

    // Assert that we have a mobile button and click it
    await wait(() => getByTestId('btn-mobile-menu'))
    fireEvent.click(getByTestId('btn-mobile-menu'))

    // Mobile menu should be open
    expect(getByText('Om')).toBeInTheDocument()

    // Mock path transition since we don't have React router
    render(
      <MockedQuery location={{ pathname: '/om-oss' }} mocks={mocks}>
        <MobileMenu />
      </MockedQuery>,
      { container }
    )

    // Mobile menu should not be open
    expect(queries.queryByText(container, 'Om')).toMatchSnapshot()
  })
})
