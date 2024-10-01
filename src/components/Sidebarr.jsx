
const Sidebarr = () => {
  // Simulate user access level (replace with actual logic if needed)
  const userAccess = 1;
  
  // Simulate current route name (replace with actual route checking logic)
  const currentRouteName = 'cities.index';

  return (
    <div>
      <ul className="kt-menu__nav">
        <li className={`kt-menu__item ${currentRouteName === 'admin.dashboard' ? 'kt-menu__item--open kt-menu__item--active' : ''}`} aria-haspopup="true">
          <a href="/admin/dashboard" className="kt-menu__link">
            <i className="kt-menu__link-icon flaticon2-architecture-and-city"></i>
            <span className="kt-menu__link-text">Dashboard</span>
          </a>
        </li>

        <li className="kt-menu__section">
          <h4 className="kt-menu__section-text">Home</h4>
          <i className="kt-menu__section-icon flaticon-more-v2"></i>
        </li>

        {userAccess === 1 && (
          <>
            <li className={`kt-menu__item kt-menu__item--submenu ${['cities.index', 'cities.create', 'cities.edit'].includes(currentRouteName) ? 'kt-menu__item--open kt-menu__item--active' : ''}`} aria-haspopup="true">
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-icon flaticon2-browser-2"></i>
                <span className="kt-menu__link-text">Cities</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className={`kt-menu__item ${currentRouteName === 'cities.create' ? 'kt-menu__item--active' : ''}`} aria-haspopup="true">
                    <a href="/cities/create" className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">Add City</span>
                    </a>
                  </li>
                  <li className={`kt-menu__item ${currentRouteName === 'cities.index' ? 'kt-menu__item--active' : ''}`} aria-haspopup="true">
                    <a href="/cities" className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">All Cities</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className={`kt-menu__item kt-menu__item--submenu ${['zipcodes.index', 'zipcodes.create', 'zipcodes.edit'].includes(currentRouteName) ? 'kt-menu__item--open kt-menu__item--active' : ''}`} aria-haspopup="true">
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-icon flaticon2-console"></i>
                <span className="kt-menu__link-text">Zipcodes</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item" aria-haspopup="true">
                    <a href="/zipcodes/create" className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">Add Zipcode</span>
                    </a>
                  </li>
                  <li className="kt-menu__item" aria-haspopup="true">
                    <a href="/zipcodes" className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">All Zipcodes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className={`kt-menu__item kt-menu__item--submenu ${currentRouteName === 'admin.quotes' ? 'kt-menu__item--open kt-menu__item--active' : ''}`} aria-haspopup="true">
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-icon flaticon2-console"></i>
                <span className="kt-menu__link-text">Quotes</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item" aria-haspopup="true">
                    <a href="/admin/quotes" className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">All Quotes ({new Date().getFullYear()})</span>
                    </a>
                  </li>
                  <li className="kt-menu__item" aria-haspopup="true">
                    <a href={`/admin/quotes/${1}`} className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">All Quotes ({new Date().getFullYear() - 1})</span>
                    </a>
                  </li>
                  <li className="kt-menu__item" aria-haspopup="true">
                    <a href={`/admin/quotes/${2}`} className="kt-menu__link">
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                      <span className="kt-menu__link-text">All Quotes ({new Date().getFullYear() - 2})</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </>
        )}

        <li className="kt-menu__item kt-menu__item--submenu" aria-haspopup="true">
          <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
            <i className="kt-menu__link-icon flaticon2-console"></i>
            <span className="kt-menu__link-text">Orders</span>
            <i className="kt-menu__ver-arrow la la-angle-right"></i>
          </a>
          <div className="kt-menu__submenu">
            <span className="kt-menu__arrow"></span>
            <ul className="kt-menu__subnav">
              <li className="kt-menu__item" aria-haspopup="true">
                <a href="/orders/current" className="kt-menu__link">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                  <span className="kt-menu__link-text">Current Week Order</span>
                </a>
              </li>
              <li className="kt-menu__item" aria-haspopup="true">
                <a href="/orders/last" className="kt-menu__link">
                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                  <span className="kt-menu__link-text">Last Week Order</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebarr;

