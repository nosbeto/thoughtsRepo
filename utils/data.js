const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Jones",
  "Coollastname",
  "enter_name_here",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const comments = [
  "Decision Trackers are awesome",
  "Find My Phone is a useful app",
  "Learn Piano is not very good for learning Piano",
  "Starbase Defender is a great game, I love it",
  "Tower Defense is okay",
  "Monopoly Money is better than real money IMO",
  "Movie trailers are just the best parts of a movie distilled into 90 seconds",
  "Hello world, this is a comment",
  "Social media is a big waste of time",
  "Notes is my most used app",
  "Messages is open on my computer 24/7",
  "Email is open on my computer",
  "Compass is never opened",
  "Firefox is great for privacy",
];

const emails = [
  `supersuper`,
  `master1234`,
  `testingemail`,
  `random_random`,
  `super_random`,
  `uber_random`,
  `wierdly_random`,
  `this_is_random`,
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random email from emails
const getRandomEmail = () => `${getRandomArrItem(emails)}@email.com`;

const getRandomName = () => `${getRandomArrItem(names)}`;

// Function to generate random thoughts.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(comments),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { 
  getRandomEmail, 
  getRandomName, 
  getRandomThoughts 
};