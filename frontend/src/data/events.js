const events = [
  {
    id: 1,
    name: 'Rhythm Unplugged: Live Concert',
    date: '30 October | 7 pm',
    location: 'Chandigarh Stadium',
    city: 'Chandigarh',
    category: 'Music',
    imgName: 'concert',
    price: '1199',
    description: 'Join us for a night of unforgettable music and energy, featuring top bands and solo artists. Expect a vibrant atmosphere with thrilling live performances, dynamic light shows, and an enthusiastic crowd celebrating the spirit of live music.'
  },
  {
    id: 2,
    name: 'Art & Soul: Art Festival',
    date: '5 November | 12 pm',
    location: 'Art District',
    city: 'Panchkula',
    category: 'Festival',
    imgName: 'artfest',
    price: '599',
    description: 'Dive into the world of creativity at the Art & Soul Festival, showcasing talented local artists across multiple mediums. From live painting sessions to inspiring art installations, this event offers an immersive experience in the world of visual art.'
  },
  {
    id: 3,
    name: 'Diwali Fest',
    date: '29 October | 5 pm',
    location: 'Heritage Grounds',
    city: 'Chandigarh',
    category: 'Festival',
    imgName: 'diwali',
    price: '999',
    description: 'Celebrate the festival of lights with us at Diwali Fest! Enjoy vibrant cultural performances, traditional dance, delicious food stalls, and stunning fireworks displays. This event is perfect for families and friends looking to experience the warmth of Diwali together.'
  },
  {
    id: 4,
    name: 'Journaling for Growth Workshop',
    date: '10 November | 11 am',
    location: 'Community Hall Room 2',
    city: 'Chandigarh',
    category: 'Workshop',
    imgName: 'journal',
    price: '499',
    description: 'Discover the power of journaling as a tool for personal growth and self-reflection. This hands-on workshop will guide you through different techniques and prompts, helping you cultivate mindfulness and creativity through journaling.'
  },
  {
    id: 5,
    name: 'Next Level Gaming Workshop',
    date: '2 November | 12 pm',
    location: 'TechHub Studio',
    city: 'Mohali',
    category: 'Entertainment',
    imgName: 'gaming',
    price: '599',
    description: 'Join our gaming workshop designed for both casual and competitive players. Get insights from experts, explore advanced strategies, and participate in friendly challenges to take your gaming skills to the next level.'
  },
  {
    id: 6,
    name: 'Spooky Fun Halloween Fest',
    date: '31 October | 8 pm',
    location: 'City Square',
    city: 'Chandigarh',
    category: 'Festival',
    imgName: 'halloween',
    price: '1599',
    description: 'Experience Halloween like never before with our Spooky Fun Fest! Enjoy a haunted house experience, participate in costume contests, and savor festive treats. This event promises to be a spooky yet fun-filled experience for all ages.'
  },
  {
    id: 7,
    name: 'Spotlight: Open Mic Competition',
    date: '28 October | 6 pm',
    location: 'The Open Stage Café',
    city: 'Panchkula',
    category: 'Entertainment',
    imgName: 'openmic',
    price: '999',
    description: 'Showcase your talent in comedy, poetry, or music at our open mic event. Whether you’re a seasoned performer or a first-timer, this competition offers a supportive stage for all to shine and connect with a lively audience.'
  },
  {
    id: 8,
    name: 'Theatre Workshop: Acting Basics',
    date: '4 November | 2 pm',
    location: 'Drama Club Hall',
    city: 'Mohali',
    category: 'Workshop',
    imgName: 'theatre',
    price: '499',
    description: 'Uncover the world of theatre in this introductory workshop focused on acting fundamentals. With experienced mentors, participants will engage in exercises to build confidence, express emotions, and create memorable performances.'
  },
  {
    id: 9,
    name: 'Trading Masterclass',
    date: '8 November | 12 pm',
    location: 'Finance Institute',
    city: 'Panchkula',
    category: 'Workshop',
    imgName: 'trading',
    price: '499',
    description: 'This masterclass is perfect for those interested in financial markets and trading strategies. Learn from industry experts, get hands-on with practical tools, and gain insights into successful trading techniques to kickstart your journey in finance.'
  },
  {
    id: 10,
    name: 'Sunrise Yoga Session',
    date: '29 October | 6 am',
    location: 'Green Meadow Park',
    city: 'Chandigarh',
    category: 'Health',
    imgName: 'yoga',
    price: '399',
    description: 'Start your day with tranquility and positivity in our Sunrise Yoga Session. Connect with nature, find your inner peace, and rejuvenate with guided yoga practices suitable for all skill levels, set against a beautiful outdoor backdrop.'
  },
  {
    id: 11,
    name: 'Harmony in Sound: Musical Open Mic',
    date: '10 November | 7 pm',
    location: 'Music Lounge',
    city: 'Panchkula',
    category: 'Music',
    imgName: 'jamming',
    price: '999',
    description: 'Bring your instruments, voices, and passion to our Musical Open Mic and Jamming event! Whether you’re a musician or just love live music, join us for a night of improvised jamming sessions and solo performances in a relaxed, community-driven space.'
  },
  {
    id: 12,
    name: 'Chess Night',
    date: '5 November | 8 pm',
    location: 'Library Community Room',
    city: 'Mohali',
    category: 'Entertainment',
    imgName: 'chess',
    price: '899',
    description: 'Challenge yourself and others at Chess Night! Whether you’re a beginner or a grandmaster, this event is open to all levels, with opportunities to participate in friendly matches or spectate and learn strategies from experienced players.'
  },
  {
    id: 13,
    name: 'Hands-On Pottery Workshop',
    date: '3 November | 12 pm',
    location: 'Creative Arts Studio',
    city: 'Panchkula',
    category: 'Workshop',
    imgName: 'pottery',
    price: '399',
    description: 'Experience the art of pottery in this hands-on workshop where you’ll learn techniques for shaping, molding, and glazing clay. Perfect for all ages, this workshop promises to be a fun and therapeutic experience that allows you to create your own unique pottery pieces.'
  },
  {
    id: 14,
    name: 'Gastronomy Galore: Food Festival',
    date: '30 October | 5 pm',
    location: 'City Food Market',
    city: 'Chandigarh',
    category: 'Festival',
    imgName: 'food',
    price: '499',
    description: 'Savor a wide variety of flavors from around the world at the Gastronomy Galore Food Festival! Featuring food trucks, chef demos, and tasting sessions, this festival is a culinary paradise for food lovers and a chance to discover new favorites.'
  },
  {
    id: 15,
    name: 'Bollywood Beats: DJ Night',
    date: '6 November | 9 pm',
    location: 'Dance Club Arena',
    city: 'Chandigarh',
    category: 'Music',
    imgName: 'dj',
    price: '1199',
    description: 'Get ready to groove at Bollywood Beats DJ Night! Dance to the latest and greatest Bollywood hits with an electrifying DJ set, creating the perfect setting for a lively night out filled with music, friends, and pure energy.'
  },
  {
    id: 16,
    name: 'Life Saver Blood Donation Camp',
    date: '4 November | 10 am',
    location: 'Community Health Center',
    city: 'Mohali',
    category: 'Health',
    imgName: 'blood',
    price: '99',
    description: 'Join us at the Life Saver Blood Donation Camp and help make a difference in the lives of those in need. With professional medical staff on-site and refreshments provided, the camp offers a safe and supportive environment for first-time and seasoned donors alike. Your donation could save lives—be a hero today!'
  }
];

export default events;