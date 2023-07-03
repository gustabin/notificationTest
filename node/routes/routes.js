import express from 'express';
import { createMessage, deleteMessage, getAllMessages } from '../controllers/MessageController.js';
const router = express.Router()

router.get('/', getAllMessages);
router.post('/', createMessage);
router.delete('/:id', deleteMessage);

export default router
