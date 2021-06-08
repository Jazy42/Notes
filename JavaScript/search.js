//search for a string inside an object

const data = {
  id: "c140228f-74bd-4302-a118-ef863c2cccff",
  title: "Corp Commander Conference",
  startTime: null,
  slug: "556-487-815",
  type: "BAR",
  status: "Active",
  attendees: [
    {
      firstName: "Nouman",
      lastName: "Nadeem",
      email: "nn@gmail.com",
      __typename: "Attendee",
    },
    {
      firstName: "Usman",
      lastName: "Zaheer",
      email: "uz@gmail.com",
      __typename: "Attendee",
    },
  ],
  reschedules: [],
  __typename: "Meeting",
};

arr = Object.values(data);

arr.map((item) => {
  if (typeof item != "string") {
    return false;
  }
  console.log(item);
});

console.log(searchStringInArray("Corp", arr));
function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
}
