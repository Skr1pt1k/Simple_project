import React from 'react'
import { Modal, ModalBody,Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { SketchPicker } from 'react-color';

const ClientsEditModal = (props) => {
  const { modalOpened, toggleModal, client, departaments, handleChange, handleUpdateModal, handleChangeColor} = props

  return (
    <Modal
      centered
      isOpen={ modalOpened }
      toggle={ toggleModal }
    >
      <ModalBody>
        <h1 className="title">
          Edit Client Data
        </h1>
        <Form onSubmit={ (e, id) => handleUpdateModal(e, client.id) }>
          <FormGroup>
            <Label>Client: </Label>
            <Input
              name="name"
              value={ client && client.name }
              onChange={ handleChange }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Project: </Label>
            <Input
              name="project"
              value={ client && client.project }
              onChange={ handleChange }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Departament:</Label>
            <Input type="select" onChange={ (e) => handleChange(e) } defaultValue={ client.departament  && client.departament[0] ? client.departament[0].name : 'Choose' }>
              <option disabled>Choose</option>
              { departaments.map(d =>
                <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
              )};
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Estimate:</Label>
            <Input
              type="number"
              name="estimate"
              min="0"
              onChange={ handleChange }
              value={ client && client.estimate }
              placeholder="Est"
            />
          </FormGroup>
          <FormGroup >
            <Label>Budget:</Label>
            <Input
              type="number"
              min="0"
              name="budget"
              onChange={ handleChange }
              value={ client && client.budget  }
              placeholder="Budget"
            />
          </FormGroup>
          <FormGroup >
            <Label>Start Date:</Label>
            <Input
              type="date"
              name="start_date"
              onChange={ handleChange }
              value={ client && client.start_date  }
              placeholder="Start Date"
            />
          </FormGroup>
         <FormGroup >
           <Label>Choose color of the client raw:</Label>
           <SketchPicker
             color={ client.default_color }
             onChangeComplete={ handleChangeColor }
           />
         </FormGroup>
          <Button>Save</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default ClientsEditModal
