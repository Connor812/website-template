import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    // ^ This component is used to scroll to the top of the page when the route changes.
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;