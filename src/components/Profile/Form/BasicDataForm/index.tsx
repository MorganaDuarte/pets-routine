import { Form } from "react-bootstrap";
import React from "react";

interface Props {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicDataForm({label, placeholder, name, value, onChange }: Props) {
  return(
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </Form.Group>
  )
}