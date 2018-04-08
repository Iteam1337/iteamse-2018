import React from 'react'
import { Work } from '../Work'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageWork } from '../__fixtures__/pageWork'
import { teamMembers } from '../__fixtures__/teamMembers'
import { openpositions } from '../__fixtures__/openpositions'
import { pageOpenPosition } from '../__fixtures__/pageOpenPosition'

describe('components/Work', () => {
  const mockedResponse = {
    openpositions,
    pageOpenPosition,
    pageWork,
    teamMembers,
  }

  it('renders Work', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Work />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })

  it('should handle prefetching any work when hovering link', async () => {
    const client = {
      query: jest.fn(),
    }

    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Work client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Läs mer'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
