
const Header = () => {
  return (
    <>
      {/* begin:: Header */}
      <div id="kt_header" className="kt-header kt-grid__item kt-header--fixed">
        {/* begin: Header Menu */}
        <button
          className="kt-header-menu-wrapper-close"
          id="kt_header_menu_mobile_close_btn"
        >
          <i className="la la-close"></i>
        </button>
        <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
          <div
            id="kt_header_menu"
            className="kt-header-menu kt-header-menu-mobile kt-header-menu--layout-default"
          >
            <ul className="kt-menu__nav "></ul>
          </div>
        </div>
        {/* end: Header Menu */}

        {/* begin:: Header Topbar */}
        <div className="kt-header__topbar">
          {/*begin: Search */}
          <div
            className="kt-header__topbar-item kt-header__topbar-item--search dropdown"
            id="kt_quick_search_toggle"
          >
            <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
              <span className="kt-header__topbar-icon">
                <i className="flaticon2-search-1"></i>
              </span>
            </div>
            <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
              <div className="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact">
                <form method="get" className="kt-quick-search__form">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="flaticon2-search-1"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control kt-quick-search__input"
                      placeholder="Search..."
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="la la-close kt-quick-search__close"></i>
                      </span>
                    </div>
                  </div>
                </form>
                <div className="kt-quick-search__wrapper kt-scroll"></div>
              </div>
            </div>
          </div>
          {/*end: Search */}

          {/*begin: Notifications */}
          
          </div>
          {/*end: Notifications */}

          {/*begin: User Bar */}
          {/* <div className="kt-header__topbar-item kt-header__topbar-item--user">
            <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
              <div className="kt-header__topbar-user">
                <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                <span className="kt-header__topbar-username kt-hidden-mobile">{user.name}</span>
                {profilePic ? (
                  <img className="kt-radius-100" src={profilePic} alt="Profile" />
                ) : (
                  <img
                    alt="Profile"
                    className="kt-radius-100"
                    src={`${process.env.PUBLIC_URL}/assets/media/users/300_25.jpg`}
                  />
                )}
              </div>
            </div>
          </div> */}
          {/*end: User Bar */}
        </div>
        {/* end:: Header Topbar */}
      
      {/* end:: Header */}
    </>
  );
};

export default Header;


