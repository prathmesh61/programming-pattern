// We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i], returnTime));
    } else {
      reject({ message: "Index is out of range" });
    }
  });
};

const getAllData = () => {
  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(
    (values) => {
      console.log(values);
    }
  );
};

getAllData();
