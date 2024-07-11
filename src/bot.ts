import { Bot, CommandContext, Context } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error(
    "Error: BOT_TOKEN is not defined. Please set it in your environment variables."
  );
  process.exit(1); // Exit the process with an error code
}

const bot = new Bot(BOT_TOKEN); // <-- put your bot token between the ""

// Handles commands, such as /start.
bot.command("start", async (ctx: CommandContext<Context>) => {
  ctx.reply("Welcome to Github Scout Bot");
});

bot.start();
