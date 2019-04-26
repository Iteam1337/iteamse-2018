import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { addresses, pageContact } from '../__fixtures__/pageContact'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Contact, { CONTACT_PAGE_QUERY } from '../Contact'

const mocks = [
  {
    request: {
      query: CONTACT_PAGE_QUERY,
    },
    result: {
      data: {
        addresses,
        pageContact,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Contact', () => {
  it('renders Contact Us', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Contact />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
