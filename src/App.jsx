import React from 'react'
import { connect } from 'react-redux'

import UsersTable from './components/UsersTable'
import UserOrders from './components/UserOrders'
import { getUsersTC, getUserOrdersInfoTC, setPageNumber } from './redux/usersReducer'

import { Container, Grid } from '@material-ui/core'
import useStyles from './styles'
import Paginator from './components/common/Paginator/Paginator'
import ErrorPage from './components/ErrorPage'


const App = ({ getUsersTC, getUserOrdersInfoTC, setPageNumber, users, userOrdersInfo, totalUsersCount, pageNumber, error, isFetching }) => {

  const [showModal, setShowModal] = React.useState(false)

  const classes = useStyles()

  React.useEffect(() => {
    getUsersTC()
  }, [])


  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        {!error ? (
          <>
            <Paginator getUsersTC={getUsersTC} setPageNumber={setPageNumber} pageNumber={pageNumber} classes={classes} totalUsersCount={totalUsersCount} isFetching={isFetching} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <UsersTable classes={classes} users={users} pageNumber={pageNumber} getUserOrdersInfoTC={getUserOrdersInfoTC} setShowModal={setShowModal} isFetching={isFetching} />
              </Grid>
            </Grid>
          </>
        ) : (
            <ErrorPage classes={classes} error={error} />
          )}
      </Container>
      {showModal && (
        <UserOrders classes={classes} userOrdersInfo={userOrdersInfo} showModal={showModal} setShowModal={setShowModal} isFetching={isFetching} />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    userOrdersInfo: state.usersReducer.userOrdersInfo,
    totalUsersCount: state.usersReducer.totalUsers,
    pageNumber: state.usersReducer.pageNumber,
    error: state.usersReducer.error,
    isFetching: state.usersReducer.isFetching
  }
}

export default connect(mapStateToProps, {
  getUsersTC,
  getUserOrdersInfoTC,
  setPageNumber
})(App)
