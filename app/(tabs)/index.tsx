import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

interface ImageItem {
  id: string;
  uri: string;
  title: string;
  email: string;
  NIM: string;
}

const imageData: ImageItem[] = [
  {
    id: "1",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI62WgndVlc9YFvSEa8vuulAlczmjv383NVw&s",
    title: "Batman",
    email: "Bat.man@email.com",
    NIM: "00000189375",
  },
  {
    id: "2",
    uri: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQqhwX0B1nxtK41LuwozpftWXiMc_5D6TdWl6Tzwq2_EMBeWsAKiVt3_vRpXZiGDjxPfSXCvwKLoLomULr4OU-LKOT4rr_D8mlmMsjSvlMte9k&s=19",
    title: "Mikel Arteta",
    email: "mikel.arteta@email.com",
    NIM: "00000192746",
  },
  {
    id: "3",
    uri: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRW3VsTqCUBD9HbaoTGiS7Brhph72Ir9V1s9cH_IesULMnCfD7yoH_pEsXD0Yfz6C0Q-xCrXOFQjKXscIpT3mhGxcDst-B_4yLuQC6NnP-xgw&s=19",
    title: "Leonardo Davinci",
    email: "leonardo.dvnc@email.com",
    NIM: "00000182648",
  },
  {
    id: "4",
    uri: "data:image/jpeg;base64,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",
    title: "Michael Angelo",
    email: "michael.aglo@email.com",
    NIM: "00000198348",
  },
  {
    id: "5",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PjFute-YHzK-gBew2iFKasH1-ls30qhEBVmJYg7wa9uR-g_NdkCoM7eEcgCOh5HHvtM2kd-3&s=10",
    title: "Darwin Nunez",
    email: "Darwn.nunez@email.com",
    NIM: "00000193746",
  },
];

const ImageListItem = ({ item }: { item: ImageItem }) => (
  <View style={styles.itemContainer}>
    <Image
      source={{ uri: item.uri }}
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.email}>{item.email}</Text>
    <Text style={styles.NIM}>{item.NIM}</Text>
  </View>
);

const ImageListView = () => {
  return (
    <FlatList
      data={imageData}
      renderItem={({ item }) => <ImageListItem item={item} />}
      keyExtractor={(item) => item.id}
      removeClippedSubviews={true}
      initialNumToRender={5}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFF4EA",
  },
  image: {
    width: deviceWidth * 0.9,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
  NIM: {
    marginTop: 2,
    fontSize: 14,
    color: "#666",
  },
});

export default ImageListView;
