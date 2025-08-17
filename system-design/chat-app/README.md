# Question

Design a chat application that allows users to send messages to each other.

## Real-life examples

[Messenger](https://messenger.com)
[WhatsApp](https://www.whatsapp.com/)
[Slack](https://www.slack.com/)
[Discord](https://www.discord.com/)
[Telegram](https://www.telegram.org/)

## Requirements exploration

### What are the core functionalities needed?

- Sending a message to a user.
- Receiving messages from a user.
- See one's chat history with a user.

### Is the message receiving real-time?

Yes, users should receive messages in real-time, as fast as possible without having to refresh the page.

### What kind of message formats should be supported?

Let's support formats text which can contain emojis. We can discuss supporting images if there's time.

### Does the application need to work offline?

Yes, where possible. Outgoing messages should be stored and sent out when the application goes online and users should still be allowed to browse messages even if they are offline.

### Are there group conversations?

We can assume it's a 1:1 messaging service.
