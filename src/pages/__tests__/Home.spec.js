import React from 'react'
import Home from '../Home'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageStart } from '../__fixtures__/pageStart'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/Home', () => {
  const mockedResponse = {
    pageStart,
    teamMember,
  }

  it('renders Home', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Home />
      </MockedQuery>
    )

    await wait(() => getByText('iteam'))

    expect(container).toMatchSnapshot()
  })
})
