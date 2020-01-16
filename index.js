
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// ffmpeg = require("fluent-ffmpeg");

// // set ffmpeg package path
// ffmpeg.setFfmpegPath(ffmpegPath);
// console.log(ffmpeg);
const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json({type:'*/*'}));

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
};
const http = require('http').Server(app);

app.get('*', function(req, res) {

    // res.setHeader("Content-Security-Policy", "script-src 'self' https://unpkg.com https://*.stripe.com https://*.googleapis.com; style-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com cdn.materialdesignicons.com https://stackpath.bootstrapcdn.com");
    res.sendFile(__dirname + '/dist/index.html');
});
  
  const port = process.env.PORT || 8100;
  
  http.listen(port);
  console.log(`Express server is running on port: ${port}`);