﻿module.exports.config = {
	name: "osu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy thông tin osu thông qua tên người dùng",
	commandCategory: "Công Cụ",
	usages: "osu username",
	cooldowns: 5,
    dependencies: {
		"request": "",
		"fs-extra": ""
	}
};

module.exports.languages = {
    "vi": {
        "missingUsername": "Pakipasok ang username na gusto mong hanapin para sa impormasyon"
    },
    "en": {
        "missingUsername": "Missing username!"
    }
}

module.exports.run = ({ event, api, args, getText }) => {
    if (args.length == 0) return api.sendMessage(getText("missingUsername"), event.threadID, event.messageID);
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    request(`http://lemmmy.pw/osusig/sig.php?colour=hex8866ee&uname=${args.join(" ")}&pp=1&countryrank&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`).pipe(fs.createWriteStream(__dirname + `/cache/${event.senderID}-osu.png`)).on("close", () => api.sendMessage({ attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}-osu.png`) }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}-osu.png`), event.messageID));}
