import React, { Component } from 'react'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dataList:[]
             
        }
    }
    componentDidMount(){
        console.log(`Component Did Mount`)
        this.loadData();
    }
    loadData = async()=>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900 ');
        const json = await response.json();
        console.log(json)
        this.setState({dataList:json})
    }
    render() {console.log(this.state)

        return (
            <div>
                {this.state.dataList.results.map((poke,index)=>{
                    return(<div><p>{poke.name}</p></div>)
                })}
            </div>
        )
    }
}
