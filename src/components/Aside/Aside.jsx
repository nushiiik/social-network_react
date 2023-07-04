import classes from './Aside.module.css';
import Nav from './Nav/Nav';

function Aside() {
    return (
        <aside className={classes.aside}>
            <Nav />
        </aside>
    );
}

export default Aside;
