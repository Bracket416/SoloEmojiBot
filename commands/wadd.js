const BaseCommand = require('../BaseCommand.js');
const path = require('path');

module.exports = class WAdd extends BaseCommand {
    constructor(debug=false) {
        super(debug);
        //this._wiki = wiki;
    }

    run(...args) {
        // Arg[0] == wikia object | Arg[1] == bot object | Arg[2] == message object | Arg[3] == page name

        let [wiki, bot, message, [shortcut, ...page]] = args[0];
        //let titleCased = this.titleCase(page);

        const serverID = message.guild.id;

        this.print(shortcut);
        this.print(page);

        if (shortcut) {
            if (page.length) {
                wiki.addShortcut(serverID, shortcut, page);
                message.channel.send(`Wikia set! <http:\/\/${wiki.linkWikia(server, [])}>`);
                return true;
            } else {
                this.print("Not enough arguments: needs a page to link.", console.error);
            }
        } else {
            this.print("Not enough arguments: needs a shortcut.", console.error);
        }
        return false;

        // Check shortcut is correct, check page has arguments
        // Pass into addShortcut, checks serverID
    }
}