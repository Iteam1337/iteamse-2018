import React from 'react'
import OpenPosition from '../OpenPosition'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOpenPosition } from '../__fixtures__/pageOpenPosition'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/OpenPosition', () => {
  const mockedResponse = {
    pageOpenPosition,
    teamMembers,
  }

  const match = {
    params: {
      id: 'junior-ux-designer',
    },
  }

  it('renders OpenPosition', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <OpenPosition match={match} />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
