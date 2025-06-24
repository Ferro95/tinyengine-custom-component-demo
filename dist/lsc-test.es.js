import { createElementBlock as r, openBlock as s, createElementVNode as e, toDisplayString as c, createCommentVNode as a } from "vue";
const u = (t, i) => {
  const n = t.__vccOpts || t;
  for (const [o, l] of i)
    n[o] = l;
  return n;
}, d = { class: "container" }, m = ["src"], p = {
  __name: "LscTest",
  props: {
    coverImage: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2025/06/14/16/35/mountains-9659812_1280.jpg"
    },
    title: {
      type: String,
      default: "这里是标题"
    },
    description: {
      type: String,
      default: "这里是描述内容，描述内容，描述内容，描述内容。"
    },
    btnText: {
      type: String,
      default: "点击我"
    },
    showButton: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["btn-click"],
  setup(t, { emit: i }) {
    return (n, o) => (s(), r("div", d, [
      e("img", {
        src: t.coverImage,
        alt: ""
      }, null, 8, m),
      e("div", null, [
        e("h3", null, c(t.title), 1),
        e("p", null, c(t.description), 1)
      ]),
      e("div", null, [
        t.showButton ? (s(), r("button", {
          key: 0,
          onClick: o[0] || (o[0] = (l) => n.$emit("btn-click"))
        }, c(t.btnText), 1)) : a("", !0)
      ])
    ]));
  }
}, f = /* @__PURE__ */ u(p, [["__scopeId", "data-v-86a53306"]]);
export {
  f as LscTest
};
