const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const redis=require('redis');
const port = process.env.PORT||8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');


const passportGoogle = require('./config/passport-google-oauth2-strategy');
const passportGithub=require('./config/passport-github-oath');

const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMware = require('./config/middleware');

const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(3000);
console.log('chat server is listening on port 3000');



app.use(express.urlencoded());

app.use(cookieParser());


app.use(express.static('./assets'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'Fluenteng',
    // TODO change the secret before deployment in production mode
    secret: 's%3AtZ7snx1PmIS0rX8NmS6aGUHkG70T7jd-.6QrkcX4xY67wGwZ6%2FOuvTw5yboWDo3L1XOkIEFz9TgA',
   resave: false,
    saveUninitialized: false,
    
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            collection: 'sessions',
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));



app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

app.use('/', require('./routes')); 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

