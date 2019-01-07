import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from './AddForm';
import Header from '../common/Header'
import Footer from '../common/Footer'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className="container">
            <Header />
            <BreadCrumb />
            <Link to="/" className="badge badge-primary" > Back To Product Listing Page </Link>
            <h3 className="headerTitle">Create Product <span className="badge badge-secondary">New</span></h3>
            <AddForm />
            <Footer />
        </div>
    );
}

export default AddProduct;
