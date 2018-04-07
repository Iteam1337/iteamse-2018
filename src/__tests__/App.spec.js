import React from 'react'
import App from '../App'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../utils/test-utils/MockedQuery'
import { pageStart } from '../pages/__fixtures__/pageStart'
import { teamMember } from '../pages/__fixtures__/teamMember'
import { addresses } from '../components/Footer/__fixtures__/addresses'

describe('App', () => {
  const mockedResponse = {
    addresses,
    pageStart,
    teamMember,
  }

  it('renders App', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <App />
      </MockedQuery>
    )

    await wait(() => getByText('iteam'))

    expect(container).toMatchSnapshot()
  })
})
