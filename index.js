require("dotenv").config();
const express = require('express')
const urlRoute = require('./routes/url')
const path = require('path')
const staticRoute = require('./routes/staticRouter')
const userRoute= require('./routes/user')
const {restrictTo,checkForAuthentication}= require('./middleware/auth')
const { connectToMongoDb } = require('./connect')
const URL = require('./models/url');
// const shortid = require('shortid');
const cookieParser= require('cookie-parser')
const app = express();
const port = process.env.PORT

connectToMongoDb(process.env.MONGO_URL)
  .then(() => console.log(`mongodb connected st port ${port}`))


app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(checkForAuthentication)
app.use(express.static('public'));





app.use('/url',restrictTo(["Normal", "Admin"]), urlRoute);
app.use('/', staticRoute)
app.use('/user', userRoute)

// app.get('/test', async(req, res)=>{
//   const allurls= await URL.find({})
//   return res.render('home',{
//     urls: allurls,
//   })
// })


app.get("/gen/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(  'https://'+entry.redirectURL);
});


app.listen(port, () => console.log('SERVER STARTED '))