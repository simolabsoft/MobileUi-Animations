import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}
class Avatar extends React.Component {
  state = {
    photo:
      "https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response.photo
        });
        this.props.updateName(response.name);
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 22px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
