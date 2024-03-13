import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Product {
  title: string
}

const Home: React.FC = () => {

  const [data, setData] = useState<Product[]>([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      console.log(response.data);
      setData(response.data.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  )
}

export default Home