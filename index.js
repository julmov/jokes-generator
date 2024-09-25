import dotenv from dotenv;
dotenv.config();

function ShowAnswer(response) {
  //alert(response.data.answer);
  new Typewriter("#joke", {
    strings: `${response.data.answer}`,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let generateJoke = () => {
  let apiKey = process.env.API_KEY;
  let context = "be polite and provide a very short answer";
  let prompt = "Tell me a joke about French people";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Processing");

  axios.get(apiUrl).then(ShowAnswer);
};

let button = document.querySelector("button");
button.addEventListener("click", generateJoke);
