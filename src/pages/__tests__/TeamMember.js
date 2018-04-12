import React from 'react'
import TeamMember from '../TeamMember'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { teamMember } from '../__fixtures__/teamMember'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/Team', () => {
  const mockedResponse = {
    teamMember,
    teamMembers,
  }

  const match = {
    params: {
      shortName: 'rln',
    },
  }

  it('renders TeamMember', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <TeamMember match={match} />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
