import React from 'react'
import OpenPosition from '../OpenPosition'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOpenPosition } from '../__fixtures__/pageOpenPosition'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/OpenPosition', () => {
  const mockedResponse = {
    pageOpenPosition,
    teamMember,
  }

  const match = {
    params: {
      id: 'junior-ux-designer',
    },
  }

  it('renders OpenPosition', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <OpenPosition match={match} />
      </MockedQuery>
    )

    await wait(() => getByText('kunna'))

    expect(container).toMatchSnapshot()
  })
})
