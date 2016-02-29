this["HandlebarsTemplates"] = this["HandlebarsTemplates"] || {};
this["HandlebarsTemplates"]["aside-submenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  <li><a class=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" href=\"#section-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"-submenu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.submenu : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
this["HandlebarsTemplates"]["blog"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <li>\n      <div class=\"img -"
    + alias2(alias1((depth0 != null ? depth0.categories : depth0), depth0))
    + "\"></div>\n      <a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" target=\"_blank\">\n        <h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n        <p>"
    + ((stack1 = alias1((depth0 != null ? depth0.description : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n      </a>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.blogposts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<div class=\"m-blog-link\">\n  <a target=\"_blank\" href=\"http://blog.globalforestwatch.org/\">\n    <svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-f-blog\"></use></svg>\n    Read our blog\n  </a>\n</div>\n";
},"useData":true});
this["HandlebarsTemplates"]["gallery"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<li class=\"m-card -gallery\">\n				<div class=\"img\" style=\"background-image: url("
    + alias2(alias1((depth0 != null ? depth0.thumbnail : depth0), depth0))
    + ")\"></div>\n				<h3 class=\"-primary\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n				<p class=\"-uppercase\">"
    + alias2(alias1((depth0 != null ? depth0.organization : depth0), depth0))
    + "</p>\n			</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"l-inner\">\n	<header>\n		<h2>All the forest atlas <span class=\"-font-small\">("
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.gallery_length : depth0), depth0))
    + ")</span></h2>\n\n	  <div class=\"m-gallery-select m-select\">\n	    <select id=\"gallery-filter\">\n	      <option value=\"all\">All organizations</option>\n	      <option value=\"wri1\">Wri 1</option>\n	      <option value=\"wri2\">Wri 2</option>\n	      <option value=\"wri3\">Wri 3</option>\n	    </select>\n	  </div>\n\n\n	</header>\n	<ul class=\"m-grid -margin\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.gallery : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>	\n	<div id=\"gallery-paginator\"></div>\n</div>";
},"useData":true});
this["HandlebarsTemplates"]["modal-video"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal-backdrop\"></div>\n<div class=\"modal-window -video\">\n  <a href=\"#\" class=\"modal-close\"><svg><use xlink:href=\"#shape-close\"></use></svg></a>\n  <div class=\"modal-wrapper scroll-dark\">\n    <div class=\"modal-content\">\n      <div class=\"modal-video\">\n        <div id=\"modal-video\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["HandlebarsTemplates"]["search"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <li><a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></li>\n";
},"4":function(depth0,helpers,partials,data) {
    return "    <li>No data available</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
this["HandlebarsTemplates"]["slider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "    <li class=\"item\" data-index=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n  <li class=\"item -arrow -left\" data-direction=\"left\"><svg><use xlink:href=\"#icon-arrowleft\"></use></svg></li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <li class=\"item -arrow -right\" data-direction=\"right\"><svg><use xlink:href=\"#icon-arrowright\"></use></svg></li>\n</ul>\n\n";
},"useData":true});
this["HandlebarsTemplates"]["static"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "        <li data-tab=\""
    + alias1(this.lambda(depth0, depth0))
    + "\" class=\"js-static-tab\">"
    + alias1((helpers.deslugify || (depth0 && depth0.deslugify) || helpers.helperMissing).call(depth0,depth0,{"name":"deslugify","hash":{},"data":data}))
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <li data-tag=\""
    + alias2((helpers.slugify || (depth0 && depth0.slugify) || alias1).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\" class=\"js-static-tag\">\n          <h3 data-tag=\""
    + alias2((helpers.slugify || (depth0 && depth0.slugify) || alias1).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\" class=\"m-static-title\">\n            "
    + alias2((helpers.deslugify || (depth0 && depth0.deslugify) || alias1).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"deslugify","hash":{},"data":data}))
    + "\n            <div class=\"svg\"><svg><use xlink:href=\"#icon-arrowdown\"></use></svg></div>\n          </h3>\n          <div class=\"m-static-info\">\n            "
    + ((stack1 = this.lambda((depth0 != null ? depth0.content : depth0), depth0)) != null ? stack1 : "")
    + "\n          </div>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"l-inner\">\n  <aside class=\"m-static-aside js-static-aside\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </aside>\n\n  <div class=\"m-static-content js-static-content\">\n    <header>\n      <h2>"
    + this.escapeExpression((helpers.deslugify || (depth0 && depth0.deslugify) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.tab : depth0),{"name":"deslugify","hash":{},"data":data}))
    + "</h2>\n    </header>\n    <ul class=\"m-static-subtabs\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true});