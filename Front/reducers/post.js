const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '정지용',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/VanGogh_1887_Selbstbildnis.jpg/230px-VanGogh_1887_Selbstbildnis.jpg',
        },
        {
          src:
            'https://zsuttonphoto.com/wp-content/uploads/2020/05/Los-Angeles-Beauty-Photography-2020.jpg',
        },
        {
          src:
            'https://zsuttonphoto.com/wp-content/uploads/2020/05/Los-Angeles-Beauty-Photography-2020.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요!!',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '정지용',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
