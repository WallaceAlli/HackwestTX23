import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="6a9b3d36-e9b5-49bd-92e8-bf47a5f2a543" style={styles.signUp}>
        <Text data-layer="89baf9e6-da92-4bf1-bae6-812167bf1042" style={styles.signUp_welcome}>Welcome!</Text>
        <View data-layer="13510c5c-1ffa-4507-bd35-e13d07aa7766" style={styles.signUp_rectangle13}></View>
        <View data-layer="e4381bbc-72e7-4bc1-a104-a1ce71343227" style={styles.signUp_rectangle14}></View>
        <Text data-layer="fb1dc0ea-4011-4773-b867-99ebf11cfd56" style={styles.signUp_email}>Email</Text>
        <Text data-layer="ffd3ce2d-6e34-4bc1-ac66-398ef02ac933" style={styles.signUp_password981f6e9c}>Password</Text>
        <View data-layer="d3c5186c-a3b7-43e6-8877-91449299e7fa" style={styles.signUp_group4}>
            <View data-layer="97434a14-85c7-4cd9-b05f-be503df0a69b" style={styles.signUp_group4_rectangle16}></View>
            <Text data-layer="2d49aa9f-c40f-4dda-8ebb-2914dd06410c" style={styles.signUp_group4_signUp9e9a813d}>Sign Up</Text>
        </View>
        <Text data-layer="37ef9400-94e1-434f-ad45-f55c03bb0b22" style={styles.signUp_alreadyHaveAnAccountSignIn}>Already have an account? Sign in</Text>
        <View data-layer="546cec26-da50-43df-8a15-0110f7f21893" style={styles.signUp_rectangle17}></View>
        <Text data-layer="adde2b3c-81c4-49eb-90cc-cc4f912a5290" style={styles.signUp_confirmPasswordb3fff56e}>Confirm Password</Text>
        <Text data-layer="d1df1b88-2982-429a-881c-fd529b434cf1" style={styles.signUp_example}>example@email.com</Text>
        <Text data-layer="5d241ca0-e6d1-450a-a5e0-44ed02d96f55" style={styles.signUp_password}>Password</Text>
        <Text data-layer="8f5ff056-8589-4ccf-8e72-5340c0aef32e" style={styles.signUp_confirmPassword}>Confirm Password</Text>
    </ScrollView>
    );
  }
}

SignUp.propTypes = {

}

SignUp.defaultProps = {

}


const styles = StyleSheet.create({
  "signUp": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1920,
    "height": 1334,
    "left": 0,
    "top": 0
  },
  "signUp_welcome": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 85,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 398,
    "height": 113,
    "left": 648,
    "top": 287
  },
  "signUp_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 625,
    "height": 72,
    "left": 648,
    "top": 474
  },
  "signUp_rectangle14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 625,
    "height": 71,
    "left": 648,
    "top": 636
  },
  "signUp_email": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 39,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 52,
    "left": 648,
    "top": 419
  },
  "signUp_password981f6e9c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 38,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 51,
    "left": 648,
    "top": 579
  },
  "signUp_group4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 316,
    "height": 78,
    "left": 648,
    "top": 900
  },
  "signUp_group4_rectangle16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(73, 56, 67, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(73, 56, 67, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(73, 56, 67, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(73, 56, 67, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(73, 56, 67, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 316,
    "height": 78,
    "left": 0,
    "top": 0
  },
  "signUp_group4_signUp9e9a813d": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 45,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 156,
    "height": 60,
    "left": 74,
    "top": 6
  },
  "signUp_alreadyHaveAnAccountSignIn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 29,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 421,
    "height": 38,
    "left": 648,
    "top": 1010
  },
  "signUp_rectangle17": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 625,
    "height": 71,
    "left": 648,
    "top": 796
  },
  "signUp_confirmPasswordb3fff56e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 38,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 302,
    "height": 51,
    "left": 648,
    "top": 740
  },
  "signUp_example": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 574,
    "height": 53,
    "left": 673,
    "top": 484
  },
  "signUp_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 574,
    "height": 53,
    "left": 673,
    "top": 645
  },
  "signUp_confirmPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(73, 56, 67, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 574,
    "height": 53,
    "left": 673,
    "top": 805
  }
});