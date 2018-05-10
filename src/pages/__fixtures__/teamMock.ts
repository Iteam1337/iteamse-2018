import { TEAM_QUERY } from '../../components/Team/Team'
import { teamMembers } from './teamMembers'

export const TeamQueryMock = {
  request: {
    query: TEAM_QUERY,
  },
  result: {
    data: {
      teamMembers,
    },
  },
}
