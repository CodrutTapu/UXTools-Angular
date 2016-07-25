System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var gridElem;
    return {
        setters:[],
        execute: function() {
            gridElem = (function () {
                function gridElem(dim, id) {
                    this.dim = dim;
                    this.id = id;
                }
                return gridElem;
            }());
            exports_1("gridElem", gridElem);
        }
    }
});
//# sourceMappingURL=gridElem.js.map