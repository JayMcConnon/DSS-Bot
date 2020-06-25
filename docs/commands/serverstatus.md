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