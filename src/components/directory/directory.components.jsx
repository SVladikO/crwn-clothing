import React from "react";
import MenuItem from "../menu-item/menu-item.components";

import sections from './directory.data';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: sections,
        }
    }

    render() {
        console.log(';', this.state.sections);

        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSelectionProps}) => (
                        <MenuItem key={id} {...otherSelectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;