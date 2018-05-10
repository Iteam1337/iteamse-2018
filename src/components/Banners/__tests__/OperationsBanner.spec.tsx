import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import { pageOps } from '../../../pages/__fixtures__/pageOps'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { OperationsBanner } from '../OperationsBanner'

describe('components/OperationsBanner', () => {
  const mocks = {
    pageOps,
  }

  let client: any

  beforeEach(() => {
    client = {
      query: jest.fn(),
    }
  })

  it('should prefetch ops page when hovering banner button', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <OperationsBanner client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Iteam Operations'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
