let initialState = {
    friends: [
      {id: 1, name: 'Kent', avatar: "https://html5css.ru/w3images/avatar2.png"},
      {id: 2, name: 'Brat', avatar: "https://html5css.ru/w3css/img_avatar3.png"},
      {id: 3, name: 'Chelik', avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"}
    ]
  }

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer