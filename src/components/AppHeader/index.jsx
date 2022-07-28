import React from 'react'
// import Text from '../Text';
import { Icon } from '../Icon';
import IconTile from '../IconTile';
import avatarSrc from '../../assest/graphics/avatar.png';

 const AppHeader = ({headerText , hasMenu}) => {
  return (
    <header className='app-header'>
      <div className="app-header-title">
        { hasMenu ? <Icon name="menu" face="fill-black" size="large"/> : "" }
        { headerText ? <h1 className='page-header'>{headerText}</h1> : "" }
      </div>
        <img className="avatar-img" src={avatarSrc} alt="avatar"></img>
    </header>
  )
}
export default AppHeader;