import express from "express";
import { getAllItems, updateItemById, addNewItem, deleteItemById } from "../controllers/todos.controller.js";

const router = express.Router();

router.get('/',getAllItems)
router.post('/',addNewItem)
router.put('/:id',updateItemById)
router.delete('/:id',deleteItemById)

export default router