import { useEffect, useState } from 'react';

function ThemeSwitch(): JSX.Element {
    const [darkmode, changeTheme] = useState(true);

    useEffect(() => {
        const body = document.body;
        console.log('inside useeffect');
        if (darkmode) {
            body.classList.remove('lightTheme');
        } else {
            body.classList.add('lightTheme');
        }
    }, [darkmode]);

    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    id="chipBox"
                    onChange={() => changeTheme(!darkmode)}
                    checked={darkmode}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}
export { ThemeSwitch };
