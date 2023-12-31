import { Form, Button, Tab, Tabs } from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, ChangeEvent, useEffect} from "react";
import { Dog } from "../../../types/dogs";
import { v4 as uuidv4 } from 'uuid';
import { Vaccines } from "../../../types/vaccines";
import BasicDataForm from "../Form/./BasicDataForm";
import VaccineTable from "../Form/./VaccinesTable";
import DewormersTable from "../Form/./DewormersTable";
import {Dewormers} from "../../../types/dewormers";

const EMPTY_DOG = {
  name: "",
  race: "",
  birthDate: "",
  id: uuidv4(),
  vaccines: [],
  dewormers: []
}

const EMPTY_VACCINES = [
  { vaccine: 'Raiva', appliedDate: '', replicateDate: '' },
  { vaccine: 'V10', appliedDate: '', replicateDate: '' }
]

const EMPTY_DEWORMERS = [{ dewormer: '', appliedDate: '', replicateDate: '' }]

export default function Create() {
  const location = useLocation();
  const { dog } = location.state;
  const currentDog = dog ? dog : EMPTY_DOG;
  const currentVaccines = dog ? dog.vaccines : EMPTY_VACCINES;
  const currentDewormers = dog ? dog.dewormers : EMPTY_DEWORMERS;
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Dog>(currentDog);
  const [vaccineRows, setVaccineRows] = useState<Vaccines[]>(currentVaccines);
  const [dewormersRows, setDewormers] = useState<Dewormers[]>(currentDewormers);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleVaccineChange = (index: number, field: keyof Vaccines, value: string) => {
    setVaccineRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index][field] = value;

      setFormData((prevData) => {
        const newData = {...prevData}
        newData.vaccines = newRows

        return newData
      });

      return newRows;
    });
  };
  const handlesDewormersChange = (index: number, field: keyof Dewormers, value: string) => {
    setDewormers((prevRows) => {
      const newRows = [...prevRows];
      newRows[index][field] = value;

      setFormData((prevData) => {
        const newData = {...prevData}
        newData.dewormers = newRows

        return newData
      });

      return newRows;
    });
  };
  const handleAddVaccineRow = () => {
    setVaccineRows((prevRows) => [
      ...prevRows,
      { vaccine: '', appliedDate: '', replicateDate: '' }
    ]);
  };
  const handleAddDewormerRow = () => {
    setDewormers((prevRows) => [
      ...prevRows,
      { dewormer: '', appliedDate: '', replicateDate: '' }
    ]);
  }
  useEffect(() => {
    const isMainFormComplete = Object.values(formData).every((value) => value !== "");
    setIsFormComplete(isMainFormComplete);
  }, [formData]);
  function navigateToProfile(dog: Dog ) {
    navigate(`/profile/${dog.id}`, { state: { dog } })
  }
  const save = () => {
    const savedPets = localStorage.getItem("pets");
    const pets = savedPets ? JSON.parse(savedPets) : [];
    const filteredPetIndex = pets.findIndex((pet: { id: string }) => pet.id === dog?.id);

    filteredPetIndex !== -1 ? pets[filteredPetIndex] = formData : pets.push(formData);
    localStorage.setItem("pets", JSON.stringify(pets));
    navigateToProfile(formData);
  }
  return(
    <>
      <Form className="mt-4">
        <BasicDataForm label="Nome" placeholder="Nome" name="name" value={formData.name} onChange={handleChange} />
        <BasicDataForm label="Raça" placeholder="Raça" name="race" value={formData.race} onChange={handleChange} />
        <BasicDataForm label="Data de Nascimento" placeholder="mm/aaaa" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        <Tabs defaultActiveKey="vaccine" transition={false} className="mb-3">
          <Tab eventKey="vaccine" title="Vacinas">
            <VaccineTable vaccineRows={vaccineRows} handleVaccineChange={handleVaccineChange} handleAddVaccineRow={handleAddVaccineRow} />
          </Tab>
          <Tab eventKey="dewormers" title="Vermífugos">
            < DewormersTable dewormersRows={dewormersRows} handlesDewormersChange={handlesDewormersChange} handleAddDewormerRow={handleAddDewormerRow} />
          </Tab>
        </Tabs>
        <div className="d-flex justify-content-end">
          <Button variant="dark" onClick={save} disabled={!isFormComplete}>Salvar</Button>
        </div>
      </Form>
    </>
  )
}