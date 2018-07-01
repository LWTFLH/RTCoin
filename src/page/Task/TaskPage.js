import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import SwiperComponent from "../../common/SwiperComponent";
import ListViewComponent from "../../common/listViewComponent";
import ListViewComponent2 from "../../common/listViewComponent2";

export default class TaskPage extends Component {
    static navigationOptions = {
        tabBarLabel: '任务',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../img/task_sel.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../img/task_nor.png')}/>
            );
        },
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <SwiperComponent/>
                    <Text style={styles.textStyle}>基础任务</Text>
                    <ListViewComponent/>
                    <Text style={styles.textStyle}>独家任务</Text>
                    <ListViewComponent2/>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10.
    },
    tabBarIcon: {
        width: 19,
        height: 19,
    }
});