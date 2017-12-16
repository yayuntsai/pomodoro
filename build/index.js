'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PomodoroTimer = function (_React$Component) {
    _inherits(PomodoroTimer, _React$Component);

    function PomodoroTimer() {
        _classCallCheck(this, PomodoroTimer);

        var _this = _possibleConstructorReturn(this, (PomodoroTimer.__proto__ || Object.getPrototypeOf(PomodoroTimer)).call(this));

        _this.state = { timeElapsed: 0 };
        return _this;
    }

    _createClass(PomodoroTimer, [{
        key: 'totalTime',
        value: function totalTime(timeOne, timeTwo) {
            return timeOne + timeTwo;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log(new Date());
            this.setInterval = setInterval(this.elapseTime.bind(this), 1000);
            this.setState({ start: new Date() });
        }
    }, {
        key: 'elapseTime',
        value: function elapseTime() {
            //How much time has elapsed?
            //var timeElapsed = CURRENT TIME - START TIME
            var currentTime = new Date();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'This timer runs for ',
                this.props.workingTime,
                ' minutes, followed by rest of ',
                this.props.restingTime,
                ' minutes.',
                React.createElement('br', null),
                'For a total time of ',
                this.totalTime(this.props.workingTime, this.props.restingTime),
                ' minutes.',
                React.createElement('br', null),
                'There are ',
                this.state.timeElapsed,
                ' seconds elapsed.'
            );
        }
    }]);

    return PomodoroTimer;
}(React.Component);

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));