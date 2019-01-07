import React, { Component } from 'react'

export default class Modal extends Component {

    render() {
        console.log('inside render of Modal this.props:', this.props);
        return (
            <div>                
                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{this.props.title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Do you really want to Save the changes?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.props.handleOnSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
