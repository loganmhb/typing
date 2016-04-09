// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24521_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24521_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24526 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24527 = null;
var count__24528 = (0);
var i__24529 = (0);
while(true){
if((i__24529 < count__24528)){
var n = cljs.core._nth.call(null,chunk__24527,i__24529);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24530 = seq__24526;
var G__24531 = chunk__24527;
var G__24532 = count__24528;
var G__24533 = (i__24529 + (1));
seq__24526 = G__24530;
chunk__24527 = G__24531;
count__24528 = G__24532;
i__24529 = G__24533;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24526);
if(temp__4425__auto__){
var seq__24526__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24526__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24526__$1);
var G__24534 = cljs.core.chunk_rest.call(null,seq__24526__$1);
var G__24535 = c__17588__auto__;
var G__24536 = cljs.core.count.call(null,c__17588__auto__);
var G__24537 = (0);
seq__24526 = G__24534;
chunk__24527 = G__24535;
count__24528 = G__24536;
i__24529 = G__24537;
continue;
} else {
var n = cljs.core.first.call(null,seq__24526__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24538 = cljs.core.next.call(null,seq__24526__$1);
var G__24539 = null;
var G__24540 = (0);
var G__24541 = (0);
seq__24526 = G__24538;
chunk__24527 = G__24539;
count__24528 = G__24540;
i__24529 = G__24541;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24580_24587 = cljs.core.seq.call(null,deps);
var chunk__24581_24588 = null;
var count__24582_24589 = (0);
var i__24583_24590 = (0);
while(true){
if((i__24583_24590 < count__24582_24589)){
var dep_24591 = cljs.core._nth.call(null,chunk__24581_24588,i__24583_24590);
topo_sort_helper_STAR_.call(null,dep_24591,(depth + (1)),state);

var G__24592 = seq__24580_24587;
var G__24593 = chunk__24581_24588;
var G__24594 = count__24582_24589;
var G__24595 = (i__24583_24590 + (1));
seq__24580_24587 = G__24592;
chunk__24581_24588 = G__24593;
count__24582_24589 = G__24594;
i__24583_24590 = G__24595;
continue;
} else {
var temp__4425__auto___24596 = cljs.core.seq.call(null,seq__24580_24587);
if(temp__4425__auto___24596){
var seq__24580_24597__$1 = temp__4425__auto___24596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24580_24597__$1)){
var c__17588__auto___24598 = cljs.core.chunk_first.call(null,seq__24580_24597__$1);
var G__24599 = cljs.core.chunk_rest.call(null,seq__24580_24597__$1);
var G__24600 = c__17588__auto___24598;
var G__24601 = cljs.core.count.call(null,c__17588__auto___24598);
var G__24602 = (0);
seq__24580_24587 = G__24599;
chunk__24581_24588 = G__24600;
count__24582_24589 = G__24601;
i__24583_24590 = G__24602;
continue;
} else {
var dep_24603 = cljs.core.first.call(null,seq__24580_24597__$1);
topo_sort_helper_STAR_.call(null,dep_24603,(depth + (1)),state);

var G__24604 = cljs.core.next.call(null,seq__24580_24597__$1);
var G__24605 = null;
var G__24606 = (0);
var G__24607 = (0);
seq__24580_24587 = G__24604;
chunk__24581_24588 = G__24605;
count__24582_24589 = G__24606;
i__24583_24590 = G__24607;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24584){
var vec__24586 = p__24584;
var x = cljs.core.nth.call(null,vec__24586,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24586,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24586,x,xs,get_deps__$1){
return (function (p1__24542_SHARP_){
return clojure.set.difference.call(null,p1__24542_SHARP_,x);
});})(vec__24586,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24620 = cljs.core.seq.call(null,provides);
var chunk__24621 = null;
var count__24622 = (0);
var i__24623 = (0);
while(true){
if((i__24623 < count__24622)){
var prov = cljs.core._nth.call(null,chunk__24621,i__24623);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24624_24632 = cljs.core.seq.call(null,requires);
var chunk__24625_24633 = null;
var count__24626_24634 = (0);
var i__24627_24635 = (0);
while(true){
if((i__24627_24635 < count__24626_24634)){
var req_24636 = cljs.core._nth.call(null,chunk__24625_24633,i__24627_24635);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24636,prov);

var G__24637 = seq__24624_24632;
var G__24638 = chunk__24625_24633;
var G__24639 = count__24626_24634;
var G__24640 = (i__24627_24635 + (1));
seq__24624_24632 = G__24637;
chunk__24625_24633 = G__24638;
count__24626_24634 = G__24639;
i__24627_24635 = G__24640;
continue;
} else {
var temp__4425__auto___24641 = cljs.core.seq.call(null,seq__24624_24632);
if(temp__4425__auto___24641){
var seq__24624_24642__$1 = temp__4425__auto___24641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24624_24642__$1)){
var c__17588__auto___24643 = cljs.core.chunk_first.call(null,seq__24624_24642__$1);
var G__24644 = cljs.core.chunk_rest.call(null,seq__24624_24642__$1);
var G__24645 = c__17588__auto___24643;
var G__24646 = cljs.core.count.call(null,c__17588__auto___24643);
var G__24647 = (0);
seq__24624_24632 = G__24644;
chunk__24625_24633 = G__24645;
count__24626_24634 = G__24646;
i__24627_24635 = G__24647;
continue;
} else {
var req_24648 = cljs.core.first.call(null,seq__24624_24642__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24648,prov);

var G__24649 = cljs.core.next.call(null,seq__24624_24642__$1);
var G__24650 = null;
var G__24651 = (0);
var G__24652 = (0);
seq__24624_24632 = G__24649;
chunk__24625_24633 = G__24650;
count__24626_24634 = G__24651;
i__24627_24635 = G__24652;
continue;
}
} else {
}
}
break;
}

var G__24653 = seq__24620;
var G__24654 = chunk__24621;
var G__24655 = count__24622;
var G__24656 = (i__24623 + (1));
seq__24620 = G__24653;
chunk__24621 = G__24654;
count__24622 = G__24655;
i__24623 = G__24656;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24620);
if(temp__4425__auto__){
var seq__24620__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24620__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24620__$1);
var G__24657 = cljs.core.chunk_rest.call(null,seq__24620__$1);
var G__24658 = c__17588__auto__;
var G__24659 = cljs.core.count.call(null,c__17588__auto__);
var G__24660 = (0);
seq__24620 = G__24657;
chunk__24621 = G__24658;
count__24622 = G__24659;
i__24623 = G__24660;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24620__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24628_24661 = cljs.core.seq.call(null,requires);
var chunk__24629_24662 = null;
var count__24630_24663 = (0);
var i__24631_24664 = (0);
while(true){
if((i__24631_24664 < count__24630_24663)){
var req_24665 = cljs.core._nth.call(null,chunk__24629_24662,i__24631_24664);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24665,prov);

var G__24666 = seq__24628_24661;
var G__24667 = chunk__24629_24662;
var G__24668 = count__24630_24663;
var G__24669 = (i__24631_24664 + (1));
seq__24628_24661 = G__24666;
chunk__24629_24662 = G__24667;
count__24630_24663 = G__24668;
i__24631_24664 = G__24669;
continue;
} else {
var temp__4425__auto___24670__$1 = cljs.core.seq.call(null,seq__24628_24661);
if(temp__4425__auto___24670__$1){
var seq__24628_24671__$1 = temp__4425__auto___24670__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24628_24671__$1)){
var c__17588__auto___24672 = cljs.core.chunk_first.call(null,seq__24628_24671__$1);
var G__24673 = cljs.core.chunk_rest.call(null,seq__24628_24671__$1);
var G__24674 = c__17588__auto___24672;
var G__24675 = cljs.core.count.call(null,c__17588__auto___24672);
var G__24676 = (0);
seq__24628_24661 = G__24673;
chunk__24629_24662 = G__24674;
count__24630_24663 = G__24675;
i__24631_24664 = G__24676;
continue;
} else {
var req_24677 = cljs.core.first.call(null,seq__24628_24671__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24677,prov);

var G__24678 = cljs.core.next.call(null,seq__24628_24671__$1);
var G__24679 = null;
var G__24680 = (0);
var G__24681 = (0);
seq__24628_24661 = G__24678;
chunk__24629_24662 = G__24679;
count__24630_24663 = G__24680;
i__24631_24664 = G__24681;
continue;
}
} else {
}
}
break;
}

var G__24682 = cljs.core.next.call(null,seq__24620__$1);
var G__24683 = null;
var G__24684 = (0);
var G__24685 = (0);
seq__24620 = G__24682;
chunk__24621 = G__24683;
count__24622 = G__24684;
i__24623 = G__24685;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24690_24694 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24691_24695 = null;
var count__24692_24696 = (0);
var i__24693_24697 = (0);
while(true){
if((i__24693_24697 < count__24692_24696)){
var ns_24698 = cljs.core._nth.call(null,chunk__24691_24695,i__24693_24697);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24698);

var G__24699 = seq__24690_24694;
var G__24700 = chunk__24691_24695;
var G__24701 = count__24692_24696;
var G__24702 = (i__24693_24697 + (1));
seq__24690_24694 = G__24699;
chunk__24691_24695 = G__24700;
count__24692_24696 = G__24701;
i__24693_24697 = G__24702;
continue;
} else {
var temp__4425__auto___24703 = cljs.core.seq.call(null,seq__24690_24694);
if(temp__4425__auto___24703){
var seq__24690_24704__$1 = temp__4425__auto___24703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24690_24704__$1)){
var c__17588__auto___24705 = cljs.core.chunk_first.call(null,seq__24690_24704__$1);
var G__24706 = cljs.core.chunk_rest.call(null,seq__24690_24704__$1);
var G__24707 = c__17588__auto___24705;
var G__24708 = cljs.core.count.call(null,c__17588__auto___24705);
var G__24709 = (0);
seq__24690_24694 = G__24706;
chunk__24691_24695 = G__24707;
count__24692_24696 = G__24708;
i__24693_24697 = G__24709;
continue;
} else {
var ns_24710 = cljs.core.first.call(null,seq__24690_24704__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24710);

var G__24711 = cljs.core.next.call(null,seq__24690_24704__$1);
var G__24712 = null;
var G__24713 = (0);
var G__24714 = (0);
seq__24690_24694 = G__24711;
chunk__24691_24695 = G__24712;
count__24692_24696 = G__24713;
i__24693_24697 = G__24714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24715__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24716__i = 0, G__24716__a = new Array(arguments.length -  0);
while (G__24716__i < G__24716__a.length) {G__24716__a[G__24716__i] = arguments[G__24716__i + 0]; ++G__24716__i;}
  args = new cljs.core.IndexedSeq(G__24716__a,0);
} 
return G__24715__delegate.call(this,args);};
G__24715.cljs$lang$maxFixedArity = 0;
G__24715.cljs$lang$applyTo = (function (arglist__24717){
var args = cljs.core.seq(arglist__24717);
return G__24715__delegate(args);
});
G__24715.cljs$core$IFn$_invoke$arity$variadic = G__24715__delegate;
return G__24715;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24719 = cljs.core._EQ_;
var expr__24720 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24719.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24720))){
var path_parts = ((function (pred__24719,expr__24720){
return (function (p1__24718_SHARP_){
return clojure.string.split.call(null,p1__24718_SHARP_,/[\/\\]/);
});})(pred__24719,expr__24720))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24719,expr__24720){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24722){if((e24722 instanceof Error)){
var e = e24722;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24722;

}
}})());
});
;})(path_parts,sep,root,pred__24719,expr__24720))
} else {
if(cljs.core.truth_(pred__24719.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24720))){
return ((function (pred__24719,expr__24720){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24719,expr__24720){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24719,expr__24720))
);

return deferred.addErrback(((function (deferred,pred__24719,expr__24720){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24719,expr__24720))
);
});
;})(pred__24719,expr__24720))
} else {
return ((function (pred__24719,expr__24720){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24719,expr__24720))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24723,callback){
var map__24726 = p__24723;
var map__24726__$1 = ((((!((map__24726 == null)))?((((map__24726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24726):map__24726);
var file_msg = map__24726__$1;
var request_url = cljs.core.get.call(null,map__24726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24726,map__24726__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24726,map__24726__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__){
return (function (state_24750){
var state_val_24751 = (state_24750[(1)]);
if((state_val_24751 === (7))){
var inst_24746 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
var statearr_24752_24772 = state_24750__$1;
(statearr_24752_24772[(2)] = inst_24746);

(statearr_24752_24772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (1))){
var state_24750__$1 = state_24750;
var statearr_24753_24773 = state_24750__$1;
(statearr_24753_24773[(2)] = null);

(statearr_24753_24773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (4))){
var inst_24730 = (state_24750[(7)]);
var inst_24730__$1 = (state_24750[(2)]);
var state_24750__$1 = (function (){var statearr_24754 = state_24750;
(statearr_24754[(7)] = inst_24730__$1);

return statearr_24754;
})();
if(cljs.core.truth_(inst_24730__$1)){
var statearr_24755_24774 = state_24750__$1;
(statearr_24755_24774[(1)] = (5));

} else {
var statearr_24756_24775 = state_24750__$1;
(statearr_24756_24775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (6))){
var state_24750__$1 = state_24750;
var statearr_24757_24776 = state_24750__$1;
(statearr_24757_24776[(2)] = null);

(statearr_24757_24776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (3))){
var inst_24748 = (state_24750[(2)]);
var state_24750__$1 = state_24750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24750__$1,inst_24748);
} else {
if((state_val_24751 === (2))){
var state_24750__$1 = state_24750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24750__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24751 === (11))){
var inst_24742 = (state_24750[(2)]);
var state_24750__$1 = (function (){var statearr_24758 = state_24750;
(statearr_24758[(8)] = inst_24742);

return statearr_24758;
})();
var statearr_24759_24777 = state_24750__$1;
(statearr_24759_24777[(2)] = null);

(statearr_24759_24777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (9))){
var inst_24734 = (state_24750[(9)]);
var inst_24736 = (state_24750[(10)]);
var inst_24738 = inst_24736.call(null,inst_24734);
var state_24750__$1 = state_24750;
var statearr_24760_24778 = state_24750__$1;
(statearr_24760_24778[(2)] = inst_24738);

(statearr_24760_24778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (5))){
var inst_24730 = (state_24750[(7)]);
var inst_24732 = figwheel.client.file_reloading.blocking_load.call(null,inst_24730);
var state_24750__$1 = state_24750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24750__$1,(8),inst_24732);
} else {
if((state_val_24751 === (10))){
var inst_24734 = (state_24750[(9)]);
var inst_24740 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24734);
var state_24750__$1 = state_24750;
var statearr_24761_24779 = state_24750__$1;
(statearr_24761_24779[(2)] = inst_24740);

(statearr_24761_24779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24751 === (8))){
var inst_24736 = (state_24750[(10)]);
var inst_24730 = (state_24750[(7)]);
var inst_24734 = (state_24750[(2)]);
var inst_24735 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24736__$1 = cljs.core.get.call(null,inst_24735,inst_24730);
var state_24750__$1 = (function (){var statearr_24762 = state_24750;
(statearr_24762[(9)] = inst_24734);

(statearr_24762[(10)] = inst_24736__$1);

return statearr_24762;
})();
if(cljs.core.truth_(inst_24736__$1)){
var statearr_24763_24780 = state_24750__$1;
(statearr_24763_24780[(1)] = (9));

} else {
var statearr_24764_24781 = state_24750__$1;
(statearr_24764_24781[(1)] = (10));

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
});})(c__21639__auto__))
;
return ((function (switch__21527__auto__,c__21639__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21528__auto__ = null;
var figwheel$client$file_reloading$state_machine__21528__auto____0 = (function (){
var statearr_24768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24768[(0)] = figwheel$client$file_reloading$state_machine__21528__auto__);

(statearr_24768[(1)] = (1));

return statearr_24768;
});
var figwheel$client$file_reloading$state_machine__21528__auto____1 = (function (state_24750){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24769){if((e24769 instanceof Object)){
var ex__21531__auto__ = e24769;
var statearr_24770_24782 = state_24750;
(statearr_24770_24782[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24783 = state_24750;
state_24750 = G__24783;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21528__auto__ = function(state_24750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21528__auto____1.call(this,state_24750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21528__auto____0;
figwheel$client$file_reloading$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21528__auto____1;
return figwheel$client$file_reloading$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__))
})();
var state__21641__auto__ = (function (){var statearr_24771 = f__21640__auto__.call(null);
(statearr_24771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_24771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__))
);

return c__21639__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24784,callback){
var map__24787 = p__24784;
var map__24787__$1 = ((((!((map__24787 == null)))?((((map__24787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24787):map__24787);
var file_msg = map__24787__$1;
var namespace = cljs.core.get.call(null,map__24787__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24787,map__24787__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24787,map__24787__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24789){
var map__24792 = p__24789;
var map__24792__$1 = ((((!((map__24792 == null)))?((((map__24792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24792):map__24792);
var file_msg = map__24792__$1;
var namespace = cljs.core.get.call(null,map__24792__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24794,callback){
var map__24797 = p__24794;
var map__24797__$1 = ((((!((map__24797 == null)))?((((map__24797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24797):map__24797);
var file_msg = map__24797__$1;
var request_url = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21639__auto___24885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___24885,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___24885,out){
return (function (state_24867){
var state_val_24868 = (state_24867[(1)]);
if((state_val_24868 === (1))){
var inst_24845 = cljs.core.nth.call(null,files,(0),null);
var inst_24846 = cljs.core.nthnext.call(null,files,(1));
var inst_24847 = files;
var state_24867__$1 = (function (){var statearr_24869 = state_24867;
(statearr_24869[(7)] = inst_24847);

(statearr_24869[(8)] = inst_24845);

(statearr_24869[(9)] = inst_24846);

return statearr_24869;
})();
var statearr_24870_24886 = state_24867__$1;
(statearr_24870_24886[(2)] = null);

(statearr_24870_24886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24868 === (2))){
var inst_24847 = (state_24867[(7)]);
var inst_24850 = (state_24867[(10)]);
var inst_24850__$1 = cljs.core.nth.call(null,inst_24847,(0),null);
var inst_24851 = cljs.core.nthnext.call(null,inst_24847,(1));
var inst_24852 = (inst_24850__$1 == null);
var inst_24853 = cljs.core.not.call(null,inst_24852);
var state_24867__$1 = (function (){var statearr_24871 = state_24867;
(statearr_24871[(11)] = inst_24851);

(statearr_24871[(10)] = inst_24850__$1);

return statearr_24871;
})();
if(inst_24853){
var statearr_24872_24887 = state_24867__$1;
(statearr_24872_24887[(1)] = (4));

} else {
var statearr_24873_24888 = state_24867__$1;
(statearr_24873_24888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24868 === (3))){
var inst_24865 = (state_24867[(2)]);
var state_24867__$1 = state_24867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24867__$1,inst_24865);
} else {
if((state_val_24868 === (4))){
var inst_24850 = (state_24867[(10)]);
var inst_24855 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24850);
var state_24867__$1 = state_24867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24867__$1,(7),inst_24855);
} else {
if((state_val_24868 === (5))){
var inst_24861 = cljs.core.async.close_BANG_.call(null,out);
var state_24867__$1 = state_24867;
var statearr_24874_24889 = state_24867__$1;
(statearr_24874_24889[(2)] = inst_24861);

(statearr_24874_24889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24868 === (6))){
var inst_24863 = (state_24867[(2)]);
var state_24867__$1 = state_24867;
var statearr_24875_24890 = state_24867__$1;
(statearr_24875_24890[(2)] = inst_24863);

(statearr_24875_24890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24868 === (7))){
var inst_24851 = (state_24867[(11)]);
var inst_24857 = (state_24867[(2)]);
var inst_24858 = cljs.core.async.put_BANG_.call(null,out,inst_24857);
var inst_24847 = inst_24851;
var state_24867__$1 = (function (){var statearr_24876 = state_24867;
(statearr_24876[(12)] = inst_24858);

(statearr_24876[(7)] = inst_24847);

return statearr_24876;
})();
var statearr_24877_24891 = state_24867__$1;
(statearr_24877_24891[(2)] = null);

(statearr_24877_24891[(1)] = (2));


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
});})(c__21639__auto___24885,out))
;
return ((function (switch__21527__auto__,c__21639__auto___24885,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24881[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____1 = (function (state_24867){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__21531__auto__ = e24882;
var statearr_24883_24892 = state_24867;
(statearr_24883_24892[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24893 = state_24867;
state_24867 = G__24893;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__ = function(state_24867){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____1.call(this,state_24867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___24885,out))
})();
var state__21641__auto__ = (function (){var statearr_24884 = f__21640__auto__.call(null);
(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___24885);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___24885,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24894,opts){
var map__24898 = p__24894;
var map__24898__$1 = ((((!((map__24898 == null)))?((((map__24898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);
var eval_body__$1 = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24900){var e = e24900;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24901_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24901_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24906){
var vec__24907 = p__24906;
var k = cljs.core.nth.call(null,vec__24907,(0),null);
var v = cljs.core.nth.call(null,vec__24907,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24908){
var vec__24909 = p__24908;
var k = cljs.core.nth.call(null,vec__24909,(0),null);
var v = cljs.core.nth.call(null,vec__24909,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24913,p__24914){
var map__25161 = p__24913;
var map__25161__$1 = ((((!((map__25161 == null)))?((((map__25161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);
var opts = map__25161__$1;
var before_jsload = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25162 = p__24914;
var map__25162__$1 = ((((!((map__25162 == null)))?((((map__25162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25162):map__25162);
var msg = map__25162__$1;
var files = cljs.core.get.call(null,map__25162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25162__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25162__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25315){
var state_val_25316 = (state_25315[(1)]);
if((state_val_25316 === (7))){
var inst_25178 = (state_25315[(7)]);
var inst_25177 = (state_25315[(8)]);
var inst_25179 = (state_25315[(9)]);
var inst_25176 = (state_25315[(10)]);
var inst_25184 = cljs.core._nth.call(null,inst_25177,inst_25179);
var inst_25185 = figwheel.client.file_reloading.eval_body.call(null,inst_25184,opts);
var inst_25186 = (inst_25179 + (1));
var tmp25317 = inst_25178;
var tmp25318 = inst_25177;
var tmp25319 = inst_25176;
var inst_25176__$1 = tmp25319;
var inst_25177__$1 = tmp25318;
var inst_25178__$1 = tmp25317;
var inst_25179__$1 = inst_25186;
var state_25315__$1 = (function (){var statearr_25320 = state_25315;
(statearr_25320[(7)] = inst_25178__$1);

(statearr_25320[(8)] = inst_25177__$1);

(statearr_25320[(11)] = inst_25185);

(statearr_25320[(9)] = inst_25179__$1);

(statearr_25320[(10)] = inst_25176__$1);

return statearr_25320;
})();
var statearr_25321_25407 = state_25315__$1;
(statearr_25321_25407[(2)] = null);

(statearr_25321_25407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (20))){
var inst_25219 = (state_25315[(12)]);
var inst_25227 = figwheel.client.file_reloading.sort_files.call(null,inst_25219);
var state_25315__$1 = state_25315;
var statearr_25322_25408 = state_25315__$1;
(statearr_25322_25408[(2)] = inst_25227);

(statearr_25322_25408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (27))){
var state_25315__$1 = state_25315;
var statearr_25323_25409 = state_25315__$1;
(statearr_25323_25409[(2)] = null);

(statearr_25323_25409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (1))){
var inst_25168 = (state_25315[(13)]);
var inst_25165 = before_jsload.call(null,files);
var inst_25166 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25167 = (function (){return ((function (inst_25168,inst_25165,inst_25166,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24910_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24910_SHARP_);
});
;})(inst_25168,inst_25165,inst_25166,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25168__$1 = cljs.core.filter.call(null,inst_25167,files);
var inst_25169 = cljs.core.not_empty.call(null,inst_25168__$1);
var state_25315__$1 = (function (){var statearr_25324 = state_25315;
(statearr_25324[(14)] = inst_25165);

(statearr_25324[(13)] = inst_25168__$1);

(statearr_25324[(15)] = inst_25166);

return statearr_25324;
})();
if(cljs.core.truth_(inst_25169)){
var statearr_25325_25410 = state_25315__$1;
(statearr_25325_25410[(1)] = (2));

} else {
var statearr_25326_25411 = state_25315__$1;
(statearr_25326_25411[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (24))){
var state_25315__$1 = state_25315;
var statearr_25327_25412 = state_25315__$1;
(statearr_25327_25412[(2)] = null);

(statearr_25327_25412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (39))){
var inst_25269 = (state_25315[(16)]);
var state_25315__$1 = state_25315;
var statearr_25328_25413 = state_25315__$1;
(statearr_25328_25413[(2)] = inst_25269);

(statearr_25328_25413[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (46))){
var inst_25310 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25329_25414 = state_25315__$1;
(statearr_25329_25414[(2)] = inst_25310);

(statearr_25329_25414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (4))){
var inst_25213 = (state_25315[(2)]);
var inst_25214 = cljs.core.List.EMPTY;
var inst_25215 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25214);
var inst_25216 = (function (){return ((function (inst_25213,inst_25214,inst_25215,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24911_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24911_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24911_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_25213,inst_25214,inst_25215,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25217 = cljs.core.filter.call(null,inst_25216,files);
var inst_25218 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25219 = cljs.core.concat.call(null,inst_25217,inst_25218);
var state_25315__$1 = (function (){var statearr_25330 = state_25315;
(statearr_25330[(12)] = inst_25219);

(statearr_25330[(17)] = inst_25213);

(statearr_25330[(18)] = inst_25215);

return statearr_25330;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25331_25415 = state_25315__$1;
(statearr_25331_25415[(1)] = (16));

} else {
var statearr_25332_25416 = state_25315__$1;
(statearr_25332_25416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (15))){
var inst_25203 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25333_25417 = state_25315__$1;
(statearr_25333_25417[(2)] = inst_25203);

(statearr_25333_25417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (21))){
var inst_25229 = (state_25315[(19)]);
var inst_25229__$1 = (state_25315[(2)]);
var inst_25230 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25229__$1);
var state_25315__$1 = (function (){var statearr_25334 = state_25315;
(statearr_25334[(19)] = inst_25229__$1);

return statearr_25334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25315__$1,(22),inst_25230);
} else {
if((state_val_25316 === (31))){
var inst_25313 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25315__$1,inst_25313);
} else {
if((state_val_25316 === (32))){
var inst_25269 = (state_25315[(16)]);
var inst_25274 = inst_25269.cljs$lang$protocol_mask$partition0$;
var inst_25275 = (inst_25274 & (64));
var inst_25276 = inst_25269.cljs$core$ISeq$;
var inst_25277 = (inst_25275) || (inst_25276);
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25277)){
var statearr_25335_25418 = state_25315__$1;
(statearr_25335_25418[(1)] = (35));

} else {
var statearr_25336_25419 = state_25315__$1;
(statearr_25336_25419[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (40))){
var inst_25290 = (state_25315[(20)]);
var inst_25289 = (state_25315[(2)]);
var inst_25290__$1 = cljs.core.get.call(null,inst_25289,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25291 = cljs.core.get.call(null,inst_25289,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25292 = cljs.core.not_empty.call(null,inst_25290__$1);
var state_25315__$1 = (function (){var statearr_25337 = state_25315;
(statearr_25337[(21)] = inst_25291);

(statearr_25337[(20)] = inst_25290__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25292)){
var statearr_25338_25420 = state_25315__$1;
(statearr_25338_25420[(1)] = (41));

} else {
var statearr_25339_25421 = state_25315__$1;
(statearr_25339_25421[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (33))){
var state_25315__$1 = state_25315;
var statearr_25340_25422 = state_25315__$1;
(statearr_25340_25422[(2)] = false);

(statearr_25340_25422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (13))){
var inst_25189 = (state_25315[(22)]);
var inst_25193 = cljs.core.chunk_first.call(null,inst_25189);
var inst_25194 = cljs.core.chunk_rest.call(null,inst_25189);
var inst_25195 = cljs.core.count.call(null,inst_25193);
var inst_25176 = inst_25194;
var inst_25177 = inst_25193;
var inst_25178 = inst_25195;
var inst_25179 = (0);
var state_25315__$1 = (function (){var statearr_25341 = state_25315;
(statearr_25341[(7)] = inst_25178);

(statearr_25341[(8)] = inst_25177);

(statearr_25341[(9)] = inst_25179);

(statearr_25341[(10)] = inst_25176);

return statearr_25341;
})();
var statearr_25342_25423 = state_25315__$1;
(statearr_25342_25423[(2)] = null);

(statearr_25342_25423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (22))){
var inst_25237 = (state_25315[(23)]);
var inst_25229 = (state_25315[(19)]);
var inst_25232 = (state_25315[(24)]);
var inst_25233 = (state_25315[(25)]);
var inst_25232__$1 = (state_25315[(2)]);
var inst_25233__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25232__$1);
var inst_25234 = (function (){var all_files = inst_25229;
var res_SINGLEQUOTE_ = inst_25232__$1;
var res = inst_25233__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25237,inst_25229,inst_25232,inst_25233,inst_25232__$1,inst_25233__$1,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24912_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24912_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25237,inst_25229,inst_25232,inst_25233,inst_25232__$1,inst_25233__$1,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25235 = cljs.core.filter.call(null,inst_25234,inst_25232__$1);
var inst_25236 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25237__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25236);
var inst_25238 = cljs.core.not_empty.call(null,inst_25237__$1);
var state_25315__$1 = (function (){var statearr_25343 = state_25315;
(statearr_25343[(26)] = inst_25235);

(statearr_25343[(23)] = inst_25237__$1);

(statearr_25343[(24)] = inst_25232__$1);

(statearr_25343[(25)] = inst_25233__$1);

return statearr_25343;
})();
if(cljs.core.truth_(inst_25238)){
var statearr_25344_25424 = state_25315__$1;
(statearr_25344_25424[(1)] = (23));

} else {
var statearr_25345_25425 = state_25315__$1;
(statearr_25345_25425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (36))){
var state_25315__$1 = state_25315;
var statearr_25346_25426 = state_25315__$1;
(statearr_25346_25426[(2)] = false);

(statearr_25346_25426[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (41))){
var inst_25290 = (state_25315[(20)]);
var inst_25294 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25295 = cljs.core.map.call(null,inst_25294,inst_25290);
var inst_25296 = cljs.core.pr_str.call(null,inst_25295);
var inst_25297 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25296)].join('');
var inst_25298 = figwheel.client.utils.log.call(null,inst_25297);
var state_25315__$1 = state_25315;
var statearr_25347_25427 = state_25315__$1;
(statearr_25347_25427[(2)] = inst_25298);

(statearr_25347_25427[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (43))){
var inst_25291 = (state_25315[(21)]);
var inst_25301 = (state_25315[(2)]);
var inst_25302 = cljs.core.not_empty.call(null,inst_25291);
var state_25315__$1 = (function (){var statearr_25348 = state_25315;
(statearr_25348[(27)] = inst_25301);

return statearr_25348;
})();
if(cljs.core.truth_(inst_25302)){
var statearr_25349_25428 = state_25315__$1;
(statearr_25349_25428[(1)] = (44));

} else {
var statearr_25350_25429 = state_25315__$1;
(statearr_25350_25429[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (29))){
var inst_25269 = (state_25315[(16)]);
var inst_25235 = (state_25315[(26)]);
var inst_25237 = (state_25315[(23)]);
var inst_25229 = (state_25315[(19)]);
var inst_25232 = (state_25315[(24)]);
var inst_25233 = (state_25315[(25)]);
var inst_25265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25268 = (function (){var all_files = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
var dependencies_that_loaded = inst_25237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25269,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25265,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25267){
var map__25351 = p__25267;
var map__25351__$1 = ((((!((map__25351 == null)))?((((map__25351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25351):map__25351);
var namespace = cljs.core.get.call(null,map__25351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25269,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25265,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25269__$1 = cljs.core.group_by.call(null,inst_25268,inst_25235);
var inst_25271 = (inst_25269__$1 == null);
var inst_25272 = cljs.core.not.call(null,inst_25271);
var state_25315__$1 = (function (){var statearr_25353 = state_25315;
(statearr_25353[(16)] = inst_25269__$1);

(statearr_25353[(28)] = inst_25265);

return statearr_25353;
})();
if(inst_25272){
var statearr_25354_25430 = state_25315__$1;
(statearr_25354_25430[(1)] = (32));

} else {
var statearr_25355_25431 = state_25315__$1;
(statearr_25355_25431[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (44))){
var inst_25291 = (state_25315[(21)]);
var inst_25304 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25291);
var inst_25305 = cljs.core.pr_str.call(null,inst_25304);
var inst_25306 = [cljs.core.str("not required: "),cljs.core.str(inst_25305)].join('');
var inst_25307 = figwheel.client.utils.log.call(null,inst_25306);
var state_25315__$1 = state_25315;
var statearr_25356_25432 = state_25315__$1;
(statearr_25356_25432[(2)] = inst_25307);

(statearr_25356_25432[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (6))){
var inst_25210 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25357_25433 = state_25315__$1;
(statearr_25357_25433[(2)] = inst_25210);

(statearr_25357_25433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (28))){
var inst_25235 = (state_25315[(26)]);
var inst_25262 = (state_25315[(2)]);
var inst_25263 = cljs.core.not_empty.call(null,inst_25235);
var state_25315__$1 = (function (){var statearr_25358 = state_25315;
(statearr_25358[(29)] = inst_25262);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25263)){
var statearr_25359_25434 = state_25315__$1;
(statearr_25359_25434[(1)] = (29));

} else {
var statearr_25360_25435 = state_25315__$1;
(statearr_25360_25435[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (25))){
var inst_25233 = (state_25315[(25)]);
var inst_25249 = (state_25315[(2)]);
var inst_25250 = cljs.core.not_empty.call(null,inst_25233);
var state_25315__$1 = (function (){var statearr_25361 = state_25315;
(statearr_25361[(30)] = inst_25249);

return statearr_25361;
})();
if(cljs.core.truth_(inst_25250)){
var statearr_25362_25436 = state_25315__$1;
(statearr_25362_25436[(1)] = (26));

} else {
var statearr_25363_25437 = state_25315__$1;
(statearr_25363_25437[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (34))){
var inst_25284 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25284)){
var statearr_25364_25438 = state_25315__$1;
(statearr_25364_25438[(1)] = (38));

} else {
var statearr_25365_25439 = state_25315__$1;
(statearr_25365_25439[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (17))){
var state_25315__$1 = state_25315;
var statearr_25366_25440 = state_25315__$1;
(statearr_25366_25440[(2)] = recompile_dependents);

(statearr_25366_25440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (3))){
var state_25315__$1 = state_25315;
var statearr_25367_25441 = state_25315__$1;
(statearr_25367_25441[(2)] = null);

(statearr_25367_25441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (12))){
var inst_25206 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25368_25442 = state_25315__$1;
(statearr_25368_25442[(2)] = inst_25206);

(statearr_25368_25442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (2))){
var inst_25168 = (state_25315[(13)]);
var inst_25175 = cljs.core.seq.call(null,inst_25168);
var inst_25176 = inst_25175;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25315__$1 = (function (){var statearr_25369 = state_25315;
(statearr_25369[(7)] = inst_25178);

(statearr_25369[(8)] = inst_25177);

(statearr_25369[(9)] = inst_25179);

(statearr_25369[(10)] = inst_25176);

return statearr_25369;
})();
var statearr_25370_25443 = state_25315__$1;
(statearr_25370_25443[(2)] = null);

(statearr_25370_25443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (23))){
var inst_25235 = (state_25315[(26)]);
var inst_25237 = (state_25315[(23)]);
var inst_25229 = (state_25315[(19)]);
var inst_25232 = (state_25315[(24)]);
var inst_25233 = (state_25315[(25)]);
var inst_25240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25242 = (function (){var all_files = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
var dependencies_that_loaded = inst_25237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25240,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25241){
var map__25371 = p__25241;
var map__25371__$1 = ((((!((map__25371 == null)))?((((map__25371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25371):map__25371);
var request_url = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25240,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25243 = cljs.core.reverse.call(null,inst_25237);
var inst_25244 = cljs.core.map.call(null,inst_25242,inst_25243);
var inst_25245 = cljs.core.pr_str.call(null,inst_25244);
var inst_25246 = figwheel.client.utils.log.call(null,inst_25245);
var state_25315__$1 = (function (){var statearr_25373 = state_25315;
(statearr_25373[(31)] = inst_25240);

return statearr_25373;
})();
var statearr_25374_25444 = state_25315__$1;
(statearr_25374_25444[(2)] = inst_25246);

(statearr_25374_25444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (35))){
var state_25315__$1 = state_25315;
var statearr_25375_25445 = state_25315__$1;
(statearr_25375_25445[(2)] = true);

(statearr_25375_25445[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (19))){
var inst_25219 = (state_25315[(12)]);
var inst_25225 = figwheel.client.file_reloading.expand_files.call(null,inst_25219);
var state_25315__$1 = state_25315;
var statearr_25376_25446 = state_25315__$1;
(statearr_25376_25446[(2)] = inst_25225);

(statearr_25376_25446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (11))){
var state_25315__$1 = state_25315;
var statearr_25377_25447 = state_25315__$1;
(statearr_25377_25447[(2)] = null);

(statearr_25377_25447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (9))){
var inst_25208 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25378_25448 = state_25315__$1;
(statearr_25378_25448[(2)] = inst_25208);

(statearr_25378_25448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (5))){
var inst_25178 = (state_25315[(7)]);
var inst_25179 = (state_25315[(9)]);
var inst_25181 = (inst_25179 < inst_25178);
var inst_25182 = inst_25181;
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25182)){
var statearr_25379_25449 = state_25315__$1;
(statearr_25379_25449[(1)] = (7));

} else {
var statearr_25380_25450 = state_25315__$1;
(statearr_25380_25450[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (14))){
var inst_25189 = (state_25315[(22)]);
var inst_25198 = cljs.core.first.call(null,inst_25189);
var inst_25199 = figwheel.client.file_reloading.eval_body.call(null,inst_25198,opts);
var inst_25200 = cljs.core.next.call(null,inst_25189);
var inst_25176 = inst_25200;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25315__$1 = (function (){var statearr_25381 = state_25315;
(statearr_25381[(32)] = inst_25199);

(statearr_25381[(7)] = inst_25178);

(statearr_25381[(8)] = inst_25177);

(statearr_25381[(9)] = inst_25179);

(statearr_25381[(10)] = inst_25176);

return statearr_25381;
})();
var statearr_25382_25451 = state_25315__$1;
(statearr_25382_25451[(2)] = null);

(statearr_25382_25451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (45))){
var state_25315__$1 = state_25315;
var statearr_25383_25452 = state_25315__$1;
(statearr_25383_25452[(2)] = null);

(statearr_25383_25452[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (26))){
var inst_25235 = (state_25315[(26)]);
var inst_25237 = (state_25315[(23)]);
var inst_25229 = (state_25315[(19)]);
var inst_25232 = (state_25315[(24)]);
var inst_25233 = (state_25315[(25)]);
var inst_25252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25254 = (function (){var all_files = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
var dependencies_that_loaded = inst_25237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25252,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25253){
var map__25384 = p__25253;
var map__25384__$1 = ((((!((map__25384 == null)))?((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var namespace = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25252,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25255 = cljs.core.map.call(null,inst_25254,inst_25233);
var inst_25256 = cljs.core.pr_str.call(null,inst_25255);
var inst_25257 = figwheel.client.utils.log.call(null,inst_25256);
var inst_25258 = (function (){var all_files = inst_25229;
var res_SINGLEQUOTE_ = inst_25232;
var res = inst_25233;
var files_not_loaded = inst_25235;
var dependencies_that_loaded = inst_25237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25252,inst_25254,inst_25255,inst_25256,inst_25257,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25235,inst_25237,inst_25229,inst_25232,inst_25233,inst_25252,inst_25254,inst_25255,inst_25256,inst_25257,state_val_25316,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25259 = setTimeout(inst_25258,(10));
var state_25315__$1 = (function (){var statearr_25386 = state_25315;
(statearr_25386[(33)] = inst_25257);

(statearr_25386[(34)] = inst_25252);

return statearr_25386;
})();
var statearr_25387_25453 = state_25315__$1;
(statearr_25387_25453[(2)] = inst_25259);

(statearr_25387_25453[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (16))){
var state_25315__$1 = state_25315;
var statearr_25388_25454 = state_25315__$1;
(statearr_25388_25454[(2)] = reload_dependents);

(statearr_25388_25454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (38))){
var inst_25269 = (state_25315[(16)]);
var inst_25286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25269);
var state_25315__$1 = state_25315;
var statearr_25389_25455 = state_25315__$1;
(statearr_25389_25455[(2)] = inst_25286);

(statearr_25389_25455[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (30))){
var state_25315__$1 = state_25315;
var statearr_25390_25456 = state_25315__$1;
(statearr_25390_25456[(2)] = null);

(statearr_25390_25456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (10))){
var inst_25189 = (state_25315[(22)]);
var inst_25191 = cljs.core.chunked_seq_QMARK_.call(null,inst_25189);
var state_25315__$1 = state_25315;
if(inst_25191){
var statearr_25391_25457 = state_25315__$1;
(statearr_25391_25457[(1)] = (13));

} else {
var statearr_25392_25458 = state_25315__$1;
(statearr_25392_25458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (18))){
var inst_25223 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25223)){
var statearr_25393_25459 = state_25315__$1;
(statearr_25393_25459[(1)] = (19));

} else {
var statearr_25394_25460 = state_25315__$1;
(statearr_25394_25460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (42))){
var state_25315__$1 = state_25315;
var statearr_25395_25461 = state_25315__$1;
(statearr_25395_25461[(2)] = null);

(statearr_25395_25461[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (37))){
var inst_25281 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25396_25462 = state_25315__$1;
(statearr_25396_25462[(2)] = inst_25281);

(statearr_25396_25462[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (8))){
var inst_25189 = (state_25315[(22)]);
var inst_25176 = (state_25315[(10)]);
var inst_25189__$1 = cljs.core.seq.call(null,inst_25176);
var state_25315__$1 = (function (){var statearr_25397 = state_25315;
(statearr_25397[(22)] = inst_25189__$1);

return statearr_25397;
})();
if(inst_25189__$1){
var statearr_25398_25463 = state_25315__$1;
(statearr_25398_25463[(1)] = (10));

} else {
var statearr_25399_25464 = state_25315__$1;
(statearr_25399_25464[(1)] = (11));

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
});})(c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21527__auto__,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____0 = (function (){
var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25403[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__);

(statearr_25403[(1)] = (1));

return statearr_25403;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____1 = (function (state_25315){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_25315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object)){
var ex__21531__auto__ = e25404;
var statearr_25405_25465 = state_25315;
(statearr_25405_25465[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25466 = state_25315;
state_25315 = G__25466;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__ = function(state_25315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____1.call(this,state_25315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21641__auto__ = (function (){var statearr_25406 = f__21640__auto__.call(null);
(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_25406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__,map__25161,map__25161__$1,opts,before_jsload,on_jsload,reload_dependents,map__25162,map__25162__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21639__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25469,link){
var map__25472 = p__25469;
var map__25472__$1 = ((((!((map__25472 == null)))?((((map__25472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);
var file = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25472,map__25472__$1,file){
return (function (p1__25467_SHARP_,p2__25468_SHARP_){
if(cljs.core._EQ_.call(null,p1__25467_SHARP_,p2__25468_SHARP_)){
return p1__25467_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25472,map__25472__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25478){
var map__25479 = p__25478;
var map__25479__$1 = ((((!((map__25479 == null)))?((((map__25479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25479):map__25479);
var match_length = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25474_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25474_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25481 = [];
var len__17843__auto___25484 = arguments.length;
var i__17844__auto___25485 = (0);
while(true){
if((i__17844__auto___25485 < len__17843__auto___25484)){
args25481.push((arguments[i__17844__auto___25485]));

var G__25486 = (i__17844__auto___25485 + (1));
i__17844__auto___25485 = G__25486;
continue;
} else {
}
break;
}

var G__25483 = args25481.length;
switch (G__25483) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25481.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25488_SHARP_,p2__25489_SHARP_){
return cljs.core.assoc.call(null,p1__25488_SHARP_,cljs.core.get.call(null,p2__25489_SHARP_,key),p2__25489_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25490){
var map__25493 = p__25490;
var map__25493__$1 = ((((!((map__25493 == null)))?((((map__25493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25493):map__25493);
var f_data = map__25493__$1;
var file = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25495,files_msg){
var map__25502 = p__25495;
var map__25502__$1 = ((((!((map__25502 == null)))?((((map__25502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25502):map__25502);
var opts = map__25502__$1;
var on_cssload = cljs.core.get.call(null,map__25502__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25504_25508 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25505_25509 = null;
var count__25506_25510 = (0);
var i__25507_25511 = (0);
while(true){
if((i__25507_25511 < count__25506_25510)){
var f_25512 = cljs.core._nth.call(null,chunk__25505_25509,i__25507_25511);
figwheel.client.file_reloading.reload_css_file.call(null,f_25512);

var G__25513 = seq__25504_25508;
var G__25514 = chunk__25505_25509;
var G__25515 = count__25506_25510;
var G__25516 = (i__25507_25511 + (1));
seq__25504_25508 = G__25513;
chunk__25505_25509 = G__25514;
count__25506_25510 = G__25515;
i__25507_25511 = G__25516;
continue;
} else {
var temp__4425__auto___25517 = cljs.core.seq.call(null,seq__25504_25508);
if(temp__4425__auto___25517){
var seq__25504_25518__$1 = temp__4425__auto___25517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25504_25518__$1)){
var c__17588__auto___25519 = cljs.core.chunk_first.call(null,seq__25504_25518__$1);
var G__25520 = cljs.core.chunk_rest.call(null,seq__25504_25518__$1);
var G__25521 = c__17588__auto___25519;
var G__25522 = cljs.core.count.call(null,c__17588__auto___25519);
var G__25523 = (0);
seq__25504_25508 = G__25520;
chunk__25505_25509 = G__25521;
count__25506_25510 = G__25522;
i__25507_25511 = G__25523;
continue;
} else {
var f_25524 = cljs.core.first.call(null,seq__25504_25518__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25524);

var G__25525 = cljs.core.next.call(null,seq__25504_25518__$1);
var G__25526 = null;
var G__25527 = (0);
var G__25528 = (0);
seq__25504_25508 = G__25525;
chunk__25505_25509 = G__25526;
count__25506_25510 = G__25527;
i__25507_25511 = G__25528;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25502,map__25502__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25502,map__25502__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map