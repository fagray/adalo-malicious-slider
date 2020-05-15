import {
  RangeSlider
} from '../../index'

export const components = {
  RangeSlider
}

export const config = {"displayName":"Range Slider","name":"range-slider","version":"dev","components":[{"name":"RangeSlider","displayName":"Range Slider","defaultWidth":160,"defaultHeight":24,"props":[{"name":"text","displayName":"Text","type":"text","default":"Happy Hacking"},{"name":"minValue","displayName":"Minimum Value","type":"number","default":"0"},{"name":"maxValue","displayName":"Maximum Value","type":"number","default":"10"},{"name":"incrementSize","displayName":"Increment Size","type":"number","default":"1"}],"childComponents":[{"name":"Track","role":"listItem","reference":"text","props":[{"name":"filledColor","displayName":"Filled Color","type":"color","default":"#00A898"},{"name":"unfilledColor","displayName":"Unfilled Color","type":"color","default":"#00A898"},{"name":"height","displayName":"Height","type":"number","default":"2"},{"name":"orient","displayName":"Orientation","type":"string","default":"Horizontal"}]},{"name":"Marker","role":"listItem","reference":"text","props":[{"name":"markerColor","displayName":"Marker Color","type":"color","default":"#00A898"},{"name":"markerSize","displayName":"Marker Size","type":"number","default":"2"}]},{"name":"Labels","role":"listItem","reference":"text","props":[{"name":"bgColor","displayName":"Background Color","type":"color","default":"#00A898"},{"name":"padding","displayName":"Padding","type":"number","default":"2"}]}]}]}