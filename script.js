/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: 
      Date:   

      Filename: script.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

function starImages(rating) {
      let starHtml = '';
      for (let i = 0; i < 5; i++) {
          if (i < rating) {
              starHtml += '<img src="star_filled.png" alt="filled star">';
          } else {
              starHtml += '<img src="star_empty.png" alt="empty star">';
          }
      }
      return starHtml;
  }

  function starImages(rating) {
      // Declare a variable named imageText, setting its initial value to an empty text string.
      let imageText = "";
  
      // Create a for loop with a counter that goes from 1 up to less than or equal to the value of the rating parameter,
      // increasing the counter by 1 with each iteration.
      for (let i = 1; i <= rating; i++) {
          // In the for loop, add the text "<img src='star.png' alt=''>" to the value of the imageText variable with each iteration.
          imageText += "<img src='star.png' alt=''>";
      }
  
      // After the for loop, add a statement to return the value of imageText from the function.
      return imageText;
  }

  console.log(starImages(3)); // Outputs: "<img src='star.png' alt=''><img src='star.png' alt=''><img src='star.png' alt=''>"

  // Sample reviewers array containing review data
const reviewer = [
      { name: "Alice", review: "Great product!" },
      { name: "Bob", review: "Very satisfied with the service." },
      { name: "Charlie", review: "Could be better." }
  ];
  
  // Function to generate HTML table
  function generateReviewTable(reviewerData) {
      let tableHtml = "<table border='1'><tr><th>Name</th><th>Review</th></tr>";
  
      // Loop through each reviewer
      for (let i = 0; i < reviewerData.length; i++) {
          const reviewer = reviewerData[i];
          tableHtml += `<tr><td>${reviewer.name}</td><td>${reviewer.review}</td></tr>`;
      }
  
      tableHtml += "</table>";
      return tableHtml;
  }
  
  // Generate the table HTML
  const reviewTable = generateReviewTable(reviewers);
  
  // Display the table HTML
  console.log(reviewTable);

// Assuming you have arrays reviewTitles, reviewers, reviewDates, reviews, and reviewType already defined

for (var i = 0; i < reviewTitles.length; i++) {
      var reviewCode = ""; // Declare and initialize reviewCode variable
      
      // Add appropriate table class based on reviewType
      if (reviewType[i] === "P") {
          reviewCode += "<table class='prime'>";
      } else if (reviewType[i] === "N") {
          reviewCode += "<table class='new'>";
      } else {
          reviewCode += "<table>";
      }
      
      // Add HTML code to reviewCode variable
      reviewCode += "<tr><td>Title:</td><td>" + reviewTitles[i] + "</td></tr>" +
                    "<tr><td>Reviewer:</td><td>" + reviewers[i] + "</td></tr>" +
                    "<tr><td>Date:</td><td>" + reviewDates[i] + "</td></tr>" +
                    "<tr><td>Review:</td><td>" + reviews[i] + "</td></tr>" +
                    "</table>";
  
      // Insert reviewCode into the first article tag in the document
      var article = document.getElementsByTagName("article")[0];
      article.insertAdjacentHTML("beforeend", reviewCode);
  }
