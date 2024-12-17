import React from 'react'

export default function Services() {

  return (<>
    <div className='row services' id="services">
      <div className="col-sm-12 services">
        <h1>Our Services</h1>
      </div>
    </div>
    <div className="row services">
      <div className="col-sm-3 mb-3">
        <div className="card">
        <i class="fa fa-bug" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Bug Fixing</h5>
            <p className="card-text">Bug fixing is the process of identifying, analyzing, and resolving errors in software that cause incorrect behavior or failures. It ensures the application functions as intended, improving quality, user experience, and security. Steps include identifying the issue, analyzing root causes, resolving it, testing the fix, and deploying to production.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
        <i class="fa fa-plug" aria-hidden="true"></i>

          <div className="card-body">
            <h5 className="card-title">Plugin Integration</h5>
            <p className="card-text">Plugin integration is the process of adding third-party software components (plugins) to a system or application to enhance functionality or extend features. It involves installing, configuring, and testing the plugin to ensure seamless compatibility with the existing setup, improving performance, usability, and capabilities without extensive custom development.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-wordpress" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Wordpress Site</h5>
            <p className="card-text">
            A WordPress site is a website built using WordPress, a popular content management system (CMS) known for its ease of use and flexibility. It enables users to create, customize, and manage websites, from blogs to e-commerce stores, using themes, plugins, and a user-friendly interface, without requiring extensive coding knowledge.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3">
        <div className="card">
          <i class="fa fa-server" aria-hidden="true"></i>
          <div className="card-body">
            <h5 className="card-title">Server menegement</h5>
            <p className="card-text">Server management is the process of monitoring, maintaining, and optimizing servers to ensure performance, security, and uptime. Tasks include updates, backups, troubleshooting, and resource allocation. Proper server management guarantees stable hosting environments, minimizes downtime, and supports the seamless operation of applications, websites, or business-critical services.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
