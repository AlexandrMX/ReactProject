
const focusHandling = (stateFocus, taskNameInput, taskInput) => {

    if (stateFocus === 'taskNameInput' ){
        taskNameInput.focus();
    }
    else   {
        taskInput.focus();
    }

}
export default focusHandling;