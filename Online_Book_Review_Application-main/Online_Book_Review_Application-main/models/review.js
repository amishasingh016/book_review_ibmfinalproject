import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js"

// models
import user from "./user.js"
import book from "./book.js"

const review = sequelize.define('Review', {
    review_text: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

