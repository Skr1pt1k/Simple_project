import React from 'react'
import { Input, Button, Form, FormGroup } from 'reactstrap'

const ClientsAddForm = (props) => {
  const { handleSubmit, values, handleChange, departaments } = props

  return (
    <Form className='clients__form form-clients' onSubmit={ handleSubmit }>
      <FormGroup className='form-clients__group'>
        <Input
          type="text"
          name="name"
          onChange={ handleChange }
          value={ values.name || '' }
          placeholder="Name"
          required
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className='form-clients__group'>
        <Input
          type="text"
          name="project"
          onChange={ handleChange }
          value={ values.project || '' }
          placeholder="Project"
          required
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup className='form-clients__group form-clients__group-size'>
        <Input className='form-clients__select' type="select" onChange={ (e) => handleChange(e) } defaultValue='' required>
          <option disabled value=''>Departaments</option>
          {departaments.map(d =>
            <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
          )};
        </Input>
      </FormGroup>
      <FormGroup className='form-clients__group'>
        <Input
          type="number"
          name="estimate"
          min="0"
          onChange={ handleChange }
          value={ values.estimate || '' }
          placeholder="Est"
        />
      </FormGroup>
      <FormGroup className='form-clients__group'>
        <Input
          type="number"
          min="0"
          name="budget"
          onChange={ handleChange }
          value={ values.budget || '' }
          placeholder="Budget"
        />
      </FormGroup>
      <FormGroup className='form-clients__group'>
        <Input
          type="date"
          name="start_date"
          onChange={ handleChange }
          value={ values.start_date || '' }
          placeholder="Start Date"
        />
      </FormGroup>
      <Button className='form-clients__button'>Create</Button>
    </Form>
  )
}

export default ClientsAddForm
