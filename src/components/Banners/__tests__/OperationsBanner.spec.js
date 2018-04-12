import React from 'react'
import { OperationsBanner } from '../OperationsBanner'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { pageOps } from '../../../pages/__fixtures__/pageOps'

describe('components/OperationsBanner', () => {
  const mockedResponse = {
    pageOps,
  }

  let client

  beforeEach(() => {
    client = {
      query: jest.fn(),
    }
  })

  it('should prefetch ops page when hovering banner button', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <OperationsBanner client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Iteam Operations'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
