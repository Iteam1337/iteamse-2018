import React from 'react'
import { Navigation } from '../Navigation'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'

jest.mock('graphql-tag', () => jest.fn(input => input))

describe('components/Navigation', () => {
  let client
  const mockedResponse = {}

  beforeEach(() => {
    client = {
      query: jest.fn(),
    }
  })

  it('handle hover of about page', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Om oss'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of logo', async () => {
    const { getByAltText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByAltText('Iteam logo').parentNode)

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of how we work', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Hur vi jobbar'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of the team page', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Teamet'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of our projects', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Våra case'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of work with us', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Jobba hos oss'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of operations', async () => {
    const { getByText } = render(
      <MockedQuery response={mockedResponse}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Drift & Support'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
