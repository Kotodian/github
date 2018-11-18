var $=jQuery=function(x){
    return jQuery.fn.init(x);
}
jQuery.fn=jQuery.prototype={
    init:function(x){
        this.num=x||0;
        return this;
    },
    jquery:"1.11"
}//jQuery.fn相当于jQuery.prototype的别名

jQuery.fn.init.prototype=jQuery.fn;//为了让jQuery.fn.init这个工厂方法能够继承jQuery.fn上的原型方法,让返回对象为jQuery.fn
console.log(jQuery().jquery);
