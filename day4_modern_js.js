// ================================================================
// Full-Stack Engineering Bootcamp — Day 4 JavaScript Code
// Developer: Noor Zahid | Location: Shewa, North Waziristan
// Topic: Modern JavaScript (Primitive vs Reference & ES6+ Features)
// ================================================================

console.log("=== DAY 4: MODERN JAVASCRIPT EXECUTABLE CODE ===\n");

// ----------------------------------------------------------------
// 1. Primitive vs Reference Types & Deep Cloning Demonstration
// ----------------------------------------------------------------

// A. Primitive Copy (Value-based, independent)
let primaryScore = 100;
let copyScore = primaryScore;
copyScore = 200;

console.log("1. Primitive Check:");
console.log("   Original Score (Protected):", primaryScore); // Output: 100
console.log("   Copied Score (Modified):", copyScore);       // Output: 200
console.log("------------------------------------------------");

// B. Reference Type Copy & Deep Copy Fix
const originalUser = {
  name: "Noor Zahid",
  location: "Shewa, North Waziristan",
  skills: ["JavaScript", "FastAPI"]
};

// Shallow copy using Spread operator (Nested array is shared)
const shallowUser = { ...originalUser };

// Safe Deep copy using modern structuredClone()
const deepUser = structuredClone(originalUser);
deepUser.skills.push("PostgreSQL");

console.log("2. Deep Copy Verification:");
console.log("   Original Skills (Protected):", originalUser.skills); 
// Output: ['JavaScript', 'FastAPI']
console.log("   Deep Copy Skills (Updated):", deepUser.skills);     
// Output: ['JavaScript', 'FastAPI', 'PostgreSQL']
console.log("------------------------------------------------");

// ----------------------------------------------------------------
// 2. Modern ES6+ Features (Destructuring & Optional Chaining)
// ----------------------------------------------------------------

const developerProfile = {
  id: 101,
  fullName: "Noor Zahid",
  address: { origin: "Shewa, North Waziristan", currentCity: "Peshawar" },
  skillsList: ["Frontend", "Backend", "AI Automation"]
};

// Object Destructuring + Nested Destructuring + Rest Operator
const { fullName, address: { origin } } = developerProfile;
const [primarySkill, ...remainingSkills] = developerProfile.skillsList;

console.log("3. ES6+ Destructuring Output:");
console.log(`   Developer: ${fullName}`);
console.log(`   Origin: ${origin}`);
console.log(`   Primary Skill: ${primarySkill}`);
console.log(`   Other Skills:`, remainingSkills);
console.log("------------------------------------------------");

// Optional Chaining (?.) for safe property access
const mentorEmail = developerProfile.mentor?.contact?.email;

console.log("4. Optional Chaining Test:");
console.log("   Mentor Email (Safe Lookup):", mentorEmail); // Output: undefined (No App Crash!)
console.log("\n================================================");