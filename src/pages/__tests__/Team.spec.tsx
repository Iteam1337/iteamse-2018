import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageTeam } from '../__fixtures__/pageTeam'
import { teamMembers } from '../__fixtures__/teamMembers'
import Team, { TEAM_PAGE_QUERY } from '../Team'

const mocks = [
  {
    request: {
      query: TEAM_PAGE_QUERY,
    },
    result: {
      data: {
        pageTeam,
        team: teamMembers,
      },
    },
  },
]

describe('components/Team', () => {
  it('renders Team', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Team />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })

  it('should handle changing location using mouse', async () => {
    const { getByText, container } = render(
      <MockedQuery mocks={mocks}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.click(getByText('Stockholm'))

    expect(container).toMatchSnapshot()
  })

  it('should handle changing location using keyboard', async () => {
    const { getByText, container } = render(
      <MockedQuery mocks={mocks}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.keyUp(getByText('Göteborg'), {
      keyCode: 13,
    })

    expect(container).toMatchSnapshot()
  })

  it('should not change using keyboard if not enter or space key', async () => {
    const { getByText, container } = render(
      <MockedQuery mocks={mocks}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.keyUp(getByText('Göteborg'), {
      keyCode: 9,
    })

    expect(container).toMatchSnapshot()
  })
})
