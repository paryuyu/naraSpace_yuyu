import { createStore } from "redux";

const userInitialState = [];

const userReducer = (state = [], action) => {
  switch (action.type) {
    //user_data에서 
    case "init":
      return [...action.value];
    case "add":
      return state.map((e) => {
        if (e.id === action.value) {
          return { ...e, checked: true };
        }
        return e;
      });

    case "remove":
      return state.map((e) => {
        if (e.id === action.value) {
          return { ...e, checked: false };
        }
        return e;
      });

    case "sort":
      if(action.value === "desc") {
        const desc =state.sort((a,b)=>{
          if(a.date === b.date) {
            return a.name > b.name ? 1 : -1;
          }else {
            return a.date > b.date ? 1: -1; //
          }
        });

        return [...desc];
      
      }else {
       
        const asc = state.sort((a,b)=>{
       
          if(a.date === b.date) {
            return a.name > b.name ? 1 : -1;
          }else {
            return a.date < b.date ? 1: -1; // 
          }
        });
        return [...asc];
      }
      
      // return state.map((e) => {
      //   if (e.id === action.value) {
      //     return { ...e, checked: false };
      //   }
      
      //   return e;
      // });

    default:
      return state;
  }
}

export const store = createStore(userReducer);