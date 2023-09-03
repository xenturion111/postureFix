import React from 'react';
import { Match } from '@reach/router';
import { Link } from 'gatsby';
import {
  Alignment,
  Button,
  Navbar,
  Tooltip,
  Position,
} from '@blueprintjs/core';
import { useUi } from '../context-ui';
import { useApp } from '../context-app';

export const Navigation = () => {
  const [uiContext, setUiContext] = useUi();
  const [appContext, setAppContext] = useApp();

  const handleChange = () => {
    setAppContext({
      ...appContext,
      posenet_turnedOn: !appContext.posenet_turnedOn,
    });
  };
  const handleUiContextChange = (property, value) => () => {
    setUiContext({ ...uiContext, [property]: value });
  };
  return (
    <>
      <Navbar
        style={{
          position: 'fixed',
          height: 'auto',
          backgroundColor: '#16161a',
        }}
      >
        <div className="container px-6 mx-auto flex flex-row h-full justify-between">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <span className="font-extrabold text-white">FixPosture</span>{' '}
            </Navbar.Heading>
          </Navbar.Group>
          <div className="block md:hidden">
            <Navbar.Group align={Alignment.RIGHT}>
              <Button
                onClick={handleUiContextChange('drawerNavigationIsOpen', true)}
                className="bp3-minimal"
                icon="menu"
              />
            </Navbar.Group>
          </div>
          <div className="hidden md:block">
            <Navbar.Group align={Alignment.RIGHT}>
              <Match exact path="/">
                {({ match }) => (
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button
                      to="/"
                      active={match}
                      style={{
                        color: 'white',
                        backgroundColor: match ? '#7f5af0' : 'transparent',
                      }}
                      className="bp3-minimal"
                      text="Home"
                    />
                  </Link>
                )}
              </Match>
              <Match exact path="/about">
                {({ match }) => (
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Button
                      to="/about"
                      active={match}
                      style={{
                        color: 'white',
                        backgroundColor: match ? '#7f5af0' : 'transparent',
                      }}
                      className="bp3-minimal"
                      text="About"
                    />
                  </Link>
                )}
              </Match>
              <Match exact path="/education">
                {({ match }) => (
                  <Link to="/education" style={{ textDecoration: 'none' }}>
                    <Button
                      to="/education"
                      active={match}
                      style={{
                        color: 'white',
                        backgroundColor: match ? '#7f5af0' : 'transparent',
                      }}
                      className="bp3-minimal"
                      text="Education"
                    />
                  </Link>
                )}
              </Match>
              <Match path="/dashboard">
                {({ match }) => (
                  <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button
                      to="/dashboard"
                      active={match}
                      style={{
                        color: 'white',
                        backgroundColor: match ? '#7f5af0' : 'transparent',
                      }}
                      className="bp3-minimal"
                      text="Dashboard"
                    />
                  </Link>
                )}
              </Match>
              <Navbar.Divider />

              <Tooltip
                content={appContext.posenet_turnedOn ? 'Stop' : 'Start'}
                position={Position.BOTTOM}
              >
                <Button
                  className="bp3-minimal"
                  style={{
                    backgroundColor: appContext.posenet_turnedOn
                      ? '#7f5af0'
                      : 'transparent',
                    color: 'white',
                  }}
                  icon={appContext.posenet_turnedOn ? 'stop' : 'power'}
                  onClick={handleChange}
                  disabled={
                    appContext.calibration_calibrationDataAvailable === false
                  }
                />
              </Tooltip>
              <Tooltip
                content={
                  uiContext.videoCanvasIsOpen
                    ? 'Hide camera feed'
                    : 'Show camera feed'
                }
                position={Position.BOTTOM}
              >
                <Button
                  className="bp3-minimal"
                  style={{
                    backgroundColor: uiContext.videoCanvasIsOpen
                      ? '#7f5af0'
                      : 'transparent',
                    color: 'white',
                  }}
                  icon={uiContext.videoCanvasIsOpen ? 'eye-on' : 'eye-open'}
                  onClick={handleUiContextChange(
                    'videoCanvasIsOpen',
                    !uiContext.videoCanvasIsOpen,
                  )}
                />
              </Tooltip>
              <Tooltip
                content={
                  uiContext.showNotificationBrowser
                    ? 'Disable browser notifications'
                    : 'Enable browser notiifications'
                }
                position={Position.BOTTOM}
              >
                <Button
                  className="bp3-minimal"
                  style={{ color: 'white' }}
                  icon={
                    uiContext.showNotificationBrowser
                      ? 'notifications-updated'
                      : 'notifications'
                  }
                  onClick={handleUiContextChange(
                    'showNotificationBrowser',
                    !uiContext.showNotificationBrowser,
                  )}
                />
              </Tooltip>
              <Tooltip content="Settings" position={Position.BOTTOM}>
                <Button
                  className="bp3-minimal"
                  style={{ color: 'white' }}
                  icon="cog"
                  onClick={handleUiContextChange('drawerSettingsIsOpen', true)}
                />
              </Tooltip>
            </Navbar.Group>
          </div>
        </div>
      </Navbar>
    </>
  );
};
