import React from 'react'

import { Pagination } from '@material-ui/lab'

const Paginator = ({ getUsersTC, setPageNumber, totalUsersCount, pageNumber, isFetching, classes }) => {


  const handleChange = (event, value) => {
    setPageNumber(value)
    getUsersTC((value - 1) * 10)
  };

  const count = totalUsersCount ? Math.ceil(totalUsersCount / 10) : 10

  return (
    <div className={classes.paginator}>
      <Pagination count={count} page={pageNumber} onChange={handleChange} disabled={isFetching} />
    </div>
  )
}

export default Paginator
