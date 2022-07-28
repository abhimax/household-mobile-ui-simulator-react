import React from 'react'
import { Icon } from '../Icon';
import IconTile from '../IconTile';
import Button from '../Button';

 const AppFooter = () => {
  return (
    <footer className='app-footer'>
        <Button value="Household" icon={<Icon name="home" face="fill-blue" size="small"/>} type="secondary"/>
        <IconTile icon={<Icon name="barChart" face="fill-blue" size="small"/>} skin="outer-shadow" size="small"/>
        <IconTile icon={<Icon name="bulb" face="fill-blue" size="small"/>} skin="outer-shadow" size="small"/>
        <IconTile icon={<Icon name="settingGear" face="fill-blue" size="small"/>} skin="outer-shadow" size="small"/>
    </footer>
  )
}
export default AppFooter;