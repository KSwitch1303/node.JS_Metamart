const mongoose = require('mongoose')
const prompt = require('prompt-sync')();

// mongoose Schemas
const User = require('./models/users');
const Shop = require('./models/shops');
const Product = require('./models/Products')

// connect to mongoDB
const dbURI = 'mongodb+srv://switch:passwords@cluster0.beiizry.mongodb.net/metamart'

let userobj = {}
mongoose.connect(dbURI,{
  useNewUrlParser:true,
  useUnifiedTopology: true
  })
  .then((result)=> {
    console.log('starting...')
  })
  .catch((err) => console.log(err))

// normal declarations
const pubkey = 'ET5P3nDAr7Xpn61kMma6jYTP6SwtcvBMn98XThYEvcMm';
let tempuin;
let tempuin2;


setTimeout(() => {
  tempuin = prompt('give an input\n');
  let uin = Number(tempuin)
  switch(uin){
    case 0:
        console.log(0);
        display_users();
        break;

    case 1:
        console.log(1);
        tempuin = prompt('USER NAME?\n');
        add_user(tempuin);
        break;

    case 2:
      console.log(2);
      tempuin = prompt('What user is creating a shop\n');
      tempuin2 = prompt("What's the shops name\n");
      makeShop(tempuin,tempuin2);
      break;

    case 3:
      console.log(3);
      tempuin = prompt('Who is creating a product\n');
      tempuin2 = prompt('Whats the shop name\n');
      uploadProduct(tempuin,tempuin2);
      break;

    default:
      console.log('doesnt exist')
  }
}, 9000);
      

  async function uploadProduct(username,shopname){
    let result = await User.findOne({username: username});
    userobj = JSON.parse(JSON.stringify(result))
    if (userobj.isShop == true){
      result =  await Shop.findOne({shopName: shopname})
      let tempUserobj = JSON.parse(JSON.stringify(result))
      console.log(tempUserobj)
      if (tempUserobj.userID == userobj['_id']) {
        console.log('SUiii')
        const product = new Product({
          shopID: tempUserobj['_id'],
          productName: 'Nike Air 1',
          productQty: 15
        })
        product.save()
        .then((result) =>{
          console.log('Done')
        })
        .catch((err) => console.log(err))
      }
    }else {
      console.log('N/A')
    }
  }


  async function makeShop(username,shopname){
    const result = await User.findOne({username: username});
    userobj = JSON.parse(JSON.stringify(result))
    const shop =  new Shop({
      userID: userobj['_id'],
      shopName: shopname  
    })
    await User.findOneAndUpdate({username: username},{$set :{isShop: true}})
    shop.save()
    .then((result) => {
     console.log('done')
    })
    .catch((err) => console.log(err))
  }

  async function display_users(){
    const result = await User.find()
    userobj = JSON.parse(JSON.stringify(result))
    return(
      console.log(userobj)
    )
  }
  
  function add_user(username){
     const user = new User({
        pubkey: pubkey,
        username: username,
        isShop: false
      });

      user.save()
      .then((result) =>{
        console.log('done')
      })
      .catch((err)=> console.log(err))
  }
