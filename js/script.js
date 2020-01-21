//First form field is focused on load
const focusOnLoad = document.querySelector('#name');
focusOnLoad.focus();

//Add textfield if other option selected
const jobRoleSelect = document.querySelector('#title');

//Set Attribute helper function
const setAttr = (elem, attr, name) => {
    elem.setAttribute(attr, name);
}

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
    