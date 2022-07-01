import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

import Topo from "./componentes/Topo";

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} ></Topo>
        <View style={estilos.cesta} >
            <Detalhes {...detalhes} ></Detalhes>
            <Itens {...itens} ></Itens>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});