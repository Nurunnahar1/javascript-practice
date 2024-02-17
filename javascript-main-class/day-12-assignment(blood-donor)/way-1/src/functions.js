 
const searchByBloodGroup = (bloodGroup) => donors.filter((donor) => donor.bloodGroup === bloodGroup.toUpperCase());

const findRecentDonors = () => donors.filter((donor) => donor.lastDonationDaysAgo >= 120);

const findUpcomingDonors = () => donors.filter((donor) => donor.lastDonationDaysAgo >= 110);

const main = () => {
  const bloodGroupInput = prompt("Enter blood group to search donors.");
  const matchedDonors = searchByBloodGroup(bloodGroupInput.toUpperCase());

  matchedDonors.forEach((donor) => {
    console.log(`
      Donor Name: ${donor.name}
      Age: ${donor.age}
      Location: ${donor.address}
      Phone: ${donor.phone}
      Blood Group: ${donor.bloodGroup}
      Married: ${donor.married}
      Last Donate Date: ${donor.lastDonationDaysAgo}
    `);

    donor.donationHistory.forEach((donation, index) => {
      console.log(`
        Donation History:
        Recipient: ${donation.recipient}
        Recipient Address: ${donation.recipientAddress}
        Recipient Age: ${donation.recipientAge}
        Reason: ${donation.reason} 
      `);
    });
  });
};

main(); 
const recentDonors = findRecentDonors();
console.log("Recent Donors:", recentDonors);

const upcomingDonors = findUpcomingDonors();
console.log("Upcoming Donors:", upcomingDonors);
