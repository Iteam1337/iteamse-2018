import React from 'react'
import Ops from '../Ops'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOps } from '../__fixtures__/pageOps'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/Ops', () => {
  const mockedResponse = {
    pageOps,
    teamMembers,
  }

  it('renders Ops', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Ops />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
