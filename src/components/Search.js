import React from "react";

export default function Search() {
  return (
    <div className="intro-x relative mr-3 sm:mr-6">
      <div className="search hidden sm:block">
        <input
          type="text"
          className="search__input input placeholder-theme-13"
          placeholder="Search..."
        />
        <i data-feather="search" className="search__icon"></i>
      </div>
      <a className="notification sm:hidden" href="#">
        {" "}
        <i data-feather="search" className="notification__icon"></i>{" "}
      </a>
      <div className="search-result">
        <div className="search-result__content">
          <div className="search-result__content__title">Pages</div>
          <div className="mb-5">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                {" "}
                <i className="w-4 h-4" data-feather="inbox"></i>{" "}
              </div>
              <div className="ml-3">Mail Settings</div>
            </a>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                {" "}
                <i className="w-4 h-4" data-feather="users"></i>{" "}
              </div>
              <div className="ml-3">Users & Permissions</div>
            </a>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                {" "}
                <i className="w-4 h-4" data-feather="credit-card"></i>{" "}
              </div>
              <div className="ml-3">Transactions Report</div>
            </a>
          </div>
          <div className="search-result__content__title">Users</div>
          <div className="mb-5">
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-3.jpg"
                />
              </div>
              <div className="ml-3">Robert De Niro</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                robertdeniro@gmail.com
              </div>
            </a>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-4.jpg"
                />
              </div>
              <div className="ml-3">Bruce Willis</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                brucewillis@gmail.com
              </div>
            </a>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-10.jpg"
                />
              </div>
              <div className="ml-3">Catherine Zeta-Jones</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                catherinezeta-jones@gmail.com
              </div>
            </a>
            <a href="#" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-3.jpg"
                />
              </div>
              <div className="ml-3">Christian Bale</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                christianbale@gmail.com
              </div>
            </a>
          </div>
          <div className="search-result__content__title">Products</div>
          <a href="#" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-3.jpg"
              />
            </div>
            <div className="ml-3">Samsung Galaxy S20 Ultra</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Smartphone &amp; Tablet
            </div>
          </a>
          <a href="#" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-15.jpg"
              />
            </div>
            <div className="ml-3">Oppo Find X2 Pro</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Smartphone &amp; Tablet
            </div>
          </a>
          <a href="#" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-1.jpg"
              />
            </div>
            <div className="ml-3">Nike Air Max 270</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Sport &amp; Outdoor
            </div>
          </a>
          <a href="#" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-3.jpg"
              />
            </div>
            <div className="ml-3">Samsung Galaxy S20 Ultra</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Smartphone &amp; Tablet
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
