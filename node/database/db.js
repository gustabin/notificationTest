import { Sequelize } from "sequelize";
const db = new Sequelize('notification', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db