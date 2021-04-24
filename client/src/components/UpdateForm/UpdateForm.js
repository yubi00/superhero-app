import React, { useState } from "react";
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

const UpdateForm = ({ showModal, toggle, superhero, setMore }) => {
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  } = superhero.superhero.powerstats;
  const {
    mutate,
    isLoading: isMutating,
    isError,
    error,
    isSuccess
  } = useUpdate();

  const [psIntelligence, setIntelligence] = useState(intelligence);
  const [psStrength, setStrength] = useState(strength);
  const [psSpeed, setSpeed] = useState(speed);
  const [psDurability, setDurability] = useState(durability);
  const [psPower, setPower] = useState(power);
  const [psCombat, setCombat] = useState(combat);

  const onIntelliChange = (e) => setIntelligence(e.target.value);
  const onStrengthChange = (e) => setStrength(e.target.value);
  const onSpeedChange = (e) => setSpeed(e.target.value);
  const onDurabilityChange = (e) => setDurability(e.target.value);
  const onPowerChange = (e) => setPower(e.target.value);
  const onCombatChange = (e) => setCombat(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const powerstats = {
      intelligence: psIntelligence,
      strength: psStrength,
      durability: psDurability,
      speed: psSpeed,
      power: psPower,
      combat: psCombat
    };
    mutate({ id: superhero.id, powerstats });
  };

  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle} className='bg-dark mb-0'>
        Edit Power Stats
      </ModalHeader>
      <ModalBody className='bg-dark mt-0'>
        {isMutating ? (
          <Alert color='info'> Loading...</Alert>
        ) : isError ? (
          <UncontrolledAlert color='danger'>{error.message}</UncontrolledAlert>
        ) : isSuccess ? (
          <UncontrolledAlert color='success'>
            {" "}
            Updated Success{" "}
          </UncontrolledAlert>
        ) : null}
        <Form onSubmit={handleSubmit} className='form p-2 h3'>
          <FormGroup>
            <Label for='intelligence'>Intelligence</Label>
            <Input
              placeholder='Intelligence'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psIntelligence}
              onChange={onIntelliChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='strength'>Strength</Label>
            <Input
              placeholder='Strength'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psStrength}
              onChange={onStrengthChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='speed'>Speed</Label>
            <Input
              placeholder='Speed'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psSpeed}
              onChange={onSpeedChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='durability'>Durability</Label>
            <Input
              placeholder='Durability'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psDurability}
              onChange={onDurabilityChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='power'>Power</Label>
            <Input
              placeholder='Power'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psPower}
              onChange={onPowerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='combat'>Combat</Label>
            <Input
              placeholder='Combat'
              min={0}
              max={100}
              type='number'
              step='1'
              value={psCombat}
              onChange={onCombatChange}
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
