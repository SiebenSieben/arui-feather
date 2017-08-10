'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isEqual = isEqual;
exports.default = performance;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Функции проверки равенства двух объектов.
 *
 * @param {*} objA Первый объект
 * @param {*} objB Второй объект
 * @param {Boolean} [deep=false] Запускать ли глубокую проверку равенства
 * @returns {Boolean}
 */
function isEqual(objA, objB) {
    var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (Object.is(objA, objB)) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }

    if (objA.prototype !== objB.prototype) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = hasOwnProperty.bind(objB);
    while (keysA.length > 0) {
        var key = keysA.pop();

        if (!bHasOwnProperty(key)) {
            return false;
        }

        var a = objA[key];
        var b = objB[key];

        if (!Object.is(a, b)) {
            if (!deep || (typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object' || a === null || b === null) {
                return false;
            }

            if (!isEqual(a, b, deep)) {
                return false;
            }
        }
    }

    return true;
}

/**
 * "Поверхностная" проверка равенства props и state компонента.
 *
 * @param {*} nextProps next component props
 * @param {*} nextState next component state
 * @param {*} nextContext next component context
 * @returns {Boolean}
 */
function shallow(nextProps, nextState, nextContext) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState) || !isEqual(this.context, nextContext);
}

/**
 * Запускает глубокую проверку равенства props и state компонента.
 * Глубокая проверка менее производительна, но позволяет проверять равенство массивов и объектов.
 *
 * @param {*} nextProps next component props
 * @param {*} nextState next component state
 * @param {*} nextContext next component context
 * @returns {Boolean}
 */
function deep(nextProps, nextState, nextContext) {
    return !isEqual(this.props, nextProps, true) || !isEqual(this.state, nextState, true) || !isEqual(this.context, nextContext, true);
}

/**
 * Декоратор для улучшения производительности React компонентов. Работает за счет реализации метода
 * [shouldComponentUpdate](https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom).
 *
 * У декоратора есть два режима работы - глубокая и "поверхностная" проверка. В случае, если все props и state
 * компонента состоит только из примитивных значений (`number`, `string`, `null`, `undefined`) стоит использовать
 * поверхностную проверку, которая будет проверять простое равенство значений в `props` и `state`.

 * В случае, если props или state компонентов имеют сложную структуру (массивы, объекты) необходимо использовать
 * глубокую проверку.
 *
 * @param {Boolean} [useDeep=false] Использовать глубокую проверку равенства
 * @returns {Function}
 */
function performance() {
    var useDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return function (target) {
        target.prototype.shouldComponentUpdate = useDeep ? deep : shallow;
    };
}
//# sourceMappingURL=performance.js.map
