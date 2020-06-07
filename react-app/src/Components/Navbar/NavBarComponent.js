import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBarComponent.css';

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollTop: 0,
            width: 0,
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        
        this.setState({
            width: window.innerWidth
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.scrollingElement.scrollTop;
        this.setState({
            scrollTop: scrollTop
        })
    }

    handleResize(event) {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        return (
            <Navbar id={this.state.scrollTop > 70 ? 'navbar-main-scrolled' : 'navbar-main'} 
                className={this.state.width > 768 ? 'navbar-reg': 'navbar-small'} expand="lg" fixed="top">
                <Navbar.Brand id="navbar-title" href="/"> {this.props.brand} </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav id="navbar-nav">
                        <Nav.Link href="#home"> Home </Nav.Link>
                        <Nav.Link href="#about"> About </Nav.Link>
                        <Nav.Link href="#projects"> Projects </Nav.Link>
                        <Nav.Link href="#contact"> Contact </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBarComponent;