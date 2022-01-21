const path = require("path");
const { Telegraf, Markup } = require("telegraf");
const TelegrafI18n = require("telegraf-i18n");
const { match, reply } = require("telegraf-i18n");
const { TOKEN } = require("./configs/keys");
const bot = new Telegraf(TOKEN);
const keyboard = require("./utils/keyboard");

const i18n = new TelegrafI18n({
    defaultLanguage: "uz",
    directory: path.resolve(__dirname, "locales"),
    useSession: true,
    sessionName: "session",
});

// Middlewares
bot.use(i18n.middleware());

// Error Handling
bot.catch((err, ctx) => {
    console.log(err);
    return ctx.reply();
});

// bot.use((ctx) => {
//     console.log(ctx.message);
// });

// Public
bot.start((ctx) => {
    const caption = ctx.i18n.t("start.caption", {
        firstName: ctx.message.chat.first_name,
    });
    const photoId = ctx.i18n.t("start.photoId");
    ctx.replyWithPhoto(photoId, {
        caption,
        parse_mode: "HTML",
        ...keyboard.getMainKeyboard(ctx),
    });
});

// bot.hears(match("keyboards.main_keyboard.search"), (ctx) => {
//     ctx.reply("good");
// });

module.exports = bot;
