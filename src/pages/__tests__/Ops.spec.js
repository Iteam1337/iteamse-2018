import React from 'react'
import Ops from '../Ops'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageOps } from '../__fixtures__/pageOps'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/Ops', () => {
  const mockedResponse = {
    pageOps,
    teamMember,
  }

  it('renders Ops', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Ops />
      </MockedQuery>
    )

    await wait(() => getByText('drift'))

    expect(container).toMatchSnapshot()
  })
})
