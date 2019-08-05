import React from "react";
import axios from "axios";
import Branch from "./Branch";
import Loading from "./Loading";
import Error from "./Error";

class BranchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branchDisplay: [],
            loading: false,
            error: true
        };
    }

    componentDidMount() {
        this.fetchbranchDisplay();
    }

    fetchbranchDisplay() {
        this.setState({
            loading: true,
            error: false
        });
        axios
            .get("/api/branch")
            .then(response => {
                this.setState({
                    branchDisplay: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    branchDisplay: [],
                    loading: false,
                    error: true
                });
            });
    }

    render() {
        const { branchDisplay, loading, error } = this.state;

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error />;
        }

        return (
            <div className="Bank-container">
                <div>
                    {branchDisplay.map( d => (
                        <Branch key={d.Branch_name} branchDisplay={d} />
                    ))}
                </div>
            </div>
        );
    }
}

export default BranchList;