async function getData() {
  /* 1st create an async function*/
  const data = await fetch(
    "https://api.unsplash.com/photos/?client_id=OyQ2yCzbYAL7LvfG3wMJwMsStCqnAWbb9zvS8z1yzuc"
  ); /**
    fetch the data with await
   */
  const myData = await data.json(); /* convert it to json */

  console.log(
    myData
  ); /* check the elements or key present for further manipulations */

  myData.forEach((user) => createUser(user));
}

function createUser({ alt_description, created_at, user, urls }) {
  const { raw } = urls;
  const { name } = user;
  //   /* create a function for  elemts to be displayed with  elemnts to be in the parameters */
  const info =
    document.createElement(
      "div"
    ); /* create a div element  for the parameters to be diplayed with createlement div with parameters substituted */
  info.setAttribute(
    "class",
    "infoContainer"
  ); /* set attribute for the div like class and id for grabbing it for further manipulations */

  info.innerHTML = `
      <div  >
  <img class="avatar"src="${raw}"/>
  </div>
  <div class="content" >
   <h3> Image info:${alt_description}</h3>
 <h3> Created At:${new Date(created_at).toDateString()}</h3>
 <h3> Photographer Name${name} </h3>
  </div>
   `;
  document.body.append(info);
}

getData();

// //for deleting a particular user with his id
// async function deleteUser(id) {
//   const data = await fetch(
//     `https://611f28cb9771bf001785c7b9.mockapi.io/userDetails/${id}`
//   ); /* while deleting method should be mentioned as delete and default is get*/
//   const user = await data.json();
//   console.log(user);
// }

// deleteUser("3");

// async function postUser() {
//   const data = await fetch(
//     "https://611f28cb9771bf001785c7b9.mockapi.io/userDetails",
//     {
//       method: "POST",

//       header: { "content-type": "application/json" },
//       body: JSON.stringify({
//         avatar: "https://cdn.fakercloud.com/avatars/besbujupi_128.jpg",
//         name: "jackson",
//         createdAt: new Date().toISOString(),
//       }),
//     }
//   );
//   const myData = await data.json();
//   console.log(myData);
// }
// postUser();

/*mock api:-"https://611f28cb9771bf001785c7b9.mockapi.io/userDetails"*/
//unsplash key:-OyQ2yCzbYAL7LvfG3wMJwMsStCqnAWbb9zvS8z1yzuc
