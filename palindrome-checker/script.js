document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.getElementById("text-input");
  const result = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = input.value;
    const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/gi, "");

    const reversedInput = cleanedInput.split("").reverse().join("");

    if (cleanedInput === reversedInput) {
      result.textContent = `"${userInput} is a palindrome!"`;
      input.value = "";
    } else {
      result.textContent = `"${userInput} is not a palindrome!"`;
      input.value = "";
    }
  });
});
