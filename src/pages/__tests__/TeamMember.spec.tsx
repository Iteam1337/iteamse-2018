import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { teamMember } from '../__fixtures__/teamMember'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import TeamMember, { TEAM_MEMBER_PAGE_QUERY } from '../TeamMember'

const location = {
  pathname: '/medarbetare/rln',
}

const params = {
  shortName: 'rln',
}

const mocks = [
  {
    request: {
      query: TEAM_MEMBER_PAGE_QUERY,
      variables: params,
    },
    result: {
      data: {
        teamMember,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Team', () => {
  it('renders TeamMember', async () => {
    const { container } = render(
      <MockedQuery location={location} mocks={mocks} params={params}>
        <TeamMember />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
