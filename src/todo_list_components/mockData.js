/**
 * @param checked Boolean, whether the todo has been finished.
 * @param name String, The name of the todo.
 */

function todoFactory(checked, name) {
  const todoNames = [
    "Cook",
    "Eat",
    "Sleep",
    "Study",
    "Work",
    "Laundry",
    "Clean",
  ];
  return [1, 2, 3, 4, 5].map(() => {
    let name = "";

    //todoNames[Math.floor(Math.random() * 7)];
    let checked = false;
    /*(Math.floor(Math.random() * 2) === 1;*/
    return {
      name,
      checked,
    };
  });
}

function todoListFactory() {
  const types = ["daily", "once", "weekly", "monthly"];
  const todoListNames = ["Weekend", "Daily", "Morning", "Afternoon"];
  return [1].map(() => {
    let todos = todoFactory();
    const randomName = Math.floor(Math.random() * 4);
    let name = "✍🏼";
    // todoListNames[randomName];
    let type = types[Math.floor(Math.random() * types.length)];
    return {
      name,
      todos,
      type,
    };
  });
}
let myTodoLists = todoListFactory();
export default myTodoLists;
