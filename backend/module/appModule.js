const mongoose=require("mongoose")

const appModule=mongoose.Schema({

    name:{
        type: String
    },

    phone:{
        type:Number
    }
})

const AppModule=mongoose.model("appModule",appModule)

module.exports=AppModule