import LottieView from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../components/atoms/AppText'
import AppTextBold from '../components/atoms/AppTextBold'
import useLocalization from '../utils/hooks/useLocalization'
import SafeAreaScreen from './SafeAreaScreen'
 

const displayedText = `Movies you set as favorite \n will appear here`

export default function FavoritesScreen() {
    return (
        <SafeAreaScreen>

            <View style={styles.container}>

                <AppTextBold
                    color={_colors.white}
                    size={30}
                    extraStyle={styles.header}
                >
                    {useLocalization("Screens.Favorites.title")}
                </AppTextBold>

                <View
                    style={styles.contentWrapper}
                >

                    <View
                        style={styles.listEmptyComponent}
                    >
                        <LottieView
                            source={require("../assets/animations/Like.json")}
                            style={{
                                height: 80,
                                width: 80,
                                justifyContent: "center",
                                alignSelf: "center",
                            }}
                            autoPlay={true}
                            loop={true}
                        />

                        <AppText
                            color={_colors.nickel}
                        >
                            {`${useLocalization("Screens.Favorites.listEmptySubtitle1")} \n ${useLocalization("Screens.Favorites.listEmptySubtitle2")}`}
                        </AppText>

                    </View>
                    
                </View>

            </View>

        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center"
    },
    header:{
        marginVertical: 20,
        alignSelf: "flex-start"
    },
    contentWrapper:{
        flex: 1,
        width: "100%",
        justifyContent: "center"
    },
    listEmptyComponent:{
        alignSelf: "center"
    }
})