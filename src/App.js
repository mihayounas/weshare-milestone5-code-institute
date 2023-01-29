import React from "react";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import NewsPage from "./pages/news/NewsPage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import CreateNewStory from "./pages/stories/CreateNewStory";
import SideBar from "./components/SideBar";
import ViewCreatedStory from "./pages/stories/ViewCreatedStory";
import StoryEditForm from "./pages/stories/StoryEditForm";
import StoriesPage from "./pages/stories/StoriesPage";
import EventsPage from "./pages/events/EventsPage";
import CreateEvent from "./pages/events/CreateEvent";
import ShowFriends from "./pages/myfriends/ShowFriends";
import NewsSportPage from "./pages/news/NewsSportPage";
import styles from "./App.module.css";
import NotFound from "./components/NotFound";





function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <SideBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword."
                filter={`owner__followed__owner__profile=${profile_id}&`} />

            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/news" render={() => <NewsPage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/stories/create"
            render={() => <CreateNewStory />}
          />
          <Route
            exact
            path="/stories/"
            render={() => <StoriesPage />}
          />
          <Route
            exact
            path="/stories/:id"
            render={() => <ViewCreatedStory />}
          />
          <Route
            exact
            path="/stories/:id/edit"
            render={() => <StoryEditForm />}
          />
          <Route
            exact
            path="/events/"
            render={() => (
              <EventsPage />
            )}
          />
          <Route
            exact
            path="/events/create"
            render={() => (
              <CreateEvent />
            )}
          />
          <Route
            exact
            path="/friends"
            render={() => (
              <ShowFriends />
            )}
          />
          <Route
            exact
            path="/sports"
            render={() => <NewsSportPage />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;