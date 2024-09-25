const express = require("express"); //imports express module/library, gives us a funct
const app = express(); //create express app, call the express funct (listens to specific port & create route handlers)

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "https://raw.githubusercontent.com/JakeRyanPlatt/avg-C-dev/refs/heads/main/tools/scripts/post-install.sh | bash";

app.get("/",function(req,res) {
    return res.send(`wget -qO- ${URL} | bash`);
});

app.listen(PORT, function() {
    console.log(`Server is listening on ${PORT}`);
}); //Listen to a port (3000)
