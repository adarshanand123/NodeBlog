// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/addPost.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form method=\"post\" action=\"/add/post\"><label for=\"postTitle\"><p> Title:</p></label><input type=\"text\" name=\"postTitle\" id=\"postTitle\"><label for=\"postCategory\"><p>Category:</p></label><select name=\"postCategory\" id=\"postCategory\">");

  marko_forEach(input.categories, function(category) {
    out.w("<option" +
      marko_attr("value", category.category) +
      "> " +
      marko_escapeXml(category.category) +
      "</option>");
  });

  out.w("</select><label for=\"postBody\"><p>Body:</p></label><textarea name=\"postBody\" id=\"postBody\"></textarea><label for=\"postAuthor\"><p>Author Name:</p></label><input type=\"text\" name=\"postAuthor\" id=\"postAuthor\"><input type=\"submit\" value=\"save\"></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/addPost.marko"
  };
