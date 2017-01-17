/**
 * 按钮组件
 *
 */
'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

//默认导出类
export default class C_Button extends Component {
	//构造
  constructor(props)
  {
	  super(props);
	  this.state = { disabled: false};
  }
  
  //按钮点击事件
  button_click = () => {
	  const {btnClick} = this.props;
	  if(this.props.btnClick && typeof this.props.btnClick != 'undefined')
	  {
		  btnClick();
	  }
  };
  
  //启用
  enable = () => {
	  this.setState({
		  disabled : false
	  });
  };
  
  //禁用
  disable = () => {
	  this.setState({
		  disabled : true
	  });
  };
  
  render() {
	let {text, backgroundColor='green', btnClick, btnDisable=false} = this.props;
	let color = this.props.btnDisable ? styles.buttonNo : {backgroundColor};
    return (
		<View style = {styles.button_box}>
			<TouchableHighlight 
				disabled = {btnDisable}
				style={[styles.button_x, color]}
				onPress={this.button_click}
			>
				<Text style={styles.buttonText}>{text}</Text>
			</TouchableHighlight>
		</View>
    );
  }
}

var styles = StyleSheet.create({
	button_box: {
		flexDirection: 'row',
		//justifyContent: 'center',
		marginTop: 5,
		marginBottom: 5,
	},
	button_x: {
	  height: 40,
	  width: 150,
	  //flexDirection: 'row',
      justifyContent: 'center',
      //alignItems: 'center',
	  //backgroundColor: 'green',
	  borderRadius: 15,
	},
	buttonText: {
	  //justifyContent: 'center',
      //alignItems: 'center',
	  textAlign: 'center',
	  color: 'white',
	},
	buttonNo : {
		backgroundColor: 'gray',
	},
});