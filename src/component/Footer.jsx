import React from "react";
import SideView from "./SideView";

export default function Footer({ipAddress,handleDeeplink,connectionStatus}) {
  return (
    <div style={{ position: "fixed", bottom: "0px", width: "100%" }}>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
           {connectionStatus === 'success' ? <SideView ipAddress={ipAddress} handleDeeplink={handleDeeplink}/> : <span style={{color:'red'}}>Not connected to Roku device</span> }
            
          </section>
        </div>

        <div
          classNameName="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "10px" }}
        >
          © 2023 Roku Remote
          <p>
            <a
              href="https://amit-dogra.netlify.app/"
              class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Amit Kumar
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
