const buscarServicio = (codigo) => {
  console.log('codigo', codigo);
  const cod = `0x${codigo.substring(4, 8).toUpperCase()}`;

  console.log('cod', cod);

  const servs = servicios.filter(({ assignedNumber }) => cod === assignedNumber);
  return servs.length === 0 ? servicioNoRegostrado(cod) : servs.pop();
};

const shortUUID = s => `0x${s.substring(4, 8).toUpperCase()}`;

export { shortUUID };
const servicioNoRegostrado = cod => ({
  name: `${cod} no registrado`,
  uniformTypeIdentifier: 'org.bluetooth.service.generic_access',
  assignedNumber: cod,
  specification: 'GSS'
});

export default buscarServicio;

const servicios = [
  {
    name: 'Generic Access',
    uniformTypeIdentifier: 'org.bluetooth.service.generic_access',
    assignedNumber: '0x1800',
    specification: 'GSS'
  },
  {
    name: 'Alert Notification Service',
    uniformTypeIdentifier: 'org.bluetooth.service.alert_notification',
    assignedNumber: '0x1811',
    specification: 'GSS'
  },
  {
    name: 'Automation IO',
    uniformTypeIdentifier: 'org.bluetooth.service.automation_io',
    assignedNumber: '0x1815',
    specification: 'GSS'
  },
  {
    name: 'Battery Service',
    uniformTypeIdentifier: 'org.bluetooth.service.battery_service',
    assignedNumber: '0x180F',
    specification: 'GSS'
  },
  {
    name: 'Blood Pressure',
    uniformTypeIdentifier: 'org.bluetooth.service.blood_pressure',
    assignedNumber: '0x1810',
    specification: 'GSS'
  },
  {
    name: 'Body Composition',
    uniformTypeIdentifier: 'org.bluetooth.service.body_composition',
    assignedNumber: '0x181B',
    specification: 'GSS'
  },
  {
    name: 'Bond Management Service',
    uniformTypeIdentifier: 'org.bluetooth.service.bond_management',
    assignedNumber: '0x181E',
    specification: 'GSS'
  },
  {
    name: 'Continuous Glucose Monitoring',
    uniformTypeIdentifier: 'org.bluetooth.service.continuous_glucose_monitoring',
    assignedNumber: '0x181F',
    specification: 'GSS'
  },
  {
    name: 'Current Time Service',
    uniformTypeIdentifier: 'org.bluetooth.service.current_time',
    assignedNumber: '0x1805',
    specification: 'GSS'
  },
  {
    name: 'Cycling Power',
    uniformTypeIdentifier: 'org.bluetooth.service.cycling_power',
    assignedNumber: '0x1818',
    specification: 'GSS'
  },
  {
    name: 'Cycling Speed and Cadence',
    uniformTypeIdentifier: 'org.bluetooth.service.cycling_speed_and_cadence',
    assignedNumber: '0x1816',
    specification: 'GSS'
  },
  {
    name: 'Device Information',
    uniformTypeIdentifier: 'org.bluetooth.service.device_information',
    assignedNumber: '0x180A',
    specification: 'GSS'
  },
  {
    name: 'Environmental Sensing',
    uniformTypeIdentifier: 'org.bluetooth.service.environmental_sensing',
    assignedNumber: '0x181A',
    specification: 'GSS'
  },
  {
    name: 'Fitness Machine',
    uniformTypeIdentifier: 'org.bluetooth.service.fitness_machine',
    assignedNumber: '0x1826',
    specification: 'GSS'
  },
  {
    name: 'Generic Attribute',
    uniformTypeIdentifier: 'org.bluetooth.service.generic_attribute',
    assignedNumber: '0x1801',
    specification: 'GSS'
  },
  {
    name: 'Glucose',
    uniformTypeIdentifier: 'org.bluetooth.service.glucose',
    assignedNumber: '0x1808',
    specification: 'GSS'
  },
  {
    name: 'Health Thermometer',
    uniformTypeIdentifier: 'org.bluetooth.service.health_thermometer',
    assignedNumber: '0x1809',
    specification: 'GSS'
  },
  {
    name: 'Heart Rate',
    uniformTypeIdentifier: 'org.bluetooth.service.heart_rate',
    assignedNumber: '0x180D',
    specification: 'GSS'
  },
  {
    name: 'HTTP Proxy',
    uniformTypeIdentifier: 'org.bluetooth.service.http_proxy',
    assignedNumber: '0x1823',
    specification: 'GSS'
  },
  {
    name: 'Human Interface Device',
    uniformTypeIdentifier: 'org.bluetooth.service.human_interface_device',
    assignedNumber: '0x1812',
    specification: 'GSS'
  },
  {
    name: 'Immediate Alert',
    uniformTypeIdentifier: 'org.bluetooth.service.immediate_alert',
    assignedNumber: '0x1802',
    specification: 'GSS'
  },
  {
    name: 'Indoor Positioning',
    uniformTypeIdentifier: 'org.bluetooth.service.indoor_positioning',
    assignedNumber: '0x1821',
    specification: 'GSS'
  },
  {
    name: 'Insulin Delivery',
    uniformTypeIdentifier: 'org.bluetooth.service.insulin_delivery',
    assignedNumber: '0x183A',
    specification: 'GSS'
  },
  {
    name: 'Internet Protocol Support Service',
    uniformTypeIdentifier: 'org.bluetooth.service.internet_protocol_support',
    assignedNumber: '0x1820',
    specification: 'GSS'
  },
  {
    name: 'Link Loss',
    uniformTypeIdentifier: 'org.bluetooth.service.link_loss',
    assignedNumber: '0x1803',
    specification: 'GSS'
  },
  {
    name: 'Location and Navigation',
    uniformTypeIdentifier: 'org.bluetooth.service.location_and_navigation',
    assignedNumber: '0x1819',
    specification: 'GSS'
  },
  {
    name: 'Mesh Provisioning Service',
    uniformTypeIdentifier: 'org.bluetooth.service.mesh_provisioning',
    assignedNumber: '0x1827',
    specification: 'GSS'
  },
  {
    name: 'Mesh Proxy Service',
    uniformTypeIdentifier: 'org.bluetooth.service.mesh_proxy',
    assignedNumber: '0x1828',
    specification: 'GSS'
  },
  {
    name: 'Next DST Change Service',
    uniformTypeIdentifier: 'org.bluetooth.service.next_dst_change',
    assignedNumber: '0x1807',
    specification: 'GSS'
  },
  {
    name: 'Object Transfer Service',
    uniformTypeIdentifier: 'org.bluetooth.service.object_transfer',
    assignedNumber: '0x1825',
    specification: 'GSS'
  },
  {
    name: 'Phone Alert Status Service',
    uniformTypeIdentifier: 'org.bluetooth.service.phone_alert_status',
    assignedNumber: '0x180E',
    specification: 'GSS'
  },
  {
    name: 'Pulse Oximeter Service',
    uniformTypeIdentifier: 'org.bluetooth.service.pulse_oximeter',
    assignedNumber: '0x1822',
    specification: 'GSS'
  },
  {
    name: 'Reconnection Configuration',
    uniformTypeIdentifier: 'org.bluetooth.service.reconnection_configuration',
    assignedNumber: '0x1829',
    specification: 'GSS'
  },
  {
    name: 'Reference Time Update Service',
    uniformTypeIdentifier: 'org.bluetooth.service.reference_time_update',
    assignedNumber: '0x1806',
    specification: 'GSS'
  },
  {
    name: 'Running Speed and Cadence',
    uniformTypeIdentifier: 'org.bluetooth.service.running_speed_and_cadence',
    assignedNumber: '0x1814',
    specification: 'GSS'
  },
  {
    name: 'Scan Parameters',
    uniformTypeIdentifier: 'org.bluetooth.service.scan_parameters',
    assignedNumber: '0x1813',
    specification: 'GSS'
  },
  {
    name: 'Transport Discovery',
    uniformTypeIdentifier: 'org.bluetooth.service.transport_discovery',
    assignedNumber: '0x1824',
    specification: 'GSS'
  },
  {
    name: 'Tx Power',
    uniformTypeIdentifier: 'org.bluetooth.service.tx_power',
    assignedNumber: '0x1804',
    specification: 'GSS'
  },
  {
    name: 'User Data',
    uniformTypeIdentifier: 'org.bluetooth.service.user_data',
    assignedNumber: '0x181C',
    specification: 'GSS'
  },
  {
    name: 'Weight Scale',
    uniformTypeIdentifier: 'org.bluetooth.service.weight_scale',
    assignedNumber: '0x181D',
    specification: 'GSS'
  },
  {
    name: 'Escala AndesFit',
    uniformTypeIdentifier: 'org.bluetooth.service.andesFit_weight_scale',
    assignedNumber: '0xFFF0',
    specification: 'GSS'
  }
];
