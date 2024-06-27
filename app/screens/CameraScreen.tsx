// import { createStackNavigator } from "@react-navigation/stack";
import { ProjectTabScreenProps } from "app/navigators/ProjectNavigator"
import React, { FC, useEffect } from "react"
import { View, ViewStyle, Text } from "react-native"
import { ActivityIndicator } from "react-native-paper";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";



export const CameraScreen: FC<ProjectTabScreenProps<"Camera">> = function CameraScreen(_props) {
    // const Stack = createStackNavigator();
    const {hasPermission, requestPermission } = useCameraPermission()
    const device = useCameraDevice('back');
    useEffect (() => {
        if(!hasPermission) {
            requestPermission();
        }
    }, [hasPermission]);
    if (!hasPermission) {
        return <ActivityIndicator />
    }
    if (!device) {
        return (
            <Text>
                Camera device not found
            </Text>
        )
    }

    return (
        <>
            <View style={$container}>
                <Camera device={device} isActive={true} />
            </View>
        </>
    )
}
const $container: ViewStyle = {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
}