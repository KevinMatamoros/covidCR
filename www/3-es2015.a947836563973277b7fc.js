(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{EMzn:function(e,t,i){"use strict";i.r(t);var n=i("rWdj");function r(e,t){if(!Boolean(e))throw new Error(t)}var s=i("RKIb");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.prototype.toString;e.prototype.toJSON=t,e.prototype.inspect=t,s.a&&(e.prototype[s.a]=t)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var i,n=/\r\n|[\n\r]/g,r=1,s=t+1;(i=n.exec(e.body))&&i.index<t;)r+=1,s=t+1-(i.index+i[0].length);return{line:r,column:s}}function p(e,t){var i=e.locationOffset.column-1,n=u(i)+e.body,r=t.line-1,s=t.line+(e.locationOffset.line-1),a=t.column+(1===t.line?i:0),o="".concat(e.name,":").concat(s,":").concat(a,"\n"),c=n.split(/\r\n|[\n\r]/g),p=c[r];if(p.length>120){for(var h=Math.floor(a/80),d=a%80,f=[],E=0;E<p.length;E+=80)f.push(p.slice(E,E+80));return o+l([["".concat(s),f[0]]].concat(f.slice(1,h+1).map((function(e){return["",e]})),[[" ",u(d-1)+"^"],["",f[h+1]]]))}return o+l([["".concat(s-1),c[r-1]],["".concat(s),p],["",u(a-1)+"^"],["".concat(s+1),c[r+1]]])}function l(e){var t=e.filter((function(e){return void 0!==e[1]})),i=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,n=e[1];return u(i-(t=e[0]).length)+t+(n?" | "+n:" |")})).join("\n")}function u(e){return Array(e+1).join(" ")}function h(e,t,i,n,r,s,a){var p=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,l=i;if(!l&&p){var u=p[0];l=u&&u.loc&&u.loc.source}var d,f=n;!f&&p&&(f=p.reduce((function(e,t){return t.loc&&e.push(t.loc.start),e}),[])),f&&0===f.length&&(f=void 0),n&&i?d=n.map((function(e){return c(i,e)})):p&&(d=p.reduce((function(e,t){return t.loc&&e.push(c(t.loc.source,t.loc.start)),e}),[]));var E,T=a;if(null==T&&null!=s){var N=s.extensions;"object"==o(E=N)&&null!==E&&(T=N)}Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:d||void 0,enumerable:Boolean(d)},path:{value:r||void 0,enumerable:Boolean(r)},nodes:{value:p||void 0},source:{value:l||void 0},positions:{value:f||void 0},originalError:{value:s},extensions:{value:T||void 0,enumerable:Boolean(T)}}),s&&s.stack?Object.defineProperty(this,"stack",{value:s.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function d(e,t,i){return new h("Syntax Error: ".concat(i),void 0,e,[t])}h.prototype=Object.create(Error.prototype,{constructor:{value:h},name:{value:"GraphQLError"},toString:{value:function(){return function(e){var t,i=e.message;if(e.nodes)for(var n=0,r=e.nodes;n<r.length;n++){var s=r[n];s.loc&&(i+="\n\n"+p((t=s.loc).source,c(t.source,t.start)))}else if(e.source&&e.locations)for(var a=0,o=e.locations;a<o.length;a++)i+="\n\n"+p(e.source,o[a]);return i}(this)}}});var f=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),E=function(e,t,i){this.body=e,this.name=t||"GraphQL request",this.locationOffset=i||{line:1,column:1},this.locationOffset.line>0||r(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||r(0,"column in locationOffset is 1-indexed and must be positive")};"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}});var T=i("BLR7"),N=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function v(){return this.lastToken=this.token,this.token=this.lookahead()}function I(){var e=this.token;if(e.kind!==N.EOF)do{e=e.next||(e.next=O(this,e))}while(e.kind===N.COMMENT);return e}function _(e,t,i,n,r,s,a){this.kind=e,this.start=t,this.end=i,this.line=n,this.column=r,this.value=a,this.prev=s,this.next=null}function m(e){return isNaN(e)?N.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function O(e,t){var i=e.source,n=i.body,r=n.length,s=function(e,t,i){for(var n=e.length,r=t;r<n;){var s=e.charCodeAt(r);if(9===s||32===s||44===s||65279===s)++r;else if(10===s)++r,++i.line,i.lineStart=r;else{if(13!==s)break;10===e.charCodeAt(r+1)?r+=2:++r,++i.line,i.lineStart=r}}return r}(n,t.end,e),a=e.line,o=1+s-e.lineStart;if(s>=r)return new _(N.EOF,r,r,a,o,t);var c=n.charCodeAt(s);switch(c){case 33:return new _(N.BANG,s,s+1,a,o,t);case 35:return function(e,t,i,n,r){var s,a=e.body,o=t;do{s=a.charCodeAt(++o)}while(!isNaN(s)&&(s>31||9===s));return new _(N.COMMENT,t,o,i,n,r,a.slice(t+1,o))}(i,s,a,o,t);case 36:return new _(N.DOLLAR,s,s+1,a,o,t);case 38:return new _(N.AMP,s,s+1,a,o,t);case 40:return new _(N.PAREN_L,s,s+1,a,o,t);case 41:return new _(N.PAREN_R,s,s+1,a,o,t);case 46:if(46===n.charCodeAt(s+1)&&46===n.charCodeAt(s+2))return new _(N.SPREAD,s,s+3,a,o,t);break;case 58:return new _(N.COLON,s,s+1,a,o,t);case 61:return new _(N.EQUALS,s,s+1,a,o,t);case 64:return new _(N.AT,s,s+1,a,o,t);case 91:return new _(N.BRACKET_L,s,s+1,a,o,t);case 93:return new _(N.BRACKET_R,s,s+1,a,o,t);case 123:return new _(N.BRACE_L,s,s+1,a,o,t);case 124:return new _(N.PIPE,s,s+1,a,o,t);case 125:return new _(N.BRACE_R,s,s+1,a,o,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,t,i,n,r){for(var s=e.body,a=s.length,o=t+1,c=0;o!==a&&!isNaN(c=s.charCodeAt(o))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++o;return new _(N.NAME,t,o,i,n,r,s.slice(t,o))}(i,s,a,o,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,t,i,n,r,s){var a=e.body,o=i,c=t,p=!1;if(45===o&&(o=a.charCodeAt(++c)),48===o){if((o=a.charCodeAt(++c))>=48&&o<=57)throw d(e,c,"Invalid number, unexpected digit after 0: ".concat(m(o),"."))}else c=k(e,c,o),o=a.charCodeAt(c);if(46===o&&(p=!0,o=a.charCodeAt(++c),c=k(e,c,o),o=a.charCodeAt(c)),69!==o&&101!==o||(p=!0,43!==(o=a.charCodeAt(++c))&&45!==o||(o=a.charCodeAt(++c)),c=k(e,c,o),o=a.charCodeAt(c)),46===o||69===o||101===o)throw d(e,c,"Invalid number, expected digit but got: ".concat(m(o),"."));return new _(p?N.FLOAT:N.INT,t,c,n,r,s,a.slice(t,c))}(i,s,c,a,o,t);case 34:return 34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)?function(e,t,i,n,r,s){for(var a=e.body,o=t+3,c=o,p=0,l="";o<a.length&&!isNaN(p=a.charCodeAt(o));){if(34===p&&34===a.charCodeAt(o+1)&&34===a.charCodeAt(o+2))return l+=a.slice(c,o),new _(N.BLOCK_STRING,t,o+3,i,n,r,Object(T.a)(l));if(p<32&&9!==p&&10!==p&&13!==p)throw d(e,o,"Invalid character within String: ".concat(m(p),"."));10===p?(++o,++s.line,s.lineStart=o):13===p?(10===a.charCodeAt(o+1)?o+=2:++o,++s.line,s.lineStart=o):92===p&&34===a.charCodeAt(o+1)&&34===a.charCodeAt(o+2)&&34===a.charCodeAt(o+3)?(l+=a.slice(c,o)+'"""',c=o+=4):++o}throw d(e,o,"Unterminated string.")}(i,s,a,o,t,e):function(e,t,i,n,r){for(var s,a,o,c,p=e.body,l=t+1,u=l,h=0,f="";l<p.length&&!isNaN(h=p.charCodeAt(l))&&10!==h&&13!==h;){if(34===h)return f+=p.slice(u,l),new _(N.STRING,t,l+1,i,n,r,f);if(h<32&&9!==h)throw d(e,l,"Invalid character within String: ".concat(m(h),"."));if(++l,92===h){switch(f+=p.slice(u,l-1),h=p.charCodeAt(l)){case 34:f+='"';break;case 47:f+="/";break;case 92:f+="\\";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+="\n";break;case 114:f+="\r";break;case 116:f+="\t";break;case 117:var E=(s=p.charCodeAt(l+1),a=p.charCodeAt(l+2),o=p.charCodeAt(l+3),c=p.charCodeAt(l+4),A(s)<<12|A(a)<<8|A(o)<<4|A(c));if(E<0){var T=p.slice(l+1,l+5);throw d(e,l,"Invalid character escape sequence: \\u".concat(T,"."))}f+=String.fromCharCode(E),l+=4;break;default:throw d(e,l,"Invalid character escape sequence: \\".concat(String.fromCharCode(h),"."))}u=++l}}throw d(e,l,"Unterminated string.")}(i,s,a,o,t)}throw d(i,s,function(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(m(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(m(e),".")}(c))}function k(e,t,i){var n=e.body,r=t,s=i;if(s>=48&&s<=57){do{s=n.charCodeAt(++r)}while(s>=48&&s<=57);return r}throw d(e,r,"Invalid number, expected digit but got: ".concat(m(s),"."))}function A(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}a(_,(function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}));var x=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function y(e,t){return new C(e,t).parseDocument()}function D(e,t){var i=new C(e,t);i.expectToken(N.SOF);var n=i.parseValueLiteral(!1);return i.expectToken(N.EOF),n}function S(e,t){var i=new C(e,t);i.expectToken(N.SOF);var n=i.parseTypeReference();return i.expectToken(N.EOF),n}i.d(t,"parse",(function(){return y})),i.d(t,"parseValue",(function(){return D})),i.d(t,"parseType",(function(){return S}));var C=function(){function e(e,t){var i="string"==typeof e?new E(e):e;i instanceof E||r(0,"Must provide Source. Received: ".concat(Object(n.a)(i))),this._lexer=function(e,t){var i=new _(N.SOF,0,0,0,0,null);return{source:e,options:void 0,lastToken:i,token:i,line:1,lineStart:0,advance:v,lookahead:I}}(i),this._options=t||{}}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(N.NAME);return{kind:f.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:f.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(N.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(N.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(N.BRACE_L))return{kind:f.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,i=this.parseOperationType();return this.peek(N.NAME)&&(t=this.parseName()),{kind:f.OPERATION_DEFINITION,operation:i,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(N.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:f.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(N.DOLLAR),{kind:f.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:f.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,i=this._lexer.token,n=this.parseName();return this.expectOptionalToken(N.COLON)?(e=n,t=this.parseName()):t=n,{kind:f.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(i)}},t.parseArguments=function(e){return this.optionalMany(N.PAREN_L,e?this.parseConstArgument:this.parseArgument,N.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(N.COLON),{kind:f.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:f.ARGUMENT,name:this.parseName(),value:(this.expectToken(N.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(N.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(N.NAME)?{kind:f.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:f.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e=this._lexer.token;return this.expectKeyword("fragment"),this._options.experimentalFragmentVariables?{kind:f.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}:{kind:f.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case N.BRACKET_L:return this.parseList(e);case N.BRACE_L:return this.parseObject(e);case N.INT:return this._lexer.advance(),{kind:f.INT,value:t.value,loc:this.loc(t)};case N.FLOAT:return this._lexer.advance(),{kind:f.FLOAT,value:t.value,loc:this.loc(t)};case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:return"true"===t.value||"false"===t.value?(this._lexer.advance(),{kind:f.BOOLEAN,value:"true"===t.value,loc:this.loc(t)}):"null"===t.value?(this._lexer.advance(),{kind:f.NULL,loc:this.loc(t)}):(this._lexer.advance(),{kind:f.ENUM,value:t.value,loc:this.loc(t)});case N.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:f.STRING,value:e.value,block:e.kind===N.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,i=this._lexer.token;return{kind:f.LIST,values:this.any(N.BRACKET_L,(function(){return t.parseValueLiteral(e)}),N.BRACKET_R),loc:this.loc(i)}},t.parseObject=function(e){var t=this,i=this._lexer.token;return{kind:f.OBJECT,fields:this.any(N.BRACE_L,(function(){return t.parseObjectField(e)}),N.BRACE_R),loc:this.loc(i)}},t.parseObjectField=function(e){var t=this._lexer.token,i=this.parseName();return this.expectToken(N.COLON),{kind:f.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(N.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(N.AT),{kind:f.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(N.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(N.BRACKET_R),e={kind:f.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(N.BANG)?{kind:f.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:f.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===N.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token;this.expectKeyword("schema");var t=this.parseDirectives(!0),i=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return{kind:f.SCHEMA_DEFINITION,directives:t,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(N.COLON);var i=this.parseNamedType();return{kind:f.OPERATION_TYPE_DEFINITION,operation:t,type:i,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var i=this.parseName(),n=this.parseDirectives(!0);return{kind:f.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:n,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:f.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:r,fields:s,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e=[];if(this.expectOptionalKeyword("implements")){this.expectOptionalToken(N.AMP);do{e.push(this.parseNamedType())}while(this.expectOptionalToken(N.AMP)||this._options.allowLegacySDLImplementsInterfaces&&this.peek(N.NAME))}return e},t.parseFieldsDefinition=function(){return this._options.allowLegacySDLEmptyFields&&this.peek(N.BRACE_L)&&this._lexer.lookahead().kind===N.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(N.COLON);var r=this.parseTypeReference(),s=this.parseDirectives(!0);return{kind:f.FIELD_DEFINITION,description:t,name:i,arguments:n,type:r,directives:s,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(N.COLON);var n,r=this.parseTypeReference();this.expectOptionalToken(N.EQUALS)&&(n=this.parseValueLiteral(!0));var s=this.parseDirectives(!0);return{kind:f.INPUT_VALUE_DEFINITION,description:t,name:i,type:r,defaultValue:n,directives:s,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseFieldsDefinition();return{kind:f.INTERFACE_TYPE_DEFINITION,description:t,name:i,directives:n,fields:r,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:f.UNION_TYPE_DEFINITION,description:t,name:i,directives:n,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){var e=[];if(this.expectOptionalToken(N.EQUALS)){this.expectOptionalToken(N.PIPE);do{e.push(this.parseNamedType())}while(this.expectOptionalToken(N.PIPE))}return e},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:f.ENUM_TYPE_DEFINITION,description:t,name:i,directives:n,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseDirectives(!0);return{kind:f.ENUM_VALUE_DEFINITION,description:t,name:i,directives:n,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var i=this.parseName(),n=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:f.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:n,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===N.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),i=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return{kind:f.SCHEMA_EXTENSION,directives:t,operationTypes:i,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),i=this.parseDirectives(!0);if(0===i.length)throw this.unexpected();return{kind:f.SCALAR_TYPE_EXTENSION,name:t,directives:i,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===r.length)throw this.unexpected();return{kind:f.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:f.INTERFACE_TYPE_EXTENSION,name:t,directives:i,fields:n,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseUnionMemberTypes();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:f.UNION_TYPE_EXTENSION,name:t,directives:i,types:n,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseEnumValuesDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:f.ENUM_TYPE_EXTENSION,name:t,directives:i,values:n,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),i=this.parseDirectives(!0),n=this.parseInputFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return{kind:f.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:n,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);var i=this.parseName(),n=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var s=this.parseDirectiveLocations();return{kind:f.DIRECTIVE_DEFINITION,description:t,name:i,arguments:n,repeatable:r,locations:s,loc:this.loc(e)}},t.parseDirectiveLocations=function(){this.expectOptionalToken(N.PIPE);var e=[];do{e.push(this.parseDirectiveLocation())}while(this.expectOptionalToken(N.PIPE));return e},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==x[t.value])return t;throw this.unexpected(e)},t.loc=function(e){if(!this._options.noLocation)return new R(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw d(this._lexer.source,t.start,"Expected ".concat(e,", found ").concat(L(t)))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==N.NAME||t.value!==e)throw d(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(L(t)));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===N.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=e||this._lexer.token;return d(this._lexer.source,t.start,"Unexpected ".concat(L(t)))},t.any=function(e,t,i){this.expectToken(e);for(var n=[];!this.expectOptionalToken(i);)n.push(t.call(this));return n},t.optionalMany=function(e,t,i){if(this.expectOptionalToken(e)){var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n}return[]},t.many=function(e,t,i){this.expectToken(e);var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n},e}();function R(e,t,i){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=i}function L(e){var t=e.value;return t?"".concat(e.kind,' "').concat(t,'"'):e.kind}a(R,(function(){return{start:this.start,end:this.end}}))},bcHC:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return a})),i.d(t,"e",(function(){return o})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return p}));var n=i("lTCR"),r=i.n(n);const s=r.a`
      {
        cases_section {
            name
            number
            date
            color
          }
      }
    `,a=r.a`
    {
        cases_age {
            number
            backgroundColor
            age
          }
    }
  `,o=r.a`
     {
        cases_province {
          number
          province
          region
        }
      }
  `,c=r.a`
  {
    cases_gender {
        gender
        number
      }
  }
`,p=r.a`
{
    news {
        id
        date
        description
        link
        provider_news
        title
      }
}
`},lTCR:function(e,t,i){var n=i("EMzn").parse;function r(e){return e.replace(/[\s,]+/g," ").trim()}var s={},a={},o=!0,c=!1;function p(e){var t=r(e);if(s[t])return s[t];var i=n(e,{experimentalFragmentVariables:c});if(!i||"Document"!==i.kind)throw new Error("Not a valid GraphQL document.");return i=function e(t,i){var n=Object.prototype.toString.call(t);if("[object Array]"===n)return t.map((function(t){return e(t,i)}));if("[object Object]"!==n)throw new Error("Unexpected input.");i&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken);var r,s,a,o=Object.keys(t);for(r in o)o.hasOwnProperty(r)&&(s=t[o[r]],"[object Object]"!==(a=Object.prototype.toString.call(s))&&"[object Array]"!==a||(t[o[r]]=e(s,!0)));return t}(i=function(e){for(var t,i={},n=[],s=0;s<e.definitions.length;s++){var c=e.definitions[s];if("FragmentDefinition"===c.kind){var p=c.name.value,l=r((t=c.loc).source.body.substring(t.start,t.end));a.hasOwnProperty(p)&&!a[p][l]?(o&&console.warn("Warning: fragment with name "+p+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),a[p][l]=!0):a.hasOwnProperty(p)||(a[p]={},a[p][l]=!0),i[l]||(i[l]=!0,n.push(c))}else n.push(c)}return e.definitions=n,e}(i),!1),s[t]=i,i}function l(){for(var e=Array.prototype.slice.call(arguments),t=e[0],i="string"==typeof t?t:t[0],n=1;n<e.length;n++)i+=e[n]&&e[n].kind&&"Document"===e[n].kind?e[n].loc.source.body:e[n],i+=t[n];return p(i)}l.default=l,l.resetCaches=function(){s={},a={}},l.disableFragmentWarnings=function(){o=!1},l.enableExperimentalFragmentVariables=function(){c=!0},l.disableExperimentalFragmentVariables=function(){c=!1},e.exports=l},qtYk:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));class n{}}}]);