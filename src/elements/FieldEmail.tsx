import React from 'react'
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap'

function FieldEmail({ autoFocus = false, required = true, ...rest }) {
  return (
    <FormGroup className='mb-3'>
      <InputGroup className='input-group-alternative'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>
            <i className='ni ni-email-83' />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder='Email'
          type='email'
          autoComplete='new-email'
          autoFocus={autoFocus}
          {...rest}
        />
      </InputGroup>
    </FormGroup>
  )
}

export default FieldEmail
