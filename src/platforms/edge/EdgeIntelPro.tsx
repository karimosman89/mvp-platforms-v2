import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Chip,
  LinearProgress,
  Tabs,
  Tab,
  Alert,
  Divider
} from '@mui/material';
import { 
  Memory,
  Speed,
  NetworkWifi,
  Assessment,
  DeviceHub,
  Security,
  BatteryChargingFull,
  TrendingUp,
  Computer,
  CloudOff
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`edge-tabpanel-${index}`}
      aria-labelledby={`edge-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const EdgeIntelPro: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Real-time Edge Inference Use Case
  const edgeInferenceKPIs = [
    { title: 'Inference Latency', value: '0.8 ms', change: '-67%', icon: <Speed />, color: '#1976d2' },
    { title: 'Throughput', value: '15K req/sec', change: '+234%', icon: <TrendingUp />, color: '#388e3c' },
    { title: 'Model Accuracy', value: '97.2%', change: '+3.1%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Power Efficiency', value: '89%', change: '+42%', icon: <BatteryChargingFull />, color: '#7b1fa2' }
  ];

  // IoT Device Management Use Case
  const iotManagementKPIs = [
    { title: 'Connected Devices', value: '847K', change: '+156%', icon: <DeviceHub />, color: '#1976d2' },
    { title: 'Device Uptime', value: '99.7%', change: '+2.1%', icon: <Computer />, color: '#388e3c' },
    { title: 'Data Processing', value: '2.3 TB/hr', change: '+78%', icon: <Memory />, color: '#f57c00' },
    { title: 'Security Score', value: '98.4%', change: '+5.7%', icon: <Security />, color: '#7b1fa2' }
  ];

  // Offline AI Operations Use Case
  const offlineOperationsKPIs = [
    { title: 'Offline Accuracy', value: '96.8%', change: '+4.2%', icon: <CloudOff />, color: '#1976d2' },
    { title: 'Local Storage', value: '94%', change: '+23%', icon: <Memory />, color: '#388e3c' },
    { title: 'Sync Efficiency', value: '91.7%', change: '+18%', icon: <NetworkWifi />, color: '#f57c00' },
    { title: 'Battery Life', value: '18.4 hrs', change: '+34%', icon: <BatteryChargingFull />, color: '#7b1fa2' }
  ];

  // Edge Computing Orchestration Use Case
  const edgeOrchestrationKPIs = [
    { title: 'Node Coordination', value: '97.6%', change: '+8.9%', icon: <DeviceHub />, color: '#1976d2' },
    { title: 'Load Balancing', value: '94.3%', change: '+12%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Resource Utilization', value: '87.2%', change: '+28%', icon: <Memory />, color: '#f57c00' },
    { title: 'Fault Tolerance', value: '99.1%', change: '+3.4%', icon: <Security />, color: '#7b1fa2' }
  ];

  // Industrial Automation Use Case
  const industrialAutomationKPIs = [
    { title: 'Control Loop Speed', value: '100 μs', change: '-85%', icon: <Speed />, color: '#1976d2' },
    { title: 'Safety Response', value: '50 μs', change: '-92%', icon: <Security />, color: '#388e3c' },
    { title: 'Production Efficiency', value: '96.8%', change: '+15%', icon: <TrendingUp />, color: '#f57c00' },
    { title: 'System Reliability', value: '99.9%', change: '+1.2%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Edge Analytics Use Case
  const edgeAnalyticsKPIs = [
    { title: 'Real-time Analytics', value: '98.7%', change: '+6.3%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Data Compression', value: '89%', change: '+45%', icon: <Memory />, color: '#388e3c' },
    { title: 'Bandwidth Savings', value: '76%', change: '+67%', icon: <NetworkWifi />, color: '#f57c00' },
    { title: 'Insight Generation', value: '1.2 sec', change: '-58%', icon: <Speed />, color: '#7b1fa2' }
  ];

  const renderKPICards = (kpis: any[]) => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {kpis.map((kpi, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Box sx={{ color: kpi.color }}>
                  {kpi.icon}
                </Box>
                <Chip 
                  label={kpi.change} 
                  color={kpi.change.startsWith('+') ? "success" : "error"} 
                  size="small" 
                />
              </Box>
              <Typography variant="h4" component="div" gutterBottom>
                {kpi.value}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {kpi.title}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={Math.random() * 100} 
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        EdgeIntel Pro
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Ultra-fast edge AI platform for real-time inference, IoT device management, and industrial automation with sub-millisecond latency
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="edge computing use cases">
          <Tab label="Real-time Inference" />
          <Tab label="IoT Management" />
          <Tab label="Offline Operations" />
          <Tab label="Edge Orchestration" />
          <Tab label="Industrial Automation" />
          <Tab label="Edge Analytics" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Real-time Edge Inference</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Ultra-low latency AI inference at the edge with optimized models, hardware acceleration, and real-time processing capabilities.
        </Typography>
        {renderKPICards(edgeInferenceKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Performance Update:</strong> Edge inference achieving 0.8ms latency with 15K requests/second throughput. Model accuracy maintained at 97.2%.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Model Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Quantization" color="primary" size="small" />
                  <Chip label="Pruning" color="secondary" size="small" />
                  <Chip label="Hardware Acceleration" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced model optimization techniques including quantization, pruning, and hardware-specific acceleration for maximum performance.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Real-time Processing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Stream Processing" color="primary" size="small" />
                  <Chip label="Batch Optimization" color="warning" size="small" />
                  <Chip label="Pipeline Acceleration" color="info" size="small" />
                </Box>
                <Typography variant="body2">Optimized real-time processing pipeline with stream processing and batch optimization for consistent low-latency performance.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>IoT Device Management</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Comprehensive IoT device management platform with device orchestration, data processing, and security management at scale.
        </Typography>
        {renderKPICards(iotManagementKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>IoT Update:</strong> 847K devices connected and managed. Processing 2.3 TB/hour of IoT data with 99.7% device uptime.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Device Orchestration</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Auto-discovery" color="primary" size="small" />
                  <Chip label="Remote Management" color="secondary" size="small" />
                  <Chip label="Firmware Updates" color="success" size="small" />
                </Box>
                <Typography variant="body2">Intelligent device orchestration with auto-discovery, remote management, and automated firmware updates.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Edge Data Processing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Stream Analytics" color="primary" size="small" />
                  <Chip label="Data Filtering" color="warning" size="small" />
                  <Chip label="Anomaly Detection" color="error" size="small" />
                </Box>
                <Typography variant="body2">Advanced edge data processing with stream analytics, intelligent filtering, and real-time anomaly detection.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Offline AI Operations</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Robust offline AI capabilities with local model inference, data caching, and intelligent synchronization for disconnected environments.
        </Typography>
        {renderKPICards(offlineOperationsKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Offline Alert:</strong> 247 edge nodes operating in offline mode. Maintaining 96.8% accuracy with local inference and intelligent data caching.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Local Inference</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Model Caching" color="primary" size="small" />
                  <Chip label="Offline Processing" color="secondary" size="small" />
                  <Chip label="Battery Optimization" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced local inference capabilities with intelligent model caching and battery-optimized processing.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Smart Synchronization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Delta Sync" color="primary" size="small" />
                  <Chip label="Conflict Resolution" color="warning" size="small" />
                  <Chip label="Bandwidth Optimization" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent synchronization with delta sync, automatic conflict resolution, and bandwidth optimization.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Edge Computing Orchestration</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Distributed edge computing orchestration with intelligent node coordination, load balancing, and fault tolerance mechanisms.
        </Typography>
        {renderKPICards(edgeOrchestrationKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Orchestration Update:</strong> 97.6% node coordination efficiency achieved. Load balancing optimized across 1,247 edge nodes.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Distributed Computing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Node Clustering" color="primary" size="small" />
                  <Chip label="Task Distribution" color="secondary" size="small" />
                  <Chip label="Resource Sharing" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced distributed computing with intelligent node clustering and optimized task distribution.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Fault Tolerance</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Auto Recovery" color="primary" size="small" />
                  <Chip label="Failover Systems" color="error" size="small" />
                  <Chip label="Redundancy Management" color="info" size="small" />
                </Box>
                <Typography variant="body2">Robust fault tolerance with automatic recovery, intelligent failover, and dynamic redundancy management.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Industrial Automation Control</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Ultra-fast industrial automation control with microsecond response times, safety systems, and real-time production optimization.
        </Typography>
        {renderKPICards(industrialAutomationKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Safety Alert:</strong> Emergency stop activated on Line 3 in 50 microseconds. Safety systems responding within specified parameters.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Real-time Control</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Microsecond Latency" color="primary" size="small" />
                  <Chip label="Deterministic Timing" color="secondary" size="small" />
                  <Chip label="Control Loops" color="success" size="small" />
                </Box>
                <Typography variant="body2">Ultra-low latency control systems with deterministic timing and high-frequency control loops.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Safety Systems</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Emergency Response" color="error" size="small" />
                  <Chip label="Predictive Safety" color="warning" size="small" />
                  <Chip label="Compliance Monitoring" color="info" size="small" />
                </Box>
                <Typography variant="body2">Advanced safety systems with emergency response, predictive safety analysis, and compliance monitoring.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Edge Analytics & Intelligence</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Real-time edge analytics with data compression, bandwidth optimization, and intelligent insight generation at the point of data creation.
        </Typography>
        {renderKPICards(edgeAnalyticsKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Analytics Update:</strong> Real-time analytics processing 2.3 TB/hour with 89% data compression. Bandwidth savings: 76%.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Stream Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Real-time Processing" color="primary" size="small" />
                  <Chip label="Pattern Detection" color="secondary" size="small" />
                  <Chip label="Anomaly Identification" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Advanced stream analytics with real-time pattern detection and intelligent anomaly identification.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Intelligent Compression</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Adaptive Algorithms" color="primary" size="small" />
                  <Chip label="Lossless Compression" color="success" size="small" />
                  <Chip label="Bandwidth Optimization" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent data compression with adaptive algorithms and bandwidth optimization for efficient data transmission.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default EdgeIntelPro;
