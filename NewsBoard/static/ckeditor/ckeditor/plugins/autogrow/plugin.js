/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function h(a){function k(){d=a.document;l=d[CKEDITOR.env.ie?"getBody":"getDocumentElement"]();c=CKEDITOR.env.quirks?d.getBody():d.getDocumentElement();e=CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">'+(CKEDITOR.env.webkit?"&nbsp;":"")+"</span>",d)}function f(){i&&c.setStyle("overflow-y","hidden");var g=a.window.getViewPaneSize().height,b;l.append(e);b=e.getDocumentPosition(d).y+e.$.offsetHeight;e.remove();
b+=h;b=Math.max(b,o);b=Math.min(b,m);b!=g&&j!=b&&(b=a.fire("autoGrow",{currentHeight:g,newHeight:b}).newHeight,a.resize(a.container.getStyle("width"),b,!0),j=b);i||(b<m&&c.$.scrollHeight>c.$.clientHeight?c.setStyle("overflow-y","hidden"):c.removeStyle("overflow-y"))}var j,d,l,c,e,h=a.config.autoGrow_bottomSpace||0,o=void 0!==a.config.autoGrow_minHeight?a.config.autoGrow_minHeight:200,m=a.config.autoGrow_maxHeight||Infinity,i=!a.config.autoGrow_maxHeight;a.addCommand("autogrow",{exec:f,modes:{wysiwyg:1},
readOnly:1,canUndo:!1,editorFocus:!1});var p={contentDom:1,key:1,selectionChange:1,insertElement:1,mode:1},n;for(n in p)a.on(n,function(g){"wysiwyg"==g.editor.mode&&setTimeout(function(){var b=a.getCommand("maximize");!a.window||b&&b.state==CKEDITOR.TRISTATE_ON?j=null:(f(),i||f())},100)});a.on("afterCommandExec",function(a){"maximize"==a.data.name&&"wysiwyg"==a.editor.mode&&(a.data.command.state==CKEDITOR.TRISTATE_ON?c.removeStyle("overflow-y"):f())});a.on("contentDom",k);k();a.config.autoGrow_onStartup&&
a.execCommand("autogrow")}CKEDITOR.plugins.add("autogrow",{init:function(a){if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE)a.on("instanceReady",function(){a.editable().isInline()?a.ui.space("contents").setStyle("height","auto"):h(a)})}})})();
