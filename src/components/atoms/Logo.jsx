import * as React from "react"
import { View } from "react-native"
import Svg, { G, Text, TSpan, Path } from "react-native-svg"

export default function Logo({color="#fff", width=30, height=30, ...props}) {
  return (
    <View
        style={{
            width,
            height
        }}
    >
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 125 51"
            {...props}
        >
            <G data-name="Group 79">
                <Text
                transform="translate(0 38)"
                fill={color}
                fontSize={36}
                fontWeight="bold"
                // fontFamily="Poppins-Regular, Poppins"
                >
                <TSpan x={0} y={0}>
                    {"m"}
                </TSpan>
                </Text>
                <Text
                transform="translate(71 38)"
                fill={color}
                fontSize={36}
                fontWeight="bold"
                // fontFamily="Poppins-Regular, Poppins"
                >
                <TSpan x={0} y={0}>
                    {"v"}
                </TSpan>
                </Text>
                <Text
                transform="translate(93 38)"
                fill={color}
                fontSize={36}
                fontWeight="bold"
                // fontFamily="Poppins-Regular, Poppins"
                >
                <TSpan x={0} y={0}>
                    {"i"}
                </TSpan>
                </Text>
                <Text
                transform="translate(103 38)"
                fill={color}
                fontSize={36}
                fontWeight="bold"
                // fontFamily="Poppins-Regular, Poppins"
                >
                <TSpan x={0} y={0}>
                    {"r"}
                </TSpan>
                </Text>
                <Text
                data-name="."
                transform="translate(117 38)"
                fill={color}
                fontSize={36}
                fontWeight="bold"
                // fontFamily="Poppins-Regular, Poppins"
                >
                <TSpan x={0} y={0}>
                    {"."}
                </TSpan>
                </Text>
                <G data-name="Group 2" fill="#c08552">
                <Path
                    data-name="Path 1"
                    d="M66.87 25.435a14.435 14.435 0 10-14.435 14.436A14.435 14.435 0 0066.87 25.435zM52.435 15.341a8.021 8.021 0 013.77.935l-2.166 3.374a6.308 6.308 0 00-3.209 0l-2.165-3.374a8.023 8.023 0 013.77-.935zm-9.846 7.154a8.017 8.017 0 012.054-3.3l2.536 3.1a6.232 6.232 0 00-1 3.06l-3.865 1.014a8.021 8.021 0 01.275-3.874zm3.761 11.574a8.021 8.021 0 01-2.5-2.972l3.711-1.447a6.284 6.284 0 002.618 1.91l-.229 3.97a8.024 8.024 0 01-3.6-1.461zm12.17 0a8.028 8.028 0 01-3.6 1.46l-.229-3.97a6.276 6.276 0 002.618-1.909l3.711 1.447a8.02 8.02 0 01-2.5 2.972zm.172-8.713a6.232 6.232 0 00-1-3.06l2.536-3.1a8.068 8.068 0 012.33 7.171z"
                />
                <Path
                    data-name="Path 2"
                    d="M57.227 39.767a11.1 11.1 0 005.225-.477c2.892-1.069 3.823-3.424 7.314-3.015v-2.737c-5.444.506-6.911 5.733-12.539 6.229z"
                />
                </G>
            </G>
        </Svg>
    </View>
  )
}
