import React, { Component } from 'react';
import { 
	AppRegistry, 
	Navigator, 
	StyleSheet,
	Text, 
	View, 
	TouchableHighlight 
} from 'react-native';

import Button from './Button';
import TopTitle from './TopTitle';
import StateChange from './StateChange';
import AreaList from './AreaList';
import SeachPage from './SeachPage';
import TabView from './TabView';

class AwesomeProject2 extends Component {

	rendNavigator = (route, navigator) => {
		switch(route.id){
			case 'main' :
				return (
					<View  style={styles.menuBox}>
						<View style={styles.title}>
							<Text>welcome to Linzy react-native!</Text>
						</View>

						<View style={styles.btnList}>
							<Button text="改变视图" onPress={() => navigator.push({title:'更改state',id:'StateChange'})} />
							<Button text="省份列表" onPress={() => navigator.push({title:'省份列表',id:'AreaList'})} />
							<Button text="搜索页面" onPress={() => navigator.push({title:'搜索页面',id:'SeachPage'})} />
							<Button text="scrollable-tab-view" onPress={() => navigator.push({title:'scrollable-tab-view测试',id:'TabView'})} />
						</View>
					</View>
				);
				break;

			case 'StateChange' : 
				return (
					<View style={styles.flex}>
						<TopTitle  title={route.title} onPress={() => navigator.push({title:'首页',id:'main'})} />
						<View style={styles.flex}>
							<StateChange />
						</View>
					</View>
				);
				break;
			case 'AreaList' : 
				return (
					<View style={styles.flex}>
						<TopTitle  title={route.title} onPress={() => navigator.push({title:'首页',id:'main'})} />
						<View style={styles.flex}>
							<AreaList />
						</View>
					</View>
				);
				break;
			case 'SeachPage' : 
				return (
					<View style={styles.flex}>
						<TopTitle  title={route.title} onPress={() => navigator.push({title:'首页',id:'main'})} />
						<View style={styles.flex}>
							<SeachPage />
						</View>
					</View>
				);
			case 'TabView' : 
				return (
					<View style={styles.flex}>
						<TopTitle  title={route.title} onPress={() => navigator.push({title:'首页',id:'main'})} />
						<View style={styles.flex}>
							<TabView />
						</View>
					</View>
				);
			default : 
				return false;
		}
	};

    render() {
	    return (
	      <Navigator
	        initialRoute={{ title: '首页', id: 'main' }}
	        renderScene={this.rendNavigator}
	      />
	    );
	}
}

const styles = StyleSheet.create({
	flex : {
		flex : 1,
	},
	menuBox : {
		flex : 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title : {
		marginBottom : 20,
	},
	btnList : {
		justifyContent: 'center',
    	flexDirection: 'row',
    	flexWrap: 'wrap',
	},
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);