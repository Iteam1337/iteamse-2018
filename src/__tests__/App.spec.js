import React from 'react'
import App from '../App'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../utils/test-utils/MockedQuery'
import { pageStart } from '../pages/__fixtures__/pageStart'
import { teamMembers } from '../pages/__fixtures__/teamMembers'
import { addresses } from '../components/Footer/__fixtures__/addresses'

describe('App', () => {
  const mockedResponse = {
    addresses,
    pageStart,
    teamMembers,
  }

  it('renders App', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <App />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
