// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    header_tag_template = marko_loadTemplate(require.resolve("./components/header-tag.marko")),
    header_tag_tag = marko_loadTag(header_tag_template),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    footer_tag_template = marko_loadTemplate(require.resolve("./components/footer-tag.marko")),
    footer_tag_tag = marko_loadTag(footer_tag_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"/stylesheets/style.css\"><title>Node Auth</title></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\">");

  header_tag_tag({
      title: input.title
    }, out, __component, "6");

  var filePath = require(input.filename);

  var {categories,posts} = input;

  include_tag({
      _target: filePath,
      _arg: {
          categories: categories,
          posts: posts
        }
    }, out, __component, "7");

  footer_tag_tag({}, out, __component, "8");

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body><script type=\"text/javascript\" src=\"/javascripts/bootstrap.js\"></script><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>");

  if (input.filename == "./addPost.marko") {
    out.w("<script src=\"/ckeditor/ckeditor.js\"></script><script type=\"text/javascript\"> CKEDITOR.replace('postBody');</script>");
  }

  out.w("</html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "./components/header-tag.marko",
      "marko/src/taglibs/core/include-tag",
      "./components/footer-tag.marko",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
