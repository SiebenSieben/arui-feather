'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class; /* This Source Code Form is subject to the terms of the Mozilla Public
                   * License, v. 2.0. If a copy of the MPL was not distributed with this
                   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _button = require('../../button/button');

var _button2 = _interopRequireDefault(_button);

var _cn = require('../../cn');

var _cn2 = _interopRequireDefault(_cn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Компонент тэг.
 *
 * @extends Button
 */
var TagButton = (_dec = (0, _cn2.default)('tag-button'), _dec(_class = function (_Button) {
  _inherits(TagButton, _Button);

  function TagButton() {
    _classCallCheck(this, TagButton);

    return _possibleConstructorReturn(this, (TagButton.__proto__ || Object.getPrototypeOf(TagButton)).apply(this, arguments));
  }

  return TagButton;
}(_button2.default)) || _class);
exports.default = TagButton;
//# sourceMappingURL=tag-button.js.map
