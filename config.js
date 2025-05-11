const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lGNS9xM0l1aUFxQmxNcTY1OWlTVzNmVHdYQ3BXVjRHWE4yVGEzanFIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JSQWlnT0VDY3VHdFNXZlQzajVrTVg2enJwaVFYbk5tVjhpUVg3cEF4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTGY0QzdkMGk0U0R2V21pa2RNMWtsZDRUU3JHdVJ6NjFMZlYxSXFneDJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNc1dvWkpvL3BzS1JlcG9OUGljZ0grb1pQNXNadllrVHlQMSsvYkJxcFZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPZXd3dExCNVhrMjBoRDNUVko3b0NZVnJSeXBnYktWK2xQVDdzWjYyRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtEWFhiS2htNzJwU2pVZ2gzekFLVnlQN1NtUGtTMXZOWjNhVmlBQ3dTSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0o0RGlwZ2x5TUd5MXVkdFRiYVF5Z0NGcDQyb1pGWVVmK1BZN255Z3Qwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam4xWnY1SU1MaEpvNENobUdQdnJsdUxDcFlqOTY1bEwrOFBtSG54K0R6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZiYTNZcWVNYW5SSDcrTVdTVkFQdjZ2YWdZbEpmK2dFWVM4STBiZGpvSG03YS9kUk0xbTFCcUZmSm50Sk5zU1V6ZmxmSVRPcC9xMWhrTUlRa0FVR0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJWRHNsWnJ4cUZwMVRtU3V4TEhWd2VYcSs3K1QwUDZMYnoxbVNxRjBwK1RnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5VFNiZzBvOFFWNlliZl95OEw4YlR3IiwicGhvbmVJZCI6Ijg3YTg1ZTM1LTRjMGYtNDk3MS1hNzFjLTVhYWZhODg1M2RiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqalE0V2FMV3hOQmI2UEVxTW9NVVc3OTYxc0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUx5OWZCdlFndVIwMXpHTWRmVm84YW0waWxRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkzUTI4OENTIiwibWUiOnsiaWQiOiIyMzMyMDE1NTU4MDE6OTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0thNW81OERFUGlEZ3NFR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFUYlpMU3prbnorUExRMG9COUcwVm1WaGNwMmhSL3J5a0ZleVZHVmN4bjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImYvSndpeEFXNmJyVzg5RVdETTYzZzZ4VGgwMkVJVlNDd0QrMkt5MDcvVHEwenkvaGRmTlFyS29vMHBBWFRDMFRuYzdsZTlnM0xoRTdMSUxjT21zdENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxcEJVcVljUTlVbkJRdlNwblUrTzhmaUtUR1B4UU0zSUJpcmlpUlVQTVREdGswdWYxbUw1WG9lckMxMi91cHlnRkU4V1JmN3UvTjlNQ2ZtMHQvaUpCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzIwMTU1NTgwMTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXazIyUzBzNUo4L2p5ME5LQWZSdEZabFlYS2RvVWY2OHBCWHNsUmxYTVo5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2OTYwOTAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNVQiJ9",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "aguti-dev",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233201555801",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "aguti-dev",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ NEXUS ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BKYt9f00/hanstz.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> NEXUS IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING NEXUS XMD FROM NEXUS TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
