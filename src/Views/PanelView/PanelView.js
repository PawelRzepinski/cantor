import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PanelTemplate from '../../templates/PanelTemplate';


const PanelView = ({ userId }) => {
    console.log(userId)
    if(userId === null) {
        return <Redirect to='/login' />
    }

    return (
        <PanelTemplate>
            <h1>Panel</h1>    
        </PanelTemplate>
    )
}

const mapStateToProps = ({ userId, userName }) => {
    return {
        userId,
        userName
    }
}

export default connect(mapStateToProps)(PanelView);