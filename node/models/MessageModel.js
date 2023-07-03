import db from "../database/db.js";
import { DataTypes } from "sequelize";

const MessageModel = db.define('Messages', {
    category: { type: DataTypes.STRING },
    message: { type: DataTypes.STRING },
    log: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE }
});

export default MessageModel
