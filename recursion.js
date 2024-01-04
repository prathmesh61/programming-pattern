const arrayOfNastedNames = {
  name: "Prathmesh",
  friends: [
    {
      name: "Pooja",
      friends: [],
    },
    {
      name: "Vidya",
      friends: [
        {
          name: "roni",
          friends: [],
        },
      ],
    },
  ],
};

function printName(arr) {
  if (arr.friends.length === 0) {
    return;
  }
  arr.friends.forEach((element) => {
    console.log(element);
    printName(element);
  });
}
console.log(printName(arrayOfNastedNames));
const arrayOfNastedNames2 = [
  {
    name: "Prathmesh",
    friends: [
      {
        name: "Pooja",
        friends: [],
      },
      {
        name: "Vidya",
        friends: [
          {
            name: "roni",
            friends: [],
          },
        ],
      },
    ],
  },
  {
    name: "brother",
    friends: [
      {
        name: "kane",
        friends: [],
      },
      {
        name: "Cena",
        friends: [
          {
            name: "Undertaker",
            friends: [],
          },
        ],
      },
    ],
  },
];
function printName2(arr) {
  arr.map((element) => {
    if (element.friends.length === 0) {
      return;
    }
    element.friends.forEach((element) => {
      console.log(element);
      printName(element);
    });
  });
}
console.log(printName2(arrayOfNastedNames2));
// console.log(arrayOfNastedNames[1]);
