import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import './EditProduct.css'

class EditProduct extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to top of page as cursor was at the bottom in previous page
    }
    render() {
        console.log('EditProduct this.props.match.params:', this.props.match.params)
        const { id } = this.props.match.params;
        console.log("id1:", id);
        console.log("this.props.productList:", this.props.productsList);
        let editForm = this.props.productsList.filter((val) => {
            return val.product_id === id;
        }

        ).map((val) => {
            return <div key={val.product_id}><EditForm key={val.product_id} productVal={val} /></div>;
        })

        return (
            <div className="container">
                <Header />
                <BreadCrumb />
                <Link to={`/products/${id}`} className="badge badge-primary" > Back To Product Description Page </Link>
                <h3 className="headerTitle">Product <span className="badge badge-secondary">Edit</span></h3>
                {editForm}
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { productsList: state.productsList };
}

export default connect(mapStateToProps, null)(EditProduct);