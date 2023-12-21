const savedPets = localStorage.getItem("pets");
const pets = JSON.parse(savedPets);

export default pets;