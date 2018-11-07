var myExtend=function(){
    var target = arguments[0] || {},
        i = 1,
    length = arguments.length,
    options, name, src, copy;
    for ( ; i < length; i++ ) {
        if ( (options = arguments[ i ]) != null ) {
            for ( name in options ) {
           src = target[ name ];
           copy = options[ name ];
           if ( target === copy ) {
                continue;
           }
           target[ name ] = copy;
        }
    }
   return target;
    }
}
