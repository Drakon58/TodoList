import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <input type="submit" value={props.Value} className="btn btn-primary" />
        </div>
    );
}