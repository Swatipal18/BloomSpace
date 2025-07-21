import React, { useEffect, useRef, useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

// Skeleton Loader Component
const SkeletonLoader = () => {
    return (
        <div className="min-h-screen bg-gray-50 animate-pulse">
            {/* Header Skeleton */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="h-8 w-32 bg-gray-200 rounded"></div>
                        <div className="flex space-x-4">
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-6">
                    {/* Title Skeleton */}
                    <div className="h-8 w-64 bg-gray-200 rounded"></div>

                    {/* Content Blocks */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                        </div>
                    ))}

                    {/* Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                                <div className="h-5 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Skeleton */}
            <div className="bg-gray-800 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="space-y-3">
                                <div className="h-5 w-24 bg-gray-600 rounded"></div>
                                <div className="h-4 w-20 bg-gray-600 rounded"></div>
                                <div className="h-4 w-16 bg-gray-600 rounded"></div>
                                <div className="h-4 w-18 bg-gray-600 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        const detectBackgroundColor = () => {
            const elementAtButtonPosition = document.elementFromPoint(
                window.innerWidth - 100, 
                window.innerHeight - 100  
            );

            if (elementAtButtonPosition) {
                const computedStyle = window.getComputedStyle(elementAtButtonPosition);
                let bgColor = computedStyle.backgroundColor;
                let currentElement = elementAtButtonPosition;
                while (currentElement && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
                    currentElement = currentElement.parentElement;
                    if (currentElement) {
                        bgColor = window.getComputedStyle(currentElement).backgroundColor;
                    }
                }
                if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
                    bgColor = window.getComputedStyle(document.body).backgroundColor;
                }

                const isDark = isColorDark(bgColor);
                setIsDarkBackground(isDark);
            }
        };

        // Function to determine if a color is dark
        const isColorDark = (color) => {
            // Handle different color formats
            let r, g, b;

            if (color.startsWith('rgb')) {
                const matches = color.match(/\d+/g);
                if (matches && matches.length >= 3) {
                    [r, g, b] = matches.map(Number);
                }
            } else if (color.startsWith('#')) {
                const hex = color.replace('#', '');
                r = parseInt(hex.substr(0, 2), 16);
                g = parseInt(hex.substr(2, 2), 16);
                b = parseInt(hex.substr(4, 2), 16);
            } else {
                // Default to light if color format is not recognized
                return false;
            }

            // Calculate relative luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminance < 0.5; // Dark if luminance is less than 50%
        };

        const handleScroll = () => {
            toggleVisibility();
            detectBackgroundColor();
        };

        // Initial detection
        detectBackgroundColor();

        window.addEventListener('scroll', handleScroll);

        // Also detect on resize as layout might change
        window.addEventListener('resize', detectBackgroundColor);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', detectBackgroundColor);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${isDarkBackground
                        ? 'bg-white text-black'
                        : 'bg-black text-white '
                        }`}
                    aria-label="Scroll to top"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </>
    );
};

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
    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 500ms loading time

        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        setIsLoading(true);

        const routeChangeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(routeChangeTimer);
    }, [pathname]);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div>
            <ScrollToTop />
            <ScrollToTopButton />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;