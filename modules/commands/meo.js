const fs = require("fs");
module.exports.config = {
name: "mèo",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "NgocHung",
    description: "Cats love the party",
    commandCategory: "No command marks needed",
    usages: "ko cần prefix chỉ cần chat mèo",
    cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("cat")==0 || (event.body.indexOf("Mèo")==0)) {
        var msg = {
                body: "Meow",
                attachment: fs.createReadStream(__dirname + `/noprefix/meo.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}
