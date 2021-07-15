/* 
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => 
      console.log(array.reduce((acc, number) => acc + number, 0)))
    .catch(() => 
      console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
    // .then(() => console.log('Promise resolvida'))
    // .catch(() => console.log('Promise rejeitada'));
};

fetchPromise(); */

// Bônus
const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) throw new Error();
  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    return console.log(parseFloat(sumFromSum).toFixed(2));
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();