import React from "react";
import { useNavbarStyles, WhiteTooltip, RedTooltip } from "../../styles";
import { AppBar, Hidden, InputBase, Avatar, Grid, Fade, Typography, Zoom } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import { LoadingIcon, AddIcon, LikeIcon, LikeActiveIcon, ExploreActiveIcon, ExploreIcon, HomeIcon, HomeActiveIcon } from '../../icons';
import { defaultCurrentUser, getDefaultUser } from '../../data';
import NotificationTooltip from './../notification/NotificationTooltip';
import NotificationList from './../notification/NotificationList';
import { useNProgress } from '@tanem/react-nprogress';

const Navbar = ({ minimalNavbar }) => {
  const classes = useNavbarStyles();
  const history = useHistory();
  const [isLoadingPage, setLoadingPage] = React.useState(true);
  const path = history.location.pathname;

  React.useEffect(() => {
    setLoadingPage(false);
  }, [path])

  return (
    <>
      <Progress isAnimating={isLoadingPage} />
      <AppBar className={classes.appBar}>
        <section className={classes.section}>
          <Logo />
          {!minimalNavbar && <Search history={history} />}
          {!minimalNavbar && <Links path={path} />}
        </section>
      </AppBar>
    </>
  );
};

const Logo = () => {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to='/'>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </Link>
    </div>
  )
};

const Search = ({ history }) => {
  const classes = useNavbarStyles();
  const [loading] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  // Boolean(query) houdt in: heeft een query, dus geen lege string.
  const hasResults = Boolean(query) && results.length > 0;

  React.useEffect(() => {
    // checkt of de query niet leeg is (dus geen whitespace). Zo nee, dan returned hij hem zonder iets te doen.
    if (!query.trim()) return;
    setResults(Array.from({ length: 5 }, () => getDefaultUser()))
  }, [query]);

  const handleClearInput = () => {
    setQuery('');
  };

  return (
    <Hidden xsDown>
      <WhiteTooltip
        arrow
        interactive
        TransitionComponent={Fade}
        open={hasResults}
        title={
          hasResults && (
            <Grid className={classes.resultContainer} container>
              {results.map(result => (
                <Grid
                  key={result.id}
                  item
                  className={classes.resultLink}
                  onClick={() => {
                    history.push(`/${result.username}`);
                    handleClearInput();
                  }}
                >
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profile_image} alt='user avatar' />
                    </div>
                    <div className={classes.nameWrapper}>
                      <Typography variant='body1'>
                        {result.username}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
        <InputBase
          className={classes.input}
          onChange={event => setQuery(event.target.value)}
          startAdornment={<span className={classes.searchIcon} />}
          endAdornment={
            loading ? (
              <LoadingIcon />
            ) : (
                <span onClick={handleClearInput} className={classes.clearIcon} />
              )
          }
          placeholder='Search'
          value={query}
        />
      </WhiteTooltip>
    </Hidden>
  )
}

const Links = ({ path }) => {
  const classes = useNavbarStyles();
  const [showTooltip, setTooltip] = React.useState(true);
  const [showList, setList] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(handleHideTooltip, 5000);
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const handleToggleList = () => {
    setList(prev => !prev);
  }

  const handleHideTooltip = () => {
    setTooltip(false)
  }

  const handleHideList = () => {
    setList(false)
  }

  return (
    <div className={classes.linksContainer}>
      {showList && <NotificationList handleHideList={handleHideList} />}
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to='/'>
          {path === '/' ? <HomeActiveIcon /> : <HomeIcon />}
        </Link>
        <Link to='/explore'>
          {path === '/explore' ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <RedTooltip
          arrow
          // Wanneer er een notificatie is wordt de tooltip getoond
          open={showTooltip}
          onOpen={handleHideTooltip}
          TransitionComponent={Zoom}
          title={<NotificationTooltip />}
        >
          <div className={classes.notifications} onClick={handleToggleList}>
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div className={path === `/${defaultCurrentUser.username}` ? classes.profileActive : ''} />
          <Avatar
            src={defaultCurrentUser.profile_image}
            className={classes.profileImage}
          />
        </Link>
      </div>
    </div>
  )
};

const Progress = ({ isAnimating }) => {
  const classes = useNavbarStyles();
  const { animationDuration, isFinished, progress } = useNProgress({ isAnimating });

  return (
    <div
      className={classes.progressContainer}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`
      }}
    >
      <div
        className={classes.progressBar}
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `marginLeft ${animationDuration}ms linear`
        }}
      >
        <div className={classes.progressBackground} />
      </div>
    </div>
  )
}

export default Navbar;
