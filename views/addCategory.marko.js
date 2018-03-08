// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/addCategory.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h3>Add a new Category</h3><form method=\"post\" action=\"/add/category\"><label for=\"addCategory\"><p> Category name:</p></label><input type=\"text\" name=\"addCategory\" id=\"addCategory\"><input type=\"submit\" value=\"save\"></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/addCategory.marko"
  };
