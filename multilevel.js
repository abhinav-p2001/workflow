const people = [
    {
      name: "Alice",
      address: {
        city: "New York",
        street: { name: "Broadway", number: 123 },
      },
    },
    {
      name: "Bob",
      address: {
        city: "Los Angeles",
        street: { name: "Sunset Boulevard", number: 456 },
      },
    },
  ];
  
  const formattedDescriptions = people.map(({ name, address: { city, street: { name: streetName } } }) => 
    `${name} lives in ${city} on ${streetName}`
  );
  
  console.log(formattedDescriptions);
  // Output: ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]
  