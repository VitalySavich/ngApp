const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://vitali:87vitali87@ds163013.mlab.com:63013/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/', function(req, res){
    res.send('api works');
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
    });
});

router.get('/videos/:id', function(req, res){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving video");
        }else {
            res.json(video);
        }
    });
});


module.exports = router;