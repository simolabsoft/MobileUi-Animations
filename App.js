import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Notifications } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";
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
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                logo={card.logo}
                subtitle={card.subtitle}
                caption={card.caption}
                image={card.image}
              />
            ))}
          </ScrollView>
          <SubTitle>Popular Courses</SubTitle>
          {courses.map((course, index) => (
            <Course
              key={index}
              image={course.image}
              title={course.title}
              avatar={course.avatar}
              logo={course.logo}
              caption={course.caption}
              author={course.author}
              subtitle={course.subtitle}
            />
          ))}
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Farmer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-invision.png"),
    text: "Invision"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 Sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Props And Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 Sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Static Data And Loops",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("./assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "simo labied",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and Prototype"
  },
  {
    title: "React ofr Designers",
    subtitle: "22 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "hatim labied",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn UI with React Native"
  },
  {
    title: "Learn Framer X code",
    subtitle: "9 sections",
    image: require("./assets/background15.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "simo labied",
    avatar: require("./assets/avatar.jpg"),
    caption: "code components for you app with framer x"
  },
  {
    title: "Design System with Figma",
    subtitle: "33 sections",
    image: require("./assets/background16.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "simo labied",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to use Figma to Design systems"
  }
];
