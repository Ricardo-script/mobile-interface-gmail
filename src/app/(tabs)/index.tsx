import { View, FlatList, Text } from "react-native";
import { Input } from "@/src/components/input";
import { MenuButton } from "@/src/components/menu-button";
import { Avatar } from "@/src/components/avatar";
import { Email } from "@/src/components/email";
import { EMAILS } from "@/src/utils/emails";

export default function Home() {
    return (
        <View className="flex-1 bg-gray-900 pt-14 p-4">
            <Input>
                <MenuButton />
                <Input.Field placeholder="Pesquisar no e-mail" />
                <Avatar
                    size="small"
                    source={{ uri: "https://github.com/ricardo-script.png" }}
                />
            </Input>
            <FlatList
                data={EMAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Email data={item} />}
                contentContainerClassName="gap-6"
                ListHeaderComponent={() => (
                    <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
                        Entrada
                    </Text>
                )}
            />
        </View>
    );
}
