# Server Status Commands

## Server Query

- Command  - `!query`
- Aliases - `sq, qs, query-server, query, serverquery, queryserver`
- Response - A message that will tell you allot of information about the 
status of your game server
- Arguments - `name` given to server when adding it to the bot 
- Options - `names`/ `nonames`  - Defaults to `names` - Toggles player details.
- Examples - `!query myawesomeserver`

On a successful query you should see a screen that looks like this

![Successful query](/images/guide/servercommands/successful-with-names.png)

If there is a problem reaching the server, you will recieve a reply like this

![Server Offline](/images/guide/servercommands/server-offline.png)

::: tip Showing offline all the time?
Check the details of the server added, double check the port that you have inputted is the game 
port configured in the game/voice server.
:::

## Show servers

- Command - `!servers`
- Aliases - `sas, show-all-servers, show-servers, servers, showservers, showallservers, showservers`
- Response - The currently saved servers against your guild with descriptions and connection info
- Examples - `!show-servers !sas !show-all-servers !servers`

## Add a server

- Command - `!add-server`
- Aliases - `sa, add-server, serveradd, addserver`
- Response - A series of questions prompting you to add a server to the bot (Saved against your discord server)
- Arguments - 
    - `name` - name used to query the server. Must be one word and it is suggested that you keep it short as you 
    will use this to query the gameserver in question (work smarter not harder...)
    ::: warning Note
    This is not the same as the title of your server (DSS Bot will get this for you)
    :::
    - `type` - Refer to the [supported](/supported/) page for the `Shortcode` for the game you want.
    For more info or use the [!supported](/commands/general.html#supported) 
    command in DM to the bot in discord.
    - `IP Address` - IP address of the game or voice server
    - `port` - Port number you use to connect to the server (This will be optional in future)
    - `description` - If someone comes into your discord and requests information on game servers
    this description will be displayed to them in the list. 
    -  `image url` - This image will be shown to in the response to the users of the bot when
    they query the game/voice server (This will be optional and have a nice default image in future.)
    
    
Assuming everything was entered incorrectly you will get a message back that will confirm the details of your new server.
It will show you a preview of what the image will look like in the response (Although it will be larger in the preview).

::: tip What is next?
Check out the [`!query` command](/commands/serverstatus.html#server-query)


