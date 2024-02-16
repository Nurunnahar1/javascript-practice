// ১০ জন ব্লাড ডোনারের ডেটা নিয়ে একটি ডেটাবেইজ ডিজাইন করুন যেখানে তাদের নিম্ন উক্ত ডেটা গুলা থাকবে এবং সেখানে আপনারা কিছু ফাংসন তৈরি করার মাধ্যমে নিচের ফিচার গুলা তৈরি করুন
// ফিচারস লিস্ট

//     ব্লাডগ্রুপ অনুযায়ী ডোনার সার্চ
//     ইউজার সার্চ করার সময় পূর্বে রক্ত দিয়েছেন ১২০ ডে  হয়েছে এমন ইউজার ডাটা এবং সামনে ১০ দিনের মাঝে রক্ত দিতে পারবেন এমন ডোনাদের ডাটা প্রিন্ট করুন
//     ডোনারদের ডাটা প্রথমে যারা রক্ত দিতে প্রস্তুত এবং পরে ধারাবাহিক ভাবে লিস্টে দেখান

// ডোনারদের ডাটা

//     নাম
//     বয়স
//     ঠিকানা
//     ফোন
//     রক্তের গ্রপ
//     বিবাহিত কি না
//     সর্বশেষ রক্ত দিয়েছেন কতদিন হল
//     পূর্বের রক্তদানের ইতিহাস(কাকে দেয়া হইসে ,সে কোথায় থাকে ,তার  বয়স
//  কত ,কেন দেয়া হইসে )

// Define the donors data
const donors = [
  {
    name: "John",
    age: 25,
    address: "123 Main St",
    phone: "555-1234",
    bloodGroup: "A+",
    married: false,
    lastDonationDaysAgo: 90,
    donationHistory: [
      {
        recipient: "Hospital XYZ",
        recipientAddress: "456 Elm St",
        recipientAge: 35,
        amount: 450,
        reason: "Emergency surgery",
      },
      {
        recipient: "Red Cross",
        recipientAddress: "789 Oak St",
        recipientAge: 40,
        amount: 500,
        reason: "Annual blood drive",
      },
    ],
  },
  {
    name: "Aarif",
    age: 30,
    address: "456 Hill Rd",
    phone: "555-5678",
    bloodGroup: "B-",
    married: true,
    lastDonationDaysAgo: 120,
    donationHistory: [
      {
        recipient: "Hospital ABC",
        recipientAddress: "123 Pine St",
        recipientAge: 45,
        amount: 600,
        reason: "Accident victim",
      },
    ],
  },
  {
    name: "Rahima",
    age: 28,
    address: "789 Lake Ave",
    phone: "555-9012",
    bloodGroup: "O+",
    married: false,
    lastDonationDaysAgo: 60,
    donationHistory: [
      {
        recipient: "Hospital DEF",
        recipientAddress: "789 Maple St",
        recipientAge: 50,
        amount: 550,
        reason: "Emergency surgery",
      },
    ],
  },
  {
    name: "Jamil",
    age: 35,
    address: "101 River Blvd",
    phone: "555-3456",
    bloodGroup: "AB+",
    married: true,
    lastDonationDaysAgo: 180,
    donationHistory: [
      {
        recipient: "Hospital GHI",
        recipientAddress: "345 Birch St",
        recipientAge: 55,
        amount: 700,
        reason: "Annual blood drive",
      },
    ],
  },
  {
    name: "Sadia",
    age: 22,
    address: "111 Garden St",
    phone: "555-7890",
    bloodGroup: "A-",
    married: false,
    lastDonationDaysAgo: 30,
    donationHistory: [
      {
        recipient: "Hospital JKL",
        recipientAddress: "567 Cedar St",
        recipientAge: 60,
        amount: 500,
        reason: "Emergency surgery",
      },
    ],
  },
  {
    name: "Imran",
    age: 40,
    address: "222 Park Ave",
    phone: "555-2345",
    bloodGroup: "O-",
    married: true,
    lastDonationDaysAgo: 150,
    donationHistory: [
      {
        recipient: "Red Crescent",
        recipientAddress: "901 Walnut St",
        recipientAge: 65,
        amount: 600,
        reason: "Natural disaster relief",
      },
    ],
  },
  {
    name: "Nadia",
    age: 26,
    address: "333 Orchard Ln",
    phone: "555-6789",
    bloodGroup: "B+",
    married: false,
    lastDonationDaysAgo: 45,
    donationHistory: [
      {
        recipient: "Hospital MNO",
        recipientAddress: "234 Spruce St",
        recipientAge: 70,
        amount: 550,
        reason: "Annual blood drive",
      },
    ],
  },
  {
    name: "Farid",
    age: 32,
    address: "444 Forest Rd",
    phone: "555-1234",
    bloodGroup: "AB-",
    married: true,
    lastDonationDaysAgo: 90,
    donationHistory: [
      {
        recipient: "Hospital PQR",
        recipientAddress: "567 Pine St",
        recipientAge: 75,
        amount: 700,
        reason: "Emergency surgery",
      },
    ],
  },
  {
    name: "Tasnim",
    age: 27,
    address: "555 Mountain Dr",
    phone: "555-5678",
    bloodGroup: "A+",
    married: false,
    lastDonationDaysAgo: 75,
    donationHistory: [
      {
        recipient: "Hospital STU",
        recipientAddress: "890 Oak St",
        recipientAge: 80,
        amount: 500,
        reason: "Accident victim",
      },
    ],
  },
  {
    name: "Samiul",
    age: 29,
    address: "666 Valley Rd",
    phone: "555-9012",
    bloodGroup: "O+",
    married: true,
    lastDonationDaysAgo: 100,
    donationHistory: [
      {
        recipient: "Hospital VWX",
        recipientAddress: "123 Elm St",
        recipientAge: 85,
        amount: 600,
        reason: "Annual blood drive",
      },
    ],
  },
];

