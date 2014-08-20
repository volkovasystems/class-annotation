/*:
    @module-license:
        The MIT License (MIT)

        Copyright (c) 2014 Richeve Siodina Bebedor

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
    @end-module-license

    @module-configuration:
        {
            "packageName": "harden-property",
            "fileName": "harden-property.js",
            "moduleName": "hardenProperty",
            "authorName": "Richeve S. Bebedor",
            "authorEMail": "richeve.bebedor@gmail.com",
            "repository": "git@github.com:volkovasystems/harden-property.git",
            "isGlobal": "true"
        }
    @end-module-configuration

    @module-documentation:
        Annotation class wraps any annotated meta tags, values, and blocks as an annotation object.

        This will give the annotation additional processing capability.

        For the basic, all annotations are preceded by @ symbol.

        All annotations has values where there interaction is restricted.

        Annotation give meaning to the value and how to process or interpret that value.

        Annotations are surrounded by operators.

        Annotation operators defines how annotations interact with each other.
    @end-module-documentation

    @include:
        {
            "harden-property.git@github.com/volkovasystems": "hardenProperty",
        }
    @end-include

    @class-constant:
        {
            "ANNOTATE": "@<meta>:",
            "PRIORITIZE": "@",
            "PIPE": ":::",
            "TRANSFORM": ":",
            "CHAIN": "::",
            "TRANSIT": "->",
            "LINK": "~",
            "BIND": "="
        }
    @end-class-constant
*/
var Annotation = function Annotation( value ){

};

hardenProperty( Annotation, "ANNOTATE", "@<meta>:" );

hardenProperty( Annotation, "PRIORITIZE", "@" );
hardenProperty( Annotation, "PIPE", ":::" );
hardenProperty( Annotation, "TRANSFORM", ":" );
hardenProperty( Annotation, "CHAIN", "::" );

hardenProperty( Annotation, "TRANSIT", "->" );
hardenProperty( Annotation, "LINK", "~" );
hardenProperty( Annotation, "BIND", "=" );

Annotation.prototype.append = function append( annotation, operator ){

};

Annotation.prototype.prepend = function prepend( annotation, operator ){

};

Annotation.prototype.remove = function remove( annotation ){

};

Annotation.prototype.insert = function insert( annotation, operator ){

};

Annotation.prototype.modify = function modify( annotation ){

};

Annotation.prototype.getValue = function getValue( ){

};


Annotation.prototype.annotate = function annotate( annotation ){

};

Annotation.prototype.pipe = function pipe( annotation ){

};

Annotation.prototype.prioritize = function prioritize( annotation ){

};

Annotation.prototype.transform = function transform( annotation ){

};

Annotation.prototype.chain = function chain( annotation ){

};

Annotation.prototype.transit = function transit( annotation ){

};

Annotation.prototype.link = function link( annotation ){

};

Annotation.prototype.bind = function bind( annotation ){

};

var hardenProperty = require( "./harden-property/harden-property.js" );

module.exports = Annotation;

