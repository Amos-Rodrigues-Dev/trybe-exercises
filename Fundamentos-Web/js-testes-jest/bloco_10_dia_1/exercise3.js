const techList = (arrayTechnologies, name) => {
  if(arrayTechnologies.length === 0) return 'Vazio!';

  const technologyList = arrayTechnologies
    .sort()
    .map((technology) => ({ tech: technology, name, }));
  
  return technologyList;
};

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;