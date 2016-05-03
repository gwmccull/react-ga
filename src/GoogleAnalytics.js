var GaCharts = React.createClass({
    render: function() {
        return (
            <div className="gaCharts container-fluid">
                <h1>Google Analytics charts</h1>
                <GaAccountForm />
                <HighCharts />
            </div>
        );
    }
});

var GaAccountForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var accountId = React.findDOMNode(this.refs.accountId).value.trim();

        // TODO: send request to the server
        return;
    },
    render: function() {
        return (
            <form className="gaAccountForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="accountId">Google Analytics Account Id</label>
                    <input type="text" className="form-control" id="accountId" placeholder="UA-XXXXX-X" ref="accountId" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

var HighCharts = React.createClass({
    render: function() {
        return (
            <div className="highCharts">Form placeholder</div>
        );
    }
});

React.render(
    <GaCharts />,
    document.getElementById('content')
);
