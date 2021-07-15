function wakeUp(nomePerson) {
  return `Olá ${nomePerson} estou Acordando!!`;
}

function coffeBrack(nomePerson) {
  return `Oi ${nomePerson}  Bora toar café!!`;
}

function sllepDow(nomePerson) {
  return `E ai ${nomePerson} Partiu dormir!!`;
}

const doingThings = (person, callback) => {
  console.log(callback(person));
}

doingThings('Amós', wakeUp);
doingThings('Viviane', coffeBrack);
doingThings('Amor', sllepDow);