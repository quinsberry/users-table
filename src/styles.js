import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(10)
  },
  table: {
    minWidth: 650,
  },
  userName: {
    maxWidth: 200
  },
  paginator: {
    marginBottom: 20
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    borderRadius: 6,
    boxShadow: theme.shadows[5],
  },
  modalEmpty: {
    borderRadius: 6,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalEmpty__title: {
    fontWeight: 300
  },
  errorText: {
    padding: theme.spacing(3, 0, 0, 0)
  },
  errorCode: {
    fontWeight: 300
  }
}))

export default useStyles