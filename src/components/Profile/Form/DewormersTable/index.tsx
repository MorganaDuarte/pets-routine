import {Button, Form, Table} from "react-bootstrap";
import { Dewormers } from "../../../../types/dewormers";
import React from "react";

interface Props {
  dewormersRows: Dewormers[];
  handlesDewormersChange: (index: number, field: keyof Dewormers, value: string) => void;
  handleAddDewormerRow: () => void;
}

export default function DewormersTable({ dewormersRows, handlesDewormersChange, handleAddDewormerRow }: Props) {
  return(
    <>
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th></th>
          <th>Tomado em</th>
          <th>Tomar novamente em</th>
        </tr>
        </thead>
        <tbody>
        {dewormersRows.map((row, index) => (
          <tr key={index}>
            <td><Form.Control placeholder={row.dewormer} onChange={(e) => handlesDewormersChange(index, 'dewormer', e.target.value)}/></td>
            <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.appliedDate} onChange={(e) => handlesDewormersChange(index, 'appliedDate', e.target.value)}/></td>
            <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.replicateDate} onChange={(e) => handlesDewormersChange(index, 'replicateDate', e.target.value)}/></td>
          </tr>
        ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAddDewormerRow}>Adicionar novo vermífugo</Button>
    </>
  )
}