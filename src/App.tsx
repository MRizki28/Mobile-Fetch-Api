import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";

const App: React.FC = () => {
    // const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    // function MyStack() {
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen name="Home" component={MyTabs} />
    //         </Stack.Navigator>
    //     );
    // }
    function MyTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

export default App;
