import React from 'react'
import { CLoseIcon, Icon, SidebarContainer, SideBarWrapper,SideBarLink, SideBtnWrap, SideBarRoute, SideBarMenu } from './SideBarElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CLoseIcon/>
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLink to="about" onClick={toggle}>
                            About
                        </SideBarLink>
                        <SideBarLink to="discover" onClick={toggle}>
                            Discover
                        </SideBarLink>
                        <SideBarLink to="services" onClick={toggle} >
                             Services
                        </SideBarLink>
                        <SideBarLink to="newsletter" onClick={toggle} >
                        News Letter
                        </SideBarLink>
                        
                    </SideBarMenu>
                    <SideBtnWrap>
                        <SideBarRoute to="/newsletter">
                            News Letter
                        </SideBarRoute>
                    </SideBtnWrap>
                </SideBarWrapper>
            </SidebarContainer>
        </>
    )
}

export default SideBar;
