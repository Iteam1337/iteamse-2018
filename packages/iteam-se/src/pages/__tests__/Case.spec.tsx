import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { workCase } from '../__fixtures__/case'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Case, { CASE_PAGE_QUERY } from '../Case'

const location = {
  pathname: '/case/arbetsformedlingen',
}

const params = {
  slug: 'arbetsformedlingen',
}

const mocks = [
  {
    request: {
      query: CASE_PAGE_QUERY,
      variables: params,
    },
    result: {
      data: {
        workCase,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Case', () => {
  it('renders Case', async () => {
    const { container } = render(
      <MockedQuery location={location} mocks={mocks} params={params}>
        <Case />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
