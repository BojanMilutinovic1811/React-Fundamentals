'use strict';

var app = document.getElementById('root');

var visible = false;
var visibility = function visibility() {
    visible = !visible;
    renderApp();
    console.log(visible);
};

var renderApp = function renderApp() {
    var visibilityToggle = React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: visibility },
            'visibility toggle'
        ),
        visible && React.createElement(
            'p',
            null,
            'this is now visible'
        )
    );

    ReactDOM.render(visibilityToggle, app);
};

renderApp();
