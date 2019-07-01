import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { cases } from '../__fixtures__/cases'
import { pageCases } from '../__fixtures__/pageCases'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import { CasePage, CASES_PAGE_QUERY } from '../Cases'

const mocks = [
  {
    request: {
      query: CASES_PAGE_QUERY,
    },
    result: {
      data: {
        cases,
        pageCases,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Cases', () => {
  it('renders Cases', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <CasePage />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
