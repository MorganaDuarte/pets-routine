import { Form, Button, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useState, ChangeEvent, useEffect} from "react";
import { Dog } from "../../../types/dogs";
import { v4 as uuidv4 } from 'uuid';
import { Vaccines } from "../../../types/vaccines";
import BasicDataForm from "../Form/./BasicDataForm";
import VaccineTable from "../Form/./VaccinesTable";
import DewormersTable from "../Form/./DewormersTable";
import {Dewormers} from "../../../types/dewormers";

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Dog>({
    name: "",
    race: "",
    birthDate: "",
    id: uuidv4(),
    vaccines: [],
    dewormers: []
  });
  const [vaccineRows, setVaccineRows] = useState([
    { vaccine: 'Raiva', appliedDate: '', replicateDate: '' },
    { vaccine: 'V10', appliedDate: '', replicateDate: '' }
  ]);
  const [dewormersRows, setDewormers] = useState([
    { dewormer: '', appliedDate: '', replicateDate: '' },
  ]);
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
  const handleAddRow = () => {
    setVaccineRows((prevRows) => [
      ...prevRows,
      { vaccine: '', appliedDate: '', replicateDate: '' }
    ]);
  };
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
    pets.push(formData)
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
            <VaccineTable vaccineRows={vaccineRows} handleVaccineChange={handleVaccineChange} handleAddRow={handleAddRow} />
          </Tab>
          <Tab eventKey="dewormers" title="Vermífugos">
            < DewormersTable dewormersRows={dewormersRows} handlesDewormersChange={handlesDewormersChange} />
          </Tab>
        </Tabs>
        <div className="d-flex justify-content-end">
          <Button variant="dark" type="submit" onClick={save} disabled={!isFormComplete}>Salvar</Button>
        </div>
      </Form>
    </>
  )
}