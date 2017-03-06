import React, { PropTypes } from "react"
import ModuleListContainer from "components/ModuleList"
import classNames from "./style.css"

/*
export const Header = ({ className, drawer, children, ...rest }) => (
  <div { ...rest } className={ classNames.header + (className ? " " + className : "") }>
    <div className={ classNames.divLogo }>
      <LogoTitle className={ classNames.logo }/>
      { drawer ? <DrawerIcon className={ classNames.icon }/> : "" }
    </div>
    <div className={ classNames.divHeader }>
    { children }
    <ModuleListContainer />
    </div>
  </div>
)*/

const pathImages = "/public/gui/metro/user/media/assets/images/charte_mfi_2016/"

export const Header = ({ className, ...rest }) => (
  <div { ...rest } className={ classNames.header + (className ? " " + className : "") }>
    <div className={ classNames.divLogo }>
      <img className={ classNames.logoMfi } src={ pathImages + "logo_mfi_blanc.png" } />
    </div>
    <div className={ classNames.divHeader }>
      <ul className={ "nav " + classNames.navbarToolbar }>
        <li className={ classNames.titlebar }>
          <span className={ classNames.productTitle }>SynergieWeb</span>
          <span className={ classNames.version }>1.0</span>
        </li>
      </ul>
      <ul className={ "nav navbar-right " + classNames.navbarToolbar } >
        <li className="hidden-float">
          <img className={ classNames.logoClient } src={ pathImages + "logo_asecna_blanc.png" } />
        </li>
        <li className={ classNames.profil }>
          <div className={ classNames.quidam }>
            Vous êtes connecté en tant que
            &nbsp;<strong>Administrateur</strong>
            <span></span><br />
            <a href="/public/gui/metro/user/admin/logout" className={ "btn " + classNames.btnMini }>Logout</a>
            <a
              href="#"
              className={ "btn " + classNames.btnMini }
              target="_blank"
              rel="noopener noreferrer"
            >
              Help
            </a>
          </div>
        </li>
      </ul>
      <ModuleListContainer />
    </div>
  </div>
)

Header.propTypes = {
  style : PropTypes.object,
  className : PropTypes.string
}

export default Header
