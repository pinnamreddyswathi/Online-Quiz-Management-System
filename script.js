function calculateScore() {
  let correct = document.getElementById("correct").value;
  let wrong = document.getElementById("wrong").value;

  // convert to numbers
  correct = Number(correct);
  wrong = Number(wrong);

  // validation fix
  if (correct === "" || wrong === "" || isNaN(correct) || isNaN(wrong)) {
    document.getElementById("result").innerText =
      "⚠️ Please enter valid numbers!";
    return;
  }

  // calculation logic
  let score = (correct * 1);

  // display result
  document.getElementById("result").innerText =
    "🎯 Final Score: " + score;
}
