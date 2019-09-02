var React = require('react');
var CreateReactClass = require('create-react-class');
var errorSVG = require('./images/error.svg');

var ErrorMessageView = CreateReactClass({
    render: function () {
        var supportCode = (((this.props.errors || [])[0] || {}).support_code || '').replace(/([\d\*]{4})([\d\*]{4})/gi, '$1-$2');
        return (
            <span className="error-message">
                <div dangerouslySetInnerHTML={{__html: errorSVG}}></div>
                <div>Error</div>
                <div>{supportCode ? '(' + supportCode + ')' : ''}</div>
            </span>
        );
    }
});
module.exports = ErrorMessageView;
