export const emptyForm = (inputIds) => {
  inputIds.forEach((each) => {
    document.getElementById(each).value = '';
  });
};

export const displayMessage = (message, type) => {
  const className = (type) ? 'green' : 'red';
  Materialize.toast(message, 4000, className);
};
