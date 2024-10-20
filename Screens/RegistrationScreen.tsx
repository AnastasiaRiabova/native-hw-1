import {
  Image,
  KeyboardAvoidingView,
  Platform, Pressable, TextInput, Text, ScrollView
} from "react-native";
import {Circle, Path, Svg} from "react-native-svg";

export default function RegistrationScreen({
}) {

  return (
      <ScrollView >
        <Image
          source={require("@/assets/images/background.jpg")}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
              <Image/>
                <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
                  <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                      fill="#FF6C00"
                  />
                </Svg>
            <Text>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
              />
              <TextInput

              />
              <TextInput
                  placeholder="Адреса електронної пошти"
              />
              <TextInput
                  placeholder="Пароль"
              />
              <Text
              >
                Показати
              </Text>
                <Pressable>
                   <Text>Зареєстуватися</Text>
                </Pressable>
                <Pressable>
                  <Text>Вже є акаунт? Увійти</Text>
                </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
  );
}
