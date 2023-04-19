export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          title: action.payload,
          completed: false,
        },
      ];

    case "remove":
      return state.filter((element) => element.title !== action.payload);
  }
}
