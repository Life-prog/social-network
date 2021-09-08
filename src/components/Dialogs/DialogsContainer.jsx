import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         { store => {
            
//     let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator());
//     }
//     let onNewMessageChange = (body) => {
//         store.dispatch(updateNewMessageBodyCreator(body));
//     }
//             return <Dialogs updateNewMassageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={store.getState().dialogsPage} />
//         }
//     }
//     </StoreContext.Consumer>

// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () =>{dispatch(sendMessageCreator());},
        updateNewMassageBody: (body) =>{dispatch(updateNewMessageBodyCreator(body));}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 