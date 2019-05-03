import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { openpositions } from '../__fixtures__/openpositions'
import { pageWork } from '../__fixtures__/pageWork'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Work, { WORK_PAGE_QUERY } from '../Work'

const mocks = [
  {
    request: {
      query: WORK_PAGE_QUERY,
    },
    result: {
      data: {
        openpositions,
        pageWork,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Work', () => {
  it('renders Work', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Work />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
