import React from 'react'
import Case from '../Case'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { workCase } from '../__fixtures__/case'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/Case', () => {
  const mockedResponse = {
    workCase,
    teamMembers,
  }

  const match = {
    params: {
      slug: 'arbetsformedlingen',
    },
  }

  it('renders Case', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Case match={match} />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
