import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricMeetaInfo } from '../utils/helper';

export default class AddEntry extends Component {
    
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }
    
    increment = (metric) => {
        const { max, step } = getMetricMeetaInfo(metric);

        this.setState((state) => {
            const count = state[metric] + step;

            return {
                ...state,
                [metric]: count > max ? max : count
            };
        })
    }

    decrement = (metric) => {
        this.setState((state) => {
            const count = state[metric] - getMetricMeetaInfo(metric).step;

            return {
                ...state,
                [metric]: count > 0 ? 0 : count
            };
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }));
    }

    render() {
        return (
            <View>
                <Text>Add Entry</Text>
            </View>
        )
    }
}