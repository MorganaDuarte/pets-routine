import CreateProfileButton from "../Actions/./CreateProfileButton";
import ViewProfileButton from "../Actions/ViewProfileButton";
import EmptyState from "../EmptyState";
import Dogs from "../../data/dogs";

export default function DefaultPage() {
  const dogs = Dogs;
  return(
    <>
      { dogs ? <ViewProfileButton /> : <EmptyState />}
      <CreateProfileButton />
    </>
  )
}