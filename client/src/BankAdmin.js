import React from "react";
import axios from "axios";
import Bankform from "./BankForm";
import BankTable from "./BankTable";

class BankAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankName: "",
            logoUrl="",
            category="",
            editing: false,
            formSubmitting: false,
            formSuccess: false,
            formError: false,
            bank: [],

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditBank = this.handleEditBank.bind(this);
    }




    componentDidMount() {
        this.fetchBank();
    }

    fetchBank() {
        axios
            .get("/api/bank")
            .then(response => {
                this.setState({
                    bank: response.data,

                });
            })
            .catch(error => {
                this.setState({
                    bank: [],
                });
            });

    }
    resetFormState(){
        this.setState({
            bankName:"",
            editing:false,
            formSubmitting:false,
            formSuccess:false,
            formError:false
        })
    }
    handleNameChange(e){
        e.preventDefault();

        this.setState({
            bankName:e.target.value
        });
    }
    handleEditBank(bank){
        return()=>{
            this.setState({})
        }
    }
}


render(){
handleSubmit(e) {
    e.preventDefault();
}


    return (
        <div className="bank-admin">
<h2>BankForm</h2>
<Bankform
bankName={}
handleNameChange={this.handleNameChange}
handleSubmit={this.handleSubmit}
logoUrl={}
handleLogoUrlChange={this.handleNameChange}
handleSubmit={this.handleSubmit}
category={}
/>
<BankTable 
bank = {bank}
/>
        </div>
    );
}