import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectDirectorySections} from "../../redux/directory/directory.selector";

import './directory.styles.scss';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSelectionProps}) => (
                <MenuItem key={id} {...otherSelectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);