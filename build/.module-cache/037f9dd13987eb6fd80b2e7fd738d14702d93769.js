var GaCharts = React.createClass({displayName: "GaCharts",
    render: function() {
        return (
            React.createElement("div", {className: ""}, 
                React.createElement("h1", null, "Google Analytics charts")
            )
        );
    }
});
React.render(
React.createElement(GaCharts, null),
    document.getElementById('content')
);
