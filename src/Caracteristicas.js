const buscarCaracteristica = (codigo) => {
  console.log('codigo', codigo);
  const cod = `0x${codigo.substring(4, 8).toUpperCase()}`;

  console.log('cod', cod);

  const servs = caracteristicas.filter(({ assignedNumber }) => cod === assignedNumber);
  return servs.length === 0 ? caracteristicaNoRegistrada(cod) : servs.pop();
};

const caracteristicaNoRegistrada = cod => ({
  name: `${cod} no registrado`,
  uniformTypeIdentifier: 'org.bluetooth.service.generic_access',
  assignedNumber: cod,
  specification: 'GSS'
});

export default buscarCaracteristica;

const caracteristicas = [
  {
    name: 'Aerobic Heart Rate Lower Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.aerobic_heart_rate_lower_limit',
    assignedNumber: '0x2A7E',
    Specification: 'GSS'
  },
  {
    name: 'Aerobic Heart Rate Upper Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.aerobic_heart_rate_upper_limit',
    assignedNumber: '0x2A84',
    Specification: 'GSS'
  },
  {
    name: 'Aerobic Threshold',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.aerobic_threshold',
    assignedNumber: '0x2A7F',
    Specification: 'GSS'
  },
  {
    name: 'Age',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.age',
    assignedNumber: '0x2A80',
    Specification: 'GSS'
  },
  {
    name: 'Aggregate',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.aggregate',
    assignedNumber: '0x2A5A',
    Specification: 'GSS'
  },
  {
    name: 'Alert Category ID',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.alert_category_id',
    assignedNumber: '0x2A43',
    Specification: 'GSS'
  },
  {
    name: 'Alert Category ID Bit Mask',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.alert_category_id_bit_mask',
    assignedNumber: '0x2A42',
    Specification: 'GSS'
  },
  {
    name: 'Alert Level',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.alert_level',
    assignedNumber: '0x2A06',
    Specification: 'GSS'
  },
  {
    name: 'Alert Notification Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.alert_notification_control_point',
    assignedNumber: '0x2A44',
    Specification: 'GSS'
  },
  {
    name: 'Alert Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.alert_status',
    assignedNumber: '0x2A3F',
    Specification: 'GSS'
  },
  {
    name: 'Altitude',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.altitude',
    assignedNumber: '0x2AB3',
    Specification: 'GSS'
  },
  {
    name: 'Anaerobic Heart Rate Lower Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.anaerobic_heart_rate_lower_limit',
    assignedNumber: '0x2A81',
    Specification: 'GSS'
  },
  {
    name: 'Anaerobic Heart Rate Upper Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.anaerobic_heart_rate_upper_limit',
    assignedNumber: '0x2A82',
    Specification: 'GSS'
  },
  {
    name: 'Anaerobic Threshold',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.anaerobic_threshold',
    assignedNumber: '0x2A83',
    Specification: 'GSS'
  },
  {
    name: 'Analog',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.analog',
    assignedNumber: '0x2A58',
    Specification: 'GSS'
  },
  {
    name: 'Analog Output',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.analog_output',
    assignedNumber: '0x2A59',
    Specification: 'GSS'
  },
  {
    name: 'Apparent Wind Direction',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.apparent_wind_direction',
    assignedNumber: '0x2A73',
    Specification: 'GSS'
  },
  {
    name: 'Apparent Wind Speed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.apparent_wind_speed',
    assignedNumber: '0x2A72',
    Specification: 'GSS'
  },
  {
    name: 'Appearance',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gap.appearance',
    assignedNumber: '0x2A01',
    Specification: 'GSS'
  },
  {
    name: 'Barometric Pressure Trend',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.barometric_pressure_trend',
    assignedNumber: '0x2AA3',
    Specification: 'GSS'
  },
  {
    name: 'Battery Level',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.battery_level',
    assignedNumber: '0x2A19',
    Specification: 'GSS'
  },
  {
    name: 'Battery Level State',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.battery_level_state',
    assignedNumber: '0x2A1B',
    Specification: 'GSS'
  },
  {
    name: 'Battery Power State',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.battery_power_state',
    assignedNumber: '0x2A1A',
    Specification: 'GSS'
  },
  {
    name: 'Blood Pressure Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.blood_pressure_feature',
    assignedNumber: '0x2A49',
    Specification: 'GSS'
  },
  {
    name: 'Blood Pressure Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.blood_pressure_measurement',
    assignedNumber: '0x2A35',
    Specification: 'GSS'
  },
  {
    name: 'Body Composition Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.body_composition_feature',
    assignedNumber: '0x2A9B',
    Specification: 'GSS'
  },
  {
    name: 'Body Composition Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.body_composition_measurement',
    assignedNumber: '0x2A9C',
    Specification: 'GSS'
  },
  {
    name: 'Body Sensor Location',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.body_sensor_location',
    assignedNumber: '0x2A38',
    Specification: 'GSS'
  },
  {
    name: 'Bond Management Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.bond_management_control_point',
    assignedNumber: '0x2AA4',
    Specification: 'GSS'
  },
  {
    name: 'Bond Management Features',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.bond_management_feature',
    assignedNumber: '0x2AA5',
    Specification: 'GSS'
  },
  {
    name: 'Boot Keyboard Input Report',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.boot_keyboard_input_report',
    assignedNumber: '0x2A22',
    Specification: 'GSS'
  },
  {
    name: 'Boot Keyboard Output Report',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.boot_keyboard_output_report',
    assignedNumber: '0x2A32',
    Specification: 'GSS'
  },
  {
    name: 'Boot Mouse Input Report',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.boot_mouse_input_report',
    assignedNumber: '0x2A33',
    Specification: 'GSS'
  },
  {
    name: 'Central Address Resolution',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gap.central_address_resolution',
    assignedNumber: '0x2AA6',
    Specification: 'GSS'
  },
  {
    name: 'CGM Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_feature',
    assignedNumber: '0x2AA8',
    Specification: 'GSS'
  },
  {
    name: 'CGM Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_measurement',
    assignedNumber: '0x2AA7',
    Specification: 'GSS'
  },
  {
    name: 'CGM Session Run Time',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_session_run_time',
    assignedNumber: '0x2AAB',
    Specification: 'GSS'
  },
  {
    name: 'CGM Session Start Time',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_session_start_time',
    assignedNumber: '0x2AAA',
    Specification: 'GSS'
  },
  {
    name: 'CGM Specific Ops Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_specific_ops_control_point',
    assignedNumber: '0x2AAC',
    Specification: 'GSS'
  },
  {
    name: 'CGM Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cgm_status',
    assignedNumber: '0x2AA9',
    Specification: 'GSS'
  },
  {
    name: 'Cross Trainer Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cross_trainer_data',
    assignedNumber: '0x2ACE',
    Specification: 'GSS'
  },
  {
    name: 'CSC Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.csc_feature',
    assignedNumber: '0x2A5C',
    Specification: 'GSS'
  },
  {
    name: 'CSC Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.csc_measurement',
    assignedNumber: '0x2A5B',
    Specification: 'GSS'
  },
  {
    name: 'Current Time',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.current_time',
    assignedNumber: '0x2A2B',
    Specification: 'GSS'
  },
  {
    name: 'Cycling Power Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cycling_power_control_point',
    assignedNumber: '0x2A66',
    Specification: 'GSS'
  },
  {
    name: 'Cycling Power Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cycling_power_feature',
    assignedNumber: '0x2A65',
    Specification: 'GSS'
  },
  {
    name: 'Cycling Power Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cycling_power_measurement',
    assignedNumber: '0x2A63',
    Specification: 'GSS'
  },
  {
    name: 'Cycling Power Vector',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.cycling_power_vector',
    assignedNumber: '0x2A64',
    Specification: 'GSS'
  },
  {
    name: 'Database Change Increment',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.database_change_increment',
    assignedNumber: '0x2A99',
    Specification: 'GSS'
  },
  {
    name: 'Date of Birth',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.date_of_birth',
    assignedNumber: '0x2A85',
    Specification: 'GSS'
  },
  {
    name: 'Date of Threshold Assessment',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.date_of_threshold_assessment',
    assignedNumber: '0x2A86',
    Specification: 'GSS'
  },
  {
    name: 'Date Time',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.date_time',
    assignedNumber: '0x2A08',
    Specification: 'GSS'
  },
  {
    name: 'Date UTC',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.date_utc',
    assignedNumber: '0x2AED',
    Specification: 'GSS'
  },
  {
    name: 'Day Date Time',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.day_date_time',
    assignedNumber: '0x2A0A',
    Specification: 'GSS'
  },
  {
    name: 'Day of Week',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.day_of_week',
    assignedNumber: '0x2A09',
    Specification: 'GSS'
  },
  {
    name: 'Descriptor Value Changed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.descriptor_value_changed',
    assignedNumber: '0x2A7D',
    Specification: 'GSS'
  },
  {
    name: 'Device Name',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gap.device_name',
    assignedNumber: '0x2A00',
    Specification: 'GSS'
  },
  {
    name: 'Dew Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.dew_point',
    assignedNumber: '0x2A7B',
    Specification: 'GSS'
  },
  {
    name: 'Digital',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.digital',
    assignedNumber: '0x2A56',
    Specification: 'GSS'
  },
  {
    name: 'Digital Output',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.digital_output',
    assignedNumber: '0x2A57',
    Specification: 'GSS'
  },
  {
    name: 'DST Offset',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.dst_offset',
    assignedNumber: '0x2A0D',
    Specification: 'GSS'
  },
  {
    name: 'Elevation',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.elevation',
    assignedNumber: '0x2A6C',
    Specification: 'GSS'
  },
  {
    name: 'Email Address',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.email_address',
    assignedNumber: '0x2A87',
    Specification: 'GSS'
  },
  {
    name: 'Exact Time 100',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.exact_time_100',
    assignedNumber: '0x2A0B',
    Specification: 'GSS'
  },
  {
    name: 'Exact Time 256',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.exact_time_256',
    assignedNumber: '0x2A0C',
    Specification: 'GSS'
  },
  {
    name: 'Fat Burn Heart Rate Lower Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.fat_burn_heart_rate_lower_limit',
    assignedNumber: '0x2A88',
    Specification: 'GSS'
  },
  {
    name: 'Fat Burn Heart Rate Upper Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.fat_burn_heart_rate_upper_limit',
    assignedNumber: '0x2A89',
    Specification: 'GSS'
  },
  {
    name: 'Firmware Revision String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.firmware_revision_string',
    assignedNumber: '0x2A26',
    Specification: 'GSS'
  },
  {
    name: 'First Name',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.first_name',
    assignedNumber: '0x2A8A',
    Specification: 'GSS'
  },
  {
    name: 'Fitness Machine Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.fitness_machine_control_point',
    assignedNumber: '0x2AD9',
    Specification: 'GSS'
  },
  {
    name: 'Fitness Machine Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.fitness_machine_feature',
    assignedNumber: '0x2ACC',
    Specification: 'GSS'
  },
  {
    name: 'Fitness Machine Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.fitness_machine_status',
    assignedNumber: '0x2ADA',
    Specification: 'GSS'
  },
  {
    name: 'Five Zone Heart Rate Limits',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.five_zone_heart_rate_limits',
    assignedNumber: '0x2A8B',
    Specification: 'GSS'
  },
  {
    name: 'Floor Number',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.floor_number',
    assignedNumber: '0x2AB2',
    Specification: 'GSS'
  },
  {
    name: 'Gender',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gender',
    assignedNumber: '0x2A8C',
    Specification: 'GSS'
  },
  {
    name: 'Glucose Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.glucose_feature',
    assignedNumber: '0x2A51',
    Specification: 'GSS'
  },
  {
    name: 'Glucose Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.glucose_measurement',
    assignedNumber: '0x2A18',
    Specification: 'GSS'
  },
  {
    name: 'Glucose Measurement Context',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.glucose_measurement_context',
    assignedNumber: '0x2A34',
    Specification: 'GSS'
  },
  {
    name: 'Gust Factor',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gust_factor',
    assignedNumber: '0x2A74',
    Specification: 'GSS'
  },
  {
    name: 'Hardware Revision String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.hardware_revision_string',
    assignedNumber: '0x2A27',
    Specification: 'GSS'
  },
  {
    name: 'Heart Rate Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.heart_rate_control_point',
    assignedNumber: '0x2A39',
    Specification: 'GSS'
  },
  {
    name: 'Heart Rate Max',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.heart_rate_max',
    assignedNumber: '0x2A8D',
    Specification: 'GSS'
  },
  {
    name: 'Heart Rate Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.heart_rate_measurement',
    assignedNumber: '0x2A37',
    Specification: 'GSS'
  },
  {
    name: 'Heat Index',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.heat_index',
    assignedNumber: '0x2A7A',
    Specification: 'GSS'
  },
  {
    name: 'Height',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.height',
    assignedNumber: '0x2A8E',
    Specification: 'GSS'
  },
  {
    name: 'HID Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.hid_control_point',
    assignedNumber: '0x2A4C',
    Specification: 'GSS'
  },
  {
    name: 'HID Information',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.hid_information',
    assignedNumber: '0x2A4A',
    Specification: 'GSS'
  },
  {
    name: 'Hip Circumference',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.hip_circumference',
    assignedNumber: '0x2A8F',
    Specification: 'GSS'
  },
  {
    name: 'HTTP Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.http_control_point',
    assignedNumber: '0x2ABA',
    Specification: 'GSS'
  },
  {
    name: 'HTTP Entity Body',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.http_entity_body',
    assignedNumber: '0x2AB9',
    Specification: 'GSS'
  },
  {
    name: 'HTTP Headers',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.http_headers',
    assignedNumber: '0x2AB7',
    Specification: 'GSS'
  },
  {
    name: 'HTTP Status Code',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.http_status_code',
    assignedNumber: '0x2AB8',
    Specification: 'GSS'
  },
  {
    name: 'HTTPS Security',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.https_security',
    assignedNumber: '0x2ABB',
    Specification: 'GSS'
  },
  {
    name: 'Humidity',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.humidity',
    assignedNumber: '0x2A6F',
    Specification: 'GSS'
  },
  {
    name: 'IDD Annunciation Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_annunciation_status',
    assignedNumber: '0x2B22',
    Specification: 'GSS'
  },
  {
    name: 'IDD Command Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_command_control_point',
    assignedNumber: '0x2B25',
    Specification: 'GSS'
  },
  {
    name: 'IDD Command Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_command_data',
    assignedNumber: '0x2B26',
    Specification: 'GSS'
  },
  {
    name: 'IDD Features',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_features',
    assignedNumber: '0x2B23',
    Specification: 'GSS'
  },
  {
    name: 'IDD History Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_history_data',
    assignedNumber: '0x2B28',
    Specification: 'GSS'
  },
  {
    name: 'IDD Record Access Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_record_access_control_point',
    assignedNumber: '0x2B27',
    Specification: 'GSS'
  },
  {
    name: 'IDD Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_status',
    assignedNumber: '0x2B21',
    Specification: 'GSS'
  },
  {
    name: 'IDD Status Changed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_status_changed',
    assignedNumber: '0x2B20',
    Specification: 'GSS'
  },
  {
    name: 'IDD Status Reader Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.idd_status_reader_control_point',
    assignedNumber: '0x2B24',
    Specification: 'GSS'
  },
  {
    name: 'IEEE 11073-20601 Regulatory Certification Data List',
    uniformTypeIdentifier:
      'org.bluetooth.characteristic.ieee_11073-20601_regulatory_certification_data_list',
    assignedNumber: '0x2A2A',
    Specification: 'GSS'
  },
  {
    name: 'Indoor Bike Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.indoor_bike_data',
    assignedNumber: '0x2AD2',
    Specification: 'GSS'
  },
  {
    name: 'Indoor Positioning Configuration',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.indoor_positioning_configuration',
    assignedNumber: '0x2AAD',
    Specification: 'GSS'
  },
  {
    name: 'Intermediate Cuff Pressure',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.intermediate_cuff_pressure',
    assignedNumber: '0x2A36',
    Specification: 'GSS'
  },
  {
    name: 'Intermediate Temperature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.intermediate_temperature',
    assignedNumber: '0x2A1E',
    Specification: 'GSS'
  },
  {
    name: 'Irradiance',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.irradiance',
    assignedNumber: '0x2A77',
    Specification: 'GSS'
  },
  {
    name: 'Language',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.language',
    assignedNumber: '0x2AA2',
    Specification: 'GSS'
  },
  {
    name: 'Last Name',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.last_name',
    assignedNumber: '0x2A90',
    Specification: 'GSS'
  },
  {
    name: 'Latitude',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.latitude',
    assignedNumber: '0x2AAE',
    Specification: 'GSS'
  },
  {
    name: 'LN Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.ln_control_point',
    assignedNumber: '0x2A6B',
    Specification: 'GSS'
  },
  {
    name: 'LN Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.ln_feature',
    assignedNumber: '0x2A6A',
    Specification: 'GSS'
  },
  {
    name: 'Local East Coordinate',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.local_east_coordinate',
    assignedNumber: '0x2AB1',
    Specification: 'GSS'
  },
  {
    name: 'Local North Coordinate',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.local_north_coordinate',
    assignedNumber: '0x2AB0',
    Specification: 'GSS'
  },
  {
    name: 'Local Time Information',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.local_time_information',
    assignedNumber: '0x2A0F',
    Specification: 'GSS'
  },
  {
    name: 'Location and Speed Characteristic',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.location_and_speed',
    assignedNumber: '0x2A67',
    Specification: 'GSS'
  },
  {
    name: 'Location Name',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.location_name',
    assignedNumber: '0x2AB5',
    Specification: 'GSS'
  },
  {
    name: 'Longitude',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.Longitude',
    assignedNumber: '0x2AAF',
    Specification: 'GSS'
  },
  {
    name: 'Magnetic Declination',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.magnetic_declination',
    assignedNumber: '0x2A2C',
    Specification: 'GSS'
  },
  {
    name: 'Magnetic Flux Density - 2D',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.Magnetic_flux_density_2D',
    assignedNumber: '0x2AA0',
    Specification: 'GSS'
  },
  {
    name: 'Magnetic Flux Density - 3D',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.Magnetic_flux_density_3D',
    assignedNumber: '0x2AA1',
    Specification: 'GSS'
  },
  {
    name: 'Manufacturer Name String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.manufacturer_name_string',
    assignedNumber: '0x2A29',
    Specification: 'GSS'
  },
  {
    name: 'Maximum Recommended Heart Rate',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.maximum_recommended_heart_rate',
    assignedNumber: '0x2A91',
    Specification: 'GSS'
  },
  {
    name: 'Measurement Interval',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.measurement_interval',
    assignedNumber: '0x2A21',
    Specification: 'GSS'
  },
  {
    name: 'Model Number String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.model_number_string',
    assignedNumber: '0x2A24',
    Specification: 'GSS'
  },
  {
    name: 'Navigation',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.navigation',
    assignedNumber: '0x2A68',
    Specification: 'GSS'
  },
  {
    name: 'Network Availability',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.network_availability',
    assignedNumber: '0x2A3E',
    Specification: 'GSS'
  },
  {
    name: 'New Alert',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.new_alert',
    assignedNumber: '0x2A46',
    Specification: 'GSS'
  },
  {
    name: 'Object Action Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_action_control_point',
    assignedNumber: '0x2AC5',
    Specification: 'GSS'
  },
  {
    name: 'Object Changed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_changed',
    assignedNumber: '0x2AC8',
    Specification: 'GSS'
  },
  {
    name: 'Object First-Created',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_first_created',
    assignedNumber: '0x2AC1',
    Specification: 'GSS'
  },
  {
    name: 'Object ID',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_id',
    assignedNumber: '0x2AC3',
    Specification: 'GSS'
  },
  {
    name: 'Object Last-Modified',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_last_modified',
    assignedNumber: '0x2AC2',
    Specification: 'GSS'
  },
  {
    name: 'Object List Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_list_control_point',
    assignedNumber: '0x2AC6',
    Specification: 'GSS'
  },
  {
    name: 'Object List Filter',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_list_filter',
    assignedNumber: '0x2AC7',
    Specification: 'GSS'
  },
  {
    name: 'Object Name',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_name',
    assignedNumber: '0x2ABE',
    Specification: 'GSS'
  },
  {
    name: 'Object Properties',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_properties',
    assignedNumber: '0x2AC4',
    Specification: 'GSS'
  },
  {
    name: 'Object Size',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_size',
    assignedNumber: '0x2AC0',
    Specification: 'GSS'
  },
  {
    name: 'Object Type',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.object_type',
    assignedNumber: '0x2ABF',
    Specification: 'GSS'
  },
  {
    name: 'OTS Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.ots_feature',
    assignedNumber: '0x2ABD',
    Specification: 'GSS'
  },
  {
    name: 'Peripheral Preferred Connection Parameters',
    uniformTypeIdentifier:
      'org.bluetooth.characteristic.gap.peripheral_preferred_connection_parameters',
    assignedNumber: '0x2A04',
    Specification: 'GSS'
  },
  {
    name: 'Peripheral Privacy Flag',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gap.peripheral_privacy_flag',
    assignedNumber: '0x2A02',
    Specification: 'GSS'
  },
  {
    name: 'PLX Continuous Measurement Characteristic',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.plx_continuous_measurement',
    assignedNumber: '0x2A5F',
    Specification: 'GSS'
  },
  {
    name: 'PLX Features',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.plx_features',
    assignedNumber: '0x2A60',
    Specification: 'GSS'
  },
  {
    name: 'PLX Spot-Check Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.plx_spot_check_measurement',
    assignedNumber: '0x2A5E',
    Specification: 'GSS'
  },
  {
    name: 'PnP ID',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.pnp_id',
    assignedNumber: '0x2A50',
    Specification: 'GSS'
  },
  {
    name: 'Pollen Concentration',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.pollen_concentration',
    assignedNumber: '0x2A75',
    Specification: 'GSS'
  },
  {
    name: 'Position 2D',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.position_2d',
    assignedNumber: '0x2A2F',
    Specification: 'GSS'
  },
  {
    name: 'Position 3D',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.position_3d',
    assignedNumber: '0x2A30',
    Specification: 'GSS'
  },
  {
    name: 'Position Quality',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.position_quality',
    assignedNumber: '0x2A69',
    Specification: 'GSS'
  },
  {
    name: 'Pressure',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.pressure',
    assignedNumber: '0x2A6D',
    Specification: 'GSS'
  },
  {
    name: 'Protocol Mode',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.protocol_mode',
    assignedNumber: '0x2A4E',
    Specification: 'GSS'
  },
  {
    name: 'Pulse Oximetry Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.pulse_oximetry_control_point',
    assignedNumber: '0x2A62',
    Specification: 'GSS'
  },
  {
    name: 'Rainfall',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rainfall',
    assignedNumber: '0x2A78',
    Specification: 'GSS'
  },
  {
    name: 'RC Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rc_feature',
    assignedNumber: '0x2B1D',
    Specification: 'GSS'
  },
  {
    name: 'RC Settings',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rc_settings',
    assignedNumber: '0x2B1E',
    Specification: 'GSS'
  },
  {
    name: 'Reconnection Address',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gap.reconnection_address',
    assignedNumber: '0x2A03',
    Specification: 'GSS'
  },
  {
    name: 'Reconnection Configuration Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.reconnection_configuration_control_point',
    assignedNumber: '0x2B1F',
    Specification: 'GSS'
  },
  {
    name: 'Record Access Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.record_access_control_point',
    assignedNumber: '0x2A52',
    Specification: 'GSS'
  },
  {
    name: 'Reference Time Information',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.reference_time_information',
    assignedNumber: '0x2A14',
    Specification: 'GSS'
  },
  {
    name: 'Removable',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.removable',
    assignedNumber: '0x2A3A',
    Specification: 'GSS'
  },
  {
    name: 'Report',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.report',
    assignedNumber: '0x2A4D',
    Specification: 'GSS'
  },
  {
    name: 'Report Map',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.report_map',
    assignedNumber: '0x2A4B',
    Specification: 'GSS'
  },
  {
    name: 'Resolvable Private Address Only',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.resolvable_private_address_only',
    assignedNumber: '0x2AC9',
    Specification: 'GSS'
  },
  {
    name: 'Resting Heart Rate',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.resting_heart_rate',
    assignedNumber: '0x2A92',
    Specification: 'GSS'
  },
  {
    name: 'Ringer Control point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.ringer_control_point',
    assignedNumber: '0x2A40',
    Specification: 'GSS'
  },
  {
    name: 'Ringer Setting',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.ringer_setting',
    assignedNumber: '0x2A41',
    Specification: 'GSS'
  },
  {
    name: 'Rower Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rower_data',
    assignedNumber: '0x2AD1',
    Specification: 'GSS'
  },
  {
    name: 'RSC Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rsc_feature',
    assignedNumber: '0x2A54',
    Specification: 'GSS'
  },
  {
    name: 'RSC Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.rsc_measurement',
    assignedNumber: '0x2A53',
    Specification: 'GSS'
  },
  {
    name: 'SC Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.sc_control_point',
    assignedNumber: '0x2A55',
    Specification: 'GSS'
  },
  {
    name: 'Scan Interval Window',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.scan_interval_window',
    assignedNumber: '0x2A4F',
    Specification: 'GSS'
  },
  {
    name: 'Scan Refresh',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.scan_refresh',
    assignedNumber: '0x2A31',
    Specification: 'GSS'
  },
  {
    name: 'Scientific Temperature Celsius',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.scientific_temperature_celsius',
    assignedNumber: '0x2A3C',
    Specification: 'GSS'
  },
  {
    name: 'Secondary Time Zone',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.secondary_time_zone',
    assignedNumber: '0x2A10',
    Specification: 'GSS'
  },
  {
    name: 'Sensor Location',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.sensor_location',
    assignedNumber: '0x2A5D',
    Specification: 'GSS'
  },
  {
    name: 'Serial Number String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.serial_number_string',
    assignedNumber: '0x2A25',
    Specification: 'GSS'
  },
  {
    name: 'Service Changed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.gatt.service_changed',
    assignedNumber: '0x2A05',
    Specification: 'GSS'
  },
  {
    name: 'Service Required',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.service_required',
    assignedNumber: '0x2A3B',
    Specification: 'GSS'
  },
  {
    name: 'Software Revision String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.software_revision_string',
    assignedNumber: '0x2A28',
    Specification: 'GSS'
  },
  {
    name: 'Sport Type for Aerobic and Anaerobic Thresholds',
    uniformTypeIdentifier:
      'org.bluetooth.characteristic.sport_type_for_aerobic_and_anaerobic_thresholds',
    assignedNumber: '0x2A93',
    Specification: 'GSS'
  },
  {
    name: 'Stair Climber Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.stair_climber_data',
    assignedNumber: '0x2AD0',
    Specification: 'GSS'
  },
  {
    name: 'Step Climber Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.step_climber_data',
    assignedNumber: '0x2ACF',
    Specification: 'GSS'
  },
  {
    name: 'String',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.string',
    assignedNumber: '0x2A3D',
    Specification: 'GSS'
  },
  {
    name: 'Supported Heart Rate Range',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_heart_rate_range',
    assignedNumber: '0x2AD7',
    Specification: 'GSS'
  },
  {
    name: 'Supported Inclination Range',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_inclination_range',
    assignedNumber: '0x2AD5',
    Specification: 'GSS'
  },
  {
    name: 'Supported New Alert Category',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_new_alert_category',
    assignedNumber: '0x2A47',
    Specification: 'GSS'
  },
  {
    name: 'Supported Power Range',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_power_range',
    assignedNumber: '0x2AD8',
    Specification: 'GSS'
  },
  {
    name: 'Supported Resistance Level Range',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_resistance_level_range',
    assignedNumber: '0x2AD6',
    Specification: 'GSS'
  },
  {
    name: 'Supported Speed Range',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_speed_range',
    assignedNumber: '0x2AD4',
    Specification: 'GSS'
  },
  {
    name: 'Supported Unread Alert Category',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.supported_unread_alert_category',
    assignedNumber: '0x2A48',
    Specification: 'GSS'
  },
  {
    name: 'System ID',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.system_id',
    assignedNumber: '0x2A23',
    Specification: 'GSS'
  },
  {
    name: 'TDS Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.tds_control_point',
    assignedNumber: '0x2ABC',
    Specification: 'GSS'
  },
  {
    name: 'Temperature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.temperature',
    assignedNumber: '0x2A6E',
    Specification: 'GSS'
  },
  {
    name: 'Temperature Celsius',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.temperature_celsius',
    assignedNumber: '0x2A1F',
    Specification: 'GSS'
  },
  {
    name: 'Temperature Fahrenheit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.temperature_fahrenheit',
    assignedNumber: '0x2A20',
    Specification: 'GSS'
  },
  {
    name: 'Temperature Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.temperature_measurement',
    assignedNumber: '0x2A1C',
    Specification: 'GSS'
  },
  {
    name: 'Temperature Type',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.temperature_type',
    assignedNumber: '0x2A1D',
    Specification: 'GSS'
  },
  {
    name: 'Three Zone Heart Rate Limits',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.three_zone_heart_rate_limits',
    assignedNumber: '0x2A94',
    Specification: 'GSS'
  },
  {
    name: 'Time Accuracy',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_accuracy',
    assignedNumber: '0x2A12',
    Specification: 'GSS'
  },
  {
    name: 'Time Broadcast',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_broadcast',
    assignedNumber: '0x2A15',
    Specification: 'GSS'
  },
  {
    name: 'Time Source',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_source',
    assignedNumber: '0x2A13',
    Specification: 'GSS'
  },
  {
    name: 'Time Update Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_update_control_point',
    assignedNumber: '0x2A16',
    Specification: 'GSS'
  },
  {
    name: 'Time Update State',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_update_state',
    assignedNumber: '0x2A17',
    Specification: 'GSS'
  },
  {
    name: 'Time with DST',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_with_dst',
    assignedNumber: '0x2A11',
    Specification: 'GSS'
  },
  {
    name: 'Time Zone',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.time_zone',
    assignedNumber: '0x2A0E',
    Specification: 'GSS'
  },
  {
    name: 'Training Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.training_status',
    assignedNumber: '0x2AD3',
    Specification: 'GSS'
  },
  {
    name: 'Treadmill Data',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.treadmill_data',
    assignedNumber: '0x2ACD',
    Specification: 'GSS'
  },
  {
    name: 'True Wind Direction',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.true_wind_direction',
    assignedNumber: '0x2A71',
    Specification: 'GSS'
  },
  {
    name: 'True Wind Speed',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.true_wind_speed',
    assignedNumber: '0x2A70',
    Specification: 'GSS'
  },
  {
    name: 'Two Zone Heart Rate Limit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.two_zone_heart_rate_limit',
    assignedNumber: '0x2A95',
    Specification: 'GSS'
  },
  {
    name: 'Tx Power Level',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.tx_power_level',
    assignedNumber: '0x2A07',
    Specification: 'GSS'
  },
  {
    name: 'Uncertainty',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.uncertainty',
    assignedNumber: '0x2AB4',
    Specification: 'GSS'
  },
  {
    name: 'Unread Alert Status',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.unread_alert_status',
    assignedNumber: '0x2A45',
    Specification: 'GSS'
  },
  {
    name: 'URI',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.uri',
    assignedNumber: '0x2AB6',
    Specification: 'GSS'
  },
  {
    name: 'User Control Point',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.user_control_point',
    assignedNumber: '0x2A9F',
    Specification: 'GSS'
  },
  {
    name: 'User Index',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.user_index',
    assignedNumber: '0x2A9A',
    Specification: 'GSS'
  },
  {
    name: 'UV Index',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.uv_index',
    assignedNumber: '0x2A76',
    Specification: 'GSS'
  },
  {
    name: 'VO2 Max',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.vo2_max',
    assignedNumber: '0x2A96',
    Specification: 'GSS'
  },
  {
    name: 'Waist Circumference',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.waist_circumference',
    assignedNumber: '0x2A97',
    Specification: 'GSS'
  },
  {
    name: 'Weight',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.weight',
    assignedNumber: '0x2A98',
    Specification: 'GSS'
  },
  {
    name: 'Weight Measurement',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.weight_measurement',
    assignedNumber: '0x2A9D',
    Specification: 'GSS'
  },
  {
    name: 'Weight Scale Feature',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.weight_scale_feature',
    assignedNumber: '0x2A9E',
    Specification: 'GSS'
  },
  {
    name: 'Wind Chill',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.wind_chill',
    assignedNumber: '0x2A79',
    Specification: 'GSS'
  },
  {
    name: 'Peso AndesFit',
    uniformTypeIdentifier: 'org.bluetooth.characteristic.andesFit_peso',
    assignedNumber: '0xFFF4',
    Specification: 'GSS'
  }
];
