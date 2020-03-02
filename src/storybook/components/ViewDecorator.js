import React from 'react';

import {View} from 'react-native';

const ViewDecorator = storyFn => (
  <View style={{flex: 1, marginVertical: 40, marginHorizontal: 20}}>
    {storyFn()}
  </View>
);

export default ViewDecorator;
