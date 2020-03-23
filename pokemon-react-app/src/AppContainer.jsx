import React, { Component } from 'react'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dataList :{
                results:[]
            }
             
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
            <div className ="parent">
                {this.state.dataList.results.map((poke,index)=>{
                    let pokemon_url_parts = poke.url.split('/');
                    let pokemon_id = pokemon_url_parts[6];
                    let pokemon_img_href =`/img/${pokemon_id}.png`;
                    return(<div key = {index}><p>{poke.name}</p>
                    <img src= {pokemon_img_href} alt={poke.name}/></div>)
                })}
            </div>
        )
    }
}
