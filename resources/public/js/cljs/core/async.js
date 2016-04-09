// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21684 = [];
var len__17843__auto___21690 = arguments.length;
var i__17844__auto___21691 = (0);
while(true){
if((i__17844__auto___21691 < len__17843__auto___21690)){
args21684.push((arguments[i__17844__auto___21691]));

var G__21692 = (i__17844__auto___21691 + (1));
i__17844__auto___21691 = G__21692;
continue;
} else {
}
break;
}

var G__21686 = args21684.length;
switch (G__21686) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21684.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21687 = (function (f,blockable,meta21688){
this.f = f;
this.blockable = blockable;
this.meta21688 = meta21688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21689,meta21688__$1){
var self__ = this;
var _21689__$1 = this;
return (new cljs.core.async.t_cljs$core$async21687(self__.f,self__.blockable,meta21688__$1));
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21689){
var self__ = this;
var _21689__$1 = this;
return self__.meta21688;
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21688","meta21688",587019540,null)], null);
});

cljs.core.async.t_cljs$core$async21687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21687";

cljs.core.async.t_cljs$core$async21687.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21687");
});

cljs.core.async.__GT_t_cljs$core$async21687 = (function cljs$core$async$__GT_t_cljs$core$async21687(f__$1,blockable__$1,meta21688){
return (new cljs.core.async.t_cljs$core$async21687(f__$1,blockable__$1,meta21688));
});

}

return (new cljs.core.async.t_cljs$core$async21687(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21696 = [];
var len__17843__auto___21699 = arguments.length;
var i__17844__auto___21700 = (0);
while(true){
if((i__17844__auto___21700 < len__17843__auto___21699)){
args21696.push((arguments[i__17844__auto___21700]));

var G__21701 = (i__17844__auto___21700 + (1));
i__17844__auto___21700 = G__21701;
continue;
} else {
}
break;
}

var G__21698 = args21696.length;
switch (G__21698) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21696.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21703 = [];
var len__17843__auto___21706 = arguments.length;
var i__17844__auto___21707 = (0);
while(true){
if((i__17844__auto___21707 < len__17843__auto___21706)){
args21703.push((arguments[i__17844__auto___21707]));

var G__21708 = (i__17844__auto___21707 + (1));
i__17844__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var G__21705 = args21703.length;
switch (G__21705) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21703.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21710 = [];
var len__17843__auto___21713 = arguments.length;
var i__17844__auto___21714 = (0);
while(true){
if((i__17844__auto___21714 < len__17843__auto___21713)){
args21710.push((arguments[i__17844__auto___21714]));

var G__21715 = (i__17844__auto___21714 + (1));
i__17844__auto___21714 = G__21715;
continue;
} else {
}
break;
}

var G__21712 = args21710.length;
switch (G__21712) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21710.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21717 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21717);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21717,ret){
return (function (){
return fn1.call(null,val_21717);
});})(val_21717,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21718 = [];
var len__17843__auto___21721 = arguments.length;
var i__17844__auto___21722 = (0);
while(true){
if((i__17844__auto___21722 < len__17843__auto___21721)){
args21718.push((arguments[i__17844__auto___21722]));

var G__21723 = (i__17844__auto___21722 + (1));
i__17844__auto___21722 = G__21723;
continue;
} else {
}
break;
}

var G__21720 = args21718.length;
switch (G__21720) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21718.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17688__auto___21725 = n;
var x_21726 = (0);
while(true){
if((x_21726 < n__17688__auto___21725)){
(a[x_21726] = (0));

var G__21727 = (x_21726 + (1));
x_21726 = G__21727;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21728 = (i + (1));
i = G__21728;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21732 = (function (alt_flag,flag,meta21733){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21733 = meta21733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21734,meta21733__$1){
var self__ = this;
var _21734__$1 = this;
return (new cljs.core.async.t_cljs$core$async21732(self__.alt_flag,self__.flag,meta21733__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21734){
var self__ = this;
var _21734__$1 = this;
return self__.meta21733;
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21733","meta21733",-884888619,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21732";

cljs.core.async.t_cljs$core$async21732.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21732");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21732 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21732(alt_flag__$1,flag__$1,meta21733){
return (new cljs.core.async.t_cljs$core$async21732(alt_flag__$1,flag__$1,meta21733));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21732(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21738 = (function (alt_handler,flag,cb,meta21739){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21739 = meta21739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21740,meta21739__$1){
var self__ = this;
var _21740__$1 = this;
return (new cljs.core.async.t_cljs$core$async21738(self__.alt_handler,self__.flag,self__.cb,meta21739__$1));
});

cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21740){
var self__ = this;
var _21740__$1 = this;
return self__.meta21739;
});

cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21739","meta21739",1399365597,null)], null);
});

cljs.core.async.t_cljs$core$async21738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21738";

cljs.core.async.t_cljs$core$async21738.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21738");
});

cljs.core.async.__GT_t_cljs$core$async21738 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21738(alt_handler__$1,flag__$1,cb__$1,meta21739){
return (new cljs.core.async.t_cljs$core$async21738(alt_handler__$1,flag__$1,cb__$1,meta21739));
});

}

return (new cljs.core.async.t_cljs$core$async21738(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21741_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21742_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21742_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21743 = (i + (1));
i = G__21743;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___21749 = arguments.length;
var i__17844__auto___21750 = (0);
while(true){
if((i__17844__auto___21750 < len__17843__auto___21749)){
args__17850__auto__.push((arguments[i__17844__auto___21750]));

var G__21751 = (i__17844__auto___21750 + (1));
i__17844__auto___21750 = G__21751;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21746){
var map__21747 = p__21746;
var map__21747__$1 = ((((!((map__21747 == null)))?((((map__21747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21747):map__21747);
var opts = map__21747__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21744){
var G__21745 = cljs.core.first.call(null,seq21744);
var seq21744__$1 = cljs.core.next.call(null,seq21744);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21745,seq21744__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21752 = [];
var len__17843__auto___21802 = arguments.length;
var i__17844__auto___21803 = (0);
while(true){
if((i__17844__auto___21803 < len__17843__auto___21802)){
args21752.push((arguments[i__17844__auto___21803]));

var G__21804 = (i__17844__auto___21803 + (1));
i__17844__auto___21803 = G__21804;
continue;
} else {
}
break;
}

var G__21754 = args21752.length;
switch (G__21754) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21752.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21639__auto___21806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___21806){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___21806){
return (function (state_21778){
var state_val_21779 = (state_21778[(1)]);
if((state_val_21779 === (7))){
var inst_21774 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21780_21807 = state_21778__$1;
(statearr_21780_21807[(2)] = inst_21774);

(statearr_21780_21807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (1))){
var state_21778__$1 = state_21778;
var statearr_21781_21808 = state_21778__$1;
(statearr_21781_21808[(2)] = null);

(statearr_21781_21808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (4))){
var inst_21757 = (state_21778[(7)]);
var inst_21757__$1 = (state_21778[(2)]);
var inst_21758 = (inst_21757__$1 == null);
var state_21778__$1 = (function (){var statearr_21782 = state_21778;
(statearr_21782[(7)] = inst_21757__$1);

return statearr_21782;
})();
if(cljs.core.truth_(inst_21758)){
var statearr_21783_21809 = state_21778__$1;
(statearr_21783_21809[(1)] = (5));

} else {
var statearr_21784_21810 = state_21778__$1;
(statearr_21784_21810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (13))){
var state_21778__$1 = state_21778;
var statearr_21785_21811 = state_21778__$1;
(statearr_21785_21811[(2)] = null);

(statearr_21785_21811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (6))){
var inst_21757 = (state_21778[(7)]);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21778__$1,(11),to,inst_21757);
} else {
if((state_val_21779 === (3))){
var inst_21776 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21778__$1,inst_21776);
} else {
if((state_val_21779 === (12))){
var state_21778__$1 = state_21778;
var statearr_21786_21812 = state_21778__$1;
(statearr_21786_21812[(2)] = null);

(statearr_21786_21812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (2))){
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(4),from);
} else {
if((state_val_21779 === (11))){
var inst_21767 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21767)){
var statearr_21787_21813 = state_21778__$1;
(statearr_21787_21813[(1)] = (12));

} else {
var statearr_21788_21814 = state_21778__$1;
(statearr_21788_21814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (9))){
var state_21778__$1 = state_21778;
var statearr_21789_21815 = state_21778__$1;
(statearr_21789_21815[(2)] = null);

(statearr_21789_21815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (5))){
var state_21778__$1 = state_21778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21790_21816 = state_21778__$1;
(statearr_21790_21816[(1)] = (8));

} else {
var statearr_21791_21817 = state_21778__$1;
(statearr_21791_21817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (14))){
var inst_21772 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21792_21818 = state_21778__$1;
(statearr_21792_21818[(2)] = inst_21772);

(statearr_21792_21818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (10))){
var inst_21764 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21793_21819 = state_21778__$1;
(statearr_21793_21819[(2)] = inst_21764);

(statearr_21793_21819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (8))){
var inst_21761 = cljs.core.async.close_BANG_.call(null,to);
var state_21778__$1 = state_21778;
var statearr_21794_21820 = state_21778__$1;
(statearr_21794_21820[(2)] = inst_21761);

(statearr_21794_21820[(1)] = (10));


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
});})(c__21639__auto___21806))
;
return ((function (switch__21527__auto__,c__21639__auto___21806){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_21798 = [null,null,null,null,null,null,null,null];
(statearr_21798[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_21798[(1)] = (1));

return statearr_21798;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_21778){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_21778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e21799){if((e21799 instanceof Object)){
var ex__21531__auto__ = e21799;
var statearr_21800_21821 = state_21778;
(statearr_21800_21821[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21822 = state_21778;
state_21778 = G__21822;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_21778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_21778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___21806))
})();
var state__21641__auto__ = (function (){var statearr_21801 = f__21640__auto__.call(null);
(statearr_21801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___21806);

return statearr_21801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___21806))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22006){
var vec__22007 = p__22006;
var v = cljs.core.nth.call(null,vec__22007,(0),null);
var p = cljs.core.nth.call(null,vec__22007,(1),null);
var job = vec__22007;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21639__auto___22189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results){
return (function (state_22012){
var state_val_22013 = (state_22012[(1)]);
if((state_val_22013 === (1))){
var state_22012__$1 = state_22012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22012__$1,(2),res,v);
} else {
if((state_val_22013 === (2))){
var inst_22009 = (state_22012[(2)]);
var inst_22010 = cljs.core.async.close_BANG_.call(null,res);
var state_22012__$1 = (function (){var statearr_22014 = state_22012;
(statearr_22014[(7)] = inst_22009);

return statearr_22014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22012__$1,inst_22010);
} else {
return null;
}
}
});})(c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results))
;
return ((function (switch__21527__auto__,c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_22018 = [null,null,null,null,null,null,null,null];
(statearr_22018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__);

(statearr_22018[(1)] = (1));

return statearr_22018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1 = (function (state_22012){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22019){if((e22019 instanceof Object)){
var ex__21531__auto__ = e22019;
var statearr_22020_22190 = state_22012;
(statearr_22020_22190[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22191 = state_22012;
state_22012 = G__22191;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = function(state_22012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1.call(this,state_22012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results))
})();
var state__21641__auto__ = (function (){var statearr_22021 = f__21640__auto__.call(null);
(statearr_22021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22189);

return statearr_22021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___22189,res,vec__22007,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22022){
var vec__22023 = p__22022;
var v = cljs.core.nth.call(null,vec__22023,(0),null);
var p = cljs.core.nth.call(null,vec__22023,(1),null);
var job = vec__22023;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17688__auto___22192 = n;
var __22193 = (0);
while(true){
if((__22193 < n__17688__auto___22192)){
var G__22024_22194 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22024_22194) {
case "compute":
var c__21639__auto___22196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22193,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (__22193,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function (state_22037){
var state_val_22038 = (state_22037[(1)]);
if((state_val_22038 === (1))){
var state_22037__$1 = state_22037;
var statearr_22039_22197 = state_22037__$1;
(statearr_22039_22197[(2)] = null);

(statearr_22039_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (2))){
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22037__$1,(4),jobs);
} else {
if((state_val_22038 === (3))){
var inst_22035 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22037__$1,inst_22035);
} else {
if((state_val_22038 === (4))){
var inst_22027 = (state_22037[(2)]);
var inst_22028 = process.call(null,inst_22027);
var state_22037__$1 = state_22037;
if(cljs.core.truth_(inst_22028)){
var statearr_22040_22198 = state_22037__$1;
(statearr_22040_22198[(1)] = (5));

} else {
var statearr_22041_22199 = state_22037__$1;
(statearr_22041_22199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (5))){
var state_22037__$1 = state_22037;
var statearr_22042_22200 = state_22037__$1;
(statearr_22042_22200[(2)] = null);

(statearr_22042_22200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (6))){
var state_22037__$1 = state_22037;
var statearr_22043_22201 = state_22037__$1;
(statearr_22043_22201[(2)] = null);

(statearr_22043_22201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (7))){
var inst_22033 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22044_22202 = state_22037__$1;
(statearr_22044_22202[(2)] = inst_22033);

(statearr_22044_22202[(1)] = (3));


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
});})(__22193,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
;
return ((function (__22193,switch__21527__auto__,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_22048 = [null,null,null,null,null,null,null];
(statearr_22048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__);

(statearr_22048[(1)] = (1));

return statearr_22048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1 = (function (state_22037){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22049){if((e22049 instanceof Object)){
var ex__21531__auto__ = e22049;
var statearr_22050_22203 = state_22037;
(statearr_22050_22203[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22204 = state_22037;
state_22037 = G__22204;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = function(state_22037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1.call(this,state_22037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__;
})()
;})(__22193,switch__21527__auto__,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
})();
var state__21641__auto__ = (function (){var statearr_22051 = f__21640__auto__.call(null);
(statearr_22051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22196);

return statearr_22051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(__22193,c__21639__auto___22196,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
);


break;
case "async":
var c__21639__auto___22205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22193,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (__22193,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function (state_22064){
var state_val_22065 = (state_22064[(1)]);
if((state_val_22065 === (1))){
var state_22064__$1 = state_22064;
var statearr_22066_22206 = state_22064__$1;
(statearr_22066_22206[(2)] = null);

(statearr_22066_22206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (2))){
var state_22064__$1 = state_22064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22064__$1,(4),jobs);
} else {
if((state_val_22065 === (3))){
var inst_22062 = (state_22064[(2)]);
var state_22064__$1 = state_22064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22064__$1,inst_22062);
} else {
if((state_val_22065 === (4))){
var inst_22054 = (state_22064[(2)]);
var inst_22055 = async.call(null,inst_22054);
var state_22064__$1 = state_22064;
if(cljs.core.truth_(inst_22055)){
var statearr_22067_22207 = state_22064__$1;
(statearr_22067_22207[(1)] = (5));

} else {
var statearr_22068_22208 = state_22064__$1;
(statearr_22068_22208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (5))){
var state_22064__$1 = state_22064;
var statearr_22069_22209 = state_22064__$1;
(statearr_22069_22209[(2)] = null);

(statearr_22069_22209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (6))){
var state_22064__$1 = state_22064;
var statearr_22070_22210 = state_22064__$1;
(statearr_22070_22210[(2)] = null);

(statearr_22070_22210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22065 === (7))){
var inst_22060 = (state_22064[(2)]);
var state_22064__$1 = state_22064;
var statearr_22071_22211 = state_22064__$1;
(statearr_22071_22211[(2)] = inst_22060);

(statearr_22071_22211[(1)] = (3));


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
});})(__22193,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
;
return ((function (__22193,switch__21527__auto__,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_22075 = [null,null,null,null,null,null,null];
(statearr_22075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__);

(statearr_22075[(1)] = (1));

return statearr_22075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1 = (function (state_22064){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22076){if((e22076 instanceof Object)){
var ex__21531__auto__ = e22076;
var statearr_22077_22212 = state_22064;
(statearr_22077_22212[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22213 = state_22064;
state_22064 = G__22213;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = function(state_22064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1.call(this,state_22064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__;
})()
;})(__22193,switch__21527__auto__,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
})();
var state__21641__auto__ = (function (){var statearr_22078 = f__21640__auto__.call(null);
(statearr_22078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22205);

return statearr_22078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(__22193,c__21639__auto___22205,G__22024_22194,n__17688__auto___22192,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22214 = (__22193 + (1));
__22193 = G__22214;
continue;
} else {
}
break;
}

var c__21639__auto___22215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___22215,jobs,results,process,async){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___22215,jobs,results,process,async){
return (function (state_22100){
var state_val_22101 = (state_22100[(1)]);
if((state_val_22101 === (1))){
var state_22100__$1 = state_22100;
var statearr_22102_22216 = state_22100__$1;
(statearr_22102_22216[(2)] = null);

(statearr_22102_22216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (2))){
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22100__$1,(4),from);
} else {
if((state_val_22101 === (3))){
var inst_22098 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22100__$1,inst_22098);
} else {
if((state_val_22101 === (4))){
var inst_22081 = (state_22100[(7)]);
var inst_22081__$1 = (state_22100[(2)]);
var inst_22082 = (inst_22081__$1 == null);
var state_22100__$1 = (function (){var statearr_22103 = state_22100;
(statearr_22103[(7)] = inst_22081__$1);

return statearr_22103;
})();
if(cljs.core.truth_(inst_22082)){
var statearr_22104_22217 = state_22100__$1;
(statearr_22104_22217[(1)] = (5));

} else {
var statearr_22105_22218 = state_22100__$1;
(statearr_22105_22218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (5))){
var inst_22084 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22100__$1 = state_22100;
var statearr_22106_22219 = state_22100__$1;
(statearr_22106_22219[(2)] = inst_22084);

(statearr_22106_22219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (6))){
var inst_22081 = (state_22100[(7)]);
var inst_22086 = (state_22100[(8)]);
var inst_22086__$1 = cljs.core.async.chan.call(null,(1));
var inst_22087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22088 = [inst_22081,inst_22086__$1];
var inst_22089 = (new cljs.core.PersistentVector(null,2,(5),inst_22087,inst_22088,null));
var state_22100__$1 = (function (){var statearr_22107 = state_22100;
(statearr_22107[(8)] = inst_22086__$1);

return statearr_22107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(8),jobs,inst_22089);
} else {
if((state_val_22101 === (7))){
var inst_22096 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22108_22220 = state_22100__$1;
(statearr_22108_22220[(2)] = inst_22096);

(statearr_22108_22220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (8))){
var inst_22086 = (state_22100[(8)]);
var inst_22091 = (state_22100[(2)]);
var state_22100__$1 = (function (){var statearr_22109 = state_22100;
(statearr_22109[(9)] = inst_22091);

return statearr_22109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(9),results,inst_22086);
} else {
if((state_val_22101 === (9))){
var inst_22093 = (state_22100[(2)]);
var state_22100__$1 = (function (){var statearr_22110 = state_22100;
(statearr_22110[(10)] = inst_22093);

return statearr_22110;
})();
var statearr_22111_22221 = state_22100__$1;
(statearr_22111_22221[(2)] = null);

(statearr_22111_22221[(1)] = (2));


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
});})(c__21639__auto___22215,jobs,results,process,async))
;
return ((function (switch__21527__auto__,c__21639__auto___22215,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_22115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__);

(statearr_22115[(1)] = (1));

return statearr_22115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1 = (function (state_22100){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22116){if((e22116 instanceof Object)){
var ex__21531__auto__ = e22116;
var statearr_22117_22222 = state_22100;
(statearr_22117_22222[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22223 = state_22100;
state_22100 = G__22223;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = function(state_22100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1.call(this,state_22100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___22215,jobs,results,process,async))
})();
var state__21641__auto__ = (function (){var statearr_22118 = f__21640__auto__.call(null);
(statearr_22118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22215);

return statearr_22118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___22215,jobs,results,process,async))
);


var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__,jobs,results,process,async){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__,jobs,results,process,async){
return (function (state_22156){
var state_val_22157 = (state_22156[(1)]);
if((state_val_22157 === (7))){
var inst_22152 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22158_22224 = state_22156__$1;
(statearr_22158_22224[(2)] = inst_22152);

(statearr_22158_22224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (20))){
var state_22156__$1 = state_22156;
var statearr_22159_22225 = state_22156__$1;
(statearr_22159_22225[(2)] = null);

(statearr_22159_22225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (1))){
var state_22156__$1 = state_22156;
var statearr_22160_22226 = state_22156__$1;
(statearr_22160_22226[(2)] = null);

(statearr_22160_22226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (4))){
var inst_22121 = (state_22156[(7)]);
var inst_22121__$1 = (state_22156[(2)]);
var inst_22122 = (inst_22121__$1 == null);
var state_22156__$1 = (function (){var statearr_22161 = state_22156;
(statearr_22161[(7)] = inst_22121__$1);

return statearr_22161;
})();
if(cljs.core.truth_(inst_22122)){
var statearr_22162_22227 = state_22156__$1;
(statearr_22162_22227[(1)] = (5));

} else {
var statearr_22163_22228 = state_22156__$1;
(statearr_22163_22228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (15))){
var inst_22134 = (state_22156[(8)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22156__$1,(18),to,inst_22134);
} else {
if((state_val_22157 === (21))){
var inst_22147 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22164_22229 = state_22156__$1;
(statearr_22164_22229[(2)] = inst_22147);

(statearr_22164_22229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (13))){
var inst_22149 = (state_22156[(2)]);
var state_22156__$1 = (function (){var statearr_22165 = state_22156;
(statearr_22165[(9)] = inst_22149);

return statearr_22165;
})();
var statearr_22166_22230 = state_22156__$1;
(statearr_22166_22230[(2)] = null);

(statearr_22166_22230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (6))){
var inst_22121 = (state_22156[(7)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22156__$1,(11),inst_22121);
} else {
if((state_val_22157 === (17))){
var inst_22142 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22142)){
var statearr_22167_22231 = state_22156__$1;
(statearr_22167_22231[(1)] = (19));

} else {
var statearr_22168_22232 = state_22156__$1;
(statearr_22168_22232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (3))){
var inst_22154 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22156__$1,inst_22154);
} else {
if((state_val_22157 === (12))){
var inst_22131 = (state_22156[(10)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22156__$1,(14),inst_22131);
} else {
if((state_val_22157 === (2))){
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22156__$1,(4),results);
} else {
if((state_val_22157 === (19))){
var state_22156__$1 = state_22156;
var statearr_22169_22233 = state_22156__$1;
(statearr_22169_22233[(2)] = null);

(statearr_22169_22233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (11))){
var inst_22131 = (state_22156[(2)]);
var state_22156__$1 = (function (){var statearr_22170 = state_22156;
(statearr_22170[(10)] = inst_22131);

return statearr_22170;
})();
var statearr_22171_22234 = state_22156__$1;
(statearr_22171_22234[(2)] = null);

(statearr_22171_22234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (9))){
var state_22156__$1 = state_22156;
var statearr_22172_22235 = state_22156__$1;
(statearr_22172_22235[(2)] = null);

(statearr_22172_22235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (5))){
var state_22156__$1 = state_22156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22173_22236 = state_22156__$1;
(statearr_22173_22236[(1)] = (8));

} else {
var statearr_22174_22237 = state_22156__$1;
(statearr_22174_22237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (14))){
var inst_22136 = (state_22156[(11)]);
var inst_22134 = (state_22156[(8)]);
var inst_22134__$1 = (state_22156[(2)]);
var inst_22135 = (inst_22134__$1 == null);
var inst_22136__$1 = cljs.core.not.call(null,inst_22135);
var state_22156__$1 = (function (){var statearr_22175 = state_22156;
(statearr_22175[(11)] = inst_22136__$1);

(statearr_22175[(8)] = inst_22134__$1);

return statearr_22175;
})();
if(inst_22136__$1){
var statearr_22176_22238 = state_22156__$1;
(statearr_22176_22238[(1)] = (15));

} else {
var statearr_22177_22239 = state_22156__$1;
(statearr_22177_22239[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (16))){
var inst_22136 = (state_22156[(11)]);
var state_22156__$1 = state_22156;
var statearr_22178_22240 = state_22156__$1;
(statearr_22178_22240[(2)] = inst_22136);

(statearr_22178_22240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (10))){
var inst_22128 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22179_22241 = state_22156__$1;
(statearr_22179_22241[(2)] = inst_22128);

(statearr_22179_22241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (18))){
var inst_22139 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22180_22242 = state_22156__$1;
(statearr_22180_22242[(2)] = inst_22139);

(statearr_22180_22242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (8))){
var inst_22125 = cljs.core.async.close_BANG_.call(null,to);
var state_22156__$1 = state_22156;
var statearr_22181_22243 = state_22156__$1;
(statearr_22181_22243[(2)] = inst_22125);

(statearr_22181_22243[(1)] = (10));


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
});})(c__21639__auto__,jobs,results,process,async))
;
return ((function (switch__21527__auto__,c__21639__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_22185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__);

(statearr_22185[(1)] = (1));

return statearr_22185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1 = (function (state_22156){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22186){if((e22186 instanceof Object)){
var ex__21531__auto__ = e22186;
var statearr_22187_22244 = state_22156;
(statearr_22187_22244[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22245 = state_22156;
state_22156 = G__22245;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__ = function(state_22156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1.call(this,state_22156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__,jobs,results,process,async))
})();
var state__21641__auto__ = (function (){var statearr_22188 = f__21640__auto__.call(null);
(statearr_22188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_22188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__,jobs,results,process,async))
);

return c__21639__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22246 = [];
var len__17843__auto___22249 = arguments.length;
var i__17844__auto___22250 = (0);
while(true){
if((i__17844__auto___22250 < len__17843__auto___22249)){
args22246.push((arguments[i__17844__auto___22250]));

var G__22251 = (i__17844__auto___22250 + (1));
i__17844__auto___22250 = G__22251;
continue;
} else {
}
break;
}

var G__22248 = args22246.length;
switch (G__22248) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22246.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22253 = [];
var len__17843__auto___22256 = arguments.length;
var i__17844__auto___22257 = (0);
while(true){
if((i__17844__auto___22257 < len__17843__auto___22256)){
args22253.push((arguments[i__17844__auto___22257]));

var G__22258 = (i__17844__auto___22257 + (1));
i__17844__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var G__22255 = args22253.length;
switch (G__22255) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22253.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22260 = [];
var len__17843__auto___22313 = arguments.length;
var i__17844__auto___22314 = (0);
while(true){
if((i__17844__auto___22314 < len__17843__auto___22313)){
args22260.push((arguments[i__17844__auto___22314]));

var G__22315 = (i__17844__auto___22314 + (1));
i__17844__auto___22314 = G__22315;
continue;
} else {
}
break;
}

var G__22262 = args22260.length;
switch (G__22262) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22260.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21639__auto___22317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___22317,tc,fc){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___22317,tc,fc){
return (function (state_22288){
var state_val_22289 = (state_22288[(1)]);
if((state_val_22289 === (7))){
var inst_22284 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22290_22318 = state_22288__$1;
(statearr_22290_22318[(2)] = inst_22284);

(statearr_22290_22318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (1))){
var state_22288__$1 = state_22288;
var statearr_22291_22319 = state_22288__$1;
(statearr_22291_22319[(2)] = null);

(statearr_22291_22319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (4))){
var inst_22265 = (state_22288[(7)]);
var inst_22265__$1 = (state_22288[(2)]);
var inst_22266 = (inst_22265__$1 == null);
var state_22288__$1 = (function (){var statearr_22292 = state_22288;
(statearr_22292[(7)] = inst_22265__$1);

return statearr_22292;
})();
if(cljs.core.truth_(inst_22266)){
var statearr_22293_22320 = state_22288__$1;
(statearr_22293_22320[(1)] = (5));

} else {
var statearr_22294_22321 = state_22288__$1;
(statearr_22294_22321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (13))){
var state_22288__$1 = state_22288;
var statearr_22295_22322 = state_22288__$1;
(statearr_22295_22322[(2)] = null);

(statearr_22295_22322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (6))){
var inst_22265 = (state_22288[(7)]);
var inst_22271 = p.call(null,inst_22265);
var state_22288__$1 = state_22288;
if(cljs.core.truth_(inst_22271)){
var statearr_22296_22323 = state_22288__$1;
(statearr_22296_22323[(1)] = (9));

} else {
var statearr_22297_22324 = state_22288__$1;
(statearr_22297_22324[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (3))){
var inst_22286 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22288__$1,inst_22286);
} else {
if((state_val_22289 === (12))){
var state_22288__$1 = state_22288;
var statearr_22298_22325 = state_22288__$1;
(statearr_22298_22325[(2)] = null);

(statearr_22298_22325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (2))){
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22288__$1,(4),ch);
} else {
if((state_val_22289 === (11))){
var inst_22265 = (state_22288[(7)]);
var inst_22275 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22288__$1,(8),inst_22275,inst_22265);
} else {
if((state_val_22289 === (9))){
var state_22288__$1 = state_22288;
var statearr_22299_22326 = state_22288__$1;
(statearr_22299_22326[(2)] = tc);

(statearr_22299_22326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (5))){
var inst_22268 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22269 = cljs.core.async.close_BANG_.call(null,fc);
var state_22288__$1 = (function (){var statearr_22300 = state_22288;
(statearr_22300[(8)] = inst_22268);

return statearr_22300;
})();
var statearr_22301_22327 = state_22288__$1;
(statearr_22301_22327[(2)] = inst_22269);

(statearr_22301_22327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (14))){
var inst_22282 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22302_22328 = state_22288__$1;
(statearr_22302_22328[(2)] = inst_22282);

(statearr_22302_22328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (10))){
var state_22288__$1 = state_22288;
var statearr_22303_22329 = state_22288__$1;
(statearr_22303_22329[(2)] = fc);

(statearr_22303_22329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (8))){
var inst_22277 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
if(cljs.core.truth_(inst_22277)){
var statearr_22304_22330 = state_22288__$1;
(statearr_22304_22330[(1)] = (12));

} else {
var statearr_22305_22331 = state_22288__$1;
(statearr_22305_22331[(1)] = (13));

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
});})(c__21639__auto___22317,tc,fc))
;
return ((function (switch__21527__auto__,c__21639__auto___22317,tc,fc){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_22309 = [null,null,null,null,null,null,null,null,null];
(statearr_22309[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_22309[(1)] = (1));

return statearr_22309;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_22288){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22310){if((e22310 instanceof Object)){
var ex__21531__auto__ = e22310;
var statearr_22311_22332 = state_22288;
(statearr_22311_22332[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22333 = state_22288;
state_22288 = G__22333;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_22288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_22288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___22317,tc,fc))
})();
var state__21641__auto__ = (function (){var statearr_22312 = f__21640__auto__.call(null);
(statearr_22312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22317);

return statearr_22312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___22317,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__){
return (function (state_22397){
var state_val_22398 = (state_22397[(1)]);
if((state_val_22398 === (7))){
var inst_22393 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22399_22420 = state_22397__$1;
(statearr_22399_22420[(2)] = inst_22393);

(statearr_22399_22420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (1))){
var inst_22377 = init;
var state_22397__$1 = (function (){var statearr_22400 = state_22397;
(statearr_22400[(7)] = inst_22377);

return statearr_22400;
})();
var statearr_22401_22421 = state_22397__$1;
(statearr_22401_22421[(2)] = null);

(statearr_22401_22421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (4))){
var inst_22380 = (state_22397[(8)]);
var inst_22380__$1 = (state_22397[(2)]);
var inst_22381 = (inst_22380__$1 == null);
var state_22397__$1 = (function (){var statearr_22402 = state_22397;
(statearr_22402[(8)] = inst_22380__$1);

return statearr_22402;
})();
if(cljs.core.truth_(inst_22381)){
var statearr_22403_22422 = state_22397__$1;
(statearr_22403_22422[(1)] = (5));

} else {
var statearr_22404_22423 = state_22397__$1;
(statearr_22404_22423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (6))){
var inst_22380 = (state_22397[(8)]);
var inst_22377 = (state_22397[(7)]);
var inst_22384 = (state_22397[(9)]);
var inst_22384__$1 = f.call(null,inst_22377,inst_22380);
var inst_22385 = cljs.core.reduced_QMARK_.call(null,inst_22384__$1);
var state_22397__$1 = (function (){var statearr_22405 = state_22397;
(statearr_22405[(9)] = inst_22384__$1);

return statearr_22405;
})();
if(inst_22385){
var statearr_22406_22424 = state_22397__$1;
(statearr_22406_22424[(1)] = (8));

} else {
var statearr_22407_22425 = state_22397__$1;
(statearr_22407_22425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (3))){
var inst_22395 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22397__$1,inst_22395);
} else {
if((state_val_22398 === (2))){
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22397__$1,(4),ch);
} else {
if((state_val_22398 === (9))){
var inst_22384 = (state_22397[(9)]);
var inst_22377 = inst_22384;
var state_22397__$1 = (function (){var statearr_22408 = state_22397;
(statearr_22408[(7)] = inst_22377);

return statearr_22408;
})();
var statearr_22409_22426 = state_22397__$1;
(statearr_22409_22426[(2)] = null);

(statearr_22409_22426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (5))){
var inst_22377 = (state_22397[(7)]);
var state_22397__$1 = state_22397;
var statearr_22410_22427 = state_22397__$1;
(statearr_22410_22427[(2)] = inst_22377);

(statearr_22410_22427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (10))){
var inst_22391 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22411_22428 = state_22397__$1;
(statearr_22411_22428[(2)] = inst_22391);

(statearr_22411_22428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (8))){
var inst_22384 = (state_22397[(9)]);
var inst_22387 = cljs.core.deref.call(null,inst_22384);
var state_22397__$1 = state_22397;
var statearr_22412_22429 = state_22397__$1;
(statearr_22412_22429[(2)] = inst_22387);

(statearr_22412_22429[(1)] = (10));


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
});})(c__21639__auto__))
;
return ((function (switch__21527__auto__,c__21639__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21528__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21528__auto____0 = (function (){
var statearr_22416 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22416[(0)] = cljs$core$async$reduce_$_state_machine__21528__auto__);

(statearr_22416[(1)] = (1));

return statearr_22416;
});
var cljs$core$async$reduce_$_state_machine__21528__auto____1 = (function (state_22397){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22417){if((e22417 instanceof Object)){
var ex__21531__auto__ = e22417;
var statearr_22418_22430 = state_22397;
(statearr_22418_22430[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22431 = state_22397;
state_22397 = G__22431;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21528__auto__ = function(state_22397){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21528__auto____1.call(this,state_22397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21528__auto____0;
cljs$core$async$reduce_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21528__auto____1;
return cljs$core$async$reduce_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__))
})();
var state__21641__auto__ = (function (){var statearr_22419 = f__21640__auto__.call(null);
(statearr_22419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_22419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__))
);

return c__21639__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22432 = [];
var len__17843__auto___22484 = arguments.length;
var i__17844__auto___22485 = (0);
while(true){
if((i__17844__auto___22485 < len__17843__auto___22484)){
args22432.push((arguments[i__17844__auto___22485]));

var G__22486 = (i__17844__auto___22485 + (1));
i__17844__auto___22485 = G__22486;
continue;
} else {
}
break;
}

var G__22434 = args22432.length;
switch (G__22434) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22432.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__){
return (function (state_22459){
var state_val_22460 = (state_22459[(1)]);
if((state_val_22460 === (7))){
var inst_22441 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
var statearr_22461_22488 = state_22459__$1;
(statearr_22461_22488[(2)] = inst_22441);

(statearr_22461_22488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (1))){
var inst_22435 = cljs.core.seq.call(null,coll);
var inst_22436 = inst_22435;
var state_22459__$1 = (function (){var statearr_22462 = state_22459;
(statearr_22462[(7)] = inst_22436);

return statearr_22462;
})();
var statearr_22463_22489 = state_22459__$1;
(statearr_22463_22489[(2)] = null);

(statearr_22463_22489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (4))){
var inst_22436 = (state_22459[(7)]);
var inst_22439 = cljs.core.first.call(null,inst_22436);
var state_22459__$1 = state_22459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22459__$1,(7),ch,inst_22439);
} else {
if((state_val_22460 === (13))){
var inst_22453 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
var statearr_22464_22490 = state_22459__$1;
(statearr_22464_22490[(2)] = inst_22453);

(statearr_22464_22490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (6))){
var inst_22444 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
if(cljs.core.truth_(inst_22444)){
var statearr_22465_22491 = state_22459__$1;
(statearr_22465_22491[(1)] = (8));

} else {
var statearr_22466_22492 = state_22459__$1;
(statearr_22466_22492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (3))){
var inst_22457 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22459__$1,inst_22457);
} else {
if((state_val_22460 === (12))){
var state_22459__$1 = state_22459;
var statearr_22467_22493 = state_22459__$1;
(statearr_22467_22493[(2)] = null);

(statearr_22467_22493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (2))){
var inst_22436 = (state_22459[(7)]);
var state_22459__$1 = state_22459;
if(cljs.core.truth_(inst_22436)){
var statearr_22468_22494 = state_22459__$1;
(statearr_22468_22494[(1)] = (4));

} else {
var statearr_22469_22495 = state_22459__$1;
(statearr_22469_22495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (11))){
var inst_22450 = cljs.core.async.close_BANG_.call(null,ch);
var state_22459__$1 = state_22459;
var statearr_22470_22496 = state_22459__$1;
(statearr_22470_22496[(2)] = inst_22450);

(statearr_22470_22496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (9))){
var state_22459__$1 = state_22459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22471_22497 = state_22459__$1;
(statearr_22471_22497[(1)] = (11));

} else {
var statearr_22472_22498 = state_22459__$1;
(statearr_22472_22498[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (5))){
var inst_22436 = (state_22459[(7)]);
var state_22459__$1 = state_22459;
var statearr_22473_22499 = state_22459__$1;
(statearr_22473_22499[(2)] = inst_22436);

(statearr_22473_22499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (10))){
var inst_22455 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
var statearr_22474_22500 = state_22459__$1;
(statearr_22474_22500[(2)] = inst_22455);

(statearr_22474_22500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22460 === (8))){
var inst_22436 = (state_22459[(7)]);
var inst_22446 = cljs.core.next.call(null,inst_22436);
var inst_22436__$1 = inst_22446;
var state_22459__$1 = (function (){var statearr_22475 = state_22459;
(statearr_22475[(7)] = inst_22436__$1);

return statearr_22475;
})();
var statearr_22476_22501 = state_22459__$1;
(statearr_22476_22501[(2)] = null);

(statearr_22476_22501[(1)] = (2));


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
});})(c__21639__auto__))
;
return ((function (switch__21527__auto__,c__21639__auto__){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_22480 = [null,null,null,null,null,null,null,null];
(statearr_22480[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_22480[(1)] = (1));

return statearr_22480;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_22459){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22481){if((e22481 instanceof Object)){
var ex__21531__auto__ = e22481;
var statearr_22482_22502 = state_22459;
(statearr_22482_22502[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22503 = state_22459;
state_22459 = G__22503;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_22459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_22459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__))
})();
var state__21641__auto__ = (function (){var statearr_22483 = f__21640__auto__.call(null);
(statearr_22483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_22483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__))
);

return c__21639__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22725 = (function (mult,ch,cs,meta22726){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22726 = meta22726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22727,meta22726__$1){
var self__ = this;
var _22727__$1 = this;
return (new cljs.core.async.t_cljs$core$async22725(self__.mult,self__.ch,self__.cs,meta22726__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22727){
var self__ = this;
var _22727__$1 = this;
return self__.meta22726;
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22726","meta22726",-1932202519,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22725";

cljs.core.async.t_cljs$core$async22725.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22725");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22725 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22725(mult__$1,ch__$1,cs__$1,meta22726){
return (new cljs.core.async.t_cljs$core$async22725(mult__$1,ch__$1,cs__$1,meta22726));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22725(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21639__auto___22946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___22946,cs,m,dchan,dctr,done){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___22946,cs,m,dchan,dctr,done){
return (function (state_22858){
var state_val_22859 = (state_22858[(1)]);
if((state_val_22859 === (7))){
var inst_22854 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22860_22947 = state_22858__$1;
(statearr_22860_22947[(2)] = inst_22854);

(statearr_22860_22947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (20))){
var inst_22759 = (state_22858[(7)]);
var inst_22769 = cljs.core.first.call(null,inst_22759);
var inst_22770 = cljs.core.nth.call(null,inst_22769,(0),null);
var inst_22771 = cljs.core.nth.call(null,inst_22769,(1),null);
var state_22858__$1 = (function (){var statearr_22861 = state_22858;
(statearr_22861[(8)] = inst_22770);

return statearr_22861;
})();
if(cljs.core.truth_(inst_22771)){
var statearr_22862_22948 = state_22858__$1;
(statearr_22862_22948[(1)] = (22));

} else {
var statearr_22863_22949 = state_22858__$1;
(statearr_22863_22949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (27))){
var inst_22799 = (state_22858[(9)]);
var inst_22806 = (state_22858[(10)]);
var inst_22730 = (state_22858[(11)]);
var inst_22801 = (state_22858[(12)]);
var inst_22806__$1 = cljs.core._nth.call(null,inst_22799,inst_22801);
var inst_22807 = cljs.core.async.put_BANG_.call(null,inst_22806__$1,inst_22730,done);
var state_22858__$1 = (function (){var statearr_22864 = state_22858;
(statearr_22864[(10)] = inst_22806__$1);

return statearr_22864;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22865_22950 = state_22858__$1;
(statearr_22865_22950[(1)] = (30));

} else {
var statearr_22866_22951 = state_22858__$1;
(statearr_22866_22951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (1))){
var state_22858__$1 = state_22858;
var statearr_22867_22952 = state_22858__$1;
(statearr_22867_22952[(2)] = null);

(statearr_22867_22952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (24))){
var inst_22759 = (state_22858[(7)]);
var inst_22776 = (state_22858[(2)]);
var inst_22777 = cljs.core.next.call(null,inst_22759);
var inst_22739 = inst_22777;
var inst_22740 = null;
var inst_22741 = (0);
var inst_22742 = (0);
var state_22858__$1 = (function (){var statearr_22868 = state_22858;
(statearr_22868[(13)] = inst_22739);

(statearr_22868[(14)] = inst_22741);

(statearr_22868[(15)] = inst_22742);

(statearr_22868[(16)] = inst_22740);

(statearr_22868[(17)] = inst_22776);

return statearr_22868;
})();
var statearr_22869_22953 = state_22858__$1;
(statearr_22869_22953[(2)] = null);

(statearr_22869_22953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (39))){
var state_22858__$1 = state_22858;
var statearr_22873_22954 = state_22858__$1;
(statearr_22873_22954[(2)] = null);

(statearr_22873_22954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (4))){
var inst_22730 = (state_22858[(11)]);
var inst_22730__$1 = (state_22858[(2)]);
var inst_22731 = (inst_22730__$1 == null);
var state_22858__$1 = (function (){var statearr_22874 = state_22858;
(statearr_22874[(11)] = inst_22730__$1);

return statearr_22874;
})();
if(cljs.core.truth_(inst_22731)){
var statearr_22875_22955 = state_22858__$1;
(statearr_22875_22955[(1)] = (5));

} else {
var statearr_22876_22956 = state_22858__$1;
(statearr_22876_22956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (15))){
var inst_22739 = (state_22858[(13)]);
var inst_22741 = (state_22858[(14)]);
var inst_22742 = (state_22858[(15)]);
var inst_22740 = (state_22858[(16)]);
var inst_22755 = (state_22858[(2)]);
var inst_22756 = (inst_22742 + (1));
var tmp22870 = inst_22739;
var tmp22871 = inst_22741;
var tmp22872 = inst_22740;
var inst_22739__$1 = tmp22870;
var inst_22740__$1 = tmp22872;
var inst_22741__$1 = tmp22871;
var inst_22742__$1 = inst_22756;
var state_22858__$1 = (function (){var statearr_22877 = state_22858;
(statearr_22877[(13)] = inst_22739__$1);

(statearr_22877[(14)] = inst_22741__$1);

(statearr_22877[(15)] = inst_22742__$1);

(statearr_22877[(16)] = inst_22740__$1);

(statearr_22877[(18)] = inst_22755);

return statearr_22877;
})();
var statearr_22878_22957 = state_22858__$1;
(statearr_22878_22957[(2)] = null);

(statearr_22878_22957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (21))){
var inst_22780 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22882_22958 = state_22858__$1;
(statearr_22882_22958[(2)] = inst_22780);

(statearr_22882_22958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (31))){
var inst_22806 = (state_22858[(10)]);
var inst_22810 = done.call(null,null);
var inst_22811 = cljs.core.async.untap_STAR_.call(null,m,inst_22806);
var state_22858__$1 = (function (){var statearr_22883 = state_22858;
(statearr_22883[(19)] = inst_22810);

return statearr_22883;
})();
var statearr_22884_22959 = state_22858__$1;
(statearr_22884_22959[(2)] = inst_22811);

(statearr_22884_22959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (32))){
var inst_22799 = (state_22858[(9)]);
var inst_22798 = (state_22858[(20)]);
var inst_22801 = (state_22858[(12)]);
var inst_22800 = (state_22858[(21)]);
var inst_22813 = (state_22858[(2)]);
var inst_22814 = (inst_22801 + (1));
var tmp22879 = inst_22799;
var tmp22880 = inst_22798;
var tmp22881 = inst_22800;
var inst_22798__$1 = tmp22880;
var inst_22799__$1 = tmp22879;
var inst_22800__$1 = tmp22881;
var inst_22801__$1 = inst_22814;
var state_22858__$1 = (function (){var statearr_22885 = state_22858;
(statearr_22885[(9)] = inst_22799__$1);

(statearr_22885[(22)] = inst_22813);

(statearr_22885[(20)] = inst_22798__$1);

(statearr_22885[(12)] = inst_22801__$1);

(statearr_22885[(21)] = inst_22800__$1);

return statearr_22885;
})();
var statearr_22886_22960 = state_22858__$1;
(statearr_22886_22960[(2)] = null);

(statearr_22886_22960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (40))){
var inst_22826 = (state_22858[(23)]);
var inst_22830 = done.call(null,null);
var inst_22831 = cljs.core.async.untap_STAR_.call(null,m,inst_22826);
var state_22858__$1 = (function (){var statearr_22887 = state_22858;
(statearr_22887[(24)] = inst_22830);

return statearr_22887;
})();
var statearr_22888_22961 = state_22858__$1;
(statearr_22888_22961[(2)] = inst_22831);

(statearr_22888_22961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (33))){
var inst_22817 = (state_22858[(25)]);
var inst_22819 = cljs.core.chunked_seq_QMARK_.call(null,inst_22817);
var state_22858__$1 = state_22858;
if(inst_22819){
var statearr_22889_22962 = state_22858__$1;
(statearr_22889_22962[(1)] = (36));

} else {
var statearr_22890_22963 = state_22858__$1;
(statearr_22890_22963[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (13))){
var inst_22749 = (state_22858[(26)]);
var inst_22752 = cljs.core.async.close_BANG_.call(null,inst_22749);
var state_22858__$1 = state_22858;
var statearr_22891_22964 = state_22858__$1;
(statearr_22891_22964[(2)] = inst_22752);

(statearr_22891_22964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (22))){
var inst_22770 = (state_22858[(8)]);
var inst_22773 = cljs.core.async.close_BANG_.call(null,inst_22770);
var state_22858__$1 = state_22858;
var statearr_22892_22965 = state_22858__$1;
(statearr_22892_22965[(2)] = inst_22773);

(statearr_22892_22965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (36))){
var inst_22817 = (state_22858[(25)]);
var inst_22821 = cljs.core.chunk_first.call(null,inst_22817);
var inst_22822 = cljs.core.chunk_rest.call(null,inst_22817);
var inst_22823 = cljs.core.count.call(null,inst_22821);
var inst_22798 = inst_22822;
var inst_22799 = inst_22821;
var inst_22800 = inst_22823;
var inst_22801 = (0);
var state_22858__$1 = (function (){var statearr_22893 = state_22858;
(statearr_22893[(9)] = inst_22799);

(statearr_22893[(20)] = inst_22798);

(statearr_22893[(12)] = inst_22801);

(statearr_22893[(21)] = inst_22800);

return statearr_22893;
})();
var statearr_22894_22966 = state_22858__$1;
(statearr_22894_22966[(2)] = null);

(statearr_22894_22966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (41))){
var inst_22817 = (state_22858[(25)]);
var inst_22833 = (state_22858[(2)]);
var inst_22834 = cljs.core.next.call(null,inst_22817);
var inst_22798 = inst_22834;
var inst_22799 = null;
var inst_22800 = (0);
var inst_22801 = (0);
var state_22858__$1 = (function (){var statearr_22895 = state_22858;
(statearr_22895[(9)] = inst_22799);

(statearr_22895[(20)] = inst_22798);

(statearr_22895[(12)] = inst_22801);

(statearr_22895[(27)] = inst_22833);

(statearr_22895[(21)] = inst_22800);

return statearr_22895;
})();
var statearr_22896_22967 = state_22858__$1;
(statearr_22896_22967[(2)] = null);

(statearr_22896_22967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (43))){
var state_22858__$1 = state_22858;
var statearr_22897_22968 = state_22858__$1;
(statearr_22897_22968[(2)] = null);

(statearr_22897_22968[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (29))){
var inst_22842 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22898_22969 = state_22858__$1;
(statearr_22898_22969[(2)] = inst_22842);

(statearr_22898_22969[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (44))){
var inst_22851 = (state_22858[(2)]);
var state_22858__$1 = (function (){var statearr_22899 = state_22858;
(statearr_22899[(28)] = inst_22851);

return statearr_22899;
})();
var statearr_22900_22970 = state_22858__$1;
(statearr_22900_22970[(2)] = null);

(statearr_22900_22970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (6))){
var inst_22790 = (state_22858[(29)]);
var inst_22789 = cljs.core.deref.call(null,cs);
var inst_22790__$1 = cljs.core.keys.call(null,inst_22789);
var inst_22791 = cljs.core.count.call(null,inst_22790__$1);
var inst_22792 = cljs.core.reset_BANG_.call(null,dctr,inst_22791);
var inst_22797 = cljs.core.seq.call(null,inst_22790__$1);
var inst_22798 = inst_22797;
var inst_22799 = null;
var inst_22800 = (0);
var inst_22801 = (0);
var state_22858__$1 = (function (){var statearr_22901 = state_22858;
(statearr_22901[(9)] = inst_22799);

(statearr_22901[(30)] = inst_22792);

(statearr_22901[(20)] = inst_22798);

(statearr_22901[(12)] = inst_22801);

(statearr_22901[(21)] = inst_22800);

(statearr_22901[(29)] = inst_22790__$1);

return statearr_22901;
})();
var statearr_22902_22971 = state_22858__$1;
(statearr_22902_22971[(2)] = null);

(statearr_22902_22971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (28))){
var inst_22798 = (state_22858[(20)]);
var inst_22817 = (state_22858[(25)]);
var inst_22817__$1 = cljs.core.seq.call(null,inst_22798);
var state_22858__$1 = (function (){var statearr_22903 = state_22858;
(statearr_22903[(25)] = inst_22817__$1);

return statearr_22903;
})();
if(inst_22817__$1){
var statearr_22904_22972 = state_22858__$1;
(statearr_22904_22972[(1)] = (33));

} else {
var statearr_22905_22973 = state_22858__$1;
(statearr_22905_22973[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (25))){
var inst_22801 = (state_22858[(12)]);
var inst_22800 = (state_22858[(21)]);
var inst_22803 = (inst_22801 < inst_22800);
var inst_22804 = inst_22803;
var state_22858__$1 = state_22858;
if(cljs.core.truth_(inst_22804)){
var statearr_22906_22974 = state_22858__$1;
(statearr_22906_22974[(1)] = (27));

} else {
var statearr_22907_22975 = state_22858__$1;
(statearr_22907_22975[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (34))){
var state_22858__$1 = state_22858;
var statearr_22908_22976 = state_22858__$1;
(statearr_22908_22976[(2)] = null);

(statearr_22908_22976[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (17))){
var state_22858__$1 = state_22858;
var statearr_22909_22977 = state_22858__$1;
(statearr_22909_22977[(2)] = null);

(statearr_22909_22977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (3))){
var inst_22856 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22858__$1,inst_22856);
} else {
if((state_val_22859 === (12))){
var inst_22785 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22910_22978 = state_22858__$1;
(statearr_22910_22978[(2)] = inst_22785);

(statearr_22910_22978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (2))){
var state_22858__$1 = state_22858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22858__$1,(4),ch);
} else {
if((state_val_22859 === (23))){
var state_22858__$1 = state_22858;
var statearr_22911_22979 = state_22858__$1;
(statearr_22911_22979[(2)] = null);

(statearr_22911_22979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (35))){
var inst_22840 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22912_22980 = state_22858__$1;
(statearr_22912_22980[(2)] = inst_22840);

(statearr_22912_22980[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (19))){
var inst_22759 = (state_22858[(7)]);
var inst_22763 = cljs.core.chunk_first.call(null,inst_22759);
var inst_22764 = cljs.core.chunk_rest.call(null,inst_22759);
var inst_22765 = cljs.core.count.call(null,inst_22763);
var inst_22739 = inst_22764;
var inst_22740 = inst_22763;
var inst_22741 = inst_22765;
var inst_22742 = (0);
var state_22858__$1 = (function (){var statearr_22913 = state_22858;
(statearr_22913[(13)] = inst_22739);

(statearr_22913[(14)] = inst_22741);

(statearr_22913[(15)] = inst_22742);

(statearr_22913[(16)] = inst_22740);

return statearr_22913;
})();
var statearr_22914_22981 = state_22858__$1;
(statearr_22914_22981[(2)] = null);

(statearr_22914_22981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (11))){
var inst_22739 = (state_22858[(13)]);
var inst_22759 = (state_22858[(7)]);
var inst_22759__$1 = cljs.core.seq.call(null,inst_22739);
var state_22858__$1 = (function (){var statearr_22915 = state_22858;
(statearr_22915[(7)] = inst_22759__$1);

return statearr_22915;
})();
if(inst_22759__$1){
var statearr_22916_22982 = state_22858__$1;
(statearr_22916_22982[(1)] = (16));

} else {
var statearr_22917_22983 = state_22858__$1;
(statearr_22917_22983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (9))){
var inst_22787 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22918_22984 = state_22858__$1;
(statearr_22918_22984[(2)] = inst_22787);

(statearr_22918_22984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (5))){
var inst_22737 = cljs.core.deref.call(null,cs);
var inst_22738 = cljs.core.seq.call(null,inst_22737);
var inst_22739 = inst_22738;
var inst_22740 = null;
var inst_22741 = (0);
var inst_22742 = (0);
var state_22858__$1 = (function (){var statearr_22919 = state_22858;
(statearr_22919[(13)] = inst_22739);

(statearr_22919[(14)] = inst_22741);

(statearr_22919[(15)] = inst_22742);

(statearr_22919[(16)] = inst_22740);

return statearr_22919;
})();
var statearr_22920_22985 = state_22858__$1;
(statearr_22920_22985[(2)] = null);

(statearr_22920_22985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (14))){
var state_22858__$1 = state_22858;
var statearr_22921_22986 = state_22858__$1;
(statearr_22921_22986[(2)] = null);

(statearr_22921_22986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (45))){
var inst_22848 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22922_22987 = state_22858__$1;
(statearr_22922_22987[(2)] = inst_22848);

(statearr_22922_22987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (26))){
var inst_22790 = (state_22858[(29)]);
var inst_22844 = (state_22858[(2)]);
var inst_22845 = cljs.core.seq.call(null,inst_22790);
var state_22858__$1 = (function (){var statearr_22923 = state_22858;
(statearr_22923[(31)] = inst_22844);

return statearr_22923;
})();
if(inst_22845){
var statearr_22924_22988 = state_22858__$1;
(statearr_22924_22988[(1)] = (42));

} else {
var statearr_22925_22989 = state_22858__$1;
(statearr_22925_22989[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (16))){
var inst_22759 = (state_22858[(7)]);
var inst_22761 = cljs.core.chunked_seq_QMARK_.call(null,inst_22759);
var state_22858__$1 = state_22858;
if(inst_22761){
var statearr_22926_22990 = state_22858__$1;
(statearr_22926_22990[(1)] = (19));

} else {
var statearr_22927_22991 = state_22858__$1;
(statearr_22927_22991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (38))){
var inst_22837 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22928_22992 = state_22858__$1;
(statearr_22928_22992[(2)] = inst_22837);

(statearr_22928_22992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (30))){
var state_22858__$1 = state_22858;
var statearr_22929_22993 = state_22858__$1;
(statearr_22929_22993[(2)] = null);

(statearr_22929_22993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (10))){
var inst_22742 = (state_22858[(15)]);
var inst_22740 = (state_22858[(16)]);
var inst_22748 = cljs.core._nth.call(null,inst_22740,inst_22742);
var inst_22749 = cljs.core.nth.call(null,inst_22748,(0),null);
var inst_22750 = cljs.core.nth.call(null,inst_22748,(1),null);
var state_22858__$1 = (function (){var statearr_22930 = state_22858;
(statearr_22930[(26)] = inst_22749);

return statearr_22930;
})();
if(cljs.core.truth_(inst_22750)){
var statearr_22931_22994 = state_22858__$1;
(statearr_22931_22994[(1)] = (13));

} else {
var statearr_22932_22995 = state_22858__$1;
(statearr_22932_22995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (18))){
var inst_22783 = (state_22858[(2)]);
var state_22858__$1 = state_22858;
var statearr_22933_22996 = state_22858__$1;
(statearr_22933_22996[(2)] = inst_22783);

(statearr_22933_22996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (42))){
var state_22858__$1 = state_22858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22858__$1,(45),dchan);
} else {
if((state_val_22859 === (37))){
var inst_22730 = (state_22858[(11)]);
var inst_22826 = (state_22858[(23)]);
var inst_22817 = (state_22858[(25)]);
var inst_22826__$1 = cljs.core.first.call(null,inst_22817);
var inst_22827 = cljs.core.async.put_BANG_.call(null,inst_22826__$1,inst_22730,done);
var state_22858__$1 = (function (){var statearr_22934 = state_22858;
(statearr_22934[(23)] = inst_22826__$1);

return statearr_22934;
})();
if(cljs.core.truth_(inst_22827)){
var statearr_22935_22997 = state_22858__$1;
(statearr_22935_22997[(1)] = (39));

} else {
var statearr_22936_22998 = state_22858__$1;
(statearr_22936_22998[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22859 === (8))){
var inst_22741 = (state_22858[(14)]);
var inst_22742 = (state_22858[(15)]);
var inst_22744 = (inst_22742 < inst_22741);
var inst_22745 = inst_22744;
var state_22858__$1 = state_22858;
if(cljs.core.truth_(inst_22745)){
var statearr_22937_22999 = state_22858__$1;
(statearr_22937_22999[(1)] = (10));

} else {
var statearr_22938_23000 = state_22858__$1;
(statearr_22938_23000[(1)] = (11));

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
});})(c__21639__auto___22946,cs,m,dchan,dctr,done))
;
return ((function (switch__21527__auto__,c__21639__auto___22946,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21528__auto__ = null;
var cljs$core$async$mult_$_state_machine__21528__auto____0 = (function (){
var statearr_22942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22942[(0)] = cljs$core$async$mult_$_state_machine__21528__auto__);

(statearr_22942[(1)] = (1));

return statearr_22942;
});
var cljs$core$async$mult_$_state_machine__21528__auto____1 = (function (state_22858){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_22858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e22943){if((e22943 instanceof Object)){
var ex__21531__auto__ = e22943;
var statearr_22944_23001 = state_22858;
(statearr_22944_23001[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23002 = state_22858;
state_22858 = G__23002;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21528__auto__ = function(state_22858){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21528__auto____1.call(this,state_22858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21528__auto____0;
cljs$core$async$mult_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21528__auto____1;
return cljs$core$async$mult_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___22946,cs,m,dchan,dctr,done))
})();
var state__21641__auto__ = (function (){var statearr_22945 = f__21640__auto__.call(null);
(statearr_22945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___22946);

return statearr_22945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___22946,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23003 = [];
var len__17843__auto___23006 = arguments.length;
var i__17844__auto___23007 = (0);
while(true){
if((i__17844__auto___23007 < len__17843__auto___23006)){
args23003.push((arguments[i__17844__auto___23007]));

var G__23008 = (i__17844__auto___23007 + (1));
i__17844__auto___23007 = G__23008;
continue;
} else {
}
break;
}

var G__23005 = args23003.length;
switch (G__23005) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23003.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___23020 = arguments.length;
var i__17844__auto___23021 = (0);
while(true){
if((i__17844__auto___23021 < len__17843__auto___23020)){
args__17850__auto__.push((arguments[i__17844__auto___23021]));

var G__23022 = (i__17844__auto___23021 + (1));
i__17844__auto___23021 = G__23022;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23014){
var map__23015 = p__23014;
var map__23015__$1 = ((((!((map__23015 == null)))?((((map__23015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23015):map__23015);
var opts = map__23015__$1;
var statearr_23017_23023 = state;
(statearr_23017_23023[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23015,map__23015__$1,opts){
return (function (val){
var statearr_23018_23024 = state;
(statearr_23018_23024[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23015,map__23015__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23019_23025 = state;
(statearr_23019_23025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23010){
var G__23011 = cljs.core.first.call(null,seq23010);
var seq23010__$1 = cljs.core.next.call(null,seq23010);
var G__23012 = cljs.core.first.call(null,seq23010__$1);
var seq23010__$2 = cljs.core.next.call(null,seq23010__$1);
var G__23013 = cljs.core.first.call(null,seq23010__$2);
var seq23010__$3 = cljs.core.next.call(null,seq23010__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23011,G__23012,G__23013,seq23010__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23189 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23190){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23190 = meta23190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23191,meta23190__$1){
var self__ = this;
var _23191__$1 = this;
return (new cljs.core.async.t_cljs$core$async23189(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23190__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23191){
var self__ = this;
var _23191__$1 = this;
return self__.meta23190;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23190","meta23190",1826049374,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23189";

cljs.core.async.t_cljs$core$async23189.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23189");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23189 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23189(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23190){
return (new cljs.core.async.t_cljs$core$async23189(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23190));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23189(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21639__auto___23352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23289){
var state_val_23290 = (state_23289[(1)]);
if((state_val_23290 === (7))){
var inst_23207 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23291_23353 = state_23289__$1;
(statearr_23291_23353[(2)] = inst_23207);

(statearr_23291_23353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (20))){
var inst_23219 = (state_23289[(7)]);
var state_23289__$1 = state_23289;
var statearr_23292_23354 = state_23289__$1;
(statearr_23292_23354[(2)] = inst_23219);

(statearr_23292_23354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (27))){
var state_23289__$1 = state_23289;
var statearr_23293_23355 = state_23289__$1;
(statearr_23293_23355[(2)] = null);

(statearr_23293_23355[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (1))){
var inst_23195 = (state_23289[(8)]);
var inst_23195__$1 = calc_state.call(null);
var inst_23197 = (inst_23195__$1 == null);
var inst_23198 = cljs.core.not.call(null,inst_23197);
var state_23289__$1 = (function (){var statearr_23294 = state_23289;
(statearr_23294[(8)] = inst_23195__$1);

return statearr_23294;
})();
if(inst_23198){
var statearr_23295_23356 = state_23289__$1;
(statearr_23295_23356[(1)] = (2));

} else {
var statearr_23296_23357 = state_23289__$1;
(statearr_23296_23357[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (24))){
var inst_23263 = (state_23289[(9)]);
var inst_23249 = (state_23289[(10)]);
var inst_23242 = (state_23289[(11)]);
var inst_23263__$1 = inst_23242.call(null,inst_23249);
var state_23289__$1 = (function (){var statearr_23297 = state_23289;
(statearr_23297[(9)] = inst_23263__$1);

return statearr_23297;
})();
if(cljs.core.truth_(inst_23263__$1)){
var statearr_23298_23358 = state_23289__$1;
(statearr_23298_23358[(1)] = (29));

} else {
var statearr_23299_23359 = state_23289__$1;
(statearr_23299_23359[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (4))){
var inst_23210 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23210)){
var statearr_23300_23360 = state_23289__$1;
(statearr_23300_23360[(1)] = (8));

} else {
var statearr_23301_23361 = state_23289__$1;
(statearr_23301_23361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (15))){
var inst_23236 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23236)){
var statearr_23302_23362 = state_23289__$1;
(statearr_23302_23362[(1)] = (19));

} else {
var statearr_23303_23363 = state_23289__$1;
(statearr_23303_23363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (21))){
var inst_23241 = (state_23289[(12)]);
var inst_23241__$1 = (state_23289[(2)]);
var inst_23242 = cljs.core.get.call(null,inst_23241__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23243 = cljs.core.get.call(null,inst_23241__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23244 = cljs.core.get.call(null,inst_23241__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23289__$1 = (function (){var statearr_23304 = state_23289;
(statearr_23304[(12)] = inst_23241__$1);

(statearr_23304[(13)] = inst_23243);

(statearr_23304[(11)] = inst_23242);

return statearr_23304;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23289__$1,(22),inst_23244);
} else {
if((state_val_23290 === (31))){
var inst_23271 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23271)){
var statearr_23305_23364 = state_23289__$1;
(statearr_23305_23364[(1)] = (32));

} else {
var statearr_23306_23365 = state_23289__$1;
(statearr_23306_23365[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (32))){
var inst_23248 = (state_23289[(14)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23289__$1,(35),out,inst_23248);
} else {
if((state_val_23290 === (33))){
var inst_23241 = (state_23289[(12)]);
var inst_23219 = inst_23241;
var state_23289__$1 = (function (){var statearr_23307 = state_23289;
(statearr_23307[(7)] = inst_23219);

return statearr_23307;
})();
var statearr_23308_23366 = state_23289__$1;
(statearr_23308_23366[(2)] = null);

(statearr_23308_23366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (13))){
var inst_23219 = (state_23289[(7)]);
var inst_23226 = inst_23219.cljs$lang$protocol_mask$partition0$;
var inst_23227 = (inst_23226 & (64));
var inst_23228 = inst_23219.cljs$core$ISeq$;
var inst_23229 = (inst_23227) || (inst_23228);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23229)){
var statearr_23309_23367 = state_23289__$1;
(statearr_23309_23367[(1)] = (16));

} else {
var statearr_23310_23368 = state_23289__$1;
(statearr_23310_23368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (22))){
var inst_23248 = (state_23289[(14)]);
var inst_23249 = (state_23289[(10)]);
var inst_23247 = (state_23289[(2)]);
var inst_23248__$1 = cljs.core.nth.call(null,inst_23247,(0),null);
var inst_23249__$1 = cljs.core.nth.call(null,inst_23247,(1),null);
var inst_23250 = (inst_23248__$1 == null);
var inst_23251 = cljs.core._EQ_.call(null,inst_23249__$1,change);
var inst_23252 = (inst_23250) || (inst_23251);
var state_23289__$1 = (function (){var statearr_23311 = state_23289;
(statearr_23311[(14)] = inst_23248__$1);

(statearr_23311[(10)] = inst_23249__$1);

return statearr_23311;
})();
if(cljs.core.truth_(inst_23252)){
var statearr_23312_23369 = state_23289__$1;
(statearr_23312_23369[(1)] = (23));

} else {
var statearr_23313_23370 = state_23289__$1;
(statearr_23313_23370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (36))){
var inst_23241 = (state_23289[(12)]);
var inst_23219 = inst_23241;
var state_23289__$1 = (function (){var statearr_23314 = state_23289;
(statearr_23314[(7)] = inst_23219);

return statearr_23314;
})();
var statearr_23315_23371 = state_23289__$1;
(statearr_23315_23371[(2)] = null);

(statearr_23315_23371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (29))){
var inst_23263 = (state_23289[(9)]);
var state_23289__$1 = state_23289;
var statearr_23316_23372 = state_23289__$1;
(statearr_23316_23372[(2)] = inst_23263);

(statearr_23316_23372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (6))){
var state_23289__$1 = state_23289;
var statearr_23317_23373 = state_23289__$1;
(statearr_23317_23373[(2)] = false);

(statearr_23317_23373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (28))){
var inst_23259 = (state_23289[(2)]);
var inst_23260 = calc_state.call(null);
var inst_23219 = inst_23260;
var state_23289__$1 = (function (){var statearr_23318 = state_23289;
(statearr_23318[(7)] = inst_23219);

(statearr_23318[(15)] = inst_23259);

return statearr_23318;
})();
var statearr_23319_23374 = state_23289__$1;
(statearr_23319_23374[(2)] = null);

(statearr_23319_23374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (25))){
var inst_23285 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23320_23375 = state_23289__$1;
(statearr_23320_23375[(2)] = inst_23285);

(statearr_23320_23375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (34))){
var inst_23283 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23321_23376 = state_23289__$1;
(statearr_23321_23376[(2)] = inst_23283);

(statearr_23321_23376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (17))){
var state_23289__$1 = state_23289;
var statearr_23322_23377 = state_23289__$1;
(statearr_23322_23377[(2)] = false);

(statearr_23322_23377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (3))){
var state_23289__$1 = state_23289;
var statearr_23323_23378 = state_23289__$1;
(statearr_23323_23378[(2)] = false);

(statearr_23323_23378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (12))){
var inst_23287 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23289__$1,inst_23287);
} else {
if((state_val_23290 === (2))){
var inst_23195 = (state_23289[(8)]);
var inst_23200 = inst_23195.cljs$lang$protocol_mask$partition0$;
var inst_23201 = (inst_23200 & (64));
var inst_23202 = inst_23195.cljs$core$ISeq$;
var inst_23203 = (inst_23201) || (inst_23202);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23203)){
var statearr_23324_23379 = state_23289__$1;
(statearr_23324_23379[(1)] = (5));

} else {
var statearr_23325_23380 = state_23289__$1;
(statearr_23325_23380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (23))){
var inst_23248 = (state_23289[(14)]);
var inst_23254 = (inst_23248 == null);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23254)){
var statearr_23326_23381 = state_23289__$1;
(statearr_23326_23381[(1)] = (26));

} else {
var statearr_23327_23382 = state_23289__$1;
(statearr_23327_23382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (35))){
var inst_23274 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23274)){
var statearr_23328_23383 = state_23289__$1;
(statearr_23328_23383[(1)] = (36));

} else {
var statearr_23329_23384 = state_23289__$1;
(statearr_23329_23384[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (19))){
var inst_23219 = (state_23289[(7)]);
var inst_23238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23219);
var state_23289__$1 = state_23289;
var statearr_23330_23385 = state_23289__$1;
(statearr_23330_23385[(2)] = inst_23238);

(statearr_23330_23385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (11))){
var inst_23219 = (state_23289[(7)]);
var inst_23223 = (inst_23219 == null);
var inst_23224 = cljs.core.not.call(null,inst_23223);
var state_23289__$1 = state_23289;
if(inst_23224){
var statearr_23331_23386 = state_23289__$1;
(statearr_23331_23386[(1)] = (13));

} else {
var statearr_23332_23387 = state_23289__$1;
(statearr_23332_23387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (9))){
var inst_23195 = (state_23289[(8)]);
var state_23289__$1 = state_23289;
var statearr_23333_23388 = state_23289__$1;
(statearr_23333_23388[(2)] = inst_23195);

(statearr_23333_23388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (5))){
var state_23289__$1 = state_23289;
var statearr_23334_23389 = state_23289__$1;
(statearr_23334_23389[(2)] = true);

(statearr_23334_23389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (14))){
var state_23289__$1 = state_23289;
var statearr_23335_23390 = state_23289__$1;
(statearr_23335_23390[(2)] = false);

(statearr_23335_23390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (26))){
var inst_23249 = (state_23289[(10)]);
var inst_23256 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23249);
var state_23289__$1 = state_23289;
var statearr_23336_23391 = state_23289__$1;
(statearr_23336_23391[(2)] = inst_23256);

(statearr_23336_23391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (16))){
var state_23289__$1 = state_23289;
var statearr_23337_23392 = state_23289__$1;
(statearr_23337_23392[(2)] = true);

(statearr_23337_23392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (38))){
var inst_23279 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23338_23393 = state_23289__$1;
(statearr_23338_23393[(2)] = inst_23279);

(statearr_23338_23393[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (30))){
var inst_23243 = (state_23289[(13)]);
var inst_23249 = (state_23289[(10)]);
var inst_23242 = (state_23289[(11)]);
var inst_23266 = cljs.core.empty_QMARK_.call(null,inst_23242);
var inst_23267 = inst_23243.call(null,inst_23249);
var inst_23268 = cljs.core.not.call(null,inst_23267);
var inst_23269 = (inst_23266) && (inst_23268);
var state_23289__$1 = state_23289;
var statearr_23339_23394 = state_23289__$1;
(statearr_23339_23394[(2)] = inst_23269);

(statearr_23339_23394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (10))){
var inst_23195 = (state_23289[(8)]);
var inst_23215 = (state_23289[(2)]);
var inst_23216 = cljs.core.get.call(null,inst_23215,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23217 = cljs.core.get.call(null,inst_23215,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23218 = cljs.core.get.call(null,inst_23215,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23219 = inst_23195;
var state_23289__$1 = (function (){var statearr_23340 = state_23289;
(statearr_23340[(16)] = inst_23217);

(statearr_23340[(17)] = inst_23216);

(statearr_23340[(7)] = inst_23219);

(statearr_23340[(18)] = inst_23218);

return statearr_23340;
})();
var statearr_23341_23395 = state_23289__$1;
(statearr_23341_23395[(2)] = null);

(statearr_23341_23395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (18))){
var inst_23233 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23342_23396 = state_23289__$1;
(statearr_23342_23396[(2)] = inst_23233);

(statearr_23342_23396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (37))){
var state_23289__$1 = state_23289;
var statearr_23343_23397 = state_23289__$1;
(statearr_23343_23397[(2)] = null);

(statearr_23343_23397[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (8))){
var inst_23195 = (state_23289[(8)]);
var inst_23212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23195);
var state_23289__$1 = state_23289;
var statearr_23344_23398 = state_23289__$1;
(statearr_23344_23398[(2)] = inst_23212);

(statearr_23344_23398[(1)] = (10));


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
});})(c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21527__auto__,c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21528__auto__ = null;
var cljs$core$async$mix_$_state_machine__21528__auto____0 = (function (){
var statearr_23348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23348[(0)] = cljs$core$async$mix_$_state_machine__21528__auto__);

(statearr_23348[(1)] = (1));

return statearr_23348;
});
var cljs$core$async$mix_$_state_machine__21528__auto____1 = (function (state_23289){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23349){if((e23349 instanceof Object)){
var ex__21531__auto__ = e23349;
var statearr_23350_23399 = state_23289;
(statearr_23350_23399[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23289;
state_23289 = G__23400;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21528__auto__ = function(state_23289){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21528__auto____1.call(this,state_23289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21528__auto____0;
cljs$core$async$mix_$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21528__auto____1;
return cljs$core$async$mix_$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21641__auto__ = (function (){var statearr_23351 = f__21640__auto__.call(null);
(statearr_23351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23352);

return statearr_23351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23401 = [];
var len__17843__auto___23404 = arguments.length;
var i__17844__auto___23405 = (0);
while(true){
if((i__17844__auto___23405 < len__17843__auto___23404)){
args23401.push((arguments[i__17844__auto___23405]));

var G__23406 = (i__17844__auto___23405 + (1));
i__17844__auto___23405 = G__23406;
continue;
} else {
}
break;
}

var G__23403 = args23401.length;
switch (G__23403) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23401.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23409 = [];
var len__17843__auto___23534 = arguments.length;
var i__17844__auto___23535 = (0);
while(true){
if((i__17844__auto___23535 < len__17843__auto___23534)){
args23409.push((arguments[i__17844__auto___23535]));

var G__23536 = (i__17844__auto___23535 + (1));
i__17844__auto___23535 = G__23536;
continue;
} else {
}
break;
}

var G__23411 = args23409.length;
switch (G__23411) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23409.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__23408_SHARP_){
if(cljs.core.truth_(p1__23408_SHARP_.call(null,topic))){
return p1__23408_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23408_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23412 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23413){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23414,meta23413__$1){
var self__ = this;
var _23414__$1 = this;
return (new cljs.core.async.t_cljs$core$async23412(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23413__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23414){
var self__ = this;
var _23414__$1 = this;
return self__.meta23413;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23413","meta23413",2039226079,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23412";

cljs.core.async.t_cljs$core$async23412.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23412");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23412 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23412(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23413){
return (new cljs.core.async.t_cljs$core$async23412(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23413));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23412(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21639__auto___23538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23538,mults,ensure_mult,p){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23538,mults,ensure_mult,p){
return (function (state_23486){
var state_val_23487 = (state_23486[(1)]);
if((state_val_23487 === (7))){
var inst_23482 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23488_23539 = state_23486__$1;
(statearr_23488_23539[(2)] = inst_23482);

(statearr_23488_23539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (20))){
var state_23486__$1 = state_23486;
var statearr_23489_23540 = state_23486__$1;
(statearr_23489_23540[(2)] = null);

(statearr_23489_23540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (1))){
var state_23486__$1 = state_23486;
var statearr_23490_23541 = state_23486__$1;
(statearr_23490_23541[(2)] = null);

(statearr_23490_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (24))){
var inst_23465 = (state_23486[(7)]);
var inst_23474 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23465);
var state_23486__$1 = state_23486;
var statearr_23491_23542 = state_23486__$1;
(statearr_23491_23542[(2)] = inst_23474);

(statearr_23491_23542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (4))){
var inst_23417 = (state_23486[(8)]);
var inst_23417__$1 = (state_23486[(2)]);
var inst_23418 = (inst_23417__$1 == null);
var state_23486__$1 = (function (){var statearr_23492 = state_23486;
(statearr_23492[(8)] = inst_23417__$1);

return statearr_23492;
})();
if(cljs.core.truth_(inst_23418)){
var statearr_23493_23543 = state_23486__$1;
(statearr_23493_23543[(1)] = (5));

} else {
var statearr_23494_23544 = state_23486__$1;
(statearr_23494_23544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (15))){
var inst_23459 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23495_23545 = state_23486__$1;
(statearr_23495_23545[(2)] = inst_23459);

(statearr_23495_23545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (21))){
var inst_23479 = (state_23486[(2)]);
var state_23486__$1 = (function (){var statearr_23496 = state_23486;
(statearr_23496[(9)] = inst_23479);

return statearr_23496;
})();
var statearr_23497_23546 = state_23486__$1;
(statearr_23497_23546[(2)] = null);

(statearr_23497_23546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (13))){
var inst_23441 = (state_23486[(10)]);
var inst_23443 = cljs.core.chunked_seq_QMARK_.call(null,inst_23441);
var state_23486__$1 = state_23486;
if(inst_23443){
var statearr_23498_23547 = state_23486__$1;
(statearr_23498_23547[(1)] = (16));

} else {
var statearr_23499_23548 = state_23486__$1;
(statearr_23499_23548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (22))){
var inst_23471 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
if(cljs.core.truth_(inst_23471)){
var statearr_23500_23549 = state_23486__$1;
(statearr_23500_23549[(1)] = (23));

} else {
var statearr_23501_23550 = state_23486__$1;
(statearr_23501_23550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (6))){
var inst_23467 = (state_23486[(11)]);
var inst_23465 = (state_23486[(7)]);
var inst_23417 = (state_23486[(8)]);
var inst_23465__$1 = topic_fn.call(null,inst_23417);
var inst_23466 = cljs.core.deref.call(null,mults);
var inst_23467__$1 = cljs.core.get.call(null,inst_23466,inst_23465__$1);
var state_23486__$1 = (function (){var statearr_23502 = state_23486;
(statearr_23502[(11)] = inst_23467__$1);

(statearr_23502[(7)] = inst_23465__$1);

return statearr_23502;
})();
if(cljs.core.truth_(inst_23467__$1)){
var statearr_23503_23551 = state_23486__$1;
(statearr_23503_23551[(1)] = (19));

} else {
var statearr_23504_23552 = state_23486__$1;
(statearr_23504_23552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (25))){
var inst_23476 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23505_23553 = state_23486__$1;
(statearr_23505_23553[(2)] = inst_23476);

(statearr_23505_23553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (17))){
var inst_23441 = (state_23486[(10)]);
var inst_23450 = cljs.core.first.call(null,inst_23441);
var inst_23451 = cljs.core.async.muxch_STAR_.call(null,inst_23450);
var inst_23452 = cljs.core.async.close_BANG_.call(null,inst_23451);
var inst_23453 = cljs.core.next.call(null,inst_23441);
var inst_23427 = inst_23453;
var inst_23428 = null;
var inst_23429 = (0);
var inst_23430 = (0);
var state_23486__$1 = (function (){var statearr_23506 = state_23486;
(statearr_23506[(12)] = inst_23429);

(statearr_23506[(13)] = inst_23428);

(statearr_23506[(14)] = inst_23430);

(statearr_23506[(15)] = inst_23427);

(statearr_23506[(16)] = inst_23452);

return statearr_23506;
})();
var statearr_23507_23554 = state_23486__$1;
(statearr_23507_23554[(2)] = null);

(statearr_23507_23554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (3))){
var inst_23484 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23486__$1,inst_23484);
} else {
if((state_val_23487 === (12))){
var inst_23461 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23508_23555 = state_23486__$1;
(statearr_23508_23555[(2)] = inst_23461);

(statearr_23508_23555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (2))){
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23486__$1,(4),ch);
} else {
if((state_val_23487 === (23))){
var state_23486__$1 = state_23486;
var statearr_23509_23556 = state_23486__$1;
(statearr_23509_23556[(2)] = null);

(statearr_23509_23556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (19))){
var inst_23467 = (state_23486[(11)]);
var inst_23417 = (state_23486[(8)]);
var inst_23469 = cljs.core.async.muxch_STAR_.call(null,inst_23467);
var state_23486__$1 = state_23486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23486__$1,(22),inst_23469,inst_23417);
} else {
if((state_val_23487 === (11))){
var inst_23427 = (state_23486[(15)]);
var inst_23441 = (state_23486[(10)]);
var inst_23441__$1 = cljs.core.seq.call(null,inst_23427);
var state_23486__$1 = (function (){var statearr_23510 = state_23486;
(statearr_23510[(10)] = inst_23441__$1);

return statearr_23510;
})();
if(inst_23441__$1){
var statearr_23511_23557 = state_23486__$1;
(statearr_23511_23557[(1)] = (13));

} else {
var statearr_23512_23558 = state_23486__$1;
(statearr_23512_23558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (9))){
var inst_23463 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23513_23559 = state_23486__$1;
(statearr_23513_23559[(2)] = inst_23463);

(statearr_23513_23559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (5))){
var inst_23424 = cljs.core.deref.call(null,mults);
var inst_23425 = cljs.core.vals.call(null,inst_23424);
var inst_23426 = cljs.core.seq.call(null,inst_23425);
var inst_23427 = inst_23426;
var inst_23428 = null;
var inst_23429 = (0);
var inst_23430 = (0);
var state_23486__$1 = (function (){var statearr_23514 = state_23486;
(statearr_23514[(12)] = inst_23429);

(statearr_23514[(13)] = inst_23428);

(statearr_23514[(14)] = inst_23430);

(statearr_23514[(15)] = inst_23427);

return statearr_23514;
})();
var statearr_23515_23560 = state_23486__$1;
(statearr_23515_23560[(2)] = null);

(statearr_23515_23560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (14))){
var state_23486__$1 = state_23486;
var statearr_23519_23561 = state_23486__$1;
(statearr_23519_23561[(2)] = null);

(statearr_23519_23561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (16))){
var inst_23441 = (state_23486[(10)]);
var inst_23445 = cljs.core.chunk_first.call(null,inst_23441);
var inst_23446 = cljs.core.chunk_rest.call(null,inst_23441);
var inst_23447 = cljs.core.count.call(null,inst_23445);
var inst_23427 = inst_23446;
var inst_23428 = inst_23445;
var inst_23429 = inst_23447;
var inst_23430 = (0);
var state_23486__$1 = (function (){var statearr_23520 = state_23486;
(statearr_23520[(12)] = inst_23429);

(statearr_23520[(13)] = inst_23428);

(statearr_23520[(14)] = inst_23430);

(statearr_23520[(15)] = inst_23427);

return statearr_23520;
})();
var statearr_23521_23562 = state_23486__$1;
(statearr_23521_23562[(2)] = null);

(statearr_23521_23562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (10))){
var inst_23429 = (state_23486[(12)]);
var inst_23428 = (state_23486[(13)]);
var inst_23430 = (state_23486[(14)]);
var inst_23427 = (state_23486[(15)]);
var inst_23435 = cljs.core._nth.call(null,inst_23428,inst_23430);
var inst_23436 = cljs.core.async.muxch_STAR_.call(null,inst_23435);
var inst_23437 = cljs.core.async.close_BANG_.call(null,inst_23436);
var inst_23438 = (inst_23430 + (1));
var tmp23516 = inst_23429;
var tmp23517 = inst_23428;
var tmp23518 = inst_23427;
var inst_23427__$1 = tmp23518;
var inst_23428__$1 = tmp23517;
var inst_23429__$1 = tmp23516;
var inst_23430__$1 = inst_23438;
var state_23486__$1 = (function (){var statearr_23522 = state_23486;
(statearr_23522[(17)] = inst_23437);

(statearr_23522[(12)] = inst_23429__$1);

(statearr_23522[(13)] = inst_23428__$1);

(statearr_23522[(14)] = inst_23430__$1);

(statearr_23522[(15)] = inst_23427__$1);

return statearr_23522;
})();
var statearr_23523_23563 = state_23486__$1;
(statearr_23523_23563[(2)] = null);

(statearr_23523_23563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (18))){
var inst_23456 = (state_23486[(2)]);
var state_23486__$1 = state_23486;
var statearr_23524_23564 = state_23486__$1;
(statearr_23524_23564[(2)] = inst_23456);

(statearr_23524_23564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23487 === (8))){
var inst_23429 = (state_23486[(12)]);
var inst_23430 = (state_23486[(14)]);
var inst_23432 = (inst_23430 < inst_23429);
var inst_23433 = inst_23432;
var state_23486__$1 = state_23486;
if(cljs.core.truth_(inst_23433)){
var statearr_23525_23565 = state_23486__$1;
(statearr_23525_23565[(1)] = (10));

} else {
var statearr_23526_23566 = state_23486__$1;
(statearr_23526_23566[(1)] = (11));

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
});})(c__21639__auto___23538,mults,ensure_mult,p))
;
return ((function (switch__21527__auto__,c__21639__auto___23538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_23530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23530[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_23530[(1)] = (1));

return statearr_23530;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_23486){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23531){if((e23531 instanceof Object)){
var ex__21531__auto__ = e23531;
var statearr_23532_23567 = state_23486;
(statearr_23532_23567[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23568 = state_23486;
state_23486 = G__23568;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_23486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_23486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23538,mults,ensure_mult,p))
})();
var state__21641__auto__ = (function (){var statearr_23533 = f__21640__auto__.call(null);
(statearr_23533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23538);

return statearr_23533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23538,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23569 = [];
var len__17843__auto___23572 = arguments.length;
var i__17844__auto___23573 = (0);
while(true){
if((i__17844__auto___23573 < len__17843__auto___23572)){
args23569.push((arguments[i__17844__auto___23573]));

var G__23574 = (i__17844__auto___23573 + (1));
i__17844__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var G__23571 = args23569.length;
switch (G__23571) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23569.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23576 = [];
var len__17843__auto___23579 = arguments.length;
var i__17844__auto___23580 = (0);
while(true){
if((i__17844__auto___23580 < len__17843__auto___23579)){
args23576.push((arguments[i__17844__auto___23580]));

var G__23581 = (i__17844__auto___23580 + (1));
i__17844__auto___23580 = G__23581;
continue;
} else {
}
break;
}

var G__23578 = args23576.length;
switch (G__23578) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23576.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23583 = [];
var len__17843__auto___23654 = arguments.length;
var i__17844__auto___23655 = (0);
while(true){
if((i__17844__auto___23655 < len__17843__auto___23654)){
args23583.push((arguments[i__17844__auto___23655]));

var G__23656 = (i__17844__auto___23655 + (1));
i__17844__auto___23655 = G__23656;
continue;
} else {
}
break;
}

var G__23585 = args23583.length;
switch (G__23585) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23583.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21639__auto___23658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23624){
var state_val_23625 = (state_23624[(1)]);
if((state_val_23625 === (7))){
var state_23624__$1 = state_23624;
var statearr_23626_23659 = state_23624__$1;
(statearr_23626_23659[(2)] = null);

(statearr_23626_23659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (1))){
var state_23624__$1 = state_23624;
var statearr_23627_23660 = state_23624__$1;
(statearr_23627_23660[(2)] = null);

(statearr_23627_23660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (4))){
var inst_23588 = (state_23624[(7)]);
var inst_23590 = (inst_23588 < cnt);
var state_23624__$1 = state_23624;
if(cljs.core.truth_(inst_23590)){
var statearr_23628_23661 = state_23624__$1;
(statearr_23628_23661[(1)] = (6));

} else {
var statearr_23629_23662 = state_23624__$1;
(statearr_23629_23662[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (15))){
var inst_23620 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
var statearr_23630_23663 = state_23624__$1;
(statearr_23630_23663[(2)] = inst_23620);

(statearr_23630_23663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (13))){
var inst_23613 = cljs.core.async.close_BANG_.call(null,out);
var state_23624__$1 = state_23624;
var statearr_23631_23664 = state_23624__$1;
(statearr_23631_23664[(2)] = inst_23613);

(statearr_23631_23664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (6))){
var state_23624__$1 = state_23624;
var statearr_23632_23665 = state_23624__$1;
(statearr_23632_23665[(2)] = null);

(statearr_23632_23665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (3))){
var inst_23622 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23624__$1,inst_23622);
} else {
if((state_val_23625 === (12))){
var inst_23610 = (state_23624[(8)]);
var inst_23610__$1 = (state_23624[(2)]);
var inst_23611 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23610__$1);
var state_23624__$1 = (function (){var statearr_23633 = state_23624;
(statearr_23633[(8)] = inst_23610__$1);

return statearr_23633;
})();
if(cljs.core.truth_(inst_23611)){
var statearr_23634_23666 = state_23624__$1;
(statearr_23634_23666[(1)] = (13));

} else {
var statearr_23635_23667 = state_23624__$1;
(statearr_23635_23667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (2))){
var inst_23587 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23588 = (0);
var state_23624__$1 = (function (){var statearr_23636 = state_23624;
(statearr_23636[(7)] = inst_23588);

(statearr_23636[(9)] = inst_23587);

return statearr_23636;
})();
var statearr_23637_23668 = state_23624__$1;
(statearr_23637_23668[(2)] = null);

(statearr_23637_23668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (11))){
var inst_23588 = (state_23624[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23624,(10),Object,null,(9));
var inst_23597 = chs__$1.call(null,inst_23588);
var inst_23598 = done.call(null,inst_23588);
var inst_23599 = cljs.core.async.take_BANG_.call(null,inst_23597,inst_23598);
var state_23624__$1 = state_23624;
var statearr_23638_23669 = state_23624__$1;
(statearr_23638_23669[(2)] = inst_23599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (9))){
var inst_23588 = (state_23624[(7)]);
var inst_23601 = (state_23624[(2)]);
var inst_23602 = (inst_23588 + (1));
var inst_23588__$1 = inst_23602;
var state_23624__$1 = (function (){var statearr_23639 = state_23624;
(statearr_23639[(7)] = inst_23588__$1);

(statearr_23639[(10)] = inst_23601);

return statearr_23639;
})();
var statearr_23640_23670 = state_23624__$1;
(statearr_23640_23670[(2)] = null);

(statearr_23640_23670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (5))){
var inst_23608 = (state_23624[(2)]);
var state_23624__$1 = (function (){var statearr_23641 = state_23624;
(statearr_23641[(11)] = inst_23608);

return statearr_23641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23624__$1,(12),dchan);
} else {
if((state_val_23625 === (14))){
var inst_23610 = (state_23624[(8)]);
var inst_23615 = cljs.core.apply.call(null,f,inst_23610);
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23624__$1,(16),out,inst_23615);
} else {
if((state_val_23625 === (16))){
var inst_23617 = (state_23624[(2)]);
var state_23624__$1 = (function (){var statearr_23642 = state_23624;
(statearr_23642[(12)] = inst_23617);

return statearr_23642;
})();
var statearr_23643_23671 = state_23624__$1;
(statearr_23643_23671[(2)] = null);

(statearr_23643_23671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (10))){
var inst_23592 = (state_23624[(2)]);
var inst_23593 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23624__$1 = (function (){var statearr_23644 = state_23624;
(statearr_23644[(13)] = inst_23592);

return statearr_23644;
})();
var statearr_23645_23672 = state_23624__$1;
(statearr_23645_23672[(2)] = inst_23593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (8))){
var inst_23606 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
var statearr_23646_23673 = state_23624__$1;
(statearr_23646_23673[(2)] = inst_23606);

(statearr_23646_23673[(1)] = (5));


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
});})(c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21527__auto__,c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_23624){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__21531__auto__ = e23651;
var statearr_23652_23674 = state_23624;
(statearr_23652_23674[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23675 = state_23624;
state_23624 = G__23675;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_23624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_23624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21641__auto__ = (function (){var statearr_23653 = f__21640__auto__.call(null);
(statearr_23653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23658);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23658,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23677 = [];
var len__17843__auto___23733 = arguments.length;
var i__17844__auto___23734 = (0);
while(true){
if((i__17844__auto___23734 < len__17843__auto___23733)){
args23677.push((arguments[i__17844__auto___23734]));

var G__23735 = (i__17844__auto___23734 + (1));
i__17844__auto___23734 = G__23735;
continue;
} else {
}
break;
}

var G__23679 = args23677.length;
switch (G__23679) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23677.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___23737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23737,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23737,out){
return (function (state_23709){
var state_val_23710 = (state_23709[(1)]);
if((state_val_23710 === (7))){
var inst_23688 = (state_23709[(7)]);
var inst_23689 = (state_23709[(8)]);
var inst_23688__$1 = (state_23709[(2)]);
var inst_23689__$1 = cljs.core.nth.call(null,inst_23688__$1,(0),null);
var inst_23690 = cljs.core.nth.call(null,inst_23688__$1,(1),null);
var inst_23691 = (inst_23689__$1 == null);
var state_23709__$1 = (function (){var statearr_23711 = state_23709;
(statearr_23711[(7)] = inst_23688__$1);

(statearr_23711[(9)] = inst_23690);

(statearr_23711[(8)] = inst_23689__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23691)){
var statearr_23712_23738 = state_23709__$1;
(statearr_23712_23738[(1)] = (8));

} else {
var statearr_23713_23739 = state_23709__$1;
(statearr_23713_23739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (1))){
var inst_23680 = cljs.core.vec.call(null,chs);
var inst_23681 = inst_23680;
var state_23709__$1 = (function (){var statearr_23714 = state_23709;
(statearr_23714[(10)] = inst_23681);

return statearr_23714;
})();
var statearr_23715_23740 = state_23709__$1;
(statearr_23715_23740[(2)] = null);

(statearr_23715_23740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (4))){
var inst_23681 = (state_23709[(10)]);
var state_23709__$1 = state_23709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23709__$1,(7),inst_23681);
} else {
if((state_val_23710 === (6))){
var inst_23705 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23716_23741 = state_23709__$1;
(statearr_23716_23741[(2)] = inst_23705);

(statearr_23716_23741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (3))){
var inst_23707 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23709__$1,inst_23707);
} else {
if((state_val_23710 === (2))){
var inst_23681 = (state_23709[(10)]);
var inst_23683 = cljs.core.count.call(null,inst_23681);
var inst_23684 = (inst_23683 > (0));
var state_23709__$1 = state_23709;
if(cljs.core.truth_(inst_23684)){
var statearr_23718_23742 = state_23709__$1;
(statearr_23718_23742[(1)] = (4));

} else {
var statearr_23719_23743 = state_23709__$1;
(statearr_23719_23743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (11))){
var inst_23681 = (state_23709[(10)]);
var inst_23698 = (state_23709[(2)]);
var tmp23717 = inst_23681;
var inst_23681__$1 = tmp23717;
var state_23709__$1 = (function (){var statearr_23720 = state_23709;
(statearr_23720[(11)] = inst_23698);

(statearr_23720[(10)] = inst_23681__$1);

return statearr_23720;
})();
var statearr_23721_23744 = state_23709__$1;
(statearr_23721_23744[(2)] = null);

(statearr_23721_23744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (9))){
var inst_23689 = (state_23709[(8)]);
var state_23709__$1 = state_23709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23709__$1,(11),out,inst_23689);
} else {
if((state_val_23710 === (5))){
var inst_23703 = cljs.core.async.close_BANG_.call(null,out);
var state_23709__$1 = state_23709;
var statearr_23722_23745 = state_23709__$1;
(statearr_23722_23745[(2)] = inst_23703);

(statearr_23722_23745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (10))){
var inst_23701 = (state_23709[(2)]);
var state_23709__$1 = state_23709;
var statearr_23723_23746 = state_23709__$1;
(statearr_23723_23746[(2)] = inst_23701);

(statearr_23723_23746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23710 === (8))){
var inst_23688 = (state_23709[(7)]);
var inst_23690 = (state_23709[(9)]);
var inst_23681 = (state_23709[(10)]);
var inst_23689 = (state_23709[(8)]);
var inst_23693 = (function (){var cs = inst_23681;
var vec__23686 = inst_23688;
var v = inst_23689;
var c = inst_23690;
return ((function (cs,vec__23686,v,c,inst_23688,inst_23690,inst_23681,inst_23689,state_val_23710,c__21639__auto___23737,out){
return (function (p1__23676_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23676_SHARP_);
});
;})(cs,vec__23686,v,c,inst_23688,inst_23690,inst_23681,inst_23689,state_val_23710,c__21639__auto___23737,out))
})();
var inst_23694 = cljs.core.filterv.call(null,inst_23693,inst_23681);
var inst_23681__$1 = inst_23694;
var state_23709__$1 = (function (){var statearr_23724 = state_23709;
(statearr_23724[(10)] = inst_23681__$1);

return statearr_23724;
})();
var statearr_23725_23747 = state_23709__$1;
(statearr_23725_23747[(2)] = null);

(statearr_23725_23747[(1)] = (2));


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
});})(c__21639__auto___23737,out))
;
return ((function (switch__21527__auto__,c__21639__auto___23737,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_23729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23729[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_23729[(1)] = (1));

return statearr_23729;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_23709){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23730){if((e23730 instanceof Object)){
var ex__21531__auto__ = e23730;
var statearr_23731_23748 = state_23709;
(statearr_23731_23748[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23749 = state_23709;
state_23709 = G__23749;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_23709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_23709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23737,out))
})();
var state__21641__auto__ = (function (){var statearr_23732 = f__21640__auto__.call(null);
(statearr_23732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23737);

return statearr_23732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23737,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23750 = [];
var len__17843__auto___23799 = arguments.length;
var i__17844__auto___23800 = (0);
while(true){
if((i__17844__auto___23800 < len__17843__auto___23799)){
args23750.push((arguments[i__17844__auto___23800]));

var G__23801 = (i__17844__auto___23800 + (1));
i__17844__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var G__23752 = args23750.length;
switch (G__23752) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23750.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___23803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23803,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23803,out){
return (function (state_23776){
var state_val_23777 = (state_23776[(1)]);
if((state_val_23777 === (7))){
var inst_23758 = (state_23776[(7)]);
var inst_23758__$1 = (state_23776[(2)]);
var inst_23759 = (inst_23758__$1 == null);
var inst_23760 = cljs.core.not.call(null,inst_23759);
var state_23776__$1 = (function (){var statearr_23778 = state_23776;
(statearr_23778[(7)] = inst_23758__$1);

return statearr_23778;
})();
if(inst_23760){
var statearr_23779_23804 = state_23776__$1;
(statearr_23779_23804[(1)] = (8));

} else {
var statearr_23780_23805 = state_23776__$1;
(statearr_23780_23805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (1))){
var inst_23753 = (0);
var state_23776__$1 = (function (){var statearr_23781 = state_23776;
(statearr_23781[(8)] = inst_23753);

return statearr_23781;
})();
var statearr_23782_23806 = state_23776__$1;
(statearr_23782_23806[(2)] = null);

(statearr_23782_23806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (4))){
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23776__$1,(7),ch);
} else {
if((state_val_23777 === (6))){
var inst_23771 = (state_23776[(2)]);
var state_23776__$1 = state_23776;
var statearr_23783_23807 = state_23776__$1;
(statearr_23783_23807[(2)] = inst_23771);

(statearr_23783_23807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (3))){
var inst_23773 = (state_23776[(2)]);
var inst_23774 = cljs.core.async.close_BANG_.call(null,out);
var state_23776__$1 = (function (){var statearr_23784 = state_23776;
(statearr_23784[(9)] = inst_23773);

return statearr_23784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23776__$1,inst_23774);
} else {
if((state_val_23777 === (2))){
var inst_23753 = (state_23776[(8)]);
var inst_23755 = (inst_23753 < n);
var state_23776__$1 = state_23776;
if(cljs.core.truth_(inst_23755)){
var statearr_23785_23808 = state_23776__$1;
(statearr_23785_23808[(1)] = (4));

} else {
var statearr_23786_23809 = state_23776__$1;
(statearr_23786_23809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (11))){
var inst_23753 = (state_23776[(8)]);
var inst_23763 = (state_23776[(2)]);
var inst_23764 = (inst_23753 + (1));
var inst_23753__$1 = inst_23764;
var state_23776__$1 = (function (){var statearr_23787 = state_23776;
(statearr_23787[(10)] = inst_23763);

(statearr_23787[(8)] = inst_23753__$1);

return statearr_23787;
})();
var statearr_23788_23810 = state_23776__$1;
(statearr_23788_23810[(2)] = null);

(statearr_23788_23810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (9))){
var state_23776__$1 = state_23776;
var statearr_23789_23811 = state_23776__$1;
(statearr_23789_23811[(2)] = null);

(statearr_23789_23811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (5))){
var state_23776__$1 = state_23776;
var statearr_23790_23812 = state_23776__$1;
(statearr_23790_23812[(2)] = null);

(statearr_23790_23812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (10))){
var inst_23768 = (state_23776[(2)]);
var state_23776__$1 = state_23776;
var statearr_23791_23813 = state_23776__$1;
(statearr_23791_23813[(2)] = inst_23768);

(statearr_23791_23813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (8))){
var inst_23758 = (state_23776[(7)]);
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23776__$1,(11),out,inst_23758);
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
});})(c__21639__auto___23803,out))
;
return ((function (switch__21527__auto__,c__21639__auto___23803,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_23795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23795[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_23795[(1)] = (1));

return statearr_23795;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_23776){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23796){if((e23796 instanceof Object)){
var ex__21531__auto__ = e23796;
var statearr_23797_23814 = state_23776;
(statearr_23797_23814[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23815 = state_23776;
state_23776 = G__23815;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_23776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_23776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23803,out))
})();
var state__21641__auto__ = (function (){var statearr_23798 = f__21640__auto__.call(null);
(statearr_23798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23803);

return statearr_23798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23803,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23823 = (function (map_LT_,f,ch,meta23824){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23824 = meta23824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23825,meta23824__$1){
var self__ = this;
var _23825__$1 = this;
return (new cljs.core.async.t_cljs$core$async23823(self__.map_LT_,self__.f,self__.ch,meta23824__$1));
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23825){
var self__ = this;
var _23825__$1 = this;
return self__.meta23824;
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23826 = (function (map_LT_,f,ch,meta23824,_,fn1,meta23827){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23824 = meta23824;
this._ = _;
this.fn1 = fn1;
this.meta23827 = meta23827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23828,meta23827__$1){
var self__ = this;
var _23828__$1 = this;
return (new cljs.core.async.t_cljs$core$async23826(self__.map_LT_,self__.f,self__.ch,self__.meta23824,self__._,self__.fn1,meta23827__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23828){
var self__ = this;
var _23828__$1 = this;
return self__.meta23827;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23816_SHARP_){
return f1.call(null,(((p1__23816_SHARP_ == null))?null:self__.f.call(null,p1__23816_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23824","meta23824",1976837377,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23823","cljs.core.async/t_cljs$core$async23823",-4659448,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23827","meta23827",-1351384879,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23826";

cljs.core.async.t_cljs$core$async23826.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23826");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23826 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23826(map_LT___$1,f__$1,ch__$1,meta23824__$1,___$2,fn1__$1,meta23827){
return (new cljs.core.async.t_cljs$core$async23826(map_LT___$1,f__$1,ch__$1,meta23824__$1,___$2,fn1__$1,meta23827));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23826(self__.map_LT_,self__.f,self__.ch,self__.meta23824,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23824","meta23824",1976837377,null)], null);
});

cljs.core.async.t_cljs$core$async23823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23823";

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23823");
});

cljs.core.async.__GT_t_cljs$core$async23823 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23823(map_LT___$1,f__$1,ch__$1,meta23824){
return (new cljs.core.async.t_cljs$core$async23823(map_LT___$1,f__$1,ch__$1,meta23824));
});

}

return (new cljs.core.async.t_cljs$core$async23823(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23832 = (function (map_GT_,f,ch,meta23833){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23833 = meta23833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23834,meta23833__$1){
var self__ = this;
var _23834__$1 = this;
return (new cljs.core.async.t_cljs$core$async23832(self__.map_GT_,self__.f,self__.ch,meta23833__$1));
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23834){
var self__ = this;
var _23834__$1 = this;
return self__.meta23833;
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23833","meta23833",-1551598670,null)], null);
});

cljs.core.async.t_cljs$core$async23832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23832";

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23832");
});

cljs.core.async.__GT_t_cljs$core$async23832 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23832(map_GT___$1,f__$1,ch__$1,meta23833){
return (new cljs.core.async.t_cljs$core$async23832(map_GT___$1,f__$1,ch__$1,meta23833));
});

}

return (new cljs.core.async.t_cljs$core$async23832(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23838 = (function (filter_GT_,p,ch,meta23839){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23839 = meta23839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23840,meta23839__$1){
var self__ = this;
var _23840__$1 = this;
return (new cljs.core.async.t_cljs$core$async23838(self__.filter_GT_,self__.p,self__.ch,meta23839__$1));
});

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23840){
var self__ = this;
var _23840__$1 = this;
return self__.meta23839;
});

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23839","meta23839",-1123057033,null)], null);
});

cljs.core.async.t_cljs$core$async23838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23838";

cljs.core.async.t_cljs$core$async23838.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23838");
});

cljs.core.async.__GT_t_cljs$core$async23838 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23838(filter_GT___$1,p__$1,ch__$1,meta23839){
return (new cljs.core.async.t_cljs$core$async23838(filter_GT___$1,p__$1,ch__$1,meta23839));
});

}

return (new cljs.core.async.t_cljs$core$async23838(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23841 = [];
var len__17843__auto___23885 = arguments.length;
var i__17844__auto___23886 = (0);
while(true){
if((i__17844__auto___23886 < len__17843__auto___23885)){
args23841.push((arguments[i__17844__auto___23886]));

var G__23887 = (i__17844__auto___23886 + (1));
i__17844__auto___23886 = G__23887;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___23889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___23889,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___23889,out){
return (function (state_23864){
var state_val_23865 = (state_23864[(1)]);
if((state_val_23865 === (7))){
var inst_23860 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23866_23890 = state_23864__$1;
(statearr_23866_23890[(2)] = inst_23860);

(statearr_23866_23890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (1))){
var state_23864__$1 = state_23864;
var statearr_23867_23891 = state_23864__$1;
(statearr_23867_23891[(2)] = null);

(statearr_23867_23891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (4))){
var inst_23846 = (state_23864[(7)]);
var inst_23846__$1 = (state_23864[(2)]);
var inst_23847 = (inst_23846__$1 == null);
var state_23864__$1 = (function (){var statearr_23868 = state_23864;
(statearr_23868[(7)] = inst_23846__$1);

return statearr_23868;
})();
if(cljs.core.truth_(inst_23847)){
var statearr_23869_23892 = state_23864__$1;
(statearr_23869_23892[(1)] = (5));

} else {
var statearr_23870_23893 = state_23864__$1;
(statearr_23870_23893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (6))){
var inst_23846 = (state_23864[(7)]);
var inst_23851 = p.call(null,inst_23846);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23851)){
var statearr_23871_23894 = state_23864__$1;
(statearr_23871_23894[(1)] = (8));

} else {
var statearr_23872_23895 = state_23864__$1;
(statearr_23872_23895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (3))){
var inst_23862 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23864__$1,inst_23862);
} else {
if((state_val_23865 === (2))){
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23864__$1,(4),ch);
} else {
if((state_val_23865 === (11))){
var inst_23854 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23873_23896 = state_23864__$1;
(statearr_23873_23896[(2)] = inst_23854);

(statearr_23873_23896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (9))){
var state_23864__$1 = state_23864;
var statearr_23874_23897 = state_23864__$1;
(statearr_23874_23897[(2)] = null);

(statearr_23874_23897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (5))){
var inst_23849 = cljs.core.async.close_BANG_.call(null,out);
var state_23864__$1 = state_23864;
var statearr_23875_23898 = state_23864__$1;
(statearr_23875_23898[(2)] = inst_23849);

(statearr_23875_23898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (10))){
var inst_23857 = (state_23864[(2)]);
var state_23864__$1 = (function (){var statearr_23876 = state_23864;
(statearr_23876[(8)] = inst_23857);

return statearr_23876;
})();
var statearr_23877_23899 = state_23864__$1;
(statearr_23877_23899[(2)] = null);

(statearr_23877_23899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23865 === (8))){
var inst_23846 = (state_23864[(7)]);
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23864__$1,(11),out,inst_23846);
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
});})(c__21639__auto___23889,out))
;
return ((function (switch__21527__auto__,c__21639__auto___23889,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_23881 = [null,null,null,null,null,null,null,null,null];
(statearr_23881[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_23881[(1)] = (1));

return statearr_23881;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_23864){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_23864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e23882){if((e23882 instanceof Object)){
var ex__21531__auto__ = e23882;
var statearr_23883_23900 = state_23864;
(statearr_23883_23900[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23901 = state_23864;
state_23864 = G__23901;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_23864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_23864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___23889,out))
})();
var state__21641__auto__ = (function (){var statearr_23884 = f__21640__auto__.call(null);
(statearr_23884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___23889);

return statearr_23884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___23889,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23902 = [];
var len__17843__auto___23905 = arguments.length;
var i__17844__auto___23906 = (0);
while(true){
if((i__17844__auto___23906 < len__17843__auto___23905)){
args23902.push((arguments[i__17844__auto___23906]));

var G__23907 = (i__17844__auto___23906 + (1));
i__17844__auto___23906 = G__23907;
continue;
} else {
}
break;
}

var G__23904 = args23902.length;
switch (G__23904) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23902.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21639__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto__){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto__){
return (function (state_24074){
var state_val_24075 = (state_24074[(1)]);
if((state_val_24075 === (7))){
var inst_24070 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24076_24117 = state_24074__$1;
(statearr_24076_24117[(2)] = inst_24070);

(statearr_24076_24117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (20))){
var inst_24040 = (state_24074[(7)]);
var inst_24051 = (state_24074[(2)]);
var inst_24052 = cljs.core.next.call(null,inst_24040);
var inst_24026 = inst_24052;
var inst_24027 = null;
var inst_24028 = (0);
var inst_24029 = (0);
var state_24074__$1 = (function (){var statearr_24077 = state_24074;
(statearr_24077[(8)] = inst_24027);

(statearr_24077[(9)] = inst_24029);

(statearr_24077[(10)] = inst_24026);

(statearr_24077[(11)] = inst_24028);

(statearr_24077[(12)] = inst_24051);

return statearr_24077;
})();
var statearr_24078_24118 = state_24074__$1;
(statearr_24078_24118[(2)] = null);

(statearr_24078_24118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (1))){
var state_24074__$1 = state_24074;
var statearr_24079_24119 = state_24074__$1;
(statearr_24079_24119[(2)] = null);

(statearr_24079_24119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (4))){
var inst_24015 = (state_24074[(13)]);
var inst_24015__$1 = (state_24074[(2)]);
var inst_24016 = (inst_24015__$1 == null);
var state_24074__$1 = (function (){var statearr_24080 = state_24074;
(statearr_24080[(13)] = inst_24015__$1);

return statearr_24080;
})();
if(cljs.core.truth_(inst_24016)){
var statearr_24081_24120 = state_24074__$1;
(statearr_24081_24120[(1)] = (5));

} else {
var statearr_24082_24121 = state_24074__$1;
(statearr_24082_24121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (15))){
var state_24074__$1 = state_24074;
var statearr_24086_24122 = state_24074__$1;
(statearr_24086_24122[(2)] = null);

(statearr_24086_24122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (21))){
var state_24074__$1 = state_24074;
var statearr_24087_24123 = state_24074__$1;
(statearr_24087_24123[(2)] = null);

(statearr_24087_24123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (13))){
var inst_24027 = (state_24074[(8)]);
var inst_24029 = (state_24074[(9)]);
var inst_24026 = (state_24074[(10)]);
var inst_24028 = (state_24074[(11)]);
var inst_24036 = (state_24074[(2)]);
var inst_24037 = (inst_24029 + (1));
var tmp24083 = inst_24027;
var tmp24084 = inst_24026;
var tmp24085 = inst_24028;
var inst_24026__$1 = tmp24084;
var inst_24027__$1 = tmp24083;
var inst_24028__$1 = tmp24085;
var inst_24029__$1 = inst_24037;
var state_24074__$1 = (function (){var statearr_24088 = state_24074;
(statearr_24088[(8)] = inst_24027__$1);

(statearr_24088[(9)] = inst_24029__$1);

(statearr_24088[(10)] = inst_24026__$1);

(statearr_24088[(14)] = inst_24036);

(statearr_24088[(11)] = inst_24028__$1);

return statearr_24088;
})();
var statearr_24089_24124 = state_24074__$1;
(statearr_24089_24124[(2)] = null);

(statearr_24089_24124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (22))){
var state_24074__$1 = state_24074;
var statearr_24090_24125 = state_24074__$1;
(statearr_24090_24125[(2)] = null);

(statearr_24090_24125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (6))){
var inst_24015 = (state_24074[(13)]);
var inst_24024 = f.call(null,inst_24015);
var inst_24025 = cljs.core.seq.call(null,inst_24024);
var inst_24026 = inst_24025;
var inst_24027 = null;
var inst_24028 = (0);
var inst_24029 = (0);
var state_24074__$1 = (function (){var statearr_24091 = state_24074;
(statearr_24091[(8)] = inst_24027);

(statearr_24091[(9)] = inst_24029);

(statearr_24091[(10)] = inst_24026);

(statearr_24091[(11)] = inst_24028);

return statearr_24091;
})();
var statearr_24092_24126 = state_24074__$1;
(statearr_24092_24126[(2)] = null);

(statearr_24092_24126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (17))){
var inst_24040 = (state_24074[(7)]);
var inst_24044 = cljs.core.chunk_first.call(null,inst_24040);
var inst_24045 = cljs.core.chunk_rest.call(null,inst_24040);
var inst_24046 = cljs.core.count.call(null,inst_24044);
var inst_24026 = inst_24045;
var inst_24027 = inst_24044;
var inst_24028 = inst_24046;
var inst_24029 = (0);
var state_24074__$1 = (function (){var statearr_24093 = state_24074;
(statearr_24093[(8)] = inst_24027);

(statearr_24093[(9)] = inst_24029);

(statearr_24093[(10)] = inst_24026);

(statearr_24093[(11)] = inst_24028);

return statearr_24093;
})();
var statearr_24094_24127 = state_24074__$1;
(statearr_24094_24127[(2)] = null);

(statearr_24094_24127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (3))){
var inst_24072 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24074__$1,inst_24072);
} else {
if((state_val_24075 === (12))){
var inst_24060 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24095_24128 = state_24074__$1;
(statearr_24095_24128[(2)] = inst_24060);

(statearr_24095_24128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (2))){
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24074__$1,(4),in$);
} else {
if((state_val_24075 === (23))){
var inst_24068 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24096_24129 = state_24074__$1;
(statearr_24096_24129[(2)] = inst_24068);

(statearr_24096_24129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (19))){
var inst_24055 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24097_24130 = state_24074__$1;
(statearr_24097_24130[(2)] = inst_24055);

(statearr_24097_24130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (11))){
var inst_24026 = (state_24074[(10)]);
var inst_24040 = (state_24074[(7)]);
var inst_24040__$1 = cljs.core.seq.call(null,inst_24026);
var state_24074__$1 = (function (){var statearr_24098 = state_24074;
(statearr_24098[(7)] = inst_24040__$1);

return statearr_24098;
})();
if(inst_24040__$1){
var statearr_24099_24131 = state_24074__$1;
(statearr_24099_24131[(1)] = (14));

} else {
var statearr_24100_24132 = state_24074__$1;
(statearr_24100_24132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (9))){
var inst_24062 = (state_24074[(2)]);
var inst_24063 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24074__$1 = (function (){var statearr_24101 = state_24074;
(statearr_24101[(15)] = inst_24062);

return statearr_24101;
})();
if(cljs.core.truth_(inst_24063)){
var statearr_24102_24133 = state_24074__$1;
(statearr_24102_24133[(1)] = (21));

} else {
var statearr_24103_24134 = state_24074__$1;
(statearr_24103_24134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (5))){
var inst_24018 = cljs.core.async.close_BANG_.call(null,out);
var state_24074__$1 = state_24074;
var statearr_24104_24135 = state_24074__$1;
(statearr_24104_24135[(2)] = inst_24018);

(statearr_24104_24135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (14))){
var inst_24040 = (state_24074[(7)]);
var inst_24042 = cljs.core.chunked_seq_QMARK_.call(null,inst_24040);
var state_24074__$1 = state_24074;
if(inst_24042){
var statearr_24105_24136 = state_24074__$1;
(statearr_24105_24136[(1)] = (17));

} else {
var statearr_24106_24137 = state_24074__$1;
(statearr_24106_24137[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (16))){
var inst_24058 = (state_24074[(2)]);
var state_24074__$1 = state_24074;
var statearr_24107_24138 = state_24074__$1;
(statearr_24107_24138[(2)] = inst_24058);

(statearr_24107_24138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24075 === (10))){
var inst_24027 = (state_24074[(8)]);
var inst_24029 = (state_24074[(9)]);
var inst_24034 = cljs.core._nth.call(null,inst_24027,inst_24029);
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24074__$1,(13),out,inst_24034);
} else {
if((state_val_24075 === (18))){
var inst_24040 = (state_24074[(7)]);
var inst_24049 = cljs.core.first.call(null,inst_24040);
var state_24074__$1 = state_24074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24074__$1,(20),out,inst_24049);
} else {
if((state_val_24075 === (8))){
var inst_24029 = (state_24074[(9)]);
var inst_24028 = (state_24074[(11)]);
var inst_24031 = (inst_24029 < inst_24028);
var inst_24032 = inst_24031;
var state_24074__$1 = state_24074;
if(cljs.core.truth_(inst_24032)){
var statearr_24108_24139 = state_24074__$1;
(statearr_24108_24139[(1)] = (10));

} else {
var statearr_24109_24140 = state_24074__$1;
(statearr_24109_24140[(1)] = (11));

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
});})(c__21639__auto__))
;
return ((function (switch__21527__auto__,c__21639__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____0 = (function (){
var statearr_24113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24113[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__);

(statearr_24113[(1)] = (1));

return statearr_24113;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____1 = (function (state_24074){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24114){if((e24114 instanceof Object)){
var ex__21531__auto__ = e24114;
var statearr_24115_24141 = state_24074;
(statearr_24115_24141[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24142 = state_24074;
state_24074 = G__24142;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__ = function(state_24074){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____1.call(this,state_24074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21528__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto__))
})();
var state__21641__auto__ = (function (){var statearr_24116 = f__21640__auto__.call(null);
(statearr_24116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto__);

return statearr_24116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto__))
);

return c__21639__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24143 = [];
var len__17843__auto___24146 = arguments.length;
var i__17844__auto___24147 = (0);
while(true){
if((i__17844__auto___24147 < len__17843__auto___24146)){
args24143.push((arguments[i__17844__auto___24147]));

var G__24148 = (i__17844__auto___24147 + (1));
i__17844__auto___24147 = G__24148;
continue;
} else {
}
break;
}

var G__24145 = args24143.length;
switch (G__24145) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24143.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24150 = [];
var len__17843__auto___24153 = arguments.length;
var i__17844__auto___24154 = (0);
while(true){
if((i__17844__auto___24154 < len__17843__auto___24153)){
args24150.push((arguments[i__17844__auto___24154]));

var G__24155 = (i__17844__auto___24154 + (1));
i__17844__auto___24154 = G__24155;
continue;
} else {
}
break;
}

var G__24152 = args24150.length;
switch (G__24152) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24150.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24157 = [];
var len__17843__auto___24208 = arguments.length;
var i__17844__auto___24209 = (0);
while(true){
if((i__17844__auto___24209 < len__17843__auto___24208)){
args24157.push((arguments[i__17844__auto___24209]));

var G__24210 = (i__17844__auto___24209 + (1));
i__17844__auto___24209 = G__24210;
continue;
} else {
}
break;
}

var G__24159 = args24157.length;
switch (G__24159) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24157.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___24212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___24212,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___24212,out){
return (function (state_24183){
var state_val_24184 = (state_24183[(1)]);
if((state_val_24184 === (7))){
var inst_24178 = (state_24183[(2)]);
var state_24183__$1 = state_24183;
var statearr_24185_24213 = state_24183__$1;
(statearr_24185_24213[(2)] = inst_24178);

(statearr_24185_24213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (1))){
var inst_24160 = null;
var state_24183__$1 = (function (){var statearr_24186 = state_24183;
(statearr_24186[(7)] = inst_24160);

return statearr_24186;
})();
var statearr_24187_24214 = state_24183__$1;
(statearr_24187_24214[(2)] = null);

(statearr_24187_24214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (4))){
var inst_24163 = (state_24183[(8)]);
var inst_24163__$1 = (state_24183[(2)]);
var inst_24164 = (inst_24163__$1 == null);
var inst_24165 = cljs.core.not.call(null,inst_24164);
var state_24183__$1 = (function (){var statearr_24188 = state_24183;
(statearr_24188[(8)] = inst_24163__$1);

return statearr_24188;
})();
if(inst_24165){
var statearr_24189_24215 = state_24183__$1;
(statearr_24189_24215[(1)] = (5));

} else {
var statearr_24190_24216 = state_24183__$1;
(statearr_24190_24216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (6))){
var state_24183__$1 = state_24183;
var statearr_24191_24217 = state_24183__$1;
(statearr_24191_24217[(2)] = null);

(statearr_24191_24217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (3))){
var inst_24180 = (state_24183[(2)]);
var inst_24181 = cljs.core.async.close_BANG_.call(null,out);
var state_24183__$1 = (function (){var statearr_24192 = state_24183;
(statearr_24192[(9)] = inst_24180);

return statearr_24192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24183__$1,inst_24181);
} else {
if((state_val_24184 === (2))){
var state_24183__$1 = state_24183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24183__$1,(4),ch);
} else {
if((state_val_24184 === (11))){
var inst_24163 = (state_24183[(8)]);
var inst_24172 = (state_24183[(2)]);
var inst_24160 = inst_24163;
var state_24183__$1 = (function (){var statearr_24193 = state_24183;
(statearr_24193[(10)] = inst_24172);

(statearr_24193[(7)] = inst_24160);

return statearr_24193;
})();
var statearr_24194_24218 = state_24183__$1;
(statearr_24194_24218[(2)] = null);

(statearr_24194_24218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (9))){
var inst_24163 = (state_24183[(8)]);
var state_24183__$1 = state_24183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24183__$1,(11),out,inst_24163);
} else {
if((state_val_24184 === (5))){
var inst_24163 = (state_24183[(8)]);
var inst_24160 = (state_24183[(7)]);
var inst_24167 = cljs.core._EQ_.call(null,inst_24163,inst_24160);
var state_24183__$1 = state_24183;
if(inst_24167){
var statearr_24196_24219 = state_24183__$1;
(statearr_24196_24219[(1)] = (8));

} else {
var statearr_24197_24220 = state_24183__$1;
(statearr_24197_24220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (10))){
var inst_24175 = (state_24183[(2)]);
var state_24183__$1 = state_24183;
var statearr_24198_24221 = state_24183__$1;
(statearr_24198_24221[(2)] = inst_24175);

(statearr_24198_24221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24184 === (8))){
var inst_24160 = (state_24183[(7)]);
var tmp24195 = inst_24160;
var inst_24160__$1 = tmp24195;
var state_24183__$1 = (function (){var statearr_24199 = state_24183;
(statearr_24199[(7)] = inst_24160__$1);

return statearr_24199;
})();
var statearr_24200_24222 = state_24183__$1;
(statearr_24200_24222[(2)] = null);

(statearr_24200_24222[(1)] = (2));


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
});})(c__21639__auto___24212,out))
;
return ((function (switch__21527__auto__,c__21639__auto___24212,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_24204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24204[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_24204[(1)] = (1));

return statearr_24204;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_24183){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24205){if((e24205 instanceof Object)){
var ex__21531__auto__ = e24205;
var statearr_24206_24223 = state_24183;
(statearr_24206_24223[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24224 = state_24183;
state_24183 = G__24224;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_24183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_24183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___24212,out))
})();
var state__21641__auto__ = (function (){var statearr_24207 = f__21640__auto__.call(null);
(statearr_24207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___24212);

return statearr_24207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___24212,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24225 = [];
var len__17843__auto___24295 = arguments.length;
var i__17844__auto___24296 = (0);
while(true){
if((i__17844__auto___24296 < len__17843__auto___24295)){
args24225.push((arguments[i__17844__auto___24296]));

var G__24297 = (i__17844__auto___24296 + (1));
i__17844__auto___24296 = G__24297;
continue;
} else {
}
break;
}

var G__24227 = args24225.length;
switch (G__24227) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24225.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___24299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___24299,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___24299,out){
return (function (state_24265){
var state_val_24266 = (state_24265[(1)]);
if((state_val_24266 === (7))){
var inst_24261 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24267_24300 = state_24265__$1;
(statearr_24267_24300[(2)] = inst_24261);

(statearr_24267_24300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (1))){
var inst_24228 = (new Array(n));
var inst_24229 = inst_24228;
var inst_24230 = (0);
var state_24265__$1 = (function (){var statearr_24268 = state_24265;
(statearr_24268[(7)] = inst_24230);

(statearr_24268[(8)] = inst_24229);

return statearr_24268;
})();
var statearr_24269_24301 = state_24265__$1;
(statearr_24269_24301[(2)] = null);

(statearr_24269_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (4))){
var inst_24233 = (state_24265[(9)]);
var inst_24233__$1 = (state_24265[(2)]);
var inst_24234 = (inst_24233__$1 == null);
var inst_24235 = cljs.core.not.call(null,inst_24234);
var state_24265__$1 = (function (){var statearr_24270 = state_24265;
(statearr_24270[(9)] = inst_24233__$1);

return statearr_24270;
})();
if(inst_24235){
var statearr_24271_24302 = state_24265__$1;
(statearr_24271_24302[(1)] = (5));

} else {
var statearr_24272_24303 = state_24265__$1;
(statearr_24272_24303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (15))){
var inst_24255 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24273_24304 = state_24265__$1;
(statearr_24273_24304[(2)] = inst_24255);

(statearr_24273_24304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (13))){
var state_24265__$1 = state_24265;
var statearr_24274_24305 = state_24265__$1;
(statearr_24274_24305[(2)] = null);

(statearr_24274_24305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (6))){
var inst_24230 = (state_24265[(7)]);
var inst_24251 = (inst_24230 > (0));
var state_24265__$1 = state_24265;
if(cljs.core.truth_(inst_24251)){
var statearr_24275_24306 = state_24265__$1;
(statearr_24275_24306[(1)] = (12));

} else {
var statearr_24276_24307 = state_24265__$1;
(statearr_24276_24307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (3))){
var inst_24263 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24265__$1,inst_24263);
} else {
if((state_val_24266 === (12))){
var inst_24229 = (state_24265[(8)]);
var inst_24253 = cljs.core.vec.call(null,inst_24229);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24265__$1,(15),out,inst_24253);
} else {
if((state_val_24266 === (2))){
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24265__$1,(4),ch);
} else {
if((state_val_24266 === (11))){
var inst_24245 = (state_24265[(2)]);
var inst_24246 = (new Array(n));
var inst_24229 = inst_24246;
var inst_24230 = (0);
var state_24265__$1 = (function (){var statearr_24277 = state_24265;
(statearr_24277[(10)] = inst_24245);

(statearr_24277[(7)] = inst_24230);

(statearr_24277[(8)] = inst_24229);

return statearr_24277;
})();
var statearr_24278_24308 = state_24265__$1;
(statearr_24278_24308[(2)] = null);

(statearr_24278_24308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (9))){
var inst_24229 = (state_24265[(8)]);
var inst_24243 = cljs.core.vec.call(null,inst_24229);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24265__$1,(11),out,inst_24243);
} else {
if((state_val_24266 === (5))){
var inst_24238 = (state_24265[(11)]);
var inst_24233 = (state_24265[(9)]);
var inst_24230 = (state_24265[(7)]);
var inst_24229 = (state_24265[(8)]);
var inst_24237 = (inst_24229[inst_24230] = inst_24233);
var inst_24238__$1 = (inst_24230 + (1));
var inst_24239 = (inst_24238__$1 < n);
var state_24265__$1 = (function (){var statearr_24279 = state_24265;
(statearr_24279[(11)] = inst_24238__$1);

(statearr_24279[(12)] = inst_24237);

return statearr_24279;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24280_24309 = state_24265__$1;
(statearr_24280_24309[(1)] = (8));

} else {
var statearr_24281_24310 = state_24265__$1;
(statearr_24281_24310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (14))){
var inst_24258 = (state_24265[(2)]);
var inst_24259 = cljs.core.async.close_BANG_.call(null,out);
var state_24265__$1 = (function (){var statearr_24283 = state_24265;
(statearr_24283[(13)] = inst_24258);

return statearr_24283;
})();
var statearr_24284_24311 = state_24265__$1;
(statearr_24284_24311[(2)] = inst_24259);

(statearr_24284_24311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (10))){
var inst_24249 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24285_24312 = state_24265__$1;
(statearr_24285_24312[(2)] = inst_24249);

(statearr_24285_24312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (8))){
var inst_24238 = (state_24265[(11)]);
var inst_24229 = (state_24265[(8)]);
var tmp24282 = inst_24229;
var inst_24229__$1 = tmp24282;
var inst_24230 = inst_24238;
var state_24265__$1 = (function (){var statearr_24286 = state_24265;
(statearr_24286[(7)] = inst_24230);

(statearr_24286[(8)] = inst_24229__$1);

return statearr_24286;
})();
var statearr_24287_24313 = state_24265__$1;
(statearr_24287_24313[(2)] = null);

(statearr_24287_24313[(1)] = (2));


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
});})(c__21639__auto___24299,out))
;
return ((function (switch__21527__auto__,c__21639__auto___24299,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_24291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24291[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_24291[(1)] = (1));

return statearr_24291;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_24265){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24292){if((e24292 instanceof Object)){
var ex__21531__auto__ = e24292;
var statearr_24293_24314 = state_24265;
(statearr_24293_24314[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24315 = state_24265;
state_24265 = G__24315;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_24265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_24265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___24299,out))
})();
var state__21641__auto__ = (function (){var statearr_24294 = f__21640__auto__.call(null);
(statearr_24294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___24299);

return statearr_24294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___24299,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24316 = [];
var len__17843__auto___24390 = arguments.length;
var i__17844__auto___24391 = (0);
while(true){
if((i__17844__auto___24391 < len__17843__auto___24390)){
args24316.push((arguments[i__17844__auto___24391]));

var G__24392 = (i__17844__auto___24391 + (1));
i__17844__auto___24391 = G__24392;
continue;
} else {
}
break;
}

var G__24318 = args24316.length;
switch (G__24318) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24316.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21639__auto___24394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21639__auto___24394,out){
return (function (){
var f__21640__auto__ = (function (){var switch__21527__auto__ = ((function (c__21639__auto___24394,out){
return (function (state_24360){
var state_val_24361 = (state_24360[(1)]);
if((state_val_24361 === (7))){
var inst_24356 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24362_24395 = state_24360__$1;
(statearr_24362_24395[(2)] = inst_24356);

(statearr_24362_24395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (1))){
var inst_24319 = [];
var inst_24320 = inst_24319;
var inst_24321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24360__$1 = (function (){var statearr_24363 = state_24360;
(statearr_24363[(7)] = inst_24320);

(statearr_24363[(8)] = inst_24321);

return statearr_24363;
})();
var statearr_24364_24396 = state_24360__$1;
(statearr_24364_24396[(2)] = null);

(statearr_24364_24396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (4))){
var inst_24324 = (state_24360[(9)]);
var inst_24324__$1 = (state_24360[(2)]);
var inst_24325 = (inst_24324__$1 == null);
var inst_24326 = cljs.core.not.call(null,inst_24325);
var state_24360__$1 = (function (){var statearr_24365 = state_24360;
(statearr_24365[(9)] = inst_24324__$1);

return statearr_24365;
})();
if(inst_24326){
var statearr_24366_24397 = state_24360__$1;
(statearr_24366_24397[(1)] = (5));

} else {
var statearr_24367_24398 = state_24360__$1;
(statearr_24367_24398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (15))){
var inst_24350 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24368_24399 = state_24360__$1;
(statearr_24368_24399[(2)] = inst_24350);

(statearr_24368_24399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (13))){
var state_24360__$1 = state_24360;
var statearr_24369_24400 = state_24360__$1;
(statearr_24369_24400[(2)] = null);

(statearr_24369_24400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (6))){
var inst_24320 = (state_24360[(7)]);
var inst_24345 = inst_24320.length;
var inst_24346 = (inst_24345 > (0));
var state_24360__$1 = state_24360;
if(cljs.core.truth_(inst_24346)){
var statearr_24370_24401 = state_24360__$1;
(statearr_24370_24401[(1)] = (12));

} else {
var statearr_24371_24402 = state_24360__$1;
(statearr_24371_24402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (3))){
var inst_24358 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24360__$1,inst_24358);
} else {
if((state_val_24361 === (12))){
var inst_24320 = (state_24360[(7)]);
var inst_24348 = cljs.core.vec.call(null,inst_24320);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24360__$1,(15),out,inst_24348);
} else {
if((state_val_24361 === (2))){
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(4),ch);
} else {
if((state_val_24361 === (11))){
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24338 = (state_24360[(2)]);
var inst_24339 = [];
var inst_24340 = inst_24339.push(inst_24324);
var inst_24320 = inst_24339;
var inst_24321 = inst_24328;
var state_24360__$1 = (function (){var statearr_24372 = state_24360;
(statearr_24372[(7)] = inst_24320);

(statearr_24372[(8)] = inst_24321);

(statearr_24372[(11)] = inst_24338);

(statearr_24372[(12)] = inst_24340);

return statearr_24372;
})();
var statearr_24373_24403 = state_24360__$1;
(statearr_24373_24403[(2)] = null);

(statearr_24373_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (9))){
var inst_24320 = (state_24360[(7)]);
var inst_24336 = cljs.core.vec.call(null,inst_24320);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24360__$1,(11),out,inst_24336);
} else {
if((state_val_24361 === (5))){
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24321 = (state_24360[(8)]);
var inst_24328__$1 = f.call(null,inst_24324);
var inst_24329 = cljs.core._EQ_.call(null,inst_24328__$1,inst_24321);
var inst_24330 = cljs.core.keyword_identical_QMARK_.call(null,inst_24321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24331 = (inst_24329) || (inst_24330);
var state_24360__$1 = (function (){var statearr_24374 = state_24360;
(statearr_24374[(10)] = inst_24328__$1);

return statearr_24374;
})();
if(cljs.core.truth_(inst_24331)){
var statearr_24375_24404 = state_24360__$1;
(statearr_24375_24404[(1)] = (8));

} else {
var statearr_24376_24405 = state_24360__$1;
(statearr_24376_24405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (14))){
var inst_24353 = (state_24360[(2)]);
var inst_24354 = cljs.core.async.close_BANG_.call(null,out);
var state_24360__$1 = (function (){var statearr_24378 = state_24360;
(statearr_24378[(13)] = inst_24353);

return statearr_24378;
})();
var statearr_24379_24406 = state_24360__$1;
(statearr_24379_24406[(2)] = inst_24354);

(statearr_24379_24406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (10))){
var inst_24343 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24380_24407 = state_24360__$1;
(statearr_24380_24407[(2)] = inst_24343);

(statearr_24380_24407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (8))){
var inst_24320 = (state_24360[(7)]);
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24333 = inst_24320.push(inst_24324);
var tmp24377 = inst_24320;
var inst_24320__$1 = tmp24377;
var inst_24321 = inst_24328;
var state_24360__$1 = (function (){var statearr_24381 = state_24360;
(statearr_24381[(7)] = inst_24320__$1);

(statearr_24381[(8)] = inst_24321);

(statearr_24381[(14)] = inst_24333);

return statearr_24381;
})();
var statearr_24382_24408 = state_24360__$1;
(statearr_24382_24408[(2)] = null);

(statearr_24382_24408[(1)] = (2));


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
});})(c__21639__auto___24394,out))
;
return ((function (switch__21527__auto__,c__21639__auto___24394,out){
return (function() {
var cljs$core$async$state_machine__21528__auto__ = null;
var cljs$core$async$state_machine__21528__auto____0 = (function (){
var statearr_24386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24386[(0)] = cljs$core$async$state_machine__21528__auto__);

(statearr_24386[(1)] = (1));

return statearr_24386;
});
var cljs$core$async$state_machine__21528__auto____1 = (function (state_24360){
while(true){
var ret_value__21529__auto__ = (function (){try{while(true){
var result__21530__auto__ = switch__21527__auto__.call(null,state_24360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21530__auto__;
}
break;
}
}catch (e24387){if((e24387 instanceof Object)){
var ex__21531__auto__ = e24387;
var statearr_24388_24409 = state_24360;
(statearr_24388_24409[(5)] = ex__21531__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24410 = state_24360;
state_24360 = G__24410;
continue;
} else {
return ret_value__21529__auto__;
}
break;
}
});
cljs$core$async$state_machine__21528__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21528__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21528__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21528__auto____0;
cljs$core$async$state_machine__21528__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21528__auto____1;
return cljs$core$async$state_machine__21528__auto__;
})()
;})(switch__21527__auto__,c__21639__auto___24394,out))
})();
var state__21641__auto__ = (function (){var statearr_24389 = f__21640__auto__.call(null);
(statearr_24389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21639__auto___24394);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21641__auto__);
});})(c__21639__auto___24394,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map