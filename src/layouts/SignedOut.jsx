import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
     return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} style={{marginRight:'0.5em'}}>Sign In</Button>
            <Button>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
