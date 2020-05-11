import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'

const User = ({ classes, users, getUserOrdersInfoTC, setShowModal, pageNumber, isFetching }) => {

  const handleClick = (id) => {
    getUserOrdersInfoTC(id)
    setShowModal(true)
  }

  const formatDate = date => {
    return new Date(date).toDateString()
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell className={classes.userName} align="left">Name</TableCell>
            <TableCell align="left">Messenger</TableCell>
            <TableCell align="left">Last message</TableCell>
            <TableCell align="center">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user, index) => {
            return (
              <TableRow hover key={index}>
                <TableCell >{index + 1 + ((pageNumber - 1) * 10)}</TableCell>
                <TableCell className={classes.userName} align="left">{user.name}</TableCell>
                <TableCell align="left">{user.from}</TableCell>
                <TableCell align="left">{formatDate(user.lastMessageTime)}</TableCell>
                <TableCell align="center"><Button variant="contained" onClick={() => handleClick(user.id)}>Orders</Button></TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default User
