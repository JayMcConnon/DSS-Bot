# Moderation

## Kick
- Command - `!kick`
- Aliases - `kick-user, kickuser`
- Response - None - Will just kick the user and record it in the logs
- Arguments 
    - `@username` (Must be done as a mention).
    - `reason` (optional) - Reason for kicking the person (Will be recorded in server audit logs).
- Examples - `!kick @jay`
- Permissions - Must have the `KICK_MEMBERS` permission to use this command.

## Ban
- Command - `!ban`
- Aliases - `ban-user, banuser`
- Response - None - Will just ban the user and record it in the audit logs
- Arguments 
    - `@username` (Must be done as a mention).
    - `reason` (optional) - Reason for banning the person (Will be recorded in server audit logs).
- Examples - `!ban @jay`
- Permissions - Must have the `BAN_MEMBERS` permission to use this command.

## Prune
- Command - `!prune`
- Aliases - `bulk-delete, bulkdelete, prune-chat, bulkdelete, prunechat`
- Response - None - Will prune the chat by the amount given as an argument
- Arguments 
    - `Amount` Must be a number between 2-100
- Examples 
    - `!prune 50`
- Permissions - Must have the `MANAGE_CHANNELS` permission to use this command.
