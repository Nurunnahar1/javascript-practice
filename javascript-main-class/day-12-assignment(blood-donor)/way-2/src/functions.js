/* ইউজার সার্চ করার সময় পূর্বে রক্ত দিয়েছেন ৪ মাস হয়েছে এমন ইউজার ডাটা এবং সামনে ১০ দিনের মাঝে রক্ত দিতে পারবেন এমন ডোনাদের ডাটা প্রিন্ট করুন
ডোনারদের ডাটা প্রথমে যারা রক্ত দিতে প্রস্তুত এবং পরে ধারাবাহিক ভাবে লিস্টে দেখান */
let getAbaleDonar = (donors) => {
  let filterDonar = donors.filter((item, index) => (item.last_donate_date >= 120 || item.last_donate_date >= 110) && item.blood_group == blood_group );
  let sortingDonar = filterDonar.sort(
    (a, b) => b.last_donate_date - a.last_donate_date
  );

  sortingDonar.forEach((item, index) => {
    console.log(`
            Donar Name:${item.name}
            age:${item.age}
            location:${item.location}
            phone:${item.phone}
            blood_group:${item.blood_group}
            isMarried:${item.isMarried}
            last_donate_date:${item.last_donate_date}
            `);

    item.histry_of_donation.forEach((item, index) => {
      console.log(`
               histry_of_donation:
               Name:${item.name}
               donate_date:${item.donate_date}
               location:${item.location}
               isMarried:${item.isMarried}
               total_donation:${item.total_donation}

               `);
    });
  });
};