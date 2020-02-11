//Read txt file Synchrously
var fs = require('fs');
console.log('\n *Start* \n');
var content = fs.readFileSync('content.txt');
console.log("Output Content : \n"+ content);
console.log("\n *EXIT* \n");

//Define JSON File 
var fs = require('fs');
console.log('\n JSON File: *Start* \n');
//Get content from JSON file
var content2 = fs.readFileSync('dummy.json');
//Transfer JSON into Object by 'JSON.parse()'
var JSONcontent2 = JSON.parse(content2); 
//Get Value from JSON
console.log('UserName:',JSONcontent2.UserName);
console.log('PassWord',JSONcontent2.PassWord);
console.log('Email',JSONcontent2.Email);
console.log('UserID',JSONcontent2.UserID);
console.log('\n *Exit* \n');
