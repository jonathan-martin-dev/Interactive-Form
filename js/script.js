/* Helper Functions */
//Set Attribute helper function
const setAttr = (elem, attr, name) => {
  elem.setAttribute(attr, name);
};

//Create border colors
const borderColorGreen = elem => {
  elem.style.border = '5px solid #00ab66';
};

const borderColorRed = elem => {
  elem.style.border = '5px solid #ff0000';
};

/* Helper Functions */
const form = document.querySelector('form');

//Warnings
const nameWarningDiv = document.createElement('div');
nameWarningDiv.textContent = 'Please enter in name';
/* */

//First form field is focused on load
const focusOnLoad = document.querySelector('#name');
focusOnLoad.focus();

//Add text field if other option selected
const jobRoleSelect = document.querySelector('#title');

//If JavaScript is turned on other option appears on DOM
const otherOption = document.querySelector('.is-hidden');
otherOption.classList.remove('is-hidden');

//If other is selected add a textarea box
const fieldset = document.getElementsByTagName('fieldset')[0];
const textField = document.querySelector('#other');
textField.style.display = 'none';

jobRoleSelect.addEventListener('change', e => {
  const selectedElement = e.target.value;
  if (selectedElement === 'other') {
    textField.style.display = 'block';
    setAttr(textField, 'placeholder', 'Your Job Role');
  } else {
    textField.style.display = 'none';
  }
});

const selectColorsElement = document.querySelector('#color');
const colors = document.querySelectorAll('#color option');
setAttr(colors[0], 'hidden', true);

// Hide all colors on load
for (let i = 0; i < colors.length; i++) {
  colors[i].style.display = 'none';
}

const selectDesign = document.querySelector('#design');

//When a design is selected enable or disable certain colors
selectDesign.addEventListener('change', e => {
  const currentDesign = e.target.value;
  if (currentDesign === 'js puns') {
    colors[4].selected = false;
    colors[1].selected = true;
    for (let i = 1; i < colors.length; i++) {
      if (i < 4) {
        colors[i].style.display = '';
      } else {
        colors[i].style.display = 'none';
      }
    }
  } else if (currentDesign === 'heart js') {
    colors[1].selected = false;
    colors[4].selected = true;
    for (let i = 1; i < colors.length; i++) {
      if (i > 3) {
        colors[i].style.display = '';
      } else {
        colors[i].style.display = 'none';
      }
    }
  } else {
    // colors[0].hidden = true;
    for (let i = 1; i < colors.length; i++) {
      colors[i].selected = false;
      colors[i].style.display = 'none';
    }
  }
});

//Grab checkbox element attributes
const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');

//Variable stores cost of items
let totalAmount = 0;
//On checkbox select if an elements time interferes and add the total cost to the bottom of the list
activities.addEventListener('change', e => {
  const clicked = e.target;
  const checkedType = clicked.getAttribute('data-day-and-time');
  let checkedCost = clicked.getAttribute('data-cost');

  //Add or subtracts price
  if (clicked.checked) {
    totalAmount = totalAmount += parseInt(checkedCost, 10);
  } else {
    totalAmount = totalAmount -= parseInt(checkedCost, 10);
  }

  const totalCostDiv = document.querySelector('#totalCost');
  totalCostDiv.textContent = `Total Cost: $${totalAmount}`;

  //Loop through all items to see if there are conflicts
  for (let i = 0; i < checkboxes.length; i++) {
    if (
      checkboxes[i].getAttribute('data-day-and-time') === checkedType &&
      clicked !== checkboxes[i]
    ) {
      if (clicked.checked) {
        checkboxes[i].disabled = true;
      } else {
        checkboxes[i].disabled = false;
      }
    }
  }
});

//Select Payment Options
const selectPayment = document.querySelector('#payment');
const paymentOptions = selectPayment.children;
const creditCardDiv = document.querySelector('#credit-card');
const payPalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');

//Hide "Select Payment"
paymentOptions[0].hidden = true;
//Select Credit Card as default payment
paymentOptions[1].selected = true;
//Hide Other Options
payPalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

//Allow user to select between 3 payment options
selectPayment.addEventListener('change', e => {
  const changeOption = e.target.value;
  for (let i = 0; i < paymentOptions.length; i++) {
    if (changeOption === 'credit card') {
      creditCardDiv.style.display = '';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
    } else if (changeOption === 'paypal') {
      creditCardDiv.style.display = 'none';
      payPalDiv.style.display = '';
      bitcoinDiv.style.display = 'none';
    } else if (changeOption === 'bitcoin') {
      creditCardDiv.style.display = 'none';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = '';
    } else {
      creditCardDiv.style.display = '';
      payPalDiv.style.display = '';
      bitcoinDiv.style.display = '';
    }
  }
});

const name = document.querySelector('#name');

const nameValidation = () => {
  const nameVal = name.value;
  if (nameVal.length > 0) {
    borderColorGreen(name);
    return true;
  } else {
    // name.style.border = '1px solid #ff0000'
    borderColorRed(name);
    setAttr(name, 'placeholder', 'Please Enter in a name');
    return false;
  }
};

const email = document.querySelector('#mail');

const emailValidation = () => {
  const emailVal = email.value;
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegEx.test(emailVal)) {
    borderColorGreen(email);
    return true;
  } else {
    borderColorRed(email);
    setAttr(email, 'placeholder', 'Please Enter in a valid email address');
    return false;
  }
};

const activitiesContainer = document.querySelector('.activities-wrapper');
const activityOptions = document.querySelectorAll('#activities input');

//Validate Registration Information
const registrationValidation = () => {
  for (let i = 0; i < activityOptions.length; i++) {
    if (activityOptions[i].checked) {
      borderColorGreen(activitiesContainer);
      return true;
    }
  }
  borderColorRed(activitiesContainer);
  return false;
};

//Remove all letters
const numRegEx = /^[0-9]*$/;
const ccField = document.querySelector('#cc-num');
const ccZipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

//Validate Credit Card Information

const ccValidation = () => {
  if (
    numRegEx.test(ccField.value) &&
    ccField.value.length > 12 &&
    ccField.value.length < 17
  ) {
    borderColorGreen(ccField);
  } else {
    borderColorRed(ccField);
  }

  if (ccZipCode.value.length === 5 && numRegEx.test(ccZipCode.value)) {
    borderColorGreen(ccZipCode);
  } else {
    borderColorRed(ccZipCode);
  }

  if (cvv.value.length === 3 && numRegEx.test(cvv.value)) {
    borderColorGreen(cvv);
  } else {
    borderColorRed(cvv);
  }

  if (
    !numRegEx.test(ccField.value) ||
    ccField.value.length < 12 ||
    ccField.value.length > 16 ||
    ccZipCode.value.length < 5 ||
    !numRegEx.test(ccZipCode.value) ||
    cvv.value.length < 3 ||
    !numRegEx.test(cvv.value)
  ) {
    return false;
  }

  return true;
};

const payment = document.querySelector('#payment');

//Validate Form
const formValidation = () => {
  let isValid = true;
  const nameCheck = nameValidation();
  const emailCheck = emailValidation();
  const registrationCheck = registrationValidation();
  const creditCheck = ccValidation();
  if (!nameCheck || !emailCheck || !registrationCheck) {
    isValid = false;
  }

  if(payment.children[1].selected === true && !creditCheck) {
    isValid = false;
  }
  return isValid;
};

//If validations do not pass, do not submit form
form.addEventListener('submit', e => {
  if(!formValidation()) {
    e.preventDefault();
  }
});
