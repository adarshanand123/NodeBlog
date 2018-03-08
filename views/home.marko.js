// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  marko_forEach(input.posts, function(blogPost) {
    var href = `show/single/${blogPost.id}`;

    out.w("<a" +
      marko_attr("href", href) +
      "><div class=\"singlePost\"><h3>" +
      marko_escapeXml(blogPost.postTitle) +
      "</h3><div class=\"singlePostBody\">");

    var href = `/show/category/${blogPost.postCategory}`

    out.w("<p>By " +
      marko_escapeXml(blogPost.postAuthor) +
      " in <a" +
      marko_attr("href", href) +
      ">" +
      marko_escapeXml(blogPost.postCategory) +
      "</a></p><div><p>" +
      marko_escapeXml(blogPost.postBody) +
      "</p></div></div></div></a>");
  });
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/home.marko"
  };
