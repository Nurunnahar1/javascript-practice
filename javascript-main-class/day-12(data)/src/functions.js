// Function to search donors by blood group
function searchByBloodGroup(bloodGroup) {
  const matchingDonors = donors.filter(
    (donor) => donor.bloodGroup === bloodGroup
  );
  return matchingDonors;
}

// Function to find donors who have given blood in the past 120 days
function findRecentDonors() {
  const currentDate = new Date();
  const recentDonors = donors.filter(
    (donor) => donor.lastDonationDaysAgo <= 120
  );
  return recentDonors;
}

// Function to find donors who can give blood in the next 10 days
function findUpcomingDonors() {
  const currentDate = new Date();
  const upcomingDonors = donors.filter(
    (donor) => donor.lastDonationDaysAgo >= 110
  );
  return upcomingDonors;
}

// Main function to execute the program
function main() {
  const bloodGroupInput = prompt("Enter blood group to search donors:");
  const matchingDonors = searchByBloodGroup(bloodGroupInput.toUpperCase());

  console.log("Donors matching the blood group:", matchingDonors);

  const recentDonors = findRecentDonors();
  console.log(
    "Donors who have given blood in the past 120 days:",
    recentDonors
  );

  const upcomingDonors = findUpcomingDonors();
  console.log("Donors who can give blood in the next 10 days:", upcomingDonors);
}

// Execute the main function
main();
