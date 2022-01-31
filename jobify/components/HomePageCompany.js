import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput,
   View,ScrollView,FlatList,TouchableOpacity,
   SafeAreaView, Image } from 'react-native';
import server from "./ipConfig/serverIp.js"
import axios from 'axios';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomePageCompany=({navigation})=>{

return (
  <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
  <StatusBar translucent={false} backgroundColor={colors.blue} />
  <View style={styles.header}>
  <Icon name="sort" size={28} color={colors.white} />
   
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        backgroundColor: colors.blue,
        height: 120,
        paddingHorizontal: 20,
       
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.headerTitle}>Jobify</Text>
        <Text style={styles.headerTitle}>find a job Here</Text>
        <View style={styles.inputContainer} >
        <TouchableOpacity  onPress={()=>navigation.navigate('Hire')}  >
          <Text style={{color:colors.blueDark,alignContent:'center'}} >The List Of Workers That You Can Hire</Text>
        </TouchableOpacity>
        
    </View>
      </View>
    </View>
  <ScrollView  vertical={true} >
    
    <Text style={styles.offername}>The Workers Categories </Text>
    <View style={styles.container} >
      <View style={styles.speciality}>
        <Text style={styles.descdesc}>Waiters</Text>
        <Image style={styles.img} source={{uri:"https://image.flaticon.com/icons/png/512/978/978353.png"}}></Image>
      </View>
      <View style={styles.speciality}>
        <Text style={styles.descdesc}>Chefs</Text>
        <Image style={styles.img} source={{uri:"https://www.pngall.com/wp-content/uploads/12/Cooking-PNG-Photo.png"}}></Image>
      </View>
      <View style={styles.speciality}>
        <Text style={styles.descdesc}>Cleaners</Text>
        <Image style={styles.img} source={{uri:"https://w7.pngwing.com/pngs/794/905/png-transparent-housekeeping-computer-icons-cleaning-mop-maid-service-black-and-white-text-janitor-vacuum-cleaner.png"}}></Image>
      </View>
    </View>
    <View style={styles.steps} >
      <Text style={styles.stepss}>Steps:</Text> 
      <View >
        <Text style={styles.steps1}> (1)  :  Post Your Work Offer To recive The Subscriptions Of The Works That Want To Work With You</Text>
        <View  >
          <ScrollView  horizontal={true}>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271605007_887604215255103_8003493087516100448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xR2wVnv8kCEAX8sfSHX&_nc_ht=scontent.ftun2-1.fna&oh=03_AVK9TwnJSl7WnRH0pIiuszbZ5xe7XiCqVGZOpXJ1PXVdmA&oe=620FE0FC"}}></Image> 
            <Text style={styles.line}>==▷</Text>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271492128_319208796885492_3865433679122676051_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ZHToqfDaOkUAX8m7Osb&_nc_ht=scontent.ftun2-1.fna&oh=03_AVKe9zvM-LkaEQs9h_P4PGSP-sn4A8oE7IiWl-5OkxIEpg&oe=620D2F0E"}}></Image> 
            <Text style={styles.line}>==▷</Text>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271605007_887604215255103_8003493087516100448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xR2wVnv8kCEAX8sfSHX&_nc_ht=scontent.ftun2-1.fna&oh=03_AVK9TwnJSl7WnRH0pIiuszbZ5xe7XiCqVGZOpXJ1PXVdmA&oe=620FE0FC"}}></Image>
          </ScrollView>
        </View>
      </View> 
      <View>
        <Text style={styles.steps1}>(2)  :  If You Are Harry You Can Pick The Worker That You Like And Hire Him To An Event That You Already Posted And He Will Recive Your Offer </Text>
        <View  >
          <ScrollView  horizontal={true}>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271528660_897582757573609_8165689785749751942_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=oOP-M4zXkRAAX_Ci-eg&tn=sGtSemn8yBd_Mbao&_nc_ht=scontent.ftun2-1.fna&oh=03_AVJQx8evBdHw6XSA6n_9_OBVS0RmIjv7Y535MawwwpLHsA&oe=620F690B"}}></Image> 
            <Text style={styles.line}>==▷</Text>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271440751_637543347490155_642761338092104379_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Tlk-g-V8RC0AX_hrk6D&tn=sGtSemn8yBd_Mbao&_nc_ht=scontent.ftun2-1.fna&oh=03_AVKGyb-CW2VtByns0R55GH5kfPzZJyq3HJcetRygcMQCbA&oe=620F5B7E"}}></Image> 
            <Text style={styles.line}>==▷</Text>
            <Image style={styles.imgg} source={{uri:"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/271593058_955648475346810_612280275380603777_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Bdefqb6lpVEAX9r1dXC&_nc_ht=scontent.ftun2-1.fna&oh=03_AVLJmA1FjmfXF0f4XPsBg3BciG5xYqv1j9ujT7br15MdJQ&oe=620F772E"}}></Image>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.steps1}>(3)  :  You Will Recive All Of Hes Information When You Both Agree On The Offer To Contact Him </Text>
      </View>
      <View>
        <Text style={styles.steps4}>(4)  :  Have A Nice Experience With Our Workers : </Text>
      </View>
    </View>
    
    {/* <Text style={styles.usersrate}>Some Of Users</Text> */}
    {/* <View style={styles.container1}>
      
        <View style={styles.alloff1}>
        <Text>boooooooooob</Text>
        </View>
    </View> */}
      </ScrollView>
      </ScrollView>
      </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    marginTop:50,
    alignItems: "center",
    margin:10
  
  },
  line:{
    alignSelf:'center'
  },
  steps:{
    margin:15,
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
  },
  imgg:{
    width:150,
    height:320,
    top:30,
  },
  container1: {
    flex:1,
    alignItems: "center"
  },
  name:{
    position: "absolute",
    width: 131,
    height: 44,
    left: 24,
    top: 39,
    backgroundColor: "#00BFFF",
    borderRadius: 14,
  },
  img:{
    width:100,
    height:100,
    alignContent:'center',
    alignSelf:'center',

  },  
  namein:{
    left:23,
    top:7,
    fontSize:24,
    fontWeight:"600",
    lineHeight: 27,
    letterSpacing: 0.5,
    color:"#111417",
  },
  desc:{
    position: "absolute",
    width: 325,
    height: 72,
    left: 24,
    top: 117,
  },
  descdesc:{
    fontSize:18,
    fontWeight:"700",
    lineHeight: 26,
    letterSpacing: 0.5,
    color:colors.gold,
  },
  search:{
    position: "absolute",
    width: 327,
    height: 47,
    left: 24,
    top: 219,
    backgroundColor:"#00BFFF",
    borderRadius:14
    
  },
  searchtext:{
    width:300,
    height:26,
    top:15,
    left:30,
    fontWeight:"700",
    fontSize:14,
    lineHeight:16,
    // borderWidth:1
  },
  offername:{
    // width:340,
    // height:26,
    fontSize:20,
    top:40,
    left:24,
    fontWeight:'700',
    color:colors.blue
  },
  stepss:{
    fontWeight:'700',
    fontSize:18,
    color:colors.blue,
  },
  icon:{
    position: "absolute",
    width: 20,
    height: 17,
    left: 318,
    top: 234,
  },
  
  speciality:{
    alignItems:'center',
    margin:10
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
  },
  headerTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  steps1:{
    fontWeight:'700',
    fontSize:14,
    color:colors.blueDark,
    top:20,
  },
  steps4:{
    fontWeight:'700',
    fontSize:14,
    color:colors.blueDark,
    top:40,
    marginBottom:40,
  },

  });
  export default HomePageCompany