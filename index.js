let data = fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((data) => {
    dynamicTeam(data.data);
  });

const teamSection = document.querySelector("#member");

const dynamicTeam = (data) => {
  for (let i = 0; i < data.length; i = i + 2) {
    teamSection.innerHTML += `
  <div class="members__row mem">
            <div class="mem-3 m">
              <img src=${data[i].avatar} alt=${
      data[i].first_name
    } class="item" />
              <div class="des item">
                <h1 class="name">${
                  data[i].first_name + " " + data[i].last_name
                }</h1>
                <h3 class="post">Web Developer</h3>
                <h3 class="desc">
                  Lorem ipsum dolor sit amet conse ctetur adipisi cing elit.
                </h3>
                <p class="link">
                  <i
                    class="fa fa-envelope"
                    style="color: rgb(59, 159, 226); font-size: 15px"
                    >  ${data[i].email}</i
                  >
                </p>
              </div>
            </div>
            <div class="mem-4 m">
              <img src=${data[i + 1].avatar} alt="Meera" class="item" />
              <div class="des item">
                <h1 class="name">${
                  data[i + 1].first_name + " " + data[i + 1].last_name
                }</h1>
                <h3 class="post">Web Developer</h3>
                <h3 class="desc">
                  Lorem ipsum dolor sit amet conse ctetur adipisi cing elit.
                </h3>
                <p class="link">
                  <i
                    class="fa fa-envelope"
                    style="color: rgb(59, 159, 226); font-size: 15px"
                    >  ${data[i + 1].email}</i
                  >
                </p>
              </div>
            </div>
          </div>  
  
  `;
  }
};

// const demo = "My name is Deepak Kumar";

// let demoArray = demo.split(" ");
// let newArray = [];

// demoArray.forEach((element) => {
//   if (element.length >= 5) {
//     newArray.push(element.split("").reverse().join(""));
//   } else {
//     newArray.push(element);
//   }
// });

// console.log(
//   "Original Sentence: ",
//   demo,
//   "\n",
//   "Converted Sentence: ",
//   ...newArray
// );
