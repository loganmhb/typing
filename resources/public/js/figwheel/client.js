// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25964 = cljs.core._EQ_;
var expr__25965 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25964.call(null,"true",expr__25965))){
return true;
} else {
if(cljs.core.truth_(pred__25964.call(null,"false",expr__25965))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25965)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25967__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25968__i = 0, G__25968__a = new Array(arguments.length -  0);
while (G__25968__i < G__25968__a.length) {G__25968__a[G__25968__i] = arguments[G__25968__i + 0]; ++G__25968__i;}
  args = new cljs.core.IndexedSeq(G__25968__a,0);
} 
return G__25967__delegate.call(this,args);};
G__25967.cljs$lang$maxFixedArity = 0;
G__25967.cljs$lang$applyTo = (function (arglist__25969){
var args = cljs.core.seq(arglist__25969);
return G__25967__delegate(args);
});
G__25967.cljs$core$IFn$_invoke$arity$variadic = G__25967__delegate;
return G__25967;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25970){
var map__25973 = p__25970;
var map__25973__$1 = ((((!((map__25973 == null)))?((((map__25973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25973):map__25973);
var message = cljs.core.get.call(null,map__25973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25973__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21639__auto___26135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___26135,ch){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___26135,ch){
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (7))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26106_26136 = state_26104__$1;
(statearr_26106_26136[(2)] = inst_26100);

(statearr_26106_26136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (1))){
var state_26104__$1 = state_26104;
var statearr_26107_26137 = state_26104__$1;
(statearr_26107_26137[(2)] = null);

(statearr_26107_26137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (4))){
var inst_26057 = (state_26104[(7)]);
var inst_26057__$1 = (state_26104[(2)]);
var state_26104__$1 = (function (){var statearr_26108 = state_26104;
(statearr_26108[(7)] = inst_26057__$1);

return statearr_26108;
})();
if(cljs.core.truth_(inst_26057__$1)){
var statearr_26109_26138 = state_26104__$1;
(statearr_26109_26138[(1)] = (5));

} else {
var statearr_26110_26139 = state_26104__$1;
(statearr_26110_26139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (15))){
var inst_26064 = (state_26104[(8)]);
var inst_26079 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26064);
var inst_26080 = cljs.core.first.call(null,inst_26079);
var inst_26081 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26080);
var inst_26082 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26081)].join('');
var inst_26083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26082);
var state_26104__$1 = state_26104;
var statearr_26111_26140 = state_26104__$1;
(statearr_26111_26140[(2)] = inst_26083);

(statearr_26111_26140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (13))){
var inst_26088 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26112_26141 = state_26104__$1;
(statearr_26112_26141[(2)] = inst_26088);

(statearr_26112_26141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (6))){
var state_26104__$1 = state_26104;
var statearr_26113_26142 = state_26104__$1;
(statearr_26113_26142[(2)] = null);

(statearr_26113_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (17))){
var inst_26086 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26114_26143 = state_26104__$1;
(statearr_26114_26143[(2)] = inst_26086);

(statearr_26114_26143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else {
if((state_val_26105 === (12))){
var inst_26063 = (state_26104[(9)]);
var inst_26077 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26063,opts);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26077)){
var statearr_26115_26144 = state_26104__$1;
(statearr_26115_26144[(1)] = (15));

} else {
var statearr_26116_26145 = state_26104__$1;
(statearr_26116_26145[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (2))){
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,(4),ch);
} else {
if((state_val_26105 === (11))){
var inst_26064 = (state_26104[(8)]);
var inst_26069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26070 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26064);
var inst_26071 = cljs.core.async.timeout.call(null,(1000));
var inst_26072 = [inst_26070,inst_26071];
var inst_26073 = (new cljs.core.PersistentVector(null,2,(5),inst_26069,inst_26072,null));
var state_26104__$1 = state_26104;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26104__$1,(14),inst_26073);
} else {
if((state_val_26105 === (9))){
var inst_26064 = (state_26104[(8)]);
var inst_26090 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26091 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26064);
var inst_26092 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26091);
var inst_26093 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26092)].join('');
var inst_26094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26093);
var state_26104__$1 = (function (){var statearr_26117 = state_26104;
(statearr_26117[(10)] = inst_26090);

return statearr_26117;
})();
var statearr_26118_26146 = state_26104__$1;
(statearr_26118_26146[(2)] = inst_26094);

(statearr_26118_26146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (5))){
var inst_26057 = (state_26104[(7)]);
var inst_26059 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26060 = (new cljs.core.PersistentArrayMap(null,2,inst_26059,null));
var inst_26061 = (new cljs.core.PersistentHashSet(null,inst_26060,null));
var inst_26062 = figwheel.client.focus_msgs.call(null,inst_26061,inst_26057);
var inst_26063 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26062);
var inst_26064 = cljs.core.first.call(null,inst_26062);
var inst_26065 = figwheel.client.autoload_QMARK_.call(null);
var state_26104__$1 = (function (){var statearr_26119 = state_26104;
(statearr_26119[(8)] = inst_26064);

(statearr_26119[(9)] = inst_26063);

return statearr_26119;
})();
if(cljs.core.truth_(inst_26065)){
var statearr_26120_26147 = state_26104__$1;
(statearr_26120_26147[(1)] = (8));

} else {
var statearr_26121_26148 = state_26104__$1;
(statearr_26121_26148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (14))){
var inst_26075 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26122_26149 = state_26104__$1;
(statearr_26122_26149[(2)] = inst_26075);

(statearr_26122_26149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (16))){
var state_26104__$1 = state_26104;
var statearr_26123_26150 = state_26104__$1;
(statearr_26123_26150[(2)] = null);

(statearr_26123_26150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (10))){
var inst_26096 = (state_26104[(2)]);
var state_26104__$1 = (function (){var statearr_26124 = state_26104;
(statearr_26124[(11)] = inst_26096);

return statearr_26124;
})();
var statearr_26125_26151 = state_26104__$1;
(statearr_26125_26151[(2)] = null);

(statearr_26125_26151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (8))){
var inst_26063 = (state_26104[(9)]);
var inst_26067 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26063,opts);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26067)){
var statearr_26126_26152 = state_26104__$1;
(statearr_26126_26152[(1)] = (11));

} else {
var statearr_26127_26153 = state_26104__$1;
(statearr_26127_26153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21639__auto___26135,ch))
;
return ((function (switch__21527__auto__,c__21639__auto___26135,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____0 = (function (){
var statearr_26131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26131[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__);

(statearr_26131[(1)] = (1));

return statearr_26131;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____1 = (function (state_26104){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e26132){if((e26132 instanceof Object)){
var ex__21531__auto__ = e26132;
var statearr_26133_26154 = state_26104;
(statearr_26133_26154[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26155 = state_26104;
state_26104 = G__26155;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21528__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___26135,ch))
})();
var state__21641__auto__ = (function (){var statearr_26134 = f__21640__auto__.call(null);
(statearr_26134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___26135);

return statearr_26134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___26135,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26156_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26156_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26163 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26163){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26162 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26161,_STAR_print_newline_STAR_26162,base_path_26163){
return (function() { 
var G__26164__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26165__i = 0, G__26165__a = new Array(arguments.length -  0);
while (G__26165__i < G__26165__a.length) {G__26165__a[G__26165__i] = arguments[G__26165__i + 0]; ++G__26165__i;}
  args = new cljs.core.IndexedSeq(G__26165__a,0);
} 
return G__26164__delegate.call(this,args);};
G__26164.cljs$lang$maxFixedArity = 0;
G__26164.cljs$lang$applyTo = (function (arglist__26166){
var args = cljs.core.seq(arglist__26166);
return G__26164__delegate(args);
});
G__26164.cljs$core$IFn$_invoke$arity$variadic = G__26164__delegate;
return G__26164;
})()
;})(_STAR_print_fn_STAR_26161,_STAR_print_newline_STAR_26162,base_path_26163))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26162;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26161;
}}catch (e26160){if((e26160 instanceof Error)){
var e = e26160;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26163], null));
} else {
var e = e26160;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26163))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26167){
var map__26174 = p__26167;
var map__26174__$1 = ((((!((map__26174 == null)))?((((map__26174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26174):map__26174);
var opts = map__26174__$1;
var build_id = cljs.core.get.call(null,map__26174__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26174,map__26174__$1,opts,build_id){
return (function (p__26176){
var vec__26177 = p__26176;
var map__26178 = cljs.core.nth.call(null,vec__26177,(0),null);
var map__26178__$1 = ((((!((map__26178 == null)))?((((map__26178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26178):map__26178);
var msg = map__26178__$1;
var msg_name = cljs.core.get.call(null,map__26178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26177,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26177,map__26178,map__26178__$1,msg,msg_name,_,map__26174,map__26174__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26177,map__26178,map__26178__$1,msg,msg_name,_,map__26174,map__26174__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26174,map__26174__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26184){
var vec__26185 = p__26184;
var map__26186 = cljs.core.nth.call(null,vec__26185,(0),null);
var map__26186__$1 = ((((!((map__26186 == null)))?((((map__26186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26186):map__26186);
var msg = map__26186__$1;
var msg_name = cljs.core.get.call(null,map__26186__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26185,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26188){
var map__26198 = p__26188;
var map__26198__$1 = ((((!((map__26198 == null)))?((((map__26198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26198):map__26198);
var on_compile_warning = cljs.core.get.call(null,map__26198__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26198__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26198,map__26198__$1,on_compile_warning,on_compile_fail){
return (function (p__26200){
var vec__26201 = p__26200;
var map__26202 = cljs.core.nth.call(null,vec__26201,(0),null);
var map__26202__$1 = ((((!((map__26202 == null)))?((((map__26202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26202):map__26202);
var msg = map__26202__$1;
var msg_name = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26201,(1));
var pred__26204 = cljs.core._EQ_;
var expr__26205 = msg_name;
if(cljs.core.truth_(pred__26204.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26205))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26204.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26205))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26198,map__26198__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__,msg_hist,msg_names,msg){
return (function (state_26421){
var state_val_26422 = (state_26421[(1)]);
if((state_val_26422 === (7))){
var inst_26345 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26345)){
var statearr_26423_26469 = state_26421__$1;
(statearr_26423_26469[(1)] = (8));

} else {
var statearr_26424_26470 = state_26421__$1;
(statearr_26424_26470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (20))){
var inst_26415 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26425_26471 = state_26421__$1;
(statearr_26425_26471[(2)] = inst_26415);

(statearr_26425_26471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (27))){
var inst_26411 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26426_26472 = state_26421__$1;
(statearr_26426_26472[(2)] = inst_26411);

(statearr_26426_26472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (1))){
var inst_26338 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26338)){
var statearr_26427_26473 = state_26421__$1;
(statearr_26427_26473[(1)] = (2));

} else {
var statearr_26428_26474 = state_26421__$1;
(statearr_26428_26474[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (24))){
var inst_26413 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26429_26475 = state_26421__$1;
(statearr_26429_26475[(2)] = inst_26413);

(statearr_26429_26475[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (4))){
var inst_26419 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26421__$1,inst_26419);
} else {
if((state_val_26422 === (15))){
var inst_26417 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26430_26476 = state_26421__$1;
(statearr_26430_26476[(2)] = inst_26417);

(statearr_26430_26476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (21))){
var inst_26376 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26431_26477 = state_26421__$1;
(statearr_26431_26477[(2)] = inst_26376);

(statearr_26431_26477[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (31))){
var inst_26400 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26400)){
var statearr_26432_26478 = state_26421__$1;
(statearr_26432_26478[(1)] = (34));

} else {
var statearr_26433_26479 = state_26421__$1;
(statearr_26433_26479[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (32))){
var inst_26409 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26434_26480 = state_26421__$1;
(statearr_26434_26480[(2)] = inst_26409);

(statearr_26434_26480[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (33))){
var inst_26398 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26435_26481 = state_26421__$1;
(statearr_26435_26481[(2)] = inst_26398);

(statearr_26435_26481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (13))){
var inst_26359 = figwheel.client.heads_up.clear.call(null);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(16),inst_26359);
} else {
if((state_val_26422 === (22))){
var inst_26380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26381 = figwheel.client.heads_up.append_message.call(null,inst_26380);
var state_26421__$1 = state_26421;
var statearr_26436_26482 = state_26421__$1;
(statearr_26436_26482[(2)] = inst_26381);

(statearr_26436_26482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (36))){
var inst_26407 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26437_26483 = state_26421__$1;
(statearr_26437_26483[(2)] = inst_26407);

(statearr_26437_26483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (29))){
var inst_26391 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26438_26484 = state_26421__$1;
(statearr_26438_26484[(2)] = inst_26391);

(statearr_26438_26484[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (6))){
var inst_26340 = (state_26421[(7)]);
var state_26421__$1 = state_26421;
var statearr_26439_26485 = state_26421__$1;
(statearr_26439_26485[(2)] = inst_26340);

(statearr_26439_26485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (28))){
var inst_26387 = (state_26421[(2)]);
var inst_26388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26389 = figwheel.client.heads_up.display_warning.call(null,inst_26388);
var state_26421__$1 = (function (){var statearr_26440 = state_26421;
(statearr_26440[(8)] = inst_26387);

return statearr_26440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(29),inst_26389);
} else {
if((state_val_26422 === (25))){
var inst_26385 = figwheel.client.heads_up.clear.call(null);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(28),inst_26385);
} else {
if((state_val_26422 === (34))){
var inst_26402 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(37),inst_26402);
} else {
if((state_val_26422 === (17))){
var inst_26367 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26441_26486 = state_26421__$1;
(statearr_26441_26486[(2)] = inst_26367);

(statearr_26441_26486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (3))){
var inst_26357 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26357)){
var statearr_26442_26487 = state_26421__$1;
(statearr_26442_26487[(1)] = (13));

} else {
var statearr_26443_26488 = state_26421__$1;
(statearr_26443_26488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (12))){
var inst_26353 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26444_26489 = state_26421__$1;
(statearr_26444_26489[(2)] = inst_26353);

(statearr_26444_26489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (2))){
var inst_26340 = (state_26421[(7)]);
var inst_26340__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26421__$1 = (function (){var statearr_26445 = state_26421;
(statearr_26445[(7)] = inst_26340__$1);

return statearr_26445;
})();
if(cljs.core.truth_(inst_26340__$1)){
var statearr_26446_26490 = state_26421__$1;
(statearr_26446_26490[(1)] = (5));

} else {
var statearr_26447_26491 = state_26421__$1;
(statearr_26447_26491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (23))){
var inst_26383 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26383)){
var statearr_26448_26492 = state_26421__$1;
(statearr_26448_26492[(1)] = (25));

} else {
var statearr_26449_26493 = state_26421__$1;
(statearr_26449_26493[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (35))){
var state_26421__$1 = state_26421;
var statearr_26450_26494 = state_26421__$1;
(statearr_26450_26494[(2)] = null);

(statearr_26450_26494[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (19))){
var inst_26378 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26378)){
var statearr_26451_26495 = state_26421__$1;
(statearr_26451_26495[(1)] = (22));

} else {
var statearr_26452_26496 = state_26421__$1;
(statearr_26452_26496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (11))){
var inst_26349 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26453_26497 = state_26421__$1;
(statearr_26453_26497[(2)] = inst_26349);

(statearr_26453_26497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (9))){
var inst_26351 = figwheel.client.heads_up.clear.call(null);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(12),inst_26351);
} else {
if((state_val_26422 === (5))){
var inst_26342 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26421__$1 = state_26421;
var statearr_26454_26498 = state_26421__$1;
(statearr_26454_26498[(2)] = inst_26342);

(statearr_26454_26498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (14))){
var inst_26369 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26369)){
var statearr_26455_26499 = state_26421__$1;
(statearr_26455_26499[(1)] = (18));

} else {
var statearr_26456_26500 = state_26421__$1;
(statearr_26456_26500[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (26))){
var inst_26393 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26421__$1 = state_26421;
if(cljs.core.truth_(inst_26393)){
var statearr_26457_26501 = state_26421__$1;
(statearr_26457_26501[(1)] = (30));

} else {
var statearr_26458_26502 = state_26421__$1;
(statearr_26458_26502[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (16))){
var inst_26361 = (state_26421[(2)]);
var inst_26362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26363 = figwheel.client.format_messages.call(null,inst_26362);
var inst_26364 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26365 = figwheel.client.heads_up.display_error.call(null,inst_26363,inst_26364);
var state_26421__$1 = (function (){var statearr_26459 = state_26421;
(statearr_26459[(9)] = inst_26361);

return statearr_26459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(17),inst_26365);
} else {
if((state_val_26422 === (30))){
var inst_26395 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26396 = figwheel.client.heads_up.display_warning.call(null,inst_26395);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(33),inst_26396);
} else {
if((state_val_26422 === (10))){
var inst_26355 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26460_26503 = state_26421__$1;
(statearr_26460_26503[(2)] = inst_26355);

(statearr_26460_26503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (18))){
var inst_26371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26372 = figwheel.client.format_messages.call(null,inst_26371);
var inst_26373 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26374 = figwheel.client.heads_up.display_error.call(null,inst_26372,inst_26373);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(21),inst_26374);
} else {
if((state_val_26422 === (37))){
var inst_26404 = (state_26421[(2)]);
var state_26421__$1 = state_26421;
var statearr_26461_26504 = state_26421__$1;
(statearr_26461_26504[(2)] = inst_26404);

(statearr_26461_26504[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26422 === (8))){
var inst_26347 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26421__$1 = state_26421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26421__$1,(11),inst_26347);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21639__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21527__auto__,c__21639__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____0 = (function (){
var statearr_26465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26465[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__);

(statearr_26465[(1)] = (1));

return statearr_26465;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____1 = (function (state_26421){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_26421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e26466){if((e26466 instanceof Object)){
var ex__21531__auto__ = e26466;
var statearr_26467_26505 = state_26421;
(statearr_26467_26505[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26506 = state_26421;
state_26421 = G__26506;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__ = function(state_26421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____1.call(this,state_26421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__,msg_hist,msg_names,msg))
})();
var state__21641__auto__ = (function (){var statearr_26468 = f__21640__auto__.call(null);
(statearr_26468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__,msg_hist,msg_names,msg))
);

return c__21639__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21639__auto___26569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___26569,ch){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___26569,ch){
return (function (state_26552){
var state_val_26553 = (state_26552[(1)]);
if((state_val_26553 === (1))){
var state_26552__$1 = state_26552;
var statearr_26554_26570 = state_26552__$1;
(statearr_26554_26570[(2)] = null);

(statearr_26554_26570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (2))){
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26552__$1,(4),ch);
} else {
if((state_val_26553 === (3))){
var inst_26550 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26552__$1,inst_26550);
} else {
if((state_val_26553 === (4))){
var inst_26540 = (state_26552[(7)]);
var inst_26540__$1 = (state_26552[(2)]);
var state_26552__$1 = (function (){var statearr_26555 = state_26552;
(statearr_26555[(7)] = inst_26540__$1);

return statearr_26555;
})();
if(cljs.core.truth_(inst_26540__$1)){
var statearr_26556_26571 = state_26552__$1;
(statearr_26556_26571[(1)] = (5));

} else {
var statearr_26557_26572 = state_26552__$1;
(statearr_26557_26572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (5))){
var inst_26540 = (state_26552[(7)]);
var inst_26542 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26540);
var state_26552__$1 = state_26552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26552__$1,(8),inst_26542);
} else {
if((state_val_26553 === (6))){
var state_26552__$1 = state_26552;
var statearr_26558_26573 = state_26552__$1;
(statearr_26558_26573[(2)] = null);

(statearr_26558_26573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (7))){
var inst_26548 = (state_26552[(2)]);
var state_26552__$1 = state_26552;
var statearr_26559_26574 = state_26552__$1;
(statearr_26559_26574[(2)] = inst_26548);

(statearr_26559_26574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26553 === (8))){
var inst_26544 = (state_26552[(2)]);
var state_26552__$1 = (function (){var statearr_26560 = state_26552;
(statearr_26560[(8)] = inst_26544);

return statearr_26560;
})();
var statearr_26561_26575 = state_26552__$1;
(statearr_26561_26575[(2)] = null);

(statearr_26561_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21639__auto___26569,ch))
;
return ((function (switch__21527__auto__,c__21639__auto___26569,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21528__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21528__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21528__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var figwheel$client$heads_up_plugin_$_state_machine__21528__auto____1 = (function (state_26552){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_26552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__21531__auto__ = e26566;
var statearr_26567_26576 = state_26552;
(statearr_26567_26576[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26577 = state_26552;
state_26552 = G__26577;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21528__auto__ = function(state_26552){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21528__auto____1.call(this,state_26552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21528__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21528__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___26569,ch))
})();
var state__21641__auto__ = (function (){var statearr_26568 = f__21640__auto__.call(null);
(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___26569);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___26569,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__){
return (function (state_26598){
var state_val_26599 = (state_26598[(1)]);
if((state_val_26599 === (1))){
var inst_26593 = cljs.core.async.timeout.call(null,(3000));
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26598__$1,(2),inst_26593);
} else {
if((state_val_26599 === (2))){
var inst_26595 = (state_26598[(2)]);
var inst_26596 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26598__$1 = (function (){var statearr_26600 = state_26598;
(statearr_26600[(7)] = inst_26595);

return statearr_26600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26598__$1,inst_26596);
} else {
return null;
}
}
});})(c__21639__auto__))
;
return ((function (switch__21527__auto__,c__21639__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____0 = (function (){
var statearr_26604 = [null,null,null,null,null,null,null,null];
(statearr_26604[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__);

(statearr_26604[(1)] = (1));

return statearr_26604;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____1 = (function (state_26598){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_26598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e26605){if((e26605 instanceof Object)){
var ex__21531__auto__ = e26605;
var statearr_26606_26608 = state_26598;
(statearr_26606_26608[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26609 = state_26598;
state_26598 = G__26609;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__ = function(state_26598){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____1.call(this,state_26598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21528__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__))
})();
var state__21641__auto__ = (function (){var statearr_26607 = f__21640__auto__.call(null);
(statearr_26607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_26607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__))
);

return c__21639__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26610){
var map__26617 = p__26610;
var map__26617__$1 = ((((!((map__26617 == null)))?((((map__26617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26617):map__26617);
var ed = map__26617__$1;
var formatted_exception = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26619_26623 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26620_26624 = null;
var count__26621_26625 = (0);
var i__26622_26626 = (0);
while(true){
if((i__26622_26626 < count__26621_26625)){
var msg_26627 = cljs.core._nth.call(null,chunk__26620_26624,i__26622_26626);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26627);

var G__26628 = seq__26619_26623;
var G__26629 = chunk__26620_26624;
var G__26630 = count__26621_26625;
var G__26631 = (i__26622_26626 + (1));
seq__26619_26623 = G__26628;
chunk__26620_26624 = G__26629;
count__26621_26625 = G__26630;
i__26622_26626 = G__26631;
continue;
} else {
var temp__4425__auto___26632 = cljs.core.seq.call(null,seq__26619_26623);
if(temp__4425__auto___26632){
var seq__26619_26633__$1 = temp__4425__auto___26632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26619_26633__$1)){
var c__17588__auto___26634 = cljs.core.chunk_first.call(null,seq__26619_26633__$1);
var G__26635 = cljs.core.chunk_rest.call(null,seq__26619_26633__$1);
var G__26636 = c__17588__auto___26634;
var G__26637 = cljs.core.count.call(null,c__17588__auto___26634);
var G__26638 = (0);
seq__26619_26623 = G__26635;
chunk__26620_26624 = G__26636;
count__26621_26625 = G__26637;
i__26622_26626 = G__26638;
continue;
} else {
var msg_26639 = cljs.core.first.call(null,seq__26619_26633__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26639);

var G__26640 = cljs.core.next.call(null,seq__26619_26633__$1);
var G__26641 = null;
var G__26642 = (0);
var G__26643 = (0);
seq__26619_26623 = G__26640;
chunk__26620_26624 = G__26641;
count__26621_26625 = G__26642;
i__26622_26626 = G__26643;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26644){
var map__26647 = p__26644;
var map__26647__$1 = ((((!((map__26647 == null)))?((((map__26647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26647):map__26647);
var w = map__26647__$1;
var message = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26655 = cljs.core.seq.call(null,plugins);
var chunk__26656 = null;
var count__26657 = (0);
var i__26658 = (0);
while(true){
if((i__26658 < count__26657)){
var vec__26659 = cljs.core._nth.call(null,chunk__26656,i__26658);
var k = cljs.core.nth.call(null,vec__26659,(0),null);
var plugin = cljs.core.nth.call(null,vec__26659,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26661 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26655,chunk__26656,count__26657,i__26658,pl_26661,vec__26659,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26661.call(null,msg_hist);
});})(seq__26655,chunk__26656,count__26657,i__26658,pl_26661,vec__26659,k,plugin))
);
} else {
}

var G__26662 = seq__26655;
var G__26663 = chunk__26656;
var G__26664 = count__26657;
var G__26665 = (i__26658 + (1));
seq__26655 = G__26662;
chunk__26656 = G__26663;
count__26657 = G__26664;
i__26658 = G__26665;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26655);
if(temp__4425__auto__){
var seq__26655__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26655__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__26655__$1);
var G__26666 = cljs.core.chunk_rest.call(null,seq__26655__$1);
var G__26667 = c__17588__auto__;
var G__26668 = cljs.core.count.call(null,c__17588__auto__);
var G__26669 = (0);
seq__26655 = G__26666;
chunk__26656 = G__26667;
count__26657 = G__26668;
i__26658 = G__26669;
continue;
} else {
var vec__26660 = cljs.core.first.call(null,seq__26655__$1);
var k = cljs.core.nth.call(null,vec__26660,(0),null);
var plugin = cljs.core.nth.call(null,vec__26660,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26670 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26655,chunk__26656,count__26657,i__26658,pl_26670,vec__26660,k,plugin,seq__26655__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26670.call(null,msg_hist);
});})(seq__26655,chunk__26656,count__26657,i__26658,pl_26670,vec__26660,k,plugin,seq__26655__$1,temp__4425__auto__))
);
} else {
}

var G__26671 = cljs.core.next.call(null,seq__26655__$1);
var G__26672 = null;
var G__26673 = (0);
var G__26674 = (0);
seq__26655 = G__26671;
chunk__26656 = G__26672;
count__26657 = G__26673;
i__26658 = G__26674;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26675 = [];
var len__17843__auto___26678 = arguments.length;
var i__17844__auto___26679 = (0);
while(true){
if((i__17844__auto___26679 < len__17843__auto___26678)){
args26675.push((arguments[i__17844__auto___26679]));

var G__26680 = (i__17844__auto___26679 + (1));
i__17844__auto___26679 = G__26680;
continue;
} else {
}
break;
}

var G__26677 = args26675.length;
switch (G__26677) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26675.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___26686 = arguments.length;
var i__17844__auto___26687 = (0);
while(true){
if((i__17844__auto___26687 < len__17843__auto___26686)){
args__17850__auto__.push((arguments[i__17844__auto___26687]));

var G__26688 = (i__17844__auto___26687 + (1));
i__17844__auto___26687 = G__26688;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26683){
var map__26684 = p__26683;
var map__26684__$1 = ((((!((map__26684 == null)))?((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var opts = map__26684__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26682){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26682));
});

//# sourceMappingURL=client.js.map