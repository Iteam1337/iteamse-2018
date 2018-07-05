import * as React from 'react'
import Fade from 'react-reveal/Fade'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from '../../theme'
import PaddedRow from '../Grid/PaddedRow'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'

interface AiTableProps {
  'data-test'?: string
  body: string
  title: string
}

const Content = styled.div`
  display: grid;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }
`

const TitleWrap = styled.div``

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 31px;

  * div[role='gridcell'] {
    white-space: normal;
  }
`

const BoldText = styled.div`
  font-weight: 700;
`

const columns = [
  {
    Cell: (row: any) => <BoldText>{row.value}</BoldText>,
    Header: '',
    accessor: 'name',
  },
  {
    Header: 'Package 1',
    accessor: 'package1',
  },
  {
    Header: 'Package 2',
    accessor: 'package2',
  },
  {
    Header: 'Package 3',
    accessor: 'package3',
  },
]

const data = [
  {
    name: 'FTE',
    package1: 4,
    package2: 4,
    package3: 4,
  },
  {
    name: 'Weeks',
    package1: 6,
    package2: 9,
    package3: 12,
  },
  {
    name: 'Data Scientist',
    package1: 1,
    package2: 1,
    package3: 1,
  },
  {
    name: 'DevOps Engineer',
    package1: 1,
    package2: '0.5',
    package3: '0.5',
  },
  {
    name: 'Data Engineer',
    package1: 1,
    package2: '1.5',
    package3: '1.5',
  },
  {
    name: 'Developer',
    package1: 1,
    package2: 1,
    package3: 1,
  },
  {
    name: 'Hours',
    package1: 960,
    package2: 1440,
    package3: 2160,
  },
  {
    name: 'Deliverables',
    package1: '',
    package2: '',
    package3: '',
  },
  {
    name: 'Datasource',
    package1: 'Database Export',
    package2: 'Live Data Streams',
    package3: 'Live Data Streams',
  },
  {
    name: 'Model',
    package1: 'Proof-of-Concept Model',
    package2: 'Proof-of-Concept Model',
    package3: 'Production Model',
  },
]

const AiTable: React.SFC<AiTableProps> = ({
  body,
  'data-test': dataTest = '',
  title,
}) => {
  return (
    <Fade bottom distance="50px">
      <PaddedRow data-test={`table-${dataTest}`}>
        <Content>
          <TitleWrap>
            <H3>{title}</H3>
          </TitleWrap>

          <Text>
            <Paragraph>{body}</Paragraph>
            <ReactTable
              columns={columns}
              data={data}
              defaultPageSize={10}
              loading={false}
              resizable={false}
              showPagination={false}
              sortable={false}
            />
          </Text>
        </Content>
      </PaddedRow>
    </Fade>
  )
}

export default AiTable
