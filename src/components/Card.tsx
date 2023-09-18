import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, StyleSheet, ImageBackground } from "react-native";
import InfoPaises from "../components/InfoPaises";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 162,
        margin: 10,
        padding: 5,
        backgroundColor: '#d5dbd6',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',

    },
    card: {
        backgroundColor: 'blue', 
        flex: 0.5
    },
    imagem: {
        height: 150,
        width: 200,
        borderRadius: 10,
    }
})

type CardPrpos = {
    name: string;
    region: string;
    capital: string;
    languages: any;
    flags: string;
    bname: string;
};

const Card = ({ name, region, capital, languages, flags, bname }: CardPrpos) => {
    return (
            <SafeAreaView style={styles.container}>
                <View style={{flex: 0.6}}>
                    <Image style={styles.imagem} source={{ uri: flags }} alt={bname} />
                </View>
                <View style={{flex: 0.5}}>
                    <InfoPaises texto="Nome" valor={name} />
                    <InfoPaises texto="Região" valor={region} />
                    <InfoPaises texto="Capital" valor={capital} />
                    <InfoPaises texto="Idioma" valor={languages[Object.keys(languages)[0]]} />
                </View>
            </SafeAreaView>
    );
}

export default Card;