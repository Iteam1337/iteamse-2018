import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageStart2019 } from '../__fixtures__/pageStart2019'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Home, { HOME_PAGE_QUERY } from '../Home'

const mocks = [
  {
    request: {
      query: HOME_PAGE_QUERY,
    },
    result: {
      data: {
        pageStart2019,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Home', () => {
  it('renders Home', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Home />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
