import React from "react";

export default function SideView({ipAddress,handleDeeplink}) {
  const contentId = '9652f3bbb78ecb3ed0cc1bf7c02c9ef76bbe6a2f1e7979937915553e248e685a'
  return (
    <div>
      <a
        className="btn btn-outline-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Run DeepLink
      </a>

        {/* Canvas  */}
      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Deeplink Commands
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          

          <div>
            <form className="row g-3">
              <div className="col-auto">
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">
                    { `https://${ipAddress}/launch/dev?contentId/` }
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button className="btn btn-secondary " type="button" onClick={()=>{handleDeeplink(contentId)}}>
                 Run 
                </button>
              </div>
            </form>
          </div>

          <div>
            Deep link requests contain two key parameters: contentid and
            mediaType.(for example, series=myAwesomeShow|Season=1|Episode=1).
            <pre style={{ textOverflow: "clip" }}>
              http://192.168.1.114:8060/launch/50000?contentId=myAwesomeShow
            </pre>
          </div>
          
        </div>
      </div>
    </div>
  );
}
