function AddTask() {
  return (
    <div className="add-task">
      <h2>Add Task</h2>
      <form>
        <input type="text" placeholder="Task Name" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
export default AddTask;