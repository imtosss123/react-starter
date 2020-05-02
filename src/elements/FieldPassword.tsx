import React from 'react'
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'

function FieldPassword({ autoFocus = false, required = true, ...rest }) {
  return (
    <FormGroup>
      <InputGroup className='input-group-alternative'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>
            <i className='ni ni-lock-circle-open' />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder='Password'
          type='password'
          autoComplete='new-password'
          autoFocus={autoFocus}
          {...rest}
        />
      </InputGroup>
    </FormGroup>
  )
}

export default FieldPassword
