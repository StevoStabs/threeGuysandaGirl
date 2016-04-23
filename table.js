/**
 * Created by EK on 4/23/2016.
 */
"use strict";
function table(name,phoneNumber,email,id){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = id;
}

module.exports = table();