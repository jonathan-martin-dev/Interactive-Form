/* Helper Functions */
//Set Attribute helper function
const setAttr = (elem, attr, name) => {
  elem.setAttribute(attr, name);
};

//Create border colors
const borderColorGreen = (elem) => {
  elem.style.border = '1px solid #00ab66';
} 

const borderColorRed = (elem) => {
  elem.style.border = '1px solid #ff0000';
} 

/* Helper Functions */
const form = document.querySelector('form');

//Warnings
const nameWarningDiv = document.createElement('div');
nameWarningDiv.textContent = 'Please enter in name';

//First form field is focused on load
const focusOnLoad = document.querySelector('#name');
focusOnLoad.focus();

//Add textfield if other option selected
const jobRoleSelect = document.querySelector('#title');

//If JavaScript is turned on other option appears on DOM
const otherOption = document.querySelector('.is-hidden');
otherOption.classList.remove('is-hidden');

//If other is selected add a textarea box
jobRoleSelect.addEventListener('change', e => {
  const selectedElement = e.target.value;
  if (selectedElement === 'other') {
    const fieldset = document.getElementsByTagName('fieldset')[0];
    const textArea = document.createElement('textarea');
    textArea.style.display = 'block';
    setAttr(textArea, 'id', 'other-title');
    setAttr(textArea, 'placeholder', 'Your Job Role');
    fieldset.append(textArea);
  }
});

//Hide Select T-Shirt from Color Select Menu
selectShirtOption = document.querySelector('option[value="tshirttheme"]');
setAttr(selectShirtOption, 'hidden', true);

//Set Color options to be hidden unless change event
const selectColorsElement = document.querySelector('#color');
const colors = selectColorsElement.children;

//All colors options
const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
const darkslategrey = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');
const tomato = document.querySelector('option[value="tomato"]');
const steelblue = document.querySelector('option[value="steelblue"]');
const dimgrey = document.querySelector('option[value="dimgrey"]');

//Loop through all of the color options
for (let i = 0; i < colors.length; i++) {
  colors[i].style.display = 'none';
  const selectDesign = document.querySelector('#design');
  selectDesign.addEventListener('change', e => {
    const selectDesign = e.target.value;

    //If the design selected has a value of "js puns" then show a set of items
    if (selectDesign === 'js puns') {
      cornflowerblue.style.display = '';
      darkslategrey.style.display = '';
      gold.style.display = '';
      tomato.style.display = 'none';
      steelblue.style.display = 'none';
      dimgrey.style.display = 'none';

      //If the design selected has a value of "heart js" then show a set of items
    } else if (selectDesign === 'heart js') {
      cornflowerblue.style.display = 'none';
      darkslategrey.style.display = 'none';
      gold.style.display = 'none';
      tomato.style.display = '';
      steelblue.style.display = '';
      dimgrey.style.display = '';
    }
  });
}

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
setAttr(paymentOptions[0], 'hidden', true);

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
const email = document.querySelector('#mail');

const nameValidation = () => {
  const nameVal = name.value;
  console.log(nameVal);
  if (nameVal.length > 0) {
    borderColorGreen(name);
    return true;
  } else {
    // name.style.border = '1px solid #ff0000'
    borderColorRed(name);
    setAttr(name, 'placeholder', 'Please Enter in a name');
    return false;
  }
}

const emailValidation = () => {
  const emailVal = email.value;
  const atSymbol = emailVal.indexOf('@');
  const dot = emailVal.lastIndexOf('.');
  console.log(atSymbol);
  console.log(dot);

  if (atSymbol > 1 && dot > atSymbol + 1) {
   borderColorGreen(email);
   return true;
  } else {
    borderColorRed(email);
    setAttr(email, 'placeholder', 'Please Enter in a valid email address');
    return false;
  }
}
const activitiesContainer = document.querySelector('.activities-wrapper');
const activityOptions = document.querySelectorAll('#activities input');

const registrationValidation = () => {
  for(let i = 0; i < activityOptions.length; i++) {
    console.log(activityOptions[i]);
    if(activityOptions[i].checked) {
      return true;
    }
  } 
  borderColorRed(activitiesContainer);
  return false;
}

form.addEventListener('submit', e => {
  if(!nameValidation()) {
    e.preventDefault();
  } else if (!emailValidation()) {
    e.preventDefault();
  } else if (!registrationValidation()) {
    e.preventDefault();
  }
});