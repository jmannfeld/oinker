const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const errorElement = document.querySelector(".error");
const goBackBtn = document.querySelector(".back");

loadingElement.style.display = "none";
errorElement.style.display = "none";

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  loadingElement.style.display = "";
  form.style.display = "none";

  if (name.trim() && content.trim()) {
    const oink = {
      name,
      content
    };

    fetch("http://localhost:5000/oinks", {
      method: "POST",
      body: JSON.stringify(oink),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(oinks => {
        console.log(oinks);
      });
  } else {
    console.log("name and content are required!");
    loadingElement.style.display = "none";
    errorElement.style.display = "";
  }
});

goBackBtn.addEventListener("click", event => {
  errorElement.style.display = "none";
  form.style.display = "";
});
