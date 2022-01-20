const { Telegraf, Markup } = require("telegraf");
const { TOKEN } = require("./configs/keys");
const bot = new Telegraf(TOKEN);

// Error Handling
bot.catch((err, ctx) => {
    console.log(err);
    return ctx.reply("Something Wrong");
});

// Public
bot.start((ctx) => {
    ctx.reply("Bot started working...", {
        parse_mode: "HTML",
        disable_web_page_preview: true,
    });
});

module.exports = bot;
