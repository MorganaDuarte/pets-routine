import {Button, Form, Table} from "react-bootstrap";
import { Vaccines } from "../../../../types/vaccines";

interface Props {
  vaccineRows: Vaccines[],
  handleVaccineChange: (index: number, field: keyof Vaccines, value: string) => void;
  handleAddVaccineRow: () => void;
}
export default function VaccineTable({ vaccineRows, handleVaccineChange, handleAddVaccineRow }: Props) {
  return(
    <>
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th></th>
          <th>Aplicada em</th>
          <th>Replicar em</th>
        </tr>
        </thead>
        <tbody>
        {vaccineRows.map((row, index) => (
          <tr key={index}>
            <td><Form.Control placeholder={row.vaccine} onChange={(e) => handleVaccineChange(index, 'vaccine', e.target.value)}/></td>
            <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.appliedDate} onChange={(e) => handleVaccineChange(index, 'appliedDate', e.target.value)} /></td>
            <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.replicateDate} onChange={(e) => handleVaccineChange(index, 'replicateDate', e.target.value)} /></td>
          </tr>
        ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAddVaccineRow}>Adicionar nova vacina</Button>
    </>
  )
}