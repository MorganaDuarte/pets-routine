import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Dogs from "../../../data/dogs";
import { Dog } from "../../../types/dogs";

export default function ViewProfileButton() {
  const navigate = useNavigate();
  const dogs: Dog[] = Dogs
  function navigateToProfile(dog: Dog ) {
    navigate(`/profile/${dog.id}`, { state: { dog } })
  }
  return(
    <>
      {dogs.map((dog: Dog ) => (
        <Button variant="outline-dark" onClick={() => navigateToProfile(dog)} key={dog.id}>{dog.name}</Button>
      ))}
    </>
  )
}