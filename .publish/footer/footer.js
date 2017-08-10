'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp; /* This Source Code Form is subject to the terms of the Mozilla Public
                                          * License, v. 2.0. If a copy of the MPL was not distributed with this
                                          * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _copyright = require('../copyright/copyright');

var _copyright2 = _interopRequireDefault(_copyright);

var _cn = require('../cn');

var _cn2 = _interopRequireDefault(_cn);

var _performance = require('../performance');

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Компонент подвала сайта.
 * Обычно используется совместно с компонентом `Page`.
 */
var Footer = (_dec = (0, _cn2.default)('footer'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render(cn) {
            return _react2.default.createElement(
                'div',
                { className: cn },
                _react2.default.createElement(
                    'div',
                    { className: cn('inner') },
                    this.props.menu && _react2.default.createElement(
                        'div',
                        { className: cn('menu') },
                        this.props.menu
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: cn('additional') },
                        this.props.additional
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: cn('info') },
                        _react2.default.createElement(
                            'div',
                            { className: cn('social') },
                            this.props.social
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: cn('copyright') },
                            this.props.copyright || _react2.default.createElement(_copyright2.default, { showYears: this.props.showYears })
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component), _class2.propTypes = {
    /** Меню в подвале */
    menu: _propTypes2.default.node,
    /** Дополнительный текст */
    additional: _propTypes2.default.node,
    /** Содержимое блока соц. сетей */
    social: _propTypes2.default.node,
    /** Отображение блока соц. сетей */
    showSocial: _propTypes2.default.bool,
    /** Содержимое блока копирайта */
    copyright: _propTypes2.default.node,
    /** Отображение годов в копирайте */
    showYears: _propTypes2.default.bool,
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
}, _class2.defaultProps = {
    additional: 'Сделано в Альфа-Лаборатории',
    showSocial: true,
    showYears: false,
    social: null
}, _temp)) || _class) || _class);
exports.default = Footer;
//# sourceMappingURL=footer.js.map
