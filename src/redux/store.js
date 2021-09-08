import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'hi', likesCount: 33 },
                { id: 2, message: 'Whats up?', likesCount: 11 }
            ],
            newPostText: 'nekit'
    
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Никита' },   
                { id: 2, name: 'Кирилл' },
                { id: 3, name: 'Ярик' },
                { id: 4, name: 'Виталик' },
                { id: 5, name: 'Саша' },
                { id: 6, name: 'Илья' }
            ],
            messages: [
                { id: 1, message: 'один' },
                { id: 2, message: 'два' },
                { id: 3, message: 'три' },
                { id: 4, message: 'четыре' },
                { id: 5, message: 'пять' },
                { id: 6, message: 'шесть' }
            ],
            newMessageBody: ''
        },
        sidebar:{}
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) { 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}
window.state = store;
export default store;