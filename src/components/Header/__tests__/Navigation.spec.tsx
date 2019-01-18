import * as React from 'react'
import { cleanup, fireEvent, render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { Navigation } from '../Navigation'

jest.mock('graphql-tag', () => jest.fn(input => input))

afterEach(cleanup)

describe('components/Navigation', () => {
  let client: any
  const mocks = []

  beforeEach(() => {
    client = {
      query: jest.fn(),
    }
  })

  it('handle hover of about page', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByText('Om'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of logo', async () => {
    const { getByTestId } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByTestId('logo').parentNode)

    await wait()

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of how we work', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByText('Metod'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of the team page', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByText('Medarbetare'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of our projects', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByText('Case'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of work with us', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    fireEvent.mouseEnter(getByText('Karriär'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
