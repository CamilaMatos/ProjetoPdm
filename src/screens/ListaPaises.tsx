import { ActivityIndicator, FlatList, View } from "react-native";
import Card from "../components/Card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

type ListItemProps = {
    paises: {
        name: string;
        region: string;
        capital: string;
        languages: any;
        flags: string;
        bname: string;

    };
}

const ListItem = ({ paises }: ListItemProps) => {
    return (
        <View>
            <Card
                name={paises.name}
                region={paises.region}
                capital={paises.capital}
                languages={paises.languages}
                flags={paises.flags}
                bname={paises.bname}
            />
        </View>

    );
}

const ListaPaises = () => {
    const [paises, setPaises] = useState();
    const [loading, setLoading] = useState(false);

    const getPaises = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("https://restcountries.com/v3.1/all");

            setPaises(
                data.map((paises: any) => ({
                    name: paises.translations.por.official,
                    region: paises.region,
                    capital: paises.capital,
                    languages: paises.languages,
                    flags: paises.flags.png,
                    bname: paises.flags.alt
                }))
            )
        } catch (error) {
            console.log(error);
            console.log("Teste");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getPaises();
    }, []);

    return (
        <SafeAreaView>
            {loading === true ? <ActivityIndicator /> :
                <FlatList
                    data={paises}
                    renderItem={({ item }) =>
                        <ListItem
                            paises={item}
                        />}
                />}
        </SafeAreaView>
    );
}

export default ListaPaises;