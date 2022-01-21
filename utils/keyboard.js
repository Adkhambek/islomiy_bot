const { Markup } = require("telegraf");

exports.getMainKeyboard = (ctx) => {
    const mainKeyboardNamoz = ctx.i18n.t("keyboards.main_keyboard.namoz");
    const mainKeyboardQuron = ctx.i18n.t("keyboards.main_keyboard.quron");
    const mainKeyboardDuo = ctx.i18n.t("keyboards.main_keyboard.duo");
    const mainKeyboardFarz = ctx.i18n.t("keyboards.main_keyboard.farz");
    const mainKeyboardKalima = ctx.i18n.t("keyboards.main_keyboard.kalima");
    const mainKeyboardRoza = ctx.i18n.t("keyboards.main_keyboard.roza");
    const mainKeyboardIsm = ctx.i18n.t("keyboards.main_keyboard.ism");

    return Markup.keyboard([
        [mainKeyboardNamoz, mainKeyboardQuron],
        [mainKeyboardDuo, mainKeyboardFarz],
        [mainKeyboardKalima, mainKeyboardRoza],
        [mainKeyboardIsm],
    ]).resize();
};
