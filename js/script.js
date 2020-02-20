/* Helper Functions */
//Set Attribute helper function
const setAttr = (elem, attr, name) => {
  elem.setAttribute(attr, name);
};
/* Helper Functions */

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
console.log(colors);

//Grab all colors options
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
console.log(activities);
const checkboxes = document.querySelectorAll('.activities input');
console.log(checkboxes);

//On checkbox select if an elements time interferes and add the total cost to the bottom of the list
activities.addEventListener('change', e => {
  const clicked = e.target;
  const checkedType = clicked.getAttribute('data-day-and-time');
  let checkedCost = clicked.getAttribute('data-cost');
  let totalAmount = 0;
  
  if (clicked.checked) {
    totalAmount = totalAmount += parseInt(checkedCost, 10);
  } else {
    totalAmount = totalAmount -= parseInt(checkedCost, 10);
  }

  console.log(totalAmount);
  const totalCostDiv = document.querySelector('#totalCost');
  totalCostDiv.textContent = `Total Cost: $${totalAmount}`;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].getAttribute('data-day-and-time') === checkedType && clicked !== checkboxes[i]) {
      if(clicked.checked) {
        checkboxes[i].disabled = true;
      } else {
        checkboxes[i].disabled = false;
      }
    }
  }
});