// const mongoose= require('mongoose')

// const schema= mongoose.Schema;

// const movieschema= new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     year:{
//         type:Number,
//         required:true
//     },
//     rating:{
//         type:Number,
//         required:true
//     },
//     duration:{
//         type:String,
//         required:true
//     },
//     gener:{
//         type:String,
//         required:true
//     },
//     director:{
//         type:String,
//         required:true
//     },
//     about:{
//         type:String,
//         required:true
//     },
//     streaming_in:{
//         type:String,
//         required:true
//     }

// })

// module.exports =mongoose.model("Movie",movieschema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieschema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    gener: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    streaming_in: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Movie", movieschema);