module.exports.config = {
    name: "iu bạn vá",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "nope",
    description: "baby'",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://media.discordapp.net/attachments/849164098024374283/859645612097798184/received_373965544066156.gif").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
        body: `Hi ${name}, i love you kkkk ❤️`,
        attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
    }
    if (event.body.toLowerCase() == (iu)) {
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
};
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
}
