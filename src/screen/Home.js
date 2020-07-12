import React, { Component } from 'react'
import { Text, StyleSheet, View ,TextInput,TouchableOpacity,FlatList} from 'react-native'
import {connect} from 'react-redux'
import {RandomIdAction, AsteroidIdAction } from '../redux/action/Index'
  class Home extends Component {
constructor(props){
    super(props)
    this.state={
        asteroidId:'',
        status:false,
        secondStatus: false,
        thirdStatus: false,
        id:'',
        url:'',
        booleanData :''
    }
}


open=()=>{
    this.setState({status:true})
}

hitRandom= ()=>{
const data={
    id:this.state.asteroidId


}
this.setState({secondStatus:true})
this.props.RandomIdAction(data)


}


openAsstroidId=()=>{
    const data={
        id:this.state.asteroidId
    
    
    }

    this.setState({thirdStatus:true})

    this.props.AsteroidIdAction(data)


}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.randomIdReducer !== this.props.randomIdReducer){

const { near_earth_objects} = this.props.randomIdReducer

console.log(near_earth_objects)

    }


    if(prevProps.astroidIdReducer !== this.props.astroidIdReducer){

        const { near_earth_objects} = this.props.astroidIdReducer
        
        console.warn("heuuuuuuuuu")
        
            }

}

renderItems=(item,index)=>{
return <TouchableOpacity onPress={()=>{
    this.setState({secondStatus:false,id:item.item.id,url:item.item.nasa_jpl_url,booleanData:item.item.is_potentially_hazardous_asteroid,thirdStatus:false})
}} style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",padding:10,marginBottom:15,elevation:4}} key={index}>
<Text style={{fontSize:20}}>{item.item.id}</Text>
{console.warn("iddd",item.item.is_potentially_hazardous_asteroid)}
</TouchableOpacity>
}

    render() {

       
        return (
            <View style={{flex:1,margin:10,}}>
                <View>
                    <TextInput
                    placeholder="Enter Asteroid ID"
                    style={{borderWidth:1,fontSize:20}}
                    value={this.state.asteroidId}
                    onChangeText={(asteroidId)=>this.setState({asteroidId})}
                    onFocus={this.open}
                    />
                </View>
<View>
  {this.state.status ? (<TouchableOpacity onPress={
      
      ()=>{
        this.openAsstroidId
        this.setState({thirdStatus:true,
        id:this.props.randomIdReducer.near_earth_objects.id
        })
      }
      
      } style={{backgroundColor:"steelblue",padding:10,justifyContent:"center",alignItems:"center",margin:20,borderRadius:10}}>
      <Text style={{color:"#fff",fontSize:20}}> Submit</Text>
      </TouchableOpacity>  
): null}

      <TouchableOpacity onPress={this.hitRandom} style={{backgroundColor:"steelblue",padding:10,justifyContent:"center",alignItems:"center",margin:20,borderRadius:10}}>
      <Text style={{color:"#fff",fontSize:20}}> Random Asteriod ID</Text>
      </TouchableOpacity>  
</View>





{
this.state.secondStatus ? (<View>
    <FlatList
    data={this.props.randomIdReducer.near_earth_objects}
    
    renderItem={(item,index)=>this.renderItems(item,index)}
    />
    
    </View>
    ): null


}
<View style={{padding:20,backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:20,fontWeight:"bold",marginBottom:20}}>{this.state.id}</Text>

<Text style={{fontSize:20,fontWeight:"bold"}}>{this.state.url}</Text>

<Text style={{fontSize:20,fontWeight:"bold"}}>{JSON.stringify(this.state.booleanData)}</Text>

</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})


const mapStateToProps = (state, ownProps) => {
    return {
        randomIdReducer: state.randomIdReducer,
        astroidIdReducer:state.astroidIdReducer
    }
}


export default connect(mapStateToProps, {RandomIdAction,AsteroidIdAction})(Home)