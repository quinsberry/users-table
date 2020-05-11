import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Backdrop, Fade, Typography } from '@material-ui/core'

const UserOrders = ({ classes, userOrdersInfo, showModal, setShowModal, isFetching }) => {
  return (
    !isFetching && (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <div className={classes.modalPaper}>
            {userOrdersInfo ? (
              <TableContainer component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="simple table">
                  <TableHead >
                    <TableRow>
                      <TableCell className={classes.userName} align="center">Order ID</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Currency</TableCell>
                      <TableCell align="center">Payment Method</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userOrdersInfo && userOrdersInfo.map((order, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell >{order.id}</TableCell>
                          <TableCell className={classes.userName} align="center">{order.price.toFixed(2)}</TableCell>
                          <TableCell align="center">{order.currency}</TableCell>
                          <TableCell align="center">Not found</TableCell>
                          <TableCell align="center">{order.status}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
                <div className={classes.modalEmpty}>
                  <Typography variant="h4" component="h2" className={classes.modalEmpty__title}>This user has no orders yet.</Typography>
                </div>
              )
            }
          </div>
        </Fade>
      </Modal>
    )
  )
}

export default UserOrders
