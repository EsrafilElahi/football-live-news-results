import { useContext } from 'react'
import { ThemeContext } from './../context api/ThemeContext';


function Title({ title }) {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div>
            <div className={darkMode ? 'bg-darki color-lighti alert' : 'bg-lighti color-darki alert'} role="alert">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Title


