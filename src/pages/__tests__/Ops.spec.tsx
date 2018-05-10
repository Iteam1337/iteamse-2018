import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOps } from '../__fixtures__/pageOps'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Ops, { OPERATIONS_PAGE_QUERY } from '../Ops'

const mocks = [
  {
    request: {
      query: OPERATIONS_PAGE_QUERY,
    },
    result: {
      data: {
        pageOps,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Ops', () => {
  it('renders Ops', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Ops />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
