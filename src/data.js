import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "AbbeyHoes",
  name: "Abbey",
  profile_image:
    "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117867000_1037144140074273_609545399369336983_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=BHAuTl5iD1sAX_xPNme&oh=4195233e77395c347b9166c599bb35eb&oe=5F866704"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117867000_1037144140074273_609545399369336983_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=BHAuTl5iD1sAX_xPNme&oh=4195233e77395c347b9166c599bb35eb&oe=5F866704"
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Vandaag heerlijk wezen uitwaaien op Zandvoort. Was heerlijk! Ben jij daar ook weleens geweest?? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: defaultUser,
  media:
    "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117221842_2803335453277302_7388594144233931544_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=TnBGjo5IiisAX97D0aA&oh=1fda88669c9d48f77bd0b073f43cce92&oe=5F812470",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Vandaag heerlijk wezen uitwaaien op Zandvoort. Was heerlijk! Ben jij daar ook weleens geweest? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
    "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117168083_901214830415579_1114828602484720841_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=h5r9s7pPFiUAX8-P90M&oh=2f932c0230490faff8d05f8af0b99c48&oe=5F82F63C",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  }
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "abbeyhoes",
  name: "Abbey Hoes",
  profile_image:
    "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117867000_1037144140074273_609545399369336983_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=BHAuTl5iD1sAX_xPNme&oh=4195233e77395c347b9166c599bb35eb&oe=5F866704",
  website: "https://react12.io",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser]
};
