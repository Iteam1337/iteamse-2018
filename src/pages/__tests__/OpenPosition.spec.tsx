import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOpenPosition } from '../__fixtures__/pageOpenPosition'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import OpenPosition, { OPEN_POSITION_PAGE_QUERY } from '../OpenPosition'

const location = {
  pathname: '/jobba-hos-oss/junior-ux-designer',
}

const params = {
  id: 'junior-ux-designer',
}

const mocks = [
  {
    request: {
      query: OPEN_POSITION_PAGE_QUERY,
      variables: params,
    },
    result: {
      data: {
        pageOpenPosition,
      },
    },
  },
  TeamQueryMock,
]

describe('components/OpenPosition', () => {
  it('renders OpenPosition', async () => {
    const { container } = render(
      <MockedQuery location={location} mocks={mocks} params={params}>
        <OpenPosition />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
