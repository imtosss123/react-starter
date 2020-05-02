import React from 'react'
// import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { RootState } from '_redux/rootReducer'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'

interface IProps extends RouteComponentProps<void> {
  open: boolean
  message: string
  duration?: number
}

const CustomSnackbar = (props?: IProps) => {
  if (!props) return null

  const vertical = 'bottom',
    horizontal = 'center'

  const handleClose = () => {}
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={props.open}
      onClose={handleClose}
      message={props.message}
      autoHideDuration={3000}
      TransitionComponent={Fade}
    />
  )
}

// CustomSnackbar.propTypes = {
//   open: PropTypes.bool,
//   message: PropTypes.string,
// }

const mapStateToProps = (state: RootState) => ({
  open: state.snackbar.open,
  message: state.snackbar.message,
})

export default connect(mapStateToProps, null)(CustomSnackbar)
