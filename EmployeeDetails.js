import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
Button,
TouchableOpacity
} from "react-native";
import { Card } from 'react-native-elements'; 
 
class EmployeeDetails extends React.Component {
constructor(props) {
super(props);
this.state = {
loading: true,
dataSource:[] };
}
componentDidMount(){
fetch("http://dummy.restapiexample.com/api/v1/employees")
.then(response => response.json())
.then((responseData)=> {
this.setState({
loading: false,
dataSource: responseData.data
})
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
<View style={{
height: .5,
width:"100%",
backgroundColor:"rgba(0,0,0,0.5)",

}}
/>
);
}
App = () => {
    return (
      <View style={styles.screenContainer}>
        <Button title="Hey there!" />
      </View>
    );
  };
renderItem=(data)=>

<TouchableOpacity style={styles.list}>
<Card borderRadius ={15}>
<Text style={styles.lightText}>Employee Id : {data.item.id}</Text>
<Text style={styles.lightText}>Employee Name : {data.item.employee_name}</Text>
<Text style={styles.lightText}>Employee Salary : {data.item.employee_salary}</Text>
<Text style={styles.lightText}>Employee Age : {data.item.employee_age}</Text>
<Text style={styles.lightText}>Profile Photo : {data.item.profile_image}</Text>
</Card>
</TouchableOpacity>

render(){
if(this.state.loading){
return(
<View style={styles.loader}>
<ActivityIndicator size="large" color="#00ff00"/>
</View>
)}
return(
<View style={styles.container}>
<View>
<Text> Employee Details</Text>
</View>
<FlatList
data= {this.state.dataSource}
ItemSeparatorComponent = {this.FlatListItemSeparator}
renderItem= {item=> this.renderItem(item)}
keyExtractor= {item=>item.id.toString()}
/>
</View>
)}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fffff0"
},
loader:{
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#fff"
},
list:{
paddingVertical: 2,
margin: 5,
backgroundColor: "#008080"
},
screenContainer:{
    flex: 1,
    justifyContent: "center",
    padding: 16
  }
});
    
  

export default EmployeeDetails;