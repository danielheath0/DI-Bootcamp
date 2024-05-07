import React from 'react';

class Child extends React.Component {

    componentWillUnmount() { alert("Child will unmount") }
    render() {
        return <h1>Hello World!</h1>
    }
}

class Colors extends React.Component {
    constructor() {
        super()
        this.state = { favoriteColor: "red", show: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "yellow" })
        }, 1000)
    }

    componentDidUpdate() {
        console.log("after update")
    }

    shouldComponentUpdate() {
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate")
        return this.state
    }

    changeColor = () => {
        this.setState({ favoriteColor: "blue" })
    }

    deleteChild = () => {
        this.setState({show:false})
    }

    render() {
        return (
            <>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change color</button>
                {this.state.show && <Child />}
                <button onClick={this.deleteChild}>Delete header</button>
            </>
        )
    }
}

export default Colors