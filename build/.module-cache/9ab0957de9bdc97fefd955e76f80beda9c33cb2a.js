var GaCharts = React.createClass({displayName: "GaCharts",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
            React.createElement("h1", null, "Google Analytics charts"), 
            "//", React.createElement(GaAccountForm, null), 
            "//", React.createElement(HighCharts, null)
            )
        );
    }
});
React.render(
React.createElement(GaCharts, null),
    document.getElementById('content')
);
