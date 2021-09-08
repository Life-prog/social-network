const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Некит' },   
        { id: 2, name: 'Кирилл' },
        { id: 3, name: 'Ярик' },
        { id: 4, name: 'Виталик' },
        { id: 5, name: 'Саша' },
        { id: 6, name: 'Илья' }
    ],
    messages: [
        { id: 1, message: 'че' },
        { id: 2, message: 'л' },
        { id: 3, message: 'ты' },
        { id: 4, message: 'в' },
        { id: 5, message: 'му' },
    ],
    newMessageBody: ''
};
const dialogsReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) //Body вместо newtext потому что выше в елс ифе action.body
export default dialogsReducer;