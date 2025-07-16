import React, { useEffect, useRef } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const originalTitle = document.title;
        let titleInterval = null;
        let toggle = false;
        let isTabHidden = false;

        const startTitleAnimation = () => {
            if (isTabHidden) return;

            isTabHidden = true;
            if (titleInterval) {
                clearInterval(titleInterval);
            }

            document.title = '👋 Come back!';
            toggle = true;

            titleInterval = setInterval(() => {
                if (!isTabHidden) return;
                document.title = toggle ? '😢 You left this...' : '👋 Come back!';
                toggle = !toggle;
            }, 100);
        };

        const stopTitleAnimation = () => {
            isTabHidden = false;

            if (titleInterval) {
                clearInterval(titleInterval);
                titleInterval = null;
            }
            setTimeout(() => {
                if (!isTabHidden) {
                    document.title = originalTitle;
                }
            }, 100);

            toggle = false;
        };

        const handleTabVisibility = () => {
            const isHidden = document.hidden || !document.hasFocus();

            if (isHidden && !isTabHidden) {
                startTitleAnimation();
            } else if (!isHidden && isTabHidden) {
                stopTitleAnimation();
            }
        };

        let timeoutId = null;
        const throttledHandler = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(handleTabVisibility, 10);
        };

        document.addEventListener('visibilitychange', throttledHandler, { passive: true });
        window.addEventListener('blur', throttledHandler, { passive: true });
        window.addEventListener('focus', throttledHandler, { passive: true });

        return () => {
            document.removeEventListener('visibilitychange', throttledHandler);
            window.removeEventListener('blur', throttledHandler);
            window.removeEventListener('focus', throttledHandler);

            if (timeoutId) clearTimeout(timeoutId);
            if (titleInterval) clearInterval(titleInterval);

            document.title = originalTitle;
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function AppLayout() {

    return (
        <div>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default AppLayout;