import books from "../config/data.js";

// Get all to-do items
export const getAllItems = (req, res) => {
  res.json(books);
};

// Add a new to-do item

export const addNewItem = (req, res) => {
  books.push(req.body);
  res.json(books);
};

// Update a to-do item by ID

export const updateItemById = (req, res) => {
  const { id } = req.params;
  const { details } = req.body;
  const index = books.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }

  books[index].details = details;
  res.json(books);
};

// Delete a to-do item by ID
export const deleteItemById = (req,res) => {
    const {id} = req.params
    const index = books.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ msg: "not found" });
      }
    books.splice(index,1)
    res.json(books)

}