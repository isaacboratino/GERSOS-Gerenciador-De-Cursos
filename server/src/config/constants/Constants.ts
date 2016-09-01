class Constants {
    static DB_CONNECTION_STRING : string = 'mongodb://localhost:27017/gersons';
    static TOKEN_SECRET_STRING : string = 'chavesecreta';
}

Object.seal(Constants);
export = Constants;