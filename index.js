const Commando = require("discord.js-commando");
const { prefix, token } = require("./config.json");

const client = new Commando.Client({
  owner: "853019347253067836",
});
console.log(client);

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  const time = new Date();
  const currentHour = time.getHours();
  const currentDay = time.getDay();

  if (message.content.startsWith(`${prefix}annouce`)) {
    setInterval(() => {
      message.channel.send(
        "Join us for Study Hour starting now under one-time-at-study-hour."
      );
    }, 86400000);
  }
});

client.login(token);
