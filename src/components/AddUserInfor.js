import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: 'eric',
        address: 'hoidanit',
        age: 16

    }

    handleClick(event) {
        console.log(this.state.name)
    }

    handleoverMouse = (event) => {
        console.log("My la", this.state.name)
    }
    handeOnchangname = (event) => {
        this.setState(
            {
                name: event.target.value

            }
        )
    }
    handeOnchangage = (event) => {
        this.setState(
            {
                age: event.target.value

            }
        )
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        //console.log(this.state)
        this.props.handleAddnewuser({
            id: Math.floor((Math.random() * 100) + 3),
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} year old
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handeOnchangname(event)} />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handeOnchangage(event)} />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddUserInfor