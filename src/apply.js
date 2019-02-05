const applicationFormNode = document.getElementById('application-form');
// const nameInputNode = document.getElementById('name-input');

applicationFormNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const skillsArray = [];
    for(let i = 0; i < applicationFormNode.skills.length; i++) {
        if(applicationFormNode.skills[i].checked) {
            skillsArray.push(applicationFormNode.skills[i].value);
        }   
    }

    const newApplication = {
        name: applicationFormNode.name.value,
        assassination: applicationFormNode.assassination.value,
        clothes: applicationFormNode.clothes.value,
        skills: skillsArray,
        snuck: applicationFormNode.snuck.value
    };
    console.log('New App', newApplication);
});