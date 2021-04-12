// import React, { ReactElement } from 'react';
// //import { IC_MASK } from '../../utils/Icons';
// import { Image } from 'react-native';
// import MainScreen from './Screen/MainScreen';
// import SettingScreen from './Screen/SettingScreen';
// import LikeScreen from './Screen/LikeScreen';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// const Tab = createMaterialBottomTabNavigator();
// const TabBarIcon = (focused) => {
//   return (
//     <Image
//       style={{
//         width: focused ? 24 : 18,
//         height: focused ? 24 : 18,
//       }}
//       //source={IC_MASK}
//     />
//   );
// };
// function Navigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarIcon: ({ focused }) => 
//           TabBarIcon(focused),
//       }}
//     >
//       <Tab.Screen
//         name="MainScreen"
//         component={MainScreen}
//         options={{
//           tabBarLabel: 'Screen1',
//           tabBarIcon: ({ focused }) => 
//             TabBarIcon(focused),
//         }}
//       />
//       <Tab.Screen name="SettingScreen" component={SettingScreen} />
//       <Tab.Screen name="LikeScreen" component={LikeScreen} />
//     </Tab.Navigator>
//   );
// }
// export default Navigator;