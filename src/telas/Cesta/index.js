import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";

import Topo from "./componentes/Topo";

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} ></Topo>
        <View style={estilos.cesta} >
            <Detalhes {...detalhes} ></Detalhes>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});