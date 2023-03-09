import { ElCard, ElAvatar, ElIcon, ElInput, ElDropdownItem, ElDropdownMenu, ElDropdown, ElButton, ElPopover, ElTable, ElTableColumn, ElPagination, ElDatePicker, ElSelect, ElOption, ElTooltip, ElTag, ElSteps, ElStep, ElTransfer, ElMenu, ElMenuItem, ElSubMenu, ElCol, ElRadioGroup, ElRadioButton } from "element-plus";
import * as elementPlus$1 from "element-plus";
export { elementPlus$1 as Components };
import { defineComponent as defineComponent$1, openBlock, createElementBlock, createElementVNode, createStaticVNode, computed as computed$1, Fragment, createBlock, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, normalizeStyle, renderSlot, ref, resolveComponent, createVNode, normalizeClass, createCommentVNode, pushScopeId, popScopeId, h as h$1, resolveDirective, withDirectives, watch as watch$1, renderList, onMounted, useCssVars, vShow } from "vue";
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const _sfc_main$4Q = defineComponent$1({
  name: "AddLocation"
});
const _hoisted_1$4L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$4x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$1m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1);
const _hoisted_5$q = [
  _hoisted_2$4E,
  _hoisted_3$4x,
  _hoisted_4$1m
];
function _sfc_render$4Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4L, _hoisted_5$q);
}
var addLocation = /* @__PURE__ */ _export_sfc$1(_sfc_main$4Q, [["render", _sfc_render$4Q]]);
const _sfc_main$4P = defineComponent$1({
  name: "Aim"
});
const _hoisted_1$4K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4D = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$4w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1);
const _hoisted_4$1l = [
  _hoisted_2$4D,
  _hoisted_3$4w
];
function _sfc_render$4P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4K, _hoisted_4$1l);
}
var aim = /* @__PURE__ */ _export_sfc$1(_sfc_main$4P, [["render", _sfc_render$4P]]);
const _sfc_main$4O = defineComponent$1({
  name: "AlarmClock"
});
const _hoisted_1$4J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$4v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1);
const _hoisted_4$1k = [
  _hoisted_2$4C,
  _hoisted_3$4v
];
function _sfc_render$4O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4J, _hoisted_4$1k);
}
var alarmClock = /* @__PURE__ */ _export_sfc$1(_sfc_main$4O, [["render", _sfc_render$4O]]);
const _sfc_main$4N = defineComponent$1({
  name: "Apple"
});
const _hoisted_1$4I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1);
const _hoisted_3$4u = [
  _hoisted_2$4B
];
function _sfc_render$4N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4I, _hoisted_3$4u);
}
var apple = /* @__PURE__ */ _export_sfc$1(_sfc_main$4N, [["render", _sfc_render$4N]]);
const _sfc_main$4M = defineComponent$1({
  name: "ArrowDownBold"
});
const _hoisted_1$4H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1);
const _hoisted_3$4t = [
  _hoisted_2$4A
];
function _sfc_render$4M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4H, _hoisted_3$4t);
}
var arrowDownBold = /* @__PURE__ */ _export_sfc$1(_sfc_main$4M, [["render", _sfc_render$4M]]);
const _sfc_main$4L = defineComponent$1({
  name: "ArrowDown"
});
const _hoisted_1$4G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
const _hoisted_3$4s = [
  _hoisted_2$4z
];
function _sfc_render$4L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4G, _hoisted_3$4s);
}
var arrowDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$4L, [["render", _sfc_render$4L]]);
const _sfc_main$4K = defineComponent$1({
  name: "ArrowLeftBold"
});
const _hoisted_1$4F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1);
const _hoisted_3$4r = [
  _hoisted_2$4y
];
function _sfc_render$4K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4F, _hoisted_3$4r);
}
var arrowLeftBold = /* @__PURE__ */ _export_sfc$1(_sfc_main$4K, [["render", _sfc_render$4K]]);
const _sfc_main$4J = defineComponent$1({
  name: "ArrowLeft"
});
const _hoisted_1$4E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
const _hoisted_3$4q = [
  _hoisted_2$4x
];
function _sfc_render$4J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4E, _hoisted_3$4q);
}
var arrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$4J, [["render", _sfc_render$4J]]);
const _sfc_main$4I = defineComponent$1({
  name: "ArrowRightBold"
});
const _hoisted_1$4D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1);
const _hoisted_3$4p = [
  _hoisted_2$4w
];
function _sfc_render$4I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4D, _hoisted_3$4p);
}
var arrowRightBold = /* @__PURE__ */ _export_sfc$1(_sfc_main$4I, [["render", _sfc_render$4I]]);
const _sfc_main$4H = defineComponent$1({
  name: "ArrowRight"
});
const _hoisted_1$4C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
const _hoisted_3$4o = [
  _hoisted_2$4v
];
function _sfc_render$4H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4C, _hoisted_3$4o);
}
var arrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$4H, [["render", _sfc_render$4H]]);
const _sfc_main$4G = defineComponent$1({
  name: "ArrowUpBold"
});
const _hoisted_1$4B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1);
const _hoisted_3$4n = [
  _hoisted_2$4u
];
function _sfc_render$4G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4B, _hoisted_3$4n);
}
var arrowUpBold = /* @__PURE__ */ _export_sfc$1(_sfc_main$4G, [["render", _sfc_render$4G]]);
const _sfc_main$4F = defineComponent$1({
  name: "ArrowUp"
});
const _hoisted_1$4A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
const _hoisted_3$4m = [
  _hoisted_2$4t
];
function _sfc_render$4F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4A, _hoisted_3$4m);
}
var arrowUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$4F, [["render", _sfc_render$4F]]);
const _sfc_main$4E = defineComponent$1({
  name: "Avatar"
});
const _hoisted_1$4z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1);
const _hoisted_3$4l = [
  _hoisted_2$4s
];
function _sfc_render$4E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4z, _hoisted_3$4l);
}
var avatar$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4E, [["render", _sfc_render$4E]]);
const _sfc_main$4D = defineComponent$1({
  name: "Back"
});
const _hoisted_1$4y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$4k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1);
const _hoisted_4$1j = [
  _hoisted_2$4r,
  _hoisted_3$4k
];
function _sfc_render$4D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4y, _hoisted_4$1j);
}
var back = /* @__PURE__ */ _export_sfc$1(_sfc_main$4D, [["render", _sfc_render$4D]]);
const _sfc_main$4C = defineComponent$1({
  name: "Baseball"
});
const _hoisted_1$4x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1);
const _hoisted_3$4j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1);
const _hoisted_4$1i = [
  _hoisted_2$4q,
  _hoisted_3$4j
];
function _sfc_render$4C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4x, _hoisted_4$1i);
}
var baseball = /* @__PURE__ */ _export_sfc$1(_sfc_main$4C, [["render", _sfc_render$4C]]);
const _sfc_main$4B = defineComponent$1({
  name: "Basketball"
});
const _hoisted_1$4w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1);
const _hoisted_3$4i = [
  _hoisted_2$4p
];
function _sfc_render$4B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4w, _hoisted_3$4i);
}
var basketball = /* @__PURE__ */ _export_sfc$1(_sfc_main$4B, [["render", _sfc_render$4B]]);
const _sfc_main$4A = defineComponent$1({
  name: "BellFilled"
});
const _hoisted_1$4v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1);
const _hoisted_3$4h = [
  _hoisted_2$4o
];
function _sfc_render$4A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4v, _hoisted_3$4h);
}
var bellFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$4A, [["render", _sfc_render$4A]]);
const _sfc_main$4z = defineComponent$1({
  name: "Bell"
});
const _hoisted_1$4u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$4g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1);
const _hoisted_4$1h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
const _hoisted_5$p = [
  _hoisted_2$4n,
  _hoisted_3$4g,
  _hoisted_4$1h
];
function _sfc_render$4z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4u, _hoisted_5$p);
}
var bell = /* @__PURE__ */ _export_sfc$1(_sfc_main$4z, [["render", _sfc_render$4z]]);
const _sfc_main$4y = defineComponent$1({
  name: "Bicycle"
});
const _hoisted_1$4t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4m = /* @__PURE__ */ createStaticVNode('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5);
const _hoisted_7$5 = [
  _hoisted_2$4m
];
function _sfc_render$4y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4t, _hoisted_7$5);
}
var bicycle = /* @__PURE__ */ _export_sfc$1(_sfc_main$4y, [["render", _sfc_render$4y]]);
const _sfc_main$4x = defineComponent$1({
  name: "BottomLeft"
});
const _hoisted_1$4s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1);
const _hoisted_3$4f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1);
const _hoisted_4$1g = [
  _hoisted_2$4l,
  _hoisted_3$4f
];
function _sfc_render$4x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4s, _hoisted_4$1g);
}
var bottomLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$4x, [["render", _sfc_render$4x]]);
const _sfc_main$4w = defineComponent$1({
  name: "BottomRight"
});
const _hoisted_1$4r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1);
const _hoisted_3$4e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1);
const _hoisted_4$1f = [
  _hoisted_2$4k,
  _hoisted_3$4e
];
function _sfc_render$4w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4r, _hoisted_4$1f);
}
var bottomRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$4w, [["render", _sfc_render$4w]]);
const _sfc_main$4v = defineComponent$1({
  name: "Bottom"
});
const _hoisted_1$4q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1);
const _hoisted_3$4d = [
  _hoisted_2$4j
];
function _sfc_render$4v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4q, _hoisted_3$4d);
}
var bottom = /* @__PURE__ */ _export_sfc$1(_sfc_main$4v, [["render", _sfc_render$4v]]);
const _sfc_main$4u = defineComponent$1({
  name: "Bowl"
});
const _hoisted_1$4p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1);
const _hoisted_3$4c = [
  _hoisted_2$4i
];
function _sfc_render$4u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4p, _hoisted_3$4c);
}
var bowl = /* @__PURE__ */ _export_sfc$1(_sfc_main$4u, [["render", _sfc_render$4u]]);
const _sfc_main$4t = defineComponent$1({
  name: "Box"
});
const _hoisted_1$4o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1);
const _hoisted_3$4b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1);
const _hoisted_4$1e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1);
const _hoisted_5$o = [
  _hoisted_2$4h,
  _hoisted_3$4b,
  _hoisted_4$1e
];
function _sfc_render$4t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4o, _hoisted_5$o);
}
var box = /* @__PURE__ */ _export_sfc$1(_sfc_main$4t, [["render", _sfc_render$4t]]);
const _sfc_main$4s = defineComponent$1({
  name: "Briefcase"
});
const _hoisted_1$4n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1);
const _hoisted_3$4a = [
  _hoisted_2$4g
];
function _sfc_render$4s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4n, _hoisted_3$4a);
}
var briefcase = /* @__PURE__ */ _export_sfc$1(_sfc_main$4s, [["render", _sfc_render$4s]]);
const _sfc_main$4r = defineComponent$1({
  name: "BrushFilled"
});
const _hoisted_1$4m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1);
const _hoisted_3$49 = [
  _hoisted_2$4f
];
function _sfc_render$4r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4m, _hoisted_3$49);
}
var brushFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$4r, [["render", _sfc_render$4r]]);
const _sfc_main$4q = defineComponent$1({
  name: "Brush"
});
const _hoisted_1$4l = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1);
const _hoisted_3$48 = [
  _hoisted_2$4e
];
function _sfc_render$4q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4l, _hoisted_3$48);
}
var brush = /* @__PURE__ */ _export_sfc$1(_sfc_main$4q, [["render", _sfc_render$4q]]);
const _sfc_main$4p = defineComponent$1({
  name: "Burger"
});
const _hoisted_1$4k = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1);
const _hoisted_3$47 = [
  _hoisted_2$4d
];
function _sfc_render$4p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4k, _hoisted_3$47);
}
var burger = /* @__PURE__ */ _export_sfc$1(_sfc_main$4p, [["render", _sfc_render$4p]]);
const _sfc_main$4o = defineComponent$1({
  name: "Calendar"
});
const _hoisted_1$4j = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1);
const _hoisted_3$46 = [
  _hoisted_2$4c
];
function _sfc_render$4o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4j, _hoisted_3$46);
}
var calendar = /* @__PURE__ */ _export_sfc$1(_sfc_main$4o, [["render", _sfc_render$4o]]);
const _sfc_main$4n = defineComponent$1({
  name: "CameraFilled"
});
const _hoisted_1$4i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
const _hoisted_3$45 = [
  _hoisted_2$4b
];
function _sfc_render$4n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4i, _hoisted_3$45);
}
var cameraFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$4n, [["render", _sfc_render$4n]]);
const _sfc_main$4m = defineComponent$1({
  name: "Camera"
});
const _hoisted_1$4h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1);
const _hoisted_3$44 = [
  _hoisted_2$4a
];
function _sfc_render$4m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4h, _hoisted_3$44);
}
var camera = /* @__PURE__ */ _export_sfc$1(_sfc_main$4m, [["render", _sfc_render$4m]]);
const _sfc_main$4l = defineComponent$1({
  name: "CaretBottom"
});
const _hoisted_1$4g = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$49 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1);
const _hoisted_3$43 = [
  _hoisted_2$49
];
function _sfc_render$4l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4g, _hoisted_3$43);
}
var caretBottom = /* @__PURE__ */ _export_sfc$1(_sfc_main$4l, [["render", _sfc_render$4l]]);
const _sfc_main$4k = defineComponent$1({
  name: "CaretLeft"
});
const _hoisted_1$4f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$48 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1);
const _hoisted_3$42 = [
  _hoisted_2$48
];
function _sfc_render$4k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4f, _hoisted_3$42);
}
var caretLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$4k, [["render", _sfc_render$4k]]);
const _sfc_main$4j = defineComponent$1({
  name: "CaretRight"
});
const _hoisted_1$4e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$47 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1);
const _hoisted_3$41 = [
  _hoisted_2$47
];
function _sfc_render$4j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4e, _hoisted_3$41);
}
var caretRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$4j, [["render", _sfc_render$4j]]);
const _sfc_main$4i = defineComponent$1({
  name: "CaretTop"
});
const _hoisted_1$4d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$46 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1);
const _hoisted_3$40 = [
  _hoisted_2$46
];
function _sfc_render$4i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4d, _hoisted_3$40);
}
var caretTop = /* @__PURE__ */ _export_sfc$1(_sfc_main$4i, [["render", _sfc_render$4i]]);
const _sfc_main$4h = defineComponent$1({
  name: "Cellphone"
});
const _hoisted_1$4c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$45 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
const _hoisted_3$3$ = [
  _hoisted_2$45
];
function _sfc_render$4h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4c, _hoisted_3$3$);
}
var cellphone = /* @__PURE__ */ _export_sfc$1(_sfc_main$4h, [["render", _sfc_render$4h]]);
const _sfc_main$4g = defineComponent$1({
  name: "ChatDotRound"
});
const _hoisted_1$4b = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$44 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$3_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
const _hoisted_4$1d = [
  _hoisted_2$44,
  _hoisted_3$3_
];
function _sfc_render$4g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4b, _hoisted_4$1d);
}
var chatDotRound = /* @__PURE__ */ _export_sfc$1(_sfc_main$4g, [["render", _sfc_render$4g]]);
const _sfc_main$4f = defineComponent$1({
  name: "ChatDotSquare"
});
const _hoisted_1$4a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$43 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$3Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
const _hoisted_4$1c = [
  _hoisted_2$43,
  _hoisted_3$3Z
];
function _sfc_render$4f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4a, _hoisted_4$1c);
}
var chatDotSquare = /* @__PURE__ */ _export_sfc$1(_sfc_main$4f, [["render", _sfc_render$4f]]);
const _sfc_main$4e = defineComponent$1({
  name: "ChatLineRound"
});
const _hoisted_1$49 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$42 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$3Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$1b = [
  _hoisted_2$42,
  _hoisted_3$3Y
];
function _sfc_render$4e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$49, _hoisted_4$1b);
}
var chatLineRound = /* @__PURE__ */ _export_sfc$1(_sfc_main$4e, [["render", _sfc_render$4e]]);
const _sfc_main$4d = defineComponent$1({
  name: "ChatLineSquare"
});
const _hoisted_1$48 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$41 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$3X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$1a = [
  _hoisted_2$41,
  _hoisted_3$3X
];
function _sfc_render$4d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$48, _hoisted_4$1a);
}
var chatLineSquare = /* @__PURE__ */ _export_sfc$1(_sfc_main$4d, [["render", _sfc_render$4d]]);
const _sfc_main$4c = defineComponent$1({
  name: "ChatRound"
});
const _hoisted_1$47 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$40 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1);
const _hoisted_3$3W = [
  _hoisted_2$40
];
function _sfc_render$4c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$47, _hoisted_3$3W);
}
var chatRound = /* @__PURE__ */ _export_sfc$1(_sfc_main$4c, [["render", _sfc_render$4c]]);
const _sfc_main$4b = defineComponent$1({
  name: "ChatSquare"
});
const _hoisted_1$46 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3$ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$3V = [
  _hoisted_2$3$
];
function _sfc_render$4b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$46, _hoisted_3$3V);
}
var chatSquare = /* @__PURE__ */ _export_sfc$1(_sfc_main$4b, [["render", _sfc_render$4b]]);
const _sfc_main$4a = defineComponent$1({
  name: "Check"
});
const _hoisted_1$45 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1);
const _hoisted_3$3U = [
  _hoisted_2$3_
];
function _sfc_render$4a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$45, _hoisted_3$3U);
}
var check = /* @__PURE__ */ _export_sfc$1(_sfc_main$4a, [["render", _sfc_render$4a]]);
const _sfc_main$49 = defineComponent$1({
  name: "Checked"
});
const _hoisted_1$44 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1);
const _hoisted_3$3T = [
  _hoisted_2$3Z
];
function _sfc_render$49(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$44, _hoisted_3$3T);
}
var checked = /* @__PURE__ */ _export_sfc$1(_sfc_main$49, [["render", _sfc_render$49]]);
const _sfc_main$48 = defineComponent$1({
  name: "Cherry"
});
const _hoisted_1$43 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1);
const _hoisted_3$3S = [
  _hoisted_2$3Y
];
function _sfc_render$48(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$43, _hoisted_3$3S);
}
var cherry = /* @__PURE__ */ _export_sfc$1(_sfc_main$48, [["render", _sfc_render$48]]);
const _sfc_main$47 = defineComponent$1({
  name: "Chicken"
});
const _hoisted_1$42 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1);
const _hoisted_3$3R = [
  _hoisted_2$3X
];
function _sfc_render$47(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$42, _hoisted_3$3R);
}
var chicken = /* @__PURE__ */ _export_sfc$1(_sfc_main$47, [["render", _sfc_render$47]]);
const _sfc_main$46 = defineComponent$1({
  name: "CircleCheckFilled"
});
const _hoisted_1$41 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3W = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
const _hoisted_3$3Q = [
  _hoisted_2$3W
];
function _sfc_render$46(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$41, _hoisted_3$3Q);
}
var circleCheckFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$46, [["render", _sfc_render$46]]);
const _sfc_main$45 = defineComponent$1({
  name: "CircleCheck"
});
const _hoisted_1$40 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3V = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$3P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
const _hoisted_4$19 = [
  _hoisted_2$3V,
  _hoisted_3$3P
];
function _sfc_render$45(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$40, _hoisted_4$19);
}
var circleCheck = /* @__PURE__ */ _export_sfc$1(_sfc_main$45, [["render", _sfc_render$45]]);
const _sfc_main$44 = defineComponent$1({
  name: "CircleCloseFilled"
});
const _hoisted_1$3$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3U = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
const _hoisted_3$3O = [
  _hoisted_2$3U
];
function _sfc_render$44(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3$, _hoisted_3$3O);
}
var circleCloseFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$44, [["render", _sfc_render$44]]);
const _sfc_main$43 = defineComponent$1({
  name: "CircleClose"
});
const _hoisted_1$3_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3T = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$3N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_4$18 = [
  _hoisted_2$3T,
  _hoisted_3$3N
];
function _sfc_render$43(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3_, _hoisted_4$18);
}
var circleClose = /* @__PURE__ */ _export_sfc$1(_sfc_main$43, [["render", _sfc_render$43]]);
const _sfc_main$42 = defineComponent$1({
  name: "CirclePlusFilled"
});
const _hoisted_1$3Z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3S = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1);
const _hoisted_3$3M = [
  _hoisted_2$3S
];
function _sfc_render$42(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3Z, _hoisted_3$3M);
}
var circlePlusFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$42, [["render", _sfc_render$42]]);
const _sfc_main$41 = defineComponent$1({
  name: "CirclePlus"
});
const _hoisted_1$3Y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3R = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$3L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$17 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_5$n = [
  _hoisted_2$3R,
  _hoisted_3$3L,
  _hoisted_4$17
];
function _sfc_render$41(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3Y, _hoisted_5$n);
}
var circlePlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$41, [["render", _sfc_render$41]]);
const _sfc_main$40 = defineComponent$1({
  name: "Clock"
});
const _hoisted_1$3X = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3Q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$3K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$16 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_5$m = [
  _hoisted_2$3Q,
  _hoisted_3$3K,
  _hoisted_4$16
];
function _sfc_render$40(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3X, _hoisted_5$m);
}
var clock = /* @__PURE__ */ _export_sfc$1(_sfc_main$40, [["render", _sfc_render$40]]);
const _sfc_main$3$ = defineComponent$1({
  name: "CloseBold"
});
const _hoisted_1$3W = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1);
const _hoisted_3$3J = [
  _hoisted_2$3P
];
function _sfc_render$3$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3W, _hoisted_3$3J);
}
var closeBold = /* @__PURE__ */ _export_sfc$1(_sfc_main$3$, [["render", _sfc_render$3$]]);
const _sfc_main$3_ = defineComponent$1({
  name: "Close"
});
const _hoisted_1$3V = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3O = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
const _hoisted_3$3I = [
  _hoisted_2$3O
];
function _sfc_render$3_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3V, _hoisted_3$3I);
}
var close = /* @__PURE__ */ _export_sfc$1(_sfc_main$3_, [["render", _sfc_render$3_]]);
const _sfc_main$3Z = defineComponent$1({
  name: "Cloudy"
});
const _hoisted_1$3U = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
const _hoisted_3$3H = [
  _hoisted_2$3N
];
function _sfc_render$3Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3U, _hoisted_3$3H);
}
var cloudy = /* @__PURE__ */ _export_sfc$1(_sfc_main$3Z, [["render", _sfc_render$3Z]]);
const _sfc_main$3Y = defineComponent$1({
  name: "CoffeeCup"
});
const _hoisted_1$3T = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3M = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1);
const _hoisted_3$3G = [
  _hoisted_2$3M
];
function _sfc_render$3Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3T, _hoisted_3$3G);
}
var coffeeCup = /* @__PURE__ */ _export_sfc$1(_sfc_main$3Y, [["render", _sfc_render$3Y]]);
const _sfc_main$3X = defineComponent$1({
  name: "Coffee"
});
const _hoisted_1$3S = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1);
const _hoisted_3$3F = [
  _hoisted_2$3L
];
function _sfc_render$3X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3S, _hoisted_3$3F);
}
var coffee = /* @__PURE__ */ _export_sfc$1(_sfc_main$3X, [["render", _sfc_render$3X]]);
const _sfc_main$3W = defineComponent$1({
  name: "Coin"
});
const _hoisted_1$3R = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_3$3E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_4$15 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1);
const _hoisted_5$l = [
  _hoisted_2$3K,
  _hoisted_3$3E,
  _hoisted_4$15
];
function _sfc_render$3W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3R, _hoisted_5$l);
}
var coin = /* @__PURE__ */ _export_sfc$1(_sfc_main$3W, [["render", _sfc_render$3W]]);
const _sfc_main$3V = defineComponent$1({
  name: "ColdDrink"
});
const _hoisted_1$3Q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3J = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1);
const _hoisted_3$3D = [
  _hoisted_2$3J
];
function _sfc_render$3V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3Q, _hoisted_3$3D);
}
var coldDrink = /* @__PURE__ */ _export_sfc$1(_sfc_main$3V, [["render", _sfc_render$3V]]);
const _sfc_main$3U = defineComponent$1({
  name: "CollectionTag"
});
const _hoisted_1$3P = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3I = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$3C = [
  _hoisted_2$3I
];
function _sfc_render$3U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3P, _hoisted_3$3C);
}
var collectionTag = /* @__PURE__ */ _export_sfc$1(_sfc_main$3U, [["render", _sfc_render$3U]]);
const _sfc_main$3T = defineComponent$1({
  name: "Collection"
});
const _hoisted_1$3O = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3H = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1);
const _hoisted_3$3B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1);
const _hoisted_4$14 = [
  _hoisted_2$3H,
  _hoisted_3$3B
];
function _sfc_render$3T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3O, _hoisted_4$14);
}
var collection = /* @__PURE__ */ _export_sfc$1(_sfc_main$3T, [["render", _sfc_render$3T]]);
const _sfc_main$3S = defineComponent$1({
  name: "Comment"
});
const _hoisted_1$3N = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1);
const _hoisted_3$3A = [
  _hoisted_2$3G
];
function _sfc_render$3S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3N, _hoisted_3$3A);
}
var comment = /* @__PURE__ */ _export_sfc$1(_sfc_main$3S, [["render", _sfc_render$3S]]);
const _sfc_main$3R = defineComponent$1({
  name: "Compass"
});
const _hoisted_1$3M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3F = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$3z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1);
const _hoisted_4$13 = [
  _hoisted_2$3F,
  _hoisted_3$3z
];
function _sfc_render$3R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3M, _hoisted_4$13);
}
var compass = /* @__PURE__ */ _export_sfc$1(_sfc_main$3R, [["render", _sfc_render$3R]]);
const _sfc_main$3Q = defineComponent$1({
  name: "Connection"
});
const _hoisted_1$3L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1);
const _hoisted_3$3y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1);
const _hoisted_4$12 = [
  _hoisted_2$3E,
  _hoisted_3$3y
];
function _sfc_render$3Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3L, _hoisted_4$12);
}
var connection = /* @__PURE__ */ _export_sfc$1(_sfc_main$3Q, [["render", _sfc_render$3Q]]);
const _sfc_main$3P = defineComponent$1({
  name: "Coordinate"
});
const _hoisted_1$3K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3D = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1);
const _hoisted_3$3x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
const _hoisted_4$11 = [
  _hoisted_2$3D,
  _hoisted_3$3x
];
function _sfc_render$3P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3K, _hoisted_4$11);
}
var coordinate = /* @__PURE__ */ _export_sfc$1(_sfc_main$3P, [["render", _sfc_render$3P]]);
const _sfc_main$3O = defineComponent$1({
  name: "CopyDocument"
});
const _hoisted_1$3J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1);
const _hoisted_3$3w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1);
const _hoisted_4$10 = [
  _hoisted_2$3C,
  _hoisted_3$3w
];
function _sfc_render$3O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3J, _hoisted_4$10);
}
var copyDocument = /* @__PURE__ */ _export_sfc$1(_sfc_main$3O, [["render", _sfc_render$3O]]);
const _sfc_main$3N = defineComponent$1({
  name: "Cpu"
});
const _hoisted_1$3I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$3v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1);
const _hoisted_4$$ = [
  _hoisted_2$3B,
  _hoisted_3$3v
];
function _sfc_render$3N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3I, _hoisted_4$$);
}
var cpu = /* @__PURE__ */ _export_sfc$1(_sfc_main$3N, [["render", _sfc_render$3N]]);
const _sfc_main$3M = defineComponent$1({
  name: "CreditCard"
});
const _hoisted_1$3H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1);
const _hoisted_3$3u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1);
const _hoisted_4$_ = [
  _hoisted_2$3A,
  _hoisted_3$3u
];
function _sfc_render$3M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3H, _hoisted_4$_);
}
var creditCard = /* @__PURE__ */ _export_sfc$1(_sfc_main$3M, [["render", _sfc_render$3M]]);
const _sfc_main$3L = defineComponent$1({
  name: "Crop"
});
const _hoisted_1$3G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1);
const _hoisted_3$3t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1);
const _hoisted_4$Z = [
  _hoisted_2$3z,
  _hoisted_3$3t
];
function _sfc_render$3L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3G, _hoisted_4$Z);
}
var crop = /* @__PURE__ */ _export_sfc$1(_sfc_main$3L, [["render", _sfc_render$3L]]);
const _sfc_main$3K = defineComponent$1({
  name: "DArrowLeft"
});
const _hoisted_1$3F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1);
const _hoisted_3$3s = [
  _hoisted_2$3y
];
function _sfc_render$3K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3F, _hoisted_3$3s);
}
var dArrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$3K, [["render", _sfc_render$3K]]);
const _sfc_main$3J = defineComponent$1({
  name: "DArrowRight"
});
const _hoisted_1$3E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1);
const _hoisted_3$3r = [
  _hoisted_2$3x
];
function _sfc_render$3J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3E, _hoisted_3$3r);
}
var dArrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$3J, [["render", _sfc_render$3J]]);
const _sfc_main$3I = defineComponent$1({
  name: "DCaret"
});
const _hoisted_1$3D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1);
const _hoisted_3$3q = [
  _hoisted_2$3w
];
function _sfc_render$3I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3D, _hoisted_3$3q);
}
var dCaret = /* @__PURE__ */ _export_sfc$1(_sfc_main$3I, [["render", _sfc_render$3I]]);
const _sfc_main$3H = defineComponent$1({
  name: "DataAnalysis"
});
const _hoisted_1$3C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$3p = [
  _hoisted_2$3v
];
function _sfc_render$3H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3C, _hoisted_3$3p);
}
var dataAnalysis = /* @__PURE__ */ _export_sfc$1(_sfc_main$3H, [["render", _sfc_render$3H]]);
const _sfc_main$3G = defineComponent$1({
  name: "DataBoard"
});
const _hoisted_1$3B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1);
const _hoisted_3$3o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1);
const _hoisted_4$Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1);
const _hoisted_5$k = [
  _hoisted_2$3u,
  _hoisted_3$3o,
  _hoisted_4$Y
];
function _sfc_render$3G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3B, _hoisted_5$k);
}
var dataBoard = /* @__PURE__ */ _export_sfc$1(_sfc_main$3G, [["render", _sfc_render$3G]]);
const _sfc_main$3F = defineComponent$1({
  name: "DataLine"
});
const _hoisted_1$3A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1);
const _hoisted_3$3n = [
  _hoisted_2$3t
];
function _sfc_render$3F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3A, _hoisted_3$3n);
}
var dataLine = /* @__PURE__ */ _export_sfc$1(_sfc_main$3F, [["render", _sfc_render$3F]]);
const _sfc_main$3E = defineComponent$1({
  name: "DeleteFilled"
});
const _hoisted_1$3z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1);
const _hoisted_3$3m = [
  _hoisted_2$3s
];
function _sfc_render$3E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3z, _hoisted_3$3m);
}
var deleteFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$3E, [["render", _sfc_render$3E]]);
const _sfc_main$3D = defineComponent$1({
  name: "DeleteLocation"
});
const _hoisted_1$3y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$3l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_5$j = [
  _hoisted_2$3r,
  _hoisted_3$3l,
  _hoisted_4$X
];
function _sfc_render$3D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3y, _hoisted_5$j);
}
var deleteLocation = /* @__PURE__ */ _export_sfc$1(_sfc_main$3D, [["render", _sfc_render$3D]]);
const _sfc_main$3C = defineComponent$1({
  name: "Delete"
});
const _hoisted_1$3x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
const _hoisted_3$3k = [
  _hoisted_2$3q
];
function _sfc_render$3C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3x, _hoisted_3$3k);
}
var _delete = /* @__PURE__ */ _export_sfc$1(_sfc_main$3C, [["render", _sfc_render$3C]]);
const _sfc_main$3B = defineComponent$1({
  name: "Dessert"
});
const _hoisted_1$3w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1);
const _hoisted_3$3j = [
  _hoisted_2$3p
];
function _sfc_render$3B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3w, _hoisted_3$3j);
}
var dessert = /* @__PURE__ */ _export_sfc$1(_sfc_main$3B, [["render", _sfc_render$3B]]);
const _sfc_main$3A = defineComponent$1({
  name: "Discount"
});
const _hoisted_1$3v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$3i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_4$W = [
  _hoisted_2$3o,
  _hoisted_3$3i
];
function _sfc_render$3A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3v, _hoisted_4$W);
}
var discount = /* @__PURE__ */ _export_sfc$1(_sfc_main$3A, [["render", _sfc_render$3A]]);
const _sfc_main$3z = defineComponent$1({
  name: "DishDot"
});
const _hoisted_1$3u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1);
const _hoisted_3$3h = [
  _hoisted_2$3n
];
function _sfc_render$3z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3u, _hoisted_3$3h);
}
var dishDot = /* @__PURE__ */ _export_sfc$1(_sfc_main$3z, [["render", _sfc_render$3z]]);
const _sfc_main$3y = defineComponent$1({
  name: "Dish"
});
const _hoisted_1$3t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1);
const _hoisted_3$3g = [
  _hoisted_2$3m
];
function _sfc_render$3y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3t, _hoisted_3$3g);
}
var dish = /* @__PURE__ */ _export_sfc$1(_sfc_main$3y, [["render", _sfc_render$3y]]);
const _sfc_main$3x = defineComponent$1({
  name: "DocumentAdd"
});
const _hoisted_1$3s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1);
const _hoisted_3$3f = [
  _hoisted_2$3l
];
function _sfc_render$3x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3s, _hoisted_3$3f);
}
var documentAdd = /* @__PURE__ */ _export_sfc$1(_sfc_main$3x, [["render", _sfc_render$3x]]);
const _sfc_main$3w = defineComponent$1({
  name: "DocumentChecked"
});
const _hoisted_1$3r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1);
const _hoisted_3$3e = [
  _hoisted_2$3k
];
function _sfc_render$3w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3r, _hoisted_3$3e);
}
var documentChecked = /* @__PURE__ */ _export_sfc$1(_sfc_main$3w, [["render", _sfc_render$3w]]);
const _sfc_main$3v = defineComponent$1({
  name: "DocumentCopy"
});
const _hoisted_1$3q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1);
const _hoisted_3$3d = [
  _hoisted_2$3j
];
function _sfc_render$3v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3q, _hoisted_3$3d);
}
var documentCopy = /* @__PURE__ */ _export_sfc$1(_sfc_main$3v, [["render", _sfc_render$3v]]);
const _sfc_main$3u = defineComponent$1({
  name: "DocumentDelete"
});
const _hoisted_1$3p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1);
const _hoisted_3$3c = [
  _hoisted_2$3i
];
function _sfc_render$3u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3p, _hoisted_3$3c);
}
var documentDelete = /* @__PURE__ */ _export_sfc$1(_sfc_main$3u, [["render", _sfc_render$3u]]);
const _sfc_main$3t = defineComponent$1({
  name: "DocumentRemove"
});
const _hoisted_1$3o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1);
const _hoisted_3$3b = [
  _hoisted_2$3h
];
function _sfc_render$3t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3o, _hoisted_3$3b);
}
var documentRemove = /* @__PURE__ */ _export_sfc$1(_sfc_main$3t, [["render", _sfc_render$3t]]);
const _sfc_main$3s = defineComponent$1({
  name: "Document"
});
const _hoisted_1$3n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
const _hoisted_3$3a = [
  _hoisted_2$3g
];
function _sfc_render$3s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3n, _hoisted_3$3a);
}
var document$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3s, [["render", _sfc_render$3s]]);
const _sfc_main$3r = defineComponent$1({
  name: "Download"
});
const _hoisted_1$3m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1);
const _hoisted_3$39 = [
  _hoisted_2$3f
];
function _sfc_render$3r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3m, _hoisted_3$39);
}
var download = /* @__PURE__ */ _export_sfc$1(_sfc_main$3r, [["render", _sfc_render$3r]]);
const _sfc_main$3q = defineComponent$1({
  name: "Drizzling"
});
const _hoisted_1$3l = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1);
const _hoisted_3$38 = [
  _hoisted_2$3e
];
function _sfc_render$3q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3l, _hoisted_3$38);
}
var drizzling = /* @__PURE__ */ _export_sfc$1(_sfc_main$3q, [["render", _sfc_render$3q]]);
const _sfc_main$3p = defineComponent$1({
  name: "EditPen"
});
const _hoisted_1$3k = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3d = /* @__PURE__ */ createElementVNode("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$37 = [
  _hoisted_2$3d
];
function _sfc_render$3p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3k, _hoisted_3$37);
}
var editPen = /* @__PURE__ */ _export_sfc$1(_sfc_main$3p, [["render", _sfc_render$3p]]);
const _sfc_main$3o = defineComponent$1({
  name: "Edit"
});
const _hoisted_1$3j = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1);
const _hoisted_3$36 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
const _hoisted_4$V = [
  _hoisted_2$3c,
  _hoisted_3$36
];
function _sfc_render$3o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3j, _hoisted_4$V);
}
var edit = /* @__PURE__ */ _export_sfc$1(_sfc_main$3o, [["render", _sfc_render$3o]]);
const _sfc_main$3n = defineComponent$1({
  name: "ElemeFilled"
});
const _hoisted_1$3i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1);
const _hoisted_3$35 = [
  _hoisted_2$3b
];
function _sfc_render$3n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3i, _hoisted_3$35);
}
var elemeFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$3n, [["render", _sfc_render$3n]]);
const _sfc_main$3m = defineComponent$1({
  name: "Eleme"
});
const _hoisted_1$3h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1);
const _hoisted_3$34 = [
  _hoisted_2$3a
];
function _sfc_render$3m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3h, _hoisted_3$34);
}
var eleme = /* @__PURE__ */ _export_sfc$1(_sfc_main$3m, [["render", _sfc_render$3m]]);
const _sfc_main$3l = defineComponent$1({
  name: "ElementPlus"
});
const _hoisted_1$3g = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$39 = /* @__PURE__ */ createElementVNode("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$33 = [
  _hoisted_2$39
];
function _sfc_render$3l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3g, _hoisted_3$33);
}
var elementPlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$3l, [["render", _sfc_render$3l]]);
const _sfc_main$3k = defineComponent$1({
  name: "Expand"
});
const _hoisted_1$3f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$38 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1);
const _hoisted_3$32 = [
  _hoisted_2$38
];
function _sfc_render$3k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3f, _hoisted_3$32);
}
var expand = /* @__PURE__ */ _export_sfc$1(_sfc_main$3k, [["render", _sfc_render$3k]]);
const _sfc_main$3j = defineComponent$1({
  name: "Failed"
});
const _hoisted_1$3e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$37 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1);
const _hoisted_3$31 = [
  _hoisted_2$37
];
function _sfc_render$3j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3e, _hoisted_3$31);
}
var failed = /* @__PURE__ */ _export_sfc$1(_sfc_main$3j, [["render", _sfc_render$3j]]);
const _sfc_main$3i = defineComponent$1({
  name: "Female"
});
const _hoisted_1$3d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$36 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$30 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1);
const _hoisted_4$U = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_5$i = [
  _hoisted_2$36,
  _hoisted_3$30,
  _hoisted_4$U
];
function _sfc_render$3i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3d, _hoisted_5$i);
}
var female = /* @__PURE__ */ _export_sfc$1(_sfc_main$3i, [["render", _sfc_render$3i]]);
const _sfc_main$3h = defineComponent$1({
  name: "Files"
});
const _hoisted_1$3c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$35 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1);
const _hoisted_3$2$ = [
  _hoisted_2$35
];
function _sfc_render$3h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3c, _hoisted_3$2$);
}
var files = /* @__PURE__ */ _export_sfc$1(_sfc_main$3h, [["render", _sfc_render$3h]]);
const _sfc_main$3g = defineComponent$1({
  name: "Film"
});
const _hoisted_1$3b = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$34 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$2_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1);
const _hoisted_4$T = [
  _hoisted_2$34,
  _hoisted_3$2_
];
function _sfc_render$3g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3b, _hoisted_4$T);
}
var film = /* @__PURE__ */ _export_sfc$1(_sfc_main$3g, [["render", _sfc_render$3g]]);
const _sfc_main$3f = defineComponent$1({
  name: "Filter"
});
const _hoisted_1$3a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$33 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1);
const _hoisted_3$2Z = [
  _hoisted_2$33
];
function _sfc_render$3f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3a, _hoisted_3$2Z);
}
var filter = /* @__PURE__ */ _export_sfc$1(_sfc_main$3f, [["render", _sfc_render$3f]]);
const _sfc_main$3e = defineComponent$1({
  name: "Finished"
});
const _hoisted_1$39 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$32 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1);
const _hoisted_3$2Y = [
  _hoisted_2$32
];
function _sfc_render$3e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$39, _hoisted_3$2Y);
}
var finished = /* @__PURE__ */ _export_sfc$1(_sfc_main$3e, [["render", _sfc_render$3e]]);
const _sfc_main$3d = defineComponent$1({
  name: "FirstAidKit"
});
const _hoisted_1$38 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$31 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$2X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$S = [
  _hoisted_2$31,
  _hoisted_3$2X
];
function _sfc_render$3d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$38, _hoisted_4$S);
}
var firstAidKit = /* @__PURE__ */ _export_sfc$1(_sfc_main$3d, [["render", _sfc_render$3d]]);
const _sfc_main$3c = defineComponent$1({
  name: "Flag"
});
const _hoisted_1$37 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$30 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1);
const _hoisted_3$2W = [
  _hoisted_2$30
];
function _sfc_render$3c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$37, _hoisted_3$2W);
}
var flag = /* @__PURE__ */ _export_sfc$1(_sfc_main$3c, [["render", _sfc_render$3c]]);
const _sfc_main$3b = defineComponent$1({
  name: "Fold"
});
const _hoisted_1$36 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2$ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1);
const _hoisted_3$2V = [
  _hoisted_2$2$
];
function _sfc_render$3b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$36, _hoisted_3$2V);
}
var fold = /* @__PURE__ */ _export_sfc$1(_sfc_main$3b, [["render", _sfc_render$3b]]);
const _sfc_main$3a = defineComponent$1({
  name: "FolderAdd"
});
const _hoisted_1$35 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1);
const _hoisted_3$2U = [
  _hoisted_2$2_
];
function _sfc_render$3a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$35, _hoisted_3$2U);
}
var folderAdd = /* @__PURE__ */ _export_sfc$1(_sfc_main$3a, [["render", _sfc_render$3a]]);
const _sfc_main$39 = defineComponent$1({
  name: "FolderChecked"
});
const _hoisted_1$34 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1);
const _hoisted_3$2T = [
  _hoisted_2$2Z
];
function _sfc_render$39(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$34, _hoisted_3$2T);
}
var folderChecked = /* @__PURE__ */ _export_sfc$1(_sfc_main$39, [["render", _sfc_render$39]]);
const _sfc_main$38 = defineComponent$1({
  name: "FolderDelete"
});
const _hoisted_1$33 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1);
const _hoisted_3$2S = [
  _hoisted_2$2Y
];
function _sfc_render$38(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$33, _hoisted_3$2S);
}
var folderDelete = /* @__PURE__ */ _export_sfc$1(_sfc_main$38, [["render", _sfc_render$38]]);
const _sfc_main$37 = defineComponent$1({
  name: "FolderOpened"
});
const _hoisted_1$32 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1);
const _hoisted_3$2R = [
  _hoisted_2$2X
];
function _sfc_render$37(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$32, _hoisted_3$2R);
}
var folderOpened = /* @__PURE__ */ _export_sfc$1(_sfc_main$37, [["render", _sfc_render$37]]);
const _sfc_main$36 = defineComponent$1({
  name: "FolderRemove"
});
const _hoisted_1$31 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2W = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1);
const _hoisted_3$2Q = [
  _hoisted_2$2W
];
function _sfc_render$36(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$31, _hoisted_3$2Q);
}
var folderRemove = /* @__PURE__ */ _export_sfc$1(_sfc_main$36, [["render", _sfc_render$36]]);
const _sfc_main$35 = defineComponent$1({
  name: "Folder"
});
const _hoisted_1$30 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2V = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$2P = [
  _hoisted_2$2V
];
function _sfc_render$35(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$30, _hoisted_3$2P);
}
var folder = /* @__PURE__ */ _export_sfc$1(_sfc_main$35, [["render", _sfc_render$35]]);
const _sfc_main$34 = defineComponent$1({
  name: "Food"
});
const _hoisted_1$2$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2U = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1);
const _hoisted_3$2O = [
  _hoisted_2$2U
];
function _sfc_render$34(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2$, _hoisted_3$2O);
}
var food = /* @__PURE__ */ _export_sfc$1(_sfc_main$34, [["render", _sfc_render$34]]);
const _sfc_main$33 = defineComponent$1({
  name: "Football"
});
const _hoisted_1$2_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2T = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1);
const _hoisted_3$2N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1);
const _hoisted_4$R = [
  _hoisted_2$2T,
  _hoisted_3$2N
];
function _sfc_render$33(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2_, _hoisted_4$R);
}
var football = /* @__PURE__ */ _export_sfc$1(_sfc_main$33, [["render", _sfc_render$33]]);
const _sfc_main$32 = defineComponent$1({
  name: "ForkSpoon"
});
const _hoisted_1$2Z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2S = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1);
const _hoisted_3$2M = [
  _hoisted_2$2S
];
function _sfc_render$32(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2Z, _hoisted_3$2M);
}
var forkSpoon = /* @__PURE__ */ _export_sfc$1(_sfc_main$32, [["render", _sfc_render$32]]);
const _sfc_main$31 = defineComponent$1({
  name: "Fries"
});
const _hoisted_1$2Y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2R = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1);
const _hoisted_3$2L = [
  _hoisted_2$2R
];
function _sfc_render$31(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2Y, _hoisted_3$2L);
}
var fries = /* @__PURE__ */ _export_sfc$1(_sfc_main$31, [["render", _sfc_render$31]]);
const _sfc_main$30 = defineComponent$1({
  name: "FullScreen"
});
const _hoisted_1$2X = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2Q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1);
const _hoisted_3$2K = [
  _hoisted_2$2Q
];
function _sfc_render$30(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2X, _hoisted_3$2K);
}
var fullScreen = /* @__PURE__ */ _export_sfc$1(_sfc_main$30, [["render", _sfc_render$30]]);
const _sfc_main$2$ = defineComponent$1({
  name: "GobletFull"
});
const _hoisted_1$2W = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1);
const _hoisted_3$2J = [
  _hoisted_2$2P
];
function _sfc_render$2$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2W, _hoisted_3$2J);
}
var gobletFull = /* @__PURE__ */ _export_sfc$1(_sfc_main$2$, [["render", _sfc_render$2$]]);
const _sfc_main$2_ = defineComponent$1({
  name: "GobletSquareFull"
});
const _hoisted_1$2V = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2O = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1);
const _hoisted_3$2I = [
  _hoisted_2$2O
];
function _sfc_render$2_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2V, _hoisted_3$2I);
}
var gobletSquareFull = /* @__PURE__ */ _export_sfc$1(_sfc_main$2_, [["render", _sfc_render$2_]]);
const _sfc_main$2Z = defineComponent$1({
  name: "GobletSquare"
});
const _hoisted_1$2U = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1);
const _hoisted_3$2H = [
  _hoisted_2$2N
];
function _sfc_render$2Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2U, _hoisted_3$2H);
}
var gobletSquare = /* @__PURE__ */ _export_sfc$1(_sfc_main$2Z, [["render", _sfc_render$2Z]]);
const _sfc_main$2Y = defineComponent$1({
  name: "Goblet"
});
const _hoisted_1$2T = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2M = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1);
const _hoisted_3$2G = [
  _hoisted_2$2M
];
function _sfc_render$2Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2T, _hoisted_3$2G);
}
var goblet = /* @__PURE__ */ _export_sfc$1(_sfc_main$2Y, [["render", _sfc_render$2Y]]);
const _sfc_main$2X = defineComponent$1({
  name: "GoodsFilled"
});
const _hoisted_1$2S = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1);
const _hoisted_3$2F = [
  _hoisted_2$2L
];
function _sfc_render$2X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2S, _hoisted_3$2F);
}
var goodsFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2X, [["render", _sfc_render$2X]]);
const _sfc_main$2W = defineComponent$1({
  name: "Goods"
});
const _hoisted_1$2R = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1);
const _hoisted_3$2E = [
  _hoisted_2$2K
];
function _sfc_render$2W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2R, _hoisted_3$2E);
}
var goods = /* @__PURE__ */ _export_sfc$1(_sfc_main$2W, [["render", _sfc_render$2W]]);
const _sfc_main$2V = defineComponent$1({
  name: "Grape"
});
const _hoisted_1$2Q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2J = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
const _hoisted_3$2D = [
  _hoisted_2$2J
];
function _sfc_render$2V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2Q, _hoisted_3$2D);
}
var grape = /* @__PURE__ */ _export_sfc$1(_sfc_main$2V, [["render", _sfc_render$2V]]);
const _sfc_main$2U = defineComponent$1({
  name: "Grid"
});
const _hoisted_1$2P = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2I = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1);
const _hoisted_3$2C = [
  _hoisted_2$2I
];
function _sfc_render$2U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2P, _hoisted_3$2C);
}
var grid = /* @__PURE__ */ _export_sfc$1(_sfc_main$2U, [["render", _sfc_render$2U]]);
const _sfc_main$2T = defineComponent$1({
  name: "Guide"
});
const _hoisted_1$2O = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2H = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1);
const _hoisted_3$2B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1);
const _hoisted_4$Q = [
  _hoisted_2$2H,
  _hoisted_3$2B
];
function _sfc_render$2T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2O, _hoisted_4$Q);
}
var guide = /* @__PURE__ */ _export_sfc$1(_sfc_main$2T, [["render", _sfc_render$2T]]);
const _sfc_main$2S = defineComponent$1({
  name: "Headset"
});
const _hoisted_1$2N = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1);
const _hoisted_3$2A = [
  _hoisted_2$2G
];
function _sfc_render$2S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2N, _hoisted_3$2A);
}
var headset = /* @__PURE__ */ _export_sfc$1(_sfc_main$2S, [["render", _sfc_render$2S]]);
const _sfc_main$2R = defineComponent$1({
  name: "HelpFilled"
});
const _hoisted_1$2M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2F = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1);
const _hoisted_3$2z = [
  _hoisted_2$2F
];
function _sfc_render$2R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2M, _hoisted_3$2z);
}
var helpFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2R, [["render", _sfc_render$2R]]);
const _sfc_main$2Q = defineComponent$1({
  name: "Help"
});
const _hoisted_1$2L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$2y = [
  _hoisted_2$2E
];
function _sfc_render$2Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2L, _hoisted_3$2y);
}
var help = /* @__PURE__ */ _export_sfc$1(_sfc_main$2Q, [["render", _sfc_render$2Q]]);
const _sfc_main$2P = defineComponent$1({
  name: "Hide"
});
const _hoisted_1$2K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2D = /* @__PURE__ */ createElementVNode("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2x = /* @__PURE__ */ createElementVNode("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$P = [
  _hoisted_2$2D,
  _hoisted_3$2x
];
function _sfc_render$2P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2K, _hoisted_4$P);
}
var hide = /* @__PURE__ */ _export_sfc$1(_sfc_main$2P, [["render", _sfc_render$2P]]);
const _sfc_main$2O = defineComponent$1({
  name: "Histogram"
});
const _hoisted_1$2J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1);
const _hoisted_3$2w = [
  _hoisted_2$2C
];
function _sfc_render$2O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2J, _hoisted_3$2w);
}
var histogram = /* @__PURE__ */ _export_sfc$1(_sfc_main$2O, [["render", _sfc_render$2O]]);
const _sfc_main$2N = defineComponent$1({
  name: "HomeFilled"
});
const _hoisted_1$2I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1);
const _hoisted_3$2v = [
  _hoisted_2$2B
];
function _sfc_render$2N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2I, _hoisted_3$2v);
}
var homeFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2N, [["render", _sfc_render$2N]]);
const _sfc_main$2M = defineComponent$1({
  name: "HotWater"
});
const _hoisted_1$2H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1);
const _hoisted_3$2u = [
  _hoisted_2$2A
];
function _sfc_render$2M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2H, _hoisted_3$2u);
}
var hotWater = /* @__PURE__ */ _export_sfc$1(_sfc_main$2M, [["render", _sfc_render$2M]]);
const _sfc_main$2L = defineComponent$1({
  name: "House"
});
const _hoisted_1$2G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1);
const _hoisted_3$2t = [
  _hoisted_2$2z
];
function _sfc_render$2L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2G, _hoisted_3$2t);
}
var house = /* @__PURE__ */ _export_sfc$1(_sfc_main$2L, [["render", _sfc_render$2L]]);
const _sfc_main$2K = defineComponent$1({
  name: "IceCreamRound"
});
const _hoisted_1$2F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1);
const _hoisted_3$2s = [
  _hoisted_2$2y
];
function _sfc_render$2K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2F, _hoisted_3$2s);
}
var iceCreamRound = /* @__PURE__ */ _export_sfc$1(_sfc_main$2K, [["render", _sfc_render$2K]]);
const _sfc_main$2J = defineComponent$1({
  name: "IceCreamSquare"
});
const _hoisted_1$2E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1);
const _hoisted_3$2r = [
  _hoisted_2$2x
];
function _sfc_render$2J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2E, _hoisted_3$2r);
}
var iceCreamSquare = /* @__PURE__ */ _export_sfc$1(_sfc_main$2J, [["render", _sfc_render$2J]]);
const _sfc_main$2I = defineComponent$1({
  name: "IceCream"
});
const _hoisted_1$2D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1);
const _hoisted_3$2q = [
  _hoisted_2$2w
];
function _sfc_render$2I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2D, _hoisted_3$2q);
}
var iceCream = /* @__PURE__ */ _export_sfc$1(_sfc_main$2I, [["render", _sfc_render$2I]]);
const _sfc_main$2H = defineComponent$1({
  name: "IceDrink"
});
const _hoisted_1$2C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1);
const _hoisted_3$2p = [
  _hoisted_2$2v
];
function _sfc_render$2H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2C, _hoisted_3$2p);
}
var iceDrink = /* @__PURE__ */ _export_sfc$1(_sfc_main$2H, [["render", _sfc_render$2H]]);
const _sfc_main$2G = defineComponent$1({
  name: "IceTea"
});
const _hoisted_1$2B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1);
const _hoisted_3$2o = [
  _hoisted_2$2u
];
function _sfc_render$2G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2B, _hoisted_3$2o);
}
var iceTea = /* @__PURE__ */ _export_sfc$1(_sfc_main$2G, [["render", _sfc_render$2G]]);
const _sfc_main$2F = defineComponent$1({
  name: "InfoFilled"
});
const _hoisted_1$2A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const _hoisted_3$2n = [
  _hoisted_2$2t
];
function _sfc_render$2F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2A, _hoisted_3$2n);
}
var infoFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2F, [["render", _sfc_render$2F]]);
const _sfc_main$2E = defineComponent$1({
  name: "Iphone"
});
const _hoisted_1$2z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1);
const _hoisted_3$2m = [
  _hoisted_2$2s
];
function _sfc_render$2E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2z, _hoisted_3$2m);
}
var iphone = /* @__PURE__ */ _export_sfc$1(_sfc_main$2E, [["render", _sfc_render$2E]]);
const _sfc_main$2D = defineComponent$1({
  name: "Key"
});
const _hoisted_1$2y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1);
const _hoisted_3$2l = [
  _hoisted_2$2r
];
function _sfc_render$2D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2y, _hoisted_3$2l);
}
var key = /* @__PURE__ */ _export_sfc$1(_sfc_main$2D, [["render", _sfc_render$2D]]);
const _sfc_main$2C = defineComponent$1({
  name: "KnifeFork"
});
const _hoisted_1$2x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1);
const _hoisted_3$2k = [
  _hoisted_2$2q
];
function _sfc_render$2C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2x, _hoisted_3$2k);
}
var knifeFork = /* @__PURE__ */ _export_sfc$1(_sfc_main$2C, [["render", _sfc_render$2C]]);
const _sfc_main$2B = defineComponent$1({
  name: "Lightning"
});
const _hoisted_1$2w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1);
const _hoisted_3$2j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1);
const _hoisted_4$O = [
  _hoisted_2$2p,
  _hoisted_3$2j
];
function _sfc_render$2B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2w, _hoisted_4$O);
}
var lightning = /* @__PURE__ */ _export_sfc$1(_sfc_main$2B, [["render", _sfc_render$2B]]);
const _sfc_main$2A = defineComponent$1({
  name: "Link"
});
const _hoisted_1$2v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1);
const _hoisted_3$2i = [
  _hoisted_2$2o
];
function _sfc_render$2A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2v, _hoisted_3$2i);
}
var link = /* @__PURE__ */ _export_sfc$1(_sfc_main$2A, [["render", _sfc_render$2A]]);
const _sfc_main$2z = defineComponent$1({
  name: "List"
});
const _hoisted_1$2u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1);
const _hoisted_3$2h = [
  _hoisted_2$2n
];
function _sfc_render$2z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2u, _hoisted_3$2h);
}
var list = /* @__PURE__ */ _export_sfc$1(_sfc_main$2z, [["render", _sfc_render$2z]]);
const _sfc_main$2y = defineComponent$1({
  name: "Loading"
});
const _hoisted_1$2t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
const _hoisted_3$2g = [
  _hoisted_2$2m
];
function _sfc_render$2y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2t, _hoisted_3$2g);
}
var loading = /* @__PURE__ */ _export_sfc$1(_sfc_main$2y, [["render", _sfc_render$2y]]);
const _sfc_main$2x = defineComponent$1({
  name: "LocationFilled"
});
const _hoisted_1$2s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1);
const _hoisted_3$2f = [
  _hoisted_2$2l
];
function _sfc_render$2x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2s, _hoisted_3$2f);
}
var locationFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2x, [["render", _sfc_render$2x]]);
const _sfc_main$2w = defineComponent$1({
  name: "LocationInformation"
});
const _hoisted_1$2r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$2e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
const _hoisted_5$h = [
  _hoisted_2$2k,
  _hoisted_3$2e,
  _hoisted_4$N
];
function _sfc_render$2w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2r, _hoisted_5$h);
}
var locationInformation = /* @__PURE__ */ _export_sfc$1(_sfc_main$2w, [["render", _sfc_render$2w]]);
const _sfc_main$2v = defineComponent$1({
  name: "Location"
});
const _hoisted_1$2q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$2d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
const _hoisted_4$M = [
  _hoisted_2$2j,
  _hoisted_3$2d
];
function _sfc_render$2v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2q, _hoisted_4$M);
}
var location = /* @__PURE__ */ _export_sfc$1(_sfc_main$2v, [["render", _sfc_render$2v]]);
const _sfc_main$2u = defineComponent$1({
  name: "Lock"
});
const _hoisted_1$2p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$2c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1);
const _hoisted_4$L = [
  _hoisted_2$2i,
  _hoisted_3$2c
];
function _sfc_render$2u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2p, _hoisted_4$L);
}
var lock = /* @__PURE__ */ _export_sfc$1(_sfc_main$2u, [["render", _sfc_render$2u]]);
const _sfc_main$2t = defineComponent$1({
  name: "Lollipop"
});
const _hoisted_1$2o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1);
const _hoisted_3$2b = [
  _hoisted_2$2h
];
function _sfc_render$2t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2o, _hoisted_3$2b);
}
var lollipop = /* @__PURE__ */ _export_sfc$1(_sfc_main$2t, [["render", _sfc_render$2t]]);
const _sfc_main$2s = defineComponent$1({
  name: "MagicStick"
});
const _hoisted_1$2n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1);
const _hoisted_3$2a = [
  _hoisted_2$2g
];
function _sfc_render$2s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2n, _hoisted_3$2a);
}
var magicStick = /* @__PURE__ */ _export_sfc$1(_sfc_main$2s, [["render", _sfc_render$2s]]);
const _sfc_main$2r = defineComponent$1({
  name: "Magnet"
});
const _hoisted_1$2m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1);
const _hoisted_3$29 = [
  _hoisted_2$2f
];
function _sfc_render$2r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2m, _hoisted_3$29);
}
var magnet = /* @__PURE__ */ _export_sfc$1(_sfc_main$2r, [["render", _sfc_render$2r]]);
const _sfc_main$2q = defineComponent$1({
  name: "Male"
});
const _hoisted_1$2l = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1);
const _hoisted_3$28 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1);
const _hoisted_4$K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1);
const _hoisted_5$g = [
  _hoisted_2$2e,
  _hoisted_3$28,
  _hoisted_4$K
];
function _sfc_render$2q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2l, _hoisted_5$g);
}
var male = /* @__PURE__ */ _export_sfc$1(_sfc_main$2q, [["render", _sfc_render$2q]]);
const _sfc_main$2p = defineComponent$1({
  name: "Management"
});
const _hoisted_1$2k = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1);
const _hoisted_3$27 = [
  _hoisted_2$2d
];
function _sfc_render$2p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2k, _hoisted_3$27);
}
var management = /* @__PURE__ */ _export_sfc$1(_sfc_main$2p, [["render", _sfc_render$2p]]);
const _sfc_main$2o = defineComponent$1({
  name: "MapLocation"
});
const _hoisted_1$2j = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$26 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1);
const _hoisted_4$J = [
  _hoisted_2$2c,
  _hoisted_3$26
];
function _sfc_render$2o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2j, _hoisted_4$J);
}
var mapLocation = /* @__PURE__ */ _export_sfc$1(_sfc_main$2o, [["render", _sfc_render$2o]]);
const _sfc_main$2n = defineComponent$1({
  name: "Medal"
});
const _hoisted_1$2i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$25 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1);
const _hoisted_4$I = [
  _hoisted_2$2b,
  _hoisted_3$25
];
function _sfc_render$2n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2i, _hoisted_4$I);
}
var medal = /* @__PURE__ */ _export_sfc$1(_sfc_main$2n, [["render", _sfc_render$2n]]);
const _sfc_main$2m = defineComponent$1({
  name: "Menu"
});
const _hoisted_1$2h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1);
const _hoisted_3$24 = [
  _hoisted_2$2a
];
function _sfc_render$2m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2h, _hoisted_3$24);
}
var menu = /* @__PURE__ */ _export_sfc$1(_sfc_main$2m, [["render", _sfc_render$2m]]);
const _sfc_main$2l = defineComponent$1({
  name: "MessageBox"
});
const _hoisted_1$2g = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$29 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1);
const _hoisted_3$23 = [
  _hoisted_2$29
];
function _sfc_render$2l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2g, _hoisted_3$23);
}
var messageBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$2l, [["render", _sfc_render$2l]]);
const _sfc_main$2k = defineComponent$1({
  name: "Message"
});
const _hoisted_1$2f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$28 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$22 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1);
const _hoisted_4$H = [
  _hoisted_2$28,
  _hoisted_3$22
];
function _sfc_render$2k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2f, _hoisted_4$H);
}
var message = /* @__PURE__ */ _export_sfc$1(_sfc_main$2k, [["render", _sfc_render$2k]]);
const _sfc_main$2j = defineComponent$1({
  name: "Mic"
});
const _hoisted_1$2e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$27 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1);
const _hoisted_3$21 = [
  _hoisted_2$27
];
function _sfc_render$2j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2e, _hoisted_3$21);
}
var mic = /* @__PURE__ */ _export_sfc$1(_sfc_main$2j, [["render", _sfc_render$2j]]);
const _sfc_main$2i = defineComponent$1({
  name: "Microphone"
});
const _hoisted_1$2d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$26 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1);
const _hoisted_3$20 = [
  _hoisted_2$26
];
function _sfc_render$2i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2d, _hoisted_3$20);
}
var microphone = /* @__PURE__ */ _export_sfc$1(_sfc_main$2i, [["render", _sfc_render$2i]]);
const _sfc_main$2h = defineComponent$1({
  name: "MilkTea"
});
const _hoisted_1$2c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$25 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1);
const _hoisted_3$1$ = [
  _hoisted_2$25
];
function _sfc_render$2h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2c, _hoisted_3$1$);
}
var milkTea = /* @__PURE__ */ _export_sfc$1(_sfc_main$2h, [["render", _sfc_render$2h]]);
const _sfc_main$2g = defineComponent$1({
  name: "Minus"
});
const _hoisted_1$2b = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$24 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1);
const _hoisted_3$1_ = [
  _hoisted_2$24
];
function _sfc_render$2g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2b, _hoisted_3$1_);
}
var minus = /* @__PURE__ */ _export_sfc$1(_sfc_main$2g, [["render", _sfc_render$2g]]);
const _sfc_main$2f = defineComponent$1({
  name: "Money"
});
const _hoisted_1$2a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$23 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1);
const _hoisted_3$1Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1);
const _hoisted_4$G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
const _hoisted_5$f = [
  _hoisted_2$23,
  _hoisted_3$1Z,
  _hoisted_4$G
];
function _sfc_render$2f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2a, _hoisted_5$f);
}
var money = /* @__PURE__ */ _export_sfc$1(_sfc_main$2f, [["render", _sfc_render$2f]]);
const _sfc_main$2e = defineComponent$1({
  name: "Monitor"
});
const _hoisted_1$29 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$22 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1);
const _hoisted_3$1Y = [
  _hoisted_2$22
];
function _sfc_render$2e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$29, _hoisted_3$1Y);
}
var monitor = /* @__PURE__ */ _export_sfc$1(_sfc_main$2e, [["render", _sfc_render$2e]]);
const _sfc_main$2d = defineComponent$1({
  name: "MoonNight"
});
const _hoisted_1$28 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$21 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1);
const _hoisted_3$1X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$F = [
  _hoisted_2$21,
  _hoisted_3$1X
];
function _sfc_render$2d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$28, _hoisted_4$F);
}
var moonNight = /* @__PURE__ */ _export_sfc$1(_sfc_main$2d, [["render", _sfc_render$2d]]);
const _sfc_main$2c = defineComponent$1({
  name: "Moon"
});
const _hoisted_1$27 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$20 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1);
const _hoisted_3$1W = [
  _hoisted_2$20
];
function _sfc_render$2c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$27, _hoisted_3$1W);
}
var moon = /* @__PURE__ */ _export_sfc$1(_sfc_main$2c, [["render", _sfc_render$2c]]);
const _sfc_main$2b = defineComponent$1({
  name: "MoreFilled"
});
const _hoisted_1$26 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1$ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1);
const _hoisted_3$1V = [
  _hoisted_2$1$
];
function _sfc_render$2b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$26, _hoisted_3$1V);
}
var moreFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$2b, [["render", _sfc_render$2b]]);
const _sfc_main$2a = defineComponent$1({
  name: "More"
});
const _hoisted_1$25 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1);
const _hoisted_3$1U = [
  _hoisted_2$1_
];
function _sfc_render$2a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$25, _hoisted_3$1U);
}
var more = /* @__PURE__ */ _export_sfc$1(_sfc_main$2a, [["render", _sfc_render$2a]]);
const _sfc_main$29 = defineComponent$1({
  name: "MostlyCloudy"
});
const _hoisted_1$24 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1);
const _hoisted_3$1T = [
  _hoisted_2$1Z
];
function _sfc_render$29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$24, _hoisted_3$1T);
}
var mostlyCloudy = /* @__PURE__ */ _export_sfc$1(_sfc_main$29, [["render", _sfc_render$29]]);
const _sfc_main$28 = defineComponent$1({
  name: "Mouse"
});
const _hoisted_1$23 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1);
const _hoisted_3$1S = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1);
const _hoisted_4$E = [
  _hoisted_2$1Y,
  _hoisted_3$1S
];
function _sfc_render$28(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$23, _hoisted_4$E);
}
var mouse = /* @__PURE__ */ _export_sfc$1(_sfc_main$28, [["render", _sfc_render$28]]);
const _sfc_main$27 = defineComponent$1({
  name: "Mug"
});
const _hoisted_1$22 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1);
const _hoisted_3$1R = [
  _hoisted_2$1X
];
function _sfc_render$27(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$22, _hoisted_3$1R);
}
var mug = /* @__PURE__ */ _export_sfc$1(_sfc_main$27, [["render", _sfc_render$27]]);
const _sfc_main$26 = defineComponent$1({
  name: "MuteNotification"
});
const _hoisted_1$21 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1W = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1);
const _hoisted_3$1Q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
const _hoisted_4$D = [
  _hoisted_2$1W,
  _hoisted_3$1Q
];
function _sfc_render$26(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$21, _hoisted_4$D);
}
var muteNotification = /* @__PURE__ */ _export_sfc$1(_sfc_main$26, [["render", _sfc_render$26]]);
const _sfc_main$25 = defineComponent$1({
  name: "Mute"
});
const _hoisted_1$20 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1V = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1);
const _hoisted_3$1P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
const _hoisted_4$C = [
  _hoisted_2$1V,
  _hoisted_3$1P
];
function _sfc_render$25(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$20, _hoisted_4$C);
}
var mute = /* @__PURE__ */ _export_sfc$1(_sfc_main$25, [["render", _sfc_render$25]]);
const _sfc_main$24 = defineComponent$1({
  name: "NoSmoking"
});
const _hoisted_1$1$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1U = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
const _hoisted_3$1O = [
  _hoisted_2$1U
];
function _sfc_render$24(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1$, _hoisted_3$1O);
}
var noSmoking = /* @__PURE__ */ _export_sfc$1(_sfc_main$24, [["render", _sfc_render$24]]);
const _sfc_main$23 = defineComponent$1({
  name: "Notebook"
});
const _hoisted_1$1_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1T = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$1N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$B = [
  _hoisted_2$1T,
  _hoisted_3$1N
];
function _sfc_render$23(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1_, _hoisted_4$B);
}
var notebook = /* @__PURE__ */ _export_sfc$1(_sfc_main$23, [["render", _sfc_render$23]]);
const _sfc_main$22 = defineComponent$1({
  name: "Notification"
});
const _hoisted_1$1Z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1S = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1);
const _hoisted_3$1M = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_4$A = [
  _hoisted_2$1S,
  _hoisted_3$1M
];
function _sfc_render$22(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1Z, _hoisted_4$A);
}
var notification = /* @__PURE__ */ _export_sfc$1(_sfc_main$22, [["render", _sfc_render$22]]);
const _sfc_main$21 = defineComponent$1({
  name: "Odometer"
});
const _hoisted_1$1Y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1R = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$1L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1);
const _hoisted_5$e = [
  _hoisted_2$1R,
  _hoisted_3$1L,
  _hoisted_4$z
];
function _sfc_render$21(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1Y, _hoisted_5$e);
}
var odometer = /* @__PURE__ */ _export_sfc$1(_sfc_main$21, [["render", _sfc_render$21]]);
const _sfc_main$20 = defineComponent$1({
  name: "OfficeBuilding"
});
const _hoisted_1$1X = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1Q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$1K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1);
const _hoisted_4$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_5$d = [
  _hoisted_2$1Q,
  _hoisted_3$1K,
  _hoisted_4$y
];
function _sfc_render$20(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1X, _hoisted_5$d);
}
var officeBuilding = /* @__PURE__ */ _export_sfc$1(_sfc_main$20, [["render", _sfc_render$20]]);
const _sfc_main$1$ = defineComponent$1({
  name: "Open"
});
const _hoisted_1$1W = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$1J = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
const _hoisted_4$x = [
  _hoisted_2$1P,
  _hoisted_3$1J
];
function _sfc_render$1$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1W, _hoisted_4$x);
}
var open = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$, [["render", _sfc_render$1$]]);
const _sfc_main$1_ = defineComponent$1({
  name: "Operation"
});
const _hoisted_1$1V = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1O = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1);
const _hoisted_3$1I = [
  _hoisted_2$1O
];
function _sfc_render$1_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1V, _hoisted_3$1I);
}
var operation = /* @__PURE__ */ _export_sfc$1(_sfc_main$1_, [["render", _sfc_render$1_]]);
const _sfc_main$1Z = defineComponent$1({
  name: "Opportunity"
});
const _hoisted_1$1U = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1);
const _hoisted_3$1H = [
  _hoisted_2$1N
];
function _sfc_render$1Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1U, _hoisted_3$1H);
}
var opportunity = /* @__PURE__ */ _export_sfc$1(_sfc_main$1Z, [["render", _sfc_render$1Z]]);
const _sfc_main$1Y = defineComponent$1({
  name: "Orange"
});
const _hoisted_1$1T = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1M = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1);
const _hoisted_3$1G = [
  _hoisted_2$1M
];
function _sfc_render$1Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1T, _hoisted_3$1G);
}
var orange = /* @__PURE__ */ _export_sfc$1(_sfc_main$1Y, [["render", _sfc_render$1Y]]);
const _sfc_main$1X = defineComponent$1({
  name: "Paperclip"
});
const _hoisted_1$1S = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1);
const _hoisted_3$1F = [
  _hoisted_2$1L
];
function _sfc_render$1X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1S, _hoisted_3$1F);
}
var paperclip = /* @__PURE__ */ _export_sfc$1(_sfc_main$1X, [["render", _sfc_render$1X]]);
const _sfc_main$1W = defineComponent$1({
  name: "PartlyCloudy"
});
const _hoisted_1$1R = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
const _hoisted_3$1E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1);
const _hoisted_4$w = [
  _hoisted_2$1K,
  _hoisted_3$1E
];
function _sfc_render$1W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1R, _hoisted_4$w);
}
var partlyCloudy = /* @__PURE__ */ _export_sfc$1(_sfc_main$1W, [["render", _sfc_render$1W]]);
const _sfc_main$1V = defineComponent$1({
  name: "Pear"
});
const _hoisted_1$1Q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1J = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1);
const _hoisted_3$1D = [
  _hoisted_2$1J
];
function _sfc_render$1V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1Q, _hoisted_3$1D);
}
var pear = /* @__PURE__ */ _export_sfc$1(_sfc_main$1V, [["render", _sfc_render$1V]]);
const _sfc_main$1U = defineComponent$1({
  name: "PhoneFilled"
});
const _hoisted_1$1P = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1I = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1);
const _hoisted_3$1C = [
  _hoisted_2$1I
];
function _sfc_render$1U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1P, _hoisted_3$1C);
}
var phoneFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$1U, [["render", _sfc_render$1U]]);
const _sfc_main$1T = defineComponent$1({
  name: "Phone"
});
const _hoisted_1$1O = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1H = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1);
const _hoisted_3$1B = [
  _hoisted_2$1H
];
function _sfc_render$1T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1O, _hoisted_3$1B);
}
var phone = /* @__PURE__ */ _export_sfc$1(_sfc_main$1T, [["render", _sfc_render$1T]]);
const _sfc_main$1S = defineComponent$1({
  name: "PictureFilled"
});
const _hoisted_1$1N = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1);
const _hoisted_3$1A = [
  _hoisted_2$1G
];
function _sfc_render$1S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1N, _hoisted_3$1A);
}
var pictureFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$1S, [["render", _sfc_render$1S]]);
const _sfc_main$1R = defineComponent$1({
  name: "PictureRounded"
});
const _hoisted_1$1M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1F = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1);
const _hoisted_3$1z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1);
const _hoisted_4$v = [
  _hoisted_2$1F,
  _hoisted_3$1z
];
function _sfc_render$1R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1M, _hoisted_4$v);
}
var pictureRounded = /* @__PURE__ */ _export_sfc$1(_sfc_main$1R, [["render", _sfc_render$1R]]);
const _sfc_main$1Q = defineComponent$1({
  name: "Picture"
});
const _hoisted_1$1L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$1y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1);
const _hoisted_4$u = [
  _hoisted_2$1E,
  _hoisted_3$1y
];
function _sfc_render$1Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1L, _hoisted_4$u);
}
var picture = /* @__PURE__ */ _export_sfc$1(_sfc_main$1Q, [["render", _sfc_render$1Q]]);
const _sfc_main$1P = defineComponent$1({
  name: "PieChart"
});
const _hoisted_1$1K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1D = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1);
const _hoisted_3$1x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1);
const _hoisted_4$t = [
  _hoisted_2$1D,
  _hoisted_3$1x
];
function _sfc_render$1P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1K, _hoisted_4$t);
}
var pieChart = /* @__PURE__ */ _export_sfc$1(_sfc_main$1P, [["render", _sfc_render$1P]]);
const _sfc_main$1O = defineComponent$1({
  name: "Place"
});
const _hoisted_1$1J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
const _hoisted_3$1w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1);
const _hoisted_5$c = [
  _hoisted_2$1C,
  _hoisted_3$1w,
  _hoisted_4$s
];
function _sfc_render$1O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1J, _hoisted_5$c);
}
var place = /* @__PURE__ */ _export_sfc$1(_sfc_main$1O, [["render", _sfc_render$1O]]);
const _sfc_main$1N = defineComponent$1({
  name: "Platform"
});
const _hoisted_1$1I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1);
const _hoisted_3$1v = [
  _hoisted_2$1B
];
function _sfc_render$1N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1I, _hoisted_3$1v);
}
var platform = /* @__PURE__ */ _export_sfc$1(_sfc_main$1N, [["render", _sfc_render$1N]]);
const _sfc_main$1M = defineComponent$1({
  name: "Plus"
});
const _hoisted_1$1H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1);
const _hoisted_3$1u = [
  _hoisted_2$1A
];
function _sfc_render$1M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1H, _hoisted_3$1u);
}
var plus = /* @__PURE__ */ _export_sfc$1(_sfc_main$1M, [["render", _sfc_render$1M]]);
const _sfc_main$1L = defineComponent$1({
  name: "Pointer"
});
const _hoisted_1$1G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1);
const _hoisted_3$1t = [
  _hoisted_2$1z
];
function _sfc_render$1L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1G, _hoisted_3$1t);
}
var pointer = /* @__PURE__ */ _export_sfc$1(_sfc_main$1L, [["render", _sfc_render$1L]]);
const _sfc_main$1K = defineComponent$1({
  name: "Position"
});
const _hoisted_1$1F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1);
const _hoisted_3$1s = [
  _hoisted_2$1y
];
function _sfc_render$1K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1F, _hoisted_3$1s);
}
var position = /* @__PURE__ */ _export_sfc$1(_sfc_main$1K, [["render", _sfc_render$1K]]);
const _sfc_main$1J = defineComponent$1({
  name: "Postcard"
});
const _hoisted_1$1E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$1r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$r = [
  _hoisted_2$1x,
  _hoisted_3$1r
];
function _sfc_render$1J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1E, _hoisted_4$r);
}
var postcard = /* @__PURE__ */ _export_sfc$1(_sfc_main$1J, [["render", _sfc_render$1J]]);
const _sfc_main$1I = defineComponent$1({
  name: "Pouring"
});
const _hoisted_1$1D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$1q = [
  _hoisted_2$1w
];
function _sfc_render$1I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1D, _hoisted_3$1q);
}
var pouring = /* @__PURE__ */ _export_sfc$1(_sfc_main$1I, [["render", _sfc_render$1I]]);
const _sfc_main$1H = defineComponent$1({
  name: "Present"
});
const _hoisted_1$1C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1);
const _hoisted_3$1p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_6$6 = [
  _hoisted_2$1v,
  _hoisted_3$1p,
  _hoisted_4$q,
  _hoisted_5$b
];
function _sfc_render$1H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1C, _hoisted_6$6);
}
var present = /* @__PURE__ */ _export_sfc$1(_sfc_main$1H, [["render", _sfc_render$1H]]);
const _sfc_main$1G = defineComponent$1({
  name: "PriceTag"
});
const _hoisted_1$1B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$1o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_4$p = [
  _hoisted_2$1u,
  _hoisted_3$1o
];
function _sfc_render$1G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1B, _hoisted_4$p);
}
var priceTag = /* @__PURE__ */ _export_sfc$1(_sfc_main$1G, [["render", _sfc_render$1G]]);
const _sfc_main$1F = defineComponent$1({
  name: "Printer"
});
const _hoisted_1$1A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1);
const _hoisted_3$1n = [
  _hoisted_2$1t
];
function _sfc_render$1F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1A, _hoisted_3$1n);
}
var printer = /* @__PURE__ */ _export_sfc$1(_sfc_main$1F, [["render", _sfc_render$1F]]);
const _sfc_main$1E = defineComponent$1({
  name: "Promotion"
});
const _hoisted_1$1z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1);
const _hoisted_3$1m = [
  _hoisted_2$1s
];
function _sfc_render$1E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1z, _hoisted_3$1m);
}
var promotion = /* @__PURE__ */ _export_sfc$1(_sfc_main$1E, [["render", _sfc_render$1E]]);
const _sfc_main$1D = defineComponent$1({
  name: "QuestionFilled"
});
const _hoisted_1$1y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1);
const _hoisted_3$1l = [
  _hoisted_2$1r
];
function _sfc_render$1D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1y, _hoisted_3$1l);
}
var questionFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$1D, [["render", _sfc_render$1D]]);
const _sfc_main$1C = defineComponent$1({
  name: "Rank"
});
const _hoisted_1$1x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1);
const _hoisted_3$1k = [
  _hoisted_2$1q
];
function _sfc_render$1C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1x, _hoisted_3$1k);
}
var rank = /* @__PURE__ */ _export_sfc$1(_sfc_main$1C, [["render", _sfc_render$1C]]);
const _sfc_main$1B = defineComponent$1({
  name: "ReadingLamp"
});
const _hoisted_1$1w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1);
const _hoisted_3$1j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1);
const _hoisted_4$o = [
  _hoisted_2$1p,
  _hoisted_3$1j
];
function _sfc_render$1B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1w, _hoisted_4$o);
}
var readingLamp = /* @__PURE__ */ _export_sfc$1(_sfc_main$1B, [["render", _sfc_render$1B]]);
const _sfc_main$1A = defineComponent$1({
  name: "Reading"
});
const _hoisted_1$1v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1);
const _hoisted_3$1i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1);
const _hoisted_4$n = [
  _hoisted_2$1o,
  _hoisted_3$1i
];
function _sfc_render$1A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1v, _hoisted_4$n);
}
var reading = /* @__PURE__ */ _export_sfc$1(_sfc_main$1A, [["render", _sfc_render$1A]]);
const _sfc_main$1z = defineComponent$1({
  name: "RefreshLeft"
});
const _hoisted_1$1u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1);
const _hoisted_3$1h = [
  _hoisted_2$1n
];
function _sfc_render$1z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1u, _hoisted_3$1h);
}
var refreshLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$1z, [["render", _sfc_render$1z]]);
const _sfc_main$1y = defineComponent$1({
  name: "RefreshRight"
});
const _hoisted_1$1t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1);
const _hoisted_3$1g = [
  _hoisted_2$1m
];
function _sfc_render$1y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1t, _hoisted_3$1g);
}
var refreshRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$1y, [["render", _sfc_render$1y]]);
const _sfc_main$1x = defineComponent$1({
  name: "Refresh"
});
const _hoisted_1$1s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
const _hoisted_3$1f = [
  _hoisted_2$1l
];
function _sfc_render$1x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1s, _hoisted_3$1f);
}
var refresh = /* @__PURE__ */ _export_sfc$1(_sfc_main$1x, [["render", _sfc_render$1x]]);
const _sfc_main$1w = defineComponent$1({
  name: "Refrigerator"
});
const _hoisted_1$1r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1);
const _hoisted_3$1e = [
  _hoisted_2$1k
];
function _sfc_render$1w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1r, _hoisted_3$1e);
}
var refrigerator = /* @__PURE__ */ _export_sfc$1(_sfc_main$1w, [["render", _sfc_render$1w]]);
const _sfc_main$1v = defineComponent$1({
  name: "RemoveFilled"
});
const _hoisted_1$1q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1);
const _hoisted_3$1d = [
  _hoisted_2$1j
];
function _sfc_render$1v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1q, _hoisted_3$1d);
}
var removeFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$1v, [["render", _sfc_render$1v]]);
const _sfc_main$1u = defineComponent$1({
  name: "Remove"
});
const _hoisted_1$1p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$1c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_4$m = [
  _hoisted_2$1i,
  _hoisted_3$1c
];
function _sfc_render$1u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1p, _hoisted_4$m);
}
var remove = /* @__PURE__ */ _export_sfc$1(_sfc_main$1u, [["render", _sfc_render$1u]]);
const _sfc_main$1t = defineComponent$1({
  name: "Right"
});
const _hoisted_1$1o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1);
const _hoisted_3$1b = [
  _hoisted_2$1h
];
function _sfc_render$1t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1o, _hoisted_3$1b);
}
var right = /* @__PURE__ */ _export_sfc$1(_sfc_main$1t, [["render", _sfc_render$1t]]);
const _sfc_main$1s = defineComponent$1({
  name: "ScaleToOriginal"
});
const _hoisted_1$1n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1);
const _hoisted_3$1a = [
  _hoisted_2$1g
];
function _sfc_render$1s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1n, _hoisted_3$1a);
}
var scaleToOriginal = /* @__PURE__ */ _export_sfc$1(_sfc_main$1s, [["render", _sfc_render$1s]]);
const _sfc_main$1r = defineComponent$1({
  name: "School"
});
const _hoisted_1$1m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$19 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1);
const _hoisted_4$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1);
const _hoisted_5$a = [
  _hoisted_2$1f,
  _hoisted_3$19,
  _hoisted_4$l
];
function _sfc_render$1r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1m, _hoisted_5$a);
}
var school = /* @__PURE__ */ _export_sfc$1(_sfc_main$1r, [["render", _sfc_render$1r]]);
const _sfc_main$1q = defineComponent$1({
  name: "Scissor"
});
const _hoisted_1$1l = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1);
const _hoisted_3$18 = [
  _hoisted_2$1e
];
function _sfc_render$1q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1l, _hoisted_3$18);
}
var scissor = /* @__PURE__ */ _export_sfc$1(_sfc_main$1q, [["render", _sfc_render$1q]]);
const _sfc_main$1p = defineComponent$1({
  name: "Search"
});
const _hoisted_1$1k = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
const _hoisted_3$17 = [
  _hoisted_2$1d
];
function _sfc_render$1p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1k, _hoisted_3$17);
}
var search = /* @__PURE__ */ _export_sfc$1(_sfc_main$1p, [["render", _sfc_render$1p]]);
const _sfc_main$1o = defineComponent$1({
  name: "Select"
});
const _hoisted_1$1j = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1);
const _hoisted_3$16 = [
  _hoisted_2$1c
];
function _sfc_render$1o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1j, _hoisted_3$16);
}
var select = /* @__PURE__ */ _export_sfc$1(_sfc_main$1o, [["render", _sfc_render$1o]]);
const _sfc_main$1n = defineComponent$1({
  name: "Sell"
});
const _hoisted_1$1i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1b = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1);
const _hoisted_3$15 = [
  _hoisted_2$1b
];
function _sfc_render$1n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1i, _hoisted_3$15);
}
var sell = /* @__PURE__ */ _export_sfc$1(_sfc_main$1n, [["render", _sfc_render$1n]]);
const _sfc_main$1m = defineComponent$1({
  name: "SemiSelect"
});
const _hoisted_1$1h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1);
const _hoisted_3$14 = [
  _hoisted_2$1a
];
function _sfc_render$1m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1h, _hoisted_3$14);
}
var semiSelect = /* @__PURE__ */ _export_sfc$1(_sfc_main$1m, [["render", _sfc_render$1m]]);
const _sfc_main$1l = defineComponent$1({
  name: "Service"
});
const _hoisted_1$1g = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$19 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1);
const _hoisted_3$13 = [
  _hoisted_2$19
];
function _sfc_render$1l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1g, _hoisted_3$13);
}
var service = /* @__PURE__ */ _export_sfc$1(_sfc_main$1l, [["render", _sfc_render$1l]]);
const _sfc_main$1k = defineComponent$1({
  name: "SetUp"
});
const _hoisted_1$1f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$18 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1);
const _hoisted_3$12 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_4$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_6$5 = [
  _hoisted_2$18,
  _hoisted_3$12,
  _hoisted_4$k,
  _hoisted_5$9
];
function _sfc_render$1k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1f, _hoisted_6$5);
}
var setUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$1k, [["render", _sfc_render$1k]]);
const _sfc_main$1j = defineComponent$1({
  name: "Setting"
});
const _hoisted_1$1e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$17 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1);
const _hoisted_3$11 = [
  _hoisted_2$17
];
function _sfc_render$1j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1e, _hoisted_3$11);
}
var setting = /* @__PURE__ */ _export_sfc$1(_sfc_main$1j, [["render", _sfc_render$1j]]);
const _sfc_main$1i = defineComponent$1({
  name: "Share"
});
const _hoisted_1$1d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$16 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1);
const _hoisted_3$10 = [
  _hoisted_2$16
];
function _sfc_render$1i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1d, _hoisted_3$10);
}
var share = /* @__PURE__ */ _export_sfc$1(_sfc_main$1i, [["render", _sfc_render$1i]]);
const _sfc_main$1h = defineComponent$1({
  name: "Ship"
});
const _hoisted_1$1c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$15 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1);
const _hoisted_3$$ = [
  _hoisted_2$15
];
function _sfc_render$1h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1c, _hoisted_3$$);
}
var ship = /* @__PURE__ */ _export_sfc$1(_sfc_main$1h, [["render", _sfc_render$1h]]);
const _sfc_main$1g = defineComponent$1({
  name: "Shop"
});
const _hoisted_1$1b = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$14 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1);
const _hoisted_3$_ = [
  _hoisted_2$14
];
function _sfc_render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1b, _hoisted_3$_);
}
var shop = /* @__PURE__ */ _export_sfc$1(_sfc_main$1g, [["render", _sfc_render$1g]]);
const _sfc_main$1f = defineComponent$1({
  name: "ShoppingBag"
});
const _hoisted_1$1a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$13 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1);
const _hoisted_3$Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1);
const _hoisted_4$j = [
  _hoisted_2$13,
  _hoisted_3$Z
];
function _sfc_render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1a, _hoisted_4$j);
}
var shoppingBag = /* @__PURE__ */ _export_sfc$1(_sfc_main$1f, [["render", _sfc_render$1f]]);
const _sfc_main$1e = defineComponent$1({
  name: "ShoppingCartFull"
});
const _hoisted_1$19 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$12 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
const _hoisted_3$Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1);
const _hoisted_4$i = [
  _hoisted_2$12,
  _hoisted_3$Y
];
function _sfc_render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$19, _hoisted_4$i);
}
var shoppingCartFull = /* @__PURE__ */ _export_sfc$1(_sfc_main$1e, [["render", _sfc_render$1e]]);
const _sfc_main$1d = defineComponent$1({
  name: "ShoppingCart"
});
const _hoisted_1$18 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$11 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
const _hoisted_3$X = [
  _hoisted_2$11
];
function _sfc_render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$18, _hoisted_3$X);
}
var shoppingCart = /* @__PURE__ */ _export_sfc$1(_sfc_main$1d, [["render", _sfc_render$1d]]);
const _sfc_main$1c = defineComponent$1({
  name: "Smoking"
});
const _hoisted_1$17 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$10 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$W = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
const _hoisted_4$h = [
  _hoisted_2$10,
  _hoisted_3$W
];
function _sfc_render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$17, _hoisted_4$h);
}
var smoking = /* @__PURE__ */ _export_sfc$1(_sfc_main$1c, [["render", _sfc_render$1c]]);
const _sfc_main$1b = defineComponent$1({
  name: "Soccer"
});
const _hoisted_1$16 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$$ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1);
const _hoisted_3$V = [
  _hoisted_2$$
];
function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$16, _hoisted_3$V);
}
var soccer = /* @__PURE__ */ _export_sfc$1(_sfc_main$1b, [["render", _sfc_render$1b]]);
const _sfc_main$1a = defineComponent$1({
  name: "SoldOut"
});
const _hoisted_1$15 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$_ = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1);
const _hoisted_3$U = [
  _hoisted_2$_
];
function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$15, _hoisted_3$U);
}
var soldOut = /* @__PURE__ */ _export_sfc$1(_sfc_main$1a, [["render", _sfc_render$1a]]);
const _sfc_main$19 = defineComponent$1({
  name: "SortDown"
});
const _hoisted_1$14 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$Z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1);
const _hoisted_3$T = [
  _hoisted_2$Z
];
function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$14, _hoisted_3$T);
}
var sortDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$19, [["render", _sfc_render$19]]);
const _sfc_main$18 = defineComponent$1({
  name: "SortUp"
});
const _hoisted_1$13 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$Y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1);
const _hoisted_3$S = [
  _hoisted_2$Y
];
function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$13, _hoisted_3$S);
}
var sortUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$18, [["render", _sfc_render$18]]);
const _sfc_main$17 = defineComponent$1({
  name: "Sort"
});
const _hoisted_1$12 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$X = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1);
const _hoisted_3$R = [
  _hoisted_2$X
];
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$12, _hoisted_3$R);
}
var sort = /* @__PURE__ */ _export_sfc$1(_sfc_main$17, [["render", _sfc_render$17]]);
const _sfc_main$16 = defineComponent$1({
  name: "Stamp"
});
const _hoisted_1$11 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$W = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1);
const _hoisted_3$Q = [
  _hoisted_2$W
];
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$11, _hoisted_3$Q);
}
var stamp = /* @__PURE__ */ _export_sfc$1(_sfc_main$16, [["render", _sfc_render$16]]);
const _sfc_main$15 = defineComponent$1({
  name: "StarFilled"
});
const _hoisted_1$10 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$V = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1);
const _hoisted_3$P = [
  _hoisted_2$V
];
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$10, _hoisted_3$P);
}
var starFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$15, [["render", _sfc_render$15]]);
const _sfc_main$14 = defineComponent$1({
  name: "Star"
});
const _hoisted_1$$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$U = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1);
const _hoisted_3$O = [
  _hoisted_2$U
];
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$$, _hoisted_3$O);
}
var star = /* @__PURE__ */ _export_sfc$1(_sfc_main$14, [["render", _sfc_render$14]]);
const _sfc_main$13 = defineComponent$1({
  name: "Stopwatch"
});
const _hoisted_1$_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$T = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1);
const _hoisted_4$g = [
  _hoisted_2$T,
  _hoisted_3$N
];
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$_, _hoisted_4$g);
}
var stopwatch = /* @__PURE__ */ _export_sfc$1(_sfc_main$13, [["render", _sfc_render$13]]);
const _sfc_main$12 = defineComponent$1({
  name: "SuccessFilled"
});
const _hoisted_1$Z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$S = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
const _hoisted_3$M = [
  _hoisted_2$S
];
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Z, _hoisted_3$M);
}
var successFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$12, [["render", _sfc_render$12]]);
const _sfc_main$11 = defineComponent$1({
  name: "Sugar"
});
const _hoisted_1$Y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$R = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1);
const _hoisted_3$L = [
  _hoisted_2$R
];
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Y, _hoisted_3$L);
}
var sugar = /* @__PURE__ */ _export_sfc$1(_sfc_main$11, [["render", _sfc_render$11]]);
const _sfc_main$10 = defineComponent$1({
  name: "Suitcase"
});
const _hoisted_1$X = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$Q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_4$f = [
  _hoisted_2$Q,
  _hoisted_3$K
];
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$X, _hoisted_4$f);
}
var suitcase = /* @__PURE__ */ _export_sfc$1(_sfc_main$10, [["render", _sfc_render$10]]);
const _sfc_main$$ = defineComponent$1({
  name: "Sunny"
});
const _hoisted_1$W = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$P = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1);
const _hoisted_3$J = [
  _hoisted_2$P
];
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$W, _hoisted_3$J);
}
var sunny = /* @__PURE__ */ _export_sfc$1(_sfc_main$$, [["render", _sfc_render$$]]);
const _sfc_main$_ = defineComponent$1({
  name: "Sunrise"
});
const _hoisted_1$V = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$O = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1);
const _hoisted_3$I = [
  _hoisted_2$O
];
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$V, _hoisted_3$I);
}
var sunrise = /* @__PURE__ */ _export_sfc$1(_sfc_main$_, [["render", _sfc_render$_]]);
const _sfc_main$Z = defineComponent$1({
  name: "Sunset"
});
const _hoisted_1$U = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$N = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$H = [
  _hoisted_2$N
];
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$U, _hoisted_3$H);
}
var sunset = /* @__PURE__ */ _export_sfc$1(_sfc_main$Z, [["render", _sfc_render$Z]]);
const _sfc_main$Y = defineComponent$1({
  name: "SwitchButton"
});
const _hoisted_1$T = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$M = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1);
const _hoisted_3$G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1);
const _hoisted_4$e = [
  _hoisted_2$M,
  _hoisted_3$G
];
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$T, _hoisted_4$e);
}
var switchButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$Y, [["render", _sfc_render$Y]]);
const _sfc_main$X = defineComponent$1({
  name: "Switch"
});
const _hoisted_1$S = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$L = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1);
const _hoisted_3$F = [
  _hoisted_2$L
];
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$S, _hoisted_3$F);
}
var _switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$X, [["render", _sfc_render$X]]);
const _sfc_main$W = defineComponent$1({
  name: "TakeawayBox"
});
const _hoisted_1$R = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$K = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$E = [
  _hoisted_2$K
];
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$R, _hoisted_3$E);
}
var takeawayBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$W, [["render", _sfc_render$W]]);
const _sfc_main$V = defineComponent$1({
  name: "Ticket"
});
const _hoisted_1$Q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$J = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1);
const _hoisted_3$D = [
  _hoisted_2$J
];
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Q, _hoisted_3$D);
}
var ticket = /* @__PURE__ */ _export_sfc$1(_sfc_main$V, [["render", _sfc_render$V]]);
const _sfc_main$U = defineComponent$1({
  name: "Tickets"
});
const _hoisted_1$P = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$I = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
const _hoisted_3$C = [
  _hoisted_2$I
];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$P, _hoisted_3$C);
}
var tickets = /* @__PURE__ */ _export_sfc$1(_sfc_main$U, [["render", _sfc_render$U]]);
const _sfc_main$T = defineComponent$1({
  name: "Timer"
});
const _hoisted_1$O = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$H = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1);
const _hoisted_5$8 = [
  _hoisted_2$H,
  _hoisted_3$B,
  _hoisted_4$d
];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$O, _hoisted_5$8);
}
var timer = /* @__PURE__ */ _export_sfc$1(_sfc_main$T, [["render", _sfc_render$T]]);
const _sfc_main$S = defineComponent$1({
  name: "ToiletPaper"
});
const _hoisted_1$N = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$G = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1);
const _hoisted_3$A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1);
const _hoisted_4$c = [
  _hoisted_2$G,
  _hoisted_3$A
];
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_4$c);
}
var toiletPaper = /* @__PURE__ */ _export_sfc$1(_sfc_main$S, [["render", _sfc_render$S]]);
const _sfc_main$R = defineComponent$1({
  name: "Tools"
});
const _hoisted_1$M = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$F = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1);
const _hoisted_3$z = [
  _hoisted_2$F
];
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$z);
}
var tools = /* @__PURE__ */ _export_sfc$1(_sfc_main$R, [["render", _sfc_render$R]]);
const _sfc_main$Q = defineComponent$1({
  name: "TopLeft"
});
const _hoisted_1$L = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$E = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1);
const _hoisted_3$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$E,
  _hoisted_3$y
];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_4$b);
}
var topLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$Q, [["render", _sfc_render$Q]]);
const _sfc_main$P = defineComponent$1({
  name: "TopRight"
});
const _hoisted_1$K = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$D = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1);
const _hoisted_3$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$D,
  _hoisted_3$x
];
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_4$a);
}
var topRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$P, [["render", _sfc_render$P]]);
const _sfc_main$O = defineComponent$1({
  name: "Top"
});
const _hoisted_1$J = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$C = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$C
];
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$w);
}
var top = /* @__PURE__ */ _export_sfc$1(_sfc_main$O, [["render", _sfc_render$O]]);
const _sfc_main$N = defineComponent$1({
  name: "TrendCharts"
});
const _hoisted_1$I = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$B = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1);
const _hoisted_3$v = [
  _hoisted_2$B
];
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_3$v);
}
var trendCharts = /* @__PURE__ */ _export_sfc$1(_sfc_main$N, [["render", _sfc_render$N]]);
const _sfc_main$M = defineComponent$1({
  name: "Trophy"
});
const _hoisted_1$H = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$A = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$A
];
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_3$u);
}
var trophy = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["render", _sfc_render$M]]);
const _sfc_main$L = defineComponent$1({
  name: "TurnOff"
});
const _hoisted_1$G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$z = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$z,
  _hoisted_3$t
];
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_4$9);
}
var turnOff = /* @__PURE__ */ _export_sfc$1(_sfc_main$L, [["render", _sfc_render$L]]);
const _sfc_main$K = defineComponent$1({
  name: "Umbrella"
});
const _hoisted_1$F = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1);
const _hoisted_3$s = [
  _hoisted_2$y
];
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_3$s);
}
var umbrella = /* @__PURE__ */ _export_sfc$1(_sfc_main$K, [["render", _sfc_render$K]]);
const _sfc_main$J = defineComponent$1({
  name: "Unlock"
});
const _hoisted_1$E = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$x,
  _hoisted_3$r
];
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_4$8);
}
var unlock = /* @__PURE__ */ _export_sfc$1(_sfc_main$J, [["render", _sfc_render$J]]);
const _sfc_main$I = defineComponent$1({
  name: "UploadFilled"
});
const _hoisted_1$D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$w = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1);
const _hoisted_3$q = [
  _hoisted_2$w
];
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$q);
}
var uploadFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["render", _sfc_render$I]]);
const _sfc_main$H = defineComponent$1({
  name: "Upload"
});
const _hoisted_1$C = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$v = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$v
];
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_3$p);
}
var upload = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["render", _sfc_render$H]]);
const _sfc_main$G = defineComponent$1({
  name: "UserFilled"
});
const _hoisted_1$B = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$u
];
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$o);
}
var userFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["render", _sfc_render$G]]);
const _sfc_main$F = defineComponent$1({
  name: "User"
});
const _hoisted_1$A = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$t
];
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$n);
}
var user = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["render", _sfc_render$F]]);
const _sfc_main$E = defineComponent$1({
  name: "Van"
});
const _hoisted_1$z = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$s
];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_3$m);
}
var van = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["render", _sfc_render$E]]);
const _sfc_main$D = defineComponent$1({
  name: "VideoCameraFilled"
});
const _hoisted_1$y = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$r = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$r
];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$l);
}
var videoCameraFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["render", _sfc_render$D]]);
const _sfc_main$C = defineComponent$1({
  name: "VideoCamera"
});
const _hoisted_1$x = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$q
];
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$k);
}
var videoCamera = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render$C]]);
const _sfc_main$B = defineComponent$1({
  name: "VideoPause"
});
const _hoisted_1$w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$p
];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$j);
}
var videoPause = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["render", _sfc_render$B]]);
const _sfc_main$A = defineComponent$1({
  name: "VideoPlay"
});
const _hoisted_1$v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$o
];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$i);
}
var videoPlay = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["render", _sfc_render$A]]);
const _sfc_main$z = defineComponent$1({
  name: "View"
});
const _hoisted_1$u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$n
];
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_3$h);
}
var view = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["render", _sfc_render$z]]);
const _sfc_main$y = defineComponent$1({
  name: "WalletFilled"
});
const _hoisted_1$t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$m
];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$g);
}
var walletFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["render", _sfc_render$y]]);
const _sfc_main$x = defineComponent$1({
  name: "Wallet"
});
const _hoisted_1$s = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
const _hoisted_5$7 = [
  _hoisted_2$l,
  _hoisted_3$f,
  _hoisted_4$7
];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_5$7);
}
var wallet = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["render", _sfc_render$x]]);
const _sfc_main$w = defineComponent$1({
  name: "WarningFilled"
});
const _hoisted_1$r = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$k
];
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$e);
}
var warningFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["render", _sfc_render$w]]);
const _sfc_main$v = defineComponent$1({
  name: "Warning"
});
const _hoisted_1$q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$j
];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$d);
}
var warning = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$v]]);
const _sfc_main$u = defineComponent$1({
  name: "Watch"
});
const _hoisted_1$p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1);
const _hoisted_5$6 = [
  _hoisted_2$i,
  _hoisted_3$c,
  _hoisted_4$6
];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_5$6);
}
var watch = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$u]]);
const _sfc_main$t = defineComponent$1({
  name: "Watermelon"
});
const _hoisted_1$o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$h
];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$b);
}
var watermelon = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["render", _sfc_render$t]]);
const _sfc_main$s = defineComponent$1({
  name: "WindPower"
});
const _hoisted_1$n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$g
];
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$a);
}
var windPower = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["render", _sfc_render$s]]);
const _sfc_main$r = defineComponent$1({
  name: "ZoomIn"
});
const _hoisted_1$m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$f
];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$9);
}
var zoomIn = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$r]]);
const _sfc_main$q = defineComponent$1({
  name: "ZoomOut"
});
const _hoisted_1$l = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$e
];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$8);
}
var zoomOut = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$q]]);
var Icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: addLocation,
  Aim: aim,
  AlarmClock: alarmClock,
  Apple: apple,
  ArrowDownBold: arrowDownBold,
  ArrowDown: arrowDown,
  ArrowLeftBold: arrowLeftBold,
  ArrowLeft: arrowLeft,
  ArrowRightBold: arrowRightBold,
  ArrowRight: arrowRight,
  ArrowUpBold: arrowUpBold,
  ArrowUp: arrowUp,
  Avatar: avatar$1,
  Back: back,
  Baseball: baseball,
  Basketball: basketball,
  BellFilled: bellFilled,
  Bell: bell,
  Bicycle: bicycle,
  BottomLeft: bottomLeft,
  BottomRight: bottomRight,
  Bottom: bottom,
  Bowl: bowl,
  Box: box,
  Briefcase: briefcase,
  BrushFilled: brushFilled,
  Brush: brush,
  Burger: burger,
  Calendar: calendar,
  CameraFilled: cameraFilled,
  Camera: camera,
  CaretBottom: caretBottom,
  CaretLeft: caretLeft,
  CaretRight: caretRight,
  CaretTop: caretTop,
  Cellphone: cellphone,
  ChatDotRound: chatDotRound,
  ChatDotSquare: chatDotSquare,
  ChatLineRound: chatLineRound,
  ChatLineSquare: chatLineSquare,
  ChatRound: chatRound,
  ChatSquare: chatSquare,
  Check: check,
  Checked: checked,
  Cherry: cherry,
  Chicken: chicken,
  CircleCheckFilled: circleCheckFilled,
  CircleCheck: circleCheck,
  CircleCloseFilled: circleCloseFilled,
  CircleClose: circleClose,
  CirclePlusFilled: circlePlusFilled,
  CirclePlus: circlePlus,
  Clock: clock,
  CloseBold: closeBold,
  Close: close,
  Cloudy: cloudy,
  CoffeeCup: coffeeCup,
  Coffee: coffee,
  Coin: coin,
  ColdDrink: coldDrink,
  CollectionTag: collectionTag,
  Collection: collection,
  Comment: comment,
  Compass: compass,
  Connection: connection,
  Coordinate: coordinate,
  CopyDocument: copyDocument,
  Cpu: cpu,
  CreditCard: creditCard,
  Crop: crop,
  DArrowLeft: dArrowLeft,
  DArrowRight: dArrowRight,
  DCaret: dCaret,
  DataAnalysis: dataAnalysis,
  DataBoard: dataBoard,
  DataLine: dataLine,
  DeleteFilled: deleteFilled,
  DeleteLocation: deleteLocation,
  Delete: _delete,
  Dessert: dessert,
  Discount: discount,
  DishDot: dishDot,
  Dish: dish,
  DocumentAdd: documentAdd,
  DocumentChecked: documentChecked,
  DocumentCopy: documentCopy,
  DocumentDelete: documentDelete,
  DocumentRemove: documentRemove,
  Document: document$1,
  Download: download,
  Drizzling: drizzling,
  EditPen: editPen,
  Edit: edit,
  ElemeFilled: elemeFilled,
  Eleme: eleme,
  ElementPlus: elementPlus,
  Expand: expand,
  Failed: failed,
  Female: female,
  Files: files,
  Film: film,
  Filter: filter,
  Finished: finished,
  FirstAidKit: firstAidKit,
  Flag: flag,
  Fold: fold,
  FolderAdd: folderAdd,
  FolderChecked: folderChecked,
  FolderDelete: folderDelete,
  FolderOpened: folderOpened,
  FolderRemove: folderRemove,
  Folder: folder,
  Food: food,
  Football: football,
  ForkSpoon: forkSpoon,
  Fries: fries,
  FullScreen: fullScreen,
  GobletFull: gobletFull,
  GobletSquareFull: gobletSquareFull,
  GobletSquare: gobletSquare,
  Goblet: goblet,
  GoodsFilled: goodsFilled,
  Goods: goods,
  Grape: grape,
  Grid: grid,
  Guide: guide,
  Headset: headset,
  HelpFilled: helpFilled,
  Help: help,
  Hide: hide,
  Histogram: histogram,
  HomeFilled: homeFilled,
  HotWater: hotWater,
  House: house,
  IceCreamRound: iceCreamRound,
  IceCreamSquare: iceCreamSquare,
  IceCream: iceCream,
  IceDrink: iceDrink,
  IceTea: iceTea,
  InfoFilled: infoFilled,
  Iphone: iphone,
  Key: key,
  KnifeFork: knifeFork,
  Lightning: lightning,
  Link: link,
  List: list,
  Loading: loading,
  LocationFilled: locationFilled,
  LocationInformation: locationInformation,
  Location: location,
  Lock: lock,
  Lollipop: lollipop,
  MagicStick: magicStick,
  Magnet: magnet,
  Male: male,
  Management: management,
  MapLocation: mapLocation,
  Medal: medal,
  Menu: menu,
  MessageBox: messageBox,
  Message: message,
  Mic: mic,
  Microphone: microphone,
  MilkTea: milkTea,
  Minus: minus,
  Money: money,
  Monitor: monitor,
  MoonNight: moonNight,
  Moon: moon,
  MoreFilled: moreFilled,
  More: more,
  MostlyCloudy: mostlyCloudy,
  Mouse: mouse,
  Mug: mug,
  MuteNotification: muteNotification,
  Mute: mute,
  NoSmoking: noSmoking,
  Notebook: notebook,
  Notification: notification,
  Odometer: odometer,
  OfficeBuilding: officeBuilding,
  Open: open,
  Operation: operation,
  Opportunity: opportunity,
  Orange: orange,
  Paperclip: paperclip,
  PartlyCloudy: partlyCloudy,
  Pear: pear,
  PhoneFilled: phoneFilled,
  Phone: phone,
  PictureFilled: pictureFilled,
  PictureRounded: pictureRounded,
  Picture: picture,
  PieChart: pieChart,
  Place: place,
  Platform: platform,
  Plus: plus,
  Pointer: pointer,
  Position: position,
  Postcard: postcard,
  Pouring: pouring,
  Present: present,
  PriceTag: priceTag,
  Printer: printer,
  Promotion: promotion,
  QuestionFilled: questionFilled,
  Rank: rank,
  ReadingLamp: readingLamp,
  Reading: reading,
  RefreshLeft: refreshLeft,
  RefreshRight: refreshRight,
  Refresh: refresh,
  Refrigerator: refrigerator,
  RemoveFilled: removeFilled,
  Remove: remove,
  Right: right,
  ScaleToOriginal: scaleToOriginal,
  School: school,
  Scissor: scissor,
  Search: search,
  Select: select,
  Sell: sell,
  SemiSelect: semiSelect,
  Service: service,
  SetUp: setUp,
  Setting: setting,
  Share: share,
  Ship: ship,
  Shop: shop,
  ShoppingBag: shoppingBag,
  ShoppingCartFull: shoppingCartFull,
  ShoppingCart: shoppingCart,
  Smoking: smoking,
  Soccer: soccer,
  SoldOut: soldOut,
  SortDown: sortDown,
  SortUp: sortUp,
  Sort: sort,
  Stamp: stamp,
  StarFilled: starFilled,
  Star: star,
  Stopwatch: stopwatch,
  SuccessFilled: successFilled,
  Sugar: sugar,
  Suitcase: suitcase,
  Sunny: sunny,
  Sunrise: sunrise,
  Sunset: sunset,
  SwitchButton: switchButton,
  Switch: _switch,
  TakeawayBox: takeawayBox,
  Ticket: ticket,
  Tickets: tickets,
  Timer: timer,
  ToiletPaper: toiletPaper,
  Tools: tools,
  TopLeft: topLeft,
  TopRight: topRight,
  Top: top,
  TrendCharts: trendCharts,
  Trophy: trophy,
  TurnOff: turnOff,
  Umbrella: umbrella,
  Unlock: unlock,
  UploadFilled: uploadFilled,
  Upload: upload,
  UserFilled: userFilled,
  User: user,
  Van: van,
  VideoCameraFilled: videoCameraFilled,
  VideoCamera: videoCamera,
  VideoPause: videoPause,
  VideoPlay: videoPlay,
  View: view,
  WalletFilled: walletFilled,
  Wallet: wallet,
  WarningFilled: warningFilled,
  Warning: warning,
  Watch: watch,
  Watermelon: watermelon,
  WindPower: windPower,
  ZoomIn: zoomIn,
  ZoomOut: zoomOut
}, Symbol.toStringTag, { value: "Module" }));
var ThemeProvider_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const _sfc_main$p = defineComponent$1({
  props: {
    theme: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props) {
    const mixColor = (hexColorStart, hexColorEnd, percent) => {
      const toRgb = (x) => {
        const i = parseInt(x.toString().replace("#", ""), 16);
        return {
          r: i >> 16 & 255,
          g: i >> 8 & 255,
          b: i & 255
        };
      };
      const rgbStart = toRgb(hexColorStart);
      const rgbEnd = toRgb(hexColorEnd);
      const deltaRgb = {
        r: (rgbEnd.r - rgbStart.r) / 100 * percent,
        g: (rgbEnd.g - rgbStart.g) / 100 * percent,
        b: (rgbEnd.b - rgbStart.b) / 100 * percent
      };
      const resultRgb = {
        r: Math.round(rgbStart.r + deltaRgb.r),
        g: Math.round(rgbStart.g + deltaRgb.g),
        b: Math.round(rgbStart.b + deltaRgb.b)
      };
      return `#${resultRgb.r < 16 ? "0" : ""}${resultRgb.r.toString(16)}${resultRgb.g < 16 ? "0" : ""}${resultRgb.g.toString(16)}${resultRgb.b < 16 ? "0" : ""}${resultRgb.b.toString(16)}`;
    };
    const style2 = computed$1(() => {
      const objectStyle = {};
      const types = ["primary", "success", "warning", "info", "error", "danger", "bgcolor", "color", "borderRadius"];
      for (const type of types) {
        if (props.theme[type]) {
          objectStyle[`--el-color-${type}`] = props.theme[type];
          for (let i = 1; i < 10; i++) {
            objectStyle[`--el-color-${type}-light-${i}`] = mixColor(props.theme[type], "#ffffff", i * 10);
            if (type === "primary") {
              objectStyle[`--el-color-${type}-dark-${i}`] = mixColor(props.theme[type], "#000000", i * 10);
            }
          }
        }
      }
      return {
        objectStyle
      };
    });
    return { style: style2 };
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(), createBlock(resolveDynamicComponent("style"), null, {
      default: withCtx(() => [
        createTextVNode(" :root { --el-border-radius-base: " + toDisplayString(_ctx.style.objectStyle["--el-color-borderRadius"] + "px") + " } ", 1)
      ]),
      _: 1
    })),
    createElementVNode("div", {
      style: normalizeStyle(_ctx.style.objectStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 64);
}
var ThemeProvider = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
var SocialMediaPost_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$o = defineComponent$1({
  name: "SocialMediaPost",
  components: {
    ElCard,
    ElAvatar,
    ElIcon,
    Share: share,
    ChatSquare: chatSquare,
    CollectionTag: collectionTag,
    Promotion: promotion,
    Right: right
  },
  props: {
    socialMediaData: {
      type: Object,
      required: true
    },
    theme: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isExpand = ref(true);
    const isExpandToggle = () => {
      isExpand.value = !isExpand.value;
    };
    const themeColor = computed$1(() => ({
      "background-color": props.theme.background,
      color: props.theme.color
    }));
    return {
      isExpand,
      isExpandToggle,
      themeColor
    };
  }
});
const _withScopeId$3 = (n) => (pushScopeId("data-v-e11cfa76"), n = n(), popScopeId(), n);
const _hoisted_1$k = { class: "card-header-info" };
const _hoisted_2$d = { class: "card-header-info-section" };
const _hoisted_3$7 = { class: "card-content" };
const _hoisted_4$5 = ["src"];
const _hoisted_5$5 = {
  key: 1,
  controls: ""
};
const _hoisted_6$4 = ["src"];
const _hoisted_7$4 = { class: "card-content-stats" };
const _hoisted_8$3 = {
  width: "22",
  height: "25",
  viewBox: "-5 -5 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_9$3 = ["fill"];
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "Like", -1));
const _hoisted_11$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "Comment", -1));
const _hoisted_12$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "Share", -1));
const _hoisted_13$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "Send", -1));
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_avatar = resolveComponent("el-avatar");
  const _component_CollectionTag = resolveComponent("CollectionTag");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_Right = resolveComponent("Right");
  const _component_ChatSquare = resolveComponent("ChatSquare");
  const _component_Share = resolveComponent("Share");
  const _component_Promotion = resolveComponent("Promotion");
  const _component_el_card = resolveComponent("el-card");
  return openBlock(), createBlock(_component_el_card, {
    class: "socialMediCard",
    style: normalizeStyle(_ctx.themeColor)
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: "card-header",
        style: normalizeStyle(_ctx.themeColor)
      }, [
        createElementVNode("div", _hoisted_1$k, [
          createVNode(_component_el_avatar, {
            shape: "square",
            src: _ctx.socialMediaData.posterAvatarImg
          }, null, 8, ["src"]),
          createElementVNode("div", _hoisted_2$d, [
            createElementVNode("h3", null, toDisplayString(_ctx.socialMediaData.posterName), 1),
            createElementVNode("span", null, toDisplayString(_ctx.socialMediaData.postedSince) + " min ", 1)
          ])
        ]),
        createVNode(_component_el_icon, {
          onClick: _ctx.socialMediaData.handleSave
        }, {
          default: withCtx(() => [
            createVNode(_component_CollectionTag)
          ]),
          _: 1
        }, 8, ["onClick"])
      ], 4),
      createElementVNode("div", _hoisted_3$7, [
        createElementVNode("p", {
          class: normalizeClass({ overflow: _ctx.isExpand })
        }, toDisplayString(_ctx.socialMediaData.postDescription), 3),
        createElementVNode("div", {
          class: "see-more",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.isExpandToggle && _ctx.isExpandToggle(...args))
        }, [
          createElementVNode("span", null, toDisplayString(_ctx.isExpand ? "See more" : "reduce"), 1),
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_Right)
            ]),
            _: 1
          })
        ]),
        _ctx.socialMediaData.postMedia.type === "image" ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.socialMediaData.postMedia.src,
          alt: "post-photo"
        }, null, 8, _hoisted_4$5)) : createCommentVNode("", true),
        _ctx.socialMediaData.postMedia.type === "video" ? (openBlock(), createElementBlock("video", _hoisted_5$5, [
          createElementVNode("source", {
            src: _ctx.socialMediaData.postMedia.src
          }, null, 8, _hoisted_6$4)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_7$4, [
          createElementVNode("p", null, toDisplayString(_ctx.socialMediaData.postLikes) + " Likes", 1),
          createElementVNode("p", null, toDisplayString(_ctx.socialMediaData.postComments) + " Comments", 1),
          createElementVNode("p", null, toDisplayString(_ctx.socialMediaData.postShares) + " Shares", 1)
        ])
      ]),
      createElementVNode("div", {
        class: "card-footer",
        style: normalizeStyle(_ctx.themeColor)
      }, [
        createElementVNode("div", {
          class: "card-footer-item",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.socialMediaData.handleLike && _ctx.socialMediaData.handleLike(...args))
        }, [
          createVNode(_component_el_icon, { size: 20 }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("svg", _hoisted_8$3, [
                createElementVNode("path", {
                  d: "M15.6193 0.448242C13.8068 0.448242 12.0672 1.22449 10.9318 2.45116C9.79639 1.22449\n8.0568 0.448242 6.2443 0.448242C3.03597 0.448242 0.515137 2.76741 0.515137 5.71908C0.515137\n9.34158 4.0568 12.2932 9.42139 16.7782L10.9318 18.0337L12.4422 16.7687C17.8068 12.2932 21.3485\n9.34158 21.3485 5.71908C21.3485 2.76741 18.8276 0.448242 15.6193 0.448242ZM11.036 15.3503L10.9318\n15.4462L10.8276 15.3503C5.8693 11.2199 2.59847 8.48866 2.59847 5.71908C2.59847 3.80241 4.16097\n2.36491 6.2443 2.36491C7.84847 2.36491 9.41097 3.31366 9.96305 4.62658H11.911C12.4526 3.31366\n14.0151 2.36491 15.6193 2.36491C17.7026 2.36491 19.2651 3.80241 19.2651 5.71908C19.2651 8.48866\n15.9943 11.2199 11.036 15.3503Z",
                  fill: _ctx.theme.color
                }, null, 8, _hoisted_9$3)
              ]))
            ]),
            _: 1
          }),
          _hoisted_10$2
        ]),
        createElementVNode("div", {
          class: "card-footer-item",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.socialMediaData.handleComment && _ctx.socialMediaData.handleComment(...args))
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_ChatSquare)
            ]),
            _: 1
          }),
          _hoisted_11$2
        ]),
        createElementVNode("div", {
          class: "card-footer-item",
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.socialMediaData.handleShare && _ctx.socialMediaData.handleShare(...args))
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_Share)
            ]),
            _: 1
          }),
          _hoisted_12$2
        ]),
        createElementVNode("div", {
          class: "card-footer-item",
          onClick: _cache[4] || (_cache[4] = (...args) => _ctx.socialMediaData.handleSend && _ctx.socialMediaData.handleSend(...args))
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_Promotion)
            ]),
            _: 1
          }),
          _hoisted_13$2
        ])
      ], 4)
    ]),
    _: 1
  }, 8, ["style"]);
}
var SocialMediaPost = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-e11cfa76"]]);
const cache = {};
function filterAttrs(attrs) {
  return Object.keys(attrs).reduce((result, key2) => {
    if (attrs[key2] !== false && attrs[key2] !== null && attrs[key2] !== void 0) {
      result[key2] = attrs[key2];
    }
    return result;
  }, {});
}
const InlineSvg = {
  name: "InlineSvg",
  inheritAttrs: false,
  render() {
    if (!this.svgElSource) {
      return null;
    }
    return h$1(
      "svg",
      Object.assign(
        {},
        this.getSvgAttrs(this.svgElSource),
        filterAttrs(this.$attrs),
        { innerHTML: this.getSvgContent(this.svgElSource) }
      )
    );
  },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    transformSource: {
      type: Function,
      default: (svg) => svg
    },
    keepDuringLoading: {
      type: Boolean,
      default: true
    }
  },
  emits: ["loaded", "unloaded", "error"],
  data() {
    return {
      svgElSource: null
    };
  },
  watch: {
    src(newValue) {
      this.getSource(newValue);
    }
  },
  mounted() {
    this.getSource(this.src);
  },
  methods: {
    getSvgAttrs(svgEl) {
      let svgAttrs = {};
      const attrs = svgEl.attributes;
      if (!attrs) {
        return svgAttrs;
      }
      for (let i = attrs.length - 1; i >= 0; i--) {
        svgAttrs[attrs[i].name] = attrs[i].value;
      }
      return svgAttrs;
    },
    getSvgContent(svgEl) {
      svgEl = svgEl.cloneNode(true);
      svgEl = this.transformSource(svgEl);
      if (this.title) {
        setTitle(svgEl, this.title);
      }
      return svgEl.innerHTML;
    },
    getSource(src) {
      if (!cache[src]) {
        cache[src] = this.download(src);
      }
      if (this.svgElSource && cache[src].getIsPending() && !this.keepDuringLoading) {
        this.svgElSource = null;
        this.$emit("unloaded");
      }
      cache[src].then((svg) => {
        this.svgElSource = svg;
        this.$nextTick(() => {
          this.$emit("loaded", this.$el);
        });
      }).catch((err) => {
        if (this.svgElSource) {
          this.svgElSource = null;
          this.$emit("unloaded");
        }
        delete cache[src];
        this.$emit("error", err);
      });
    },
    download(url) {
      return makePromiseState(new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            try {
              const parser = new DOMParser();
              const result = parser.parseFromString(request.responseText, "text/xml");
              let svgEl = result.getElementsByTagName("svg")[0];
              if (svgEl) {
                resolve(svgEl);
              } else {
                reject(new Error('Loaded file is not valid SVG"'));
              }
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error("Error loading SVG"));
          }
        };
        request.onerror = reject;
        request.send();
      }));
    }
  }
};
function setTitle(svg, title) {
  const titleTags = svg.getElementsByTagName("title");
  if (titleTags.length) {
    titleTags[0].textContent = title;
  } else {
    const titleEl = document.createElementNS("http://www.w3.org/2000/svg", "title");
    titleEl.textContent = title;
    svg.insertBefore(titleEl, svg.firstChild);
  }
}
function makePromiseState(promise2) {
  if (promise2.getIsPending)
    return promise2;
  let isPending = true;
  let result = promise2.then(
    (v2) => {
      isPending = false;
      return v2;
    },
    (e) => {
      isPending = false;
      throw e;
    }
  );
  result.getIsPending = function getIsPending() {
    return isPending;
  };
  return result;
}
function assertNonEmptyString(str) {
  if (typeof str !== "string" || !str) {
    throw new Error("expected a non-empty string, got: " + str);
  }
}
function assertNumber(number) {
  if (typeof number !== "number") {
    throw new Error("expected a number, got: " + number);
  }
}
const DB_VERSION_CURRENT = 1;
const DB_VERSION_INITIAL = 1;
const STORE_EMOJI = "emoji";
const STORE_KEYVALUE = "keyvalue";
const STORE_FAVORITES = "favorites";
const FIELD_TOKENS = "tokens";
const INDEX_TOKENS = "tokens";
const FIELD_UNICODE = "unicode";
const INDEX_COUNT = "count";
const FIELD_GROUP = "group";
const FIELD_ORDER = "order";
const INDEX_GROUP_AND_ORDER = "group-order";
const KEY_ETAG = "eTag";
const KEY_URL = "url";
const KEY_PREFERRED_SKINTONE = "skinTone";
const MODE_READONLY = "readonly";
const MODE_READWRITE = "readwrite";
const INDEX_SKIN_UNICODE = "skinUnicodes";
const FIELD_SKIN_UNICODE = "skinUnicodes";
const DEFAULT_DATA_SOURCE$1 = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
const DEFAULT_LOCALE$1 = "en";
function uniqBy$1(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key2 = func(item);
    if (!set2.has(key2)) {
      set2.add(key2);
      res.push(item);
    }
  }
  return res;
}
function uniqEmoji(emojis) {
  return uniqBy$1(emojis, (_) => _.unicode);
}
function initialMigration(db) {
  function createObjectStore(name, keyPath, indexes) {
    const store = keyPath ? db.createObjectStore(name, { keyPath }) : db.createObjectStore(name);
    if (indexes) {
      for (const [indexName, [keyPath2, multiEntry]] of Object.entries(indexes)) {
        store.createIndex(indexName, keyPath2, { multiEntry });
      }
    }
    return store;
  }
  createObjectStore(STORE_KEYVALUE);
  createObjectStore(STORE_EMOJI, FIELD_UNICODE, {
    [INDEX_TOKENS]: [FIELD_TOKENS, true],
    [INDEX_GROUP_AND_ORDER]: [[FIELD_GROUP, FIELD_ORDER]],
    [INDEX_SKIN_UNICODE]: [FIELD_SKIN_UNICODE, true]
  });
  createObjectStore(STORE_FAVORITES, void 0, {
    [INDEX_COUNT]: [""]
  });
}
const openIndexedDBRequests = {};
const databaseCache = {};
const onCloseListeners = {};
function handleOpenOrDeleteReq(resolve, reject, req) {
  req.onerror = () => reject(req.error);
  req.onblocked = () => reject(new Error("IDB blocked"));
  req.onsuccess = () => resolve(req.result);
}
async function createDatabase(dbName) {
  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, DB_VERSION_CURRENT);
    openIndexedDBRequests[dbName] = req;
    req.onupgradeneeded = (e) => {
      if (e.oldVersion < DB_VERSION_INITIAL) {
        initialMigration(req.result);
      }
    };
    handleOpenOrDeleteReq(resolve, reject, req);
  });
  db.onclose = () => closeDatabase(dbName);
  return db;
}
function openDatabase(dbName) {
  if (!databaseCache[dbName]) {
    databaseCache[dbName] = createDatabase(dbName);
  }
  return databaseCache[dbName];
}
function dbPromise(db, storeName, readOnlyOrReadWrite, cb) {
  return new Promise((resolve, reject) => {
    const txn = db.transaction(storeName, readOnlyOrReadWrite, { durability: "relaxed" });
    const store = typeof storeName === "string" ? txn.objectStore(storeName) : storeName.map((name) => txn.objectStore(name));
    let res;
    cb(store, txn, (result) => {
      res = result;
    });
    txn.oncomplete = () => resolve(res);
    txn.onerror = () => reject(txn.error);
  });
}
function closeDatabase(dbName) {
  const req = openIndexedDBRequests[dbName];
  const db = req && req.result;
  if (db) {
    db.close();
    const listeners = onCloseListeners[dbName];
    if (listeners) {
      for (const listener of listeners) {
        listener();
      }
    }
  }
  delete openIndexedDBRequests[dbName];
  delete databaseCache[dbName];
  delete onCloseListeners[dbName];
}
function deleteDatabase(dbName) {
  return new Promise((resolve, reject) => {
    closeDatabase(dbName);
    const req = indexedDB.deleteDatabase(dbName);
    handleOpenOrDeleteReq(resolve, reject, req);
  });
}
function addOnCloseListener(dbName, listener) {
  let listeners = onCloseListeners[dbName];
  if (!listeners) {
    listeners = onCloseListeners[dbName] = [];
  }
  listeners.push(listener);
}
const irregularEmoticons = /* @__PURE__ */ new Set([
  ":D",
  "XD",
  ":'D",
  "O:)",
  ":X",
  ":P",
  ";P",
  "XP",
  ":L",
  ":Z",
  ":j",
  "8D",
  "XO",
  "8)",
  ":B",
  ":O",
  ":S",
  ":'o",
  "Dx",
  "X(",
  "D:",
  ":C",
  ">0)",
  ":3",
  "</3",
  "<3",
  "\\M/",
  ":E",
  "8#"
]);
function extractTokens(str) {
  return str.split(/[\s_]+/).map((word) => {
    if (!word.match(/\w/) || irregularEmoticons.has(word)) {
      return word.toLowerCase();
    }
    return word.replace(/[)(:,]/g, "").replace(/’/g, "'").toLowerCase();
  }).filter(Boolean);
}
const MIN_SEARCH_TEXT_LENGTH$1 = 2;
function normalizeTokens(str) {
  return str.filter(Boolean).map((_) => _.toLowerCase()).filter((_) => _.length >= MIN_SEARCH_TEXT_LENGTH$1);
}
function transformEmojiData(emojiData) {
  const res = emojiData.map(({ annotation, emoticon, group, order, shortcodes, skins, tags, emoji, version }) => {
    const tokens = [...new Set(
      normalizeTokens([
        ...(shortcodes || []).map(extractTokens).flat(),
        ...tags.map(extractTokens).flat(),
        ...extractTokens(annotation),
        emoticon
      ])
    )].sort();
    const res2 = {
      annotation,
      group,
      order,
      tags,
      tokens,
      unicode: emoji,
      version
    };
    if (emoticon) {
      res2.emoticon = emoticon;
    }
    if (shortcodes) {
      res2.shortcodes = shortcodes;
    }
    if (skins) {
      res2.skinTones = [];
      res2.skinUnicodes = [];
      res2.skinVersions = [];
      for (const { tone, emoji: emoji2, version: version2 } of skins) {
        res2.skinTones.push(tone);
        res2.skinUnicodes.push(emoji2);
        res2.skinVersions.push(version2);
      }
    }
    return res2;
  });
  return res;
}
function callStore(store, method, key2, cb) {
  store[method](key2).onsuccess = (e) => cb && cb(e.target.result);
}
function getIDB(store, key2, cb) {
  callStore(store, "get", key2, cb);
}
function getAllIDB(store, key2, cb) {
  callStore(store, "getAll", key2, cb);
}
function commit(txn) {
  if (txn.commit) {
    txn.commit();
  }
}
function minBy(array, func) {
  let minItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (func(minItem) > func(item)) {
      minItem = item;
    }
  }
  return minItem;
}
function findCommonMembers(arrays, uniqByFunc) {
  const shortestArray = minBy(arrays, (_) => _.length);
  const results = [];
  for (const item of shortestArray) {
    if (!arrays.some((array) => array.findIndex((_) => uniqByFunc(_) === uniqByFunc(item)) === -1)) {
      results.push(item);
    }
  }
  return results;
}
async function isEmpty(db) {
  return !await get(db, STORE_KEYVALUE, KEY_URL);
}
async function hasData(db, url, eTag) {
  const [oldETag, oldUrl] = await Promise.all([KEY_ETAG, KEY_URL].map((key2) => get(db, STORE_KEYVALUE, key2)));
  return oldETag === eTag && oldUrl === url;
}
async function doFullDatabaseScanForSingleResult(db, predicate) {
  const BATCH_SIZE = 50;
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    let lastKey;
    const processNextBatch = () => {
      emojiStore.getAll(lastKey && IDBKeyRange.lowerBound(lastKey, true), BATCH_SIZE).onsuccess = (e) => {
        const results = e.target.result;
        for (const result of results) {
          lastKey = result.unicode;
          if (predicate(result)) {
            return cb(result);
          }
        }
        if (results.length < BATCH_SIZE) {
          return cb();
        }
        processNextBatch();
      };
    };
    processNextBatch();
  });
}
async function loadData(db, emojiData, url, eTag) {
  try {
    const transformedData = transformEmojiData(emojiData);
    await dbPromise(db, [STORE_EMOJI, STORE_KEYVALUE], MODE_READWRITE, ([emojiStore, metaStore], txn) => {
      let oldETag;
      let oldUrl;
      let todo = 0;
      function checkFetched() {
        if (++todo === 2) {
          onFetched();
        }
      }
      function onFetched() {
        if (oldETag === eTag && oldUrl === url) {
          return;
        }
        emojiStore.clear();
        for (const data of transformedData) {
          emojiStore.put(data);
        }
        metaStore.put(eTag, KEY_ETAG);
        metaStore.put(url, KEY_URL);
        commit(txn);
      }
      getIDB(metaStore, KEY_ETAG, (result) => {
        oldETag = result;
        checkFetched();
      });
      getIDB(metaStore, KEY_URL, (result) => {
        oldUrl = result;
        checkFetched();
      });
    });
  } finally {
  }
}
async function getEmojiByGroup(db, group) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const range = IDBKeyRange.bound([group, 0], [group + 1, 0], false, true);
    getAllIDB(emojiStore.index(INDEX_GROUP_AND_ORDER), range, cb);
  });
}
async function getEmojiBySearchQuery(db, query) {
  const tokens = normalizeTokens(extractTokens(query));
  if (!tokens.length) {
    return [];
  }
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const intermediateResults = [];
    const checkDone = () => {
      if (intermediateResults.length === tokens.length) {
        onDone();
      }
    };
    const onDone = () => {
      const results = findCommonMembers(intermediateResults, (_) => _.unicode);
      cb(results.sort((a, b2) => a.order < b2.order ? -1 : 1));
    };
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const range = i === tokens.length - 1 ? IDBKeyRange.bound(token, token + "\uFFFF", false, true) : IDBKeyRange.only(token);
      getAllIDB(emojiStore.index(INDEX_TOKENS), range, (result) => {
        intermediateResults.push(result);
        checkDone();
      });
    }
  });
}
async function getEmojiByShortcode(db, shortcode) {
  const emojis = await getEmojiBySearchQuery(db, shortcode);
  if (!emojis.length) {
    const predicate = (_) => (_.shortcodes || []).includes(shortcode.toLowerCase());
    return await doFullDatabaseScanForSingleResult(db, predicate) || null;
  }
  return emojis.filter((_) => {
    const lowerShortcodes = (_.shortcodes || []).map((_2) => _2.toLowerCase());
    return lowerShortcodes.includes(shortcode.toLowerCase());
  })[0] || null;
}
async function getEmojiByUnicode(db, unicode) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => getIDB(emojiStore, unicode, (result) => {
    if (result) {
      return cb(result);
    }
    getIDB(emojiStore.index(INDEX_SKIN_UNICODE), unicode, (result2) => cb(result2 || null));
  }));
}
function get(db, storeName, key2) {
  return dbPromise(db, storeName, MODE_READONLY, (store, txn, cb) => getIDB(store, key2, cb));
}
function set(db, storeName, key2, value) {
  return dbPromise(db, storeName, MODE_READWRITE, (store, txn) => {
    store.put(value, key2);
    commit(txn);
  });
}
function incrementFavoriteEmojiCount(db, unicode) {
  return dbPromise(db, STORE_FAVORITES, MODE_READWRITE, (store, txn) => getIDB(store, unicode, (result) => {
    store.put((result || 0) + 1, unicode);
    commit(txn);
  }));
}
function getTopFavoriteEmoji(db, customEmojiIndex2, limit) {
  if (limit === 0) {
    return [];
  }
  return dbPromise(db, [STORE_FAVORITES, STORE_EMOJI], MODE_READONLY, ([favoritesStore, emojiStore], txn, cb) => {
    const results = [];
    favoritesStore.index(INDEX_COUNT).openCursor(void 0, "prev").onsuccess = (e) => {
      const cursor = e.target.result;
      if (!cursor) {
        return cb(results);
      }
      function addResult(result) {
        results.push(result);
        if (results.length === limit) {
          return cb(results);
        }
        cursor.continue();
      }
      const unicodeOrName = cursor.primaryKey;
      const custom = customEmojiIndex2.byName(unicodeOrName);
      if (custom) {
        return addResult(custom);
      }
      getIDB(emojiStore, unicodeOrName, (emoji) => {
        if (emoji) {
          return addResult(emoji);
        }
        cursor.continue();
      });
    };
  });
}
const CODA_MARKER = "";
function trie(arr, itemToTokens) {
  const map = /* @__PURE__ */ new Map();
  for (const item of arr) {
    const tokens = itemToTokens(item);
    for (const token of tokens) {
      let currentMap = map;
      for (let i = 0; i < token.length; i++) {
        const char = token.charAt(i);
        let nextMap = currentMap.get(char);
        if (!nextMap) {
          nextMap = /* @__PURE__ */ new Map();
          currentMap.set(char, nextMap);
        }
        currentMap = nextMap;
      }
      let valuesAtCoda = currentMap.get(CODA_MARKER);
      if (!valuesAtCoda) {
        valuesAtCoda = [];
        currentMap.set(CODA_MARKER, valuesAtCoda);
      }
      valuesAtCoda.push(item);
    }
  }
  const search2 = (query, exact) => {
    let currentMap = map;
    for (let i = 0; i < query.length; i++) {
      const char = query.charAt(i);
      const nextMap = currentMap.get(char);
      if (nextMap) {
        currentMap = nextMap;
      } else {
        return [];
      }
    }
    if (exact) {
      const results2 = currentMap.get(CODA_MARKER);
      return results2 || [];
    }
    const results = [];
    const queue = [currentMap];
    while (queue.length) {
      const currentMap2 = queue.shift();
      const entriesSortedByKey = [...currentMap2.entries()].sort((a, b2) => a[0] < b2[0] ? -1 : 1);
      for (const [key2, value] of entriesSortedByKey) {
        if (key2 === CODA_MARKER) {
          results.push(...value);
        } else {
          queue.push(value);
        }
      }
    }
    return results;
  };
  return search2;
}
const requiredKeys$1 = [
  "name",
  "url"
];
function assertCustomEmojis(customEmojis) {
  const isArray2 = customEmojis && Array.isArray(customEmojis);
  const firstItemIsFaulty = isArray2 && customEmojis.length && (!customEmojis[0] || requiredKeys$1.some((key2) => !(key2 in customEmojis[0])));
  if (!isArray2 || firstItemIsFaulty) {
    throw new Error("Custom emojis are in the wrong format");
  }
}
function customEmojiIndex(customEmojis) {
  assertCustomEmojis(customEmojis);
  const sortByName = (a, b2) => a.name.toLowerCase() < b2.name.toLowerCase() ? -1 : 1;
  const all = customEmojis.sort(sortByName);
  const emojiToTokens = (emoji) => [...new Set((emoji.shortcodes || []).map((shortcode) => extractTokens(shortcode)).flat())];
  const searchTrie = trie(customEmojis, emojiToTokens);
  const searchByExactMatch = (_) => searchTrie(_, true);
  const searchByPrefix = (_) => searchTrie(_, false);
  const search2 = (query) => {
    const tokens = extractTokens(query);
    const intermediateResults = tokens.map((token, i) => (i < tokens.length - 1 ? searchByExactMatch : searchByPrefix)(token));
    return findCommonMembers(intermediateResults, (_) => _.name).sort(sortByName);
  };
  const shortcodeToEmoji = /* @__PURE__ */ new Map();
  const nameToEmoji = /* @__PURE__ */ new Map();
  for (const customEmoji of customEmojis) {
    nameToEmoji.set(customEmoji.name.toLowerCase(), customEmoji);
    for (const shortcode of customEmoji.shortcodes || []) {
      shortcodeToEmoji.set(shortcode.toLowerCase(), customEmoji);
    }
  }
  const byShortcode = (shortcode) => shortcodeToEmoji.get(shortcode.toLowerCase());
  const byName = (name) => nameToEmoji.get(name.toLowerCase());
  return {
    all,
    search: search2,
    byShortcode,
    byName
  };
}
function cleanEmoji(emoji) {
  if (!emoji) {
    return emoji;
  }
  delete emoji.tokens;
  if (emoji.skinTones) {
    const len = emoji.skinTones.length;
    emoji.skins = Array(len);
    for (let i = 0; i < len; i++) {
      emoji.skins[i] = {
        tone: emoji.skinTones[i],
        unicode: emoji.skinUnicodes[i],
        version: emoji.skinVersions[i]
      };
    }
    delete emoji.skinTones;
    delete emoji.skinUnicodes;
    delete emoji.skinVersions;
  }
  return emoji;
}
function warnETag(eTag) {
  if (!eTag) {
    console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.");
  }
}
const requiredKeys = [
  "annotation",
  "emoji",
  "group",
  "order",
  "tags",
  "version"
];
function assertEmojiData(emojiData) {
  if (!emojiData || !Array.isArray(emojiData) || !emojiData[0] || typeof emojiData[0] !== "object" || requiredKeys.some((key2) => !(key2 in emojiData[0]))) {
    throw new Error("Emoji data is in the wrong format");
  }
}
function assertStatus(response, dataSource) {
  if (Math.floor(response.status / 100) !== 2) {
    throw new Error("Failed to fetch: " + dataSource + ":  " + response.status);
  }
}
async function getETag(dataSource) {
  const response = await fetch(dataSource, { method: "HEAD" });
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  return eTag;
}
async function getETagAndData(dataSource) {
  const response = await fetch(dataSource);
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  const emojiData = await response.json();
  assertEmojiData(emojiData);
  return [eTag, emojiData];
}
function arrayBufferToBinaryString(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;
  var i = -1;
  while (++i < length) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
}
function binaryStringToArrayBuffer(binary) {
  var length = binary.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  var i = -1;
  while (++i < length) {
    arr[i] = binary.charCodeAt(i);
  }
  return buf;
}
async function jsonChecksum(object) {
  const inString = JSON.stringify(object);
  const inBuffer = binaryStringToArrayBuffer(inString);
  const outBuffer = await crypto.subtle.digest("SHA-1", inBuffer);
  const outBinString = arrayBufferToBinaryString(outBuffer);
  const res = btoa(outBinString);
  return res;
}
async function checkForUpdates(db, dataSource) {
  let emojiData;
  let eTag = await getETag(dataSource);
  if (!eTag) {
    const eTagAndData = await getETagAndData(dataSource);
    eTag = eTagAndData[0];
    emojiData = eTagAndData[1];
    if (!eTag) {
      eTag = await jsonChecksum(emojiData);
    }
  }
  if (await hasData(db, dataSource, eTag))
    ;
  else {
    if (!emojiData) {
      const eTagAndData = await getETagAndData(dataSource);
      emojiData = eTagAndData[1];
    }
    await loadData(db, emojiData, dataSource, eTag);
  }
}
async function loadDataForFirstTime(db, dataSource) {
  let [eTag, emojiData] = await getETagAndData(dataSource);
  if (!eTag) {
    eTag = await jsonChecksum(emojiData);
  }
  await loadData(db, emojiData, dataSource, eTag);
}
class Database {
  constructor({ dataSource = DEFAULT_DATA_SOURCE$1, locale: locale2 = DEFAULT_LOCALE$1, customEmoji = [] } = {}) {
    this.dataSource = dataSource;
    this.locale = locale2;
    this._dbName = `emoji-picker-element-${this.locale}`;
    this._db = void 0;
    this._lazyUpdate = void 0;
    this._custom = customEmojiIndex(customEmoji);
    this._clear = this._clear.bind(this);
    this._ready = this._init();
  }
  async _init() {
    const db = this._db = await openDatabase(this._dbName);
    addOnCloseListener(this._dbName, this._clear);
    const dataSource = this.dataSource;
    const empty = await isEmpty(db);
    if (empty) {
      await loadDataForFirstTime(db, dataSource);
    } else {
      this._lazyUpdate = checkForUpdates(db, dataSource);
    }
  }
  async ready() {
    const checkReady = async () => {
      if (!this._ready) {
        this._ready = this._init();
      }
      return this._ready;
    };
    await checkReady();
    if (!this._db) {
      await checkReady();
    }
  }
  async getEmojiByGroup(group) {
    assertNumber(group);
    await this.ready();
    return uniqEmoji(await getEmojiByGroup(this._db, group)).map(cleanEmoji);
  }
  async getEmojiBySearchQuery(query) {
    assertNonEmptyString(query);
    await this.ready();
    const customs = this._custom.search(query);
    const natives = uniqEmoji(await getEmojiBySearchQuery(this._db, query)).map(cleanEmoji);
    return [
      ...customs,
      ...natives
    ];
  }
  async getEmojiByShortcode(shortcode) {
    assertNonEmptyString(shortcode);
    await this.ready();
    const custom = this._custom.byShortcode(shortcode);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByShortcode(this._db, shortcode));
  }
  async getEmojiByUnicodeOrName(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    const custom = this._custom.byName(unicodeOrName);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByUnicode(this._db, unicodeOrName));
  }
  async getPreferredSkinTone() {
    await this.ready();
    return await get(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE) || 0;
  }
  async setPreferredSkinTone(skinTone) {
    assertNumber(skinTone);
    await this.ready();
    return set(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE, skinTone);
  }
  async incrementFavoriteEmojiCount(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    return incrementFavoriteEmojiCount(this._db, unicodeOrName);
  }
  async getTopFavoriteEmoji(limit) {
    assertNumber(limit);
    await this.ready();
    return (await getTopFavoriteEmoji(this._db, this._custom, limit)).map(cleanEmoji);
  }
  set customEmoji(customEmojis) {
    this._custom = customEmojiIndex(customEmojis);
  }
  get customEmoji() {
    return this._custom.all;
  }
  async _shutdown() {
    await this.ready();
    try {
      await this._lazyUpdate;
    } catch (err) {
    }
  }
  _clear() {
    this._db = this._ready = this._lazyUpdate = void 0;
  }
  async close() {
    await this._shutdown();
    await closeDatabase(this._dbName);
  }
  async delete() {
    await this._shutdown();
    await deleteDatabase(this._dbName);
  }
}
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b2) {
  return a != a ? b2 == b2 : a !== b2 || (a && typeof a === "object" || typeof a === "function");
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key2, value, important) {
  if (value === null) {
    node.style.removeProperty(key2);
  } else {
    node.style.setProperty(key2, value, important ? "important" : "");
  }
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = /* @__PURE__ */ new Set();
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list2, lookup, node, destroy, create_each_block2, next, get_context) {
  let o2 = old_blocks.length;
  let n = list2.length;
  let i = o2;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list2, i);
    const key2 = get_key(child_ctx);
    let block = lookup.get(key2);
    if (!block) {
      block = create_each_block2(key2, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key2, new_blocks[i] = block);
    if (key2 in old_indexes)
      deltas.set(key2, Math.abs(i - old_indexes[key2]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o2 && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o2 - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o2--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o2--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o2--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o2--;
    }
  }
  while (o2--) {
    const old_block = old_blocks[o2];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    {
      $$.fragment && $$.fragment.c();
    }
    mount_component(component, options.target, void 0, void 0);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
const allGroups = [
  [-1, "\u2728", "custom"],
  [0, "\u{1F600}", "smileys-emotion"],
  [1, "\u{1F44B}", "people-body"],
  [3, "\u{1F431}", "animals-nature"],
  [4, "\u{1F34E}", "food-drink"],
  [5, "\u{1F3E0}\uFE0F", "travel-places"],
  [6, "\u26BD", "activities"],
  [7, "\u{1F4DD}", "objects"],
  [8, "\u26D4\uFE0F", "symbols"],
  [9, "\u{1F3C1}", "flags"]
].map(([id, emoji, name]) => ({ id, emoji, name }));
const groups = allGroups.slice(1);
const customGroup = allGroups[0];
const MIN_SEARCH_TEXT_LENGTH = 2;
const NUM_SKIN_TONES = 6;
const rIC = typeof requestIdleCallback === "function" ? requestIdleCallback : setTimeout;
function hasZwj(emoji) {
  return emoji.unicode.includes("\u200D");
}
const versionsAndTestEmoji = {
  "\u{1FAE0}": 14,
  "\u{1F972}": 13.1,
  "\u{1F97B}": 12.1,
  "\u{1F970}": 11,
  "\u{1F929}": 5,
  "\u{1F471}\u200D\u2640\uFE0F": 4,
  "\u{1F923}": 3,
  "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F": 2,
  "\u{1F600}": 1,
  "\u{1F610}\uFE0F": 0.7,
  "\u{1F603}": 0.6
};
const TIMEOUT_BEFORE_LOADING_MESSAGE = 1e3;
const DEFAULT_SKIN_TONE_EMOJI = "\u{1F590}\uFE0F";
const DEFAULT_NUM_COLUMNS = 8;
const MOST_COMMONLY_USED_EMOJI = [
  "\u{1F60A}",
  "\u{1F612}",
  "\u2665\uFE0F",
  "\u{1F44D}\uFE0F",
  "\u{1F60D}",
  "\u{1F602}",
  "\u{1F62D}",
  "\u263A\uFE0F",
  "\u{1F614}",
  "\u{1F629}",
  "\u{1F60F}",
  "\u{1F495}",
  "\u{1F64C}",
  "\u{1F618}"
];
const FONT_FAMILY = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';
const DEFAULT_CATEGORY_SORTING = (a, b2) => a < b2 ? -1 : a > b2 ? 1 : 0;
const getTextFeature = (text2, color) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = `100px ${FONT_FAMILY}`;
  ctx.fillStyle = color;
  ctx.scale(0.01, 0.01);
  ctx.fillText(text2, 0, 0);
  return ctx.getImageData(0, 0, 1, 1).data;
};
const compareFeatures = (feature1, feature2) => {
  const feature1Str = [...feature1].join(",");
  const feature2Str = [...feature2].join(",");
  return feature1Str === feature2Str && !feature1Str.startsWith("0,0,0,");
};
function testColorEmojiSupported(text2) {
  const feature1 = getTextFeature(text2, "#000");
  const feature2 = getTextFeature(text2, "#fff");
  return feature1 && feature2 && compareFeatures(feature1, feature2);
}
function determineEmojiSupportLevel() {
  const entries = Object.entries(versionsAndTestEmoji);
  try {
    for (const [emoji, version] of entries) {
      if (testColorEmojiSupported(emoji)) {
        return version;
      }
    }
  } catch (e) {
  } finally {
  }
  return entries[0][1];
}
let promise;
const detectEmojiSupportLevel = () => {
  if (!promise) {
    promise = new Promise((resolve) => rIC(() => resolve(determineEmojiSupportLevel())));
  }
  return promise;
};
const supportedZwjEmojis = /* @__PURE__ */ new Map();
const VARIATION_SELECTOR = "\uFE0F";
const SKINTONE_MODIFIER = "\uD83C";
const ZWJ = "\u200D";
const LIGHT_SKIN_TONE = 127995;
const LIGHT_SKIN_TONE_MODIFIER = 57339;
function applySkinTone(str, skinTone) {
  if (skinTone === 0) {
    return str;
  }
  const zwjIndex = str.indexOf(ZWJ);
  if (zwjIndex !== -1) {
    return str.substring(0, zwjIndex) + String.fromCodePoint(LIGHT_SKIN_TONE + skinTone - 1) + str.substring(zwjIndex);
  }
  if (str.endsWith(VARIATION_SELECTOR)) {
    str = str.substring(0, str.length - 1);
  }
  return str + SKINTONE_MODIFIER + String.fromCodePoint(LIGHT_SKIN_TONE_MODIFIER + skinTone - 1);
}
function halt(event) {
  event.preventDefault();
  event.stopPropagation();
}
function incrementOrDecrement(decrement, val, arr) {
  val += decrement ? -1 : 1;
  if (val < 0) {
    val = arr.length - 1;
  } else if (val >= arr.length) {
    val = 0;
  }
  return val;
}
function uniqBy(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key2 = func(item);
    if (!set2.has(key2)) {
      set2.add(key2);
      res.push(item);
    }
  }
  return res;
}
function summarizeEmojisForUI(emojis, emojiSupportLevel) {
  const toSimpleSkinsMap = (skins) => {
    const res = {};
    for (const skin of skins) {
      if (typeof skin.tone === "number" && skin.version <= emojiSupportLevel) {
        res[skin.tone] = skin.unicode;
      }
    }
    return res;
  };
  return emojis.map(({ unicode, skins, shortcodes, url, name, category }) => ({
    unicode,
    name,
    shortcodes,
    url,
    category,
    id: unicode || name,
    skins: skins && toSimpleSkinsMap(skins),
    title: (shortcodes || []).join(", ")
  }));
}
const rAF = requestAnimationFrame;
let resizeObserverSupported = typeof ResizeObserver === "function";
function calculateWidth(node, onUpdate) {
  let resizeObserver;
  if (resizeObserverSupported) {
    resizeObserver = new ResizeObserver((entries) => onUpdate(entries[0].contentRect.width));
    resizeObserver.observe(node);
  } else {
    rAF(() => onUpdate(node.getBoundingClientRect().width));
  }
  return {
    destroy() {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    }
  };
}
function calculateTextWidth(node) {
  {
    const range = document.createRange();
    range.selectNode(node.firstChild);
    return range.getBoundingClientRect().width;
  }
}
let baselineEmojiWidth;
function checkZwjSupport(zwjEmojisToCheck, baselineEmoji, emojiToDomNode) {
  for (const emoji of zwjEmojisToCheck) {
    const domNode = emojiToDomNode(emoji);
    const emojiWidth = calculateTextWidth(domNode);
    if (typeof baselineEmojiWidth === "undefined") {
      baselineEmojiWidth = calculateTextWidth(baselineEmoji);
    }
    const supported = emojiWidth / 1.8 < baselineEmojiWidth;
    supportedZwjEmojis.set(emoji.unicode, supported);
  }
}
function uniq(arr) {
  return uniqBy(arr, (_) => _);
}
function resetScrollTopIfPossible(element2) {
  if (element2) {
    element2.scrollTop = 0;
  }
}
const { Map: Map_1 } = globals;
function get_each_context(ctx, list2, i) {
  const child_ctx = ctx.slice();
  child_ctx[64] = list2[i];
  child_ctx[66] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list2, i) {
  const child_ctx = ctx.slice();
  child_ctx[67] = list2[i];
  child_ctx[66] = i;
  return child_ctx;
}
function get_each_context_2(ctx, list2, i) {
  const child_ctx = ctx.slice();
  child_ctx[64] = list2[i];
  child_ctx[66] = i;
  return child_ctx;
}
function get_each_context_3(ctx, list2, i) {
  const child_ctx = ctx.slice();
  child_ctx[70] = list2[i];
  return child_ctx;
}
function get_each_context_4(ctx, list2, i) {
  const child_ctx = ctx.slice();
  child_ctx[73] = list2[i];
  child_ctx[66] = i;
  return child_ctx;
}
function create_each_block_4(key_1, ctx) {
  let div;
  let t_value = ctx[73] + "";
  let t;
  let div_id_value;
  let div_class_value;
  let div_aria_selected_value;
  let div_title_value;
  let div_aria_label_value;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      t = text(t_value);
      attr(div, "id", div_id_value = "skintone-" + ctx[66]);
      attr(div, "class", div_class_value = "emoji hide-focus " + (ctx[66] === ctx[20] ? "active" : ""));
      attr(div, "aria-selected", div_aria_selected_value = ctx[66] === ctx[20]);
      attr(div, "role", "option");
      attr(div, "title", div_title_value = ctx[0].skinTones[ctx[66]]);
      attr(div, "tabindex", "-1");
      attr(div, "aria-label", div_aria_label_value = ctx[0].skinTones[ctx[66]]);
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 512 && t_value !== (t_value = ctx[73] + ""))
        set_data(t, t_value);
      if (dirty[0] & 512 && div_id_value !== (div_id_value = "skintone-" + ctx[66])) {
        attr(div, "id", div_id_value);
      }
      if (dirty[0] & 1049088 && div_class_value !== (div_class_value = "emoji hide-focus " + (ctx[66] === ctx[20] ? "active" : ""))) {
        attr(div, "class", div_class_value);
      }
      if (dirty[0] & 1049088 && div_aria_selected_value !== (div_aria_selected_value = ctx[66] === ctx[20])) {
        attr(div, "aria-selected", div_aria_selected_value);
      }
      if (dirty[0] & 513 && div_title_value !== (div_title_value = ctx[0].skinTones[ctx[66]])) {
        attr(div, "title", div_title_value);
      }
      if (dirty[0] & 513 && div_aria_label_value !== (div_aria_label_value = ctx[0].skinTones[ctx[66]])) {
        attr(div, "aria-label", div_aria_label_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block_3(key_1, ctx) {
  let button;
  let div;
  let t_value = ctx[70].emoji + "";
  let t;
  let button_aria_controls_value;
  let button_aria_label_value;
  let button_aria_selected_value;
  let button_title_value;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[50](ctx[70]);
  }
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      div = element("div");
      t = text(t_value);
      attr(div, "class", "nav-emoji emoji");
      attr(button, "role", "tab");
      attr(button, "class", "nav-button");
      attr(button, "aria-controls", button_aria_controls_value = "tab-" + ctx[70].id);
      attr(button, "aria-label", button_aria_label_value = ctx[0].categories[ctx[70].name]);
      attr(button, "aria-selected", button_aria_selected_value = !ctx[4] && ctx[13].id === ctx[70].id);
      attr(button, "title", button_title_value = ctx[0].categories[ctx[70].name]);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, div);
      append(div, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 4096 && t_value !== (t_value = ctx[70].emoji + ""))
        set_data(t, t_value);
      if (dirty[0] & 4096 && button_aria_controls_value !== (button_aria_controls_value = "tab-" + ctx[70].id)) {
        attr(button, "aria-controls", button_aria_controls_value);
      }
      if (dirty[0] & 4097 && button_aria_label_value !== (button_aria_label_value = ctx[0].categories[ctx[70].name])) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 12304 && button_aria_selected_value !== (button_aria_selected_value = !ctx[4] && ctx[13].id === ctx[70].id)) {
        attr(button, "aria-selected", button_aria_selected_value);
      }
      if (dirty[0] & 4097 && button_title_value !== (button_title_value = ctx[0].categories[ctx[70].name])) {
        attr(button, "title", button_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block_1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      attr(img, "class", "custom-emoji");
      if (!src_url_equal(img.src, img_src_value = ctx[64].url))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(img, "loading", "lazy");
    },
    m(target, anchor) {
      insert(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32768 && !src_url_equal(img.src, img_src_value = ctx2[64].url)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block_1(ctx) {
  let t_value = ctx[27](ctx[64], ctx[8]) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 33024 && t_value !== (t_value = ctx2[27](ctx2[64], ctx2[8]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(key_1, ctx) {
  let button;
  let button_role_value;
  let button_aria_selected_value;
  let button_aria_label_value;
  let button_title_value;
  let button_class_value;
  let button_id_value;
  function select_block_type(ctx2, dirty) {
    if (ctx2[64].unicode)
      return create_if_block_1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      if_block.c();
      attr(button, "role", button_role_value = ctx[4] ? "option" : "menuitem");
      attr(button, "aria-selected", button_aria_selected_value = ctx[4] ? ctx[66] == ctx[5] : "");
      attr(button, "aria-label", button_aria_label_value = ctx[28](ctx[64], ctx[8]));
      attr(button, "title", button_title_value = ctx[64].title);
      attr(button, "class", button_class_value = "emoji " + (ctx[4] && ctx[66] === ctx[5] ? "active" : ""));
      attr(button, "id", button_id_value = "emo-" + ctx[64].id);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_block.m(button, null);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(button, null);
        }
      }
      if (dirty[0] & 16 && button_role_value !== (button_role_value = ctx[4] ? "option" : "menuitem")) {
        attr(button, "role", button_role_value);
      }
      if (dirty[0] & 32816 && button_aria_selected_value !== (button_aria_selected_value = ctx[4] ? ctx[66] == ctx[5] : "")) {
        attr(button, "aria-selected", button_aria_selected_value);
      }
      if (dirty[0] & 33024 && button_aria_label_value !== (button_aria_label_value = ctx[28](ctx[64], ctx[8]))) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 32768 && button_title_value !== (button_title_value = ctx[64].title)) {
        attr(button, "title", button_title_value);
      }
      if (dirty[0] & 32816 && button_class_value !== (button_class_value = "emoji " + (ctx[4] && ctx[66] === ctx[5] ? "active" : ""))) {
        attr(button, "class", button_class_value);
      }
      if (dirty[0] & 32768 && button_id_value !== (button_id_value = "emo-" + ctx[64].id)) {
        attr(button, "id", button_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_block.d();
    }
  };
}
function create_each_block_1(key_1, ctx) {
  let div0;
  let t_value = (ctx[4] ? ctx[0].searchResultsLabel : ctx[67].category ? ctx[67].category : ctx[15].length > 1 ? ctx[0].categories.custom : ctx[0].categories[ctx[13].name]) + "";
  let t;
  let div0_id_value;
  let div0_class_value;
  let div1;
  let each_blocks = [];
  let each_1_lookup = new Map_1();
  let div1_role_value;
  let div1_aria_labelledby_value;
  let div1_id_value;
  let each_value_2 = ctx[67].emojis;
  const get_key = (ctx2) => ctx2[64].id;
  for (let i = 0; i < each_value_2.length; i += 1) {
    let child_ctx = get_each_context_2(ctx, each_value_2, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block_2(key2, child_ctx));
  }
  return {
    key: key_1,
    first: null,
    c() {
      div0 = element("div");
      t = text(t_value);
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div0, "id", div0_id_value = "menu-label-" + ctx[66]);
      attr(div0, "class", div0_class_value = "category " + (ctx[15].length === 1 && ctx[15][0].category === "" ? "gone" : ""));
      attr(div0, "aria-hidden", "true");
      attr(div1, "class", "emoji-menu");
      attr(div1, "role", div1_role_value = ctx[4] ? "listbox" : "menu");
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = "menu-label-" + ctx[66]);
      attr(div1, "id", div1_id_value = ctx[4] ? "search-results" : "");
      this.first = div0;
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      append(div0, t);
      insert(target, div1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 40977 && t_value !== (t_value = (ctx[4] ? ctx[0].searchResultsLabel : ctx[67].category ? ctx[67].category : ctx[15].length > 1 ? ctx[0].categories.custom : ctx[0].categories[ctx[13].name]) + ""))
        set_data(t, t_value);
      if (dirty[0] & 32768 && div0_id_value !== (div0_id_value = "menu-label-" + ctx[66])) {
        attr(div0, "id", div0_id_value);
      }
      if (dirty[0] & 32768 && div0_class_value !== (div0_class_value = "category " + (ctx[15].length === 1 && ctx[15][0].category === "" ? "gone" : ""))) {
        attr(div0, "class", div0_class_value);
      }
      if (dirty[0] & 402686256) {
        each_value_2 = ctx[67].emojis;
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, div1, destroy_block, create_each_block_2, null, get_each_context_2);
      }
      if (dirty[0] & 16 && div1_role_value !== (div1_role_value = ctx[4] ? "listbox" : "menu")) {
        attr(div1, "role", div1_role_value);
      }
      if (dirty[0] & 32768 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = "menu-label-" + ctx[66])) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (dirty[0] & 16 && div1_id_value !== (div1_id_value = ctx[4] ? "search-results" : "")) {
        attr(div1, "id", div1_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function create_else_block(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      attr(img, "class", "custom-emoji");
      if (!src_url_equal(img.src, img_src_value = ctx[64].url))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(img, "loading", "lazy");
    },
    m(target, anchor) {
      insert(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1024 && !src_url_equal(img.src, img_src_value = ctx2[64].url)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block(ctx) {
  let t_value = ctx[27](ctx[64], ctx[8]) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1280 && t_value !== (t_value = ctx2[27](ctx2[64], ctx2[8]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(key_1, ctx) {
  let button;
  let button_aria_label_value;
  let button_title_value;
  let button_id_value;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[64].unicode)
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      button = element("button");
      if_block.c();
      attr(button, "role", "menuitem");
      attr(button, "aria-label", button_aria_label_value = ctx[28](ctx[64], ctx[8]));
      attr(button, "title", button_title_value = ctx[64].title);
      attr(button, "class", "emoji");
      attr(button, "id", button_id_value = "fav-" + ctx[64].id);
      this.first = button;
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_block.m(button, null);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(button, null);
        }
      }
      if (dirty[0] & 1280 && button_aria_label_value !== (button_aria_label_value = ctx[28](ctx[64], ctx[8]))) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty[0] & 1024 && button_title_value !== (button_title_value = ctx[64].title)) {
        attr(button, "title", button_title_value);
      }
      if (dirty[0] & 1024 && button_id_value !== (button_id_value = "fav-" + ctx[64].id)) {
        attr(button, "id", button_id_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let section;
  let div0;
  let div4;
  let div1;
  let input;
  let input_placeholder_value;
  let input_aria_expanded_value;
  let input_aria_activedescendant_value;
  let label;
  let t0_value = ctx[0].searchLabel + "";
  let t0;
  let span0;
  let t1_value = ctx[0].searchDescription + "";
  let t1;
  let div2;
  let button0;
  let t2;
  let button0_class_value;
  let div2_class_value;
  let span1;
  let t3_value = ctx[0].skinToneDescription + "";
  let t3;
  let div3;
  let each_blocks_3 = [];
  let each0_lookup = new Map_1();
  let div3_class_value;
  let div3_aria_label_value;
  let div3_aria_activedescendant_value;
  let div3_aria_hidden_value;
  let div5;
  let each_blocks_2 = [];
  let each1_lookup = new Map_1();
  let div5_aria_label_value;
  let div7;
  let div6;
  let div8;
  let t4;
  let div8_class_value;
  let div10;
  let div9;
  let each_blocks_1 = [];
  let each2_lookup = new Map_1();
  let div10_class_value;
  let div10_role_value;
  let div10_aria_label_value;
  let div10_id_value;
  let div11;
  let each_blocks = [];
  let each3_lookup = new Map_1();
  let div11_class_value;
  let div11_aria_label_value;
  let button1;
  let section_aria_label_value;
  let mounted;
  let dispose;
  let each_value_4 = ctx[9];
  const get_key = (ctx2) => ctx2[73];
  for (let i = 0; i < each_value_4.length; i += 1) {
    let child_ctx = get_each_context_4(ctx, each_value_4, i);
    let key2 = get_key(child_ctx);
    each0_lookup.set(key2, each_blocks_3[i] = create_each_block_4(key2, child_ctx));
  }
  let each_value_3 = ctx[12];
  const get_key_1 = (ctx2) => ctx2[70].id;
  for (let i = 0; i < each_value_3.length; i += 1) {
    let child_ctx = get_each_context_3(ctx, each_value_3, i);
    let key2 = get_key_1(child_ctx);
    each1_lookup.set(key2, each_blocks_2[i] = create_each_block_3(key2, child_ctx));
  }
  let each_value_1 = ctx[15];
  const get_key_2 = (ctx2) => ctx2[67].category;
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key2 = get_key_2(child_ctx);
    each2_lookup.set(key2, each_blocks_1[i] = create_each_block_1(key2, child_ctx));
  }
  let each_value = ctx[10];
  const get_key_3 = (ctx2) => ctx2[64].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key2 = get_key_3(child_ctx);
    each3_lookup.set(key2, each_blocks[i] = create_each_block(key2, child_ctx));
  }
  return {
    c() {
      section = element("section");
      div0 = element("div");
      div4 = element("div");
      div1 = element("div");
      input = element("input");
      label = element("label");
      t0 = text(t0_value);
      span0 = element("span");
      t1 = text(t1_value);
      div2 = element("div");
      button0 = element("button");
      t2 = text(ctx[21]);
      span1 = element("span");
      t3 = text(t3_value);
      div3 = element("div");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      div5 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      div7 = element("div");
      div6 = element("div");
      div8 = element("div");
      t4 = text(ctx[18]);
      div10 = element("div");
      div9 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      div11 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      button1 = element("button");
      button1.textContent = "\u{1F600}";
      attr(div0, "class", "pad-top");
      attr(input, "id", "search");
      attr(input, "class", "search");
      attr(input, "type", "search");
      attr(input, "role", "combobox");
      attr(input, "enterkeyhint", "search");
      attr(input, "placeholder", input_placeholder_value = ctx[0].searchLabel);
      attr(input, "autocapitalize", "none");
      attr(input, "autocomplete", "off");
      attr(input, "spellcheck", "true");
      attr(input, "aria-expanded", input_aria_expanded_value = !!(ctx[4] && ctx[1].length));
      attr(input, "aria-controls", "search-results");
      attr(input, "aria-describedby", "search-description");
      attr(input, "aria-autocomplete", "list");
      attr(input, "aria-activedescendant", input_aria_activedescendant_value = ctx[26] ? `emo-${ctx[26]}` : "");
      attr(label, "class", "sr-only");
      attr(label, "for", "search");
      attr(span0, "id", "search-description");
      attr(span0, "class", "sr-only");
      attr(div1, "class", "search-wrapper");
      attr(button0, "id", "skintone-button");
      attr(button0, "class", button0_class_value = "emoji " + (ctx[6] ? "hide-focus" : ""));
      attr(button0, "aria-label", ctx[23]);
      attr(button0, "title", ctx[23]);
      attr(button0, "aria-describedby", "skintone-description");
      attr(button0, "aria-haspopup", "listbox");
      attr(button0, "aria-expanded", ctx[6]);
      attr(button0, "aria-controls", "skintone-list");
      attr(div2, "class", div2_class_value = "skintone-button-wrapper " + (ctx[19] ? "expanded" : ""));
      attr(span1, "id", "skintone-description");
      attr(span1, "class", "sr-only");
      attr(div3, "id", "skintone-list");
      attr(div3, "class", div3_class_value = "skintone-list " + (ctx[6] ? "" : "hidden no-animate"));
      set_style(div3, "transform", "translateY(" + (ctx[6] ? 0 : "calc(-1 * var(--num-skintones) * var(--total-emoji-size))") + ")");
      attr(div3, "role", "listbox");
      attr(div3, "aria-label", div3_aria_label_value = ctx[0].skinTonesLabel);
      attr(div3, "aria-activedescendant", div3_aria_activedescendant_value = "skintone-" + ctx[20]);
      attr(div3, "aria-hidden", div3_aria_hidden_value = !ctx[6]);
      attr(div4, "class", "search-row");
      attr(div5, "class", "nav");
      attr(div5, "role", "tablist");
      set_style(div5, "grid-template-columns", "repeat(" + ctx[12].length + ", 1fr)");
      attr(div5, "aria-label", div5_aria_label_value = ctx[0].categoriesLabel);
      attr(div6, "class", "indicator");
      set_style(div6, "transform", "translateX(" + (ctx[24] ? -1 : 1) * ctx[11] * 100 + "%)");
      attr(div7, "class", "indicator-wrapper");
      attr(div8, "class", div8_class_value = "message " + (ctx[18] ? "" : "gone"));
      attr(div8, "role", "alert");
      attr(div8, "aria-live", "polite");
      attr(div10, "class", div10_class_value = "tabpanel " + (!ctx[14] || ctx[18] ? "gone" : ""));
      attr(div10, "role", div10_role_value = ctx[4] ? "region" : "tabpanel");
      attr(div10, "aria-label", div10_aria_label_value = ctx[4] ? ctx[0].searchResultsLabel : ctx[0].categories[ctx[13].name]);
      attr(div10, "id", div10_id_value = ctx[4] ? "" : `tab-${ctx[13].id}`);
      attr(div10, "tabindex", "0");
      attr(div11, "class", div11_class_value = "favorites emoji-menu " + (ctx[18] ? "gone" : ""));
      attr(div11, "role", "menu");
      attr(div11, "aria-label", div11_aria_label_value = ctx[0].favoritesLabel);
      set_style(div11, "padding-inline-end", ctx[25] + "px");
      attr(button1, "aria-hidden", "true");
      attr(button1, "tabindex", "-1");
      attr(button1, "class", "abs-pos hidden emoji");
      attr(section, "class", "picker");
      attr(section, "aria-label", section_aria_label_value = ctx[0].regionLabel);
      attr(section, "style", ctx[22]);
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, div0);
      append(section, div4);
      append(div4, div1);
      append(div1, input);
      set_input_value(input, ctx[2]);
      append(div1, label);
      append(label, t0);
      append(div1, span0);
      append(span0, t1);
      append(div4, div2);
      append(div2, button0);
      append(button0, t2);
      append(div4, span1);
      append(span1, t3);
      append(div4, div3);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(div3, null);
      }
      ctx[49](div3);
      append(section, div5);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div5, null);
      }
      append(section, div7);
      append(div7, div6);
      append(section, div8);
      append(div8, t4);
      append(section, div10);
      append(div10, div9);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div9, null);
      }
      ctx[51](div10);
      append(section, div11);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div11, null);
      }
      append(section, button1);
      ctx[52](button1);
      ctx[53](section);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[48]),
          listen(input, "keydown", ctx[30]),
          listen(button0, "click", ctx[35]),
          listen(div3, "focusout", ctx[38]),
          listen(div3, "click", ctx[34]),
          listen(div3, "keydown", ctx[36]),
          listen(div3, "keyup", ctx[37]),
          listen(div5, "keydown", ctx[32]),
          action_destroyer(ctx[29].call(null, div9)),
          listen(div10, "click", ctx[33]),
          listen(div11, "click", ctx[33])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && input_placeholder_value !== (input_placeholder_value = ctx2[0].searchLabel)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty[0] & 18 && input_aria_expanded_value !== (input_aria_expanded_value = !!(ctx2[4] && ctx2[1].length))) {
        attr(input, "aria-expanded", input_aria_expanded_value);
      }
      if (dirty[0] & 67108864 && input_aria_activedescendant_value !== (input_aria_activedescendant_value = ctx2[26] ? `emo-${ctx2[26]}` : "")) {
        attr(input, "aria-activedescendant", input_aria_activedescendant_value);
      }
      if (dirty[0] & 4) {
        set_input_value(input, ctx2[2]);
      }
      if (dirty[0] & 1 && t0_value !== (t0_value = ctx2[0].searchLabel + ""))
        set_data(t0, t0_value);
      if (dirty[0] & 1 && t1_value !== (t1_value = ctx2[0].searchDescription + ""))
        set_data(t1, t1_value);
      if (dirty[0] & 2097152)
        set_data(t2, ctx2[21]);
      if (dirty[0] & 64 && button0_class_value !== (button0_class_value = "emoji " + (ctx2[6] ? "hide-focus" : ""))) {
        attr(button0, "class", button0_class_value);
      }
      if (dirty[0] & 8388608) {
        attr(button0, "aria-label", ctx2[23]);
      }
      if (dirty[0] & 8388608) {
        attr(button0, "title", ctx2[23]);
      }
      if (dirty[0] & 64) {
        attr(button0, "aria-expanded", ctx2[6]);
      }
      if (dirty[0] & 524288 && div2_class_value !== (div2_class_value = "skintone-button-wrapper " + (ctx2[19] ? "expanded" : ""))) {
        attr(div2, "class", div2_class_value);
      }
      if (dirty[0] & 1 && t3_value !== (t3_value = ctx2[0].skinToneDescription + ""))
        set_data(t3, t3_value);
      if (dirty[0] & 1049089) {
        each_value_4 = ctx2[9];
        each_blocks_3 = update_keyed_each(each_blocks_3, dirty, get_key, 1, ctx2, each_value_4, each0_lookup, div3, destroy_block, create_each_block_4, null, get_each_context_4);
      }
      if (dirty[0] & 64 && div3_class_value !== (div3_class_value = "skintone-list " + (ctx2[6] ? "" : "hidden no-animate"))) {
        attr(div3, "class", div3_class_value);
      }
      if (dirty[0] & 64) {
        set_style(div3, "transform", "translateY(" + (ctx2[6] ? 0 : "calc(-1 * var(--num-skintones) * var(--total-emoji-size))") + ")");
      }
      if (dirty[0] & 1 && div3_aria_label_value !== (div3_aria_label_value = ctx2[0].skinTonesLabel)) {
        attr(div3, "aria-label", div3_aria_label_value);
      }
      if (dirty[0] & 1048576 && div3_aria_activedescendant_value !== (div3_aria_activedescendant_value = "skintone-" + ctx2[20])) {
        attr(div3, "aria-activedescendant", div3_aria_activedescendant_value);
      }
      if (dirty[0] & 64 && div3_aria_hidden_value !== (div3_aria_hidden_value = !ctx2[6])) {
        attr(div3, "aria-hidden", div3_aria_hidden_value);
      }
      if (dirty[0] & 12305 | dirty[1] & 1) {
        each_value_3 = ctx2[12];
        each_blocks_2 = update_keyed_each(each_blocks_2, dirty, get_key_1, 1, ctx2, each_value_3, each1_lookup, div5, destroy_block, create_each_block_3, null, get_each_context_3);
      }
      if (dirty[0] & 4096) {
        set_style(div5, "grid-template-columns", "repeat(" + ctx2[12].length + ", 1fr)");
      }
      if (dirty[0] & 1 && div5_aria_label_value !== (div5_aria_label_value = ctx2[0].categoriesLabel)) {
        attr(div5, "aria-label", div5_aria_label_value);
      }
      if (dirty[0] & 16779264) {
        set_style(div6, "transform", "translateX(" + (ctx2[24] ? -1 : 1) * ctx2[11] * 100 + "%)");
      }
      if (dirty[0] & 262144)
        set_data(t4, ctx2[18]);
      if (dirty[0] & 262144 && div8_class_value !== (div8_class_value = "message " + (ctx2[18] ? "" : "gone"))) {
        attr(div8, "class", div8_class_value);
      }
      if (dirty[0] & 402694449) {
        each_value_1 = ctx2[15];
        each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key_2, 1, ctx2, each_value_1, each2_lookup, div9, destroy_block, create_each_block_1, null, get_each_context_1);
      }
      if (dirty[0] & 278528 && div10_class_value !== (div10_class_value = "tabpanel " + (!ctx2[14] || ctx2[18] ? "gone" : ""))) {
        attr(div10, "class", div10_class_value);
      }
      if (dirty[0] & 16 && div10_role_value !== (div10_role_value = ctx2[4] ? "region" : "tabpanel")) {
        attr(div10, "role", div10_role_value);
      }
      if (dirty[0] & 8209 && div10_aria_label_value !== (div10_aria_label_value = ctx2[4] ? ctx2[0].searchResultsLabel : ctx2[0].categories[ctx2[13].name])) {
        attr(div10, "aria-label", div10_aria_label_value);
      }
      if (dirty[0] & 8208 && div10_id_value !== (div10_id_value = ctx2[4] ? "" : `tab-${ctx2[13].id}`)) {
        attr(div10, "id", div10_id_value);
      }
      if (dirty[0] & 402654464) {
        each_value = ctx2[10];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key_3, 1, ctx2, each_value, each3_lookup, div11, destroy_block, create_each_block, null, get_each_context);
      }
      if (dirty[0] & 262144 && div11_class_value !== (div11_class_value = "favorites emoji-menu " + (ctx2[18] ? "gone" : ""))) {
        attr(div11, "class", div11_class_value);
      }
      if (dirty[0] & 1 && div11_aria_label_value !== (div11_aria_label_value = ctx2[0].favoritesLabel)) {
        attr(div11, "aria-label", div11_aria_label_value);
      }
      if (dirty[0] & 33554432) {
        set_style(div11, "padding-inline-end", ctx2[25] + "px");
      }
      if (dirty[0] & 1 && section_aria_label_value !== (section_aria_label_value = ctx2[0].regionLabel)) {
        attr(section, "aria-label", section_aria_label_value);
      }
      if (dirty[0] & 4194304) {
        attr(section, "style", ctx2[22]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(section);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].d();
      }
      ctx[49](null);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].d();
      }
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].d();
      }
      ctx[51](null);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      ctx[52](null);
      ctx[53](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { skinToneEmoji } = $$props;
  let { i18n } = $$props;
  let { database } = $$props;
  let { customEmoji } = $$props;
  let { customCategorySorting } = $$props;
  let { emojiVersion } = $$props;
  let initialLoad = true;
  let currentEmojis = [];
  let currentEmojisWithCategories = [];
  let rawSearchText = "";
  let searchText = "";
  let rootElement;
  let baselineEmoji;
  let tabpanelElement;
  let searchMode = false;
  let activeSearchItem = -1;
  let message2;
  let skinTonePickerExpanded = false;
  let skinTonePickerExpandedAfterAnimation = false;
  let skinToneDropdown;
  let currentSkinTone = 0;
  let activeSkinTone = 0;
  let skinToneButtonText;
  let pickerStyle;
  let skinToneButtonLabel = "";
  let skinTones = [];
  let currentFavorites = [];
  let defaultFavoriteEmojis;
  let numColumns = DEFAULT_NUM_COLUMNS;
  let isRtl = false;
  let scrollbarWidth = 0;
  let currentGroupIndex = 0;
  let groups$1 = groups;
  let currentGroup;
  let databaseLoaded = false;
  let activeSearchItemId;
  const focus = (id) => {
    rootElement.getRootNode().getElementById(id).focus();
  };
  const fireEvent = (name, detail) => {
    rootElement.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  };
  const unicodeWithSkin = (emoji, currentSkinTone2) => currentSkinTone2 && emoji.skins && emoji.skins[currentSkinTone2] || emoji.unicode;
  const labelWithSkin = (emoji, currentSkinTone2) => uniq([
    emoji.name || unicodeWithSkin(emoji, currentSkinTone2),
    ...emoji.shortcodes || []
  ]).join(", ");
  const isSkinToneOption = (element2) => /^skintone-/.test(element2.id);
  onMount(() => {
    if (!emojiVersion) {
      detectEmojiSupportLevel().then((level) => {
        if (!level) {
          $$invalidate(18, message2 = i18n.emojiUnsupportedMessage);
        }
      });
    }
  });
  function calculateEmojiGridStyle(node) {
    return calculateWidth(node, (width) => {
      {
        const style2 = getComputedStyle(rootElement);
        const newNumColumns = parseInt(style2.getPropertyValue("--num-columns"), 10);
        const newIsRtl = style2.getPropertyValue("direction") === "rtl";
        const parentWidth = node.parentElement.getBoundingClientRect().width;
        const newScrollbarWidth = parentWidth - width;
        $$invalidate(47, numColumns = newNumColumns);
        $$invalidate(25, scrollbarWidth = newScrollbarWidth);
        $$invalidate(24, isRtl = newIsRtl);
      }
    });
  }
  function checkZwjSupportAndUpdate(zwjEmojisToCheck) {
    const rootNode = rootElement.getRootNode();
    const emojiToDomNode = (emoji) => rootNode.getElementById(`emo-${emoji.id}`);
    checkZwjSupport(zwjEmojisToCheck, baselineEmoji, emojiToDomNode);
    $$invalidate(1, currentEmojis = currentEmojis);
  }
  function isZwjSupported(emoji) {
    return !emoji.unicode || !hasZwj(emoji) || supportedZwjEmojis.get(emoji.unicode);
  }
  async function filterEmojisByVersion(emojis) {
    const emojiSupportLevel = emojiVersion || await detectEmojiSupportLevel();
    return emojis.filter(({ version }) => !version || version <= emojiSupportLevel);
  }
  async function summarizeEmojis(emojis) {
    return summarizeEmojisForUI(emojis, emojiVersion || await detectEmojiSupportLevel());
  }
  async function getEmojisByGroup(group) {
    const emoji = group === -1 ? customEmoji : await database.getEmojiByGroup(group);
    return summarizeEmojis(await filterEmojisByVersion(emoji));
  }
  async function getEmojisBySearchQuery(query) {
    return summarizeEmojis(await filterEmojisByVersion(await database.getEmojiBySearchQuery(query)));
  }
  function onSearchKeydown(event) {
    if (!searchMode || !currentEmojis.length) {
      return;
    }
    const goToNextOrPrevious = (previous) => {
      halt(event);
      $$invalidate(5, activeSearchItem = incrementOrDecrement(previous, activeSearchItem, currentEmojis));
    };
    switch (event.key) {
      case "ArrowDown":
        return goToNextOrPrevious(false);
      case "ArrowUp":
        return goToNextOrPrevious(true);
      case "Enter":
        if (activeSearchItem !== -1) {
          halt(event);
          return clickEmoji(currentEmojis[activeSearchItem].id);
        } else if (currentEmojis.length) {
          $$invalidate(5, activeSearchItem = 0);
        }
    }
  }
  function onNavClick(group) {
    $$invalidate(2, rawSearchText = "");
    $$invalidate(45, searchText = "");
    $$invalidate(5, activeSearchItem = -1);
    $$invalidate(11, currentGroupIndex = groups$1.findIndex((_) => _.id === group.id));
  }
  function onNavKeydown(event) {
    const { target, key: key2 } = event;
    const doFocus = (el) => {
      if (el) {
        halt(event);
        el.focus();
      }
    };
    switch (key2) {
      case "ArrowLeft":
        return doFocus(target.previousSibling);
      case "ArrowRight":
        return doFocus(target.nextSibling);
      case "Home":
        return doFocus(target.parentElement.firstChild);
      case "End":
        return doFocus(target.parentElement.lastChild);
    }
  }
  async function clickEmoji(unicodeOrName) {
    const emoji = await database.getEmojiByUnicodeOrName(unicodeOrName);
    const emojiSummary = [...currentEmojis, ...currentFavorites].find((_) => _.id === unicodeOrName);
    const skinTonedUnicode = emojiSummary.unicode && unicodeWithSkin(emojiSummary, currentSkinTone);
    await database.incrementFavoriteEmojiCount(unicodeOrName);
    fireEvent("emoji-click", {
      emoji,
      skinTone: currentSkinTone,
      ...skinTonedUnicode && { unicode: skinTonedUnicode },
      ...emojiSummary.name && { name: emojiSummary.name }
    });
  }
  async function onEmojiClick(event) {
    const { target } = event;
    if (!target.classList.contains("emoji")) {
      return;
    }
    halt(event);
    const id = target.id.substring(4);
    clickEmoji(id);
  }
  async function onSkinToneOptionsClick(event) {
    const { target } = event;
    if (!isSkinToneOption(target)) {
      return;
    }
    halt(event);
    const skinTone = parseInt(target.id.slice(9), 10);
    $$invalidate(8, currentSkinTone = skinTone);
    $$invalidate(6, skinTonePickerExpanded = false);
    focus("skintone-button");
    fireEvent("skin-tone-change", { skinTone });
    database.setPreferredSkinTone(skinTone);
  }
  async function onClickSkinToneButton(event) {
    $$invalidate(6, skinTonePickerExpanded = !skinTonePickerExpanded);
    $$invalidate(20, activeSkinTone = currentSkinTone);
    if (skinTonePickerExpanded) {
      halt(event);
      rAF(() => focus(`skintone-${activeSkinTone}`));
    }
  }
  function onSkinToneOptionsKeydown(event) {
    if (!skinTonePickerExpanded) {
      return;
    }
    const changeActiveSkinTone = async (nextSkinTone) => {
      halt(event);
      $$invalidate(20, activeSkinTone = nextSkinTone);
      await tick();
      focus(`skintone-${activeSkinTone}`);
    };
    switch (event.key) {
      case "ArrowUp":
        return changeActiveSkinTone(incrementOrDecrement(true, activeSkinTone, skinTones));
      case "ArrowDown":
        return changeActiveSkinTone(incrementOrDecrement(false, activeSkinTone, skinTones));
      case "Home":
        return changeActiveSkinTone(0);
      case "End":
        return changeActiveSkinTone(skinTones.length - 1);
      case "Enter":
        return onSkinToneOptionsClick(event);
      case "Escape":
        halt(event);
        $$invalidate(6, skinTonePickerExpanded = false);
        return focus("skintone-button");
    }
  }
  function onSkinToneOptionsKeyup(event) {
    if (!skinTonePickerExpanded) {
      return;
    }
    switch (event.key) {
      case " ":
        return onSkinToneOptionsClick(event);
    }
  }
  async function onSkinToneOptionsFocusOut(event) {
    const { relatedTarget } = event;
    if (!relatedTarget || !isSkinToneOption(relatedTarget)) {
      $$invalidate(6, skinTonePickerExpanded = false);
    }
  }
  function input_input_handler() {
    rawSearchText = this.value;
    $$invalidate(2, rawSearchText);
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      skinToneDropdown = $$value;
      $$invalidate(7, skinToneDropdown);
    });
  }
  const click_handler = (group) => onNavClick(group);
  function div10_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tabpanelElement = $$value;
      $$invalidate(3, tabpanelElement);
    });
  }
  function button1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      baselineEmoji = $$value;
      $$invalidate(17, baselineEmoji);
    });
  }
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      rootElement = $$value;
      $$invalidate(16, rootElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("skinToneEmoji" in $$props2)
      $$invalidate(40, skinToneEmoji = $$props2.skinToneEmoji);
    if ("i18n" in $$props2)
      $$invalidate(0, i18n = $$props2.i18n);
    if ("database" in $$props2)
      $$invalidate(39, database = $$props2.database);
    if ("customEmoji" in $$props2)
      $$invalidate(41, customEmoji = $$props2.customEmoji);
    if ("customCategorySorting" in $$props2)
      $$invalidate(42, customCategorySorting = $$props2.customCategorySorting);
    if ("emojiVersion" in $$props2)
      $$invalidate(43, emojiVersion = $$props2.emojiVersion);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[1] & 1280) {
      {
        if (customEmoji && database) {
          $$invalidate(39, database.customEmoji = customEmoji, database);
        }
      }
    }
    if ($$self.$$.dirty[0] & 1 | $$self.$$.dirty[1] & 256) {
      {
        async function handleDatabaseLoading() {
          let showingLoadingMessage = false;
          const timeoutHandle = setTimeout(
            () => {
              showingLoadingMessage = true;
              $$invalidate(18, message2 = i18n.loadingMessage);
            },
            TIMEOUT_BEFORE_LOADING_MESSAGE
          );
          try {
            await database.ready();
            $$invalidate(14, databaseLoaded = true);
          } catch (err) {
            console.error(err);
            $$invalidate(18, message2 = i18n.networkErrorMessage);
          } finally {
            clearTimeout(timeoutHandle);
            if (showingLoadingMessage) {
              showingLoadingMessage = false;
              $$invalidate(18, message2 = "");
            }
          }
        }
        if (database) {
          handleDatabaseLoading();
        }
      }
    }
    if ($$self.$$.dirty[0] & 6144 | $$self.$$.dirty[1] & 1024) {
      {
        if (customEmoji && customEmoji.length) {
          $$invalidate(12, groups$1 = [customGroup, ...groups]);
        } else if (groups$1 !== groups) {
          if (currentGroupIndex) {
            $$invalidate(11, currentGroupIndex--, currentGroupIndex);
          }
          $$invalidate(12, groups$1 = groups);
        }
      }
    }
    if ($$self.$$.dirty[0] & 4) {
      {
        rIC(() => {
          $$invalidate(45, searchText = (rawSearchText || "").trim());
          $$invalidate(5, activeSearchItem = -1);
        });
      }
    }
    if ($$self.$$.dirty[0] & 6144) {
      $$invalidate(13, currentGroup = groups$1[currentGroupIndex]);
    }
    if ($$self.$$.dirty[0] & 24576 | $$self.$$.dirty[1] & 16384) {
      {
        async function updateEmojis() {
          if (!databaseLoaded) {
            $$invalidate(1, currentEmojis = []);
            $$invalidate(4, searchMode = false);
          } else if (searchText.length >= MIN_SEARCH_TEXT_LENGTH) {
            const currentSearchText = searchText;
            const newEmojis = await getEmojisBySearchQuery(currentSearchText);
            if (currentSearchText === searchText) {
              $$invalidate(1, currentEmojis = newEmojis);
              $$invalidate(4, searchMode = true);
            }
          } else if (currentGroup) {
            const currentGroupId = currentGroup.id;
            const newEmojis = await getEmojisByGroup(currentGroupId);
            if (currentGroupId === currentGroup.id) {
              $$invalidate(1, currentEmojis = newEmojis);
              $$invalidate(4, searchMode = false);
            }
          }
        }
        updateEmojis();
      }
    }
    if ($$self.$$.dirty[0] & 4112) {
      $$invalidate(22, pickerStyle = `
  --num-groups: ${groups$1.length}; 
  --indicator-opacity: ${searchMode ? 0 : 1}; 
  --num-skintones: ${NUM_SKIN_TONES};`);
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 256) {
      {
        async function updatePreferredSkinTone() {
          if (databaseLoaded) {
            $$invalidate(8, currentSkinTone = await database.getPreferredSkinTone());
          }
        }
        updatePreferredSkinTone();
      }
    }
    if ($$self.$$.dirty[1] & 512) {
      $$invalidate(9, skinTones = Array(NUM_SKIN_TONES).fill().map((_, i) => applySkinTone(skinToneEmoji, i)));
    }
    if ($$self.$$.dirty[0] & 768) {
      $$invalidate(21, skinToneButtonText = skinTones[currentSkinTone]);
    }
    if ($$self.$$.dirty[0] & 257) {
      $$invalidate(23, skinToneButtonLabel = i18n.skinToneLabel.replace("{skinTone}", i18n.skinTones[currentSkinTone]));
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 256) {
      {
        async function updateDefaultFavoriteEmojis() {
          $$invalidate(46, defaultFavoriteEmojis = (await Promise.all(MOST_COMMONLY_USED_EMOJI.map((unicode) => database.getEmojiByUnicodeOrName(unicode)))).filter(Boolean));
        }
        if (databaseLoaded) {
          updateDefaultFavoriteEmojis();
        }
      }
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 98560) {
      {
        async function updateFavorites() {
          const dbFavorites = await database.getTopFavoriteEmoji(numColumns);
          const favorites = await summarizeEmojis(uniqBy([...dbFavorites, ...defaultFavoriteEmojis], (_) => _.unicode || _.name).slice(0, numColumns));
          $$invalidate(10, currentFavorites = favorites);
        }
        if (databaseLoaded && defaultFavoriteEmojis) {
          updateFavorites();
        }
      }
    }
    if ($$self.$$.dirty[0] & 10 | $$self.$$.dirty[1] & 4096) {
      {
        const zwjEmojisToCheck = currentEmojis.filter((emoji) => emoji.unicode).filter((emoji) => hasZwj(emoji) && !supportedZwjEmojis.has(emoji.unicode));
        if (!emojiVersion && zwjEmojisToCheck.length) {
          rAF(() => checkZwjSupportAndUpdate(zwjEmojisToCheck));
        } else {
          $$invalidate(1, currentEmojis = emojiVersion ? currentEmojis : currentEmojis.filter(isZwjSupported));
          rAF(() => resetScrollTopIfPossible(tabpanelElement));
        }
      }
    }
    if ($$self.$$.dirty[0] & 1026 | $$self.$$.dirty[1] & 8192)
      ;
    if ($$self.$$.dirty[0] & 18 | $$self.$$.dirty[1] & 2048) {
      {
        let calculateCurrentEmojisWithCategories = function() {
          if (searchMode) {
            return [{ category: "", emojis: currentEmojis }];
          }
          const categoriesToEmoji = /* @__PURE__ */ new Map();
          for (const emoji of currentEmojis) {
            const category = emoji.category || "";
            let emojis = categoriesToEmoji.get(category);
            if (!emojis) {
              emojis = [];
              categoriesToEmoji.set(category, emojis);
            }
            emojis.push(emoji);
          }
          return [...categoriesToEmoji.entries()].map(([category, emojis]) => ({ category, emojis })).sort((a, b2) => customCategorySorting(a.category, b2.category));
        };
        $$invalidate(15, currentEmojisWithCategories = calculateCurrentEmojisWithCategories());
      }
    }
    if ($$self.$$.dirty[0] & 34) {
      $$invalidate(26, activeSearchItemId = activeSearchItem !== -1 && currentEmojis[activeSearchItem].id);
    }
    if ($$self.$$.dirty[0] & 192) {
      {
        if (skinTonePickerExpanded) {
          skinToneDropdown.addEventListener(
            "transitionend",
            () => {
              $$invalidate(19, skinTonePickerExpandedAfterAnimation = true);
            },
            { once: true }
          );
        } else {
          $$invalidate(19, skinTonePickerExpandedAfterAnimation = false);
        }
      }
    }
  };
  return [
    i18n,
    currentEmojis,
    rawSearchText,
    tabpanelElement,
    searchMode,
    activeSearchItem,
    skinTonePickerExpanded,
    skinToneDropdown,
    currentSkinTone,
    skinTones,
    currentFavorites,
    currentGroupIndex,
    groups$1,
    currentGroup,
    databaseLoaded,
    currentEmojisWithCategories,
    rootElement,
    baselineEmoji,
    message2,
    skinTonePickerExpandedAfterAnimation,
    activeSkinTone,
    skinToneButtonText,
    pickerStyle,
    skinToneButtonLabel,
    isRtl,
    scrollbarWidth,
    activeSearchItemId,
    unicodeWithSkin,
    labelWithSkin,
    calculateEmojiGridStyle,
    onSearchKeydown,
    onNavClick,
    onNavKeydown,
    onEmojiClick,
    onSkinToneOptionsClick,
    onClickSkinToneButton,
    onSkinToneOptionsKeydown,
    onSkinToneOptionsKeyup,
    onSkinToneOptionsFocusOut,
    database,
    skinToneEmoji,
    customEmoji,
    customCategorySorting,
    emojiVersion,
    initialLoad,
    searchText,
    defaultFavoriteEmojis,
    numColumns,
    input_input_handler,
    div3_binding,
    click_handler,
    div10_binding,
    button1_binding,
    section_binding
  ];
}
class Picker extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        skinToneEmoji: 40,
        i18n: 0,
        database: 39,
        customEmoji: 41,
        customCategorySorting: 42,
        emojiVersion: 43
      },
      null,
      [-1, -1, -1]
    );
  }
}
const DEFAULT_DATA_SOURCE = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
const DEFAULT_LOCALE = "en";
var enI18n = {
  categoriesLabel: "Categories",
  emojiUnsupportedMessage: "Your browser does not support color emoji.",
  favoritesLabel: "Favorites",
  loadingMessage: "Loading\u2026",
  networkErrorMessage: "Could not load emoji.",
  regionLabel: "Emoji picker",
  searchDescription: "When search results are available, press up or down to select and enter to choose.",
  searchLabel: "Search",
  searchResultsLabel: "Search results",
  skinToneDescription: "When expanded, press up or down to select and enter to choose.",
  skinToneLabel: "Choose a skin tone (currently {skinTone})",
  skinTonesLabel: "Skin tones",
  skinTones: [
    "Default",
    "Light",
    "Medium-Light",
    "Medium",
    "Medium-Dark",
    "Dark"
  ],
  categories: {
    custom: "Custom",
    "smileys-emotion": "Smileys and emoticons",
    "people-body": "People and body",
    "animals-nature": "Animals and nature",
    "food-drink": "Food and drink",
    "travel-places": "Travel and places",
    activities: "Activities",
    objects: "Objects",
    symbols: "Symbols",
    flags: "Flags"
  }
};
const PROPS = [
  "customEmoji",
  "customCategorySorting",
  "database",
  "dataSource",
  "i18n",
  "locale",
  "skinToneEmoji",
  "emojiVersion"
];
const EXTRA_STYLES = `:host{--emoji-font-family:${FONT_FAMILY}}`;
class PickerElement extends HTMLElement {
  constructor(props) {
    super();
    this.attachShadow({ mode: "open" });
    const style2 = document.createElement("style");
    style2.textContent = ":host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.custom-emoji,.emoji,button.emoji{height:var(--total-emoji-size);width:var(--total-emoji-size)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.custom-emoji{padding:var(--emoji-padding);object-fit:contain;pointer-events:none;background-repeat:no-repeat;background-position:center center;background-size:var(--emoji-size) var(--emoji-size)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}" + EXTRA_STYLES;
    this.shadowRoot.appendChild(style2);
    this._ctx = {
      locale: DEFAULT_LOCALE,
      dataSource: DEFAULT_DATA_SOURCE,
      skinToneEmoji: DEFAULT_SKIN_TONE_EMOJI,
      customCategorySorting: DEFAULT_CATEGORY_SORTING,
      customEmoji: null,
      i18n: enI18n,
      emojiVersion: null,
      ...props
    };
    for (const prop of PROPS) {
      if (prop !== "database" && Object.prototype.hasOwnProperty.call(this, prop)) {
        this._ctx[prop] = this[prop];
        delete this[prop];
      }
    }
    this._dbFlush();
  }
  connectedCallback() {
    if (!this._cmp) {
      this._cmp = new Picker({
        target: this.shadowRoot,
        props: this._ctx
      });
    }
  }
  disconnectedCallback() {
    Promise.resolve().then(() => {
      if (!this.isConnected && this._cmp) {
        this._cmp.$destroy();
        this._cmp = void 0;
        const { database } = this._ctx;
        database.close().catch((err) => console.error(err));
      }
    });
  }
  static get observedAttributes() {
    return ["locale", "data-source", "skin-tone-emoji", "emoji-version"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    this._set(
      attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
      attrName === "emoji-version" ? parseFloat(newValue) : newValue
    );
  }
  _set(prop, newValue) {
    this._ctx[prop] = newValue;
    if (this._cmp) {
      this._cmp.$set({ [prop]: newValue });
    }
    if (["locale", "dataSource"].includes(prop)) {
      this._dbFlush();
    }
  }
  _dbCreate() {
    const { locale: locale2, dataSource, database } = this._ctx;
    if (!database || database.locale !== locale2 || database.dataSource !== dataSource) {
      this._set("database", new Database({ locale: locale2, dataSource }));
    }
  }
  _dbFlush() {
    Promise.resolve().then(() => this._dbCreate());
  }
}
const definitions = {};
for (const prop of PROPS) {
  definitions[prop] = {
    get() {
      if (prop === "database") {
        this._dbCreate();
      }
      return this._ctx[prop];
    },
    set(val) {
      if (prop === "database") {
        throw new Error("database is read-only");
      }
      this._set(prop, val);
    }
  };
}
Object.defineProperties(PickerElement.prototype, definitions);
if (!customElements.get("emoji-picker")) {
  customElements.define("emoji-picker", PickerElement);
}
var b = Object.defineProperty, v = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var u = (e, i, t) => i in e ? b(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, o = (e, i) => {
  for (var t in i || (i = {}))
    g.call(i, t) && u(e, t, i[t]);
  if (h)
    for (var t of h(i))
      k.call(i, t) && u(e, t, i[t]);
  return e;
}, f = (e, i) => v(e, O(i));
var j = (e, i) => {
  var t = {};
  for (var r in e)
    g.call(e, r) && i.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && h)
    for (var r of h(e))
      i.indexOf(r) < 0 && k.call(e, r) && (t[r] = e[r]);
  return t;
};
var D = (e) => e ? Object.entries(e).reduce((i, [t, r]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, f(o({}, i), { [t]: r })), {}) : null, w = (e, i = {}, t) => {
  let d = i, { props: r, domProps: c, on: a } = d, p = j(d, ["props", "domProps", "on"]), P = D(a), E = o(o(o(o({}, p), r), c), P);
  return h$1(e, E, t);
}, S = w;
function m() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function l(e) {
  return e.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
}
var z = defineComponent$1({ props: { isDark: { type: Boolean, required: false, default: m() }, skinToneEmoji: String, customEmoji: Array, dataSource: String, locale: String, customCategorySorting: Function, i18n: Object, pickerStyle: Object }, emits: ["emojiClick", "skinToneChange"], data: () => ({ picker: new PickerElement() }), watch: { $props: { handler() {
  this.updatePickerProps();
}, deep: true } }, mounted() {
  let e = this.$refs.root;
  this.updatePickerProps(), e.appendChild(this.picker), this.picker.addEventListener("emoji-click", this.handleClick), this.picker.addEventListener("skin-tone-change", this.handleSkinToneChange);
}, beforeUnmount() {
  this.picker.removeEventListener("emoji-click", this.handleClick), this.picker.removeEventListener("skin-tone-change", this.handleSkinToneChange);
}, methods: { handleClick(e) {
  this.$emit("emojiClick", e.detail);
}, handleSkinToneChange(e) {
  this.$emit("skinToneChange", e.detail);
}, updatePickerProps() {
  let { skinToneEmoji: e, dataSource: i, locale: t, customEmoji: r, i18n: c, customCategorySorting: a, isDark: p } = this.$props;
  e && (this.picker.skinToneEmoji = e), i && (this.picker.dataSource = i), t && (this.picker.locale = t), r && (this.picker.customEmoji = r), c && (this.picker.i18n = c), a && (this.picker.customCategorySorting = a), this.picker.classList.toggle("dark", p), this.picker.classList.toggle("light", !p), this.updatePickerStyle();
}, updatePickerStyle() {
  this.pickerStyle && typeof this.pickerStyle == "object" && Object.keys(this.pickerStyle).forEach((e) => {
    var i, t;
    e === "height" && ((i = this.pickerStyle) == null ? void 0 : i.height) ? this.picker.style.setProperty("height", this.pickerStyle.height) : e === "width" && ((t = this.pickerStyle) == null ? void 0 : t.width) ? this.picker.style.setProperty("width", this.pickerStyle.width) : this.picker.style.setProperty(`--${l(e)}`, this.pickerStyle[e]);
  });
} }, render() {
  return S("div", { ref: "root" });
} });
var CommentInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = defineComponent$1({
  name: "CommentInput",
  components: {
    ElInput,
    VuemojiPicker: z,
    ElCard,
    ElIcon,
    CircleCloseFilled: circleCloseFilled,
    InlineSvg
  },
  directives: {
    clickoutside: {
      mounted(el, binding) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event, el);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
        document.body.addEventListener("touchstart", el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
        document.body.removeEventListener("touchstart", el.clickOutsideEvent);
      }
    }
  },
  props: {
    value: {
      requierd: false,
      type: Object
    },
    comments: {
      type: Array
    },
    editCommentIndex: {
      type: Number
    },
    editReplieCommentIndex: {
      type: Number
    },
    editReplieIndex: {
      type: Number
    },
    isEditReplie: {
      type: Boolean
    }
  },
  emits: ["comment", "replie", "selectedFile"],
  setup(props, context) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const comment2 = ref({
      id: props.value ? props.value.id : "",
      content: props.value ? props.value.content : (_b = (_a = props == null ? void 0 : props.comments) == null ? void 0 : _a[props.editCommentIndex]) == null ? void 0 : _b.content,
      image: props.value ? props.value.image : (_d = (_c = props == null ? void 0 : props.comments) == null ? void 0 : _c[props.editCommentIndex]) == null ? void 0 : _d.image,
      user: props.value ? props.value.owner : ref({
        userName: props.value ? props.value.userName : "",
        userPic: props.value ? props.value.userPic : "",
        job: props.value ? props.value.job : ""
      }),
      nbLikes: props.value ? props.value.nbLikes : "",
      createdAt: props.value ? props.value.createdAt : ""
    });
    const replie = ref({
      id: props.value ? props.value.id : "",
      content: props.value ? props.value.content : (_h = (_g = (_f = (_e = props == null ? void 0 : props.comments) == null ? void 0 : _e[props.editReplieCommentIndex]) == null ? void 0 : _f.replies) == null ? void 0 : _g[props.editReplieIndex]) == null ? void 0 : _h.content,
      image: props.value ? props.value.image : (_l = (_k = (_j = (_i = props == null ? void 0 : props.comments) == null ? void 0 : _i[props.editReplieCommentIndex]) == null ? void 0 : _j.replies) == null ? void 0 : _k[props.editReplieIndex]) == null ? void 0 : _l.image,
      user: props.value ? props.value.owner : ref({
        userName: props.value ? props.value.userName : "",
        userPic: props.value ? props.value.userPic : "",
        job: props.value ? props.value.job : ""
      }),
      nbLikes: props.value ? props.value.nbLikes : "",
      createdAt: props.value ? props.value.createdAt : ""
    });
    const showEmojis = ref(false);
    const emojiBtnClicked = ref(false);
    const textarea = ref("");
    const selectedEmoji = ref("");
    const handleOpenEmoji = () => {
      showEmojis.value = !showEmojis.value;
      emojiBtnClicked.value = !emojiBtnClicked.value;
    };
    const handleOutSideClick = () => {
      if (!emojiBtnClicked.value) {
        showEmojis.value = false;
      }
      emojiBtnClicked.value = false;
    };
    const handleEmojiClick = (detail) => {
      const pos = textarea.value.textarea.selectionStart;
      if (pos) {
        comment2.value.content = comment2.value.content.substring(0, pos) + detail.unicode + comment2.value.content.substring(pos);
      } else {
        comment2.value.content = detail.unicode;
      }
    };
    const EmojiClick = (detail) => {
      const pos = textarea.value.textarea.selectionStart;
      if (pos || pos === 0) {
        replie.value.content = replie.value.content.substring(0, pos) + detail.unicode + replie.value.content.substring(pos);
      }
    };
    const style2 = ref({
      borderSize: "0px",
      buttonActiveBackground: "#e6e6e6",
      width: "250px",
      height: "250px",
      emojiPadding: "1px",
      inputPadding: "1px",
      numColumns: "7",
      background: "var(--el-color-bgcolor)"
    });
    function selectedFile(e) {
      const file = e.target.files[0];
      comment2.value.image = file ? URL.createObjectURL(file) : "";
      context.emit("selectedFile", file);
    }
    const sendComment = ref(comment2.value);
    const send = () => {
      sendComment.value = comment2.value;
      comment2.value = {
        id: "",
        content: "",
        image: "",
        nbLikes: 0,
        createdAt: ""
      };
      context.emit("comment", sendComment.value);
    };
    const sendRep = ref(replie.value);
    const sendReplie = () => {
      sendRep.value = replie.value;
      replie.value = {
        id: "",
        content: "",
        image: "",
        nbLikes: 0,
        createdAt: ""
      };
      context.emit("replie", sendRep.value);
    };
    return {
      sendReplie,
      EmojiClick,
      replie,
      send,
      selectedFile,
      handleEmojiClick,
      style: style2,
      handleOutSideClick,
      handleOpenEmoji,
      textarea,
      selectedEmoji,
      comment: comment2,
      showEmojis,
      emojiBtnClicked
    };
  }
});
const _hoisted_1$j = { key: 0 };
const _hoisted_2$c = {
  key: 0,
  class: "emoji"
};
const _hoisted_3$6 = { key: 1 };
const _hoisted_4$4 = {
  key: 0,
  class: "emoji"
};
const _hoisted_5$4 = { key: 2 };
const _hoisted_6$3 = { style: { "display": "flex" } };
const _hoisted_7$3 = { key: 3 };
const _hoisted_8$2 = { style: { "display": "flex" } };
const _hoisted_9$2 = { key: 4 };
const _hoisted_10$1 = {
  key: 0,
  style: { "position": "relative" }
};
const _hoisted_11$1 = { class: "file" };
const _hoisted_12$1 = ["src"];
const _hoisted_13$1 = { key: 5 };
const _hoisted_14$1 = {
  key: 0,
  style: { "position": "relative" }
};
const _hoisted_15$1 = { class: "file" };
const _hoisted_16$1 = ["src"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VuemojiPicker = resolveComponent("VuemojiPicker");
  const _component_el_input = resolveComponent("el-input");
  const _component_inline_svg = resolveComponent("inline-svg");
  const _component_CircleCloseFilled = resolveComponent("CircleCloseFilled");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_card = resolveComponent("el-card");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_card, null, {
    default: withCtx(() => [
      !_ctx.isEditReplie ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
        _ctx.showEmojis ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2$c, [
          createVNode(_component_VuemojiPicker, {
            "picker-style": _ctx.style,
            onEmojiClick: _ctx.handleEmojiClick
          }, null, 8, ["picker-style", "onEmojiClick"])
        ])), [
          [_directive_clickoutside, _ctx.handleOutSideClick]
        ]) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$6, [
        _ctx.showEmojis ? withDirectives((openBlock(), createElementBlock("div", _hoisted_4$4, [
          createVNode(_component_VuemojiPicker, {
            "picker-style": _ctx.style,
            onEmojiClick: _ctx.EmojiClick
          }, null, 8, ["picker-style", "onEmojiClick"])
        ])), [
          [_directive_clickoutside, _ctx.handleOutSideClick]
        ]) : createCommentVNode("", true)
      ])),
      _ctx.isEditReplie ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
        createElementVNode("div", _hoisted_6$3, [
          createVNode(_component_el_input, {
            ref: "textarea",
            modelValue: _ctx.replie.content,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.replie.content = $event),
            placeholder: "Add a comment",
            "max-length": "255",
            autosize: { maxRows: 4 },
            type: "textarea"
          }, null, 8, ["modelValue"]),
          createVNode(_component_inline_svg, {
            src: "../assets/emoji.svg",
            class: "click",
            onClick: _ctx.handleOpenEmoji
          }, null, 8, ["onClick"]),
          createVNode(_component_inline_svg, {
            src: "../assets/uploadImage.svg",
            class: "click",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.file.click())
          }),
          createTextVNode(" \xA0 "),
          createVNode(_component_inline_svg, {
            src: "../assets/send.svg",
            class: "click",
            onClick: _ctx.sendReplie
          }, null, 8, ["onClick"]),
          createElementVNode("input", {
            ref: "file",
            type: "file",
            accept: "image/png, image/jpeg",
            style: { "display": "none" },
            onChange: _cache[2] || (_cache[2] = (...args) => _ctx.selectedFile && _ctx.selectedFile(...args))
          }, null, 544)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_7$3, [
        createElementVNode("div", _hoisted_8$2, [
          createVNode(_component_el_input, {
            ref: "textarea",
            modelValue: _ctx.comment.content,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.comment.content = $event),
            placeholder: "Add a comment",
            "max-length": "255",
            autosize: { maxRows: 4 },
            type: "textarea"
          }, null, 8, ["modelValue"]),
          createVNode(_component_inline_svg, {
            src: "../assets/emoji.svg",
            class: "click",
            onClick: _ctx.handleOpenEmoji
          }, null, 8, ["onClick"]),
          createVNode(_component_inline_svg, {
            src: "../assets/uploadImage.svg",
            class: "click",
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$refs.file.click())
          }),
          createTextVNode(" \xA0 "),
          createVNode(_component_inline_svg, {
            class: "click",
            src: "../assets/send.svg",
            onClick: _ctx.send
          }, null, 8, ["onClick"]),
          createElementVNode("input", {
            ref: "file",
            type: "file",
            accept: "image/png, image/jpeg",
            style: { "display": "none" },
            onChange: _cache[5] || (_cache[5] = (...args) => _ctx.selectedFile && _ctx.selectedFile(...args))
          }, null, 544)
        ])
      ])),
      _ctx.isEditReplie ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
        _ctx.replie.image ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
          createElementVNode("div", _hoisted_11$1, [
            createVNode(_component_el_icon, {
              onClick: _cache[6] || (_cache[6] = ($event) => _ctx.replie.image = "")
            }, {
              default: withCtx(() => [
                createVNode(_component_CircleCloseFilled, { style: { "color": "black" } })
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", null, [
            createElementVNode("img", {
              class: "uploaded-file",
              src: _ctx.replie.image
            }, null, 8, _hoisted_12$1)
          ])
        ])) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_13$1, [
        _ctx.comment.image ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
          createElementVNode("div", _hoisted_15$1, [
            createVNode(_component_el_icon, {
              onClick: _cache[7] || (_cache[7] = ($event) => _ctx.comment.image = "")
            }, {
              default: withCtx(() => [
                createVNode(_component_CircleCloseFilled, { style: { "color": "black" } })
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", null, [
            createElementVNode("img", {
              class: "uploaded-file",
              src: _ctx.comment.image
            }, null, 8, _hoisted_16$1)
          ])
        ])) : createCommentVNode("", true)
      ]))
    ]),
    _: 1
  });
}
var CommentInput$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__scopeId", "data-v-720fb016"]]);
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key2 = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key2) : key2;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key2 in object) {
    if (object.hasOwnProperty(key2) && predicate(object[key2])) {
      return key2;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key2 = 0; key2 < array.length; key2++) {
    if (predicate(array[key2])) {
      return key2;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance$2 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale$1[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$3 = formatDistance$2;
var dateFormats$1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats$1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats$1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong$2 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: "full"
  })
};
var formatLong$3 = formatLong$2;
var formatRelativeLocale$1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative$2 = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale$1[token];
};
var formatRelative$3 = formatRelative$2;
var eraValues$1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues$1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues$1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues$1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues$1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber$1 = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize$2 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$3 = localize$2;
var matchOrdinalNumberPattern$1 = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern$1 = /\d+/i;
var matchEraPatterns$1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns$1 = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns$1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns$1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns$1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match$2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: "any"
  })
};
var match$3 = match$2;
var locale$1 = {
  code: "en-US",
  formatDistance: formatDistance$3,
  formatLong: formatLong$3,
  formatRelative: formatRelative$3,
  localize: localize$3,
  match: match$3,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var enUS = locale$1;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "moins d\u2019une seconde",
    other: "moins de {{count}} secondes"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes"
  },
  halfAMinute: "30 secondes",
  lessThanXMinutes: {
    one: "moins d\u2019une minute",
    other: "moins de {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures"
  },
  xHours: {
    one: "1 heure",
    other: "{{count}} heures"
  },
  xDays: {
    one: "1 jour",
    other: "{{count}} jours"
  },
  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines"
  },
  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines"
  },
  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois"
  },
  xMonths: {
    one: "1 mois",
    other: "{{count}} mois"
  },
  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ans"
  },
  overXYears: {
    one: "plus d\u2019un an",
    other: "plus de {{count}} ans"
  },
  almostXYears: {
    one: "presqu\u2019un an",
    other: "presque {{count}} ans"
  }
};
var formatDistance2 = function formatDistance3(token, count, options) {
  var result;
  var form = formatDistanceLocale[token];
  if (typeof form === "string") {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "dans " + result;
    } else {
      return "il y a " + result;
    }
  }
  return result;
};
var formatDistance$1 = formatDistance2;
var dateFormats = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} '\xE0' {{time}}",
  long: "{{date}} '\xE0' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "eeee 'dernier \xE0' p",
  yesterday: "'hier \xE0' p",
  today: "'aujourd\u2019hui \xE0' p",
  tomorrow: "'demain \xE0' p'",
  nextWeek: "eeee 'prochain \xE0' p",
  other: "P"
};
var formatRelative2 = function formatRelative3(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative2;
var eraValues = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]
};
var quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2\xE8me trim.", "3\xE8me trim.", "4\xE8me trim."],
  wide: ["1er trimestre", "2\xE8me trimestre", "3\xE8me trimestre", "4\xE8me trimestre"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."],
  wide: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]
};
var dayValues = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
};
var dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "apr\xE8s-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l\u2019apr\xE8s-midi",
    evening: "du soir",
    night: "du matin"
  }
};
var ordinalNumber2 = function ordinalNumber3(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (number === 0)
    return "0";
  var feminineUnits = ["year", "week", "hour", "minute", "second"];
  var suffix;
  if (number === 1) {
    suffix = unit && feminineUnits.includes(unit) ? "\xE8re" : "er";
  } else {
    suffix = "\xE8me";
  }
  return number + suffix;
};
var localize = {
  ordinalNumber: ordinalNumber2,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback2(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide"
  })
};
var localize$1 = localize;
var matchOrdinalNumberPattern = /^(\d+)(ième|ère|ème|er|e)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
};
var parseEraPatterns = {
  any: [/^av/i, /^ap/i]
};
var matchQuarterPatterns = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback3(value) {
      return parseInt(value);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback4(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "fr",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
var fr = locale;
const NOOP = () => {
};
const NO = () => false;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isSymbol = (val) => typeof val === "symbol";
let activeEffectScope;
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key2) => key2 !== "arguments" && key2 !== "caller").map((key2) => Symbol[key2]).filter(isSymbol)
);
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep);
    }
  }
}
var _a$1;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a$1] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly;
  }
  get value() {
    const self = toRaw(this);
    trackRefValue(self);
    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run();
    }
    return self._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a$1 = "__v_isReadonly";
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
var DropdownCmt_vue_vue_type_style_index_0_scoped_true_lang = "";
var DropdownCmt_vue_vue_type_style_index_1_lang = "";
const _sfc_main$m = defineComponent$1({
  components: {
    ElDropdownItem,
    ElDropdownMenu,
    ElDropdown,
    ElIcon,
    MoreFilled: moreFilled,
    Delete: _delete,
    EditPen: editPen
  },
  setup() {
    return {};
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-73282420"), n = n(), popScopeId(), n);
const _hoisted_1$i = {
  style: { "width": "10px" },
  class: "d-flex justify-content-center"
};
const _hoisted_2$b = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", { class: "ms-2" }, "Edit", -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", { class: "ms-2" }, "Delete", -1));
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MoreFilled = resolveComponent("MoreFilled");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_EditPen = resolveComponent("EditPen");
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_Delete = resolveComponent("Delete");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");
  return openBlock(), createBlock(_component_el_dropdown, {
    trigger: "click",
    "popper-class": "offer-card__footer-dropdown"
  }, {
    dropdown: withCtx(() => [
      createVNode(_component_el_dropdown_menu, null, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item, {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("edit"))
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_EditPen)
                ]),
                _: 1
              }),
              _hoisted_2$b
            ]),
            _: 1
          }),
          createVNode(_component_el_dropdown_item, {
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("delete"))
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Delete)
                ]),
                _: 1
              }),
              _hoisted_3$5
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$i, [
        createVNode(_component_el_icon, {
          color: "#F6F8FB",
          class: "mt-1"
        }, {
          default: withCtx(() => [
            createVNode(_component_MoreFilled)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var DropdownCmt$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-73282420"]]);
var CommentSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = {
  name: "CommentSection",
  components: {
    CommentInput: CommentInput$1,
    ElAvatar,
    ElButton,
    ElCard,
    DropdownCmt: DropdownCmt$1,
    InlineSvg
  },
  props: {
    lang: {
      type: String
    },
    comments: {
      type: Array
    },
    currentUser: {
      type: Object
    },
    value: {
      requierd: false,
      type: Object
    },
    withLikes: {
      type: Boolean
    },
    showMore: {
      type: Number
    }
  },
  emits: [
    "comment",
    "commentIndex",
    "commentReplie",
    "deleteComment",
    "deleteReplie",
    "editComment",
    "editReplie",
    "likeComment",
    "likeReplie",
    "replySelectedFile",
    "selectedFile"
  ],
  setup(props, context) {
    var _a;
    const comment2 = ref({
      id: props.value ? props.value.id : "",
      content: props.value ? props.value.content : "",
      image: props.value ? props.value.image : "",
      user: props.value ? props.value.owner : ref({
        userName: props.value ? props.value.userName : "",
        userPic: props.value ? props.value.userPic : "",
        job: props.value ? props.value.job : ""
      }),
      nbLikes: props.value ? props.value.nbLikes : "",
      createdAt: props.value ? props.value.createdAt : "",
      replies: props.value ? props.value.replies : []
    });
    const replie = ref({
      id: props.value ? props.value.id : "",
      content: props.value ? props.value.content : "",
      image: props.value ? props.value.image : "",
      user: props.value ? props.value.owner : ref({
        userName: props.value ? props.value.userName : "",
        userPic: props.value ? props.value.userPic : "",
        job: props.value ? props.value.job : ""
      }),
      nbLikes: props.value ? props.value.nbLikes : "",
      createdAt: props.value ? props.value.createdAt : ""
    });
    const replySelectedFile = (e) => {
      context.emit("replySelectedFile", e);
    };
    const selectedFile = (e) => {
      context.emit("selectedFile", e);
    };
    const language = computed(() => props.lang === "fr" ? fr : enUS);
    const isLiked = ref(false);
    const likeComment = (id) => {
      isLiked.value = !props.comments[id].isLiked;
      context.emit("likeComment", { commentIndex: id, isLiked: isLiked.value });
    };
    const isLikedReplie = ref(false);
    const likeReplie = (id1, id2) => {
      isLikedReplie.value = !props.comments[id1].replies[id2].isLiked;
      context.emit("likeReplie", { commentIndex: id1, replieIndex: id2, isLikedReplie: isLikedReplie.value });
    };
    const showReplies = ref(false);
    const commentIndex = ref(null);
    const openReplies = (index) => {
      showReplies.value = true;
      commentIndex.value = index;
      return commentIndex.value;
    };
    const commentContent = (newComment) => {
      comment2.value = newComment;
      if (newComment.content != "" || newComment.image != "") {
        comment2.value.user.id = props.currentUser.id;
        comment2.value.user.userName = props.currentUser.userName;
        comment2.value.user.userPic = props.currentUser.userPic;
        comment2.value.user.job = props.currentUser.job;
        comment2.value.createdAt = new Date();
        comment2.value.nbLikes = 0;
        comment2.value.replies = [];
        context.emit("comment", comment2.value);
      }
    };
    const commentReplie = (newReplie, index) => {
      replie.value = newReplie;
      if (newReplie.content != "" || newReplie.image != "") {
        replie.value.user.id = props.currentUser.id;
        replie.value.user.userName = props.currentUser.userName;
        replie.value.user.userPic = props.currentUser.userPic;
        replie.value.user.job = props.currentUser.job;
        replie.value.createdAt = new Date();
        replie.value.nbLikes = 0;
        context.emit("commentReplie", { replie: replie.value, commentIndex: index });
      }
    };
    const editCommentIndex = ref(null);
    const handleEditComment = (index) => {
      send.value = false;
      editCommentIndex.value = index;
    };
    const send = ref();
    const editComment = (newComment, index) => {
      comment2.value = newComment;
      send.value = true;
      if (newComment.content != "" || newComment.image != "") {
        context.emit("editComment", { comment: comment2.value, commentIndex: index });
      }
    };
    const isEditReplie = ref(false);
    const editReplieCommentIndex = ref(null);
    const editReplieIndex = ref(null);
    const sendReplie = ref();
    const handleEditReplie = (index1, index2) => {
      sendReplie.value = true;
      editReplieCommentIndex.value = index1;
      editReplieIndex.value = index2;
      isEditReplie.value = true;
    };
    const editReplie = (newComment, index1, index2) => {
      replie.value = newComment;
      sendReplie.value = false;
      if (newComment.content != "" || newComment.image != "") {
        context.emit("editReplie", { comment: replie.value, commentIndex: index1, replieIndex: index2 });
      }
    };
    const handleDeleteComment = (index) => {
      context.emit("deleteComment", index);
    };
    const handleDeleteReplie = (index1, index2) => {
      context.emit("deleteReplie", { commentIndex: index1, replieIndex: index2 });
    };
    const count = ref(props.showMore);
    watch$1(count, (newX) => {
      console.log(`*** ${newX}`);
    });
    const countReplies = ref(props.showMore);
    watch$1(countReplies, (newX) => {
      console.log(`*** ${newX}`);
    });
    const commentsLength = ref((_a = props.comments) == null ? void 0 : _a.length);
    const repliesLength = (index) => {
      var _a2, _b;
      return (_b = (_a2 = props == null ? void 0 : props.comments[index]) == null ? void 0 : _a2.replies) == null ? void 0 : _b.length;
    };
    return {
      commentsLength,
      repliesLength,
      countReplies,
      count,
      replySelectedFile,
      selectedFile,
      language,
      isLiked,
      isLikedReplie,
      likeComment,
      likeReplie,
      isEditReplie,
      editReplie,
      editReplieCommentIndex,
      editReplieIndex,
      editComment,
      handleDeleteReplie,
      handleEditReplie,
      editCommentIndex,
      handleDeleteComment,
      handleEditComment,
      commentReplie,
      replie,
      comment: comment2,
      commentContent,
      openReplies,
      showReplies,
      commentIndex,
      send,
      sendReplie
    };
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-6619d761"), n = n(), popScopeId(), n);
const _hoisted_1$h = { style: { "display": "flex" } };
const _hoisted_2$a = {
  key: 0,
  style: { "display": "flex" }
};
const _hoisted_3$4 = { key: 1 };
const _hoisted_4$3 = { style: { "display": "flex", "position": "relative" } };
const _hoisted_5$3 = { style: { "display": "flex" } };
const _hoisted_6$2 = { class: "content" };
const _hoisted_7$2 = { class: "subtitle" };
const _hoisted_8$1 = { class: "content" };
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "createdSince" };
const _hoisted_12 = {
  key: 0,
  class: "likes"
};
const _hoisted_13 = { key: 2 };
const _hoisted_14 = {
  key: 0,
  style: { "display": "flex", "width": "90%", "margin-left": "10%" }
};
const _hoisted_15 = { key: 1 };
const _hoisted_16 = { style: { "display": "flex", "position": "relative" } };
const _hoisted_17 = { style: { "display": "flex" } };
const _hoisted_18 = { class: "content" };
const _hoisted_19 = { class: "subtitle" };
const _hoisted_20 = { class: "content" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_22 = ["src"];
const _hoisted_23 = { class: "createdSince" };
const _hoisted_24 = {
  key: 0,
  class: "likes"
};
const _hoisted_25 = { style: { "display": "flex" } };
const _hoisted_26 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("b", null, "Show More", -1));
const _hoisted_27 = { style: { "display": "flex" } };
const _hoisted_28 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("b", null, "Show More", -1));
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_avatar = resolveComponent("el-avatar");
  const _component_CommentInput = resolveComponent("CommentInput");
  const _component_timeago = resolveComponent("timeago");
  const _component_DropdownCmt = resolveComponent("DropdownCmt");
  const _component_inline_svg = resolveComponent("inline-svg");
  const _component_el_card = resolveComponent("el-card");
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", _hoisted_1$h, [
      createVNode(_component_el_avatar, {
        shape: "square",
        size: 50,
        src: $props.currentUser.userPic
      }, null, 8, ["src"]),
      createVNode(_component_CommentInput, {
        onSelectedFile: $setup.selectedFile,
        onComment: $setup.commentContent
      }, null, 8, ["onSelectedFile", "onComment"])
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.comments.slice(0, $setup.count), (comment2, index) => {
      return openBlock(), createElementBlock("div", {
        key: comment2.id
      }, [
        index == $setup.editCommentIndex && $setup.send == false ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
          createVNode(_component_el_avatar, {
            shape: "square",
            size: 50,
            src: $props.currentUser.userPic,
            style: { "margin-top": "2%" }
          }, null, 8, ["src"]),
          createVNode(_component_CommentInput, {
            "edit-comment-index": $setup.editCommentIndex,
            comments: $props.comments,
            onSelectedFile: $setup.selectedFile,
            onComment: (newComment) => $setup.editComment(newComment, index)
          }, null, 8, ["edit-comment-index", "comments", "onSelectedFile", "onComment"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(_component_el_card, null, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_4$3, [
                createElementVNode("div", _hoisted_5$3, [
                  createVNode(_component_el_avatar, {
                    shape: "square",
                    size: 50,
                    src: comment2.user.userPic
                  }, null, 8, ["src"]),
                  createElementVNode("div", null, [
                    createElementVNode("b", null, [
                      createElementVNode("div", _hoisted_6$2, toDisplayString(comment2.user.userName), 1)
                    ]),
                    createElementVNode("div", _hoisted_7$2, toDisplayString(comment2.user.job), 1),
                    createElementVNode("div", _hoisted_8$1, [
                      createTextVNode(toDisplayString(comment2.content) + " ", 1),
                      _hoisted_9$1,
                      createElementVNode("img", {
                        class: "uploaded-file",
                        src: comment2.image
                      }, null, 8, _hoisted_10)
                    ])
                  ])
                ]),
                createElementVNode("div", null, [
                  createElementVNode("div", _hoisted_11, [
                    createVNode(_component_timeago, {
                      datetime: comment2.createdAt,
                      locale: $setup.language,
                      "auto-update": ""
                    }, null, 8, ["datetime", "locale"]),
                    comment2.user.id == $props.currentUser.id ? (openBlock(), createBlock(_component_DropdownCmt, {
                      key: 0,
                      onEdit: ($event) => $setup.handleEditComment(index),
                      onDelete: ($event) => $setup.handleDeleteComment(index)
                    }, null, 8, ["onEdit", "onDelete"])) : createCommentVNode("", true)
                  ]),
                  $props.withLikes ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    createTextVNode(toDisplayString(comment2.nbLikes) + " ", 1),
                    createVNode(_component_inline_svg, {
                      src: "../assets/like.svg",
                      class: normalizeClass([{ "isLiked": comment2.isLiked }, "click"]),
                      onClick: ($event) => $setup.likeComment(index)
                    }, null, 8, ["class", "onClick"])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _: 2
          }, 1024),
          createVNode(_component_el_button, {
            type: "text",
            onClick: ($event) => $setup.openReplies(index)
          }, {
            default: withCtx(() => [
              createTextVNode("Replie")
            ]),
            _: 2
          }, 1032, ["onClick"])
        ])),
        $setup.showReplies && $setup.commentIndex == index ? (openBlock(), createElementBlock("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(comment2.replies.slice(0, $setup.countReplies), (response, i) => {
            return openBlock(), createElementBlock("div", {
              key: response.id
            }, [
              index == $setup.editReplieCommentIndex && i == $setup.editReplieIndex && $setup.sendReplie ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createVNode(_component_el_avatar, {
                  shape: "square",
                  size: 50,
                  src: $props.currentUser.userPic
                }, null, 8, ["src"]),
                createVNode(_component_CommentInput, {
                  "is-edit-replie": $setup.isEditReplie,
                  "edit-replie-comment-index": $setup.editReplieCommentIndex,
                  "edit-replie-index": $setup.editReplieIndex,
                  comments: $props.comments,
                  onSelectedFile: $setup.selectedFile,
                  onReplie: (newReplie) => $setup.editReplie(newReplie, index, i)
                }, null, 8, ["is-edit-replie", "edit-replie-comment-index", "edit-replie-index", "comments", "onSelectedFile", "onReplie"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
                createVNode(_component_el_card, { style: { "width": "90%", "margin-left": "10%" } }, {
                  default: withCtx(() => [
                    createElementVNode("div", _hoisted_16, [
                      createElementVNode("div", _hoisted_17, [
                        createVNode(_component_el_avatar, {
                          shape: "square",
                          size: 50,
                          src: response.user.userPic
                        }, null, 8, ["src"]),
                        createElementVNode("div", null, [
                          createElementVNode("b", null, [
                            createElementVNode("div", _hoisted_18, toDisplayString(response.user.userName), 1)
                          ]),
                          createElementVNode("div", _hoisted_19, toDisplayString(response.user.job), 1),
                          createElementVNode("div", _hoisted_20, [
                            createTextVNode(toDisplayString(response.content) + " ", 1),
                            _hoisted_21,
                            createElementVNode("img", {
                              class: "uploaded-file",
                              src: response.image
                            }, null, 8, _hoisted_22)
                          ])
                        ])
                      ]),
                      createElementVNode("div", null, [
                        createElementVNode("div", _hoisted_23, [
                          createVNode(_component_timeago, {
                            datetime: response.createdAt,
                            locale: $setup.language,
                            "auto-update": ""
                          }, null, 8, ["datetime", "locale"]),
                          response.user.id == $props.currentUser.id ? (openBlock(), createBlock(_component_DropdownCmt, {
                            key: 0,
                            onEdit: ($event) => $setup.handleEditReplie(index, i),
                            onDelete: ($event) => $setup.handleDeleteReplie(index, i)
                          }, null, 8, ["onEdit", "onDelete"])) : createCommentVNode("", true)
                        ]),
                        $props.withLikes ? (openBlock(), createElementBlock("div", _hoisted_24, [
                          createTextVNode(toDisplayString(response.nbLikes) + " ", 1),
                          createVNode(_component_inline_svg, {
                            src: "../assets/like.svg",
                            class: normalizeClass([{ "isLiked": response.isLiked }, "click"]),
                            onClick: ($event) => $setup.likeReplie(index, i)
                          }, null, 8, ["class", "onClick"])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]))
            ]);
          }), 128)),
          createElementVNode("div", _hoisted_25, [
            $setup.countReplies < $setup.repliesLength(index) ? (openBlock(), createBlock(_component_el_button, {
              key: 0,
              style: { "margin-left": "10%" },
              type: "text",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.countReplies = $setup.countReplies + $props.showMore)
            }, {
              default: withCtx(() => [
                _hoisted_26
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createElementVNode("div", _hoisted_27, [
            createVNode(_component_el_avatar, {
              shape: "square",
              size: 50,
              src: $props.currentUser.userPic,
              style: { "margin-left": "10%" }
            }, null, 8, ["src"]),
            createVNode(_component_CommentInput, {
              onSelectedFile: $setup.selectedFile,
              onComment: (newReplie) => $setup.commentReplie(newReplie, index)
            }, null, 8, ["onSelectedFile", "onComment"])
          ])
        ])) : createCommentVNode("", true)
      ]);
    }), 128)),
    $setup.count < $setup.commentsLength ? (openBlock(), createBlock(_component_el_button, {
      key: 0,
      style: { "margin-left": "-3px", "margin-top": "5px" },
      type: "text",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.count = $setup.count + $props.showMore)
    }, {
      default: withCtx(() => [
        _hoisted_28
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
var CommentSection$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__scopeId", "data-v-6619d761"]]);
var Avatar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = defineComponent$1({
  name: "DfAvatar",
  components: {
    ElAvatar
  },
  props: {
    shape: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const avatarDivRef = ref();
    const fontSize = ref("");
    onMounted(() => {
      if (avatarDivRef.value) {
        if (avatarDivRef.value.clientWidth > 0) {
          fontSize.value = `${avatarDivRef.value.clientWidth / 2.6}px`;
        }
      }
    });
    const displayText = computed$1(
      () => (props.firstName ? props.firstName[0].toUpperCase() : "") + (props.lastName ? props.lastName[0].toUpperCase() : "")
    );
    const avatarColor = computed$1(() => {
      let hash = 0;
      const s = 60;
      const l2 = 40;
      const username = `${props.firstName} ${props.lastName}`;
      if (username.includes("undefined")) {
        return "hsl(220, 10%, 77%)";
      }
      for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
      }
      return `hsl(${hash % 360}, ${s}%, ${l2}%)`;
    });
    return {
      avatarDivRef,
      avatarColor,
      displayText,
      fontSize
    };
  }
});
const _hoisted_1$g = {
  id: "el-avatar-wrapper",
  ref: "avatarDivRef"
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_el_avatar = resolveComponent("el-avatar");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createVNode(_component_el_avatar, {
      src: _ctx.src,
      shape: _ctx.shape,
      size: _ctx.size,
      style: normalizeStyle({
        "font-size": _ctx.fontSize,
        "background-color": (_a = _ctx.backgroundColor) != null ? _a : _ctx.avatarColor,
        "color": (_b = _ctx.textColor) != null ? _b : "white",
        "font-weight": _ctx.size > 100 ? 700 : 400
      })
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.displayText), 1)
      ]),
      _: 1
    }, 8, ["src", "shape", "size", "style"])
  ], 512);
}
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-5d06e05e"]]);
const _sfc_main$j = defineComponent$1({
  name: "StackedAvatar",
  components: {
    ElAvatar,
    ElPopover
  },
  props: {
    users: {
      type: Object
    },
    size: {
      type: Number
    },
    userCount: {
      type: Number
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    placement: {
      type: Object
    },
    trigger: {
      type: Object
    },
    effect: {
      type: Object
    },
    width: {
      type: Number
    }
  },
  setup(props) {
    const computedUsers = computed(() => props.users.slice(0, props.userCount));
    return {
      computedUsers
    };
  }
});
const _hoisted_1$f = { style: { "display": "flex" } };
const _hoisted_2$9 = ["src"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popover = resolveComponent("el-popover");
  const _component_el_avatar = resolveComponent("el-avatar");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.computedUsers, (user2) => {
      return openBlock(), createBlock(_component_el_avatar, {
        key: user2.id,
        style: { "margin-left": "-0.5em", "border": "solid" },
        size: _ctx.size,
        loading: _ctx.loading
      }, {
        default: withCtx(() => [
          createVNode(_component_el_popover, {
            disabled: _ctx.disabled,
            placement: _ctx.placement,
            effect: _ctx.effect,
            trigger: _ctx.trigger,
            width: _ctx.width
          }, {
            default: withCtx(() => [
              createElementVNode("div", null, toDisplayString(user2.name), 1),
              createElementVNode("div", null, toDisplayString(user2.email), 1)
            ]),
            reference: withCtx(() => [
              createElementVNode("img", {
                src: !_ctx.loading ? user2.avatarUrl : "https://phoneky.co.uk/thumbs/screensavers/down/misc/loading_noehu7zw.gif"
              }, null, 8, _hoisted_2$9)
            ]),
            _: 2
          }, 1032, ["disabled", "placement", "effect", "trigger", "width"])
        ]),
        _: 2
      }, 1032, ["size", "loading"]);
    }), 128)),
    _ctx.users.length - _ctx.userCount > 0 && !_ctx.loading && _ctx.userCount > 0 ? (openBlock(), createBlock(_component_el_avatar, {
      key: 0,
      style: { "margin-left": "-0.5em", "border": "solid" },
      "user-count": _ctx.userCount,
      size: _ctx.size
    }, {
      default: withCtx(() => [
        createTextVNode(" +" + toDisplayString(_ctx.users.length - _ctx.userCount), 1)
      ]),
      _: 1
    }, 8, ["user-count", "size"])) : createCommentVNode("", true)
  ]);
}
var stackedavatar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var CommentInput = "";
var CommentSection = "";
var Dropdown = "";
var DropdownCmt = "";
var Table_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$3 = defineComponent$1({
  components: {
    ElTable,
    ElTableColumn,
    ElCard,
    ElPagination
  },
  props: {
    stripe: {
      type: Boolean
    },
    data: {
      type: Object
    },
    paginationTake: {
      type: Number
    },
    size: {
      type: String
    },
    width: {
      type: Number
    },
    filterMethod: { type: Function, required: true },
    filters: { type: Function, required: true }
  },
  setup(props) {
    const pagination = ref({
      take: props.paginationTake,
      page: 1,
      total: props.data.length
    });
    const items = ref(0);
    const currentPageChange = async (val) => {
      pagination.value.page = val;
      items.value = pagination.value.take * val - pagination.value.take;
    };
    const cardWidth = computed$1(() => `${props.width * Object.keys(props.data[0]).length + 50}px`);
    return {
      currentPageChange,
      pagination,
      items,
      cardWidth
    };
  }
});
const __injectCSSVars__$3 = () => {
  useCssVars((_ctx) => ({
    "c58c7b0a": _ctx.cardWidth
  }));
};
const __setup__$3 = __default__$3.setup;
__default__$3.setup = __setup__$3 ? (props, ctx) => {
  __injectCSSVars__$3();
  return __setup__$3(props, ctx);
} : __injectCSSVars__$3;
const _sfc_main$i = __default__$3;
const _withScopeId = (n) => (pushScopeId("data-v-8d83bc74"), n = n(), popScopeId(), n);
const _hoisted_1$e = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_2$8 = { class: "pagination-footer" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_card = resolveComponent("el-card");
  return openBlock(), createBlock(_component_el_card, null, {
    default: withCtx(() => [
      createVNode(_component_el_table, {
        size: _ctx.size,
        stripe: _ctx.stripe,
        data: _ctx.data.slice(_ctx.items, _ctx.pagination.page * _ctx.pagination.take)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data[0], (key2, value) => {
            return openBlock(), createBlock(_component_el_table_column, {
              width: _ctx.width,
              prop: value,
              label: value,
              filters: _ctx.filters(value),
              "filter-method": _ctx.filterMethod(value),
              "filter-placement": "bottom-end"
            }, null, 8, ["width", "prop", "label", "filters", "filter-method"]);
          }), 256))
        ]),
        _: 1
      }, 8, ["size", "stripe", "data"]),
      _hoisted_1$e,
      createElementVNode("div", _hoisted_2$8, [
        createVNode(_component_el_pagination, {
          "current-page": _ctx.pagination.page,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => _ctx.pagination.page = $event),
          "page-size": _ctx.pagination.take,
          "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => _ctx.pagination.take = $event),
          background: "",
          layout: "sizes, prev, pager, next",
          total: _ctx.pagination.total,
          "hide-on-single-page": false,
          "page-sizes": [5, 10, 20, 30],
          onCurrentChange: _ctx.currentPageChange
        }, null, 8, ["current-page", "page-size", "total", "onCurrentChange"])
      ])
    ]),
    _: 1
  });
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-8d83bc74"]]);
var SelectDate_vue_vue_type_style_index_0_scoped_true_lang = "";
var SelectDate_vue_vue_type_style_index_1_lang = "";
const __default__$2 = defineComponent$1({
  name: "SelectDate",
  components: { ElDatePicker, ElSelect, ElOption },
  props: {
    sizeSelect: {
      type: String
    },
    sizeDatePicker: {
      type: String
    },
    placeholder: {
      type: String
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    }
  },
  emits: ["selectedChoice"],
  setup(props, context) {
    const style2 = {
      bgColor: props.color,
      textColor: props.textColor
    };
    const selectedChoice = ref("");
    const choosedDate = ref("");
    const dateType = ref("");
    const year = ref("");
    const month = ref("");
    const week = ref("");
    const day = ref("");
    const formatOptions = ref({
      year: { year: "numeric" },
      month: { month: "short", year: "numeric" },
      day: { month: "short", year: "numeric", day: "numeric" }
    });
    const formatDate = (val, type) => {
      const date = new Date(val);
      let formattedDate = "";
      type == "week" ? formattedDate = `Week: ${new Intl.DateTimeFormat(
        "en-US",
        { month: "short", day: "numeric" }
      ).format(date)} - ${new Intl.DateTimeFormat(
        "en-US",
        { month: "short", year: "numeric", day: "numeric" }
      ).format(new Date(date.setDate(date.getDate() + 6)))}` : formattedDate = new Intl.DateTimeFormat(
        "en-US",
        formatOptions.value[type]
      ).format(date);
      return formattedDate;
    };
    const handleChange = async (val, type) => {
      selectedChoice.value = formatDate(val, type);
      choosedDate.value = val;
      dateType.value = type;
      year.value = "";
      month.value = "";
      week.value = "";
      day.value = "";
      context.emit("selectedChoice", selectedChoice.value);
    };
    return {
      selectedChoice,
      year,
      month,
      week,
      day,
      dateType,
      choosedDate,
      handleChange,
      style: style2
    };
  }
});
const __injectCSSVars__$2 = () => {
  useCssVars((_ctx) => ({
    "71222580": _ctx.style.bgColor,
    "3e66c4d8": _ctx.style.textColor
  }));
};
const __setup__$2 = __default__$2.setup;
__default__$2.setup = __setup__$2 ? (props, ctx) => {
  __injectCSSVars__$2();
  return __setup__$2(props, ctx);
} : __injectCSSVars__$2;
const _sfc_main$h = __default__$2;
const _hoisted_1$d = { style: { "width": "25%" } };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createVNode(_component_el_select, {
      modelValue: _ctx.selectedChoice,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.selectedChoice = $event),
      placeholder: _ctx.placeholder,
      size: _ctx.sizeSelect,
      "popper-class": "popper-select"
    }, {
      default: withCtx(() => [
        createElementVNode("div", null, [
          createVNode(_component_el_option, null, {
            default: withCtx(() => [
              createElementVNode("div", null, [
                createVNode(_component_el_date_picker, {
                  modelValue: _ctx.year,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.year = $event),
                  class: "mt-2 date-picker",
                  type: "year",
                  editable: false,
                  placeholder: "Year",
                  size: _ctx.sizeDatePicker,
                  "value-format": "YYYY-MM-DD",
                  "popper-class": "date-picker-popper",
                  onChange: _cache[1] || (_cache[1] = ($event) => _ctx.handleChange(_ctx.year, "year"))
                }, null, 8, ["modelValue", "size"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_option, null, {
            default: withCtx(() => [
              createElementVNode("div", null, [
                createVNode(_component_el_date_picker, {
                  modelValue: _ctx.month,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.month = $event),
                  class: "mt-2 date-picker",
                  editable: false,
                  type: "month",
                  placeholder: "month",
                  size: _ctx.sizeDatePicker,
                  "value-format": "YYYY-MM-DD",
                  "popper-class": "date-picker-popper",
                  onChange: _cache[3] || (_cache[3] = ($event) => _ctx.handleChange(_ctx.month, "month"))
                }, null, 8, ["modelValue", "size"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_option, null, {
            default: withCtx(() => [
              createElementVNode("div", null, [
                createVNode(_component_el_date_picker, {
                  modelValue: _ctx.week,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.week = $event),
                  class: "mt-2 date-picker",
                  editable: false,
                  type: "week",
                  placeholder: "Week",
                  size: _ctx.sizeDatePicker,
                  "value-format": "YYYY-MM-DD",
                  "popper-class": "date-picker-popper",
                  onChange: _cache[5] || (_cache[5] = ($event) => _ctx.handleChange(_ctx.week, "week"))
                }, null, 8, ["modelValue", "size"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_el_option, null, {
            default: withCtx(() => [
              createElementVNode("div", null, [
                createVNode(_component_el_date_picker, {
                  modelValue: _ctx.day,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.day = $event),
                  class: "mt-2 date-picker",
                  editable: false,
                  type: "day",
                  placeholder: "Day",
                  size: _ctx.sizeDatePicker,
                  "value-format": "YYYY-MM-DD",
                  "popper-class": "date-picker-popper",
                  onChange: _cache[7] || (_cache[7] = ($event) => _ctx.handleChange(_ctx.day, "day"))
                }, null, 8, ["modelValue", "size"])
              ])
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder", "size"])
  ]);
}
var SelectDate$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-02707e79"]]);
const _sfc_main$g = defineComponent$1({
  props: {
    isDark: {
      type: Boolean
    },
    isRange: {
      type: Boolean
    },
    format: {
      type: String
    },
    mode: {
      type: String
    },
    Color: {
      type: String
    },
    dot: {
      type: Boolean
    },
    bar: {
      type: Boolean
    },
    popover: {
      type: String
    }
  },
  emits: ["emitRange", "emitDate"],
  data() {
    if (this.isRange) {
      return {
        selectAttribute: {
          dot: this.dot,
          bar: this.bar,
          popover: {
            label: this.popover
          }
        },
        range: {
          start: new Date(),
          end: new Date()
        },
        mask: {
          input: this.format
        }
      };
    }
    return {
      date: new Date(),
      selectAttribute: {
        dot: this.dot,
        bar: this.bar,
        popover: {
          label: this.popover
        }
      },
      mask: {
        input: this.format
      }
    };
  }
});
const _hoisted_1$c = { key: 0 };
const _hoisted_2$7 = { key: 1 };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_date_picker = resolveComponent("v-date-picker");
  return _ctx.isRange ? (openBlock(), createElementBlock("div", _hoisted_1$c, [
    createVNode(_component_v_date_picker, {
      modelValue: _ctx.range,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.range = $event),
      "select-attribute": _ctx.selectAttribute,
      mode: _ctx.mode,
      masks: _ctx.mask,
      color: _ctx.Color,
      "is-range": "",
      "is-dark": _ctx.isDark,
      onDayclick: _cache[1] || (_cache[1] = (val) => _ctx.$emit("emitRange", val))
    }, null, 8, ["modelValue", "select-attribute", "mode", "masks", "color", "is-dark"])
  ])) : (openBlock(), createElementBlock("div", _hoisted_2$7, [
    createVNode(_component_v_date_picker, {
      modelValue: _ctx.date,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.date = $event),
      onDayclick: _cache[3] || (_cache[3] = (val) => _ctx.$emit("emitDate", val)),
      "select-attribute": _ctx.selectAttribute,
      color: _ctx.Color,
      "is-dark": _ctx.isDark,
      mode: _ctx.mode,
      is24hr: ""
    }, null, 8, ["modelValue", "select-attribute", "color", "is-dark", "mode"])
  ]));
}
var Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = defineComponent$1({
  name: "DfClipboard",
  components: { ElButton, ElTooltip },
  props: {
    text: {
      type: String
    },
    Clipboard: {
      type: String
    },
    CopyType: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    effect: {
      type: String
    },
    placement: {
      type: String
    },
    feedback: {
      type: String
    }
  },
  setup(props) {
    const texto = ref(props.Clipboard);
    const copy = async () => {
      if (props.feedback && props.feedback.length > 0) {
        navigator.clipboard.writeText(props.text);
        texto.value = props.feedback;
      } else {
        navigator.clipboard.writeText(props.text);
      }
    };
    return { copy, texto };
  }
});
const _hoisted_1$b = { key: 0 };
const _hoisted_2$6 = { key: 1 };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return _ctx.content ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
    createVNode(_component_el_tooltip, {
      content: _ctx.content,
      effect: _ctx.effect,
      placement: _ctx.placement
    }, {
      default: withCtx(() => [
        createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.copy
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.texto), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }, 8, ["content", "effect", "placement"])
  ])) : (openBlock(), createElementBlock("div", _hoisted_2$6, [
    createVNode(_component_el_button, {
      type: "text",
      onClick: _ctx.copy
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.texto), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]));
}
var Clipboard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = defineComponent$1({
  name: "OutlineCTA",
  components: { ElTag, ElCard, ElButton },
  props: {
    handleClick: {
      type: String
    },
    readMore: {
      type: String
    },
    badge: {
      type: Boolean
    },
    Text: {
      type: String
    },
    button: {
      type: String
    }
  },
  setup() {
    const read = ref(false);
    return { read };
  }
});
const _hoisted_1$a = { key: 1 };
const _hoisted_2$5 = { key: 2 };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElTag = resolveComponent("ElTag");
  const _component_el_button = resolveComponent("el-button");
  const _component_ElCard = resolveComponent("ElCard");
  return openBlock(), createBlock(_component_ElCard, null, {
    default: withCtx(() => [
      _ctx.badge ? (openBlock(), createBlock(_component_ElTag, {
        key: 0,
        effect: "light",
        type: "success",
        round: ""
      }, {
        default: withCtx(() => [
          createTextVNode(" New ")
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createTextVNode(" " + toDisplayString(_ctx.Text) + " ", 1),
      _ctx.readMore ? (openBlock(), createElementBlock("span", _hoisted_1$a, [
        createElementVNode("span", null, [
          createVNode(_component_el_button, {
            type: "text",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.read = !_ctx.read)
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("b", null, toDisplayString(_ctx.button) + " >", 513), [
                [vShow, !_ctx.read]
              ])
            ]),
            _: 1
          })
        ]),
        withDirectives(createElementVNode("span", null, toDisplayString(_ctx.readMore), 513), [
          [vShow, _ctx.read]
        ])
      ])) : (openBlock(), createElementBlock("span", _hoisted_2$5, [
        createElementVNode("span", null, [
          createVNode(_component_el_button, {
            type: "text",
            onClick: _ctx.handleClick.redirect
          }, {
            default: withCtx(() => [
              createElementVNode("b", null, toDisplayString(_ctx.button) + " >", 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]))
    ]),
    _: 1
  });
}
var outlineCTA = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var SpeedDial_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = defineComponent$1({
  name: "SpeedDial",
  components: {
    ElButton
  },
  props: {
    position: { type: String },
    share: { type: Function },
    print: { type: Function },
    save: { type: Function },
    copy: { type: Function },
    type: { type: String },
    size: { type: String }
  },
  setup() {
    const clicked = ref(false);
    return {
      Share: share,
      Printer: printer,
      CopyDocument: copyDocument,
      Close: close,
      Plus: plus,
      FolderAdd: folderAdd,
      clicked
    };
  }
});
const _hoisted_1$9 = { key: 1 };
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$3 = { class: "marge" };
const _hoisted_4$2 = { class: "marge" };
const _hoisted_5$2 = { class: "marge" };
const _hoisted_6$1 = {
  key: 1,
  class: "marge"
};
const _hoisted_7$1 = { key: 1 };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return !_ctx.clicked ? (openBlock(), createBlock(_component_el_button, {
    key: 0,
    type: _ctx.type,
    size: _ctx.size,
    icon: _ctx.Plus,
    circle: "",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clicked = true)
  }, null, 8, ["type", "size", "icon"])) : (openBlock(), createElementBlock("div", _hoisted_1$9, [
    _ctx.position == "down" || _ctx.position == "top" ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
      _ctx.position == "down" ? (openBlock(), createBlock(_component_el_button, {
        key: 0,
        size: _ctx.size,
        type: _ctx.type,
        icon: _ctx.Close,
        circle: "",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clicked = false)
      }, null, 8, ["size", "type", "icon"])) : createCommentVNode("", true),
      createElementVNode("div", {
        class: normalizeClass({ "marge": _ctx.position == "down" })
      }, [
        createVNode(_component_el_button, {
          size: _ctx.size,
          icon: _ctx.Share,
          circle: "",
          type: _ctx.type,
          plain: "",
          onClick: _ctx.share
        }, null, 8, ["size", "icon", "type", "onClick"])
      ], 2),
      createElementVNode("div", _hoisted_3$3, [
        createVNode(_component_el_button, {
          size: _ctx.size,
          icon: _ctx.Printer,
          circle: "",
          type: _ctx.type,
          plain: "",
          onClick: _ctx.print
        }, null, 8, ["size", "icon", "type", "onClick"])
      ]),
      createElementVNode("div", _hoisted_4$2, [
        createVNode(_component_el_button, {
          size: _ctx.size,
          icon: _ctx.FolderAdd,
          circle: "",
          type: _ctx.type,
          plain: "",
          onClick: _ctx.save
        }, null, 8, ["size", "icon", "type", "onClick"])
      ]),
      createElementVNode("div", _hoisted_5$2, [
        createVNode(_component_el_button, {
          size: _ctx.size,
          icon: _ctx.CopyDocument,
          circle: "",
          type: _ctx.type,
          plain: "",
          onClick: _ctx.copy
        }, null, 8, ["size", "icon", "type", "onClick"])
      ]),
      _ctx.clicked && _ctx.position == "top" ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
        createVNode(_component_el_button, {
          type: _ctx.type,
          size: _ctx.size,
          icon: _ctx.Close,
          circle: "",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.clicked = false)
        }, null, 8, ["type", "size", "icon"])
      ])) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("div", _hoisted_7$1, [
      _ctx.position == "left" ? (openBlock(), createBlock(_component_el_button, {
        key: 0,
        type: _ctx.type,
        size: _ctx.size,
        icon: _ctx.Close,
        circle: "",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.clicked = false)
      }, null, 8, ["type", "size", "icon"])) : createCommentVNode("", true),
      createVNode(_component_el_button, {
        icon: _ctx.Share,
        circle: "",
        type: _ctx.type,
        size: _ctx.size,
        plain: "",
        onClick: _ctx.share
      }, null, 8, ["icon", "type", "size", "onClick"]),
      createVNode(_component_el_button, {
        icon: _ctx.Printer,
        circle: "",
        type: _ctx.type,
        size: _ctx.size,
        plain: "",
        onClick: _ctx.print
      }, null, 8, ["icon", "type", "size", "onClick"]),
      createVNode(_component_el_button, {
        icon: _ctx.FolderAdd,
        circle: "",
        type: _ctx.type,
        size: _ctx.size,
        plain: "",
        onClick: _ctx.save
      }, null, 8, ["icon", "type", "size", "onClick"]),
      createVNode(_component_el_button, {
        icon: _ctx.CopyDocument,
        circle: "",
        type: _ctx.type,
        size: _ctx.size,
        plain: "",
        onClick: _ctx.copy
      }, null, 8, ["icon", "type", "size", "onClick"]),
      _ctx.position == "right" ? (openBlock(), createBlock(_component_el_button, {
        key: 1,
        type: _ctx.type,
        size: _ctx.size,
        icon: _ctx.Close,
        circle: "",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.clicked = false)
      }, null, 8, ["type", "size", "icon"])) : createCommentVNode("", true)
    ]))
  ]));
}
var SpeedDial = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-13fff93e"]]);
var Spinner_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = defineComponent$1({
  name: "DfSpinner",
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    opacity: {
      type: String,
      required: true
    }
  }
});
const _hoisted_1$8 = ["size", "type", "opacity"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    size: _ctx.size,
    type: _ctx.type,
    opacity: _ctx.opacity
  }, null, 8, _hoisted_1$8);
}
var Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-cbaac4d2"]]);
var Tag_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent$1({
  name: "DSBTag",
  components: {
    ElTag,
    ThemeProvider
  },
  props: {
    size: {
      type: String,
      default: "default"
    },
    effect: {
      type: String,
      default: "light"
    },
    text: {
      type: String,
      default: "Tag"
    },
    srcRight: {
      type: String,
      default: ""
    },
    srcLeft: {
      type: String,
      default: ""
    },
    closable: {
      type: Boolean
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup() {
    const theme = ref({
      primary: "#800000",
      success: "#67C23A",
      warning: "#E6A23C",
      danger: "#F56C6C",
      error: "#f56c6c",
      info: "#909399"
    });
    return { theme };
  }
});
const _hoisted_1$7 = { class: "tag-wrapper" };
const _hoisted_2$3 = ["src"];
const _hoisted_3$2 = ["src"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_theme_provider = resolveComponent("theme-provider");
  return openBlock(), createBlock(_component_theme_provider, { theme: _ctx.theme }, {
    default: withCtx(() => [
      createVNode(_component_el_tag, {
        size: _ctx.size,
        effect: _ctx.effect,
        type: _ctx.type,
        closable: _ctx.closable
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$7, [
            _ctx.srcLeft ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.srcLeft,
              alt: "",
              class: "img-left"
            }, null, 8, _hoisted_2$3)) : createCommentVNode("", true),
            createElementVNode("div", null, toDisplayString(_ctx.text), 1),
            _ctx.srcRight ? (openBlock(), createElementBlock("img", {
              key: 1,
              src: _ctx.srcRight,
              alt: "",
              class: "img-right"
            }, null, 8, _hoisted_3$2)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["size", "effect", "type", "closable"])
    ]),
    _: 1
  }, 8, ["theme"]);
}
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-420603e5"]]);
var avatar = "";
const _sfc_main$a = defineComponent$1({
  props: {
    createdAt: { type: String },
    language: { type: String },
    autoUpdate: { type: Boolean }
  },
  setup(props) {
    const lang = computed$1(() => props.language === "Francais" ? fr : enUS);
    return { lang };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_timeago = resolveComponent("timeago");
  return openBlock(), createBlock(_component_timeago, {
    datetime: _ctx.createdAt,
    locale: _ctx.lang,
    "auto-update": _ctx.autoUpdate
  }, null, 8, ["datetime", "locale", "auto-update"]);
}
var TimeAgo = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var style = "";
var socialMediaPost = "";
var stepper_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$1 = defineComponent$1({
  name: "Stepper",
  components: {
    ElSteps,
    ElStep,
    ElIcon,
    Check: check
  },
  props: {
    dataSteps: {
      type: Array,
      required: true
    },
    active: {
      type: Number
    },
    statusColorWait: {
      type: String
    },
    statusColorProcess: {
      type: String
    },
    statusColorFinish: {
      type: String
    },
    colorWait: {
      type: String
    },
    colorProcess: {
      type: String
    },
    colorFinish: {
      type: String
    }
  },
  setup(props) {
    const style2 = {
      statusColorWait: props.statusColorWait,
      statusColorProcess: props.statusColorProcess,
      statusColorFinish: props.statusColorFinish,
      colorFinish: props.colorFinish,
      colorProcess: props.colorProcess,
      colorWait: props.colorWait
    };
    return { style: style2 };
  }
});
const __injectCSSVars__$1 = () => {
  useCssVars((_ctx) => ({
    "86bfd068": _ctx.style.statusColorFinish,
    "10700b54": _ctx.style.statusColorProcess,
    "413996ee": _ctx.style.statusColorWait,
    "51e38cc0": _ctx.style.colorWait,
    "4aa3e11e": _ctx.style.colorFinish,
    "2a3d5b44": _ctx.style.colorProcess
  }));
};
const __setup__$1 = __default__$1.setup;
__default__$1.setup = __setup__$1 ? (props, ctx) => {
  __injectCSSVars__$1();
  return __setup__$1(props, ctx);
} : __injectCSSVars__$1;
const _sfc_main$9 = __default__$1;
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Check = resolveComponent("Check");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_step = resolveComponent("el-step");
  const _component_el_steps = resolveComponent("el-steps");
  return openBlock(), createBlock(_component_el_steps, { "align-center": "" }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataSteps, (step, index) => {
        return openBlock(), createBlock(_component_el_step, { icon: "true" }, {
          icon: withCtx(() => [
            _ctx.active > index ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: "finish"
            }, {
              default: withCtx(() => [
                createVNode(_component_Check)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.active == index ? (openBlock(), createBlock(_component_el_button, {
              key: 1,
              class: "process"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(index + 1), 1)
              ]),
              _: 2
            }, 1024)) : createCommentVNode("", true),
            _ctx.active < index ? (openBlock(), createBlock(_component_el_button, {
              key: 2,
              class: "wait"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(index + 1), 1)
              ]),
              _: 2
            }, 1024)) : createCommentVNode("", true)
          ]),
          description: withCtx(() => [
            createElementVNode("p", {
              class: normalizeClass([
                _ctx.active > index && "color-finish",
                _ctx.active == index && "color-process",
                _ctx.active < index && "color-wait"
              ])
            }, toDisplayString(step.description), 3)
          ]),
          title: withCtx(() => [
            createElementVNode("p", {
              class: normalizeClass([
                _ctx.active > index && "color-finish",
                _ctx.active == index && "color-process",
                _ctx.active < index && "color-wait"
              ])
            }, toDisplayString(step.title), 3)
          ]),
          _: 2
        }, 1024);
      }), 256))
    ]),
    _: 1
  });
}
var stepper = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-cdc6770a"]]);
var DatePicker = "";
var SelectDate = "";
const _sfc_main$8 = defineComponent$1({
  components: {
    ElDropdownItem,
    ElDropdownMenu,
    ElDropdown,
    ...Icons,
    ElIcon,
    ElAvatar
  },
  props: {
    text: {
      type: String
    },
    trigger: {
      type: String
    },
    size: {
      type: String
    },
    items: {
      type: String
    },
    showLine1: {
      type: Boolean
    },
    showLine2: {
      type: Boolean
    },
    handleCommand: {
      type: Function
    }
  },
  setup() {
    return { Icons };
  }
});
const _hoisted_1$6 = { class: "el-dropdown-link" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_avatar = resolveComponent("el-avatar");
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");
  return openBlock(), createBlock(_component_el_dropdown, {
    onCommand: _cache[0] || (_cache[0] = (v2) => _ctx.handleCommand(v2)),
    trigger: _ctx.trigger,
    size: _ctx.size
  }, {
    dropdown: withCtx(() => [
      createVNode(_component_el_dropdown_menu, null, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item, {
            command: _ctx.items[0].command
          }, {
            default: withCtx(() => [
              _ctx.items[0].avatar ? (openBlock(), createBlock(_component_el_avatar, {
                key: 0,
                src: _ctx.items[0].avatar,
                shape: "square",
                size: "small",
                style: { "margin-right": "10px" }
              }, null, 8, ["src"])) : createCommentVNode("", true),
              _ctx.items[0].icon ? (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[_ctx.items[0].icon])))
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(_ctx.items[0].title), 1)
            ]),
            _: 1
          }, 8, ["command"]),
          createVNode(_component_el_dropdown_item, {
            command: _ctx.items[1].command,
            divided: _ctx.showLine1
          }, {
            default: withCtx(() => [
              _ctx.items[1].icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[_ctx.items[1].icon])))
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(_ctx.items[1].title), 1)
            ]),
            _: 1
          }, 8, ["command", "divided"]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items.slice(2, _ctx.items.length - 1), (item) => {
            return openBlock(), createBlock(_component_el_dropdown_item, {
              command: item.command
            }, {
              default: withCtx(() => [
                item.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[item.icon])))
                    ];
                  }),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(item.title), 1)
              ]),
              _: 2
            }, 1032, ["command"]);
          }), 256)),
          createVNode(_component_el_dropdown_item, {
            command: _ctx.items[_ctx.items.length - 1].command,
            divided: _ctx.showLine2
          }, {
            default: withCtx(() => [
              _ctx.items[_ctx.items.length - 1].icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[_ctx.items[_ctx.items.length - 1].icon])))
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(_ctx.items[_ctx.items.length - 1].title), 1)
            ]),
            _: 1
          }, 8, ["command", "divided"])
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createElementVNode("span", _hoisted_1$6, [
        createTextVNode(toDisplayString(_ctx.text), 1),
        createVNode(_component_el_icon, { class: "el-icon--right" }, {
          default: withCtx(() => [
            createVNode(_component_arrow_down)
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["trigger", "size"]);
}
var DropDown = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var ButtonIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent$1({
  name: "ButtonIcon",
  components: {
    ElButton,
    ...Icons
  },
  props: {
    plain: {
      type: Boolean
    },
    iconName: {
      type: String,
      default: "Avatar"
    },
    round: {
      type: Boolean
    },
    position: {
      type: String
    },
    text: {
      type: String
    },
    circle: {
      type: Boolean
    },
    size: {
      type: Boolean
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const handleClassName = computed$1(
      () => {
        var _a, _b;
        return ((_a = props == null ? void 0 : props.text) == null ? void 0 : _a.length) === 0 ? "solo-icon" : props.position === "right" && ((_b = props == null ? void 0 : props.text) == null ? void 0 : _b.length) > 0 ? "el-icon-right" : 0;
      }
    );
    return {
      Icons,
      handleClassName
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_el_button, {
      plain: _ctx.plain,
      round: _ctx.round,
      circle: _ctx.circle,
      size: _ctx.size,
      type: _ctx.type,
      disabled: _ctx.disabled,
      icon: (_a = _ctx.Icons) == null ? void 0 : _a[_ctx.iconName],
      class: normalizeClass(_ctx.handleClassName)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.text), 1)
      ]),
      _: 1
    }, 8, ["plain", "round", "circle", "size", "type", "disabled", "icon", "class"])
  ]);
}
var ButtonIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-31659f50"]]);
var CustomInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent$1({
  name: "CustomInput",
  components: {
    ElInput,
    Edit: edit,
    ElIcon,
    ElSelect,
    ElOption,
    DeleteFilled: deleteFilled
  },
  props: {
    title: {
      type: String
    },
    readOnly: {
      type: Boolean,
      default: true
    },
    handleEdit: {
      type: Function
    },
    handleDelete: {
      type: Function
    }
  },
  setup(props) {
    const input = ref("");
    console.log(props.readOnly, "");
    return {
      input
    };
  }
});
const _hoisted_1$5 = { class: "icons_wrapper" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Edit = resolveComponent("Edit");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_DeleteFilled = resolveComponent("DeleteFilled");
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createBlock(_component_el_input, {
    modelValue: _ctx.input,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.input = $event),
    placeholder: "Enterer un groupe",
    readonly: _ctx.readOnly,
    onBlur: _cache[1] || (_cache[1] = () => _ctx.$emit("onBlur", true)),
    onInput: _cache[2] || (_cache[2] = (value) => _ctx.$emit("updateValue", value))
  }, {
    append: withCtx(() => [
      createElementVNode("div", _hoisted_1$5, [
        createVNode(_component_el_icon, { onClick: _ctx.handleEdit }, {
          default: withCtx(() => [
            createVNode(_component_Edit)
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_el_icon, { onClick: _ctx.handleDelete }, {
          default: withCtx(() => [
            createVNode(_component_DeleteFilled)
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "readonly"]);
}
var CustomInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-12016160"]]);
var TransferList_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__ = defineComponent$1({
  name: "TransferList",
  components: {
    ElTransfer
  },
  props: {
    data: {
      type: Array
    },
    buttonTexts: {
      type: Array
    },
    titels: {
      type: Array
    },
    buttonsColor: {
      type: String,
      default: ""
    },
    disabledColor: {
      type: String,
      default: ""
    },
    panelHeader: {
      type: String,
      default: ""
    },
    inputColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    panelColor: {
      type: String,
      default: ""
    },
    itemsColor: {
      type: String,
      default: ""
    },
    HeaderColor: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const style2 = {
      buttonsColor: props.buttonsColor,
      disabledColor: props.disabledColor,
      panelHeader: props.panelHeader,
      HeaderColor: props.HeaderColor,
      inputColor: props.inputColor,
      textColor: props.textColor,
      panelColor: props.panelColor,
      itemsColor: props.itemsColor
    };
    const generateData = () => {
      const data2 = [];
      const states = props.data;
      states.forEach((item, index) => {
        data2.push({
          label: item,
          key: index
        });
      });
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    return { value, data, style: style2 };
  }
});
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "f4d6d7dc": _ctx.style.HeaderColor,
    "10e77ce3": _ctx.style.panelColor,
    "162bdadd": _ctx.style.inputColor,
    "b42356dc": _ctx.style.textColor,
    "33bef486": _ctx.style.buttonsColor,
    "7032d4a7": _ctx.style.itemsColor,
    "13fe450d": _ctx.style.panelHeader,
    "088bcaa3": _ctx.style.disabledColor
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$5 = __default__;
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_transfer = resolveComponent("el-transfer");
  return openBlock(), createBlock(_component_el_transfer, {
    modelValue: _ctx.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    titles: _ctx.titels,
    "button-texts": _ctx.buttonTexts,
    data: _ctx.data
  }, null, 8, ["modelValue", "titles", "button-texts", "data"]);
}
var TransferList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-3e95f95e"]]);
var KeyFigure_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent$1({
  name: "KeyFigure",
  components: {
    ElCard,
    ElIcon,
    Edit: edit
  },
  props: {
    title: {
      type: String
    }
  },
  setup(props) {
    return {};
  }
});
const _hoisted_1$4 = { class: "content" };
const _hoisted_2$2 = { class: "figures" };
const _hoisted_3$1 = { class: "icon" };
const _hoisted_4$1 = { class: "elements" };
const _hoisted_5$1 = {
  class: "title",
  style: { "margin-bottom": "5px" }
};
const _hoisted_6 = { class: "desc" };
const _hoisted_7 = { style: { "color": "#7239ea", "margin-left": "3px" } };
const _hoisted_8 = { style: { "margin-left": "8px" } };
const _hoisted_9 = { style: { "color": "#7239ea", "margin-left": "3px" } };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Text = resolveComponent("Text");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "icon", {}, void 0, true)
      ]),
      createElementVNode("div", _hoisted_4$1, [
        createElementVNode("div", _hoisted_5$1, [
          createVNode(_component_Text, { style: { "font-size": "17px" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          })
        ]),
        createElementVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "average", { class: "gg" }, void 0, true),
          createElementVNode("div", _hoisted_7, [
            renderSlot(_ctx.$slots, "averageValue", {}, void 0, true)
          ]),
          createElementVNode("div", _hoisted_8, [
            renderSlot(_ctx.$slots, "max", {}, void 0, true)
          ]),
          createElementVNode("div", _hoisted_9, [
            renderSlot(_ctx.$slots, "maxValue", {}, void 0, true)
          ])
        ])
      ])
    ])
  ]);
}
var KeyFigure = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-76ee8165"]]);
var KeyFigureGrid_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent$1({
  name: "KeyFigureGrid",
  components: {
    ElCard,
    KeyFigure,
    ElIcon,
    Edit: edit
  },
  props: {
    multipleElements: {
      type: Array
    }
  },
  setup(props) {
    return {};
  }
});
const _hoisted_1$3 = { class: "container" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "element", {}, void 0, true)
  ]);
}
var KeyFigureGrid = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-2c38b8e5"]]);
var logo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "Logo",
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
};
const _hoisted_1$2 = ["width", "height"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: $props.width,
    height: $props.height,
    viewBox: "0 50 200 60"
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 8, _hoisted_1$2);
}
var logo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-5e838f20"]]);
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
createAppContext();
const _sfc_main$1 = defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu
  },
  props: {
    mode: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    textColor: {
      type: String
    },
    activeTextColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    items: {
      type: Array
    }
  },
  setup() {
    const activeIndex = ref("4");
    return {
      activeIndex
    };
  }
});
const _hoisted_1$1 = { key: 1 };
const _hoisted_2$1 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu = resolveComponent("el-menu");
  return openBlock(), createBlock(_component_el_menu, {
    "default-active": _ctx.activeIndex,
    mode: _ctx.mode,
    "text-color": _ctx.textColor,
    "background-color": _ctx.backgroundColor,
    "active-text-color": _ctx.activeTextColor
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createElementBlock("div", null, [
          !item.subItem ? (openBlock(), createBlock(_component_el_menu_item, {
            key: 0,
            index: item.name
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.name), 1)
            ]),
            _: 2
          }, 1032, ["index"])) : (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createVNode(_component_el_sub_menu, {
              disabled: _ctx.disabled,
              index: item.name
            }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(item.name) + " \u2003", 1)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.subItem, (subItem) => {
                  return openBlock(), createElementBlock("div", null, [
                    !subItem.subItem ? (openBlock(), createBlock(_component_el_menu_item, {
                      key: 0,
                      index: subItem.name
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(subItem.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["index"])) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
                      createVNode(_component_el_sub_menu, {
                        disabled: _ctx.disabled,
                        index: subItem.name
                      }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(subItem.name), 1)
                        ]),
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(subItem.subItem, (sub) => {
                            return openBlock(), createElementBlock("div", null, [
                              createVNode(_component_el_menu_item, { index: sub }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(sub), 1)
                                ]),
                                _: 2
                              }, 1032, ["index"])
                            ]);
                          }), 256))
                        ]),
                        _: 2
                      }, 1032, ["disabled", "index"])
                    ]))
                  ]);
                }), 256))
              ]),
              _: 2
            }, 1032, ["disabled", "index"])
          ]))
        ]);
      }), 256))
    ]),
    _: 1
  }, 8, ["default-active", "mode", "text-color", "background-color", "active-text-color"]);
}
var ELMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElCol,
    ElIcon,
    ...Icons,
    ElRadioGroup,
    ElRadioButton
  },
  props: {
    backgroundColor: {
      type: String
    },
    textColor: {
      type: String
    },
    activeTextColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    items: {
      type: Array
    }
  },
  setup() {
    const activeIndex = ref("2");
    const isCollapse = ref(true);
    const handleOpen = (key2, keyPath) => {
      console.log(key2, keyPath);
    };
    const handleClose = (key2, keyPath) => {
      console.log(key2, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      activeIndex,
      Icons
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createElementVNode("br", null, null, -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_radio_button = resolveComponent("el-radio-button");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_el_col = resolveComponent("el-col");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_el_radio_group, {
      modelValue: _ctx.isCollapse,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isCollapse = $event),
      style: { "margin-bottom": "20px" }
    }, {
      default: withCtx(() => [
        createVNode(_component_el_radio_button, { label: false }, {
          default: withCtx(() => [
            createTextVNode("expand")
          ]),
          _: 1
        }),
        createVNode(_component_el_radio_button, { label: true }, {
          default: withCtx(() => [
            createTextVNode("collapse")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    _hoisted_1,
    createVNode(_component_el_col, null, {
      default: withCtx(() => [
        createVNode(_component_el_menu, {
          "text-color": _ctx.textColor,
          "background-color": _ctx.backgroundColor,
          "active-text-color": _ctx.activeTextColor,
          collapse: _ctx.isCollapse,
          "default-active": _ctx.activeIndex,
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
              return openBlock(), createElementBlock("div", null, [
                !item.subItem ? (openBlock(), createBlock(_component_el_menu_item, {
                  key: 0,
                  index: item.name,
                  disabled: _ctx.disabled
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[item.icon])))
                        ];
                      }),
                      _: 2
                    }, 1024),
                    !_ctx.isCollapse ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(item.name), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["index", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(_component_el_sub_menu, {
                    disabled: _ctx.disabled,
                    index: item.name
                  }, {
                    title: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent((_a = _ctx.Icons) == null ? void 0 : _a[item.icon])))
                          ];
                        }),
                        _: 2
                      }, 1024),
                      !_ctx.isCollapse ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(item.name) + " \u2003", 1)) : createCommentVNode("", true)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.subItem, (subItem) => {
                        return openBlock(), createElementBlock("div", null, [
                          !subItem.subItem ? (openBlock(), createBlock(_component_el_menu_item, {
                            key: 0,
                            index: subItem.name
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(subItem.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["index"])) : (openBlock(), createElementBlock("div", _hoisted_5, [
                            createVNode(_component_el_sub_menu, {
                              disabled: _ctx.disabled,
                              index: subItem.name
                            }, {
                              title: withCtx(() => [
                                createTextVNode(toDisplayString(subItem.name), 1)
                              ]),
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(subItem.subItem, (sub) => {
                                  return openBlock(), createElementBlock("div", null, [
                                    createVNode(_component_el_menu_item, { index: sub }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(sub), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["index"])
                                  ]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1032, ["disabled", "index"])
                          ]))
                        ]);
                      }), 256))
                    ]),
                    _: 2
                  }, 1032, ["disabled", "index"])
                ]))
              ]);
            }), 256))
          ]),
          _: 1
        }, 8, ["text-color", "background-color", "active-text-color", "collapse", "default-active", "onOpen", "onClose"])
      ]),
      _: 1
    })
  ], 64);
}
var ElSideBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Avatar as AvatarComponent, ButtonIcon, Calendar, CommentInput$1 as CommentInput, CommentSection$1 as CommentSection, CustomInput, Avatar as DfAvatar, Clipboard as DfClipboard, DropDown, DropdownCmt$1 as DropdownCmt, ELMenu as ElMenu, ElSideBar, Icons as IconsVue, KeyFigure, KeyFigureGrid, logo as Logo, outlineCTA as OutlineCTA, SelectDate$1 as SelectDate, SocialMediaPost, SpeedDial, Spinner, stackedavatar as StackedAvatar, stepper as Stepper, Table, Tag, ThemeProvider, TimeAgo, TransferList };
