webpackJsonp([3],{1066:function(e,t,o){var l=o(964);"string"===typeof l&&(l=[[e.i,l,""]]);var a={};a.transform=void 0;o(574)(l,a);l.locals&&(e.exports=l.locals)},1211:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),n=l(a),i=o(24),r=l(i),s=o(23),u=l(s),d=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}))};d=(0,r.default)(d),d.displayName="ActionHelp",d.muiName="SvgIcon",t.default=d},1219:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),n=l(a),i=o(24),r=l(i),s=o(23),u=l(s),d=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}))};d=(0,r.default)(d),d.displayName="SocialPersonAdd",d.muiName="SvgIcon",t.default=d},570:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),a=o.n(l),n=o(72),i=o.n(n),r=o(713),s=o.n(r),u=o(844),d=o.n(u),c=o(806),h=o.n(c),p=o(26),f=(o.n(p),o(1219)),y=o.n(f),m=o(1211),b=o.n(m),v=o(244),g=o.n(v),S=o(91),k=o(1066),C=(o.n(k),function(){var e={flatButton:{color:p.grey600},checkRemember:{style:{float:"left",maxWidth:180,paddingTop:5},labelStyle:{color:p.grey600},iconStyle:{borderColor:p.grey600,fill:p.grey600}}};return a.a.createElement("div",null,a.a.createElement("div",{className:"login-container"},a.a.createElement("h2",{className:"text-center"},"React Stack App"),a.a.createElement("p",{className:"login-title text-center"},"React Stack Libraries - Material UI"),a.a.createElement("br",null),a.a.createElement(i.a,{className:"login-view"},a.a.createElement("div",{className:"login-title text-center"},"Sign in to start your session"),a.a.createElement("form",null,a.a.createElement(g.a,{hintText:"E-mail",floatingLabelText:"E-mail",fullWidth:!0}),a.a.createElement(g.a,{hintText:"Password",floatingLabelText:"Password",fullWidth:!0,type:"password"}),a.a.createElement("div",{style:{paddingTop:20}},a.a.createElement(h.a,{label:"Remember me",style:e.checkRemember.style,labelStyle:e.checkRemember.labelStyle,iconStyle:e.checkRemember.iconStyle}),a.a.createElement(S.e,{to:"/"},a.a.createElement(s.a,{label:"Login",primary:!0,className:"login-button"})))),a.a.createElement("div",{style:{display:"inline-block",paddingTop:30}},a.a.createElement(d.a,{label:"Register",href:"/",style:e.flatButton,icon:a.a.createElement(y.a,null)}),a.a.createElement(d.a,{label:"Forgot Password?",href:"/",style:e.flatButton,icon:a.a.createElement(b.a,null)})))))});t.default=C},712:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t,o){var l=t.muiTheme,a=l.baseTheme,n=l.button,i=l.raisedButton,r=l.borderRadius,s=e.disabled,u=e.disabledBackgroundColor,d=e.disabledLabelColor,c=e.fullWidth,h=e.icon,p=e.label,f=e.labelPosition,y=e.primary,m=e.secondary,b=e.style,v=y||m?.4:.08,g=i.color,S=i.textColor;s?(g=u||i.disabledColor,S=d||i.disabledTextColor):y?(g=i.primaryColor,S=i.primaryTextColor):m?(g=i.secondaryColor,S=i.secondaryTextColor):(e.backgroundColor&&(g=e.backgroundColor),e.labelColor&&(S=e.labelColor));var k=b&&b.height||n.height;return{root:{display:"inline-block",transition:M.default.easeOut(),minWidth:c?"100%":n.minWidth},button:{height:k,lineHeight:k+"px",width:"100%",padding:0,borderRadius:r,transition:M.default.easeOut(),backgroundColor:g,textAlign:"center"},label:{position:"relative",opacity:1,fontSize:i.fontSize,letterSpacing:0,textTransform:i.textTransform||n.textTransform||"uppercase",fontWeight:i.fontWeight,margin:0,userSelect:"none",paddingLeft:h&&"before"!==f?8:a.spacing.desktopGutterLess,paddingRight:h&&"before"===f?8:a.spacing.desktopGutterLess,color:S},icon:{verticalAlign:"middle",marginLeft:p&&"before"!==f?12:0,marginRight:p&&"before"===f?12:0},overlay:{height:k,borderRadius:r,backgroundColor:(o.keyboardFocused||o.hovered)&&!s&&(0,x.fade)(S,v),transition:M.default.easeOut(),top:0},ripple:{color:S,opacity:y||m?.16:.1}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(12),i=l(n),r=o(13),s=l(r),u=o(7),d=l(u),c=o(3),h=l(c),p=o(4),f=l(p),y=o(6),m=l(y),b=o(5),v=l(b),g=o(10),S=l(g),k=o(0),C=l(k),E=o(1),T=l(E),w=o(15),M=l(w),x=o(73),_=o(144),P=l(_),A=o(72),R=l(A),D=function(e){function t(){var e,o,l,a;(0,h.default)(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return o=l=(0,m.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(i))),l.state={hovered:!1,keyboardFocused:!1,touched:!1,initialZDepth:0,zDepth:0},l.handleMouseDown=function(e){0===e.button&&l.setState({zDepth:l.state.initialZDepth+1}),l.props.onMouseDown&&l.props.onMouseDown(e)},l.handleMouseUp=function(e){l.setState({zDepth:l.state.initialZDepth}),l.props.onMouseUp&&l.props.onMouseUp(e)},l.handleMouseLeave=function(e){l.state.keyboardFocused||l.setState({zDepth:l.state.initialZDepth,hovered:!1}),l.props.onMouseLeave&&l.props.onMouseLeave(e)},l.handleMouseEnter=function(e){l.state.keyboardFocused||l.state.touched||l.setState({hovered:!0}),l.props.onMouseEnter&&l.props.onMouseEnter(e)},l.handleTouchStart=function(e){l.setState({touched:!0,zDepth:l.state.initialZDepth+1}),l.props.onTouchStart&&l.props.onTouchStart(e)},l.handleTouchEnd=function(e){l.setState({touched:!0,zDepth:l.state.initialZDepth}),l.props.onTouchEnd&&l.props.onTouchEnd(e)},l.handleKeyboardFocus=function(e,t){var o=t&&!l.props.disabled?l.state.initialZDepth+1:l.state.initialZDepth;l.setState({zDepth:o,keyboardFocused:t})},a=o,(0,m.default)(l,a)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.disabled?0:1;this.setState({zDepth:e,initialZDepth:e})}},{key:"componentWillReceiveProps",value:function(e){var t=e.disabled?0:1,o={zDepth:t,initialZDepth:t};e.disabled&&(o.hovered=!1),this.setState(o)}},{key:"render",value:function(){var e=this.props,t=(e.backgroundColor,e.buttonStyle),o=e.children,l=e.className,n=e.disabled,r=(e.disabledBackgroundColor,e.disabledLabelColor,e.fullWidth,e.icon),u=e.label,d=(e.labelColor,e.labelPosition),c=e.labelStyle,h=e.overlayStyle,p=(e.primary,e.rippleStyle),f=(e.secondary,e.style),y=(0,s.default)(e,["backgroundColor","buttonStyle","children","className","disabled","disabledBackgroundColor","disabledLabelColor","fullWidth","icon","label","labelColor","labelPosition","labelStyle","overlayStyle","primary","rippleStyle","secondary","style"]),m=this.context.muiTheme.prepareStyles,b=a(this.props,this.context,this.state),v=(0,S.default)({},b.ripple,p),g=n?{}:{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onKeyboardFocus:this.handleKeyboardFocus},E=u&&C.default.createElement("span",{style:m((0,S.default)(b.label,c)),key:"labelElement"},u),T=r&&(0,k.cloneElement)(r,{color:r.props.color||b.label.color,style:(0,S.default)(b.icon,r.props.style),key:"iconCloned"}),w="before"===d?[E,T,o]:[o,T,E];return C.default.createElement(R.default,{className:l,style:(0,S.default)(b.root,f),zDepth:this.state.zDepth},C.default.createElement(P.default,(0,i.default)({},y,g,{ref:"container",disabled:n,style:(0,S.default)(b.button,t),focusRippleColor:v.color,touchRippleColor:v.color,focusRippleOpacity:v.opacity,touchRippleOpacity:v.opacity}),C.default.createElement("div",{ref:"overlay",style:m((0,S.default)(b.overlay,h))},w)))}}]),t}(k.Component);D.muiName="RaisedButton",D.defaultProps={disabled:!1,labelPosition:"after",fullWidth:!1,primary:!1,secondary:!1},D.contextTypes={muiTheme:T.default.object.isRequired},D.propTypes={},t.default=D},713:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(712),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=a.default},806:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(840),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=a.default},840:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o=t.muiTheme.checkbox;return{icon:{height:24,width:24},check:{position:"absolute",opacity:0,transform:"scale(0)",transitionOrigin:"50% 50%",transition:_.default.easeOut("450ms","opacity","0ms")+", "+_.default.easeOut("0ms","transform","450ms"),fill:o.checkedColor},checkWhenSwitched:{opacity:1,transform:"scale(1)",transition:_.default.easeOut("0ms","opacity","0ms")+", "+_.default.easeOut("800ms","transform","0ms")},checkWhenDisabled:{fill:o.disabledColor},box:{position:"absolute",opacity:1,fill:o.boxColor,transition:_.default.easeOut("1000ms","opacity","200ms")},boxWhenSwitched:{opacity:0,transition:_.default.easeOut("650ms","opacity","150ms"),fill:o.checkedColor},boxWhenDisabled:{fill:e.checked?"transparent":o.disabledColor},label:{color:e.disabled?o.labelDisabledColor:o.labelColor}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(12),i=l(n),r=o(13),s=l(r),u=o(7),d=l(u),c=o(3),h=l(c),p=o(4),f=l(p),y=o(6),m=l(y),b=o(5),v=l(b),g=o(10),S=l(g),k=o(0),C=l(k),E=o(1),T=l(E),w=o(846),M=l(w),x=o(15),_=l(x),P=o(848),A=l(P),R=o(849),D=l(R),L=function(e){function t(){var e,o,l,a;(0,h.default)(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return o=l=(0,m.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(i))),l.state={switched:!1},l.handleStateChange=function(e){l.setState({switched:e})},l.handleCheck=function(e,t){l.props.onCheck&&l.props.onCheck(e,t)},a=o,(0,m.default)(l,a)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.checked,o=e.defaultChecked,l=e.valueLink;(t||o||l&&l.value)&&this.setState({switched:!0})}},{key:"componentWillReceiveProps",value:function(e){this.props.checked!==e.checked&&this.setState({switched:e.checked})}},{key:"isChecked",value:function(){return this.refs.enhancedSwitch.isSwitched()}},{key:"setChecked",value:function(e){this.refs.enhancedSwitch.setSwitched(e)}},{key:"render",value:function(){var e=this.props,t=e.iconStyle,o=(e.onCheck,e.checkedIcon),l=e.uncheckedIcon,n=(0,s.default)(e,["iconStyle","onCheck","checkedIcon","uncheckedIcon"]),r=a(this.props,this.context),u=(0,S.default)(r.box,this.state.switched&&r.boxWhenSwitched,t,this.props.disabled&&r.boxWhenDisabled),d=(0,S.default)(r.check,this.state.switched&&r.checkWhenSwitched,t,this.props.disabled&&r.checkWhenDisabled),c=o?C.default.cloneElement(o,{style:(0,S.default)(d,o.props.style)}):C.default.createElement(D.default,{style:d}),h=l?C.default.cloneElement(l,{style:(0,S.default)(u,l.props.style)}):C.default.createElement(A.default,{style:u}),p=C.default.createElement("div",null,h,c),f=this.state.switched?d.fill:u.fill,y=(0,S.default)(r.icon,t),m=(0,S.default)(r.label,this.props.labelStyle),b={ref:"enhancedSwitch",inputType:"checkbox",switched:this.state.switched,switchElement:p,rippleColor:f,iconStyle:y,onSwitch:this.handleCheck,labelStyle:m,onParentShouldUpdate:this.handleStateChange,labelPosition:this.props.labelPosition};return C.default.createElement(M.default,(0,i.default)({},n,b))}}]),t}(k.Component);L.defaultProps={labelPosition:"right",disabled:!1},L.contextTypes={muiTheme:T.default.object.isRequired},L.propTypes={},t.default=L},842:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(12),n=l(a),i=o(13),r=l(i),s=o(7),u=l(s),d=o(3),c=l(d),h=o(4),p=l(h),f=o(6),y=l(f),m=o(5),b=l(m),v=o(10),g=l(v),S=o(0),k=l(S),C=o(1),E=l(C),T=o(15),w=l(T),M=o(73),x=o(144),_=l(x),P=o(843),A=l(P),R=function(e){function t(){var e,o,l,a;(0,c.default)(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return o=l=(0,y.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(i))),l.state={hovered:!1,isKeyboardFocused:!1,touch:!1},l.handleKeyboardFocus=function(e,t){l.setState({isKeyboardFocused:t}),l.props.onKeyboardFocus(e,t)},l.handleMouseEnter=function(e){l.state.touch||l.setState({hovered:!0}),l.props.onMouseEnter(e)},l.handleMouseLeave=function(e){l.setState({hovered:!1}),l.props.onMouseLeave(e)},l.handleTouchStart=function(e){l.setState({touch:!0}),l.props.onTouchStart(e)},a=o,(0,y.default)(l,a)}return(0,b.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.disabled&&this.setState({hovered:!1})}},{key:"render",value:function(){var e=this.props,t=e.backgroundColor,o=e.children,l=e.disabled,a=e.fullWidth,i=e.hoverColor,s=e.icon,u=e.label,d=e.labelStyle,c=e.labelPosition,h=e.primary,p=e.rippleColor,f=e.secondary,y=e.style,m=(0,r.default)(e,["backgroundColor","children","disabled","fullWidth","hoverColor","icon","label","labelStyle","labelPosition","primary","rippleColor","secondary","style"]),b=this.context.muiTheme,v=b.borderRadius,S=b.button,C=S.height,E=S.minWidth,T=S.textTransform,x=b.flatButton,P=x.buttonFilterColor,R=x.color,D=x.disabledTextColor,L=x.fontSize,F=x.fontWeight,O=x.primaryTextColor,W=x.secondaryTextColor,B=x.textColor,z=x.textTransform,U=void 0===z?T||"uppercase":z,K=l?D:h?O:f?W:B,N=(0,M.fade)(P,.2),j=P,H=i||N,I=p||j,Z=t||R,G=(this.state.hovered||this.state.isKeyboardFocused)&&!l,q=(0,g.default)({},{height:C,lineHeight:C+"px",minWidth:a?"100%":E,color:K,transition:w.default.easeOut(),borderRadius:v,userSelect:"none",overflow:"hidden",backgroundColor:G?H:Z,padding:0,margin:0,textAlign:"center"},y),V=void 0,Q={};if(s){var Y=(0,g.default)({verticalAlign:"middle",marginLeft:u&&"before"!==c?12:0,marginRight:u&&"before"===c?12:0},s.props.style);V=k.default.cloneElement(s,{color:s.props.color||q.color,style:Y,key:"iconCloned"}),"before"===c?Q.paddingRight=8:Q.paddingLeft=8}var J=(0,g.default)({letterSpacing:0,textTransform:U,fontWeight:F,fontSize:L},Q,d),X=u?k.default.createElement(A.default,{key:"labelElement",label:u,style:J}):void 0,$="before"===c?[X,V,o]:[o,V,X];return k.default.createElement(_.default,(0,n.default)({},m,{disabled:l,focusRippleColor:I,focusRippleOpacity:.3,onKeyboardFocus:this.handleKeyboardFocus,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart,style:q,touchRippleColor:I,touchRippleOpacity:.3}),$)}}]),t}(S.Component);R.muiName="FlatButton",R.defaultProps={disabled:!1,fullWidth:!1,labelStyle:{},labelPosition:"after",onKeyboardFocus:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onTouchStart:function(){},primary:!1,secondary:!1},R.contextTypes={muiTheme:E.default.object.isRequired},R.propTypes={},t.default=R},843:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o=t.muiTheme.baseTheme;return{root:{position:"relative",paddingLeft:o.spacing.desktopGutterLess,paddingRight:o.spacing.desktopGutterLess,verticalAlign:"middle"}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),i=l(n),r=o(3),s=l(r),u=o(4),d=l(u),c=o(6),h=l(c),p=o(5),f=l(p),y=o(10),m=l(y),b=o(0),v=l(b),g=o(1),S=l(g),k=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.label,o=e.style,l=this.context.muiTheme.prepareStyles,n=a(this.props,this.context);return v.default.createElement("span",{style:l((0,m.default)(n.root,o))},t)}}]),t}(b.Component);k.contextTypes={muiTheme:S.default.object.isRequired},k.propTypes={},t.default=k},844:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(842),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=a.default},846:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o=t.muiTheme.baseTheme;return{root:{cursor:e.disabled?"not-allowed":"pointer",position:"relative",overflow:"visible",display:"table",height:"auto",width:"100%"},input:{position:"absolute",cursor:"inherit",pointerEvents:"all",opacity:0,width:"100%",height:"100%",zIndex:2,left:0,boxSizing:"border-box",padding:0,margin:0},controls:{display:"flex",width:"100%",height:"100%"},label:{float:"left",position:"relative",display:"block",width:"calc(100% - 60px)",lineHeight:"24px",color:o.palette.textColor,fontFamily:o.fontFamily},wrap:{transition:A.default.easeOut(),float:"left",position:"relative",display:"block",flexShrink:0,width:60-o.spacing.desktopGutterLess,marginRight:"right"===e.labelPosition?o.spacing.desktopGutterLess:0,marginLeft:"left"===e.labelPosition?o.spacing.desktopGutterLess:0},ripple:{color:e.rippleColor||o.palette.primary1Color,height:"200%",width:"200%",top:-12,left:-12}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(12),i=l(n),r=o(13),s=l(r),u=o(7),d=l(u),c=o(3),h=l(c),p=o(4),f=l(p),y=o(6),m=l(y),b=o(5),v=l(b),g=o(10),S=l(g),k=o(0),C=l(k),E=o(1),T=l(E),w=o(74),M=l(w),x=o(90),_=l(x),P=o(15),A=l(P),R=o(247),D=l(R),L=o(248),F=l(L),O=o(72),W=l(O),B=o(16),z=(l(B),function(e){function t(){var e,o,l,a;(0,h.default)(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return o=l=(0,m.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(i))),l.state={isKeyboardFocused:!1},l.handleChange=function(e){l.tabPressed=!1,l.setState({isKeyboardFocused:!1});var t=l.refs.checkbox.checked;!l.props.hasOwnProperty("checked")&&l.props.onParentShouldUpdate&&l.props.onParentShouldUpdate(t),l.props.onSwitch&&l.props.onSwitch(e,t)},l.handleKeyDown=function(e){var t=(0,_.default)(e);"tab"===t&&(l.tabPressed=!0),l.state.isKeyboardFocused&&"space"===t&&l.handleChange(e)},l.handleKeyUp=function(e){l.state.isKeyboardFocused&&"space"===(0,_.default)(e)&&l.handleChange(e)},l.handleMouseDown=function(e){0===e.button&&l.refs.touchRipple.start(e)},l.handleMouseUp=function(){l.refs.touchRipple.end()},l.handleMouseLeave=function(){l.refs.touchRipple.end()},l.handleTouchStart=function(e){l.refs.touchRipple.start(e)},l.handleTouchEnd=function(){l.refs.touchRipple.end()},l.handleBlur=function(e){l.setState({isKeyboardFocused:!1}),l.props.onBlur&&l.props.onBlur(e)},l.handleFocus=function(e){setTimeout(function(){l.tabPressed&&l.setState({isKeyboardFocused:!0})},150),l.props.onFocus&&l.props.onFocus(e)},a=o,(0,m.default)(l,a)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.refs.checkbox;this.props.switched&&e.checked===this.props.switched||!this.props.onParentShouldUpdate||this.props.onParentShouldUpdate(e.checked)}},{key:"componentWillReceiveProps",value:function(e){var t=e.hasOwnProperty("checked"),o=e.hasOwnProperty("defaultChecked")&&e.defaultChecked!==this.props.defaultChecked;if(t||o){var l=e.checked||e.defaultChecked||!1;this.setState({switched:l}),this.props.onParentShouldUpdate&&l!==this.props.switched&&this.props.onParentShouldUpdate(l)}}},{key:"isSwitched",value:function(){return this.refs.checkbox.checked}},{key:"setSwitched",value:function(e){this.props.hasOwnProperty("checked")&&!1!==this.props.checked||(this.props.onParentShouldUpdate&&this.props.onParentShouldUpdate(e),this.refs.checkbox.checked=e)}},{key:"getValue",value:function(){return this.refs.checkbox.value}},{key:"render",value:function(){var e=this.props,t=e.name,o=e.value,l=e.iconStyle,n=e.inputStyle,r=e.inputType,u=e.label,d=e.labelStyle,c=e.labelPosition,h=(e.onSwitch,e.onBlur,e.onFocus,e.onMouseUp,e.onMouseDown,e.onMouseLeave,e.onTouchStart,e.onTouchEnd,e.onParentShouldUpdate,e.disabled),p=e.disableTouchRipple,f=e.disableFocusRipple,y=e.className,m=(e.rippleColor,e.rippleStyle),b=e.style,v=(e.switched,e.switchElement),g=e.thumbStyle,k=e.trackStyle,E=(0,s.default)(e,["name","value","iconStyle","inputStyle","inputType","label","labelStyle","labelPosition","onSwitch","onBlur","onFocus","onMouseUp","onMouseDown","onMouseLeave","onTouchStart","onTouchEnd","onParentShouldUpdate","disabled","disableTouchRipple","disableFocusRipple","className","rippleColor","rippleStyle","style","switched","switchElement","thumbStyle","trackStyle"]),T=this.context.muiTheme.prepareStyles,w=a(this.props,this.context),x=(0,S.default)(w.wrap,l),_=(0,S.default)(w.ripple,m);g&&(x.marginLeft/=2,x.marginRight/=2);var P=u&&C.default.createElement("label",{style:T((0,S.default)(w.label,d))},u),A=!h&&!p,R=!h&&!f,L=C.default.createElement(F.default,{ref:"touchRipple",key:"touchRipple",style:_,color:_.color,muiTheme:this.context.muiTheme,centerRipple:!0}),O=C.default.createElement(D.default,{key:"focusRipple",innerStyle:_,color:_.color,muiTheme:this.context.muiTheme,show:this.state.isKeyboardFocused}),B=[A?L:null,R?O:null],z=C.default.createElement("input",(0,i.default)({},E,{ref:"checkbox",type:r,style:T((0,S.default)(w.input,n)),name:t,value:o,disabled:h,onBlur:this.handleBlur,onFocus:this.handleFocus,onChange:this.handleChange,onMouseUp:A&&this.handleMouseUp,onMouseDown:A&&this.handleMouseDown,onMouseLeave:A&&this.handleMouseLeave,onTouchStart:A&&this.handleTouchStart,onTouchEnd:A&&this.handleTouchEnd})),U=g?C.default.createElement("div",{style:T(x)},C.default.createElement("div",{style:T((0,S.default)({},k))}),C.default.createElement(W.default,{style:g,zDepth:1,circle:!0}," ",B," ")):C.default.createElement("div",{style:T(x)},v,B),K="right"===c?C.default.createElement("div",{style:w.controls},U,P):C.default.createElement("div",{style:w.controls},P,U);return C.default.createElement("div",{ref:"root",className:y,style:T((0,S.default)(w.root,b))},C.default.createElement(M.default,{target:"window",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}),z,K)}}]),t}(k.Component));z.contextTypes={muiTheme:T.default.object.isRequired},z.propTypes={},t.default=z},848:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),n=l(a),i=o(24),r=l(i),s=o(23),u=l(s),d=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))};d=(0,r.default)(d),d.displayName="ToggleCheckBoxOutlineBlank",d.muiName="SvgIcon",t.default=d},849:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),n=l(a),i=o(24),r=l(i),s=o(23),u=l(s),d=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))};d=(0,r.default)(d),d.displayName="ToggleCheckBox",d.muiName="SvgIcon",t.default=d},964:function(e,t,o){t=e.exports=o(573)(!0),t.push([e.i,".login-container{min-width:320px;max-width:400px;height:auto;position:absolute;top:5%;left:0;right:0;margin:auto;color:#555}.login-title{color:#757575}","",{version:3,sources:["/home/jeescu/Workspace/Github/react-stack-app/src/app/views/Pages/LoginPage/LoginPage.css"],names:[],mappings:"AAAA,iBACE,gBAAiB,AACjB,gBAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,OAAQ,AACR,QAAS,AACT,YAAa,AACb,UAAY,CACb,AAED,aACE,aAAe,CAChB",file:"LoginPage.css",sourcesContent:[".login-container {\n  min-width: 320px;\n  max-width: 400px;\n  height: auto;\n  position: absolute;\n  top: 5%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #555;\n}\n\n.login-title {\n  color: #757575;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=3.89721430.chunk.js.map