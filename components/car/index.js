import React, { useState } from 'react';
import { ScrollView, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import Menu from '../menu';

function Car() {
    const [locked, setLocked] = useState(false);
    const lockCar = () => {
        if(locked){
            setLocked(false);
        } else {
            setLocked(true);
        }
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={require("../../assets/background.png")}
                style={styles.imageBackground}
            />
            {/* Header  */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Oba Tesla Clone</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24} />
                </TouchableOpacity>
            </View>
            {/* Battery Section */}
            <View style={styles.batterySection}>
                <Image 
                    source={require("../../assets/battery.png")}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>150 min</Text>
            </View>
            {/* Status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            <ScrollView>
            {/* Control icons */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faKey } size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={lockCar}>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ locked ? faLock : faUnlock } size={24} />
                    </View>
                </TouchableOpacity>
            </View>
            <Menu />
            </ScrollView>
        </View>
    )
}

export default Car
