import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  postData: [
  {id: 1, message: 'Hi, how are u', likesCount: 15},
  {id: 2, message: 'I am trololo', likesCount: 2},
  {id: 3, message: 'azaza', likesCount: 101}
]}

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com")

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect (newState.postData.length).toBe(4)

  });
  
test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com")

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect (newState.postData[3].message).toBe("it-kamasutra.com")

  });

test(`after deleting length should't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect (newState.postData.length).toBe(3)

  });
