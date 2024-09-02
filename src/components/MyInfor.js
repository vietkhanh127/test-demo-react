import React from "react";

class MyInfor extends React.Component {
    state = {
        isShowlistuser: true
    }
    handleShowhide = () => {
        this.setState({
            isShowlistuser: !this.state.isShowlistuser
        })
    }

    render() {
        //console.log(this.props)
        const { listuser } = this.props
        //console.log(listuser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowhide() }}>
                        {this.state.isShowlistuser === true ? 'Hide list user' : 'Show list user'}
                    </span>
                </div>
                {this.state.isShowlistuser &&
                    <div>
                        {listuser.map((user) => {
                            //console.log(user)
                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}  </div>
                                    <div>My age is {user.age}</div>
                                    <div>My address is {user.address}</div>
                                    <hr />
                                </div>

                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default MyInfor;