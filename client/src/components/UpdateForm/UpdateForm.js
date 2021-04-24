import React from "react";
import { useUpdate } from "../../hooks/useUpdate";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  UncontrolledAlert
} from "reactstrap";
import "./UploadForm.css";
import useFormValidation from "../../hooks/useFormValidation";

const UpdateForm = ({ showModal, toggle, superhero, setMore }) => {
  const {
    mutate,
    isLoading: isMutating,
    isError,
    error,
    isSuccess
  } = useUpdate();

  const {
    values: powerstats,
    onChangeHandler,
    error: validationError
  } = useFormValidation(superhero.superhero.powerstats);

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({ id: superhero.id, powerstats });
    setMore(false);
  };

  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle} className='bg-dark mb-0 w-100'>
        Editing{" "}
        <span className='text-white font-weight-bold h3 name'>
          {superhero.superhero.name}
        </span>{" "}
        Power Stats . . .
      </ModalHeader>
      <ModalBody className='bg-dark mt-0'>
        {validationError && (
          <Alert color='danger' className='mt-2  h6  text-red '>
            {validationError}
          </Alert>
        )}

        {isMutating ? (
          <Alert color='info'> Loading...</Alert>
        ) : isError ? (
          <UncontrolledAlert color='danger'>{error.message}</UncontrolledAlert>
        ) : isSuccess ? (
          <UncontrolledAlert color='success'>
            {" "}
            Update Success{" "}
          </UncontrolledAlert>
        ) : null}
        <Form onSubmit={handleSubmit} className='form p-2 h3'>
          <FormGroup>
            <Label for='intelligence'>Intelligence</Label>
            <Input
              name='intelligence'
              placeholder='Intelligence'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.intelligence}
            />
          </FormGroup>
          <FormGroup>
            <Label for='strength'>Strength</Label>
            <Input
              name='strength'
              placeholder='Strength'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.strength}
            />
          </FormGroup>
          <FormGroup>
            <Label for='speed'>Speed</Label>
            <Input
              name='speed'
              placeholder='Speed'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.speed}
            />
          </FormGroup>
          <FormGroup>
            <Label for='durability'>Durability</Label>
            <Input
              name='durability'
              placeholder='Durability'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.durability}
            />
          </FormGroup>
          <FormGroup>
            <Label for='power'>Power</Label>
            <Input
              name='power'
              placeholder='Power'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.power}
            />
          </FormGroup>
          <FormGroup>
            <Label for='combat'>Combat</Label>
            <Input
              name='combat'
              placeholder='Combat'
              min={0}
              max={100}
              type='number'
              step='1'
              onChange={onChangeHandler}
              required
              value={powerstats.combat}
            />
          </FormGroup>
          <div>
            <Button color='danger'>
              {isMutating ? "Updating..." : isSuccess ? "Updated" : "Update"}
            </Button>{" "}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default UpdateForm;
