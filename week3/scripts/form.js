const handleForm = () => {
  console.log('Loaded form');

  const handleForm = (event) => {
    const user = {
      userName: '',
      userSurname: '',
      comments: '',
      isOk: false,
      turn: '',
      course: '',
    };
    event.preventDefault();
    console.log(event);
    const formElement = event.target;
    console.dir(formElement);

    for (const key in user) {
      user[key] =
        formElement.elements.namedItem(key).type === 'checkbox'
          ? formElement.elements.namedItem(key).checked
          : formElement.elements.namedItem(key).value;
    }

    // user.userName = formElement.elements.namedItem('userName').value;
    // user.userSurname = formElement.elements.namedItem('userSurname').value;
    // user.comments = formElement.elements.namedItem('comments').value;
    // user.isOk = formElement.elements.namedItem('isOk').checked;
    // user.turn = formElement.elements.namedItem('turn').value;
    // user.course = formElement.elements.namedItem('course').value;

    console.log(user);
  };

  document.querySelector('form').addEventListener('submit', handleForm);
};

handleForm();
