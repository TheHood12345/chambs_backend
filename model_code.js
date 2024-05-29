const {DataTypes, Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({database:process.env.DATABASE,username:process.env.USER,password:process.env.PASSWORD,host:process.env.HOST,port:process.env.PORT,dialect:process.env.DIALECT});

const User = sequelize.define("tel_user",{

    telegram_username: {
        type: DataTypes.STRING,
        unique: true,
        defaultValue: "user"
    },
    telegram_id: {
        type: DataTypes.STRING,
        unique: false
    },
    screenshot_1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_4: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_6: {
        type: DataTypes.STRING,
        allowNull: true
    },
    screenshot_7: {
        type: DataTypes.STRING,
        allowNull: true
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    }
},{timestamps:true});

module.exports = {
    User,
    sequelize
}