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
    Header: 'Paket 1',
    accessor: 'package1',
  },
  {
    Header: 'Paket 2',
    accessor: 'package2',
  },
  {
    Header: 'Paket 3',
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
    name: 'Veckor',
    package1: 6,
    package2: 9,
    package3: 12,
  },
  {
    name: 'Data-analytiker',
    package1: 1,
    package2: 1,
    package3: 1,
  },
  {
    name: 'DevOps-ingenjör',
    package1: 1,
    package2: '0.5',
    package3: '0.5',
  },
  {
    name: 'Data-ingenjör',
    package1: 1,
    package2: '1.5',
    package3: '1.5',
  },
  {
    name: 'Utvecklare',
    package1: 1,
    package2: 1,
    package3: 1,
  },
  {
    name: 'Timmar',
    package1: 960,
    package2: 1440,
    package3: 2160,
  },
  {
    name: 'Leverabel',
    package1: '',
    package2: '',
    package3: '',
  },
  {
    name: 'Datakälla',
    package1: 'Databas-export',
    package2: 'Realtids-dataströmmar',
    package3: 'Realtids-dataströmmar',
  },
  {
    name: 'Modell',
    package1: 'Konceptvalidering',
    package2: 'Konceptvalidering',
    package3: 'Produktion',
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
              getTheadProps={() => {
                return {
                  style: {
                    borderBottom: '1px solid rgba(0,0,0,.1)',
                    boxShadow: 'none'
                  }
                }
              }}
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
