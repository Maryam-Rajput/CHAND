var limit = 20; //số thành viên mỗi lần check
module.exports.config = {
	name: "checktt",
	version: "1.8.0",
	hasPermssion: 0,
	credits: "Mirai Team fix get by D-Jukie",
	description: "Check group interactions",
	commandCategory: "Group",
	usages: "[all/tag]",
	cooldowns: 5
};

module.exports.run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
var mention = Object.keys(event.mentions);
        if (args[0] == "all") {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            var number = 1, msg = "", storage = [], exp = [];

            
            for(const idUser of listUserID) {

            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : (typeof ((await Users.getData(idUser)).name) == "undefined") ? 0 : (await Users.getData(idUser)).name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });

            var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            
            var msg = "🌻Interaction in the box🌻\n\n";
            var numPage = Math.ceil(exp.length/limit);

            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `${i+1}.${dataInfo.name}: ${dataInfo.exp} tin nhắn\n`
            }

            msg += `\n--Page ${page}/${numPage}--\n🌻Use ${global.config.PREFIX}checktt all page numbers🌻`
            return api.sendMessage(msg, event.threadID);
        }        
    else    
    if(event.type == "message_reply") { mention[0] = event.messageReply.senderID }
    if (mention[0]) {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            //var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            //const rank = exp.findIndex(info => parseInt(info.listUserID) == parseInt(event.senderID)) + 1;
            return api.sendMessage(`🌻${(await Users.getData(mention[0])).name} ranking ${rank} với ${infoUser.exp} message`, event.threadID);
}
else {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
          
            return api.sendMessage(`🌻You are ranked ${rank} with ${infoUser.exp} message`, event.threadID);
}
}