const fs = require("fs");
module.exports.config = {
name: "Mong",
	version: "1.0.0",
  	hasPermssion: 0,
    	description: "Shake your ass",
      	commandCategory: "No command marks needed",
        	usages: "noprefix",
          	cooldowns: 5,
            };
            module.exports.onLoad = () => {
                const fs = require("fs-extra");
                    const request = require("request");
                        const dirMaterial = __dirname + `/noprefix/`;
                            if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
                                if (!fs.existsSync(dirMaterial + "lacmong.mp4")) request("https://tinyurl.com/yh3ay973").pipe(fs.createWriteStream(dirMaterial + "lacmong.mp4"));
                                }
                                module.exports.handleEvent = function({ api, event }) {
                                	var { threadID, messageID } = event;
                                  	if (event.body.indexOf("Mong")==0 || (event.body.indexOf("mong")==0)){
                                    	  var msg = {
                                        				body: "FILTER FEMALE BUTTER :33",
                                                				attachment: fs.createReadStream(__dirname + `/noprefix/lacmong.mp4`)
                                                        			}
                                                              			return api.sendMessage(msg, threadID, messageID);
                                                                    		}
                                                                        	}
                                                                          	module.exports.run = function({ api, event, client, __GLOBAL }) {

}