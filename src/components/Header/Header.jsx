import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/13/LOGO_OF_LOGO.svg' alt='logo'></img>
        </header>
    );
}

export default Header;
