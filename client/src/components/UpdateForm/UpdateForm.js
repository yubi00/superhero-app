import React, { useState } from "react";
import { QueryClient, useMutation } from "react-query";
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
import { updatePowerStats } from "../../api/api";

const UpdateForm = ({ showModal, toggle, superhero }) => {
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  } = superhero.superhero.powerstats;

  const queryClient = new QueryClient();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    updatePowerStats,
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("featured");
        toggle();
      },
      //always refetch after error or success
      onSettled: () => {
        queryClient.invalidateQueries("featured");
      }
    }
  );

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
    window.location.reload();
  };

  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Power Stats</ModalHeader>
      <ModalBody>
        {isLoading ? (
          <Alert color='info'> Loading...</Alert>
        ) : isError ? (
          <UncontrolledAlert color='danger'>{error.message}</UncontrolledAlert>
        ) : isSuccess ? (
          <UncontrolledAlert color='success'>
            {" "}
            Updated Success{" "}
          </UncontrolledAlert>
        ) : null}
        <Form onSubmit={handleSubmit}>
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
            <Button color='primary'>Update</Button>{" "}
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
