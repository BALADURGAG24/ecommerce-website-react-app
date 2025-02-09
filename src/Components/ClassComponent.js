import React from 'react';
import RactDOM from 'react-dom/client';

class Hello extends React.Component{
    render()
    {
        return(
            <h1> I am At Helllo Class Component</h1>
        )
    }
}
class ClassComponent extends React.Component
{
    render()
    {
        return(
            <>
            <ul>
                <li>Mango</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>PineApple</li>
                </ul>
                <Hello />
                </>
        )
    }
}
export default ClassComponent