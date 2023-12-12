import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Dogs from "../../../data/dogs";
import { IDog } from "../../../types/dogs";

export default function ViewProfileButton() {
  const navigate = useNavigate();
  const dogs: IDog[] = Dogs
  function navigateToProfile(dog: IDog ) {
    navigate(`/profile/${dog.id}`, { state: { dog } })
  }
  return(
    <>
      {dogs.map((dog: IDog ) => (
        <Button variant="outline-dark" onClick={() => navigateToProfile(dog)} key={dog.id}>{dog.name}</Button>
      ))}
    </>
  )
}