const fs = require("fs");
module.exports.config = {
    name: "chó",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huyhoàng - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "No command marks needed",
    usages: "dog",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("chó")==0 || (event.body.indexOf("Chó")==0)) {
        var msg = {
                body: "Dog superhero",
                attachment: fs.createReadStream(__dirname + `/noprefix/cho.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}