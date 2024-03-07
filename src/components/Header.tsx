import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Products from "./Products";
import Developers from "./Developers";
import Company from "./Company";

interface NavItem {
  id: number;
  text: string;
  component: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    text: "Products",
    component: <Products />,
  },
  {
    text: "Developers",
    component: <Developers />,
  },
  {
    text: "Company",
    component: <Company />,
  },
].map((navItem, index) => ({
  ...navItem,
  id: index + 1,
}));

const Header = () => {
  const [activeNavItemId, setActiveNavItemId] = useState<number | null>(null);
  const [movementDirection, setMovementDirection] = useState<
    "left" | "right" | null
  >(null);
  const [left, setLeft] = useState<number>(0);

  const handleMouseEnter = (navItemId: number) => {
    if (!activeNavItemId) {
      setMovementDirection(null);
    } else {
      setMovementDirection(navItemId < activeNavItemId! ? "left" : "right");
    }
    setActiveNavItemId(navItemId);
  };

  const handleMouseLeave = () => {
    setActiveNavItemId(null);
    setMovementDirection(null);
  };

  useEffect(() => {
    const activeNavItemElement = document.getElementById(
      `navItem${activeNavItemId}`
    );
    const navItemContainer = document.getElementById("navItemContainer");
    const activeNavItemElementBoundingClientRect =
      activeNavItemElement?.getBoundingClientRect();
    const navItemContainerBoundingClientRect =
      navItemContainer?.getBoundingClientRect();

    if (
      !activeNavItemElementBoundingClientRect ||
      !navItemContainerBoundingClientRect
    )
      return;

    setLeft(
      activeNavItemElementBoundingClientRect.left +
        activeNavItemElementBoundingClientRect.width / 2 -
        navItemContainerBoundingClientRect.left
    );
  }, [activeNavItemId]);

  return (
    <header className="p-4">
      <div className="max-w-6xl mx-auto flex gap-4 items-center justify-between">
        <a href="">
          <svg
            className="w-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2334.44 537.22"
          >
            <path
              className="fill-slate-50"
              d="M664.01 223.35c-16.55-11.14-60.03-15.89-91.64-7.38-1.7-31.49-17.94-58.03-47.65-81.17l-10.99-7.38-7.33 11.07c-14.4 21.86-20.47 51-18.33 77.49 1.7 16.32 7.37 34.66 18.33 47.97-41.15 23.87-79.07 18.45-247.03 18.45H.06C-.7 320.33 5.4 393.28 51.79 452.67c5.12 6.56 10.74 12.91 16.84 19.02 37.72 37.77 94.71 65.47 179.93 65.54 130 .12 241.39-70.16 309.15-240.07 22.3.37 81.15 3.99 109.95-51.66.7-.94 7.33-14.76 7.33-14.76l-10.98-7.38zm-494.72-39.14H96.37v72.92h72.92v-72.92zm94.21 0h-72.92v72.92h72.92v-72.92zm94.21 0h-72.92v72.92h72.92v-72.92zm94.21 0H379v72.92h72.92v-72.92zm-376.82 0H2.16v72.92h72.92v-72.92zm94.21-92.11H96.39v72.92h72.92V92.1zm94.21 0H190.6v72.92h72.92V92.1zm94.21 0h-72.92v72.92h72.92V92.1zM357.7 0h-72.92v72.92h72.92V0zm1972.23 424.7c0 18.94-14.87 33.81-34.21 33.81s-34.42-14.87-34.42-33.81 15.27-33.4 34.42-33.4 34.21 14.87 34.21 33.4zm-60.08 0c0 14.87 11 26.68 26.07 26.68s25.46-11.81 25.46-26.47-10.8-26.89-25.65-26.89-25.87 12.02-25.87 26.68zm20.58 17.52h-7.74v-33.4c3.04-.61 7.33-1.02 12.82-1.02 6.32 0 9.16 1.02 11.61 2.45 1.84 1.42 3.26 4.07 3.26 7.33 0 3.67-2.85 6.52-6.91 7.74v.41c3.24 1.21 5.08 3.66 6.1 8.14 1.01 5.09 1.62 7.13 2.45 8.35h-8.35c-1.02-1.22-1.64-4.27-2.65-8.15-.61-3.66-2.65-5.29-6.93-5.29h-3.66v13.45zm.2-18.94h3.66c4.28 0 7.74-1.42 7.74-4.88 0-3.06-2.23-5.11-7.13-5.11-2.03 0-3.46.21-4.27.43v9.56zM1017.65 86.68c-4.79-4.68-10.54-7.06-17.43-7.06S987.41 82 982.8 86.68c-4.62 4.68-6.88 10.68-6.88 17.83v119.4c-23.7-19.59-51.05-29.47-82.16-29.47-36.16 0-67.08 13.06-92.7 39.27-25.62 26.12-38.34 57.72-38.34 94.78s12.81 68.57 38.34 94.78c25.62 26.12 56.46 39.27 92.7 39.27s66.74-13.06 92.7-39.27c25.62-25.86 38.34-57.45 38.34-94.78V104.5c0-7.15-2.35-13.15-7.15-17.83zm-48.18 274.11v.18c-4.27 10.15-10.11 19.06-17.51 26.65-7.4 7.68-16.12 13.68-26.05 18.18-10.02 4.5-20.65 6.71-32.06 6.71s-22.3-2.21-32.32-6.71-18.65-10.5-25.96-18.09c-7.32-7.59-13.15-16.5-17.42-26.65-4.27-10.24-6.45-21.09-6.45-32.57s2.18-22.33 6.45-32.57c4.27-10.24 10.11-19.06 17.42-26.65 7.32-7.59 16.03-13.59 25.96-18.09 10.02-4.5 20.74-6.71 32.32-6.71s22.04 2.21 32.06 6.71c10.02 4.5 18.65 10.5 26.05 18.18 7.4 7.68 13.24 16.59 17.51 26.65 4.27 10.15 6.45 20.92 6.45 32.39s-2.18 22.33-6.45 32.39zm1130.79-83.75c-6.36-15.89-16.05-30.27-28.76-43.16l-.17-.09c-25.88-26.12-56.82-39.27-92.7-39.27s-67.09 13.06-92.71 39.27c-25.62 26.12-38.33 57.72-38.33 94.78s12.81 68.57 38.33 94.78c25.62 26.12 56.47 39.27 92.71 39.27 32.92 0 61.41-10.85 85.64-32.56 4.69-4.94 7.06-10.94 7.06-17.92s-2.26-13.15-6.89-17.83c-4.61-4.68-10.45-7.06-17.42-7.06-6.09.18-11.5 2.21-16.11 6.27-7.32 6.35-15.25 11.21-23.87 14.39-8.63 3.18-18.04 4.77-28.31 4.77-9.07 0-17.78-1.41-26.05-4.32-8.29-2.91-16.03-6.89-22.92-12.09-6.98-5.21-12.98-11.38-18.12-18.71-5.14-7.24-9.06-15.27-11.67-24.09h185.32c6.87 0 12.62-2.38 17.42-7.06 4.8-4.68 7.15-10.68 7.15-17.83 0-18.53-3.24-35.74-9.58-51.54zm-200.48 26.65c2.53-8.74 6.36-16.77 11.5-24.09 5.15-7.24 11.24-13.5 18.21-18.71 7.06-5.21 14.72-9.18 23.17-12.09 8.44-2.91 17.06-4.32 25.97-4.32s17.51 1.41 25.86 4.32c8.37 2.91 16.05 6.88 22.92 12.09 6.98 5.21 13.07 11.38 18.21 18.71 5.22 7.24 9.16 15.27 11.86 24.09h-157.71zm428.21-92.4c-4.36-4.32-9.85-7.68-16.47-10.15-6.62-2.47-13.85-4.15-21.78-5.12-7.84-.97-15.25-1.41-22.12-1.41-15.61 0-30.24 2.56-44 7.68-13.77 5.12-26.49 12.44-38.17 21.97v-4.76c0-6.88-2.35-12.71-7.15-17.56-4.78-4.85-10.45-7.32-17.15-7.32s-12.64 2.47-17.42 7.32c-4.8 4.85-7.15 10.77-7.15 17.56v218.25c0 6.88 2.35 12.71 7.15 17.56 4.78 4.85 10.53 7.32 17.42 7.32s12.45-2.47 17.15-7.32c4.8-4.85 7.15-10.77 7.15-17.56V328.58c0-11.65 2.18-22.59 6.45-32.83 4.27-10.24 10.11-19.06 17.51-26.65 7.42-7.59 16.13-13.59 26.05-17.92 10.02-4.41 20.66-6.62 32.08-6.62s22.2 2.03 32.06 6c3.91 1.77 7.32 2.65 10.28 2.65 3.4 0 6.62-.62 9.58-1.94 2.96-1.32 5.58-3.09 7.76-5.38 2.18-2.29 3.91-4.94 5.22-8.03 1.31-3 2.01-6.27 2.01-9.8 0-6.88-2.18-12.44-6.53-16.77h.08zm-1023.01 65.83c-6.36-15.8-15.86-30.27-28.66-43.33-25.87-26.12-56.8-39.27-92.7-39.27s-67.08 13.06-92.7 39.27c-25.62 26.12-38.33 57.72-38.33 94.78s12.81 68.57 38.33 94.78c25.62 26.12 56.46 39.27 92.7 39.27s66.74-13.06 92.7-39.27c25.62-25.86 38.34-57.45 38.34-94.78-.18-18.53-3.4-35.65-9.67-51.45zm-45.65 83.66v.18c-4.27 10.15-10.11 19.06-17.51 26.65-7.4 7.68-16.12 13.68-26.05 18.18s-20.65 6.71-32.06 6.71-22.3-2.21-32.32-6.71-18.65-10.5-25.96-18.09c-7.32-7.59-13.15-16.5-17.42-26.65-4.27-10.24-6.45-21.09-6.45-32.57s2.18-22.33 6.45-32.57c4.27-10.24 10.11-19.06 17.42-26.65 7.32-7.59 16.03-13.59 25.96-18.09 10.02-4.5 20.74-6.71 32.32-6.71s22.04 2.21 32.06 6.71c10.02 4.5 18.65 10.5 26.05 18.18 7.4 7.68 13.24 16.59 17.51 26.65 4.27 10.15 6.45 20.92 6.45 32.39s-2.18 22.33-6.45 32.39zm569.78-141.37c0-3.35-.7-6.53-2-9.53-1.31-3-3.05-5.73-5.23-8.03-2.18-2.29-4.79-4.15-7.75-5.38-2.96-1.23-6.18-1.94-9.58-1.94-4.88 0-9.24 1.24-13.07 3.8l-139.92 93.11V104.68c0-7.06-2.35-12.97-7.14-17.83-4.79-4.85-10.45-7.32-17.16-7.32s-12.63 2.47-17.43 7.32c-4.79 4.85-7.14 10.77-7.14 17.83v332.71c0 6.88 2.35 12.8 7.14 17.74 4.79 4.94 10.54 7.41 17.43 7.41s12.46-2.47 17.16-7.41c4.79-4.94 7.14-10.86 7.14-17.74v-86.4l28.58-19.15 108.12 124.17c4.36 4.32 9.85 6.44 16.38 6.44 3.4 0 6.62-.62 9.58-1.94 2.96-1.24 5.58-3.09 7.75-5.38 2.18-2.29 3.92-4.94 5.23-8.03 1.31-3 2-6.27 2-9.53 0-6.53-2.26-12.36-6.8-17.47l-100.63-115.87 98.01-65.13c6.27-4.32 9.32-10.94 9.32-19.86v.18zm-414.26 49.68c7.49-7.59 16.21-13.59 26.23-17.92 10.02-4.41 20.65-6.62 32.06-6.62 10.28 0 19.78 1.77 28.58 5.29 8.71 3.53 17.08 8.74 25 15.53 4.7 3.79 10.02 5.73 15.94 5.73 7.06 0 12.81-2.38 17.43-7.15 4.62-4.77 6.88-10.77 6.88-17.92s-2.79-13.77-8.45-18.88c-24.05-21.71-52.53-32.57-85.38-32.57-36.16 0-67.08 13.06-92.7 39.27-25.62 26.12-38.33 57.72-38.33 94.78s12.81 68.57 38.33 94.78c25.62 26.12 56.46 39.27 92.7 39.27 32.76 0 61.25-10.85 85.38-32.57 5.14-5.29 7.76-11.38 7.76-18.44s-2.27-13.15-6.88-17.83c-4.62-4.68-10.45-7.06-17.42-7.06-5.92.18-11.07 1.94-15.42 5.29-7.84 6.88-16.03 12-24.83 15.44-8.71 3.44-18.21 5.12-28.58 5.12-11.41 0-22.04-2.21-32.06-6.62-10.02-4.41-18.73-10.41-26.23-17.91-7.49-7.5-13.42-16.5-17.69-26.65-4.27-10.24-6.45-21.18-6.45-32.83s2.18-22.59 6.45-32.83c4.27-10.24 10.19-19.06 17.69-26.65v-.09z"
              stroke-width="0"
            ></path>
          </svg>
        </a>
        <nav className="flex-grow flex justify-center">
          <ul
            className="flex gap-2 justify-center relative"
            onMouseLeave={handleMouseLeave}
          >
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <button
                  id={`navItem${navItem.id}`}
                  onClick={() => handleMouseEnter(navItem.id)}
                  onMouseEnter={() => handleMouseEnter(navItem.id)}
                  className={`font-medium group ${navItem.id === activeNavItemId && "bg-slate-700"} transition-colors duration-300 ease-in-out rounded-full py-2 px-4 inline-flex items-center gap-1`}
                >
                  {navItem.text}
                  <ChevronDownIcon
                    size={16}
                    className={`${navItem.id === activeNavItemId && "rotate-180"} transition-transform duration-300 ease-in-out`}
                  />
                </button>
              </li>
            ))}
            <div className="h-[calc(13px+0.5rem)] absolute left-0 right-0 top-[100%]" />
            <AnimatePresence>
              {activeNavItemId && (
                <motion.div
                  id="navItemContainer"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="rounded border border-slate-500 bg-gradient-to-b from-slate-950 to-slate-900 p-4 absolute left-0 right-0 top-[calc(100%+13px+0.5rem)]"
                >
                  <motion.div
                    animate={{
                      left,
                    }}
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                    }}
                    className="absolute border border-slate-500 bg-slate-950 rotate-45 w-5 h-5 left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"
                  />
                  {navItems.map((navItem) => (
                    <div className="overflow-hidden">
                      {activeNavItemId === navItem.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: !movementDirection
                              ? 0
                              : movementDirection === "left"
                                ? 100
                                : -100,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          {navItem.component}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button className="border-slate-700 hover:bg-slate-800 transition-colors duration-300 ease-in-out font-medium border rounded-full py-2 px-4">
            Sign in
          </button>
          <button className="bg-primary-500 hover:bg-primary-600 transition-colors duration-300 ease-in-out rounded-full font-medium py-2 px-4">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
