import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/ProductList';
import { setBreadCrumb, removeBreadCrumb } from '../../actions/BreadCrumb';
import Modal from '../common/Modal';
import './EditProduct.css';

class EditForm extends Component {

    constructor(props) {
        super(props);
        console.log('inside constructor of EditForm props:', props);
        this.state = {
            productId: props.productVal.product_id,
            productName: props.productVal.product_name,
            productDescription: props.productVal.product_description,
            productPhoto: props.productVal.product_photo,
            productCategory: props.productVal.product_category,
            productPrice: props.productVal.product_price,
            redirection: false
        }
    }

    componentDidMount() {
        // Set the new Breadcrumb value
        this.props.setBreadCrumb("Edit Product");
    }
    componentWillUnmount(){
        // Remove the last Breadcrumb value
        this.props.removeBreadCrumb();
    }

    handleOnChange = (event) => {
        console.log('EditForm inside handleOnChange event:', event.target.id);
        console.log('inside handleOnChange event.target.value:', event.target.value);
        const { id, value } = event.target;
        this.setState({
            [id]: value,
        })
    }

    handleOnSubmit = () => {
        console.log('EditForm inside handleOnSubmit state:', this.state);
        this.setState({
            redirection: true,
        })
        this.props.updateProduct(this.state);
    }

    render() {
        console.log('inside render of EditForm this.props:', this.props);

        if (this.state.redirection) {
            return <Redirect to="/" />
        }

        const EditFormRender = (<div className="formstyle">
        <div className="form-group">
            <label>Product Id</label>
            <input id="productId" type="text" readOnly className="form-control-plaintext" value={this.state.productId} />
        </div>
        <div className="form-group">
            <label >Product Name</label>
            <input id="productName" type="text" className="form-control" placeholder="Enter Product Name" onChange={this.handleOnChange} value={this.state.productName} />
        </div>
        <div className="form-group">
            <label >Product Description</label>
            <input id="productDescription" type="text" className="form-control" placeholder="Enter Product Description" onChange={this.handleOnChange} value={this.state.productDescription} />
        </div>
        <div className="form-group">
            <label >Product Photo</label>
            <input id="productPhoto" type="text" className="form-control" value="https://picsum.photos/200/300/?random" onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
            <label >Product Category</label>
            <input id="productCategory" type="text" className="form-control" placeholder="Enter Software or Processor or RAM" onChange={this.handleOnChange} value={this.state.productCategory} />
        </div>

        <div className="form-group">
            <label >Product Price</label>
            <input id="productPrice" type="text" className="form-control" placeholder="Enter Product Price:[Rs 223]" onChange={this.handleOnChange} value={this.state.productPrice} />
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Submit</button>    
        <Modal handleOnSubmit={this.handleOnSubmit} title="Edit Product"/>
        </div>)
        
        return EditFormRender;
        
    }
}

export default connect(null, { updateProduct, setBreadCrumb, removeBreadCrumb })(EditForm);
