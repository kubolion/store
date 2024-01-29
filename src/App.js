import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isShowModal: false,

        };
    }

    fetchData = (navItem) => {
        console.log(navItem)
        fetch(`https://fakestoreapi.com/${navItem}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                });
            });
    };

    handleShowModal= () => {
        this.setState({
            isShowModal:true,

        })
        console.log(this.state)
    }

    handleOnShowModal= () => {
        this.setState({
            isShowModal:false,

        })

    }


    componentDidMount() {
        this.fetchData("products");
    }

    render() {
        console.log(this.state)
        return (
            <div className="flex flex-col h-screen justify-between">
                <Header onUserClick={this.fetchData} />
                <Display data={this.state.data} />
                <Footer />
                {this.state.isShowModal ?  <Modal handleOnShowModal={this.handleOnShowModal} /> : <></>}
                <button onClick={this.handleShowModal} className="fixed items-center right-2 top-2 py-4 px-6 border border-green-900 rounded-full" >+</button>
            </div>
        );
    }
}

export default App;