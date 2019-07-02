import React from 'react'
import { Route } from 'react-router-dom'

export const Status = ({ code, children }: { code: number; children: any }) => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = code
        }

        return children
      }}
    />
  )
}

export default Status
