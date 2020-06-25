# Server Status Commands

::: warning Only from your discord server
All commands on this page must be run from your discord server only due to that being what the bot stores the information
against.
:::

## Server Query

- Command  - `!query`
- Aliases - `sq, qs, query-server, query, serverquery, queryserver`
- Response - A message that will tell you allot of information about the 
status of your game server.
- Arguments - `name` given to server when adding it to the bot. 
- Options - `names`/ `nonames`  - Defaults to `names` - Toggles player details.
- Examples 
    - `!query myawesomeserver`
- Permissions - Must have the `MANAGE_GUILD` permission to use this command.

On a successful query you should see a reply from the bot that looks like this..

![Successful query](/images/guide/servercommands/successful-with-names.png)

If there is a problem reaching the server, you will recieve a reply like this..

![Server Offline](/images/guide/servercommands/server-offline.png)

::: warning Showing offline all the time?
Check the details of the server added, double check the port that you have inputted is the game 
port configured in the game/voice server.
:::
::: tip Querying with no arguments
If you don't supply a name to the bot, it will ask you to provide one in a reply.
:::

## Show servers

- Command - `!servers`
- Aliases - `sas, show-all-servers, show-servers, servers, showservers, showallservers, showservers`
- Response - The currently saved servers against your guild with descriptions and connection info.
- Examples 
    - `!servers`
    - `!show-servers`
    - `!sas`
    - `!show-all-servers`
- Permissions - You do not need any permissions to use this command

::: tip Help your players!
This command will show a summary of all your servers, and for that reason, you are encouraged to put a concise but 
useful description for your servers when adding them.
:::

## Add a server

- Command - `!add-server`
- Aliases - `sa, add-server, serveradd, addserver`
- Response - A series of questions prompting you to add a server to the bot (Saved against your discord server).
- Permissions - Must have the `MANAGE_GUILD` permission to use this command.
- Arguments - 
    - `name` - name used to query the server. Must be one word and it is suggested that you keep it short as you 
    will use this to query the gameserver in question (work smarter not harder...).
    ::: warning Note
    This is not the same as the title of your server (DSS Bot will get this for you).
    :::
    - `type` - Refer to the [supported](/supported/) page for the `Shortcode` for the game you want.
    For more info or use the [!supported](/commands/general.html#supported) 
    command in DM to the bot in discord.
    - `IP Address` - IP address of the game or voice server.
    - `port` - Port number you use to connect to the server (This will be optional in future).
    - `description` - If someone comes into your discord and requests information on game servers
    this description will be displayed to them in the list. 
    -  `image url` - This image will be shown to in the response to the users of the bot when
    they query the game/voice server (This will be optional and have a nice default image in future).

::: tip Long commands!
All commands can be used by just simply not putting anything after the command i.e `!server-add` and waiting for the 
bot to prompt you for a reply. I highly suggest this with this command as it will give you 30 seconds to fill in each
answer..
:::

Assuming everything is entered correctly you will get a message back that will confirm the details of your new server.
It will show you a preview of what the image will look like in the response (Although it will be larger in the preview).

::: tip What is next?
Check out the [`!query` command](/commands/serverstatus.html#server-query)
:::

## Delete a server

- Command - `!server-delete`
- Aliases - `sdel, sd, delete-server, serverdelete, deleteserver`
- Response - Confirmation of deletion
- Arguments - `name` given to the server when adding it to the bot
- Examples - `!server-delete csgosurf`
- Permissions - Must have the `MANAGE_GUILD` permission to use this command.

::: warning Only from your discord server
All commands on this page must be run from your discord server only due to that being what the bot stores the information
against.
:::




