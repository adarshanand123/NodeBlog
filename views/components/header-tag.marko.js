// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/components/header-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"logoContainer\"><img class=\"logo\" src=\"/images/blog_logo.gif\"></div><div class=\"header-nav-container\"><ul class=\"header-nav\"><li" +
    marko_classAttr({
      "nav-item": true,
      active: input.title === "home"
    }) +
    "><a href=\"/\">Home</a></li><li" +
    marko_classAttr({
      "nav-item": true,
      active: input.title === "add post"
    }) +
    "><a href=\"/add/post\">Add Post</a></li><li" +
    marko_classAttr({
      "nav-item": true,
      active: input.title === "add category"
    }) +
    "><a href=\"/add/category\">Add Category</a></li></ul></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/components/header-tag.marko"
  };
