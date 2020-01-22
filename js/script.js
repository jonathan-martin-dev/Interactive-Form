/* Helper Functions */
//Set Attribute helper function
const setAttr = (elem, attr, name) => {
    elem.setAttribute(attr, name);
}

//First form field is focused on load
const focusOnLoad = document.querySelector('#name');
focusOnLoad.focus();

//Add textfield if other option selected
const jobRoleSelect = document.querySelector('#title');

//If JavaScript is turned on other option appears on DOM
const otherOption = document.querySelector('.is-hidden');
otherOption.classList.remove('is-hidden');

//If other is selected add a textarea box
jobRoleSelect.addEventListener('change', (e) => {
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

//Set Color options to be hidden
const colorSelect = document.querySelector('#color');
const colors = colorSelect.children;

colors[0].textContent = 'Please Select a T-Shirt';
for (let i = 0; i < colors.length; i++) {
    setAttr(colors[i], 'hidden', true);

    const selectDesign = document.querySelector('#design');
    selectDesign.addEventListener('change', (e) => {
        const selectDesign = e.target.value;
        if (selectDesign === 'js puns') {
            if (colors[i].value === 'cornflowerblue' || colors[i].value === 'darkslategrey' || colors[i].value === 'gold') {
               setAttr(colors[i], 'hidden', false);
            }
        }

    });
}


