export type User = {
  name: string;
  avatar: string;
};

export type Item = {
  type: 'post' | 'group' | 'picture' | 'message';
  body: string;
  recent: boolean;
};

export type Notification = {
  from: User;
  type: 'reaction' | 'follow' | 'join' | 'message' | 'comment' | 'left';
  item?: Item;
  read: boolean;
  time: string;
};
