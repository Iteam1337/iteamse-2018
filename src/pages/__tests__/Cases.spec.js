import React from 'react'
import { CasePage } from '../Cases'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageCases } from '../__fixtures__/pageCases'
import { teamMember } from '../__fixtures__/teamMember'
import { cases } from '../__fixtures__/cases'

describe('components/Cases', () => {
  const mockedResponse = {
    cases,
    pageCases,
    teamMember,
  }

  it('renders Cases', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <CasePage />
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
        <CasePage client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseOver(getByText('SEB'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
