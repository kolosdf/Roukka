import React, { Fragment, useEffect,  useState } from 'react';

import planIm1 from '../../assets/images/stock-photos/plan1.jpg';
import planIm2 from '../../assets/images/stock-photos/plan2.jpg';
import planIm3 from '../../assets/images/stock-photos/plan3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect, useDispatch } from 'react-redux'




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
    DropdownMenu,Modal, InputGroup, Input, FormGroup,InputGroupText
} from 'reactstrap';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import PageTitle from '../../Components/PageTitle'
import { getPlans } from '../../config/ActionCreators';



function FilaTable(props) {

    const imagen = (planId) => {
        switch (planId) {
            case 1: return planIm1;
            case 2: return planIm2;
            case 3: return planIm3;
            default: return planIm1;
        }
    }

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={imagen(props.plan.id)} />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {props.plan.nombre}
                        </a>
                        <span className="text-black-50 d-block">
                            $ {props.plan.precio}
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <Badge color="warning" className="h-auto py-0 px-3">
                    Activo
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
    )
}


function ModalRegistrarPlan (props) {


    

    return(
        <Modal zIndex={2000} centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="bg-secondary shadow-none border-0">
                    <div className="card-header d-block bg-white pt-4 pb-5">
                        <div className="text-muted text-center mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div className="text-center">
                            <Button color="facebook" className="mr-2">
                                <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </span>
                                <span className="btn-wrapper--label">Facebook</span>
                            </Button>
                            <Button color="twitter" className="ml-2">
                                <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </span>
                                <span className="btn-wrapper--label">Twitter</span>
                            </Button>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form>
                            <div className="form-group mb-3">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['far', 'envelope']} />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Email" type="email" />
                                </div>
                            </div>
                            <FormGroup>
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Password" type="password" />
                                </div>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id="customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customCheckLogin">
                                    <span>Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button color="second" className="mt-4">
                                    Sign in
                    </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </Modal>)
}

function MPlanRoukka(props) {

    const modificarPlan = (id, nombre, precio) => {

    }

    const [modal5, setModal5] = useState(false);
    const toggle5 = () => setModal5(!modal5);
    
    const planes = props.plans.plans.map((plan) => {
        return (
            <FilaTable plan={plan} key={plan.id} />
        )
    })

    console.log(props.Plans)


    useEffect(() => {
        dispatch(getPlans())
    }, []);

    const dispatch = useDispatch();

    return (
        <Fragment>

            <ModalRegistrarPlan modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Planes de funcionalidades"
                titleDescription="Conjunto de planes presentes en la aplicación" modal={toggle5}/>
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
                                    <th style={{ width: '40%' }}>Plan</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>



                            <tbody>
                                {planes}
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
    plans: state.PlanRoukka,
});





/*
  const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedBackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) },
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),

});
*/
export default connect(mapStateToProps)(MPlanRoukka);