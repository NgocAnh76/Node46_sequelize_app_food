import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../common/constant/app.constant";

export const sequelize = new Sequelize(DATABASE_URL, { logging: false });
sequelize
  .authenticate()
  .then(console.log(`Connection to db successfully`))
  .catch(console.log(`Connection to db failed`));
