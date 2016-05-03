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
    handleSubmit: function(e) {
        e.preventDefault();
        var accountId = React.findDOMNode(this.refs.accountId).value.trim();

        // TODO: send request to the server
        React.findDOMNode(this.refs.accountId).value = '';
        return;
    },
    render: function() {
        return (
            React.createElement("form", {className: "gaAccountForm", onSubmit: this.handleSubmit}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {for: "accountId"}, "Google Analytics Account Id"), 
                    React.createElement("input", {type: "text", className: "form-control", id: "accountId", placeholder: "UA-XXXXX-X", ref: "accountId"})
                ), 
                React.createElement("button", {type: "submit", className: "btn btn-primary"}, "Submit")
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
