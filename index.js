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

bot.use((ctx, next) => {
    console.log(ctx.message);
    next();
});

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

bot.hears(match("keyboards.main_keyboard.ism"), async (ctx) => {
    await ctx.reply(ctx.i18n.t("namesOfAllah.firstText"), {
        parse_mode: "HTML",
    });
    await ctx.reply(ctx.i18n.t("namesOfAllah.secondText"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("namesOfAllah.photoId"));
    await ctx.reply(ctx.i18n.t("namesOfAllah.names"));
});

bot.hears(match("keyboards.main_keyboard.farz"), async (ctx) => {
    await ctx.reply(ctx.i18n.t("farz.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("farz.photoId"));
});

bot.hears(match("keyboards.main_keyboard.kalima"), async (ctx) => {
    await ctx.reply(ctx.i18n.t("kalima.text"), keyboard.getKalimaKeyboard(ctx));
});

bot.hears(match("keyboards.back.backwards"), (ctx) => {
    ctx.reply("🔝 Bosh Menyu", keyboard.getMainKeyboard(ctx));
});

bot.hears(match("keyboards.kalima.all"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.toyyiba.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.toyyiba.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.shahodat.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.shahodat.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.tavhid.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.tavhid.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.raddi_kufr.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.raddi_kufr.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.istigfor.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.istigfor.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.tamjid.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.tamjid.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.mujmal.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.mujmal.text"), {
        parse_mode: "HTML",
    });
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.mufassal.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.mufassal.text"), {
        parse_mode: "HTML",
    });
});

bot.hears(match("keyboards.kalima.toyyiba"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.toyyiba.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.toyyiba.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.shahodat"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.shahodat.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.shahodat.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.tavhid"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.tavhid.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.tavhid.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.raddi_kufr"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.raddi_kufr.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.raddi_kufr.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.istigfor"), async (ctx) => {
    console.log("OK");
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.istigfor.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.istigfor.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.tamjid"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.tamjid.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.tamjid.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.mujmal"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.mujmal.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.mujmal.text"), {
        parse_mode: "HTML",
    });
});
bot.hears(match("keyboards.kalima.mufassal"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("kalima.mufassal.photoId"));
    await ctx.reply(ctx.i18n.t("kalima.mufassal.text"), {
        parse_mode: "HTML",
    });
});

bot.hears(match("keyboards.main_keyboard.duo"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("duo.photoId"));
    await ctx.reply(ctx.i18n.t("duo.text"), {
        parse_mode: "HTML",
        ...keyboard.getDuoKeyboard(ctx),
    });
});

bot.hears(match("keyboards.duo.daily"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("duo.daily.photoId"));
});

bot.hears(match("keyboards.duo.quran"), async (ctx) => {
    await ctx.replyWithDocument(ctx.i18n.t("duo.quran.photoId"));
});

bot.hears(match("keyboards.duo.azon"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("duo.azon.photoId"));
});

bot.hears(match("keyboards.duo.sleep"), async (ctx) => {
    await ctx.replyWithPhoto(ctx.i18n.t("duo.sleep.photoId"));
});

module.exports = bot;
