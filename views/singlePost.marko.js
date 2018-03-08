// Compiled using marko@4.9.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeblog$0.0.0/views/singlePost.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  var blogPost = input.posts;

  out.w("<div class=\"singlePost\"><h3>" +
    marko_escapeXml(blogPost.postTitle) +
    "</h3><div class=\"singlePostBody\">");

  var href = `/show/${blogPost.postCategory}`

  out.w("<p>By " +
    marko_escapeXml(blogPost.postAuthor) +
    " in <a" +
    marko_attr("href", href) +
    ">" +
    marko_escapeXml(blogPost.postCategory) +
    "</a></p><div><p>" +
    marko_escapeXml(blogPost.postBody) +
    "</p></div></div></div>");

  if (blogPost.postComment.length > 0) {
    marko_forEach(blogPost.postComment, function(singlePostComment) {
      out.w("<div class=\"showCommentSection\">" +
        marko_escapeXml(singlePostComment.commentatorName) +
        "<h5>By " +
        marko_escapeXml(singlePostComment.commentatorName) +
        " having " +
        marko_escapeXml(singlePostComment.commentatorEmail) +
        "</h5><div class=\"commentBody\"><p>" +
        marko_escapeXml(singlePostComment.commentatorComment) +
        "</p></div></div>");
    });
  }

  out.w("<div class=\"postCommentSection\">");

  var href = `/post/comment/${blogPost._id}`;

  out.w("<form method=\"post\"" +
    marko_attr("action", href) +
    "><label for=\"commentatorName\"><p> Name:</p></label><input type=\"text\" name=\"commentatorName\" id=\"commentatorName\"><label for=\"commentatorEmail\"><p> Email:</p></label><input type=\"text\" name=\"commentatorEmail\" id=\"commentatorEmail\"><label for=\"commentatorComment\"><p>Comment:</p></label><textarea name=\"commentatorComment\" id=\"commentatorComment\"></textarea><input type=\"submit\" value=\"Post Comment\"></form></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeblog$0.0.0/views/singlePost.marko"
  };
