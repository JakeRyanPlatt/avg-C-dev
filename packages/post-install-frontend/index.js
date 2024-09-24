const express = require("express"); //imports express module/library, gives us a funct
const app = express(); //create express app, call the express funct (listens to specific port & create route handlers)

app.get("/",function(req,res) {
    return res.send("wget -qO- https://raw.githubusercontent.com/JakeRyanPlatt/avg-C-dev/refs/heads/main/tools/scripts/post-install.sh | bash")
});

app.listen(3000, function() {
    console.log("Hello World!");
}); //Listen to a port (3000)
