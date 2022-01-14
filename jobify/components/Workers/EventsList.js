import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import CardItem from "./CardItem";
import axios from "axios";
import server from "../ipConfig/serverIp";
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
  },
});

const EventList = () => {
  var [events, setevents] = useState([]);

  useEffect(() => {
    const URL = `${server.Ip}/events/`;
    axios.get(URL).then((res) => {
      setevents(res.data);
    });
  }, []);

  function refresh() {
    const URL = `${server.Ip}/events`;
    axios
      .get(URL)
      .then((res) => {
        setevents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(events);
  return (
    <View style={styles.container}>
      <ScrollView>
        {events.map((ele, i) => (
          <CardItem key={i} event={ele} reff={refresh} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EventList;
