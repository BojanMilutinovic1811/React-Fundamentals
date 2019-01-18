'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('root');

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ['option one', 'option two'],
            title: props.title,
            subtitle: props.subtitle
        };
        _this.handleRemoveOptions = _this.handleRemoveOptions.bind(_this);
        _this.handleRandomDecisions = _this.handleRandomDecisions.bind(_this);
        _this.handleNewOption = _this.handleNewOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveOptions',
        value: function handleRemoveOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleRandomDecisions',
        value: function handleRandomDecisions() {
            var random = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[random]);
        }
    }, {
        key: 'handleNewOption',
        value: function handleNewOption(e) {
            e.preventDefault();
            var newOption = e.target.elements.option.value;
            if (newOption) {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat(newOption) };
                });
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { hasOptions: !this.state.options.length > 0, randomDecision: this.handleRandomDecisions }),
                React.createElement(Options, { options: this.state.options, removeOptions: this.handleRemoveOptions }),
                React.createElement(AddOption, { newOption: this.handleNewOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'button',
        { disabled: props.hasOptions, onClick: props.randomDecision },
        'Random Decision'
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, text: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'p',
        null,
        props.text
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.newOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Submit'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

IndecisionApp.defaultProps = {
    options: [],
    title: 'Indecision App',
    subtitle: 'Lets do it!'
};

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
