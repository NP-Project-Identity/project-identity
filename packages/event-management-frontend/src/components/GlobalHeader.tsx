import {Dashboard20, Events20, ResearchHintonPlot16, UserAvatar20} from '@carbon/icons-react';
import {Header, HeaderContainer, HeaderGlobalAction, HeaderGlobalBar, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, SideNav, SideNavItems, SideNavLink, SideNavLinkProps, SkipToContent} from 'carbon-components-react';
import React from 'react';

export type PageNavigationMetadata = {
  displayTitle: string,
  path: string,
  renderIcon: SideNavLinkProps['renderIcon'],
}

const pages: PageNavigationMetadata[] = [
  {
    displayTitle: 'Dashboard',
    path: '/',
    renderIcon: Dashboard20,
  },
  {
    displayTitle: 'Events',
    path: '/events',
    renderIcon: Events20,
  }
]

export const GlobalHeader = (/*{match}: RouteComponentProps*/) => {
  let activeHeaderPanel: string | undefined = 'platform-switcher';

  return (
  <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand}) => (
        <Header aria-label="NP-ID Event Admin Platform">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded} />
          <HeaderName href="/" prefix="NP-ID">Event Admin Platform</HeaderName>

          <HeaderNavigation aria-label="Event Admin Platform">
            <HeaderMenuItem isCurrentPage href={void(0)}>Console</HeaderMenuItem>
            <HeaderMenuItem href="/docs">Docs</HeaderMenuItem>
          </HeaderNavigation>

          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Account"><UserAvatar20 /></HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Switch platforms" tooltipAlignment='end' onClick={() => activeHeaderPanel = undefined}><ResearchHintonPlot16 /></HeaderGlobalAction>
          </HeaderGlobalBar>

          {/* <HeaderPanel expanded={activeHeaderPanel === 'platform-switcher'}>
            <Switcher aria-label='Platform switcher'>
              <SwitcherItem>
                <Link>Link</Link>
              </SwitcherItem>
            </Switcher>
          </HeaderPanel> */}


          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isRail
            onOverlayClick={onClickSideNavExpand}>
              <SideNavItems>
                {/* <HeaderSideNavItems>
                  <HeaderMenuItem isCurrentPage href="#">Dashboard</HeaderMenuItem>
                  <HeaderMenuItem href="/Events">Events</HeaderMenuItem>
                </HeaderSideNavItems> */}

                {pages.map(page => (
                  <SideNavLink
                    renderIcon={page.renderIcon}
                    href={page.path}>
                    {page.displayTitle}
                  </SideNavLink>
                ))}
              </SideNavItems>
            </SideNav>
        </Header>
      )} />
  );
}
