import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"

class Friends extends React.Component{
    state={
        friends: [],
        update: false
    }
    
    componentDidMount(){
        console.log('component mounted')
        axiosWithAuth()
    .get('/api/friends')
    .then(res=>{
        console.log(res)
        return this.setState({
            ...this.state,
            friends: res.data
        })
    })
    .catch(err=>{console.log(err)})
    
    }





    componentDidUpdate(prevProps, prevState){
        if(this.state.update === true){
            console.log('component updated')
            axiosWithAuth()
            .get('/api/friends')
            .then(res=>{
                console.log(res)
                return this.setState({
                    ...this.state,
                    friends: res.data,
                    update: false
                })
            })
            .catch(err=>{console.log(err)})
        }
    }



    render() {
        return(
        <div>
            <h1>Friends List</h1>
            {this.state.friends.map(friend=>{return(
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>email:{friend.email}</p>
                    <p>Age:{friend.age}</p>
                </div>
            )})}
        </div>
        )}
}

export default Friends