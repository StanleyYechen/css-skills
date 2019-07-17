(function () {

  // merging an array of objects into one
  const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
  ];

  const result = cities.reduce((accumulator, item) => {
    return {
      ...accumulator,
      [item.name]: item.visited
    }
  }, {});
  console.group('merging an array of objects into one')
  console.log(result);
  console.groupEnd();
  /* outputs
  Berlin: "no"
  Genoa: "yes"
  Hamburg: "yes"
  Lyon: "no"
  Marseille: "yes"
  Milan: "no"
  New York: "yes"
  Palermo: "yes"
  Paris: "no"
  Rome: "yes"
  */

  console.group('带条件的对象属性');
  const getUser = (emailIncluded) => {
    return {
      name: 'John',
      surname: 'Doe',
      ...(emailIncluded ? { email: 'john@doe.com' } : null)
    }
  }

  const user = getUser(true);
  console.log(user);
  // outputs { name: "John", surname: "Doe", email: "john@doe.com" }

  const userWithoutEmail = getUser(false);
  console.log(userWithoutEmail);
  // outputs { name: "John", surname: "Doe" }
  console.groupEnd();

  
  console.group('解构原始数据')
  const rawUser = {
    name: 'John',
    surname: 'Doe',
    email: 'john@doe.com',
    displayName: 'SuperCoolJohn',
    joined: '2016-05-05',
    image: 'path-to-the-image',
    followers: 45

  }
  let user1 = {}, userDetails = {};
  ({ name: user1.name, surname: user1.surname, ...userDetails } = rawUser);

  console.log(user1); 
  // outputs { name: "John", surname: "Doe" }
  console.log(userDetails); 
  // outputs { email: "john@doe.com", displayName: "SuperCoolJohn", joined: "2016-05-05", image: "path-to-the-image", followers: 45 }
  console.groupEnd();
}())