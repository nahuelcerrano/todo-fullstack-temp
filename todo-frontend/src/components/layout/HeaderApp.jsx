import "../../App.css";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function HeaderApp() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="header">

            <div className="header-content">
                <h1>
                    <span className="task-icon">✓</span>
                    TaskFlow
                </h1>
                <p className="parrafo">Organiza tu dia con estilo</p>
                <button onClick={toggleTheme} className="theme-toggle-btn">
                    {isDarkMode ? '☀️ Cambiar a Claro' : '🌙 Cambiar a Oscuro'}
                </button>
            </div>

        </header>

    )
}

export default HeaderApp;

