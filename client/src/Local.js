import React from "react";
import axios from "axios";
import Bank from "./Bank";
import Loading from "./Loading";
import Error from "./Error";

class BankList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankDisplay: [],
            loading: false,
            error: true
        };
    }

    componentDidMount() {
        this.fetchbankDisplay();
    }

    fetchbankDisplay() {
        this.setState({
            loading: true,
            error: false
        });
        axios
            .get("/api/category/local")
            .then(response => {
                this.setState({
                    bankDisplay: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    bankDisplay: [],
                    loading: false,
                    error: true
                });
            });
    }

    render() {
        const { bankDisplay, loading, error } = this.state;

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error />;
        }

        return (
            <div className="Bank-container">
                <div>
                    {bankDisplay.map(b => (
                        <Bank key={b.Bank_id} bankDisplay={b} />
                    ))}
                </div>
            </div>
        );
    }
}

export default BankList;