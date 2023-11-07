import { Row, Col, NavLink } from 'reactstrap'
import { IMenuItem, Menu } from './../components/Menu'

import './../assets/styles/footer.css'
import { siteLinksMenuItems, companyInfoMenuItems, socialMediaMenuItems } from '../assets/Links'

function Footer() {
  return (
    <footer className="app-footer">
      <div className="container-fluid context-area text-start">
        <Row>
          <Col>
            <Menu vertical label="Site Links"
              items={siteLinksMenuItems}
              renderItem={(item: IMenuItem) => (
                <NavLink href={item.link} className="p-0 text-reset">{item.title}</NavLink>
                )} />
          </Col>
          <Col>
            <Menu vertical label="Company Information"
              items={companyInfoMenuItems}
              renderItem={(item: IMenuItem) => (
                <NavLink href={item.link} className="p-0 text-reset">{item.title}</NavLink>
                )} />
          </Col>
          <Col>
            <Menu vertical className="flex-md-row" label="Social Media"
              items={socialMediaMenuItems}
              renderItem={(item: IMenuItem) => (
                <NavLink href={item.link} className="p-0">{<item.img />}</NavLink>
                )} />
          </Col>
        </Row>
        <div className="row copyright">
          <div className="col">
            &copy; 2007 - {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>   
  );
}

export default Footer;