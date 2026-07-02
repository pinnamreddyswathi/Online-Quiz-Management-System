function calculateScore() {
  let correct = parseInt(document.getElementById("correct").value);
  let wrong = parseInt(document.getElementById("wrong").value);

  let score = (correct * 4) - (wrong * 1); // condition logic

  if (isNaN(score)) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
  } else {
    document.getElementById("result").innerText = "Final Score: " + score;
  }
}
