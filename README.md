# instagram-react12

## ROUTES
- / (feed page)
  
  components:
  - FeedPost
  - FeedPostSkeleton
  - FeedSideSuggestions

- /explore (explore page)

  components:
  - ExploreSuggestions
  - ExploreGrid

- /p/:postId (post page)

  components:
  - Post
  - PostSkeleton
  - PostModal
  - MorePostsFromUser

- Notifications

  components:
  - NotificationList
  - NotificationTooltip

- /:username (profile page)

  components:
  - ProfileTabs

- /accounts/edit (edit profile page)

- /accounts/login (login page)

- /accounts/emailsignup (signup page)

- * (not found page)



## SHARED COMPONENTS
- Navbar
- FollowSuggestions
- FollowButton
- UserCard
- LoadingScreen
- OptionsDialogue
- ProfilePicture
- Layout
- SEO