
const { prefix } = require('../../config.json')

module.exports =  async (Discord, client) => {
    const serwery = `${client.guilds.cache.size}`
    const activities_list = [
    `Check command ${prefix}author`, //DONT DELETE
    `2`,
    `3`,
    `4` 
      ]; 
    console.log(`${client.user.tag} on!`);
    let i = 0;
    setInterval(() => {
        client.user.setActivity(activities_list[i++ % activities_list.length], { type: 'PLAYING' }); 
    }, 30000); // 
  };