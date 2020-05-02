import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'reactstrap'
import 'assets/scss/loading.scss'

interface IProps {
  loading?: boolean
}

const Loading = ({ loading }: IProps) => {
  return loading ? (
    <div className='loading--box loading'>
      <Spinner
        color='primary'
        className='loading-spinner'
        style={{ width: '3rem', height: '3rem' }}
      />
    </div>
  ) : null
}

Loading.propTypes = {
  loading: PropTypes.bool,
}

export default Loading
