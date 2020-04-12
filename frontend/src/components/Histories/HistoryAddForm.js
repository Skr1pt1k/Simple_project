import React, { useState } from 'react'
import { Input, Button, Form, FormGroup } from 'reactstrap'

const HistoryAddForm = (props) => {
  const [historyValues, changeHistoryValues] = useState({date: '', action: ''})

  const { handleSubmit } = props
  const { date, action } = historyValues

  const handleChange = (event) => {
    event.persist()

    changeHistoryValues(historyValues => ({ ...historyValues, [event.target.name]: event.target.value }))
  }

  const handleSubmitForm = (e, historyValues) => {
    handleSubmit(e, historyValues)
    changeHistoryValues({})
  }

  return (
    <Form className='history__form form-history' onSubmit={ (e, values) => handleSubmitForm(e, historyValues) }>
      <FormGroup className='form-history__group'>
        <Input
          type="date"
          name="date"
          onChange={ handleChange }
          value={ date || '' }
          placeholder="Date"
          required
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className='form-history__group'>
        <Input
          type="text"
          name="action"
          onChange={ handleChange }
          value={ action || '' }
          placeholder="Action message"
          required
          autoComplete="off"
        />
      </FormGroup>
      <Button className='form-history__button'>Create</Button>
    </Form>
  )
}

export default HistoryAddForm
