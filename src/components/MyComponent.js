import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'eric',
        address: 'hoidanit',
        age: 16

    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }
}

export default MyComponent;