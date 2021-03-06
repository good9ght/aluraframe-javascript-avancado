"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaNegociacoes;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("ListaNegociacoes", ListaNegociacoes = function () {
                function ListaNegociacoes() {
                    _classCallCheck(this, ListaNegociacoes);

                    this._negociacoes = [];
                }

                _createClass(ListaNegociacoes, [{
                    key: "adicionar",
                    value: function adicionar(negociacao) {
                        this._negociacoes.push(negociacao);
                    }
                }, {
                    key: "esvaziar",
                    value: function esvaziar() {
                        this._negociacoes = [];
                    }
                }, {
                    key: "ordenar",
                    value: function ordenar(criterio) {
                        this._negociacoes.sort(criterio);
                    }
                }, {
                    key: "inverterOrdem",
                    value: function inverterOrdem() {
                        this._negociacoes.reverse();
                    }
                }, {
                    key: "negociacoes",
                    get: function get() {
                        /*
                        |----------------------------------------------------------------------
                        | Programção Defensiva
                        |----------------------------------------------------------------------
                        |
                        | Concat concatena dois arrays.
                        | Neste será retornado um array vazio concatenado com o array de
                        | _negociacoes. Assim o array retornado será uma cópia e caso seja
                        | alterado através desta função, o array _negociacoes não sofrerá
                        | alteração, somente sua cópia, logo, não haverão mudanças.
                        |
                        */
                        return [].concat(this._negociacoes);
                    }
                }, {
                    key: "volumeTotal",
                    get: function get() {
                        return this._negociacoes.reduce(function (total, n) {
                            return total + n.volume;
                        }, 0);
                    }
                }]);

                return ListaNegociacoes;
            }());

            _export("ListaNegociacoes", ListaNegociacoes);
        }
    };
});
//# sourceMappingURL=ListaNegociacoes.js.map