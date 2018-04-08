import React from 'react'
import Home from '../Home'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageStart } from '../__fixtures__/pageStart'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/Home', () => {
  const mockedResponse = {
    pageStart,
    teamMembers,
  }

  it('renders Home', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Home />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
