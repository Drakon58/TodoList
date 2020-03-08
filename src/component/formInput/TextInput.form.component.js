import React from 'react';

export default (props) => {
    return (
        <div className="form-group">
            <label>{props.Label}</label>
            <input type="text"
                className="form-control"
                value={props.Value}
                onChange={e => props.OnChange(e, props.fieldName)}
            />
        </div>
    );
}