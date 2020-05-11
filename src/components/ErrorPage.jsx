import React from 'react'

import { Typography } from '@material-ui/core'

const ErrorPage = ({ error, classes }) => {
  return (
    <>
      <Typography variant="h2" component="h2">{`Ups, we have some problems.. (${error.code})`}</Typography>
      <div className={classes.errorText}>
        <Typography variant="h3" className={classes.errorCode} gutterBottom>{error.message}</Typography>
        <Typography variant="h6" className={classes.errorCode} gutterBottom>Reload the page to come back.</Typography>
      </div>
    </>
  )
}

export default ErrorPage
