import React, { useState, useEffect } from "react";
import server from "../ipConfig/serverIp";
import { AsyncStorage } from "react-native";

console.warn = () => {};

// prettier-ignore
import { StyleSheet, Text, View, Pressable, FlatList, TouchableWithoutFeedback, Keyboard, Button, Alert, TouchableOpacity } from "react-native";
import CheckBox from "react-native-checkbox";
// import Toggle from "react-toggle";
import axios from "axios";
// import DayItem from "./DaysItem";

// prettier-ignore
export default function SetAvailabilityWorkerScreen({ navigation, onPress, title = "Save", propsAvailibility }) {

  const [dayAvailability, setDayAvailability] = useState([
    { text: "Monday", key: 0, available: false },
    { text: "Tuesday", key: 1, available: false },
    { text: "Wednesday", key: 2, available: false },
    { text: "Thursday", key: 3, available: false },
    { text: "Friday", key: 4, available: false },
    { text: "Saturday", key: 5, available: false },
    { text: "Sunday", key: 6, available: false },
  ])

  // this function will get the availability of the worker from the database, & update the component of checkboxes
  useEffect(async () => {
    const userId = await AsyncStorage.getItem('session');
    if(!propsAvailibility){
      try {
        console.log(`waiting response from ${server.Ip}/workers/${userId}/availability/`)
        const { data } = await axios.get(`${server.Ip}/workers/${userId}/availability/`)
        console.log("Done ...")
        setDayAvailability(data)
      } catch (error) {
        console.log(error)
        // navigation.navigate("RoutesMenuScreen")
        navigation.goBack()
      }
    } else {
      setDayAvailability([
        { text: "Monday", key: 0, available: propsAvailibility.split(",").includes("Monday") },
        { text: "Tuesday", key: 1, available: propsAvailibility.split(",").includes("Tuesday") },
        { text: "Wednesday", key: 2, available: propsAvailibility.split(",").includes("Wednesday") },
        { text: "Thursday", key: 3, available: propsAvailibility.split(",").includes("Thursday") },
        { text: "Friday", key: 4, available: propsAvailibility.split(",").includes("Friday") },
        { text: "Saturday", key: 5, available: propsAvailibility.split(",").includes("Saturday") },
        { text: "Sunday", key: 6, available: propsAvailibility.split(",").includes("Sunday") },
      ])
    }
  },[])

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.list}>
            {dayAvailability.map((day) => (
              <CheckBox
                key={day.key}
                labelStyle={{ color: "grey", fontSize: 20 }}
                label={day.text}
                checked={day.available}
                onChange={() =>
                  setDayAvailability((prevState) =>
                    prevState.map((each_day) => {
                      if (each_day.key === day.key)
                        each_day.available = !each_day.available;
                      return each_day;
                    })
                  )
                }
              />
            ))}

              <Pressable style={styles.button} onPress={async () => {
                  let availibility = dayAvailability.filter((day)=> day.available).map((day)=>{
                    if(day.available){
                      // console.log(day.text)
                      return day.text
                    } else return ""
                  }).join()
                  console.log(availibility)
                  try {
                    const userId = await AsyncStorage.getItem('session')
                    // let response = await axios.put(`http://localhost:3000/workers/${userId}/availability`)
                    console.log(`${server.Ip}/workers/${userId}/availability`)
                    let response = await axios.put(`${server.Ip}/workers/${userId}/availability`, { availibility })
                    Alert.alert(
                      "Success",
                      "Saved with success",
                      [
                        // {
                        //   text: "Cancel",
                        //   onPress: () => console.log("Cancel Pressed"),
                        // },
                        // { text: "Home", onPress: () => navigation.goBack() },
                        { text: "Next", onPress: () => navigation.goBack() },
                      ]
                    );
                    console.log("Response:", response.data)
                  } catch (error) {
                    console.log(error)
                  }
                  // navigation.navigate("Profil")
                }}
              >
              <Text style={styles.text}>
                {title}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center"
  },
  menu:{
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
    // alignItems: "center",
    // backgroundColor: "pink",
  },
  list: {
    flex: 1,
    marginTop: 20,
    // margin: 20,
    // backgroundColor: "yellow",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
