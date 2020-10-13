import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux'

import {
  Table,
  CardBody,
  Card,
  CardHeader,
  CustomInput,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import PageTitle from '../../Components/PageTitle'

function MPlanRoukka(props) {
    console.log(props.Plans)
  return (
    <Fragment>
    
    <PageTitle
    titleHeading="Planes de funcionalidades"
    titleDescription="Conjunto de planes presentes en la aplicación"/>
      <Card className="card-box mb-5">
        <div className="card-header">
          <div className="card-header--title">
            <small>Tables</small>
            <b>This table card has custom content</b>
          </div>
          <div className="card-header--actions">
            <Button
              tag="a"
              href="#/"
              onClick={e => e.preventDefault()}
              size="sm"
              color="link"
              className="text-primary"
              title="View details">
              <FontAwesomeIcon
                icon={['far', 'keyboard']}
                className="font-size-lg"
              />
            </Button>
          </div>
        </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table hover striped className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: '40%' }}>Employee</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color="primary"
                        size="sm"
                        className="px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-primary flex-column pt-2 pb-3">
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Completed
                    </Badge>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color="primary"
                        size="sm"
                        className="px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-primary flex-column pt-2 pb-3">
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="danger" className="h-auto py-0 px-3">
                      Declined
                    </Badge>
                  </td>
                  <td className="text-center">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color="primary"
                        size="sm"
                        className="px-2 py-0 no-caret">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                          pills
                          className="nav-primary flex-column pt-2 pb-3">
                          <NavItem className="px-3">
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              active>
                              <span>View details</span>
                              <Badge color="first" className="ml-auto">
                                New
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <li className="dropdown-divider" />
                          <NavItem>
                            <NavLink
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="text-danger mx-3">
                              <div className="nav-link-icon">
                                <FontAwesomeIcon icon={['fas', 'times']} />
                              </div>
                              <span>Delete</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="p-3 d-flex justify-content-center">
            <Pagination className="pagination-primary">
              <PaginationItem disabled>
                <PaginationLink
                  first
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink
                  previous
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'chevron-left']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  next
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  last
                  href="#/"
                  onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </CardBody>
      </Card>
      </Fragment>)
      
    }

const mapStateToProps = state => ({
        Plans: state.PlanRoukka,
});
      
export default connect(mapStateToProps)(MPlanRoukka);