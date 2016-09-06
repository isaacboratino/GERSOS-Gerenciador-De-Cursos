/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface IUserModel extends mongoose.Document {
    user: string;
    password: string;
}

export = IUserModel;