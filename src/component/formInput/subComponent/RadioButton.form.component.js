import React from 'react';

export default (props) => {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                type="radio"
                name="priorityOptions"
                id={props.Id}
                value={props.Value}
                checked={props.Checked}
                onChange={props.OnChange}
            />
            <label className="form-check-label">{props.Value}</label>
        </div>
    );
}