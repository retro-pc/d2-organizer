import { I as ITEM_STATS, A as ARMORS, W as WEAPONS, M as MISC, R as RARE_NAMES, U as UNIQUE_ITEMS, S as SET_ITEMS, a as MAGIC_PREFIXES, b as MAGIC_SUFFIXES, c as RUNEWORDS, d as SKILL_TABS, P as PROPERTIES, G as GEMS, e as MOD_LOCA, f as SKILLS, C as CHAR_CLASSES, g as STAT_GROUPS, h as SETS } from './game-data.js';

var n$1,l$2,u$2,t$2,o$3,r$2,f$2,e$3={},c$2=[],s$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$2(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$2(l,f,t,o,null)}function y$2(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$2:r};return null!=l$2.vnode&&l$2.vnode(f),f}function d$2(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$2(n)}}function m$2(n){(!n.__d&&(n.__d=!0)&&t$2.push(n)&&!g$1.__r++||r$2!==l$2.debounceRendering)&&((r$2=l$2.debounceRendering)||o$3)(g$1);}function g$1(){for(var n;g$1.__r=t$2.length;)n=t$2.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$2=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$2({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$2(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$2,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$2(null,_,null,null,_):Array.isArray(_)?y$2(d$2,{children:_},null,null,null):_.__b>0?y$2(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$1(n,_,p=p||e$3,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h]);}function x$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$1(t,l,u):P(u,t,t,n.__k,t.__e,l));return l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$2.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$2.event?l$2.event(n):n);}function T(n){this.l[n.type+!0](l$2.event?l$2.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$2.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$2({},h.__s)),a$2(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$2.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$2(a$2({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$2&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l$2.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$2.__e(n,u,i);}}function z(n,u){l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n$1.call(l.childNodes),a=(y=i.props||e$3).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$2.__e(n,i);}}function N(n,u,i){var t,o;if(l$2.unmount&&l$2.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$2.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l$2.__&&l$2.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$1(i,u=(!o&&t||i).__k=v$1(d$2,null,[u]),r||e$3,e$3,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n$1.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function D(n,l){var u={__c:l="__cC"+f$2++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$2);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n$1=c$2.slice,l$2={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$2=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$2({},this.state),"function"==typeof n&&(n=n(a$2({},u),this.props)),n&&a$2(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$2(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$2(this));},_.prototype.render=d$2,t$2=[],o$3="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$1.__r=0,f$2=0;

var o$2=0;function e$2(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$2,__source:t,__self:f};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$2.vnode&&l$2.vnode(a),a}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$e = ".accessible-font{font-family:Verdana,Arial,Helvetica,sans-serif;font-weight:400;letter-spacing:normal}h1{font-family:AvQuest;font-weight:700;letter-spacing:1px;margin-top:0}.hidden{display:none}.sr-only{height:1px;left:-1px;overflow:hidden;position:fixed;top:-1px;width:1px}a,a:visited{color:#c7b377}.button,a,a:visited{text-decoration:none}.button{appearance:none;background:transparent;border:2px solid;border-color:initial;border-radius:0;box-shadow:none;color:#fff;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:1px;margin:0;padding:.4em .8em;text-align:initial}li input[type=radio]{margin-bottom:.6em;vertical-align:-12%}.magic{color:#6969ff}.rare{color:#ffff64}.unique{color:#c7b377}.set{color:#0f0}.crafted{color:#ffa800}.sidenote,.socketed{color:#787878}.danger{color:#ff6f6f}";
styleInject(css_248z$e);

function GitHubLink() {
    return (e$2("a", Object.assign({ style: "float: right", href: "https://github.com/youdz/d2-stash-organizer", "aria-label": "Source code on GitHub", target: "_blank" }, { children: e$2("svg", Object.assign({ style: "fill: white", height: "32", viewBox: "0 0 16 16", version: "1.1", width: "32", "aria-hidden": "true" }, { children: e$2("path", { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" }, void 0) }), void 0) }), void 0));
}

var t$1,u$1,r$1,o$1=0,i$1=[],c$1=l$2.__b,f$1=l$2.__r,e$1=l$2.diffed,a$1=l$2.__c,v=l$2.unmount;function m$1(t,r){l$2.__h&&l$2.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l$1(n){return o$1=1,p(w$1,n)}function p(n,r,o){var i=m$1(t$1++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y$1(r,o){var i=m$1(t$1++,3);!l$2.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function s$1(n){return o$1=5,d$1(function(){return {current:n}},[])}function d$1(n,u){var r=m$1(t$1++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,d$1(function(){return n},t)}function F(n){var r=u$1.context[n.__c],o=m$1(t$1++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u$1)),r.props.value):n.__}function x(){i$1.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],l$2.__e(u,t.__v);}}),i$1=[];}l$2.__b=function(n){u$1=null,c$1&&c$1(n);},l$2.__r=function(n){f$1&&f$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},l$2.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===l$2.requestAnimationFrame||((r$1=l$2.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x)),u$1=void 0;},l$2.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$2.__e(r,t.__v);}}),a$1&&a$1(t,u);},l$2.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){l$2.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g(n){var t=u$1;"function"==typeof n.__c&&n.__c(),u$1=t;}function j(n){var t=u$1;n.__c=n.__(),u$1=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

class SaveFileReader {
    constructor(raw) {
        this.raw = raw;
        this.peek = false;
        this.nextIndex = 0;
        this.dataView = new DataView(this.raw.buffer);
    }
    moveTo(newIndex) {
        if (!this.peek) {
            this.nextIndex = newIndex;
        }
    }
    get done() {
        return this.nextIndex >= this.raw.length;
    }
    read(length, position = this.nextIndex) {
        this.moveTo(position + length);
        return this.raw.slice(position, position + length);
    }
    readString(length, position = this.nextIndex) {
        return String.fromCharCode(...this.read(length, position));
    }
    readNullTerminatedString(position = this.nextIndex) {
        const charCodes = [];
        while (this.raw[position] > 0) {
            charCodes.push(this.raw[position]);
            position++;
        }
        // Skip the null
        position++;
        this.moveTo(position);
        return String.fromCharCode(...charCodes);
    }
    readRemaining(position = this.nextIndex) {
        this.moveTo(this.raw.length);
        return this.raw.slice(position, this.raw.length);
    }
    readInt8(position = this.nextIndex) {
        this.moveTo(position + 1);
        return this.dataView.getUint8(position);
    }
    readInt16LE(position = this.nextIndex) {
        this.moveTo(position + 2);
        return this.dataView.getUint16(position, true);
    }
    readInt32LE(position = this.nextIndex) {
        this.moveTo(position + 4);
        return this.dataView.getUint32(position, true);
    }
}

function binaryStream(reader) {
    // Trying not to convert the entire stash for every item, that would be too heavy
    let binary = "";
    let nextIndex = 0;
    const stream = {
        skip(length) {
            nextIndex = nextIndex + length;
            return false;
        },
        read(length, position = nextIndex) {
            const missingBits = position + length - binary.length;
            if (missingBits > 0) {
                binary += toBinary(reader.read(Math.ceil(missingBits / 8)));
            }
            nextIndex = position + length;
            return binary.slice(position, position + length);
        },
        readInt(size, position = nextIndex) {
            return toInt(stream.read(size, position));
        },
        readBool(position = nextIndex) {
            return stream.read(1, position) === "1";
        },
        done() {
            return binary.slice(0, nextIndex);
        },
    };
    return stream;
}
function toInt(binary) {
    return parseInt(binary.split("").reverse().join(""), 2);
}
function fromInt(n, size) {
    return n.toString(2).padStart(size, "0").split("").reverse().join("");
}
function fromString(s) {
    return s
        .split("")
        .map((char) => fromInt(char.charCodeAt(0), 8))
        .join("");
}
function toBinary(buffer) {
    return buffer.reduce((binary, byte) => binary + fromInt(byte, 8), "");
}
function fromBinary(binary) {
    const bytes = [];
    for (let i = 0; i < binary.length / 8; i++) {
        bytes.push(toInt(binary.slice(8 * i, 8 * (i + 1))));
    }
    return bytes;
}

function parseAttributes(reader) {
    var _a, _b;
    const header = reader.readString(2, 765);
    if (header !== "gf") {
        throw new Error(`Unexpected header ${header} for an attributes list`);
    }
    // Maximum 51 bytes of attributes data
    const stream = binaryStream(reader);
    let attribute;
    while ((attribute = stream.readInt(9)) !== 511) {
        // This is the value of the attribute, we do not need it
        stream.readInt((_b = (_a = ITEM_STATS[attribute]) === null || _a === void 0 ? void 0 : _a.charSize) !== null && _b !== void 0 ? _b : 0);
    }
}

function getBase(item) {
    var _a;
    const base = ARMORS[item.code] || WEAPONS[item.code] || MISC[item.code];
    if (!base) {
        throw new Error(`Could not find base ${item.code} for ${(_a = item.name) !== null && _a !== void 0 ? _a : "unknown item"}`);
    }
    return base;
}

const LAST_LEGACY = 96;
const FIRST_D2R = 97;

// Thanks to https://github.com/d07RiV/d07riv.github.io/blob/master/d2r.html#L11-L20
// prettier-ignore
const HUFFMAN = [[[[["w", "u"], [["8", ["y", ["5", ["j", []]]]], "h"]], ["s", [["2", "n"], "x"]]], [[["c", ["k", "f"]], "b"], [["t", "m"], ["9", "7"]]]], [" ", [[[["e", "d"], "p"], ["g", [[["z", "q"], "3"], ["v", "6"]]]], [["r", "l"], ["a", [["1", ["4", "0"]], ["i", "o"]]]]]]];
const WRITE_LOOKUP = new Map();
function populateLookups(encoding, path = "") {
    if (!encoding)
        return;
    if (Array.isArray(encoding)) {
        populateLookups(encoding[0], path + "0");
        populateLookups(encoding[1], path + "1");
    }
    else {
        WRITE_LOOKUP.set(encoding, path);
    }
}
populateLookups(HUFFMAN);
function decodeHuffman(stream, nbChars) {
    let result = "";
    for (let i = 0; i < nbChars; i++) {
        let char = HUFFMAN;
        while (Array.isArray(char)) {
            const next = Number(stream.read(1));
            char = char[next];
        }
        result += char;
    }
    return result;
}
function encodeHuffman(value) {
    return value
        .split("")
        .map((char) => {
        const encoded = WRITE_LOOKUP.get(char);
        if (typeof encoded === "undefined") {
            throw new Error(`Failed to huffman encode ${value}.`);
        }
        return encoded;
    })
        .join("");
}

function parseSimple(stream, owner) {
    const { read, readBool, readInt, skip } = stream;
    const item = {
        raw: "",
        owner,
        identified: skip(4) || readBool(),
        socketed: skip(6) || readBool(),
        // TODO: support ears
        simple: skip(9) || readBool(),
        ethereal: readBool(),
        personalized: skip(1) || readBool(),
        runeword: skip(1) || readBool(),
        // Version of the item uses a different size in D2R
        version: skip(5) ||
            (owner.version >= FIRST_D2R ? read(3) : readInt(10).toString()),
        location: readInt(3),
        equippedInSlot: readInt(4),
        column: readInt(4),
        row: readInt(4),
        stored: readInt(3),
        code: "",
        search: "",
    };
    if (owner.version >= FIRST_D2R) {
        item.code = decodeHuffman(stream, 4).trim();
    }
    else {
        item.code = String.fromCharCode(readInt(8), readInt(8), readInt(8), readInt(8)).trim();
    }
    // Checking base for all items, not just simple ones. That way we fail early if something goes wrong.
    const base = getBase(item);
    // Items that check for the difficulty they were found in have 2 extra bits for the difficulty
    if (base.type === "ques" && base.trackQuestDifficulty) {
        read(2);
    }
    item.nbFilledSockets = readInt(item.simple ? 1 : 3);
    if (item.socketed && item.nbFilledSockets > 0) {
        // Array to store socketed items
        item.filledSockets = [];
    }
    if (item.simple) {
        item.name = base.name;
    }
    return item;
}

function getLevel(item) {
    var _a;
    let reqlevel = 0;
    switch (item.quality) {
        case 2 /* NORMAL */:
            reqlevel = Math.max(reqlevel, getBase(item).levelReq);
            break;
        case 1 /* LOW */:
            reqlevel = Math.max(reqlevel, getBase(item).levelReq);
            break;
        case 3 /* SUPERIOR */:
            reqlevel = Math.max(reqlevel, getBase(item).levelReq);
            break;
        case 6 /* RARE */:
        case 4 /* MAGIC */:
            for (let i = 0; item.prefixes && i < item.prefixes.length; ++i) {
                if (MAGIC_PREFIXES[item.prefixes[i]])
                    reqlevel = Math.max(reqlevel, MAGIC_PREFIXES[item.prefixes[i]].reqlevel);
            }
            for (let i = 0; item.suffixes && i < item.suffixes.length; ++i) {
                if (MAGIC_SUFFIXES[item.suffixes[i]])
                    reqlevel = Math.max(reqlevel, MAGIC_SUFFIXES[item.suffixes[i]].reqlevel);
            }
            break;
        case 5 /* SET */:
            if (item.unique)
                reqlevel = Math.max(reqlevel, SET_ITEMS[item.unique].levelReq);
            break;
        case 7 /* UNIQUE */:
            if (item.unique)
                reqlevel = Math.max(reqlevel, UNIQUE_ITEMS[item.unique].reqlevel);
            break;
    }
    reqlevel = Math.max(reqlevel, ((_a = MISC[item.code]) === null || _a === void 0 ? void 0 : _a.levelReq) || 0);
    return reqlevel;
}
function parseQuality({ read, readBool, readInt }, item) {
    var _a, _b;
    item.id = readInt(32);
    item.level = readInt(7);
    item.quality = readInt(4);
    // Items with multiple pictures
    if (readBool()) {
        item.picture = readInt(3);
    }
    // Class-specific items
    if (readBool()) {
        item.classSpecificAffix = readInt(11);
    }
    switch (item.quality) {
        case 2 /* NORMAL */:
            item.name = getBase(item).name;
            break;
        case 1 /* LOW */:
            item.qualityModifier = readInt(3);
            // TODO: use the correct quality prefix
            item.name = `Low Quality ${getBase(item).name}`;
            break;
        case 3 /* SUPERIOR */:
            item.qualityModifier = readInt(3);
            item.name = `Superior ${getBase(item).name}`;
            break;
        case 4 /* MAGIC */:
            item.prefixes = [readInt(11)];
            item.suffixes = [readInt(11)];
            item.name = getBase(item).name;
            if (item.prefixes[0]) {
                item.name = `${MAGIC_PREFIXES[item.prefixes[0]].name} ${item.name}`;
            }
            if (item.suffixes[0]) {
                item.name = `${item.name} ${MAGIC_SUFFIXES[item.suffixes[0]].name}`;
            }
            break;
        case 5 /* SET */:
            item.unique = readInt(12);
            item.name = SET_ITEMS[item.unique].name;
            break;
        case 7 /* UNIQUE */:
            item.unique = readInt(12);
            item.name = UNIQUE_ITEMS[item.unique].name;
            break;
        case 6 /* RARE */:
        case 8 /* CRAFTED */:
            item.name = `${RARE_NAMES[readInt(8)]} ${RARE_NAMES[readInt(8)]}`;
            // Up to 6 affixes, alternating between prefix and suffix
            item.prefixes = [];
            item.suffixes = [];
            for (let i = 0; i < 6; i++) {
                if (readBool()) {
                    (_a = item[i % 2 ? "suffixes" : "prefixes"]) === null || _a === void 0 ? void 0 : _a.push(readInt(11));
                }
            }
            break;
    }
    if (item.runeword) {
        item.runewordId = readInt(12) - 27;
        // Special case for Delirium, I can't figure out why outside of it being the only patched runeword
        if (item.runewordId === 2691) {
            item.runewordId = 21;
        }
        item.name = RUNEWORDS[item.runewordId].name;
        read(4);
    }
    if (item.personalized) {
        let charName = "";
        let charCode;
        while ((charCode = readInt(7)) !== 0) {
            charName += String.fromCharCode(charCode);
        }
        item.name = `${charName}'s ${item.name}`;
    }
    item.reqlevel = getLevel(item);
    if (((_b = MISC[item.code]) === null || _b === void 0 ? void 0 : _b.type) === "book") {
        // Skip 5 unknown bits for tomes
        read(5);
    }
    // Skip unknown "timestamp" bit
    read(1);
}

function parseQuantified({ read, readInt }, item) {
    const baseArmor = ARMORS[item.code];
    const baseWeapon = WEAPONS[item.code];
    const baseMisc = MISC[item.code];
    if (baseArmor) {
        // NOTE:
        // Any piece of armor that spawns with +% Enhanced Defense
        // has a base defense of maxac+1 (normal maximum base defense + 1).
        item.defense = readInt(11) - 10;
    }
    if (baseArmor || baseWeapon) {
        const maxDurability = readInt(8);
        // Indestructible items have max durability 0 and no current durability
        if (maxDurability) {
            item.durability = [readInt(8), maxDurability];
            // Skipping unknown extra bit
            read(1);
        }
    }
    if ((baseArmor === null || baseArmor === void 0 ? void 0 : baseArmor.stackable) || (baseWeapon === null || baseWeapon === void 0 ? void 0 : baseWeapon.stackable) || (baseMisc === null || baseMisc === void 0 ? void 0 : baseMisc.stackable)) {
        item.quantity = readInt(9);
    }
    if (item.socketed) {
        item.sockets = readInt(4);
    }
}

class ItemParsingError extends Error {
    constructor(item, message) {
        let itemDescription = item.name;
        if (!itemDescription) {
            try {
                itemDescription = getBase(item).name;
            }
            catch (e) {
                itemDescription = `item with code ${item.code}`;
            }
        }
        itemDescription += ` at row ${item.row}, column ${item.column}`;
        let fullMessage = `Failed to parse ${itemDescription}`;
        if (message) {
            fullMessage += `: ${message}`;
        }
        super(fullMessage);
        this.name = "ItemParsingError";
    }
}

const ENHANCED_DEF_STATS = [
    "item_armor_percent",
    "armorclass",
    "item_armor_perlevel",
    "item_armorpercent_perlevel",
];
/*
 * Parses one list of modifiers at a time. Some items have more than one:
 * - Runewords have one for the base item mods, and one for the runeword itself
 * - Sets have one for each increment in set bonuses
 */
function parseModsList({ readInt }, item) {
    const mods = [];
    let modId = readInt(9);
    while (ITEM_STATS[modId]) {
        const modInfo = ITEM_STATS[modId];
        if (!modInfo) {
            throw new ItemParsingError(item, `Unknown mod ${modId}`);
        }
        let mod = {
            id: modId,
            stat: modInfo.stat,
            priority: modInfo.descPriority,
        };
        if (modInfo.encode === 3) {
            mod = {
                ...mod,
                level: readInt(6) - modInfo.bias,
                spell: readInt(10) - modInfo.bias,
                charges: readInt(8) - modInfo.bias,
                maxCharges: readInt(8) - modInfo.bias,
            };
        }
        else if (modInfo.encode === 2) {
            mod = {
                ...mod,
                level: readInt(6) - modInfo.bias,
                spell: readInt(10) - modInfo.bias,
                chance: readInt(modInfo.size) - modInfo.bias,
            };
        }
        else {
            let param = undefined;
            if (modInfo.paramSize) {
                param = readInt(modInfo.paramSize) - modInfo.bias;
            }
            mod = {
                ...mod,
                value: readInt(modInfo.size) - modInfo.bias,
                param,
            };
        }
        mods.push(mod);
        // Special mods we want to have easy access to when rendering in the UI
        if (ENHANCED_DEF_STATS.includes(mod.stat)) {
            item.enhancedDefense = true;
        }
        if (modInfo.stat === "maxdurability") {
            item.extraDurability = mod.value;
        }
        if (modInfo.followedBy) {
            modId = modInfo.followedBy;
        }
        else {
            modId = readInt(9);
        }
    }
    return mods;
}
function parseModifiers(stream, item) {
    item.modifiers = [];
    // Indicates how many items of the same set are needed for each list.
    const flags = item.quality === 5 /* SET */ ? stream.read(5) : undefined;
    if (item.runeword) {
        // Runewords have 2 lists, the base item mods and the runeword mods
        item.modifiers.push(...parseModsList(stream, item));
    }
    item.modifiers.push(...parseModsList(stream, item));
    if (flags) {
        item.setItemModifiers = [];
        for (let i = 0; i < flags.length; i++) {
            if (flags[i] === "1") {
                item.setItemModifiers.push(parseModsList(stream, item));
            }
            else {
                item.setItemModifiers.push([]);
            }
        }
    }
}

function parseItem(reader, owner) {
    var _a;
    // https://squeek502.github.io/d2itemreader/formats/d2.html
    const stream = binaryStream(reader);
    if (owner.version <= LAST_LEGACY) {
        // This is awkward, but we're juggling between the regular reader and the binary stream
        // In this case, we want to read with the binary stream to make sure the header is included
        // in the raw binary of the item.
        const header = String.fromCharCode(stream.readInt(8), stream.readInt(8));
        if (header !== "JM") {
            throw new Error(`Unexpected header ${header} for an item`);
        }
    }
    const item = parseSimple(stream, owner);
    if (!item.simple) {
        // If the id is cut short, it means it contained a "JM" which was identified as a boundary
        try {
            parseQuality(stream, item);
            parseQuantified(stream, item);
            parseModifiers(stream, item);
        }
        catch (e) {
            if (e instanceof ItemParsingError) {
                throw e;
            }
            throw new ItemParsingError(item, e.message);
        }
    }
    else {
        item.reqlevel = Math.max(item.reqlevel || 0, ((_a = MISC[item.code]) === null || _a === void 0 ? void 0 : _a.levelReq) || 0);
    }
    item.raw = stream.done();
    return item;
}

function parseItemList(reader, owner) {
    var _a;
    const header = reader.readString(2);
    if (header !== "JM") {
        throw new Error(`Unexpected header ${header} for an item list`);
    }
    let remainingItems = reader.readInt16LE();
    const items = [];
    // After that comes the first item
    while (remainingItems > 0) {
        const parsedItem = parseItem(reader, owner);
        if (parsedItem.location === 6 /* SOCKET */) {
            const socketedItem = items[items.length - 1];
            if (!socketedItem.filledSockets) {
                throw new Error("Trying to socket a non-socketed item");
            }
            parsedItem.socketedIn = socketedItem;
            socketedItem.filledSockets.push(parsedItem);
        }
        else {
            items.push(parsedItem);
            remainingItems += (_a = parsedItem.nbFilledSockets) !== null && _a !== void 0 ? _a : 0;
        }
        remainingItems--;
    }
    return items;
}

function parseMercenary(reader, character) {
    const header = reader.readString(2);
    if (header !== "jf") {
        throw new Error(`Unexpected header ${header} for mercenary data`);
    }
    // If the player has never had a mercenary, there is no item list
    if (character.hasMercenary) {
        const items = parseItemList(reader, character);
        for (const item of items) {
            item.mercenary = true;
        }
        character.items.push(...items);
    }
}

function checkRange({ prop, min, max, param }, modifiers, callback) {
    var _a, _b;
    const { stats } = PROPERTIES[prop];
    for (const { stat, type } of stats) {
        // Some weird cases of "param" like the hp/lvl on Fortitude actually do have a range
        // Well, that one case. It's the only one in the entire game that I can find.
        if (type === "other" || (type === "param" && !param)) {
            let condition = (mod) => mod.stat === stat;
            if (prop === "skill") {
                condition = (mod) => "param" in mod && mod.param === param && mod.stat === stat;
            }
            else if (prop === "skilltab") {
                const skillTab = (_a = SKILL_TABS[Number(param)]) === null || _a === void 0 ? void 0 : _a.id;
                condition = (mod) => "param" in mod && mod.param === skillTab && mod.stat === stat;
            }
            const modifier = modifiers === null || modifiers === void 0 ? void 0 : modifiers.find(condition);
            // dmg-min and dmg-max are sometimes mindamage, sometimes secondary_mindamage
            if ((prop === "dmg-min" || prop === "dmg-max") &&
                typeof modifier === "undefined") {
                // It's the other property, we just ignore this one not to mess up the score
                continue;
            }
            if (modifier) {
                modifier.range = [min, max];
            }
            callback((_b = modifier === null || modifier === void 0 ? void 0 : modifier.value) !== null && _b !== void 0 ? _b : 0, min, max);
        }
        else if (type === "all") {
            // No impact on perfection score, just copying the range too
            const modifier = modifiers === null || modifiers === void 0 ? void 0 : modifiers.find((mod) => mod.stat === stat);
            if (modifier) {
                modifier.range = [min, max];
            }
        }
    }
}
function computePerfectionScore(item) {
    var _a;
    if (!item.modifiers)
        return 0;
    let ranges;
    let allModifiers = item.modifiers;
    if (item.runeword) {
        ranges = RUNEWORDS[item.runewordId].modifiers;
    }
    else if (item.quality === 7 /* UNIQUE */) {
        ranges = UNIQUE_ITEMS[item.unique].modifiers;
    }
    else if (item.quality === 5 /* SET */) {
        ranges = [
            ...SET_ITEMS[item.unique].baseModifiers,
            ...SET_ITEMS[item.unique].setModifiers.flat(),
        ];
        allModifiers = [...item.modifiers, ...item.setItemModifiers.flat()];
    }
    else {
        throw new Error("Only uniques, sets and runewords have a perfection score.");
    }
    // We ignore the "Extra bloody" prop not to confuse people with hidden imperfections
    ranges = ranges.filter(({ prop }) => prop !== "bloody");
    const base = getBase(item);
    // Computing an average incrementally
    let score = 0;
    let nbProps = 0;
    function addProp(value, min, max) {
        // Just putting a catch-all here when there is no range
        if (min === max) {
            return;
        }
        score = (nbProps * score + (value - min) / (max - min)) / ++nbProps;
    }
    for (const range of ranges) {
        if (range.min === range.max) {
            continue;
        }
        // Sockets are a special case: sometimes it's min-max, sometimes it's param,
        // and sometimes it's way more than the actual item allows
        if (range.prop === "sock") {
            item.socketsRange = [range.min, Math.min(range.max, base.maxSockets)];
            addProp(item.sockets, ...item.socketsRange);
            continue;
        }
        checkRange(range, allModifiers, addProp);
    }
    if ((item.quality === 7 /* UNIQUE */ || item.quality === 5 /* SET */) &&
        "def" in base &&
        // % enhanced defense armor always spawn with max def + 1
        !ranges.some(({ prop }) => prop === "ac%")) {
        const defense = (_a = item.defense) !== null && _a !== void 0 ? _a : 0;
        const bonus = item.ethereal ? 1.5 : 1;
        item.defenseRange = [
            Math.floor(base.def[0] * bonus),
            Math.floor(base.def[1] * bonus),
        ];
        addProp(defense, ...item.defenseRange);
    }
    item.perfectionScore = nbProps === 0 ? 100 : Math.floor(100 * score);
}

// No socketable item can imbue extra sockets, and no set can gain sockets with multiple items
// (that would make no sense), so we can ignore the sockets mod.
const SPECIAL_PROPS = ["sock"];
function generateFixedMods(ranges) {
    const modifiers = [];
    for (const { prop, min, max, param } of ranges) {
        if (SPECIAL_PROPS.includes(prop)) {
            continue;
        }
        const { stats } = PROPERTIES[prop];
        for (const { stat, type, param: propParam } of stats) {
            // Check if this frequent findIndex impacts performance
            const statId = ITEM_STATS.findIndex((itemStat) => (itemStat === null || itemStat === void 0 ? void 0 : itemStat.stat) === stat);
            if (statId < 0) {
                throw new Error(`Unknown mod ${stat}`);
            }
            const previous = modifiers[modifiers.length - 1];
            const shared = {
                id: statId,
                stat,
                priority: ITEM_STATS[statId].descPriority,
            };
            switch (type) {
                case "proc":
                    modifiers.push({
                        ...shared,
                        level: max,
                        spell: Number(param),
                        chance: min,
                    });
                    break;
                case "charges":
                    modifiers.push({
                        ...shared,
                        level: max,
                        spell: Number(param),
                        charges: min,
                        maxCharges: min,
                    });
                    break;
                case "all":
                    if (!("value" in previous)) {
                        throw new Error("No previous mod to copy");
                    }
                    modifiers.push({
                        ...shared,
                        value: previous.value,
                        param: previous.param,
                    });
                    break;
                case "min":
                    modifiers.push({
                        ...shared,
                        value: min,
                    });
                    break;
                case "max":
                    modifiers.push({
                        ...shared,
                        value: max,
                    });
                    break;
                case "param":
                    modifiers.push({
                        ...shared,
                        value: Number(param),
                    });
                    break;
                case "other":
                    if (min !== max) {
                        throw new Error(`Unexpected range modifier ${prop}: ${min}-${max}`);
                    }
                    modifiers.push({
                        ...shared,
                        value: max,
                        param: param
                            ? stat === "item_addskill_tab"
                                ? SKILL_TABS[Number(param)].id
                                : param
                            : propParam,
                    });
            }
        }
    }
    return modifiers;
}

/**
 * Adds mods from sockets to the base item
 */
function addSocketedMods(socketedItem, socketable) {
    if (!socketedItem.modifiers) {
        socketedItem.modifiers = [];
    }
    if (socketable.code === "jew") {
        // Jewel
        socketedItem.modifiers.push(...socketable.modifiers);
    }
    else {
        // Gem or rune
        const gem = GEMS[socketable.code];
        if (!gem) {
            throw new ItemParsingError(socketedItem, "Only gems, runes and jewels can be put in sockets");
        }
        const base = ARMORS[socketedItem.code];
        let ranges;
        if (!base) {
            // Not an armor, so it has to be a weapon
            ranges = gem.weapon;
        }
        else if (base.type === "shie" ||
            base.type === "head" ||
            base.type === "ashd") {
            ranges = gem.shield;
        }
        else {
            ranges = gem.armor;
        }
        socketedItem.modifiers.push(...generateFixedMods(ranges));
    }
}

function mergeable(a, b) {
    return a.id === b.id && "value" in a && a.param === b.param;
}
/**
 * Sums identical mods from different sources on an item.
 * For instance, +25 all res on a shield and +19 all res from a Perfect Diamond
 * is consolidated into a single +44 all res.
 */
function consolidateMods(mods) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    for (const mod of mods) {
        let duplicateIndex;
        while ((duplicateIndex = mods.findIndex((other) => mod !== other && mergeable(mod, other))) >= 0) {
            const [duplicate] = mods.splice(duplicateIndex, 1);
            mod.value = ((_a = mod.value) !== null && _a !== void 0 ? _a : 0) + ((_b = duplicate.value) !== null && _b !== void 0 ? _b : 0);
            if (mod.range || duplicate.range) {
                // This code is disgusting. Anyway, we sum ranges when consolidating,
                // but if one of them isn't a range we need to add the value itself
                mod.range = [
                    ((_e = (_d = (_c = mod.range) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : mod.value) !== null && _e !== void 0 ? _e : 0) +
                        ((_h = (_g = (_f = duplicate.range) === null || _f === void 0 ? void 0 : _f[0]) !== null && _g !== void 0 ? _g : duplicate.value) !== null && _h !== void 0 ? _h : 0),
                    ((_l = (_k = (_j = mod.range) === null || _j === void 0 ? void 0 : _j[1]) !== null && _k !== void 0 ? _k : mod.value) !== null && _l !== void 0 ? _l : 0) +
                        ((_p = (_o = (_m = duplicate.range) === null || _m === void 0 ? void 0 : _m[1]) !== null && _o !== void 0 ? _o : duplicate.value) !== null && _p !== void 0 ? _p : 0),
                ];
            }
        }
    }
}

const fix_classSkillBonus = ["ModStr3a", "ModStr3d", "ModStr3c", "ModStr3b", "ModStr3e", "ModStre8a", "ModStre8b"];
/**
 * Generates the human-friendly description for an item modifier
 */
function describeSingleMod(modifier, modInfo = ITEM_STATS[modifier.id]) {
    var _a, _b, _c, _d, _e, _f;
    if (!modInfo)
        return;
    let modValue = modifier.value;
    if (modInfo.stat.endsWith("perlevel")) {
        // Per-level mod, we show it for character level 99 for the flair
        if (modInfo.stat.includes("tohit")) {
            modValue = modValue / 2;
        }
        else {
            modValue = modValue / 8;
        }
        modValue = Math.floor(99 * modValue);
    }
    let modDesc = (modValue !== null && modValue !== void 0 ? modValue : 0) < 0 ? modInfo.descNeg : modInfo.descPos;
    if (MOD_LOCA[modDesc]) {
        modDesc = MOD_LOCA[modDesc].enUS;
    }
    let valueDesc;
    let skill;
    let skillTab;
    switch (modInfo.descFunc) {
        case 19:
            modDesc = modDesc
                .replace("%d", `${modValue}`)
                .replace("%+d", (modValue !== null && modValue !== void 0 ? modValue : 0) < 0 ? `${modValue}` : `+${modValue}`)
                .replace("%%", "%");
        case 6:
        case 12:
            valueDesc = (modValue !== null && modValue !== void 0 ? modValue : 0) < 0 ? `${modValue}` : `+${modValue}`;
            break;
        case 2:
        case 7:
            valueDesc = `${modValue}%`;
            break;
        case 3:
        case 9:
            valueDesc = `${modValue}`;
            break;
        case 4:
        case 8:
            valueDesc = (modValue !== null && modValue !== void 0 ? modValue : 0) < 0 ? `${modValue}%` : `+${modValue}%`;
            break;
        case 5:
            valueDesc = `${Math.floor((modValue * 100) / 128)}%`;
            break;
        case 11:
            modDesc = modDesc.replace("%d", `${100 / modValue}`);
            break;
        case 13:
            modDesc = MOD_LOCA[fix_classSkillBonus[modifier.param || 0]].enUS;
            modDesc = modDesc.replace("%+d", (modValue !== null && modValue !== void 0 ? modValue : 0) < 0 ? `${modValue}` : `+${modValue}`);
            break;
        case 14:
            skillTab = SKILL_TABS.find(({ id }) => id === modifier.param);
            if (!skillTab) {
                throw new Error(`Unknown skill tab ${skillTab}`);
            }
            modDesc = `+${modValue} to ${skillTab.name} ${CHAR_CLASSES[skillTab.charClass].classOnly}`;
            break;
        case 15:
            modDesc = modDesc
                // Extra % because the actual one is doubled to escape it
                .replace("%d%", `${modifier.chance}`)
                .replace("%d", `${modifier.level}`)
                .replace("%s", `${SKILLS[modifier.spell].name}`);
            break;
        case 16:
            modDesc = modDesc
                .replace("%d", `${modValue}`)
                .replace("%s", `${SKILLS[modifier.param].name}`);
            break;
        case 1:
            modDesc = modDesc.replace("%d", `${modValue}`);
            break;
        case 20:
            valueDesc = `${-modValue}%`;
            break;
        case 22:
            valueDesc = `${modValue}%`;
            // We need to do the monster type, but I can't find a single item with this.
            break;
        case 23:
            valueDesc = `${modValue}%`;
            // We need to do the monster, but I can't find a single item with this.
            break;
        case 24:
            modDesc = `Level ${modifier.level} ${SKILLS[modifier.spell].name} ${modDesc
                .replace("%d", `${modifier.charges}`)
                .replace("%d", `${modifier.maxCharges}`)}`;
            break;
        case 27:
            skill = SKILLS[modifier.param];
            modDesc = `+${modValue} to ${skill.name} ${CHAR_CLASSES[skill.charClass].classOnly}`;
            break;
        case 28:
            modDesc = `+${modValue} to ${SKILLS[modifier.param].name}`;
            break;
        // Custom describe functions to handle groups
        case 100:
            // Non-poison elemental or magic damage.
            if (((_a = modifier.values) === null || _a === void 0 ? void 0 : _a[0]) !== ((_b = modifier.values) === null || _b === void 0 ? void 0 : _b[1])) {
                modDesc = modInfo.descNeg;
            }
            modDesc = modDesc
                .replace("%d", `${(_c = modifier.values) === null || _c === void 0 ? void 0 : _c[0]}`)
                .replace("%d", `${(_d = modifier.values) === null || _d === void 0 ? void 0 : _d[1]}`);
            break;
        case 101:
            // Poison damage
            if (((_e = modifier.values) === null || _e === void 0 ? void 0 : _e[0]) === ((_f = modifier.values) === null || _f === void 0 ? void 0 : _f[1])) {
                modDesc = modDesc
                    .replace("%d", `${Math.round((modifier.values[0] * modifier.values[2]) / 256)}`)
                    .replace("%d", `${Math.round(modifier.values[2] / 25)}`);
            }
            else {
                modDesc = modInfo.descNeg
                    .replace("%d", `${Math.round((modifier.values[0] * modifier.values[2]) / 256)}`)
                    .replace("%d", `${Math.round((modifier.values[1] * modifier.values[2]) / 256)}`)
                    .replace("%d", `${Math.round(modifier.values[2] / 25)}`);
            }
            break;
    }
    if (modDesc) {
        let fullDesc = "";
        let display = modInfo.descVal;
        if (modInfo.display === 2)
            display = -1;
        switch (display) {
            case 1:
                fullDesc = `${valueDesc} ${modDesc}`;
                break;
            case 2:
                fullDesc = `${modDesc} ${valueDesc}`;
                break;
            default:
                fullDesc = modDesc;
        }
        if (6 <= modInfo.descFunc && modInfo.descFunc <= 9) {
            fullDesc += ` ${modInfo.descAdditional}`;
        }
        return fullDesc;
    }
}

/**
 * Creates "custom" mods to track groups of mods that should be searched or displayed together:
 * all resistances, damage ranges, poison damage, etc.
 */
function addGroup(group, allModifiers) {
    var _a, _b, _c;
    // This function relies on a specific order for these mods (see poison)
    const mods = (_a = allModifiers === null || allModifiers === void 0 ? void 0 : allModifiers.filter(({ id }) => group.statsInGroup.includes(id))) !== null && _a !== void 0 ? _a : [];
    // We assume a mods have been merged so we cannot have duplicates
    if (mods.length !== group.statsInGroup.length) {
        return false;
    }
    if (group.allEqual && mods.some(({ value }) => value !== mods[0].value)) {
        return false;
    }
    // On some rare items we can get increase in min damage that's larger than the increase in max damage.
    // The game solves this by displaying them separately.
    if (group.isRange && ((_b = mods[0].value) !== null && _b !== void 0 ? _b : 0) > ((_c = mods[1].value) !== null && _c !== void 0 ? _c : 0)) {
        return false;
    }
    // Damage increase on non-weapons is awkward, it has all 4 mods that apply in the multiple groups.
    if (group.stat === "group:secondary-dmg" ||
        group.stat === "group:min-dmg" ||
        group.stat === "group:max-dmg") {
        // We already described the range, ignore these "duplicate" groups
        if (allModifiers === null || allModifiers === void 0 ? void 0 : allModifiers.find((mod) => mod.stat === "group:primary-dmg")) {
            // We still have to remember to delete the description from the mods,
            // primary-dmg only contains 2, not all 4.
            for (const mod of mods) {
                delete mod.description;
            }
            return false;
        }
    }
    const extraMod = {
        id: -1,
        stat: group.stat,
        priority: group.descPriority,
        value: group.allEqual ? mods[0].value : undefined,
        values: mods.map(({ value }) => value !== null && value !== void 0 ? value : 0),
    };
    extraMod.description = describeSingleMod(extraMod, group);
    if (group.allEqual) {
        extraMod.range = mods[0].range;
    }
    allModifiers === null || allModifiers === void 0 ? void 0 : allModifiers.push(extraMod);
    // Clear descriptions of items in group so they are not displayed
    for (const mod of mods) {
        delete mod.description;
    }
    return true;
}
function addModGroups(modifiers) {
    for (const group of STAT_GROUPS) {
        addGroup(group, modifiers);
    }
}

// TODO: (low priority) order of charges on Todesfaelle Flamme is wrong
function sortByPriority(modifiers) {
    modifiers.sort(({ priority: a, param: c }, { priority: b, param: d }) => b - a || (d !== null && d !== void 0 ? d : 0) - (c !== null && c !== void 0 ? c : 0));
}
function describeMods(item, mods, append = "") {
    for (const mod of mods) {
        mod.description = describeSingleMod(mod);
        if (mod.description && append) {
            mod.description += append;
        }
    }
    addModGroups(mods);
    sortByPriority(mods);
    for (const { description } of mods) {
        if (description) {
            item.search += `${description}\n`;
        }
    }
}

/**
 * Adds global set modifiers to the item
 */
function addSetMods(item) {
    const set = item.quality === 5 /* SET */ && SETS[SET_ITEMS[item.unique].set];
    if (!set)
        return;
    item.setGlobalModifiers = set.modifiers.map((notRanges) => generateFixedMods(notRanges));
}

function postProcessItem(item) {
    var _a, _b;
    if (item.runeword ||
        item.quality === 7 /* UNIQUE */ ||
        item.quality === 5 /* SET */) {
        computePerfectionScore(item);
    }
    if (item.filledSockets) {
        for (const socketed of item.filledSockets) {
            addSocketedMods(item, socketed);
            item.reqlevel = Math.max(item.reqlevel || 0, socketed.reqlevel || 0);
        }
    }
    if (item.modifiers) {
        consolidateMods(item.modifiers);
        // Generate descriptions only after consolidating
        describeMods(item, item.modifiers);
    }
    if (item.quality === 5 /* SET */) {
        (_a = item.setItemModifiers) === null || _a === void 0 ? void 0 : _a.forEach((mods, i) => {
            describeMods(item, mods, ` (${i + 2} items)`);
        });
        addSetMods(item);
        (_b = item.setGlobalModifiers) === null || _b === void 0 ? void 0 : _b.forEach((mods, i) => {
            describeMods(item, mods, i >= 4 ? "" : ` (${i + 2} items)`);
        });
    }
    if (item.ethereal) {
        item.search += "Ethereal\n";
    }
    if (item.sockets) {
        item.search += `Socketed (${item.sockets})\n`;
        item.search += `${item.sockets} sockets\n`;
    }
    if (item.filledSockets) {
        for (const socketed of item.filledSockets) {
            item.search += `${socketed.name})\n`;
        }
    }
    item.search = item.search.toLowerCase();
}

/**
 * Performs all operations that are not actually parsing, but that we need for our scripts and UI.
 * This includes generating human-friendly descriptions for the items,
 * making mods more searchable or sortable, etc.
 */
function postProcessCharacter(character) {
    for (const item of character.items) {
        item.owner = character;
        // if (item.corpse) {
        //   item.owner = `${characterName}'s corpse`;
        // } else if (item.mercenary) {
        //   item.owner = `${characterName}'s mercenary`;
        // } else {
        //   item.owner = characterName;
        // }
        postProcessItem(item);
    }
}

function parseCorpses(reader, character) {
    const header = reader.readString(2);
    if (header !== "JM") {
        throw new Error(`Unexpected header ${header} for corpse data`);
    }
    // The game actually only keeps a single corpse when leaving a game,
    // so it's not worth a huge effort to try and adapt to every case.
    const nbCorpses = reader.readInt16LE();
    character.hasCorpse = nbCorpses > 0;
    for (let i = 0; i < nbCorpses; i++) {
        // Corpse position, we don't care
        reader.read(12);
        const items = parseItemList(reader, character);
        for (const item of items) {
            item.corpse = true;
        }
        character.items.push(...items);
    }
}

// Can't use Node's Buffer because this needs to run in the browser
function parseCharacter(raw, file) {
    var _a, _b;
    const reader = new SaveFileReader(raw);
    const header = reader.readInt32LE().toString(16);
    if (header !== "aa55aa55") {
        throw new Error("This does not look like a Diablo 2 character save (.d2s)");
    }
    const character = {
        filename: (_a = file === null || file === void 0 ? void 0 : file.name) !== null && _a !== void 0 ? _a : "",
        lastModified: (_b = file === null || file === void 0 ? void 0 : file.lastModified) !== null && _b !== void 0 ? _b : 0,
        version: reader.readInt32LE(4),
        name: reader.readNullTerminatedString(20),
        class: reader.readInt8(40),
        hasCorpse: false,
        hasMercenary: !!reader.readInt32LE(179),
        characterData: new Uint8Array(),
        golem: new Uint8Array(),
        items: [],
    };
    parseAttributes(reader);
    // Skip over skills
    reader.readString(32);
    character.characterData = reader.read(reader.nextIndex - 16, 16);
    // Items on the character or in stash
    character.items.push(...parseItemList(reader, character));
    // Items on a corpse
    parseCorpses(reader, character);
    {
        parseMercenary(reader, character);
        character.golem = reader.readRemaining();
    }
    postProcessCharacter(character);
    return character;
}

function parsePage$1(reader, stash) {
    const header = reader.readString(2);
    if (header !== "ST") {
        throw new Error(`Unexpected header ${header} for a stash page`);
    }
    // To check if the save file has flags on stash pages,
    // we check if the next null character is immediately followed by "JM"
    reader.peek = true;
    reader.readNullTerminatedString();
    reader.read(1);
    const hasFlags = reader.readString(2) !== "JM";
    reader.peek = false;
    let flags;
    if (hasFlags) {
        flags = reader.readInt8();
        // 3 empty bytes after the flags
        reader.read(3);
    }
    return {
        flags,
        name: reader.readNullTerminatedString(),
        items: parseItemList(reader, stash),
    };
}

/**
 * Performs all operations that are not actually parsing, but that we need for our scripts and UI.
 * This includes generating human-friendly descriptions for the items,
 * making mods more searchable or sortable, etc.
 */
function postProcessStash$1(stash) {
    stash.pages.forEach(({ items }, pageIndex) => {
        for (const item of items) {
            item.owner = stash;
            item.page = pageIndex;
            postProcessItem(item);
        }
    });
}

// Can't use Node's Buffer because this needs to run in the browser
function parsePlugyStash(raw, file) {
    var _a, _b, _c;
    const reader = new SaveFileReader(raw);
    const header = reader.readString(4);
    if (header !== "SSS\0" && header !== "CSTM") {
        throw new Error("This does not look like a plugy stash file (.sss or .d2x)");
    }
    const stash = {
        filename: (_a = file === null || file === void 0 ? void 0 : file.name) !== null && _a !== void 0 ? _a : "",
        lastModified: (_b = file === null || file === void 0 ? void 0 : file.lastModified) !== null && _b !== void 0 ? _b : 0,
        version: LAST_LEGACY,
        personal: header === "CSTM",
        pageFlags: true,
        gold: 0,
        pages: [],
    };
    // Our current convention is that .d2x shared stashes do not come from PlugY
    stash.nonPlugY = !stash.personal && (file === null || file === void 0 ? void 0 : file.name.endsWith(".d2x"));
    let firstPage = 10;
    const version = reader.readString(2);
    if (version === "01") {
        // This is either a personal stash or a shared stash without gold
        if (stash.personal) {
            firstPage += 4;
        }
    }
    else if (version === "02") {
        // this is a shared stash with gold
        stash.gold = reader.readInt32LE();
        firstPage += 4;
    }
    else {
        throw new Error("Your version of PlugY is too old.");
    }
    // Position the reader's cursor at the beginning of the first stash page
    reader.read(0, firstPage);
    while (!reader.done) {
        try {
            stash.pages.push(parsePage$1(reader, stash));
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(`${e.message} on page ${stash.pages.length + 1}`);
            }
        }
    }
    stash.pageFlags = typeof ((_c = stash.pages[0]) === null || _c === void 0 ? void 0 : _c.flags) !== "undefined";
    postProcessStash$1(stash);
    return stash;
}

const CHUNK_SIZE = 4096;
class SaveFileWriter {
    constructor() {
        this.raw = new Uint8Array(CHUNK_SIZE);
        this.dataView = new DataView(this.raw.buffer);
        this.nextIndex = 0;
    }
    done() {
        this.raw = this.raw.slice(0, this.nextIndex);
        this.dataView = new DataView(this.raw.buffer);
        return this.raw;
    }
    get length() {
        return this.raw.length;
    }
    skip(bytes) {
        this.nextIndex += bytes;
    }
    write(values, position = this.nextIndex) {
        const end = position + values.length;
        if (end > this.raw.length) {
            const extended = new Uint8Array(Math.max(this.raw.length + CHUNK_SIZE, end));
            extended.set(this.raw);
            this.raw = extended;
            this.dataView = new DataView(this.raw.buffer);
        }
        this.raw.set(values, position);
        this.nextIndex = end;
    }
    writeString(value, position = this.nextIndex) {
        const charCodes = [];
        for (let i = 0; i < value.length; i++) {
            charCodes[i] = value.charCodeAt(i);
        }
        this.write(charCodes, position);
    }
    writeInt16LE(value, position = this.nextIndex) {
        this.write(new Array(2).fill(0), position);
        this.dataView.setUint16(position, value, true);
    }
    writeInt32LE(value, position = this.nextIndex) {
        this.write(new Array(4).fill(0), position);
        this.dataView.setUint32(position, value, true);
    }
    computeChecksum() {
        let checksum = 0;
        for (const byte of this.raw) {
            // rotate left once
            checksum = (checksum << 1) | (checksum >>> 31);
            checksum += byte;
            // Convert back to uint32
            checksum >>>= 0;
        }
        return checksum;
    }
}

function writeItemList(writer, items) {
    var _a;
    writer.writeString("JM");
    writer.writeInt16LE(items.length);
    for (const item of items) {
        writer.write(fromBinary(item.raw));
        for (const socket of (_a = item.filledSockets) !== null && _a !== void 0 ? _a : []) {
            writer.write(fromBinary(socket.raw));
        }
    }
}

function plugyStashToSaveFile(stash) {
    const writer = new SaveFileWriter();
    if (stash.personal) {
        writer.writeString("CSTM");
        writer.writeString("01");
        writer.skip(4);
    }
    else {
        writer.writeString("SSS\0");
        writer.writeString("02");
        writer.writeInt32LE(stash.gold);
    }
    writer.writeInt32LE(stash.pages.length);
    for (const page of stash.pages) {
        writer.writeString("ST");
        if (stash.pageFlags) {
            writer.write([page.flags]);
            writer.skip(3);
        }
        writer.writeString(page.name);
        writer.skip(1);
        writeItemList(writer, page.items);
    }
    return writer.done();
}

const PLUGY_SHARED_STASH_NAME = "PlugY shared stash";
const NON_PLUGY_SHARED_STASH_NAME = "Offline stash";
const D2R_SHARED_STASH_NAME = "D2R shared stash";
function isStash(owner) {
    return "pages" in owner;
}
function isPlugyStash(owner) {
    return "personal" in owner;
}
function isCharacter(owner) {
    return "items" in owner;
}
function ownerName(owner) {
    if (isPlugyStash(owner)) {
        return owner.personal
            ? `${owner.filename.slice(0, -4)}'s stash`
            : owner.nonPlugY
                ? NON_PLUGY_SHARED_STASH_NAME
                : PLUGY_SHARED_STASH_NAME;
    }
    else if (isCharacter(owner)) {
        return owner.filename.slice(0, -4);
    }
    else {
        return D2R_SHARED_STASH_NAME;
    }
}

function characterToSaveFile(character) {
    const writer = new SaveFileWriter();
    writer.writeInt32LE(parseInt("aa55aa55", 16));
    writer.writeInt32LE(character.version);
    // We don't know either the file size or the checksum yet, we will write them at the end.
    writer.skip(8);
    writer.write(character.characterData);
    writeItemList(writer, character.items.filter((item) => !item.mercenary && !item.corpse));
    // Corpse data
    writer.writeString("JM");
    writer.writeInt16LE(character.hasCorpse ? 1 : 0);
    if (character.hasCorpse) {
        writer.skip(12);
        writeItemList(writer, character.items.filter((item) => item.corpse));
    }
    {
        writer.writeString("jf");
        if (character.hasMercenary) {
            writeItemList(writer, character.items.filter((item) => item.mercenary));
        }
        writer.write(character.golem);
    }
    // Update file size and checksum now that we know them
    const result = writer.done();
    writer.writeInt32LE(writer.length, 8);
    writer.writeInt32LE(writer.computeChecksum(), 12);
    return result;
}

function d2rStashToSaveFile(stash) {
    const writer = new SaveFileWriter();
    for (const page of stash.pages) {
        const pageStart = writer.nextIndex;
        writer.writeInt32LE(parseInt("aa55aa55", 16));
        writer.skip(4);
        writer.writeInt32LE(stash.version);
        writer.writeInt32LE(page.gold);
        const lengthPosition = writer.nextIndex;
        writer.skip(48);
        writeItemList(writer, page.items);
        // Retroactively add the length
        const pageEnd = writer.nextIndex;
        writer.writeInt32LE(pageEnd - pageStart, lengthPosition);
        // Reposition at the end
        writer.write([], pageEnd);
    }
    return writer.done();
}

function parsePage(reader, stash) {
    const header = reader.readInt32LE().toString(16);
    if (header !== "aa55aa55") {
        throw new Error(`Unexpected header ${header} for a stash page`);
    }
    reader.read(8);
    const page = {
        gold: reader.readInt32LE(),
        items: [],
    };
    // Position at the start of the list
    reader.read(48);
    page.items.push(...parseItemList(reader, stash));
    return page;
}

/**
 * Performs all operations that are not actually parsing, but that we need for our scripts and UI.
 * This includes generating human-friendly descriptions for the items,
 * making mods more searchable or sortable, etc.
 */
function postProcessStash(stash) {
    stash.pages.forEach(({ items }, pageIndex) => {
        for (const item of items) {
            item.owner = stash;
            item.page = pageIndex;
            postProcessItem(item);
        }
    });
}

// Can't use Node's Buffer because this needs to run in the browser
function parseD2rStash(raw, file) {
    var _a, _b;
    const reader = new SaveFileReader(raw);
    reader.peek = true;
    const header = reader.readInt32LE().toString(16);
    if (header !== "aa55aa55") {
        throw new Error("This does not look like a Diablo 2 shared stash save (.d2i)");
    }
    const stash = {
        filename: (_a = file === null || file === void 0 ? void 0 : file.name) !== null && _a !== void 0 ? _a : "",
        lastModified: (_b = file === null || file === void 0 ? void 0 : file.lastModified) !== null && _b !== void 0 ? _b : 0,
        // Can different pages have different versions?
        version: reader.readInt32LE(8),
        pages: [],
    };
    reader.peek = false;
    while (!reader.done) {
        stash.pages.push(parsePage(reader, stash));
    }
    postProcessStash(stash);
    return stash;
}

const DEFAULT_SHARED_FILENAME = "_LOD_SharedStashSave.sss";
const DEFAULT_PERSONAL_FILENAME = "CharacterName.d2x";
const DEFAULT_CHARACTER_FILENAME = "CharacterName.d2s";
const DEFAULT_D2R_SHARED_FILENAME = "SharedStashSoftCoreV2.d2i";
async function parseSaveFile(file) {
    try {
        const raw = new Uint8Array(await file.arrayBuffer());
        if (file.name.endsWith(".d2s")) {
            return parseCharacter(raw, file);
        }
        else if (file.name.endsWith(".d2i")) {
            return parseD2rStash(raw, file);
        }
        else {
            return parsePlugyStash(raw, file);
        }
    }
    catch (e) {
        if (e instanceof Error) {
            alert(e.message);
        }
        throw e;
    }
}
function toSaveFile(owner) {
    let raw;
    let defaultName;
    if (isPlugyStash(owner)) {
        raw = plugyStashToSaveFile(owner);
        defaultName = owner.personal
            ? DEFAULT_PERSONAL_FILENAME
            : DEFAULT_SHARED_FILENAME;
    }
    else if (isCharacter(owner)) {
        raw = characterToSaveFile(owner);
        defaultName = DEFAULT_CHARACTER_FILENAME;
    }
    else {
        raw = d2rStashToSaveFile(owner);
        defaultName = DEFAULT_D2R_SHARED_FILENAME;
    }
    return new File([new Blob([raw.buffer])], owner.filename || defaultName);
}

if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. " +
        "This application will not remember your stash between sessions.");
}
const OLD_STORE = "stash";
const STORE = "save_files";
const STORE_VERSION = 2;
const DB = new Promise((resolve, reject) => {
    const request = indexedDB.open("D2StashOrganizer", STORE_VERSION);
    let backfill;
    request.onerror = function () {
        reject("Unable to open IndexedDB");
    };
    request.onsuccess = function () {
        if (backfill) {
            backfill.finally(() => resolve(this.result));
        }
        else {
            resolve(this.result);
        }
    };
    request.onupgradeneeded = function (e) {
        const db = this.result;
        const storeCreation = db.createObjectStore(STORE, {
            keyPath: "name",
        });
        if (e.oldVersion < 1) {
            // Port the stash that was stored as JSON in local storage
            const oldSave = localStorage.getItem("stash");
            if (oldSave) {
                storeCreation.transaction.oncomplete = () => {
                    // Small code duplication, but this is just legacy support that will go away
                    db.transaction(STORE, "readwrite")
                        .objectStore(STORE)
                        .add(toSaveFile(JSON.parse(oldSave)));
                };
            }
        }
        else if (e.oldVersion < 2) {
            // Port the only stash that was stored in the previous store
            backfill = new Promise((resolve, reject) => {
                const v1Data = request.transaction.objectStore(OLD_STORE).get(0);
                v1Data.onsuccess = function () {
                    if (this.result) {
                        const adding = request
                            .transaction.objectStore(STORE)
                            .add(this.result);
                        adding.onsuccess = () => resolve();
                        adding.onerror = () => reject();
                    }
                    else {
                        resolve();
                    }
                };
                v1Data.onerror = () => reject();
            });
        }
    };
});
function readSaveFiles() {
    return DB.then((db) => new Promise((resolve, reject) => {
        const request = db
            .transaction(STORE, "readonly")
            .objectStore(STORE)
            .getAll();
        request.onerror = function () {
            reject("Unable to read save files.");
        };
        request.onsuccess = function () {
            resolve(this.result);
        };
    }));
}
function writeSaveFile(stash) {
    return DB.then((db) => new Promise((resolve, reject) => {
        const request = db
            .transaction(STORE, "readwrite")
            .objectStore(STORE)
            .put(stash);
        request.onerror = function () {
            reject("Unable to store save file.");
        };
        request.onsuccess = function () {
            resolve();
        };
    }));
}
function writeAllFiles(files) {
    return DB.then((db) => new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE, "readwrite");
        const objectStore = transaction.objectStore(STORE);
        objectStore.clear();
        for (const file of files) {
            objectStore.add(file);
        }
        transaction.onerror = function () {
            reject("Unable to store save files.");
        };
        transaction.oncomplete = function () {
            resolve();
        };
    }));
}
async function getSavedStashes() {
    const files = await readSaveFiles();
    return Promise.all(files.map((file) => parseSaveFile(file)));
}

function getAllItems(owner, skipPages = 0) {
    if (isStash(owner)) {
        const all = [];
        for (const { items } of owner.pages.slice(skipPages)) {
            all.push(...items);
        }
        return all;
    }
    else {
        // No pages to skip for characters
        return owner.items;
    }
}

function stringifyPage(items) {
    var _a;
    let result = "";
    for (const item of items) {
        result += item.raw;
        for (const socket of (_a = item.filledSockets) !== null && _a !== void 0 ? _a : []) {
            result += socket.raw;
        }
    }
    return result;
}
function findDuplicates(owners) {
    const byString = new Map();
    for (const owner of owners) {
        if (isPlugyStash(owner)) {
            owner.pages.forEach((page, i) => {
                byString.set(stringifyPage(page.items), [owner, i]);
            });
        }
    }
    const duplicates = new Map();
    for (const owner of owners) {
        if (isCharacter(owner)) {
            const duplicate = byString.get(stringifyPage(owner.items.filter(({ stored }) => stored === 5 /* STASH */)));
            if (duplicate) {
                duplicates.set(owner, duplicate);
            }
        }
        return duplicates;
    }
}
function updateCharacterStashes(duplicates) {
    var _a, _b;
    for (const [character, [stash, pageIndex]] of duplicates.entries()) {
        character.items = character.items.filter(({ stored }) => stored !== 5 /* STASH */);
        character.items.push(...((_b = (_a = stash.pages[pageIndex]) === null || _a === void 0 ? void 0 : _a.items) !== null && _b !== void 0 ? _b : []));
    }
}

const SelectionContext = D({
    selectedItems: new Set(),
    toggleItem: () => undefined,
    selectAll: () => undefined,
    unselectAll: () => undefined,
    resetSelection: () => undefined,
});
function SelectionProvider({ children }) {
    const [selectedItems, setSelectedItems] = l$1(new Set());
    const toggleItem = A$1((item) => {
        setSelectedItems((previous) => {
            const newSelection = new Set(previous);
            if (newSelection.has(item)) {
                newSelection.delete(item);
            }
            else {
                newSelection.add(item);
            }
            return newSelection;
        });
    }, []);
    const toggleAll = A$1((selected) => (items) => {
        setSelectedItems((previous) => {
            const newSelection = new Set(previous);
            for (const item of items) {
                newSelection[selected ? "add" : "delete"](item);
            }
            return newSelection;
        });
    }, []);
    const resetSelection = A$1(() => {
        setSelectedItems(new Set());
    }, []);
    const value = d$1(() => ({
        selectedItems,
        toggleItem,
        selectAll: toggleAll(true),
        unselectAll: toggleAll(false),
        resetSelection,
    }), [selectedItems, toggleItem, toggleAll, resetSelection]);
    return (e$2(SelectionContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
}

const CollectionContext = D({
    owners: [],
    allItems: [],
    hasPlugY: false,
    setCollection: () => undefined,
    setSingleFile: () => undefined,
});
function formatCollection(owners) {
    owners.sort((a, b) => ownerName(a).localeCompare(ownerName(b)));
    const hasPlugY = owners.some((owner) => isPlugyStash(owner) && !owner.nonPlugY);
    const lastActivePlugyStashPage = hasPlugY
        ? findDuplicates(owners)
        : undefined;
    const allItems = owners.flatMap((owner) => {
        let items = getAllItems(owner);
        if (isCharacter(owner) && (lastActivePlugyStashPage === null || lastActivePlugyStashPage === void 0 ? void 0 : lastActivePlugyStashPage.has(owner))) {
            items = items.filter((item) => item.stored !== 5 /* STASH */);
        }
        return items;
    });
    return { owners, allItems, hasPlugY, lastActivePlugyStashPage };
}
function CollectionProvider({ children }) {
    const { resetSelection } = F(SelectionContext);
    const [collection, setInternalCollection] = l$1({
        owners: [],
        allItems: [],
        hasPlugY: false,
    });
    const setCollection = A$1((owners) => {
        setInternalCollection(formatCollection(owners));
        resetSelection();
    }, [resetSelection]);
    const setSingleFile = A$1((owner) => {
        setInternalCollection((previous) => {
            const newOwners = [...previous.owners];
            const existing = newOwners.findIndex((o) => o.filename === owner.filename);
            if (existing >= 0) {
                newOwners.splice(existing, 1, owner);
            }
            else {
                newOwners.push(owner);
            }
            return formatCollection(newOwners);
        });
        resetSelection();
    }, [resetSelection]);
    const value = d$1(() => ({ ...collection, setCollection, setSingleFile }), [collection, setCollection, setSingleFile]);
    // Initialize with the stash found in storage
    y$1(() => {
        void getSavedStashes().then((owners) => {
            setCollection(owners);
            if (!window.location.hash && owners.length > 0) {
                window.location.hash = "#saves";
            }
        });
    }, [setCollection]);
    return (e$2(CollectionContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
}

function getGrailItem(item) {
    if (!item.quality || typeof item.unique === "undefined") {
        return;
    }
    switch (item.quality) {
        case 7 /* UNIQUE */:
            return UNIQUE_ITEMS[item.unique];
        case 5 /* SET */:
            return SET_ITEMS[item.unique];
        default:
            return;
    }
}

const UNIQUES_ORDER = [
    [
        {
            name: "Rings",
            shortName: "rings",
            types: ["ring"],
            layout: "single-line",
        },
        {
            name: "Amulets",
            shortName: "amulets",
            types: ["amul"],
            // TODO: Better layout for amulets. Maybe TWO_LINES?
        },
        {
            name: "Charms",
            shortName: "charms",
            types: ["scha", "mcha", "lcha"],
            // Maybe we can do better on this
            layout: "single-column",
        },
        {
            name: "Jewels",
            shortName: "jewels",
            types: ["jewl"],
            layout: "single-line",
        },
    ],
    [
        { name: "Armor", shortName: "armor", types: ["tors"] },
        { name: "Helms", shortName: "helms", types: ["helm", "circ"] },
        { name: "Gloves", shortName: "gloves", types: ["glov"] },
        {
            name: "Belts",
            shortName: "belts",
            types: ["belt"],
            layout: "tier-columns",
        },
        { name: "Boots", shortName: "boots", types: ["boot"] },
        { name: "Shields", shortName: "shields", types: ["shie"] },
    ],
    [
        {
            name: "One-hand axes",
            shortName: "axes",
            types: ["axe"],
            twoHanded: false,
        },
        {
            name: "Two-hand axes",
            shortName: "axes",
            types: ["axe"],
            twoHanded: true,
        },
        { name: "Bows", shortName: "bows", types: ["bow"] },
        { name: "Crossbows", shortName: "crossbows", types: ["xbow"] },
        { name: "Daggers", shortName: "daggers", types: ["knif"] },
        {
            name: "One-hand maces",
            shortName: "maces",
            types: ["club", "mace", "hamm", "scep"],
            twoHanded: false,
        },
        {
            name: "Two-hand maces",
            shortName: "maces",
            types: ["club", "mace", "hamm", "scep"],
            twoHanded: true,
        },
        { name: "Polearms", shortName: "polearms", types: ["pole"] },
        { name: "Spears", shortName: "spears", types: ["spea"] },
        { name: "Staves", shortName: "staves", types: ["staf"] },
        {
            name: "One-hand swords",
            shortName: "swords",
            types: ["swor"],
            twoHanded: false,
        },
        {
            name: "Two-hand swords",
            shortName: "swords",
            types: ["swor"],
            twoHanded: true,
        },
        {
            name: "Throwing",
            shortName: "throwing",
            types: ["taxe", "tkni", "jave"],
        },
        { name: "Wands", shortName: "wands", types: ["wand"] },
    ],
    [
        { name: "Amazon", shortName: "Amazon", types: ["ajav", "abow", "aspe"] },
        { name: "Assassin", shortName: "Assassin", types: ["h2h", "h2h2"] },
        { name: "Barbarian", shortName: "Barbarian", types: ["phlm"] },
        { name: "Druid", shortName: "Druid", types: ["pelt"] },
        { name: "Necromancer", shortName: "Necro", types: ["head"] },
        { name: "Paladin", shortName: "Paladin", types: ["ashd"] },
        { name: "Sorceress", shortName: "Sorceress", types: ["orb"] },
    ],
];
const EQUIPMENT_TYPES = [];
const TYPES_TO_UNIQUES_SECTION = new Map();
for (const category of UNIQUES_ORDER) {
    for (const section of category) {
        EQUIPMENT_TYPES.push(...section.types);
        for (const type of section.types) {
            if (typeof section.twoHanded === "undefined") {
                TYPES_TO_UNIQUES_SECTION.set(type, section);
            }
            else {
                TYPES_TO_UNIQUES_SECTION.set(`${type}-${Number(section.twoHanded)}`, section);
            }
        }
    }
}

function groupUniquesBySection(items, withTiers) {
    const grouped = new Map();
    // We start by adding every section in order,
    // because Map guarantees insertion order on iteration
    for (const category of UNIQUES_ORDER) {
        for (const section of category) {
            grouped.set(section, []);
        }
    }
    for (const item of items) {
        const base = getBase(item);
        const section = TYPES_TO_UNIQUES_SECTION.get(base.type) ||
            ("twoHanded" in base &&
                TYPES_TO_UNIQUES_SECTION.get(`${base.type}-${Number(base.twoHanded)}`));
        if (!section) {
            continue;
        }
        const group = grouped.get(section);
        const tierIndex = withTiers ? base.tier : 0;
        let tier = group[tierIndex];
        if (!tier) {
            tier = [];
            group[tierIndex] = tier;
        }
        tier.push(item);
    }
    // Discard empty tiers
    for (const [section, tiers] of grouped) {
        grouped.set(section, tiers.filter(({ length }) => length > 0));
    }
    return grouped;
}

function canBeEthereal(item) {
    if (!("enabled" in item)) {
        item = getGrailItem(item);
    }
    if (!item) {
        return false;
    }
    return (!getBase(item).indestructible &&
        item.modifiers.every(({ prop }) => prop !== "indestruct" && prop !== "ethereal"));
}

function listGrailUniques(eth = false) {
    // Ignore disabled and quest items
    let collectible = UNIQUE_ITEMS.filter((item) => item.enabled && item.qlevel > 0);
    if (eth) {
        // Ignore indestructible items for the eth version
        collectible = collectible.filter(canBeEthereal);
    }
    const uniques = groupUniquesBySection(collectible, true);
    // Sort each section by qlevel
    for (const tiers of uniques.values()) {
        for (const tier of tiers) {
            tier.sort((a, b) => a.qlevel - b.qlevel);
        }
    }
    return uniques;
}

const CATEGORIES = [
    [{ name: "Low level sets", maxLevel: 20 }],
    [{ name: "Mid level sets", maxLevel: 60 }],
    [{ name: "High level sets", maxLevel: 100 }],
];
const SETS_ORDER = [];
// Currently one section per set, to easily storing extras in a page right after the set.
const allSets = Object.entries(SETS);
let minLevel = 0;
for (const [{ maxLevel }] of CATEGORIES) {
    SETS_ORDER.push(allSets
        .filter(([, { levelReq }]) => minLevel <= levelReq && levelReq < maxLevel)
        .sort(([, a], [, b]) => a.levelReq - b.levelReq)
        .map(([set, { name }]) => {
        // lastIndexOf because of M'avina
        const nameEnd = name.lastIndexOf("'");
        if (nameEnd >= 0 &&
            !name.startsWith("Death") &&
            !name.startsWith("Heaven") &&
            !name.startsWith("Orphan")) {
            name = name.slice(0, nameEnd);
        }
        let shortName = name;
        let shortNameEnd = name.indexOf("'", 4);
        if (shortNameEnd < 0) {
            shortNameEnd = name.indexOf(" ", 4);
        }
        if (shortNameEnd > 0) {
            shortName = name.slice(0, shortNameEnd);
        }
        if (shortName.startsWith("The ")) {
            shortName = shortName.slice(4);
        }
        return { name, shortName, set };
    }));
    minLevel = maxLevel;
}

function groupBySet(items) {
    const bySet = new Map();
    // We create all of them because we still want empty pages for the grail
    // Using SET_ORDER so iteration order on the map is nice
    for (const section of SETS_ORDER) {
        for (const { set } of section) {
            bySet.set(SETS[set], []);
        }
    }
    for (const item of items) {
        const setItem = "set" in item ? item : SET_ITEMS[item.unique];
        bySet.get(SETS[setItem.set]).push(item);
    }
    return bySet;
}

function addToGrail(found, item) {
    const grailItem = getGrailItem(item);
    if (grailItem) {
        let existing = found.get(grailItem);
        if (!existing) {
            existing = [];
            found.set(grailItem, existing);
        }
        existing.push(item);
    }
}
function grailProgress(items) {
    const found = new Map();
    for (const item of items) {
        addToGrail(found, item);
        if (item.filledSockets) {
            for (const socketed of item.filledSockets) {
                addToGrail(found, socketed);
            }
        }
    }
    const progress = new Map();
    for (const [section, uniques] of listGrailUniques()) {
        progress.set(section, uniques.map((tier) => tier.map((item) => {
            var _a, _b;
            return {
                item,
                normal: !!found.get(item),
                ethereal: canBeEthereal(item)
                    ? !!((_a = found.get(item)) === null || _a === void 0 ? void 0 : _a.some(({ ethereal }) => ethereal))
                    : undefined,
                perfect: !!((_b = found
                    .get(item)) === null || _b === void 0 ? void 0 : _b.some(({ perfectionScore }) => perfectionScore === 100)),
            };
        })));
    }
    for (const [set, setItems] of groupBySet(SET_ITEMS)) {
        progress.set(set, [
            setItems.map((item) => {
                var _a;
                return ({
                    item,
                    normal: !!found.get(item),
                    ethereal: undefined,
                    perfect: !!((_a = found
                        .get(item)) === null || _a === void 0 ? void 0 : _a.some(({ perfectionScore }) => perfectionScore === 100)),
                });
            }),
        ]);
    }
    return progress;
}
function grailSummary(items) {
    const summary = {
        nbNormal: 0,
        totalNormal: 0,
        nbEth: 0,
        totalEth: 0,
        nbPerfect: 0,
    };
    for (const tiers of grailProgress(items).values()) {
        for (const tier of tiers) {
            for (const { normal, ethereal, perfect } of tier) {
                summary.totalNormal++;
                if (normal) {
                    summary.nbNormal++;
                }
                if (perfect) {
                    summary.nbPerfect++;
                }
                if (typeof ethereal !== "undefined") {
                    summary.totalEth++;
                    if (ethereal) {
                        summary.nbEth++;
                    }
                }
            }
        }
    }
    return summary;
}

var css_248z$d = ".found{color:#6fb76f}.found:after{content:\" ✔\"}.missing{color:#ff6f6f}.missing:after{content:\" ✘\"}#grail-tracker{margin-top:1em}#grail-tracker th{font-weight:inherit;text-align:left}#grail-tracker td{padding:0 1em}#grail-tracker td[colspan]{padding-top:1em;text-align:center}";
styleInject(css_248z$d);

function GrailSummary() {
    const { allItems } = F(CollectionContext);
    const { nbNormal, totalNormal, nbEth, totalEth, nbPerfect } = d$1(() => grailSummary(allItems), [allItems]);
    return (e$2("div", { children: [e$2("p", { children: ["Normal Grail: ", nbNormal, " / ", totalNormal] }, void 0), e$2("p", { children: ["Eth Grail: ", nbEth, " / ", totalEth] }, void 0), e$2("p", { children: ["Perfect Grail: ", nbPerfect, " / ", totalNormal] }, void 0)] }, void 0));
}

const TIER_NAMES = ["Normal", "Exceptional", "Elite"];
const toClassName = (b) => (b ? "found" : "missing");
function GrailTracker() {
    const { allItems } = F(CollectionContext);
    const [filter, setFilter] = l$1("all");
    const progress = d$1(() => grailProgress(allItems), [allItems]);
    const sections = d$1(() => {
        const sections = [];
        for (const [section, tiers] of progress) {
            tiers.forEach((tier, i) => {
                const items = [];
                for (const { item, normal, ethereal, perfect } of tier) {
                    if ((normal && filter === "missing") ||
                        (perfect && filter === "perfect") ||
                        ((typeof ethereal === "undefined" || ethereal) &&
                            filter === "ethereal")) {
                        continue;
                    }
                    items.push(e$2("tr", { children: [e$2("th", Object.assign({ scope: "row", class: "set" in item ? "set" : "unique" }, { children: item.name }), void 0), e$2("td", Object.assign({ class: toClassName(normal) }, { children: "Normal" }), void 0), typeof ethereal === "undefined" ? (e$2("td", { children: e$2("span", { "aria-label": "Not applicable" }, void 0) }, void 0)) : (e$2("td", Object.assign({ class: toClassName(ethereal) }, { children: "Ethereal" }), void 0)), e$2("td", Object.assign({ class: toClassName(perfect) }, { children: "Perfect" }), void 0)] }, void 0));
                }
                if (items.length === 0) {
                    return;
                }
                const sectionName = tiers.length > 1 ? `${TIER_NAMES[i]} ${section.name}` : section.name;
                sections.push(e$2("tbody", { children: [e$2("tr", { children: e$2("td", Object.assign({ colSpan: 4 }, { children: sectionName }), void 0) }, void 0), items] }, void 0));
            });
        }
        return sections;
    }, [filter, progress]);
    return (e$2(d$2, { children: [e$2("div", Object.assign({ class: "controls" }, { children: [e$2(GrailSummary, {}, void 0), e$2("div", { children: [e$2("p", { children: e$2("label", Object.assign({ for: "grail-filter" }, { children: "Show:" }), void 0) }, void 0), e$2("p", { children: e$2("select", Object.assign({ id: "grail-filter", value: filter, onChange: ({ currentTarget }) => setFilter(currentTarget.value) }, { children: [e$2("option", Object.assign({ value: "all" }, { children: "All items" }), void 0), e$2("option", Object.assign({ value: "missing" }, { children: "Missing items" }), void 0), e$2("option", Object.assign({ value: "ethereal" }, { children: "Missing ethereal items" }), void 0), e$2("option", Object.assign({ value: "perfect" }, { children: "Missing perfect items" }), void 0)] }), void 0) }, void 0)] }, void 0)] }), void 0), e$2("table", Object.assign({ id: "grail-tracker" }, { children: sections }), void 0)] }, void 0));
}

var css_248z$c = ".pagination{display:flex;flex-flow:row nowrap;justify-content:space-between;margin:2em 0}.pagination button:first-child{margin-right:1em}.pagination button[disabled]{cursor:default;opacity:0}";
styleInject(css_248z$c);

function Pagination({ nbEntries, pageSize, currentEntry, onChange, text, }) {
    const lastPossible = Math.floor((nbEntries - 1) / pageSize) * pageSize;
    // Make sure we never go page the last page
    y$1(() => {
        if (currentEntry >= nbEntries) {
            onChange(0);
        }
    }, [nbEntries, currentEntry, onChange]);
    if (lastPossible <= 0) {
        return null;
    }
    return (e$2("div", Object.assign({ class: "pagination" }, { children: [e$2("div", Object.assign({ style: { visibility: currentEntry === 0 ? "hidden" : "visible" } }, { children: [e$2("button", Object.assign({ class: "button", onClick: () => onChange(0) }, { children: "First" }), void 0), e$2("button", Object.assign({ class: "button", onClick: () => onChange((n) => n - pageSize) }, { children: "Previous" }), void 0)] }), void 0), e$2("span", { children: text(currentEntry + 1, Math.min(currentEntry + pageSize, nbEntries)) }, void 0), e$2("div", Object.assign({ style: {
                    visibility: currentEntry >= lastPossible ? "hidden" : "visible",
                } }, { children: [e$2("button", Object.assign({ class: "button", onClick: () => onChange((n) => n + pageSize) }, { children: "Next" }), void 0), e$2("button", Object.assign({ class: "button", onClick: () => onChange(lastPossible) }, { children: "Last" }), void 0)] }), void 0)] }), void 0));
}

const PAGE_HEIGHT = 10;
const PAGE_WIDTH = 10;
const ALL_ROWS = Array(PAGE_HEIGHT)
    .fill(0)
    .map((_, i) => i);
const ALL_COLUMNS = Array(PAGE_WIDTH)
    .fill(0)
    .map((_, i) => i);

function singleLineLayout(groups) {
    const positions = new Map();
    let col = 0;
    for (const group of groups) {
        for (const item of group) {
            const base = getBase(item);
            if (col + base.width > PAGE_WIDTH) {
                throw new Error(`Single-line layout ran out of space for ${item.name}`);
            }
            positions.set(item, { page: 0, rows: ALL_ROWS, cols: [col] });
            col += base.width;
        }
    }
    return { nbPages: Math.sign(groups.length), positions };
}

function tiersLayout(groups, 
// columns instead of lines
columns = false, 
// Force each tier on its own page
multiplePages = false) {
    const positions = new Map();
    let currentPage = -1;
    let row = 0;
    let col = 0;
    // max height of the current row of items
    let nextRow = 0;
    function newPage() {
        currentPage++;
        row = 0;
        col = 0;
        nextRow = 0;
    }
    // Items of size 2 max, which can be spread evenly on the page
    let smallItems = false;
    for (let tier = 0; tier < groups.length; tier++) {
        if (tier === 0 || multiplePages) {
            newPage();
        }
        else {
            row = nextRow;
            // Adding empty rows for pretty even presentation when possible
            if (smallItems ||
                (0 < nextRow && nextRow < (3 - groups.length + tier) * 3)) {
                smallItems = true;
                row += 2;
            }
            col = 0;
            nextRow = row;
        }
        for (const item of groups[tier]) {
            const base = getBase(item);
            if (col + base[columns ? "height" : "width"] >
                (columns ? PAGE_HEIGHT : PAGE_WIDTH)) {
                row = nextRow;
                col = 0;
            }
            if (row + base[columns ? "width" : "height"] >
                (columns ? PAGE_WIDTH : PAGE_HEIGHT)) {
                if (!multiplePages) {
                    // We ran out of space due to an edge case (like 1-h swords), retry this whole section
                    return tiersLayout(groups, columns, true);
                }
                else {
                    // If we were already using multiple pages, just create a new page
                    newPage();
                }
            }
            positions.set(item, {
                page: currentPage,
                rows: [columns ? col : row],
                cols: [columns ? row : col],
            });
            col += base[columns ? "height" : "width"];
            nextRow = Math.max(nextRow, row + base[columns ? "width" : "height"]);
        }
        // Check if we can fit all tiers on the same page
        if (!multiplePages && tier === 0 && groups.length > 2) {
            multiplePages = nextRow > 3;
        }
    }
    return { nbPages: currentPage + 1, positions };
}

function singleColumnLayout(groups) {
    const positions = new Map();
    let row = 0;
    for (const group of groups) {
        for (const item of group) {
            const base = getBase(item);
            if (row + base.height > PAGE_HEIGHT) {
                throw new Error(`Single-column layout ran out of space for ${item.name}`);
            }
            positions.set(item, { page: 0, rows: [row], cols: ALL_COLUMNS });
            row += base.height;
        }
    }
    return { nbPages: Math.sign(groups.length), positions };
}

function setLayout([setItems,]) {
    const positions = new Map();
    // We take the space of the largest shield/weapon, which looks awkward for small ones like wands.
    for (const item of setItems) {
        const { type } = getBase(item);
        switch (type) {
            case "ring":
                positions.set(item, { page: 0, rows: [6], cols: [3, 6] });
                break;
            case "amul":
                positions.set(item, { page: 0, rows: [2], cols: [6] });
                break;
            case "tors":
                positions.set(item, { page: 0, rows: [3], cols: [4] });
                break;
            case "helm":
            case "circ":
            case "phlm":
            case "pelt":
                positions.set(item, { page: 0, rows: [0], cols: [4] });
                break;
            case "glov":
                positions.set(item, { page: 0, rows: [7], cols: [1] });
                break;
            case "belt":
                positions.set(item, { page: 0, rows: [7], cols: [4] });
                break;
            case "boot":
                positions.set(item, { page: 0, rows: [7], cols: [7] });
                break;
            case "shie":
            case "head":
            case "ashd":
                positions.set(item, { page: 0, rows: [2], cols: [7] });
                break;
            default:
                // Special case for Bul-Kathos
                if (item.code === "7wd") {
                    positions.set(item, { page: 0, rows: [2], cols: [7] });
                    break;
                }
                // All weapon types fall under the default
                positions.set(item, { page: 0, rows: [2], cols: [1] });
        }
    }
    return { nbPages: 1, positions };
}

function linesLayout(groups) {
    const positions = new Map();
    if (groups.length === 0) {
        return { nbPages: 0, positions };
    }
    let currentPage = 0;
    let row = 0;
    let col = 0;
    // max height of the current row of items
    let nextRow = 0;
    function positionGroup(group, fullPage) {
        for (const item of group) {
            const base = getBase(item);
            if (col + base.width > PAGE_WIDTH) {
                row = nextRow;
                col = 0;
            }
            if (row + base.height > PAGE_HEIGHT) {
                currentPage++;
                row = 0;
                col = 0;
                nextRow = 0;
                // We avoid breaking a group from the bottom of a previous page
                if (!fullPage) {
                    return positionGroup(group, true);
                }
            }
            positions.set(item, { page: currentPage, rows: [row], cols: [col] });
            col += base.width;
            nextRow = Math.max(nextRow, row + base.height);
        }
    }
    for (const group of groups) {
        row = nextRow;
        col = 0;
        positionGroup(group, row === 0);
    }
    return { nbPages: currentPage + 1, positions };
}

function runeIndex(rune) {
    return Number(rune.code.slice(1));
}
function runesLayout([runes,]) {
    const positions = new Map();
    runes.sort((a, b) => runeIndex(a) - runeIndex(b));
    // We want empty groups for absent runes, to leave extra empty lines.
    const groups = [];
    let currentRune = 0;
    // 1 = El, 33 = Zod
    for (let i = 1; i < 34; i++) {
        const group = [];
        while (currentRune < runes.length && runeIndex(runes[currentRune]) === i) {
            group.push(runes[currentRune]);
            currentRune++;
        }
        groups.push(group);
    }
    let currentPage = 0;
    let row = -2;
    let col = 0;
    function positionGroup(group, fullPage) {
        for (const item of group) {
            if (col + 1 > PAGE_WIDTH) {
                row++;
                col = 0;
            }
            if (row + 1 > PAGE_HEIGHT) {
                currentPage++;
                row = 0;
                col = 0;
                // We avoid breaking a single rune list over two pages
                if (!fullPage) {
                    return positionGroup(group, true);
                }
            }
            positions.set(item, { page: currentPage, rows: [row], cols: [col] });
            col++;
        }
    }
    for (const group of groups) {
        // Leave one empty row between each rune level
        row += 2;
        col = 0;
        positionGroup(group, row === 0);
    }
    return { nbPages: currentPage + 1, positions };
}

function layout(layout, items) {
    switch (layout) {
        case "single-line":
            return singleLineLayout(items);
        case "single-column":
            return singleColumnLayout(items);
        case "set":
            return setLayout(items);
        case "runes":
            return runesLayout(items);
        case "tier-lines":
            return tiersLayout(items, false);
        case "tier-columns":
            return tiersLayout(items, true);
        default:
            return linesLayout(items);
    }
}

function makeIndex(page, main) {
    if (typeof page.flags === "undefined") {
        return;
    }
    page.flags += 2 /* INDEX */;
    if (main) {
        page.flags += 4 /* MAIN_INDEX */;
    }
}

function sortAndGroupBy(items, prop, desc = false) {
    return items
        .sort((a, b) => (desc ? -1 : 1) * (prop(a) - prop(b)))
        .reduce((groups, item) => {
        let lastGroup = groups[groups.length - 1];
        if (!lastGroup || prop(lastGroup[0]) !== prop(item)) {
            lastGroup = [];
            groups.push(lastGroup);
        }
        lastGroup.push(item);
        return groups;
    }, []);
}

function addPage(stash, pageName, index) {
    const page = {
        name: `# ${pageName}`,
        items: [],
        flags: stash.personal ? 0 /* NONE */ : 1 /* SHARED */,
    };
    if (typeof index === "undefined") {
        stash.pages.push(page);
    }
    else {
        stash.pages.splice(index, 0, page);
    }
    return page;
}

function collision(a, b) {
    const { width: wa, height: ha } = getBase(a);
    const { width: wb, height: hb } = getBase(b);
    return (a.row + ha > b.row &&
        b.row + hb > a.row &&
        a.column + wa > b.column &&
        b.column + wb > a.column);
}

// 16 less bits for the JM header, 7 less for the item version
const D2R_OFFSET = -23;
// Indices in the raw string
const D2_ITEM_VERSION_START = 48;
const D2_ITEM_VERSION_END = D2_ITEM_VERSION_START + 10;
const D2R_ITEM_VERSION_START = D2_ITEM_VERSION_START - 16;
const D2R_ITEM_VERSION_END = D2R_ITEM_VERSION_START + 3;
const D2_ITEM_CODE_START = 76;
const D2_ITEM_CODE_END = D2_ITEM_CODE_START + 32;
const D2R_ITEM_CODE_START = D2_ITEM_CODE_START + D2R_OFFSET;
// D2R item code end is dynamic :(
const JM_HEADER = fromString("JM");
function toD2R(item) {
    if (item.owner.version >= FIRST_D2R) {
        // Item should already be in D2R format.
        return;
    }
    item.raw =
        // Remove the JM header
        item.raw.slice(16, D2_ITEM_VERSION_START) +
            // Replace the version
            item.version +
            item.raw.slice(D2_ITEM_VERSION_END, D2_ITEM_CODE_START) +
            // Replace the code
            encodeHuffman(item.code.padEnd(4, " ")) +
            item.raw.slice(D2_ITEM_CODE_END);
    // Converting items in sockets too
    if (item.filledSockets) {
        for (const socket of item.filledSockets) {
            toD2R(socket);
        }
    }
}
function toD2(item) {
    if (item.owner.version <= LAST_LEGACY) {
        // Item should already be in legacy format.
        return;
    }
    const codeLength = encodeHuffman(item.code.padEnd(4, " ")).length;
    item.raw =
        // Add the JM header
        JM_HEADER +
            item.raw.slice(0, D2R_ITEM_VERSION_START) +
            // Replace the version
            fromInt(Number(item.version), 10) +
            item.raw.slice(D2R_ITEM_VERSION_END, D2R_ITEM_CODE_START) +
            // Replace the code
            fromString(item.code.padEnd(4, " ")) +
            item.raw.slice(D2R_ITEM_CODE_START + codeLength);
    // Converting items in sockets too
    if (item.filledSockets) {
        for (const socket of item.filledSockets) {
            toD2(socket);
        }
    }
}

function positionItem(item, [col, row]) {
    const offset = item.owner.version >= FIRST_D2R ? D2R_OFFSET : 0;
    item.column = col;
    item.row = row;
    item.raw =
        item.raw.slice(0, 65 + offset) +
            fromInt(col, 4) +
            fromInt(row, 4) +
            item.raw.slice(73 + offset);
}

function moveItem(stash, item, toPage, row, col) {
    // FIXME: this is legacy, we should use transferItem now for organization
    // Remove from the current page
    for (const page of stash.pages) {
        const index = page.items.indexOf(item);
        if (index >= 0) {
            page.items.splice(index, 1);
            break;
        }
    }
    if (!stash.pages[toPage]) {
        throw new Error("Cannot move an item to a page that has not been created yet");
    }
    const target = { ...item, row, column: col };
    const itemInSameSpot = stash.pages[toPage].items.find((other) => collision(target, other));
    if (itemInSameSpot) {
        throw new Error(`Trying to move ${item.name} to the same spot as ${itemInSameSpot.name}`);
    }
    stash.pages[toPage].items.push(item);
    item.owner = stash;
    item.page = toPage;
    positionItem(item, [col, row]);
}

// Order to display them in
const RESPECS = ["tes", "ceh", "bet", "fed", "toa"];
function organizeRespecs(stash, items) {
    if (items.length === 0)
        return;
    const groups = sortAndGroupBy(items, (item) => RESPECS.indexOf(item.code));
    const offset = stash.pages.length;
    const { nbPages, positions } = layout("lines", groups);
    for (let i = 0; i < nbPages; i++) {
        const page = addPage(stash, "Respecs");
        if (i === 0) {
            makeIndex(page, false);
        }
    }
    for (const [item, { page, rows, cols }] of positions.entries()) {
        moveItem(stash, item, offset + page, rows[0], cols[0]);
    }
}

// Order to display them in
const UBERS = ["pk1", "pk2", "pk3", "dhn", "bey", "mbr", "std"];
function organizeUbers(stash, items) {
    if (items.length === 0)
        return;
    const groups = sortAndGroupBy(items, (item) => UBERS.indexOf(item.code));
    const offset = stash.pages.length;
    const { nbPages, positions } = layout("lines", groups);
    for (let i = 0; i < nbPages; i++) {
        const page = addPage(stash, "Ubers");
        if (i === 0) {
            makeIndex(page, false);
        }
    }
    for (const [item, { page, rows, cols }] of positions.entries()) {
        moveItem(stash, item, offset + page, rows[0], cols[0]);
    }
}

function isSimpleItem(item) {
    // For some reason Essences and organs are not simple
    return (item.simple || RESPECS.includes(item.code) || UBERS.includes(item.code));
}

function AdditionalInfo({ item, quantity }) {
    var _a;
    const relevant = [];
    if (isSimpleItem(item)) {
        relevant.push(`Quantity: ${quantity}`);
    }
    if (item.runeword ||
        item.quality === 7 /* UNIQUE */ ||
        item.quality === 5 /* SET */) {
        if (item.perfectionScore === 100) {
            relevant.push("Perfect");
        }
        else {
            relevant.push(`${item.perfectionScore}% perfect`);
        }
    }
    if (item.ethereal) {
        relevant.push("Ethereal");
    }
    if (item.runeword) {
        relevant.push(getBase(item).name);
    }
    if (((_a = item.quality) !== null && _a !== void 0 ? _a : 10) <= 3 /* SUPERIOR */ &&
        !item.runeword &&
        !!item.sockets) {
        relevant.push(`${item.sockets} sockets`);
    }
    return e$2(d$2, { children: relevant.join(", ") }, void 0);
}

var css_248z$b = ".item td,.item th{text-align:left}.item th{font-weight:inherit;width:400px}.item td:first-child{width:2em}";
styleInject(css_248z$b);

var css_248z$a = ".tooltip-container{position:relative}.tooltip-trigger{cursor:pointer}.tooltip-content{bottom:-1px;height:1px;overflow:hidden;position:fixed;text-align:center;white-space:nowrap;width:1px}.tooltip-container:focus-within .tooltip-content,.tooltip-container:hover .tooltip-content{background:rgba(0,0,0,.9);border:2px solid #fff;bottom:calc(100% + .4em);height:auto;left:0;padding:.4em .8em;position:absolute;width:auto}";
styleInject(css_248z$a);

function colorClass(item) {
    if (item.runeword) {
        return "unique";
    }
    switch (item.quality) {
        case 4 /* MAGIC */:
            return "magic";
        case 6 /* RARE */:
            return "rare";
        case 7 /* UNIQUE */:
            return "unique";
        case 5 /* SET */:
            return "set";
        case 8 /* CRAFTED */:
            return "crafted";
    }
    if (!!item.sockets || item.ethereal) {
        return "socketed";
    }
    return "";
}

let UNIQUE_ID = 0;
function Range({ range }) {
    if (!range) {
        return null;
    }
    return e$2("span", Object.assign({ class: "sidenote" }, { children: [" [", range.join(" - "), "]"] }), void 0);
}
function ItemTooltip({ item }) {
    var _a, _b, _c, _d, _e, _f;
    const [tooltipId] = l$1(() => `item-tooltip-${UNIQUE_ID++}`);
    const className = colorClass(item);
    if (item.simple) {
        return e$2("span", Object.assign({ class: className }, { children: item.name }), void 0);
    }
    const base = getBase(item);
    const magicMods = (_b = (_a = item.modifiers) === null || _a === void 0 ? void 0 : _a.map(({ description, range }) => description && (e$2("div", Object.assign({ class: "magic" }, { children: [description, e$2(Range, { range: range }, void 0)] }), void 0)))) !== null && _b !== void 0 ? _b : [];
    if (item.ethereal || item.sockets) {
        const toDisplay = [
            item.ethereal && "Ethereal",
            item.sockets && `Socketed (${item.sockets})`,
        ].filter((m) => !!m);
        magicMods === null || magicMods === void 0 ? void 0 : magicMods.push(e$2("div", Object.assign({ class: "magic" }, { children: [toDisplay.join(", "), e$2(Range, { range: item.socketsRange }, void 0)] }), void 0));
    }
    const setItemMods = (_c = item.setItemModifiers) === null || _c === void 0 ? void 0 : _c.flatMap((mods) => mods.map(({ description, range }) => description && (e$2("div", Object.assign({ class: "set" }, { children: [description, " ", e$2(Range, { range: range }, void 0)] }), void 0))));
    const setGlobalMods = (_d = item.setGlobalModifiers) === null || _d === void 0 ? void 0 : _d.flatMap((mods) => mods.map(({ description }) => description && e$2("div", Object.assign({ class: "unique" }, { children: description }), void 0)));
    setGlobalMods === null || setGlobalMods === void 0 ? void 0 : setGlobalMods.unshift(e$2("br", {}, void 0));
    let reqline = null;
    if (item.reqlevel && item.reqlevel > 1)
        reqline = e$2("div", { children: ["Level Required: ", item.reqlevel || 1] }, void 0);
    return (e$2("span", Object.assign({ class: "tooltip-container" }, { children: [e$2("span", Object.assign({ class: `tooltip-trigger ${className}`, tabIndex: 0, "aria-describedby": tooltipId }, { children: item.name }), void 0), e$2("div", Object.assign({ id: tooltipId, class: "tooltip-content", role: "tooltip" }, { children: [e$2("div", Object.assign({ class: className }, { children: item.name }), void 0), e$2("div", Object.assign({ class: className }, { children: base === null || base === void 0 ? void 0 : base.name }), void 0), e$2("div", { children: ["Item Level: ", item.level] }, void 0), reqline, "def" in base && (e$2("div", { children: ["Defense:", " ", e$2("span", Object.assign({ class: item.enhancedDefense ? "magic" : "" }, { children: [item.defense, e$2(Range, { range: item.defenseRange }, void 0)] }), void 0)] }, void 0)), item.durability && (e$2("div", { children: ["Durability: ", (_e = item.durability) === null || _e === void 0 ? void 0 : _e[0], " of", " ", item.durability[1] + ((_f = item.extraDurability) !== null && _f !== void 0 ? _f : 0)] }, void 0)), magicMods, setItemMods, setGlobalMods] }), void 0)] }), void 0));
}

function locationString(item) {
    if (!item.owner) {
        return "Unknown location";
    }
    const name = ownerName(item.owner);
    switch (item.location) {
        case 0 /* STORED */:
            switch (item.stored) {
                case 5 /* STASH */:
                    // This is the case where the item is in a non-PlugY stash
                    if (!isPlugyStash(item.owner)) {
                        return `In ${name}'s stash`;
                    }
                    return name;
                case 1 /* INVENTORY */:
                    return `In ${name}'s inventory`;
                case 4 /* CUBE */:
                    return `In ${name}'s cube`;
                default:
                    return "Unknown location";
            }
        case 2 /* BELT */:
            return `In ${name}'s belt`;
        case 1 /* EQUIPPED */:
            if (item.mercenary) {
                return `Worn by ${name}'s mercenary`;
            }
            else if (item.corpse) {
                return `On ${name}'s corpse`;
            }
            else {
                return `Worn by ${name}`;
            }
        default:
            return "Unknown location";
    }
}
function ItemLocationDesc({ item }) {
    let positionedItem = item;
    let socket = "";
    if (item.location === 6 /* SOCKET */) {
        positionedItem = item.socketedIn;
        socket = `, socketed in ${positionedItem.name}`;
    }
    const location = locationString(positionedItem);
    const page = typeof item.page !== "undefined" ? `, page ${item.page + 1}` : "";
    return (e$2(d$2, { children: [location, page, socket] }, void 0));
}

function Item({ item, duplicates, selectable, withLocation, }) {
    const { selectedItems, toggleItem, selectAll, unselectAll } = F(SelectionContext);
    const handleSelect = A$1(() => {
        if (!duplicates) {
            toggleItem(item);
        }
        else {
            if (selectedItems.has(item)) {
                unselectAll(duplicates);
            }
            else {
                selectAll(duplicates);
            }
        }
    }, [duplicates, item, selectAll, selectedItems, toggleItem, unselectAll]);
    return (e$2("tr", Object.assign({ class: "item" }, { children: [selectable && (e$2("td", { children: e$2("input", { type: "checkbox", checked: selectedItems.has(item), onChange: handleSelect, "aria-label": item.name }, void 0) }, void 0)), e$2("th", Object.assign({ scope: "row", "aria-label": item.name }, { children: e$2(ItemTooltip, { item: item }, void 0) }), void 0), e$2("td", { children: e$2(AdditionalInfo, { item: item, quantity: duplicates === null || duplicates === void 0 ? void 0 : duplicates.length }, void 0) }, void 0), withLocation && (e$2("td", { children: e$2(ItemLocationDesc, { item: item }, void 0) }, void 0))] }), void 0));
}

var css_248z$9 = ".page-title{border-bottom:1px solid #666;display:flex;flex-flow:row;justify-content:space-between}.page{table-layout:fixed;width:100%}";
styleInject(css_248z$9);

const DEFAULT_PERSONAL_NAME = "Personal Page #";
const DEFAULT_SHARED_NAME = "Shared Page #";
function pageName(page) {
    if ("name" in page) {
        return (page.name ||
            (typeof page.flags !== "undefined" && page.flags % 2
                ? DEFAULT_SHARED_NAME
                : DEFAULT_PERSONAL_NAME));
    }
    else {
        return DEFAULT_SHARED_NAME;
    }
}

/**
 * Groups simple items together with a quantity, leaves others alone
 */
function groupItems(items) {
    const grouped = new Map();
    let uid = 0;
    for (const item of items) {
        if (isSimpleItem(item)) {
            const existing = grouped.get(item.code);
            if (!existing) {
                grouped.set(item.code, [item]);
            }
            else if (
            // Prioritize items in stash to display the location
            (existing[0].location !== 0 /* STORED */ &&
                item.location === 0 /* STORED */) ||
                (existing[0].stored !== 5 /* STASH */ &&
                    item.stored === 5 /* STASH */)) {
                existing.unshift(item);
            }
            else {
                existing.push(item);
            }
        }
        else {
            grouped.set(`${uid++}`, [item]);
        }
    }
    return Array.from(grouped.values());
}

function Page({ page, index }) {
    var _a, _b;
    const indexText = ((_a = page.flags) !== null && _a !== void 0 ? _a : 0) >= 4 /* MAIN_INDEX */
        ? "Main index"
        : ((_b = page.flags) !== null && _b !== void 0 ? _b : 0) >= 2 /* INDEX */
            ? "Index"
            : "";
    const grouped = d$1(() => groupItems(page.items), [page.items]);
    return (e$2("section", { children: [e$2("h3", Object.assign({ class: "page-title" }, { children: [e$2("span", { children: pageName(page).replace("#", `${index + 1}`) }, void 0), e$2("span", { children: indexText }, void 0)] }), void 0), e$2("table", Object.assign({ class: "page" }, { children: Array.from(grouped.values()).map((items, index) => {
                    var _a;
                    return (e$2(Item, { item: items[0], duplicates: items, selectable: true, withLocation: false }, (_a = items[0].id) !== null && _a !== void 0 ? _a : index));
                }) }), void 0)] }, void 0));
}

function Search({ value, onChange, children, }) {
    return (e$2("div", { children: [e$2("p", { children: e$2("label", Object.assign({ for: "search-input" }, { children: children }), void 0) }, void 0), e$2("p", { children: e$2("input", { id: "search-input", type: "search", value: value, onInput: ({ currentTarget }) => onChange(currentTarget.value) }, void 0) }, void 0)] }, void 0));
}
function searchItems(items, search, ignore) {
    if (!search) {
        return items;
    }
    const lcFilters = search
        .toLocaleLowerCase()
        .split(/"([^"]*)"|\s+/)
        .filter(Boolean);
    return items.filter((item) => {
        const base = getBase(item);
        return lcFilters.every((filter) => {
            var _a;
            return (ignore === null || ignore === void 0 ? void 0 : ignore.toLocaleLowerCase().includes(filter)) ||
                ((_a = item.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(filter)) ||
                base.name.toLocaleLowerCase().includes(filter) ||
                item.search.includes(filter);
        });
    });
}

var css_248z$8 = ".controls{align-items:center;border-bottom:1px solid #666;display:flex;flex-flow:row nowrap;padding:1em 0}.controls>:not(:last-child){border-right:1px solid #666;padding-right:2em}.controls>:not(:first-child){padding-left:2em}.controls p:first-child{margin-top:0}.controls p:last-child{margin-bottom:0}.controls input,.controls select{width:100%}";
styleInject(css_248z$8);

function QualityFilter({ value, onChange }) {
    return (e$2("div", { children: [e$2("p", { children: e$2("label", Object.assign({ for: "quality-select" }, { children: "Filter by quality:" }), void 0) }, void 0), e$2("p", { children: e$2("select", Object.assign({ id: "quality-select", value: value, onChange: ({ currentTarget }) => onChange(currentTarget.value) }, { children: [e$2("option", Object.assign({ value: "all" }, { children: "All" }), void 0), e$2("option", Object.assign({ value: "normal" }, { children: "Non-magical" }), void 0), e$2("option", Object.assign({ value: "superior" }, { children: "Superior" }), void 0), e$2("option", Object.assign({ value: "magic" }, { children: "Magic" }), void 0), e$2("option", Object.assign({ value: "rare" }, { children: "Rare" }), void 0), e$2("option", Object.assign({ value: "unique" }, { children: "Unique" }), void 0), e$2("option", Object.assign({ value: "set" }, { children: "Set" }), void 0), e$2("option", Object.assign({ value: "runeword" }, { children: "Rune word" }), void 0), e$2("option", Object.assign({ value: "crafted" }, { children: "Crafted" }), void 0), e$2("option", Object.assign({ value: "misc" }, { children: "Non-equipment" }), void 0)] }), void 0) }, void 0)] }, void 0));
}
function filterItemsByQuality(items, quality) {
    if (quality === "all") {
        return items;
    }
    return items.filter((item) => {
        var _a;
        switch (quality) {
            case "normal":
                return ((_a = item.quality) !== null && _a !== void 0 ? _a : 10) <= 3 /* SUPERIOR */ && !item.runeword;
            case "superior":
                return item.quality === 3 /* SUPERIOR */ && !item.runeword;
            case "magic":
                return item.quality === 4 /* MAGIC */;
            case "rare":
                return item.quality === 6 /* RARE */;
            case "unique":
                return item.quality === 7 /* UNIQUE */;
            case "set":
                return item.quality === 5 /* SET */;
            case "runeword":
                return item.runeword;
            case "crafted":
                return item.quality === 8 /* CRAFTED */;
            case "misc":
                return item.simple;
        }
    });
}

const PAGE_NAMES$1 = [
    "Equipped",
    "Corpse",
    "Mercenary",
    "Inventory",
    "Cube",
    "Belt",
    "Stash",
    "Unknown",
];
function findPage(item) {
    switch (item.location) {
        case 0 /* STORED */:
            switch (item.stored) {
                case 5 /* STASH */:
                    return "Stash";
                case 1 /* INVENTORY */:
                    return "Inventory";
                case 4 /* CUBE */:
                    return "Cube";
                case 0 /* NONE */:
                    return "Unknown";
            }
            throw new Error(`Unknown storage type ${item.stored}`);
        case 2 /* BELT */:
            return "Belt";
        case 1 /* EQUIPPED */:
            if (item.mercenary) {
                return "Mercenary";
            }
            else if (item.corpse) {
                return "Corpse";
            }
            else {
                return "Equipped";
            }
        case 6 /* SOCKET */:
        case 4 /* CURSOR */:
            return "Unknown";
    }
}
function characterPages(character, ignoreStash) {
    const pages = new Map();
    function addItem(page, item) {
        let existing = pages.get(page);
        if (!existing) {
            existing = { name: page, items: [] };
            pages.set(page, existing);
        }
        existing.items.push(item);
    }
    for (const item of character.items) {
        addItem(findPage(item), item);
    }
    return PAGE_NAMES$1.map((name) => pages.get(name)).filter((page) => !!page && (!ignoreStash || page.name !== "Stash"));
}

function SelectAll({ items }) {
    const { selectedItems, selectAll, unselectAll } = F(SelectionContext);
    const allSelected = d$1(() => items.every((item) => selectedItems.has(item)), [items, selectedItems]);
    return (e$2("div", { children: e$2("button", Object.assign({ class: "button", onClick: () => (allSelected ? unselectAll(items) : selectAll(items)) }, { children: [allSelected ? "Unselect" : "Select", " all ", items.length, " item", items.length > 1 ? "s" : ""] }), void 0) }, void 0));
}

const PAGE_SIZE = 10;
function StashView() {
    const { owners, lastActivePlugyStashPage } = F(CollectionContext);
    const [ownerIndex, setOwnerIndex] = l$1(() => Math.max(0, owners.findIndex((owner) => isPlugyStash(owner) && !owner.personal)));
    const [search, setSearch] = l$1("");
    const [quality, setQuality] = l$1("all");
    const [currentPage, setCurrentPage] = l$1(0);
    const owner = owners[ownerIndex];
    const rawPages = d$1(() => {
        if (!owner) {
            return [];
        }
        if (isStash(owner)) {
            return owner.pages;
        }
        else {
            return characterPages(owner, !!(lastActivePlugyStashPage === null || lastActivePlugyStashPage === void 0 ? void 0 : lastActivePlugyStashPage.get(owner)));
        }
    }, [owner, lastActivePlugyStashPage]);
    const filteredPages = d$1(() => {
        var _a;
        return ((_a = rawPages
            .map((page, index) => ({
            ...page,
            name: pageName(page).replace("#", `${index + 1}`),
            items: filterItemsByQuality(searchItems(page.items, search, "name" in page ? page.name : ""), quality),
        }))
            .filter(({ items }) => items.length > 0)) !== null && _a !== void 0 ? _a : []);
    }, [rawPages, search, quality]);
    const filteredItems = d$1(() => filteredPages.flatMap(({ items }) => items), [filteredPages]);
    // Reset to the first page when the owner changes
    y$1(() => {
        setCurrentPage(0);
    }, [owner]);
    const pagination = (e$2(Pagination, { nbEntries: filteredPages.length, pageSize: PAGE_SIZE, currentEntry: currentPage, onChange: setCurrentPage, text: (first, last) => `Pages ${first} - ${last} out of ${filteredPages.length}` }, void 0));
    return (e$2(d$2, { children: [e$2("div", Object.assign({ class: "controls" }, { children: [e$2("div", { children: [e$2("p", { children: e$2("label", Object.assign({ for: "character-select" }, { children: "Select a character:" }), void 0) }, void 0), e$2("p", { children: e$2("select", Object.assign({ id: "character-select", value: ownerIndex, onChange: ({ currentTarget }) => setOwnerIndex(Number(currentTarget.value)) }, { children: owners.map((owner, i) => (e$2("option", Object.assign({ value: i }, { children: ownerName(owner) }), void 0))) }), void 0) }, void 0)] }, void 0), e$2(Search, Object.assign({ value: search, onChange: setSearch }, { children: "Search for an item or a page:" }), void 0), e$2(QualityFilter, { value: quality, onChange: setQuality }, void 0), e$2(SelectAll, { items: filteredItems }, void 0)] }), void 0), pagination, e$2("div", { children: filteredPages
                    .slice(currentPage, currentPage + PAGE_SIZE)
                    .map((page, index) => (e$2(Page, { page: page, index: index + currentPage }, index))) }, void 0), pagination] }, void 0));
}

var css_248z$7 = "#navigation{align-items:flex-end;border-bottom:1px solid #666;display:flex;flex-flow:row nowrap}a.nav-link{color:#aaa;margin:0 1em;padding-bottom:.4em;text-decoration:none}a.nav-link.active{border-bottom:1px solid #fff;color:#fff;margin-bottom:-1px}";
styleInject(css_248z$7);

// Deletes a range of pages and returns all the items they contained
function deletePages(stash, from, to = stash.pages.length) {
    const removed = stash.pages.splice(from, to - from);
    const allItems = [];
    for (const { items } of removed) {
        allItems.push(...items);
    }
    return allItems;
}

const SECTIONS_ORDER = [
    "unknown",
    "rejuvs",
    "respecs",
    "ubers",
    "gems",
    "runes",
    "runewords",
    "uniques",
    "sets",
];

function findSection(item) {
    var _a;
    const base = getBase(item);
    if (base.type === "rpot") {
        return "rejuvs";
    }
    if (RESPECS.includes(item.code)) {
        return "respecs";
    }
    if (UBERS.includes(item.code)) {
        return "ubers";
    }
    if (base.type.startsWith("gem")) {
        return "gems";
    }
    if (base.type === "rune") {
        return "runes";
    }
    // White armors and weapons are either runewords or bases
    if (((_a = item.quality) !== null && _a !== void 0 ? _a : 10) <= 3 /* SUPERIOR */ &&
        (item.code in ARMORS || item.code in WEAPONS)) {
        return "runewords";
    }
    if (item.quality === 5 /* SET */) {
        return "sets";
    }
    if (EQUIPMENT_TYPES.includes(base.type)) {
        return "uniques";
    }
    return "unknown";
}
function groupBySection(items) {
    const bySection = new Map(SECTIONS_ORDER.map((s) => [s, []]));
    for (const item of items) {
        bySection.get(findSection(item)).push(item);
    }
    return bySection;
}

function organizeUnknown(stash, items) {
    if (items.length === 0)
        return;
    const offset = stash.pages.length;
    const { nbPages, positions } = layout("lines", [items]);
    for (let i = 0; i < nbPages; i++) {
        const page = addPage(stash, "Unrecognized");
        if (i === 0) {
            makeIndex(page, true);
        }
    }
    for (const [item, { page, rows, cols }] of positions.entries()) {
        moveItem(stash, item, offset + page, rows[0], cols[0]);
    }
}

function rejuvOrder(a, b) {
    // Large rejuvs first
    return a.code.localeCompare(b.code);
}
// I'd rather copy-paste a bit and have the flexibility to evolve each section separately
function organizeRejuvs(stash, items) {
    if (items.length === 0)
        return;
    items.sort(rejuvOrder);
    const offset = stash.pages.length;
    const { nbPages, positions } = layout("lines", [items]);
    for (let i = 0; i < nbPages; i++) {
        const page = addPage(stash, "Rejuvs");
        if (i === 0) {
            makeIndex(page, true);
        }
    }
    for (const [item, { page, rows, cols }] of positions.entries()) {
        moveItem(stash, item, offset + page, rows[0], cols[0]);
    }
}

const ORDER = ["gsy", "gsv", "gsb", "gsr", "gsg", "gsw", "sku"];
const GEM_TYPES = ORDER.map((code) => MISC[code].type);
const PAGE_NAMES = ORDER.map((code) => MISC[code].name);
// Chipped first, this order has been crafted to work for all gem types
const QUALITIES = ["c", "f", "u", "s", "l", "z", "p"];
function qualityChar(skulls = false) {
    return (item) => QUALITIES.indexOf(item.code.charAt(skulls ? 2 : 1));
}
function organizeGems(stash, items) {
    if (items.length === 0)
        return;
    const byType = ORDER.map(() => []);
    for (const item of items) {
        byType[GEM_TYPES.indexOf(MISC[item.code].type)].push(item);
    }
    const byTypeAndQuality = byType.map((gems, index) => sortAndGroupBy(gems, qualityChar(index === 6)));
    let offset = stash.pages.length;
    for (let i = 0; i < byType.length; i++) {
        const { nbPages, positions } = layout("lines", byTypeAndQuality[i]);
        for (let j = 0; j < nbPages; j++) {
            const page = addPage(stash, PAGE_NAMES[i]);
            if (j === 0) {
                makeIndex(page, i === 0);
            }
        }
        for (const [item, { page, rows, cols }] of positions.entries()) {
            moveItem(stash, item, offset + page, rows[0], cols[0]);
        }
        offset += nbPages;
    }
}

function organizeRunes(stash, items) {
    const offset = stash.pages.length;
    const { nbPages, positions } = layout("runes", [items]);
    for (let i = 0; i < nbPages; i++) {
        const page = addPage(stash, "Runes");
        if (i === 0) {
            makeIndex(page, true);
        }
    }
    for (const [item, { page, rows, cols }] of positions.entries()) {
        moveItem(stash, item, offset + page, rows[0], cols[0]);
    }
}

function runewordsOrder(a, b) {
    return RUNEWORDS[a.runewordId].levelReq - RUNEWORDS[b.runewordId].levelReq;
}
function basesOrder(a, b) {
    var _a, _b, _c, _d;
    const baseA = getBase(a);
    const baseB = getBase(b);
    return (
    // Same object order as uniques
    EQUIPMENT_TYPES.indexOf(baseA.type) - EQUIPMENT_TYPES.indexOf(baseB.type) ||
        // Highest tier first
        baseB.qlevel - baseA.qlevel ||
        // Most sockets first
        ((_a = b.sockets) !== null && _a !== void 0 ? _a : 0) - ((_b = a.sockets) !== null && _b !== void 0 ? _b : 0) ||
        // Superior first
        ((_c = b.quality) !== null && _c !== void 0 ? _c : 0) - ((_d = a.quality) !== null && _d !== void 0 ? _d : 0));
}
function organizeRunewords(stash, both) {
    if (both.length === 0)
        return;
    const runewords = [];
    const bases = [];
    for (const item of both) {
        if (item.runeword) {
            runewords.push(item);
        }
        else {
            bases.push(item);
        }
    }
    runewords.sort(runewordsOrder);
    bases.sort(basesOrder);
    let offset = stash.pages.length;
    [["Runewords", runewords], ["Bases", bases]].forEach(([name, items], i) => {
        const { nbPages, positions } = layout("lines", [items]);
        for (let j = 0; j < nbPages; j++) {
            const page = addPage(stash, name);
            if (j === 0) {
                makeIndex(page, i === 0);
            }
        }
        for (const [item, { page, rows, cols }] of positions.entries()) {
            moveItem(stash, item, offset + page, rows[0], cols[0]);
        }
        offset += nbPages;
    });
}

function fillTemplate(stash, items, { positions }, pageOffset) {
    var _a;
    const done = new Map();
    // Items we could not position
    const remaining = [];
    for (const item of items) {
        const unique = getGrailItem(item);
        if (!unique) {
            remaining.push(item);
            continue;
        }
        const nbDone = (_a = done.get(unique)) !== null && _a !== void 0 ? _a : 0;
        const position = positions.get(unique);
        if (!position) {
            throw new Error(`Unknown position for grail item ${unique.name}`);
        }
        const { page, rows, cols } = position;
        if (nbDone >= rows.length * cols.length) {
            // No more space for this one, it goes in the extras
            remaining.push(item);
            continue;
        }
        moveItem(stash, item, page + pageOffset, rows[nbDone % rows.length], cols[Math.floor(nbDone / rows.length)]);
        done.set(unique, nbDone + 1);
    }
    return remaining;
}

function createTemplates$1() {
    const allItems = groupBySet(SET_ITEMS);
    const templates = new Map();
    for (const [set, items] of allItems) {
        templates.set(set, layout("set", [items]));
    }
    return templates;
}
function extrasOrder$1(a, b) {
    return (EQUIPMENT_TYPES.indexOf(getBase(a).type) -
        EQUIPMENT_TYPES.indexOf(getBase(b).type));
}
function organizeSets(stash, items) {
    const bySet = groupBySet(items);
    const templates = createTemplates$1();
    let offset = stash.pages.length;
    for (const category of SETS_ORDER) {
        category.forEach(({ name, shortName, set }, i) => {
            // Create the main page for the set
            const mainPage = addPage(stash, name);
            makeIndex(mainPage, i === 0);
            // Make one instance of the set pretty
            const remaining = fillTemplate(stash, bySet.get(SETS[set]), templates.get(SETS[set]), offset);
            offset++;
            // Dump extras in subsequent pages
            if (remaining.length > 0) {
                remaining.sort(extrasOrder$1);
                const { nbPages, positions } = layout("lines", [remaining]);
                for (let j = 0; j < nbPages; j++) {
                    addPage(stash, `Extra ${shortName}`);
                }
                for (const [item, { page, rows, cols }] of positions.entries()) {
                    moveItem(stash, item, offset + page, rows[0], cols[0]);
                }
                offset += nbPages;
            }
        });
    }
}

function createTemplates(eth) {
    var _a;
    const uniques = listGrailUniques(eth);
    const templates = new Map();
    for (const [section, items] of uniques) {
        templates.set(section, layout((_a = section.layout) !== null && _a !== void 0 ? _a : "tier-lines", items));
    }
    return templates;
}
function extrasOrder(a, b) {
    var _a, _b;
    // Contains rares, crafted and magic items too
    // TODO: this doesn't look great for charms
    const baseA = getBase(a);
    const baseB = getBase(b);
    return (
    // Uniques first
    ((_a = b.quality) !== null && _a !== void 0 ? _a : 0) - ((_b = a.quality) !== null && _b !== void 0 ? _b : 0) ||
        // Highest tier first
        baseB.qlevel - baseA.qlevel ||
        // Highest qlevel uniques first
        (b.unique ? UNIQUE_ITEMS[b.unique].qlevel : 0) -
            (a.unique ? UNIQUE_ITEMS[a.unique].qlevel : 0));
}
function organizeUniques(stash, items) {
    const bySection = groupUniquesBySection(items, false);
    const normalTemplates = createTemplates(false);
    const ethTemplates = createTemplates(true);
    let offset = stash.pages.length;
    for (const category of UNIQUES_ORDER) {
        category.forEach((section, i) => {
            var _a, _b, _c;
            const { name, shortName } = section;
            // Always create the pages for the section, even if we have no items
            const normalTemplate = normalTemplates.get(section);
            const ethTemplate = ethTemplates.get(section);
            if (!normalTemplate) {
                throw new Error(`No template for ${name}`);
            }
            for (let j = 0; j < normalTemplate.nbPages; j++) {
                const page = addPage(stash, name);
                if (j === 0) {
                    makeIndex(page, i === 0);
                }
            }
            for (let j = 0; j < ((_a = ethTemplate === null || ethTemplate === void 0 ? void 0 : ethTemplate.nbPages) !== null && _a !== void 0 ? _a : 0); j++) {
                addPage(stash, `Eth ${shortName}`);
            }
            const itemsInSection = (_b = bySection.get(section)) === null || _b === void 0 ? void 0 : _b[0];
            if (!itemsInSection) {
                offset += normalTemplate.nbPages + ((_c = ethTemplate === null || ethTemplate === void 0 ? void 0 : ethTemplate.nbPages) !== null && _c !== void 0 ? _c : 0);
                return;
            }
            // Handle non-eth first so that eth versions don't take non-eth spots unless necessary
            itemsInSection === null || itemsInSection === void 0 ? void 0 : itemsInSection.sort((a, b) => Number(a.ethereal) - Number(b.ethereal));
            // Position one instance of each item in its normal spot
            let remaining = fillTemplate(stash, itemsInSection, normalTemplate, offset);
            offset += normalTemplate.nbPages;
            // Position one instance of each remaining eth item in its eth spot
            if (ethTemplate) {
                const remainingAfterEth = remaining.filter((item) => !item.ethereal || !canBeEthereal(item));
                remainingAfterEth.push(...fillTemplate(stash, 
                // The extra canBeEthereal is to ignore always-eth uniques
                remaining.filter((item) => item.ethereal && canBeEthereal(item)), ethTemplate, offset));
                remaining = remainingAfterEth;
                offset += ethTemplate.nbPages;
            }
            // Dump extras in subsequent pages
            if (remaining.length > 0) {
                remaining.sort(extrasOrder);
                const byQuality = remaining.reduce((groups, item) => {
                    var _a, _b;
                    let lastGroup = groups.length - 1;
                    if (((_b = (_a = groups[lastGroup]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.quality) !== item.quality) {
                        lastGroup = groups.push([]) - 1;
                    }
                    groups[lastGroup].push(item);
                    return groups;
                }, []);
                const { nbPages, positions } = layout("lines", byQuality);
                for (let j = 0; j < nbPages; j++) {
                    addPage(stash, `Extra ${shortName}`);
                }
                for (const [item, { page, rows, cols }] of positions.entries()) {
                    moveItem(stash, item, offset + page, rows[0], cols[0]);
                }
                offset += nbPages;
            }
        });
    }
}

/**
 * Counts every item, even socketed ones.
 */
function countEveryItem(items) {
    let total = items.length;
    for (const item of items) {
        if (item.filledSockets) {
            total += item.filledSockets.length;
        }
    }
    return total;
}
function organize(stash, additionalItems = [], offset = 0, emptyPages = 0) {
    const expectedTotal = countEveryItem(getAllItems(stash)) + countEveryItem(additionalItems);
    const toOrganize = deletePages(stash, offset);
    toOrganize.push(...additionalItems);
    for (let i = 0; i < emptyPages; i++) {
        addPage(stash, "Misc");
    }
    const bySection = groupBySection(toOrganize);
    for (const sectionId of SECTIONS_ORDER) {
        const items = bySection.get(sectionId);
        if (!items)
            continue;
        switch (sectionId) {
            case "unknown":
                organizeUnknown(stash, items);
                break;
            case "rejuvs":
                organizeRejuvs(stash, items);
                break;
            case "respecs":
                organizeRespecs(stash, items);
                break;
            case "ubers":
                organizeUbers(stash, items);
                break;
            case "gems":
                organizeGems(stash, items);
                break;
            case "runes":
                organizeRunes(stash, items);
                break;
            case "runewords":
                organizeRunewords(stash, items);
                break;
            case "sets":
                organizeSets(stash, items);
                break;
            case "uniques":
                organizeUniques(stash, items);
                break;
            default:
                throw new Error(`Unknown section sectionId`);
        }
    }
    if (countEveryItem(getAllItems(stash)) !== expectedTotal) {
        throw new Error("Lost items in the process, cancelling");
    }
}

var css_248z$6 = "#organizer li{margin-bottom:1em}#sources-selector{list-style:none;padding:0}#sources-selector li{margin-bottom:.4em}#organizer .button.danger{margin-left:1em}";
styleInject(css_248z$6);

"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,n,i){const o=Number(0xffffffffn&n),f=Number(n>>32n);this.setUint32(e+(i?0:4),o,i),this.setUint32(e+(i?4:0),f,i);}});var e=e=>new DataView(new ArrayBuffer(e)),n=e=>new Uint8Array(e.buffer||e),i=e=>Math.min(4294967295,Number(e)),o=e=>Math.min(65535,Number(e));function f(e,i,o){if(void 0===i||i instanceof Uint8Array||(i=s(i)),void 0===o||o instanceof Date||(o=new Date(o)),e instanceof File)return {i:i||s(e.name),o:o||new Date(e.lastModified),A:e.stream()};if(e instanceof Response){const n=e.headers.get("content-disposition"),f=n&&n.match(/;\s*filename\*?=["']?(.*?)["']?$/i),a=f&&f[1]||new URL(e.url).pathname.split("/").pop(),r=a&&decodeURIComponent(a);return {i:i||s(r),o:o||new Date(e.headers.get("Last-Modified")||Date.now()),A:e.body}}if(!i||0===i.length)throw new Error("The file must have a name.");if(void 0===o)o=new Date;else if(isNaN(o))throw new Error("Invalid modification date.");if("string"==typeof e)return {i,o,A:s(e)};if(e instanceof Blob)return {i,o,A:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return {i,o,A:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return {i,o,A:n(e)};if(Symbol.asyncIterator in e)return {i,o,A:a(e)};throw new TypeError("Unsupported input format.")}function a(e){const n="next"in e?e:e[Symbol.asyncIterator]();return new ReadableStream({async pull(e){let i=0;for(;e.desiredSize>i;){const o=await n.next();if(!o.value){e.close();break}{const n=r(o.value);e.enqueue(n),i+=n.byteLength;}}}})}function r(e){return "string"==typeof e?s(e):e instanceof Uint8Array?e:n(e)}function s(e){return (new TextEncoder).encode(String(e))}var A=new WebAssembly.Instance(new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBw0DAW0CAAF0AAABYwABCpUBAkkBA38DQCABIQBBACECA0AgAEEBdiAAQQFxQaCG4u1+bHMhACACQQFqIgJBCEcNAAsgAUECdCAANgIAIAFBAWoiAUGAAkcNAAsLSQEBfyABQX9zIQFBgIAEIQJBgIAEIABqIQADQCABQf8BcSACLQAAc0ECdCgCACABQQh2cyEBIAJBAWoiAiAASQ0ACyABQX9zuAs"),(e=>e.charCodeAt(0))))),{t,c,m}=A.exports;t();var d=n(m).subarray(65536);function u(e,n=0){for(const i of function*(e){for(;e.length>65536;)yield e.subarray(0,65536),e=e.subarray(65536);e.length&&(yield e);}(e))d.set(i),n=c(i.length,n);return n}function y(e,n,i=0){const o=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,f=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;n.setUint16(i,o,1),n.setUint16(i+2,f,1);}function l(i){const o=e(30);return o.setUint32(0,1347093252),o.setUint32(4,754976768),y(i.o,o,10),o.setUint16(26,i.i.length,1),n(o)}async function*B(e){let{A:n}=e;if("then"in n&&(n=await n),n instanceof Uint8Array)yield n,e.u=u(n,0),e.l=BigInt(n.length);else {e.l=0n;const i=n.getReader();for(;;){const{value:n,done:o}=await i.read();if(o)break;e.u=u(n,e.u),e.l+=BigInt(n.length),yield n;}}}function w(o,f){const a=e(16+(f?8:0));return a.setUint32(0,1347094280),a.setUint32(4,o.u,1),f?(a.setBigUint64(8,o.l,1),a.setBigUint64(16,o.l,1)):(a.setUint32(8,i(o.l),1),a.setUint32(12,i(o.l),1)),n(a)}function b(o,f,a){const r=e(46);return r.setUint32(0,1347092738),r.setUint32(4,755182848),r.setUint16(8,2048),y(o.o,r,12),r.setUint32(16,o.u,1),r.setUint32(20,i(o.l),1),r.setUint32(24,i(o.l),1),r.setUint16(28,o.i.length,1),r.setUint16(30,a?28:0,1),r.setUint16(40,33204,1),r.setUint32(42,i(f),1),n(r)}function C(i,o){const f=e(28);return f.setUint16(0,1,1),f.setUint16(2,24,1),f.setBigUint64(4,i.l,1),f.setBigUint64(12,i.l,1),f.setBigUint64(20,o,1),n(f)}var downloadZip=r=>new Response(a(async function*(f){const a=[];let r=0n,s=0n,A=0;for await(const e of f){yield l(e),yield e.i,yield*B(e);const n=e.l>=0xffffffffn||r>=0xffffffffn;yield w(e,n),a.push(b(e,r,n)),a.push(e.i),n&&(a.push(C(e,r)),r+=8n),s++,r+=BigInt(46+e.i.length)+e.l,A||(A=n);}let d=0n;for(const e of a)yield e,d+=BigInt(e.length);if(A||r>=0xffffffffn){const i=e(76);i.setUint32(0,1347094022),i.setBigUint64(4,BigInt(44),1),i.setUint32(12,755182848),i.setBigUint64(24,s,1),i.setBigUint64(32,s,1),i.setBigUint64(40,d,1),i.setBigUint64(48,r,1),i.setUint32(56,1347094023),i.setBigUint64(64,r+d,1),i.setUint32(72,1,1),yield n(i);}const u=e(22);u.setUint32(0,1347093766),u.setUint16(8,o(s),1),u.setUint16(10,o(s),1),u.setUint32(12,i(d),1),u.setUint32(16,i(r),1),yield n(u);}(async function*(e){for await(const n of e)n instanceof File||n instanceof Response?yield f(n):yield f(n.input,n.name,n.lastModified);}(r))),{headers:{"Content-Type":"application/zip","Content-Disposition":"attachment"}});

function downloadFile(file, fileName) {
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(file);
    elem.download = fileName;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
    window.URL.revokeObjectURL(elem.href);
}
async function downloadAllFiles(files) {
    const blob = await downloadZip(files).blob();
    downloadFile(blob, "D2Save.zip");
}

function useUpdateCollection() {
    const { owners, setCollection, setSingleFile } = F(CollectionContext);
    const updateAllFiles = A$1(async function (newOwner) {
        const allOwners = [...owners];
        // Avoid duplicates if the owner already exists
        if (newOwner && !allOwners.includes(newOwner)) {
            allOwners.push(newOwner);
        }
        const saveFiles = allOwners.map((owner) => toSaveFile(owner));
        await writeAllFiles(saveFiles);
        await downloadAllFiles(saveFiles);
        setCollection(allOwners);
    }, [owners, setCollection]);
    const updateSingleFile = A$1(async function (owner) {
        const saveFile = toSaveFile(owner);
        await writeSaveFile(saveFile);
        downloadFile(saveFile, saveFile.name);
        // Set the state to force a re-render of the app.
        setSingleFile(owner);
    }, [setSingleFile]);
    const rollback = A$1(() => {
        return getSavedStashes().then(setCollection);
    }, [setCollection]);
    return { updateAllFiles, updateSingleFile, rollback };
}

function Organizer() {
    const { lastActivePlugyStashPage, hasPlugY } = F(CollectionContext);
    const { updateSingleFile, rollback } = useUpdateCollection();
    const [stash, setStash] = l$1();
    const [skipPages, setSkipPages] = l$1(1);
    const [emptyPages, setEmptyPages] = l$1(0);
    A$1(async () => {
        if (stash && isPlugyStash(stash)) {
            try {
                organize(stash, [], skipPages, emptyPages);
                if (lastActivePlugyStashPage) {
                    updateCharacterStashes(lastActivePlugyStashPage);
                }
                await updateSingleFile(stash);
            }
            catch (e) {
                if (e instanceof Error) {
                    await rollback();
                    setStash(undefined);
                    alert(e.message);
                }
                else {
                    throw e;
                }
            }
        }
    }, [
        stash,
        skipPages,
        emptyPages,
        lastActivePlugyStashPage,
        updateSingleFile,
        rollback,
    ]);
    // if (!hasPlugY) {
    //   return (
    //     <p>
    //       This feature requires{" "}
    //       <ExternalLink href="http://plugy.free.fr/">
    //         PlugY's extended stash
    //       </ExternalLink>
    //       . It allows you to organize your collection across hundreds of pages in
    //       just one click, whether in the shared stash or in a character's personal
    //       stash.
    //     </p>
    //   );
    // }
    return (e$2(d$2, {}, void 0));
    // <>
    //     <p>Select a stash to organize:</p>
    //     <OwnerSelector selected={stash} onChange={setStash} onlyStashes={true} />
    //     <p>
    //       <label>
    //         Do not touch the first{" "}
    //         <input
    //           type="number"
    //           min={0}
    //           max={99}
    //           value={skipPages}
    //           onChange={numberInputChangeHandler(setSkipPages)}
    //         />{" "}
    //         page{skipPages === 1 ? "" : "s"}.
    //       </label>
    //     </p>
    //     <p>
    //       <label>
    //         Leave{" "}
    //         <input
    //           type="number"
    //           min={0}
    //           max={99}
    //           value={emptyPages}
    //           onChange={numberInputChangeHandler(setEmptyPages)}
    //         />{" "}
    //         empty page{emptyPages === 1 ? "" : "s"} at the start.
    //       </label>
    //     </p>
    //     <p>
    //       <button class="button" disabled={!stash} onClick={handleOrganize}>
    //         Organize my stash
    //       </button>
    //     </p>
    // </>
    // );
}

var css_248z$5 = "#collection{border-collapse:collapse;margin-top:2em;width:100%}#collection thead th{padding-bottom:.4em}#collection .item td:not(:first-child){padding:0 2em}#collection tbody .item th{padding-top:.3em}#collection tr{border-bottom:1px solid #222}#collection tbody tr:hover td:not(:first-child){color:#6fb76f}";
styleInject(css_248z$5);

function ItemsTable({ items, pageSize, selectable }) {
    const [firstItem, setFirstItem] = l$1(0);
    // We group simple items together with a quantity, leave others alone
    const groupedItems = d$1(() => groupItems(items), [items]);
    // Reset to the first page when the list of items changes
    y$1(() => {
        setFirstItem(0);
    }, [items]);
    return (e$2(d$2, { children: [e$2(Pagination, { nbEntries: groupedItems.length, pageSize: pageSize, currentEntry: firstItem, onChange: setFirstItem, text: (first, last) => (e$2(d$2, { children: ["Items ", first, " - ", last, " out of ", groupedItems.length, " ", e$2("span", Object.assign({ class: "sidenote" }, { children: ["(", items.length, " with duplicates)"] }), void 0)] }, void 0)) }, void 0), e$2("table", Object.assign({ id: "collection" }, { children: [e$2("thead", { children: e$2("tr", Object.assign({ class: "sidenote" }, { children: [e$2("th", { children: e$2("span", Object.assign({ class: "sr-only" }, { children: "Select" }), void 0) }, void 0), e$2("th", { children: "Item" }, void 0), e$2("th", { children: "Characteristics" }, void 0), e$2("th", { children: "Location" }, void 0)] }), void 0) }, void 0), e$2("tbody", { children: groupedItems
                            .slice(firstItem, firstItem + pageSize)
                            .map((items, index) => {
                            var _a;
                            return (e$2(Item, { item: items[0], duplicates: items, selectable: selectable, withLocation: true }, (_a = items[0].id) !== null && _a !== void 0 ? _a : index));
                        }) }, void 0)] }), void 0)] }, void 0));
}

function Collection() {
    const { allItems } = F(CollectionContext);
    const [search, setSearch] = l$1("");
    const [quality, setQuality] = l$1("all");
    const [pageSize, setPageSize] = l$1(20);
    const filteredItems = d$1(() => filterItemsByQuality(searchItems(allItems, search), quality), [allItems, search, quality]);
    return (e$2(d$2, { children: [e$2("div", Object.assign({ class: "controls" }, { children: [e$2(Search, Object.assign({ value: search, onChange: setSearch }, { children: "Search for an item:" }), void 0), e$2(QualityFilter, { value: quality, onChange: setQuality }, void 0), e$2("div", { children: [e$2("p", { children: e$2("label", Object.assign({ for: "page-size-select" }, { children: "Items per page:" }), void 0) }, void 0), e$2("p", { children: e$2("select", Object.assign({ id: "page-size-select", value: pageSize, onChange: ({ currentTarget }) => setPageSize(Number(currentTarget.value)) }, { children: [e$2("option", Object.assign({ value: 10 }, { children: "10" }), void 0), e$2("option", Object.assign({ value: 20 }, { children: "20" }), void 0), e$2("option", Object.assign({ value: 50 }, { children: "50" }), void 0), e$2("option", Object.assign({ value: 100 }, { children: "100" }), void 0)] }), void 0) }, void 0)] }, void 0), e$2(SelectAll, { items: filteredItems }, void 0)] }), void 0), e$2(ItemsTable, { items: filteredItems, selectable: true, pageSize: pageSize }, void 0)] }, void 0));
}

function FilePicker({ folder, children, }) {
    const { setCollection, setSingleFile } = F(CollectionContext);
    const input = s$1(null);
    const handleChange = A$1(async () => {
        var _a;
        if ((_a = input.current) === null || _a === void 0 ? void 0 : _a.files) {
            const usableFiles = [];
            for (const file of input.current.files) {
                // Only use the root files in case there is a backup folder
                if (file.webkitRelativePath.split("/").length > 2) {
                    continue;
                }
                if (file.name.endsWith(".sss") ||
                    file.name.endsWith(".d2x") ||
                    file.name.endsWith(".d2s") ||
                    file.name.endsWith(".d2i")) {
                    usableFiles.push(file);
                }
            }
            if (folder) {
                await writeAllFiles(usableFiles);
                setCollection(await Promise.all(usableFiles.map((file) => parseSaveFile(file))));
            }
            else {
                const file = usableFiles[0];
                await writeSaveFile(file);
                setSingleFile(await parseSaveFile(file));
            }
            // Clear the input so we can re-upload the same file later.
            input.current.value = "";
        }
    }, [folder, setCollection, setSingleFile]);
    const inputAttrs = folder
        ? { directory: true, webkitdirectory: true, multiple: true }
        : { accept: ".sss,.d2x,.d2s,.d2i" };
    return (e$2("span", Object.assign({ class: "filepicker" }, { children: [e$2("button", Object.assign({ class: folder ? "button" : "button danger", onClick: () => { var _a; return (_a = input.current) === null || _a === void 0 ? void 0 : _a.click(); } }, { children: children }), void 0), e$2("input", Object.assign({ class: "hidden", ref: input, type: "file" }, inputAttrs, { onChange: handleChange }), void 0)] }), void 0));
}

var css_248z$4 = "#save-files{border-collapse:collapse}#save-files td,#save-files th{border:1px solid #666;padding:.4em 1em}.filepicker:first-child{margin-right:1em}";
styleInject(css_248z$4);

const UPLOAD_CONFIRM = `\
Uploading a single stash at a time is not recommended, \
because you risk losing items that were moved between characters \
since the last upload or download.

Are you sure you want to proceed?`;

function PrettyOwnerName({ owner }) {
    if (isPlugyStash(owner)) {
        if (owner.personal) {
            return (e$2(d$2, { children: [e$2("span", Object.assign({ class: "unique" }, { children: owner.filename.slice(0, -4) }), void 0), "'s stash"] }, void 0));
        }
        else {
            return (e$2("span", Object.assign({ class: "magic" }, { children: owner.nonPlugY
                    ? NON_PLUGY_SHARED_STASH_NAME
                    : PLUGY_SHARED_STASH_NAME }), void 0));
        }
    }
    else if (isCharacter(owner)) {
        return e$2("span", Object.assign({ class: "unique" }, { children: owner.filename.slice(0, -4) }), void 0);
    }
    else {
        return e$2("span", Object.assign({ class: "magic" }, { children: D2R_SHARED_STASH_NAME }), void 0);
    }
}

const dateFormatter = Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
    timeStyle: "medium",
});
function SaveFiles() {
    const { owners } = F(CollectionContext);
    const [allowSingleFile, setAllowSingleFile] = l$1(false);
    const charactersDetail = d$1(() => {
        const details = [];
        for (const owner of owners) {
            details.push(e$2("tr", { children: [e$2("td", { children: e$2(PrettyOwnerName, { owner: owner }, void 0) }, void 0), e$2("td", { children: owner.version <= LAST_LEGACY
                            ? "Legacy Diablo 2"
                            : "Diablo 2 Resurrected" }, void 0), e$2("td", { children: dateFormatter.format(new Date(owner.lastModified)) }, void 0)] }, void 0));
        }
        return details;
    }, [owners]);
    return (e$2(d$2, { children: [e$2("p", Object.assign({ class: "sidenote" }, { children: "Simply select your Diablo 2 save folder, and this tool will detect all items on every character and in every stash." }), void 0), e$2("p", { children: [e$2(FilePicker, Object.assign({ folder: true }, { children: [owners.length === 0 ? "Upload" : "Refresh", " all my save files"] }), void 0), !allowSingleFile && (e$2("button", Object.assign({ class: "button sidenote", onClick: () => window.confirm(UPLOAD_CONFIRM) && setAllowSingleFile(true) }, { children: "Let me select a single file" }), void 0)), allowSingleFile && (e$2(FilePicker, Object.assign({ folder: false }, { children: [owners.length === 0 ? "Upload" : "Update", " a single file"] }), void 0))] }, void 0), e$2("table", Object.assign({ id: "save-files" }, { children: [e$2("tr", { children: [e$2("th", { children: "Character name" }, void 0), e$2("th", { children: "Game version" }, void 0), e$2("th", { children: "Save date" }, void 0)] }, void 0), charactersDetail] }), void 0)] }, void 0));
}

var css_248z$3 = "#transfer-items ul{list-style:none;margin:0;padding:0}#transfer-items .selectors{align-items:center;display:flex}.selectors .arrow{font-size:2em;margin:0 2em}#source-selector{flex:0 0 auto}#transfer-items .error{margin-left:2em}#transfer-items .success{color:#6fb76f;margin-left:2em}#transfer-items h4{border-top:1px solid #666;margin-top:3em;padding-top:.4em}#transfer-items .pagination{margin-top:0}";
styleInject(css_248z$3);

function numberInputChangeHandler(callback) {
    return function (event) {
        callback(Number(event.target.value));
    };
}

var css_248z$2 = ".owner-selector{list-style:none;padding:0}";
styleInject(css_248z$2);

function OwnerSelector({ selected, onChange, onlyStashes, }) {
    const { owners, hasPlugY } = F(CollectionContext);
    // Using state so it's stable
    const [newStash] = l$1(() => ({
        filename: "SharedStash.d2x",
        lastModified: Date.now(),
        version: LAST_LEGACY,
        personal: false,
        nonPlugY: true,
        gold: 0,
        pageFlags: true,
        pages: [],
    }));
    const sharedStashExists = d$1(() => owners.some((owner) => isPlugyStash(owner) && owner.nonPlugY), [owners]);
    let possible = owners;
    if (onlyStashes) {
        possible = owners.filter(isPlugyStash);
    }
    return (e$2("ul", Object.assign({ class: "owner-selector" }, { children: [possible.map((owner) => (e$2("li", { children: e$2("label", { children: [e$2("input", { type: "radio", name: "target", checked: selected === owner, onChange: () => onChange(owner) }, void 0), " ", e$2(PrettyOwnerName, { owner: owner }, void 0)] }, void 0) }, void 0))), !hasPlugY && !sharedStashExists && (e$2("li", { children: e$2("label", { children: [e$2("input", { type: "radio", name: "target", checked: selected === newStash, onChange: () => onChange(newStash) }, void 0), " ", "Create a new", " ", e$2("span", Object.assign({ class: "magic" }, { children: NON_PLUGY_SHARED_STASH_NAME }), void 0), " for me"] }, void 0) }, void 0))] }), void 0));
}

function outOfBounds(item, maxHeight, maxWidth) {
    const { height, width } = getBase(item);
    return item.row + height > maxHeight || item.column + width > maxWidth;
}

function findSpot(item, page, height, width) {
    let col = 0;
    let row = 0;
    // This makes transferring items quadratic and I just don't care.
    // If we hit performance issues, we can start making this more complicated.
    while (row < height && col < width) {
        const target = { ...item, row, column: col };
        if (!outOfBounds(target, height, width) &&
            !page.some((existing) => collision(target, existing))) {
            return [col, row];
        }
        row++;
        if (row >= height) {
            row = 0;
            col++;
        }
    }
}

const INVENTORY_HEIGHT = 4;
const INVENTORY_WIDTH = 10;
const CUBE_HEIGHT = 4;
const CUBE_WIDTH = 3;
// TODO: classic stash
const D2_STASH_HEIGHT = 8;
const D2_STASH_WIDTH = 6;
const D2R_STASH_HEIGHT = 10;
const D2R_STASH_WIDTH = 10;
function getDimensions(storageType, character) {
    switch (storageType) {
        case 1 /* INVENTORY */:
            return { height: INVENTORY_HEIGHT, width: INVENTORY_WIDTH };
        case 4 /* CUBE */:
            return { height: CUBE_HEIGHT, width: CUBE_WIDTH };
        case 5 /* STASH */:
            if (character.version <= LAST_LEGACY) {
                return { height: D2_STASH_HEIGHT, width: D2_STASH_WIDTH };
            }
            else {
                return { height: D2R_STASH_HEIGHT, width: D2R_STASH_WIDTH };
            }
        default:
            throw new Error(`No dimensions for storage type ${storageType}`);
    }
}

function takeItemFromCurrentOwner(item) {
    if (!item.owner) {
        return;
    }
    if (isStash(item.owner)) {
        for (const page of item.owner.pages) {
            const index = page.items.indexOf(item);
            if (index >= 0) {
                page.items.splice(index, 1);
                break;
            }
        }
    }
    else {
        const index = item.owner.items.indexOf(item);
        if (index >= 0) {
            item.owner.items.splice(index, 1);
        }
    }
}
function giveItemTo(item, owner, storageType) {
    if (item.owner.version !== owner.version) {
        if (owner.version >= FIRST_D2R) {
            toD2R(item);
        }
        else {
            toD2(item);
        }
    }
    item.owner = owner;
    item.location = 0 /* STORED */;
    item.equippedInSlot = 0 /* NONE */;
    item.stored = storageType;
    const offset = owner.version >= FIRST_D2R ? D2R_OFFSET : 0;
    item.raw =
        item.raw.slice(0, 58 + offset) +
            fromInt(item.location, 3) +
            fromInt(item.equippedInSlot, 4) +
            item.raw.slice(65 + offset, 73 + offset) +
            fromInt(item.stored, 3) +
            item.raw.slice(76 + offset);
    item.corpse = false;
    item.mercenary = false;
}
function transferItem(item, to, storageType = 5 /* STASH */, pageIndex) {
    // Try to position first, so we don't reach a state with no owner if there is no room
    if (isStash(to)) {
        const page = to.pages[pageIndex !== null && pageIndex !== void 0 ? pageIndex : 0];
        let height = PAGE_HEIGHT;
        let width = PAGE_WIDTH;
        if (!isPlugyStash(to)) {
            height = D2R_STASH_HEIGHT;
            width = D2R_STASH_WIDTH;
        }
        const position = findSpot(item, page.items, height, width);
        if (!position) {
            return false;
        }
        positionItem(item, position);
        page.items.push(item);
        item.page = pageIndex;
    }
    else {
        const itemsInSameStorage = to.items.filter((item) => item.stored === storageType);
        const { height, width } = getDimensions(storageType, to);
        const position = findSpot(item, itemsInSameStorage, height, width);
        if (!position) {
            return false;
        }
        positionItem(item, position);
        to.items.push(item);
        delete item.page;
    }
    takeItemFromCurrentOwner(item);
    giveItemTo(item, to, storageType);
    return true;
}

function bulkTransfer(target, items, storageType = 5 /* STASH */) {
    if (isPlugyStash(target)) {
        let pageIndex = target.pages.length;
        addPage(target, "Transferred");
        for (const item of items) {
            if (!transferItem(item, target, 5 /* STASH */, pageIndex)) {
                // We ran out of space, we insert a new page
                addPage(target, "Transferred");
                pageIndex++;
                // Don't forget to re-transfer the failed item
                transferItem(item, target, 5 /* STASH */, pageIndex);
            }
        }
    }
    else if (isCharacter(target)) {
        for (const item of items) {
            if (!transferItem(item, target, storageType)) {
                throw new Error("Not enough space to transfer all the selected items.");
            }
        }
    }
    else {
        itemsLoop: for (const item of items) {
            // Retry from page 0 every time, in case the new item is smaller than the previous ones
            let pageIndex = 0;
            while (pageIndex < target.pages.length) {
                if (transferItem(item, target, 5 /* STASH */, pageIndex)) {
                    continue itemsLoop;
                }
                // We ran out of space on this page, we try the next one
                pageIndex++;
            }
            throw new Error("Not enough space to transfer all the selected items.");
        }
    }
}

function TransferItems() {
    const { lastActivePlugyStashPage } = F(CollectionContext);
    const { updateAllFiles, rollback } = useUpdateCollection();
    const { selectedItems } = F(SelectionContext);
    const [target, setTarget] = l$1();
    const [targetStorage, setTargetStorage] = l$1();
    const [error, setError] = l$1();
    const [success, setSuccess] = l$1();
    const [withOrganize, setWithOrganize] = l$1(false);
    const [skipPages, setSkipPages] = l$1(0);
    const items = d$1(() => Array.from(selectedItems), [selectedItems]);
    const transferItems = A$1(async () => {
        if (!target) {
            setError("Please select where you want to transfer the items.");
            return;
        }
        if (!isStash(target) && !targetStorage) {
            setError("Please select where you want to store the items on your character.");
            return;
        }
        setError(undefined);
        try {
            bulkTransfer(target, items, targetStorage);
            if (isPlugyStash(target) && (withOrganize || target.nonPlugY)) {
                organize(target, [], skipPages);
            }
            if (lastActivePlugyStashPage) {
                updateCharacterStashes(lastActivePlugyStashPage);
            }
            await updateAllFiles(target);
            setSuccess(`${items.length} items transferred!`);
        }
        catch (e) {
            if (e instanceof Error) {
                setError(e.message);
                await rollback();
                setTarget(undefined);
            }
            else {
                throw e;
            }
        }
    }, [
        items,
        skipPages,
        target,
        targetStorage,
        updateAllFiles,
        rollback,
        withOrganize,
        lastActivePlugyStashPage,
    ]);
    if (items.length === 0 && !error && !success) {
        return (e$2("p", { children: ["You have not selected any items yet. Go through your", " ", e$2("a", Object.assign({ href: "#collection" }, { children: "Collection" }), void 0), " or", " ", e$2("a", Object.assign({ href: "#characters" }, { children: "Characters" }), void 0), " and select the items you want to transfer."] }, void 0));
    }
    let supportedStorageTypes;
    if (target && isCharacter(target)) {
        supportedStorageTypes = [1 /* INVENTORY */, 4 /* CUBE */];
        if (!(lastActivePlugyStashPage === null || lastActivePlugyStashPage === void 0 ? void 0 : lastActivePlugyStashPage.has(target))) {
            supportedStorageTypes.push(5 /* STASH */);
        }
    }
    return (e$2("div", Object.assign({ id: "transfer-items" }, { children: [e$2("p", { children: ["You have currently selected ", e$2("span", Object.assign({ class: "magic" }, { children: items.length }), void 0), " ", "items (full list below)."] }, void 0), e$2("p", { children: "Select where you want to transfer them:" }, void 0), e$2("div", Object.assign({ class: "selectors" }, { children: [e$2(OwnerSelector, { selected: target, onChange: setTarget }, void 0), target &&
                        (isCharacter(target) ||
                            (isPlugyStash(target) && !target.nonPlugY)) && (e$2("div", Object.assign({ class: "arrow" }, { children: "\u2192" }), void 0)), supportedStorageTypes && (e$2("ul", Object.assign({ id: "storage-selector" }, { children: supportedStorageTypes.map((storage) => (e$2("li", { children: e$2("label", { children: [e$2("input", { type: "radio", name: "storage", checked: targetStorage === storage, onChange: () => setTargetStorage(storage) }, void 0), " ", storage === 1 /* INVENTORY */
                                        ? "Inventory"
                                        : storage === 4 /* CUBE */
                                            ? "Cube"
                                            : "Stash"] }, void 0) }, void 0))) }), void 0)), target && isPlugyStash(target) && !target.nonPlugY && (e$2("ul", Object.assign({ id: "organize-selector" }, { children: [e$2("li", { children: e$2("label", { children: [e$2("input", { type: "radio", name: "organize", checked: !withOrganize, onChange: () => setWithOrganize(false) }, void 0), " ", "Just add the items at the end of ", target.personal ? "" : "my", " ", e$2(PrettyOwnerName, { owner: target }, void 0), "."] }, void 0) }, void 0), e$2("li", { children: [e$2("label", { children: [e$2("input", { type: "radio", name: "organize", checked: withOrganize, onChange: () => setWithOrganize(true) }, void 0), " ", "Organize ", target.personal ? "" : "my", " ", e$2(PrettyOwnerName, { owner: target }, void 0), " for me"] }, void 0), ", except the first", " ", e$2("input", { type: "number", min: 0, max: 99, value: skipPages, onChange: numberInputChangeHandler((value) => setSkipPages(value)) }, void 0), " ", "pages."] }, void 0)] }), void 0))] }), void 0), e$2("p", { children: [e$2("button", Object.assign({ class: "button", onClick: transferItems }, { children: "Transfer my items" }), void 0), e$2("span", Object.assign({ class: "error danger" }, { children: error }), void 0), e$2("span", Object.assign({ class: "success" }, { children: success }), void 0)] }, void 0), e$2("h4", { children: "Selected items" }, void 0), e$2(ItemsTable, { items: items, selectable: false, pageSize: 10 }, void 0)] }), void 0));
}

var css_248z$1 = ".radiolist{list-style:none;padding:0}";
styleInject(css_248z$1);

const SettingsContext = D({
    accessibleFont: false,
    toggleAccessibleFont: () => undefined,
});
function SettingsProvider({ children }) {
    const [accessibleFont, setAccessibleFont] = l$1(() => localStorage.getItem("accessibleFont") === "true");
    const toggleAccessibleFont = A$1(() => {
        setAccessibleFont((previous) => {
            localStorage.setItem("accessibleFont", `${!previous}`);
            return !previous;
        });
    }, []);
    const value = d$1(() => ({
        accessibleFont,
        toggleAccessibleFont,
    }), [accessibleFont, toggleAccessibleFont]);
    return (e$2(SettingsContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
}

function Settings() {
    const { accessibleFont, toggleAccessibleFont } = F(SettingsContext);
    return (e$2(d$2, { children: [e$2("p", { children: e$2("label", { children: [e$2("input", { type: "checkbox", name: "font", checked: !accessibleFont, onChange: toggleAccessibleFont }, void 0), " ", "Use Diablo font"] }, void 0) }, void 0), e$2("p", Object.assign({ class: "sidenote" }, { children: "More settings to come..." }), void 0)] }, void 0));
}

function NavLink({ hash, isHome, children, }) {
    const isActive = location.hash === hash || (isHome && location.hash === "");
    return (e$2("a", Object.assign({ class: isActive ? "nav-link active" : "nav-link", href: hash }, { children: children }), void 0));
}
function Routes() {
    const [currentHash, setCurrentHash] = l$1(location.hash);
    const { selectedItems } = F(SelectionContext);
    y$1(() => {
        const listener = () => setCurrentHash(location.hash);
        window.addEventListener("hashchange", listener);
        return () => window.removeEventListener("hashchange", listener);
    }, []);
    const view = d$1(() => {
        switch (currentHash) {
            case "#saves":
                return e$2(SaveFiles, {}, void 0);
            case "#collection":
                return e$2(Collection, {}, void 0);
            case "#characters":
                return e$2(StashView, {}, void 0);
            case "#transfer":
                return e$2(TransferItems, {}, void 0);
            case "#organize":
                return e$2(Organizer, {}, void 0);
            case "#grail-tracker":
                return e$2(GrailTracker, {}, void 0);
            case "#settings":
                return e$2(Settings, {}, void 0);
            default:
                return e$2(SaveFiles, {}, void 0);
            // case "#help":
            // default:
            //   return <Help />;
        }
    }, [currentHash]);
    return (e$2(d$2, { children: [e$2("nav", Object.assign({ id: "navigation", "data-nosnippet": true }, { children: [e$2(NavLink, Object.assign({ hash: "#saves" }, { children: "Save files" }), void 0), e$2(NavLink, Object.assign({ hash: "#characters" }, { children: "Collection" }), void 0), e$2(NavLink, Object.assign({ hash: "#transfer" }, { children: ["Transfer ", selectedItems.size ? selectedItems.size : "", " items"] }), void 0)] }), void 0), e$2("main", { children: view }, void 0)] }, void 0));
}

var css_248z = "#help-link{border:2px solid;border-color:initial;border-radius:50%;box-sizing:border-box;display:block;float:right;font-size:26px;height:32px;line-height:28px;margin-right:18px;padding-left:6px;padding-top:2px;width:32px}";
styleInject(css_248z);

function HelpLink() {
    return (e$2("a", Object.assign({ id: "help-link", href: "#help", "aria-label": "Help" }, { children: "?" }), void 0));
}

function Providers({ children }) {
    return (e$2(SettingsProvider, { children: e$2(SelectionProvider, { children: e$2(CollectionProvider, { children: children }, void 0) }, void 0) }, void 0));
}
function App() {
    const { accessibleFont } = F(SettingsContext);
    return (
    // Need a root div to properly replace the loading text.
    e$2("div", Object.assign({ id: "app", class: accessibleFont ? "accessible-font" : "" }, { children: [e$2(GitHubLink, {}, void 0), e$2(HelpLink, {}, void 0), e$2("h1", { children: "Diablo 2 Collection Manager" }, void 0), e$2(Routes, {}, void 0)] }), void 0));
}
S(e$2(Providers, { children: e$2(App, {}, void 0) }, void 0), document.body, document.getElementById("app"));
//# sourceMappingURL=App.js.map
