const fs = require('fs');
const mongoose = require('mongoose')
const { json } = require('stream/consumers');
const prompt = require('prompt-sync')();

// connect to mongoDB
const dbURI = 'mongodb+srv://switch:passwords@cluster0.beiizry.mongodb.net/'
mongoose.connect(dbURI,{
  useNewUrlParser:true,
  useUnifiedTopology: true
})
  .then((result)=> console.log('connected to DB'))
  .catch((err) => console.log(err))


const pubkey = 'ET5P3nDAr7Xpn61kMma6jYTP6SwtcvBMn98XThYEvcMm'
tempusers = fs.readFileSync('users.txt','utf8',(err) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("File read successfully\n"); 
    } 
  }); 
  let users = JSON.parse(tempusers);
 

  users[2] = 'marvy'
  console.log(users)

  
  let tempuin = prompt('give an input\n');
  let uin = Number(tempuin)


//   console.log(uin)

  switch(uin){
    case 0:
        console.log(0);
        display_users();
        break;
    case 1:
        console.log(1);
        tempuin = prompt('USER NAME?\n');
        add_user(tempuin)
        break;
    default:
        console.log('doesnt exist')
  }

  function display_users(){
    return(console.log(users))
  }
  
  function add_user(username){
    users[Object.keys(users).length+1] = username
    save()
    return(console.log(users))
  }

  function save() {
    data = JSON.stringify(users);
    fs.writeFileSync('users.txt',data)
  }
