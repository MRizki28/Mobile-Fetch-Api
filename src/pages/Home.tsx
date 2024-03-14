import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Image, RefreshControl, ScrollView, Text, View } from "react-native";

interface Product {
  title: string,
  images: string[],
  description: string
}

const Home: React.FC = () => {

  const [data, setData] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);

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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);


  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View className="flex justify-center p-3 mt-2 space-y-5">
        {data.map((item, index) => (
          <View key={index} className="max-w-sm overflow-hidden shadow-lg border rounded-lg">
            <View className="px-6 py-4">
              <Image source={{ uri: item.images[0] }} className="w-full h-[200px] rounded-2xl" />
              <Text className="font-bold text-xl mb-4 mt-5">{item.title}</Text>
              <Text className="text-gray-700 text-base">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Home