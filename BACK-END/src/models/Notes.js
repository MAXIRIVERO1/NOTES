const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define("Notes", {
        id: {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },
        title: {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false
        },
        content : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        tag : {
            type: DataTypes.ENUM("work", "project", "low priority", "medium priority", "high priority", "meetings", "idea", "to-do", "travel", "others" )
        },
        active : {
            type : DataTypes.BOOLEAN
        }
    }, { timestamps : false} )
}