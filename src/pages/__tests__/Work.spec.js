import React from 'react'
import { Work } from '../Work'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageWork } from '../__fixtures__/pageWork'
import { teamMembers } from '../__fixtures__/teamMembers'
import { openpositions } from '../__fixtures__/openpositions'
import { pageOpenPosition } from '../__fixtures__/pageOpenPosition'

describe('components/Work', () => {
  const mockedResponse = {
    openpositions,
    pageOpenPosition,
    pageWork,
    teamMembers,
  }

  it('renders Work', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Work />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
