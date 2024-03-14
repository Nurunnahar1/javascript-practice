const user_name = document.querySelector('.box input[placeholder="Name"]');
const birth_year = document.querySelector(
  '.box input[placeholder="Birth Year"]'
);
const check = document.querySelector(".box button");
const heading = document.querySelector(".box h1");

check.addEventListener("click", () => {
  if (!user_name.value || !birth_year.value) {
    heading.innerHTML = `<span style="color:red;">All field are required !</span>`;
  } else {
    let age = new Date().getFullYear() - Number(birth_year.value);

    if (age >= 21) {
      heading.innerHTML = ` <img src="https://gifer.com/en/4A5" />
            Aj ${user_name.value} ar Bea ......  `;
    } else {
      heading.innerHTML = ` <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifdb.com%2Fcrying&psig=AOvVaw2lL-S3Z9etyKxax8yVfBPO&ust=1710474206849000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj3o47r8oQDFQAAAAAdAAAAABAE" />
            Sorry  ${user_name.value} , You have to wait for marry.... `;
    }
  }
});
