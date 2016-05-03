var GaCharts = React.createClass({displayName: "GaCharts",
    render: function() {
        return (
            React.createElement("div", {className: "gaCharts"}, 
                React.createElement("h1", null, "Google Analytics charts"), 
                React.createElement(GaAccountForm, null), 
                React.createElement(HighCharts, null)
            )
        );
    }
});

var GaAccountForm = React.createClass({displayName: "GaAccountForm",
    render: function() {
        return (
            React.createElement("form", {className: "gaAccountForm"}, 
                "Form placeholder"
            )
        );
    }
});

var HighCharts = React.createClass({displayName: "HighCharts",
    render: function() {
        return (
            React.createElement("div", {className: "highCharts"}, "Form placeholder")
        );
    }
});

React.render(
    React.createElement(GaCharts, null),
    document.getElementById('content')
);
