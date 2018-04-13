import React from 'react'
import { CasePage } from '../Cases'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageCases } from '../__fixtures__/pageCases'
import { teamMembers } from '../__fixtures__/teamMembers'
import { cases } from '../__fixtures__/cases'

describe('components/Cases', () => {
  const mockedResponse = {
    cases,
    pageCases,
    teamMembers,
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
})
