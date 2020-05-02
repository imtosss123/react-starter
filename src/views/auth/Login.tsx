import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
// reactstrap components
import { Button, Card, CardHeader, CardBody, Form, Row, Col } from 'reactstrap'
import { FieldEmail, FieldPassword } from 'elements'
import { RouteComponentProps } from 'react-router-dom'
import { Todo } from 'interfaces'
import * as AuthActions from '_redux/auth/actions'
import { connect } from 'react-redux'
import { RootState } from '_redux/rootReducer'
import Loading from 'components/Main/Loading'

interface Props extends RouteComponentProps<any> {
  classes: any
  todoList: Todo[]
  actions: typeof AuthActions
  token: string | null
  loading: boolean
}

function Login(props: Props) {
  // const { classes } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    props.actions.Login({
      username,
      password,
    })
  }

  useEffect(() => {
    if (props.token) {
      props.history.push('/dashboard/index')
    }
  })
  return (
    <>
      <Col lg='5' md='7'>
        <Card className='bg-secondary shadow border-0'>
          <Loading loading={props.loading} />
          <CardHeader className='bg-transparent pb-5'>
            <div className='text-muted text-center mt-2 mb-3'>
              <small>Sign in with</small>
            </div>
            <div className='btn-wrapper text-center'>
              <Button
                className='btn-neutral btn-icon'
                color='default'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                <span className='btn-inner--icon'>
                  <img
                    alt='...'
                    src={require('assets/img/icons/common/github.svg')}
                  />
                </span>
                <span className='btn-inner--text'>Github</span>
              </Button>
              <Button
                className='btn-neutral btn-icon'
                color='default'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                <span className='btn-inner--icon'>
                  <img
                    alt='...'
                    src={require('assets/img/icons/common/google.svg')}
                  />
                </span>
                <span className='btn-inner--text'>Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className='px-lg-5 py-lg-5'>
            <div className='text-center text-muted mb-4'>
              <small>Or sign in with credentials</small>
            </div>

            <Form role='form' onSubmit={handleSubmit}>
              <FieldEmail
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(String(e.target.value))
                }
              />
              <FieldPassword
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(String(e.target.value))
                }
              />
              <div className='custom-control custom-control-alternative custom-checkbox'>
                <input
                  className='custom-control-input'
                  id=' customCheckLogin'
                  type='checkbox'
                />
                <label
                  className='custom-control-label'
                  htmlFor=' customCheckLogin'
                >
                  <span className='text-muted'>Remember me</span>
                </label>
              </div>
              <div className='text-center'>
                <Button type='submit' className='my-4' color='primary'>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className='mt-3'>
          <Col xs='6'>
            <a
              className='text-light'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className='text-right' xs='6'>
            <a
              className='text-light'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  token: state.loginForm.token,
  loading: state.loginForm.loading,
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(AuthActions as any, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
