const express = require('express');
const router = require('./router/router');
const cors=require('cors');
const mongoose=require('mongoose');
const app = express();
const http = require("http").Server(app);
//const {checkSalary,checkUsers,checkAll,}= require('./middleware/Rmiddelware');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "<http://localhost:5000>"
    }
});

//👇🏻 Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
      socket.disconnect()
      console.log('🔥: A user disconnected');
    });
});

//👇🏻 Generates random string as the ID
const generateID = () => Math.random().toString(36).substring(2, 10);

let chatRooms = [
    //👇🏻 Here is the data structure of each chatroom
    // {
    //  id: generateID(),
    //  name: "Novu Hangouts",
    //  messages: [
    //      {
    //          id: generateID(),
    //          text: "Hello guys, welcome!",
    //          time: "07:50",
    //          user: "Tomer",
    //      },
    //      {
    //          id: generateID(),
    //          text: "Hi Tomer, thank you! 😇",
    //          time: "08:50",
    //          user: "David",
    //      },
    //  ],
    // },
];

socketIO.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("createRoom", (roomName) => {
        socket.join(roomName);
        //👇🏻 Adds the new group name to the chat rooms array
        chatRooms.unshift({ id: generateID(), roomName, messages: [] });
        //👇🏻 Returns the updated chat rooms via another event
        socket.emit("roomsList", chatRooms);
    });

    socket.on("disconnect", () => {
        socket.disconnect();
        console.log("🔥: A user disconnected");
    });
    
});



mongoose.connect('mongodb://Localhost/LaRicetta', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MangoDB Connected")
}).catch(err => {
    console.log("Sorry", err)
})

app.get("/api", (req, res) => {
    res.json(chatRooms);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(router);
app.listen(5000, () =>
    console.log(`🚀 app listening on port 5000 `));