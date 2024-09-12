import React, { useState } from "react";
import { Button } from "@mui/material";
import BasicModal from "./components/ModalComp";
import OutlinedCard from "./components/CardComp";

function Todo() {
  // State to control modal visibility
  const [open, setOpen] = useState(false);

  // State to store input value
  const [inputValue, setInputValue] = useState("");

  // State to store the list of tasks
  const [task, setTask] = useState([]);

  // State to store the index of the task being updated
  const [updateIndex, setUpdateIndex] = useState(null);

  // Function to handle input change in modal
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle save action (Add new task or Update existing task)
  const handleSave = () => {
    if (updateIndex === null) {
      // Add a new task if updateIndex is null
      setTask((prev) => [...prev, inputValue]);
    } else {
      // Update the existing task
      const updatedTasks = [...task];
      updatedTasks[updateIndex] = inputValue;
      setTask(updatedTasks);
      setUpdateIndex(null); // Reset update index after update
    }
    setInputValue(""); // Clear the input field
    setOpen(false); // Close the modal
  };

  // Function to handle cancel action
  const handleCancel = () => {
    setInputValue(""); // Clear the input field
    setUpdateIndex(null); // Reset update index
    setOpen(false); // Close the modal
  };

  // Function to handle remove action
  const handleRemove = (i) => {
    const updatedList = task.filter((_, id) => id !== i);
    setTask(updatedList);
  };

  // Function to handle update action
  const handleUpdate = (i) => {
    setInputValue(task[i]); // Set the input value to the task being updated
    setUpdateIndex(i); // Set the index of the task being updated
    setOpen(true); // Open the modal
  };

  return (
    <>
      <h1>Todo app</h1>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add task
      </Button>
      <BasicModal
        open={open}
        setOpen={setOpen}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
      <OutlinedCard
        task={task}
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default Todo;
