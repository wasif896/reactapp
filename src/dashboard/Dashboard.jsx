import Header from "../components/Header";
import Sidebarr from "../components/Sidebarr";
const Dashboard = () => {
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading">

      {/* Header Mobile */}
      <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed">
        <div className="kt-header-mobile__logo">
          <a href="/login">
            <img alt="Logo" style={{ width: "110px" }} src="/assets/images/agq_main_logo.svg" />
          </a>
        </div>
        <div className="kt-header-mobile__toolbar">
          <button className="kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left" id="kt_aside_mobile_toggler"><span></span></button>
          <button className="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more"></i></button>
        </div>
      </div>
      {/* End Header Mobile */}

      <div className="kt-grid kt-grid--hor kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          {/* Aside */}
          <button className="kt-aside-close" id="kt_aside_close_btn"><i className="la la-close"></i></button>
          <div className="kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">

            {/* Aside Brand */}
            <div className="kt-aside__brand kt-grid__item" id="kt_aside_brand">
              <div className="kt-aside__brand-logo">
                <a href="/login">
                  <img alt="Logo" style={{ width: "110px" }} src="/assets/images/agq_main_logo.svg" />
                </a>
              </div>
              <div className="kt-aside__brand-tools">
                <button className="kt-aside__brand-aside-toggler" id="kt_aside_toggler"><span></span></button>
              </div>
            </div>
            {/* End Aside Brand */}

            {/* Aside Menu */}
            <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
              <div id="kt_aside_menu" className="kt-aside-menu" data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                {/* You can replace this with the sidebar content */}
                <Sidebarr />
              </div>
            </div>
            {/* End Aside Menu */}
          </div>
          {/* End Aside */}

          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
            {/* Replace with Header component */}
            <Header />

            {/* Content */}
            <div className="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
            {/* {{--{{dd(Auth::user())}}--}} */}
<div className="kt-subheader   kt-grid__item" id="kt_subheader">
    <div className="kt-container  kt-container--fluid ">
        <div className="kt-subheader__main">
            <h3 className="kt-subheader__title">
                Dashboard </h3>
            <span className="kt-subheader__separator kt-hidden"></span>
            <div className="kt-subheader__breadcrumbs">
                <a href="#" className="kt-subheader__breadcrumbs-home"><i className="flaticon2-shelter"></i></a>
                <span className="kt-subheader__breadcrumbs-separator"></span>
                {/* <a href="" className="kt-subheader__breadcrumbs-link"> {{isset($section_name)?$section_name:''}} </a> */}
            </div>
        </div>

    </div>
</div>


<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

    {/* <!-- add inner page content here--> */}
</div>
            </div>
            {/* End Content */}

            {/* Replace with Footer component */}
            <div className="kt-footer">Footer content here</div>
          </div>
        </div>
      </div>

      {/* Quick Panel */}
      <div id="kt_quick_panel" className="kt-quick-panel">
        <a href="#" className="kt-quick-panel__close" id="kt_quick_panel_close_btn"><i className="flaticon2-delete"></i></a>
        <div className="kt-quick-panel__nav">
          <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand  kt-notification-item-padding-x" role="tablist">
            <li className="nav-item active">
              <a className="nav-link active" data-toggle="tab" href="#kt_quick_panel_tab_notifications" role="tab">Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#kt_quick_panel_tab_logs" role="tab">Audit Logs</a>
            </li>
          </ul>
        </div>
        <div className="kt-quick-panel__content">
          <div className="tab-content">
            <div className="tab-pane fade show kt-scroll active" id="kt_quick_panel_tab_notifications" role="tabpanel">
              <div className="kt-notification">
                <a href="#" className="kt-notification__item">
                  <div className="kt-notification__item-icon">
                    <i className="flaticon2-line-chart kt-font-success"></i>
                  </div>
                  <div className="kt-notification__item-details">
                    <div className="kt-notification__item-title">
                      New order has been received
                    </div>
                    <div className="kt-notification__item-time">
                      2 hrs ago
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="tab-pane fade kt-scroll" id="kt_quick_panel_tab_logs" role="tabpanel">
              <div className="kt-notification-v2">
                <a href="#" className="kt-notification-v2__item">
                  <div className="kt-notification-v2__item-icon">
                    <i className="flaticon-bell kt-font-brand"></i>
                  </div>
                  <div className="kt-notification-v2__itek-wrapper">
                    <div className="kt-notification-v2__item-title">
                      5 new user-generated reports
                    </div>
                    <div className="kt-notification-v2__item-desc">
                      Reports based on sales
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Quick Panel */}

      {/* Scrolltop */}
      <div id="kt_scrolltop" className="kt-scrolltop">
        <i className="fa fa-arrow-up"></i>
      </div>

    </div>
  );
};

export default Dashboard;

