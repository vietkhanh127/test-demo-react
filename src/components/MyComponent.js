import React from "react";
import AddUserInfor from "./AddUserInfor";
import MyInfor from "./MyInfor";

class MyComponent extends React.Component {
    state = {
        listuser: [{
            id: 1,
            name: 'eric',
            address: 'hoidanit',
            age: 16
        },
        {
            id: 2,
            name: 'khanh',
            address: 'ha noi',
            age: 22
        },
        {
            id: 3,
            name: 'nam',
            address: 'bacninh',
            age: 25
        }]


    }
    handleAddnewuser = (userObj) => {
        console.log(userObj)
        this.setState(
            {
                listuser: [...this.state.listuser, userObj]
            }
        )
    }
    render() {

        return (
            <div>
                <AddUserInfor handleAddnewuser={this.handleAddnewuser} />
                <br />
                <MyInfor listuser={this.state.listuser}
                />
            </div>
        )
    }
}

export default MyComponent;