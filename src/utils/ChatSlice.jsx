import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./contants";

const ChatSlice = createSlice({
    name: "Chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
            if (state.messages.length > LIVE_CHAT_COUNT) {
                state.messages.shift();
            }
        },
    },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer; 


