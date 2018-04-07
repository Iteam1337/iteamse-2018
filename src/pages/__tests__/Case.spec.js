import React from 'react'
import Case from '../Case'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { workCase } from '../__fixtures__/case'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/Case', () => {
  const mockedResponse = {
    workCase,
    teamMember,
  }

  const match = {
    params: {
      slug: 'arbetsformedlingen',
    },
  }

  it('renders Case', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Case match={match} />
      </MockedQuery>
    )

    await wait(() => getByText('Arbetsförmedlingen'))

    expect(container).toMatchSnapshot()
  })
})
