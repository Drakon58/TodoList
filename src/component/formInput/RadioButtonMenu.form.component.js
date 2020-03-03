import React from 'react';

import RadioButton from './subComponent/RadioButton.form.component';

export default (props) => {
    return (
        <div className="form-group">
            {
                props.Options.map((x) => <RadioButton key={x.Id} Id={x.Id} OnChange={props.OnChange} Value={x.Value} Checked={x.Value === props.CurrentOption} />)
            }
        </div>
    );
}