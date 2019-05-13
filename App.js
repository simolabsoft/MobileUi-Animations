import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Notifications } from "./components/Icons";
import Logo from "./components/Logo";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back</Title>
            <Name>Simo</Name>
            <Notifications
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30
            }}
          >
            <Logo
              image={require("./assets/logo-framerx.png")}
              text="framer X"
            />
            <Logo image={require("./assets/logo-figma.png")} text="figma" />
            <Logo
              image={require("./assets/logo-invision.png")}
              text="invision"
            />
          </ScrollView>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              title="Styled Components"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
              caption="react native"
              image={require("./assets/background2.jpg")}
            />
            <Card
              title="Styled Components 2"
              logo={require("./assets/logo-react.png")}
              subtitle="4 of 11 sections"
              caption="Angular"
              image={require("./assets/background2.jpg")}
            />
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 22px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  /* justify-content: center;
  align-items: center; */
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: capitalize;
`;
