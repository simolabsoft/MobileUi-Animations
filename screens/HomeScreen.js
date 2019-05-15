import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Notifications } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";
function mapStateToProps(state) {
  return {
    action: state.action,
    name: state.name
  };
}
function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}
class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };
  componentDidUpdate() {
    this.toggleMenu();
  }
  toggleMenu = () => {
    if (this.props.action === "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (this.props.action === "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity
                onPress={this.props.openMenu}
                style={{ position: "absolute" }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome Back</Title>
              <Name>{this.props.name}</Name>
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
        </AnimatedContainer>
      </RootView>
    );
  }
}
const RootView = styled.View`
  flex: 1;
  background: black;
`;

// const Avatar = styled.Image`
//   width: 44px;
//   height: 44px;
//   background: black;
//   border-radius: 22px;
//   margin-left: 22px;
//   /* position: absolute;
//   top: 0;
//   left: 0; */
// `;
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  /* justify-content: center;
  align-items: center; */
  border-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
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
    image: require("../assets/logo-framerx.png"),
    text: "Farmer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-invision.png"),
    text: "Invision"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 Sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props And Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 Sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data And Loops",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 Sections",
    logo: require("../assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "simo labied",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and Prototype"
  },
  {
    title: "React ofr Designers",
    subtitle: "22 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "hatim labied",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn UI with React Native"
  },
  {
    title: "Learn Framer X code",
    subtitle: "9 sections",
    image: require("../assets/background15.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "simo labied",
    avatar: require("../assets/avatar.jpg"),
    caption: "code components for you app with framer x"
  },
  {
    title: "Design System with Figma",
    subtitle: "33 sections",
    image: require("../assets/background16.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "simo labied",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to use Figma to Design systems"
  }
];

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
