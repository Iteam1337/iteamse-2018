import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { openpositions } from '../__fixtures__/openpositions'
import { pageHowWeWork } from '../__fixtures__/pageHowWeWork'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import HowWeWork, { HOW_WE_WORK_PAGE_QUERY } from '../HowWeWork'

const mocks = [
  {
    request: {
      query: HOW_WE_WORK_PAGE_QUERY,
    },
    result: {
      data: {
        openpositions,
        pageHowWeWork,
      },
    },
  },
  TeamQueryMock,
]

describe('components/HowWeWork', () => {
  it('renders HowWeWork', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <HowWeWork />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
