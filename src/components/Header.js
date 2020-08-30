import React from 'react'
import './styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for artist, Songs or albums" type="text" />

            </div>

            <div className="header__right">
                <Avatar src="" alt="GT"/>
                <h4>Golden M</h4>
            </div>
        </div>
    )
}

export default Header
