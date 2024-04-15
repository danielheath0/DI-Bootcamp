import todos from "../config/data.js";

// Get all to-do items
export const getAllItems = (req, res) => {
  res.json(todos);
};

// Add a new to-do item

export const addNewItem = (req, res) => {
  todos.push(req.body);
  res.json(todos);
};

// Update a to-do item by ID

export const updateItemById = (req, res) => {
  const { id } = req.params;
  const { details } = req.body;
  const index = todos.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }

  todos[index].details = details;
  res.json(todos);
};

// Delete a to-do item by ID
export const deleteItemById = (req,res) => {
    const {id} = req.params
    const index = todos.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ msg: "not found" });
      }
    todos.splice(index,1)
    res.json(todos)

}