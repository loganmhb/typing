// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25545_25559 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25546_25560 = null;
var count__25547_25561 = (0);
var i__25548_25562 = (0);
while(true){
if((i__25548_25562 < count__25547_25561)){
var f_25563 = cljs.core._nth.call(null,chunk__25546_25560,i__25548_25562);
cljs.core.println.call(null,"  ",f_25563);

var G__25564 = seq__25545_25559;
var G__25565 = chunk__25546_25560;
var G__25566 = count__25547_25561;
var G__25567 = (i__25548_25562 + (1));
seq__25545_25559 = G__25564;
chunk__25546_25560 = G__25565;
count__25547_25561 = G__25566;
i__25548_25562 = G__25567;
continue;
} else {
var temp__4425__auto___25568 = cljs.core.seq.call(null,seq__25545_25559);
if(temp__4425__auto___25568){
var seq__25545_25569__$1 = temp__4425__auto___25568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25545_25569__$1)){
var c__17588__auto___25570 = cljs.core.chunk_first.call(null,seq__25545_25569__$1);
var G__25571 = cljs.core.chunk_rest.call(null,seq__25545_25569__$1);
var G__25572 = c__17588__auto___25570;
var G__25573 = cljs.core.count.call(null,c__17588__auto___25570);
var G__25574 = (0);
seq__25545_25559 = G__25571;
chunk__25546_25560 = G__25572;
count__25547_25561 = G__25573;
i__25548_25562 = G__25574;
continue;
} else {
var f_25575 = cljs.core.first.call(null,seq__25545_25569__$1);
cljs.core.println.call(null,"  ",f_25575);

var G__25576 = cljs.core.next.call(null,seq__25545_25569__$1);
var G__25577 = null;
var G__25578 = (0);
var G__25579 = (0);
seq__25545_25559 = G__25576;
chunk__25546_25560 = G__25577;
count__25547_25561 = G__25578;
i__25548_25562 = G__25579;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25580 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25580);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25580)))?cljs.core.second.call(null,arglists_25580):arglists_25580));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25550 = null;
var count__25551 = (0);
var i__25552 = (0);
while(true){
if((i__25552 < count__25551)){
var vec__25553 = cljs.core._nth.call(null,chunk__25550,i__25552);
var name = cljs.core.nth.call(null,vec__25553,(0),null);
var map__25554 = cljs.core.nth.call(null,vec__25553,(1),null);
var map__25554__$1 = ((((!((map__25554 == null)))?((((map__25554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25554):map__25554);
var doc = cljs.core.get.call(null,map__25554__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25554__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25581 = seq__25549;
var G__25582 = chunk__25550;
var G__25583 = count__25551;
var G__25584 = (i__25552 + (1));
seq__25549 = G__25581;
chunk__25550 = G__25582;
count__25551 = G__25583;
i__25552 = G__25584;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25549);
if(temp__4425__auto__){
var seq__25549__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25549__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__25549__$1);
var G__25585 = cljs.core.chunk_rest.call(null,seq__25549__$1);
var G__25586 = c__17588__auto__;
var G__25587 = cljs.core.count.call(null,c__17588__auto__);
var G__25588 = (0);
seq__25549 = G__25585;
chunk__25550 = G__25586;
count__25551 = G__25587;
i__25552 = G__25588;
continue;
} else {
var vec__25556 = cljs.core.first.call(null,seq__25549__$1);
var name = cljs.core.nth.call(null,vec__25556,(0),null);
var map__25557 = cljs.core.nth.call(null,vec__25556,(1),null);
var map__25557__$1 = ((((!((map__25557 == null)))?((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25557):map__25557);
var doc = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25589 = cljs.core.next.call(null,seq__25549__$1);
var G__25590 = null;
var G__25591 = (0);
var G__25592 = (0);
seq__25549 = G__25589;
chunk__25550 = G__25590;
count__25551 = G__25591;
i__25552 = G__25592;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map