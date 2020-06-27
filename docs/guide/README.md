---
title: Getting Started
---

# Quick Start

::: tip Not long now!
Getting started with DSS-Bot is easy. You can be up
and running in 1 minute or less!
:::

## Installation

::: warning Before you start...
Make sure you have `MANAGE_GUILD` permission in the discord server
you want to add the bot to
:::

- Follow [this link](https://discordapp.com/oauth2/authorize?client_id=720731226977075281&scope=bot&permissions=8)

- You should be presented with a page like this 

![Discord-page](/images/guide/installondiscord.png)

Once you have authorised this page, the bot will be 
in your server and ready to use :thumbsup:

![Bot-Online](/images/guide/botonline.png)

## Add a server

Once you have the bot in the server, you want to start by adding
a server to query. This can be be any number of game servers or voice
servers from the [supported games list](/supported/)

Taking an example from that page..

Counter-Strike: Global Offensive (2012) - key `csgo	`

The key of the game is the shortcode that you will use to 
identify the game to the bot.

Fire the following command
`!add-server`

And the bot will start to ask you some questions about the server you want to add.

- Name
::: warning Be careful about the name!
Because of the way the bot asks for arguments, at the moment,
the name you give your server should be 1 word and have no spaces.
This might change in the future. (It makes it easier to remember anyway)
:::

- game shortcode (see [supported games](/supported/))
- IP address of server
- port (can be game port or query port)
- description (this will be shown to your server users when they ask for server info)
- a URL of an image you would like to show next to each query

::: tip In the future
The port and image will become optional, and the bot will show
a nice default image. Stay tuned to the releases page for more info
or [join the discord](https://discord.gg/J3ufCA2)
:::

::: warning Note about some commands
You will need to run most commands relating to saving values against 
your discord server, from within a text channel within your discord server.

This includes: 
- Server Add
- Server Delete
- Server Query
- Moderation commands

If you don't want to spam your users, i suggest creating a channel to interact with your bot with non public permissions.
:::

## Using commands

All commands use the prefix of `!` to let the bot know you are using a command.
The only exception to this is that you can tag the bot using `@` and then use the command without a prefix for example
```bash
@DSS-Bot query awesomeserver
```
For more info on available commands visit the [commands](/commands/) page.