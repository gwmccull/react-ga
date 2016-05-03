var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
            React.createElement("h1", null, "Google Analytics charts"), 
            React.createElement(GaAccountForm, null), 
            "//", React.createElement(HighCharts, null)
            )
        );
    }
});
React.render(
React.createElement(CommentBox, null),
    document.getElementById('content')
);
