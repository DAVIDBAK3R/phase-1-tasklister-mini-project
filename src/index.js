document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input value by ID (tests expect this exact way)
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== "") {
      // Create new li and set textContent exactly to input value
      const li = document.createElement("li");
      li.textContent = taskDescription;

      // Append li directly to #tasks
      taskList.appendChild(li);

      // Clear the input
      taskInput.value = "";
    }
  });
});