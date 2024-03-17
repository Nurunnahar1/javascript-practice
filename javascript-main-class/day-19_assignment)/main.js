const team = document.querySelector(".team");

let memberData = "";
 
members.forEach((item, index) => {
  memberData += `
   <div class="container">
                <h2 class="text-center">Our Team</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="team-member-card">
                            <img src="${item.photo}"
                                alt="Team Member">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.skill}</p>
                                <p class="card-text">${item.content}</p>
                                <p class="card-text">${item.time}</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    `;
    team.innerHTML = memberData;
});
