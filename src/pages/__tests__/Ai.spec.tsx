import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageAi } from '../__fixtures__/pageAi'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Ai, { AI_PAGE_QUERY } from '../Ai'

const mocks = [
  {
    request: {
      query: AI_PAGE_QUERY,
    },
    result: {
      data: {
        pageAi,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Ai', () => {
  it('renders Ai', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Ai />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
