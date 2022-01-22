const { Markup } = require("telegraf");
const lodash = require("lodash");

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

exports.getKalimaKeyboard = (ctx) => {
    const kalimaKeyboardToyyiba = ctx.i18n.t("keyboards.kalima.toyyiba");
    const kalimaKeyboardShahodat = ctx.i18n.t("keyboards.kalima.shahodat");
    const kalimaKeyboardTavhid = ctx.i18n.t("keyboards.kalima.tavhid");
    const kalimaKeyboardRaddiKufr = ctx.i18n.t("keyboards.kalima.raddi_kufr");
    const kalimaKeyboardIstigfor = ctx.i18n.t("keyboards.kalima.istigfor");
    const kalimaKeyboardTamjid = ctx.i18n.t("keyboards.kalima.tamjid");
    const kalimaKeyboardMujmal = ctx.i18n.t("keyboards.kalima.mujmal");
    const kalimaKeyboardMufassal = ctx.i18n.t("keyboards.kalima.mufassal");
    const kalimaKeyboardAll = ctx.i18n.t("keyboards.kalima.all");
    const back = ctx.i18n.t("keyboards.back.backwards");

    return Markup.keyboard([
        [kalimaKeyboardToyyiba, kalimaKeyboardShahodat, kalimaKeyboardTavhid],
        [kalimaKeyboardRaddiKufr, kalimaKeyboardIstigfor, kalimaKeyboardTamjid],
        [kalimaKeyboardMujmal, kalimaKeyboardMufassal],
        [kalimaKeyboardAll, back],
    ]).resize();
};

exports.getDuoKeyboard = (ctx) => {
    const DuoKeyboardDaily = ctx.i18n.t("keyboards.duo.daily");
    const DuoKeyboardQuoron = ctx.i18n.t("keyboards.duo.quran");
    const DuoKeyboardAzon = ctx.i18n.t("keyboards.duo.azon");
    const DuoKeyboardSleep = ctx.i18n.t("keyboards.duo.sleep");
    const back = ctx.i18n.t("keyboards.back.backwards");

    return Markup.keyboard([
        [DuoKeyboardDaily, DuoKeyboardQuoron],
        [DuoKeyboardAzon, DuoKeyboardSleep],
        [back],
    ]).resize();
};
