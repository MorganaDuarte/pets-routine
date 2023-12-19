import CreateProfileButton from "../Actions/./CreateProfileButton";
import ViewProfileButton from "../Actions/ViewProfileButton";
import EmptyState from "../EmptyState";
import Dogs from "../../data/dogs";
import {Col, Row} from "react-bootstrap";

export default function DefaultPage() {
  const dogs = Dogs;
  return(
    <>
      <Row>
        <Col>{dogs ? <ViewProfileButton /> : <EmptyState />}</Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs="auto">
          <CreateProfileButton />
        </Col>
      </Row>
    </>
  )
}