function CreateTaskForm() {
  return (
    <>
      <form action="/">
        <select name="date" id="date">
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
          <option value="3">Day 3</option>
          <option value="4">Day 4</option>
          <option value="5">Day 5</option>
        </select>
        <input type="text" name="body" id="body" />

        <input type="submit" />
      </form>
      ;
    </>
  );
}

export default CreateTaskForm;
