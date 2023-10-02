const handleForm = () => {
  console.log("Loaded form");

  const handleForm = (event) => {
    const user = {};
    event.preventDefault();
    console.log(event);
    const formElement = event.target;
    console.dir(formElement);

    user.userName = formElement.elements.namedItem("userName").value;
    user.userSurname = formElement.elements.namedItem("userSurname").value;
    console.log(user);
  };

  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", handleForm);
};

handleForm();
