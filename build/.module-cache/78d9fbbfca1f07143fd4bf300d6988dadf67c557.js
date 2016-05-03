var GaCharts = React.createClass({displayName: "GaCharts",
    render: function() {
        return (
            React.createElement("div", {className: "gaCharts container-fluid"}, 
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
            React.createElement("form", {className: "gaAccountForm form-horizontal"}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {for: "accountId"}, "Google Analytics Account Id"), 
                    React.createElement("input", {type: "text", className: "form-control", id: "accountId", placeholder: "UA-XXXX"})
                ), 
                React.createElement("button", {type: "submit", className: "btn btn-default"}, "Submit")
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
