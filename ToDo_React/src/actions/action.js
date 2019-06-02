import { generate } from 'shortid';
// import dbRef from './dbRef';

export const onInputChange = e => ({
  type: 'ON_INPUT_CHANGE',
  inputNameValue: e.currentTarget.value
});
export const onInputTaskChange = e => ({
  type: 'ON_INPUT_TASK_CHANGE',
  inputTaskValue: e.currentTarget.value
});

export const addTask = (name, taskToDo) => {
  const task = { id: generate(), name,  taskToDo, done: false };
  // dbRef.update({ [`items/${task.id}/`]: task });
  return {
    type: 'ADD_TASK',
    task
  };
};

export const checkItem = item => {
  const updatedItem = { ...item, done: !item.done };
  // dbRef.update({ [`items/${item.id}`]: updatedItem });

  return {
    type: 'CHECK_ITEM',
    item: updatedItem
  };
};

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item
});
