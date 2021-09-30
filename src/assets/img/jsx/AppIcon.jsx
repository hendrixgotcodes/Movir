import * as React from "react"
import { View } from "react-native"
import Svg, { G, Text, TSpan, Path } from "react-native-svg"

export default function AppIcon({width, height, ...props}) {
  return (
    <View
        style={{
            height,
            width,
        }}
    >
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 148 60"
            {...props}
            >
        <G data-name="Group 85">
            <Text
            transform="translate(0 45)"
            fill="#262724"
            fontSize={50}
            // fontFamily="Poppins-Regular, Poppins"
            fontWeight="bold"
            >
            <TSpan x={0} y={0}>
                {"m"}
            </TSpan>
            </Text>
            <Text
            transform="translate(84 45)"
            fill="#262724"
            fontSize={50}
            // fontFamily="Poppins-Regular, Poppins"
            fontWeight="bold"
            >
            <TSpan x={0} y={0}>
                {"v"}
            </TSpan>
            </Text>
            <Text
            transform="translate(110 45)"
            fill="#262724"
            fontSize={50}
            // fontFamily="Poppins-Regular, Poppins"
            fontWeight="bold"
            >
            <TSpan x={0} y={0}>
                {"i"}
            </TSpan>
            </Text>
            <Text
            transform="translate(122 45)"
            fill="#262724"
            fontSize={50}
            // fontFamily="Poppins-Regular, Poppins"
            fontWeight="bold"
            >
            <TSpan x={0} y={0}>
                {"r"}
            </TSpan>
            </Text>
            <Text
            data-name="."
            transform="translate(139 45)"
            fill="#262724"
            fontSize={50}
            // fontFamily="Poppins-Regular, Poppins"
            fontWeight="bold"
            >
            <TSpan x={0} y={0}>
                {"."}
            </TSpan>
            </Text>
            <G data-name="Group 2" fill="#fff">
            <Path
                data-name="Path 1"
                d="M79.174 30.091a17.091 17.091 0 10-17.091 17.092 17.091 17.091 0 0017.091-17.092zM62.083 18.14a9.5 9.5 0 014.463 1.107l-2.564 3.995a7.468 7.468 0 00-3.8 0l-2.564-3.995a9.5 9.5 0 014.465-1.107zm-11.657 8.47a9.493 9.493 0 012.432-3.9l3 3.667A7.379 7.379 0 0054.673 30l-4.575 1.2a9.5 9.5 0 01.328-4.59zm4.453 13.7a9.5 9.5 0 01-2.961-3.519l4.394-1.715a7.441 7.441 0 003.1 2.261l-.271 4.7a9.5 9.5 0 01-4.262-1.723zm14.409 0a9.505 9.505 0 01-4.262 1.728l-.271-4.7a7.431 7.431 0 003.099-2.262l4.394 1.713a9.5 9.5 0 01-2.956 3.525zm.2-10.317a7.379 7.379 0 00-1.182-3.617l3-3.667a9.552 9.552 0 012.759 8.49z"
            />
            <Path
                data-name="Path 2"
                d="M67.757 47.061a13.142 13.142 0 006.187-.564c3.424-1.266 4.527-4.054 8.66-3.57v-3.241c-6.447.599-8.183 6.786-14.847 7.375z"
            />
            </G>
        </G>
        </Svg>
    </View>
  )
}

