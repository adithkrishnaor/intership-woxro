import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      applyTheme(storedTheme);
    }
  }, []);

  // Function to apply theme changes (use only html.dark)
  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Get HTML classes for debugging
  const [htmlClasses, setHtmlClasses] = useState("");

  useEffect(() => {
    // Update HTML classes for display
    setHtmlClasses(document.documentElement.className);
  }, [theme]);

  return (
    <>
      <nav className="flex justify-between items-center dark:bg-[#222934] bg-white h-20 fixed top-0 left-0 right-0 z-50 px-4">
        {/* Menu icon */}
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white text-[#181D25]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.125 12C2.125 11.5168 2.51675 11.125 3 11.125H21C21.4832 11.125 21.875 11.5168 21.875 12C21.875 12.4832 21.4832 12.875 21 12.875H3C2.51675 12.875 2.125 12.4832 2.125 12Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.125 6C2.125 5.51675 2.51675 5.125 3 5.125H21C21.4832 5.125 21.875 5.51675 21.875 6C21.875 6.48325 21.4832 6.875 21 6.875H3C2.51675 6.875 2.125 6.48325 2.125 6Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.125 18C2.125 17.5168 2.51675 17.125 3 17.125H21C21.4832 17.125 21.875 17.5168 21.875 18C21.875 18.4832 21.4832 18.875 21 18.875H3C2.51675 18.875 2.125 18.4832 2.125 18Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Logo */}
        <p className="text-2xl font-semibold dark:text-white text-[#181D25] -ml-14">
          Cartzilla
        </p>

        {/* Right side icons */}
        <div className="flex items-center space-x-6">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition ${
              theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-600"
            }`}
          >
            {theme === "light" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#181D25]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9732 2.57041C12.1425 2.87087 12.1195 3.24277 11.9145 3.52012C11.0425 4.69986 10.6229 6.15339 10.732 7.61636C10.8411 9.07933 11.4717 10.4545 12.509 11.4919C13.5463 12.5292 14.9216 13.1598 16.3845 13.2689C17.8475 13.378 19.301 12.9584 20.4808 12.0864C21.0869 11.6532 21.9233 12.1273 21.8722 12.8705C21.6996 14.7382 20.9986 16.5181 19.8514 18.002C18.7041 19.4859 17.1579 20.6123 15.3938 21.2495C13.6297 21.8867 11.7206 22.0083 9.88995 21.6001C8.05925 21.1919 6.38267 20.2708 5.05639 18.9445C3.7301 17.6182 2.80896 15.9416 2.40076 14.1109C1.99256 12.2802 2.11417 10.3712 2.75138 8.60705C3.38858 6.84295 4.51502 5.29681 5.99889 4.14954C7.48275 3.00227 9.26266 2.30133 11.1304 2.12873C11.4738 2.09699 11.8038 2.26995 11.9732 2.57041ZM19.7666 14.4719C18.6605 14.9146 17.46 15.104 16.2544 15.0141C14.3734 14.8738 12.6053 14.0631 11.2716 12.7293C9.93783 11.3956 9.1271 9.62746 8.98683 7.7465C8.89693 6.54094 9.08627 5.34036 9.52903 4.23426C8.6447 4.5215 7.81194 4.95981 7.0693 5.534C5.8484 6.47795 4.92158 7.7501 4.3973 9.20157C3.87301 10.653 3.77295 12.2238 4.10881 13.7301C4.44467 15.2364 5.20257 16.6158 6.29382 17.7071C7.38507 18.7983 8.76454 19.5562 10.2708 19.8921C11.7771 20.2279 13.3478 20.1279 14.7993 19.6036C16.2508 19.0793 17.5229 18.1525 18.4669 16.9316C19.0411 16.189 19.4794 15.3562 19.7666 14.4719Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <g clipPath="url(#clip0_603_3838)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7.875C9.72183 7.875 7.875 9.72183 7.875 12C7.875 14.2782 9.72183 16.125 12 16.125C14.2782 16.125 16.125 14.2782 16.125 12C16.125 9.72183 14.2782 7.875 12 7.875ZM6.125 12C6.125 8.75533 8.75533 6.125 12 6.125C15.2447 6.125 17.875 8.75533 17.875 12C17.875 15.2447 15.2447 17.875 12 17.875C8.75533 17.875 6.125 15.2447 6.125 12Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0.125C12.4832 0.125 12.875 0.516751 12.875 1V3C12.875 3.48325 12.4832 3.875 12 3.875C11.5168 3.875 11.125 3.48325 11.125 3V1C11.125 0.516751 11.5168 0.125 12 0.125Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 20.125C12.4832 20.125 12.875 20.5168 12.875 21V23C12.875 23.4832 12.4832 23.875 12 23.875C11.5168 23.875 11.125 23.4832 11.125 23V21C11.125 20.5168 11.5168 20.125 12 20.125Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.60128 3.60128C3.94299 3.25957 4.49701 3.25957 4.83872 3.60128L6.25872 5.02128C6.60043 5.36299 6.60043 5.91701 6.25872 6.25872C5.91701 6.60043 5.36299 6.60043 5.02128 6.25872L3.60128 4.83872C3.25957 4.49701 3.25957 3.94299 3.60128 3.60128Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7413 17.7413C18.083 17.3996 18.637 17.3996 18.9787 17.7413L20.3987 19.1613C20.7404 19.503 20.7404 20.057 20.3987 20.3987C20.057 20.7404 19.503 20.7404 19.1613 20.3987L17.7413 18.9787C17.3996 18.637 17.3996 18.083 17.7413 17.7413Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.125 12C0.125 11.5168 0.516751 11.125 1 11.125H3C3.48325 11.125 3.875 11.5168 3.875 12C3.875 12.4832 3.48325 12.875 3 12.875H1C0.516751 12.875 0.125 12.4832 0.125 12Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.125 12C20.125 11.5168 20.5168 11.125 21 11.125H23C23.4832 11.125 23.875 11.5168 23.875 12C23.875 12.4832 23.4832 12.875 23 12.875H21C20.5168 12.875 20.125 12.4832 20.125 12Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.25872 17.7413C6.60043 18.083 6.60043 18.637 6.25872 18.9787L4.83872 20.3987C4.49701 20.7404 3.94299 20.7404 3.60128 20.3987C3.25957 20.057 3.25957 19.503 3.60128 19.1613L5.02128 17.7413C5.36299 17.3996 5.91701 17.3996 6.25872 17.7413Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3987 3.60128C20.7404 3.94299 20.7404 4.49701 20.3987 4.83872L18.9787 6.25872C18.637 6.60043 18.083 6.60043 17.7413 6.25872C17.3996 5.91701 17.3996 5.36299 17.7413 5.02128L19.1613 3.60128C19.503 3.25957 20.057 3.25957 20.3987 3.60128Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_603_3838">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>

          {/* Search icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white text-[#181D25]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 3.875C7.06497 3.875 3.875 7.06497 3.875 11C3.875 14.935 7.06497 18.125 11 18.125C14.935 18.125 18.125 14.935 18.125 11C18.125 7.06497 14.935 3.875 11 3.875ZM2.125 11C2.125 6.09847 6.09847 2.125 11 2.125C15.9015 2.125 19.875 6.09847 19.875 11C19.875 15.9015 15.9015 19.875 11 19.875C6.09847 19.875 2.125 15.9015 2.125 11Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0313 16.0313C16.373 15.6896 16.927 15.6896 17.2687 16.0313L21.6187 20.3813C21.9604 20.723 21.9604 21.277 21.6187 21.6187C21.277 21.9604 20.723 21.9604 20.3813 21.6187L16.0313 17.2687C15.6896 16.927 15.6896 16.373 16.0313 16.0313Z"
              fill="currentColor"
            />
          </svg>

          {/* Cart icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white text-[#181D25] mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 20.875C8.93096 20.875 8.875 20.931 8.875 21C8.875 21.069 8.93096 21.125 9 21.125C9.06904 21.125 9.125 21.069 9.125 21C9.125 20.931 9.06904 20.875 9 20.875ZM7.125 21C7.125 19.9645 7.96447 19.125 9 19.125C10.0355 19.125 10.875 19.9645 10.875 21C10.875 22.0355 10.0355 22.875 9 22.875C7.96447 22.875 7.125 22.0355 7.125 21Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 20.875C19.931 20.875 19.875 20.931 19.875 21C19.875 21.069 19.931 21.125 20 21.125C20.069 21.125 20.125 21.069 20.125 21C20.125 20.931 20.069 20.875 20 20.875ZM18.125 21C18.125 19.9645 18.9645 19.125 20 19.125C21.0355 19.125 21.875 19.9645 21.875 21C21.875 22.0355 21.0355 22.875 20 22.875C18.9645 22.875 18.125 22.0355 18.125 21Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.125 1C0.125 0.516751 0.516751 0.125 1 0.125H5C5.41705 0.125 5.77613 0.419337 5.85798 0.828275L6.71797 5.125H23C23.2608 5.125 23.508 5.24131 23.6742 5.44224C23.8404 5.64316 23.9084 5.90776 23.8595 6.16391L22.2583 14.5605C22.1268 15.2223 21.7667 15.8168 21.2411 16.2399C20.7179 16.6611 20.0638 16.8857 19.3923 16.875H9.68765C9.01622 16.8857 8.3621 16.6611 7.83886 16.2399C7.31346 15.8169 6.95349 15.2227 6.82191 14.5612L5.15069 6.21131C5.14437 6.18584 5.13917 6.15994 5.13514 6.13365L4.28278 1.875H1C0.516751 1.875 0.125 1.48325 0.125 1ZM7.06823 6.875L8.53824 14.2195C8.58967 14.4785 8.73056 14.7111 8.93623 14.8767C9.1419 15.0423 9.39925 15.1302 9.66323 15.1252L9.68 15.125H19.4L19.4168 15.1252C19.6807 15.1302 19.9381 15.0423 20.1438 14.8767C20.3487 14.7117 20.4893 14.4802 20.5412 14.2224L20.5418 14.2195L21.9424 6.875H7.06823Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}
