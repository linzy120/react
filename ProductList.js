import React, { Component } from 'react';
import {
	AppRegistry,
	Image,
  	ListView,
  	ScrollView,
	StyleSheet,
	Text, 
	View,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';

import Button from './Button';

var Model = [{
	id : '1',
	name : '苹果',
	price : 20,
}, {
	id : '2',
	name : 'k复健科人苹果',
	price : 240,
}, {
	id : '3',
	name : '替代品授信捡拾',
	price : 60,
}, {
	id : '1',
	name : '吉他手e',
	price : 65.5,
}, {
	id : '1',
	name : '香焦',
	price : 10.2,
}];

export default class ProductList extends Component {

	//构造
	constructor(props)
	{
		super(props);
		this.state = {
			GWC_count : 0,
		};
	}

	componentDidMount() {
		let that = this;
		AsyncStorage.getAllKeys(function(err, keys){
			if(err)
			{
				alert('读取AsyncStorage数据错误！');
			}
			else
			{
				console.log(keys);
				
				let total_count = 0;
				for(let i in keys)
				{
					if(keys[i].indexOf('GWC') === 0)
					{
						total_count++;
					}

					// AsyncStorage.getItem(keys[i], function(err, result){
					// 	console.log(result);
					// 	console.log(JSON.parse(result));
					// 	let _date = JSON.parse(result);
					// 	console.log(_date.id);
					// });
				}

				that.setState({
					GWC_count : total_count,
				});
			}
		});
	}

	//添加购物车信息
	press = (data) => {
		this.setState({
			GWC_count : this.state.GWC_count + 1,
		});
		
		AsyncStorage.setItem('GWC' + new Date().getTime(), JSON.stringify(data), function(err){
			if(err)
			{
				alert("存储AsyncStorage数据错误。");
			}
		});
	};

  	render() {
	  	var list = [];
	  	var _count = this.state.GWC_count;
	  	var str = "共" + _count + "件商品，去结算";

	  	for(var i in Model)
	  	{
	  		if(i%2 === 0)
	  		{
	  			if(Model[parseInt(i)+1])
	  			{
	  				let row = (
		  				<View key={i} style={styles.row}>
		  					<Item 
		  						title={Model[i].name}
		  						press={this.press.bind(this, Model[i])}
		  					/>
		  					<Item 
		  						title={Model[parseInt(i)+1].name}
		  						press={this.press.bind(this, Model[parseInt(i)+1])}
		  					/>
		  				</View>
		  			);

		  			list.push(row);
	  			}
	  			else
	  			{
	  				let row = (
		  				<View key={i} style={styles.row}>
		  					<Item 
		  						title={Model[i].name}
		  						press={this.press.bind(this, Model[i])}
		  					/>
		  				</View>
		  			);

		  			list.push(row);
	  			}
	  		}
	  	}

	    return (
	    	<ScrollView stle={styles.scrollview}>
	    		{list}
	    		<Button text={str} />
		    </ScrollView>
	    );
	}
}

const styles = StyleSheet.create({
  flex : {
    flex : 1,
    justifyContent: 'center',
	alignItems: 'center',
  },
  item : {
  	flex : 1,
  	height : 100,
  	margin : 10,
  	backgroundColor : '#eee',
  	justifyContent: 'flex-end',
  },
  item_txt_box : {
  	backgroundColor : 'rgba(0, 0, 0, 0.7)',
  },
  item_txt : {
  	padding : 5,
  	color : '#fff',
  },
  row : {
  	flexDirection: 'row',
  },
  scrollview : {
  	flex : 1,
  },
  settlement : {
  	flex : 1,
  	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor : 'blue',
  },
});

var Item = React.createClass({
	render() {
		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={this.props.press}>
					<View style={styles.item_txt_box}>
						<Text numberOfLines={1} style={styles.item_txt}>{this.props.title}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
});
