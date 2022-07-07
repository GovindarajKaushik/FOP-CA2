// Name : Govindaraj Kaushik
// Class: DIT/FT/1A/02
// Adm : 2227621
//

// Import
var input = require("readline-sync");

// arrays for each member with their corresponding data
var member_1 = ["Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400];
var member_2 = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250];
var member_3 = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350];
var member_4 = ["Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200];
var member_5 = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500];

// memverList array with arrays of each members
var memberList = [member_1, member_2, member_3, member_4, member_5];

//first input question( prompts the user for name)
var name = input.question(
  "Welcome to XYZ Membership Loyalty Programme! \nPlease enter your name: "
);

// A do while loop for the selection of choice(prompts the user for their choice)
do {
  selectChoice =
    input.question(`\nHi ${name}, please select your choice:        
  1. Display all members' information
  2. Update points earned
  3. Statistics
  4. Exit
  >> `);

  // to filter out the invalid and unavailable inputs
  if (selectChoice < 1 || selectChoice > 4 || isNaN(selectChoice)) {
    console.log("Please enter a valid input.");
  } else if (selectChoice == 2 || selectChoice == 3) {
    console.log(" Sorry, work in progress!");
  }
  if (selectChoice == 1) {
    // the for loop to output each members' data
    for (var i = 0; i < memberList.length; i++) {
      console.log(
        `\nName: ${memberList[i][0]} \nMembership Type: ${memberList[i][1]} \nDate Joined: ${memberList[i][2]} \nDate of Birth: ${memberList[i][3]} \nPoints Earned: ${memberList[i][4]}\n`
      );
    }
  }
} while (selectChoice != 4);

//Will be printed when the user exists the loop
console.log("Thank you & goodbye!");
