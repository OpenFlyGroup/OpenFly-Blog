import * as UserActions from "./user/user.actions";
import * as PostActions from "./post/post.actions";

export const rootActions = {
  ...UserActions,
  ...PostActions,
};
