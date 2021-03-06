# Changelog

## v1.4.1 (05/07/2020)

#### Command Changes

- !adminquery will allow discord server managers to query a private server
- discord managers can use !server-toggle-active to make a server public or private for query
- discord managers can make each server active/inactive for public query

#### Documentation Changes

- Documentation search is enchanced using algolia search
- Documentation page shows new commands relating getting help
- section on how to get help available in the docs

---

## v1.4.0 (28/06/2020)

#### Command Changes

- !version command tells the user the current version of the bot

#### Bug Fixes

- !invitedev now sends invite to correct channel

---

## v1.3.0 (28/06/2020)

#### Command Changes

- !invitedev invites developer to the discord that is having issues using the bot

#### Documentation Changes

- Homepage shows a link to the changelog page.

#### Bug Fixes

- Fix to releases announcement to format correctly finally.

---

## v1.2.1 (28/06/2020)

#### Bug Fixes

- Fix erronious markup in releases announcement command

---

## v1.2.0 (28/06/2020)

#### Enhancements

- Internal announce command to announce to releases channel in public discord

#### Bug Fixes

- Erronious Class names updated to avoid collisions in general commands

---

## v1.1.1 (27/06/2020)

#### Bug Fixes

- Fix changelog command title showing DSS-Bot-Docs instead of changelog

---

## v1.1.0 (27/06/2020)

#### Enhancements

- !changelog command invites users to view the releases channel in discord or a link to the changelog page

#### Documentation Changes

- /changelog shows changelog for the bot

---

## v1.0.0 (27/06/2020)

#### Enhancements

- Add more event handlers for things like bot leaving a server and joining.
- Add error tracking check in to status page.
- Increase of deployment visibility to DSS-Bot homebase discord.
- Add scores if available to server query

#### Command Changes

- Update names parameter to players and have it default to no
- makes noplayers default in server query
- Add about command
- Update servery query command to make title of reply be the title of the server
- Update server query command to send details of server queried
- Supported command defaults to sending a link, but option of message
- Change supported command cooldown to 1 minute
- Add validate rule to server add command so validates on input from game.json
- Format text responses with italics,colours and emojis
- Add !tags as alias
- Add formatting to server query responses
- Add message replys to errors where a model couldn't be found
- Add option to query with no player names
- Attach meta information of where errors happening in each command
- Update Server query command with more info
- Add error reporting to all commands to help users get help if something goes wrong.
- Add examples for all commands
- Add command to give user an invite link to add bot with correct permissions
- Have server add enforce from list of available games.
- Add available games command.
- Require update commands for servers
- Require update commands for tags and servers
- Check guildOnly status of all commands
- Update permissions for all tasks.
- Need to update tag delete to use guild id
- Add general commands for server management
- Add delete command for server
- Add server info command for individual servers, not tied to query

#### Documentation Changes

- Fix manage_server permission flag in docs to MANAGE_GUILD
- Fix typo on quick start page
- Add docs for new commands
- Docs are live!
- Install Documentation

#### Bug Fixes

- Fix invalid message length for supported games
- Remove test honeybadger alerts and add config for environment
- Change constraint of server name column
