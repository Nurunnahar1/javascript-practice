const team = document.querySelector(".team");

let memberData = "";
members.forEach((item, index) => {
  memberData += `
    <div class="team-member">
            <img src="${item.photo}" alt="">
            <h2>${item.name}</h2>
            <p>${item.skill}</p>
        </div>
    `;
    team.innerHTML = memberData;
});
