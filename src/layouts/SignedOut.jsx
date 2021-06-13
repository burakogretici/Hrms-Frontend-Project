import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
     return (
        <div>
            <Menu.Item>
            <Button as={NavLink} to="user/login" onClick={signIn} style={{marginRight:'0.5em'}}>Sign In</Button>
            <Button as={NavLink} to="jobSeeker/register">Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
