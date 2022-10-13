import express from "express";

import {v4 as uuidv4} from 'uuid';

import { createUser, getUsers, getUserById, deleteById, updateUserById } from "../controllers/users.js";


const router = express.Router();

let users = []


router.get('/', getUsers);
router.post('/',  createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteById);
router.patch('/:id', updateUserById);

export default router;