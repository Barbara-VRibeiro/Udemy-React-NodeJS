

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}

///test: barbaravribeiro03_db_user : notUDoGlHA6thyDF

// mongodb+srv://barbaravribeiro03_db_user:notUDoGlHA6thyDF@cluster0.92xwfqk.mongodb.net/Udemy-React-NodeJ?retryWrites=true&w=majority&appName=Cluster0