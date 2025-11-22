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
  SmartToy,
  ControlPoint,
  Speed,
  Assessment,
  Build,
  Security,
  Visibility,
  Engineering,
  Factory,
  Psychology
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
      id={`robotics-tabpanel-${index}`}
      aria-labelledby={`robotics-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const RoboVision: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Industrial Automation Use Case
  const industrialAutomationKPIs = [
    { title: 'Production Efficiency', value: '97.3%', change: '+12%', icon: <Factory />, color: '#1976d2' },
    { title: 'Robot Uptime', value: '99.2%', change: '+3.4%', icon: <SmartToy />, color: '#388e3c' },
    { title: 'Quality Score', value: '98.7%', change: '+5.1%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Cost Reduction', value: '34%', change: '+8.2%', icon: <Engineering />, color: '#7b1fa2' }
  ];

  // Computer Vision Use Case
  const computerVisionKPIs = [
    { title: 'Object Detection', value: '99.8%', change: '+2.1%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Processing Speed', value: '247 fps', change: '+18%', icon: <Speed />, color: '#388e3c' },
    { title: 'Classification Accuracy', value: '98.9%', change: '+4.7%', icon: <ControlPoint />, color: '#f57c00' },
    { title: 'False Positive Rate', value: '0.12%', change: '-45%', icon: <Assessment />, color: '#d32f2f' }
  ];

  // Autonomous Navigation Use Case
  const autonomousNavigationKPIs = [
    { title: 'Navigation Accuracy', value: '99.4%', change: '+6.3%', icon: <SmartToy />, color: '#1976d2' },
    { title: 'Path Efficiency', value: '96.8%', change: '+9.1%', icon: <Speed />, color: '#388e3c' },
    { title: 'Collision Avoidance', value: '99.9%', change: '+0.8%', icon: <Security />, color: '#f57c00' },
    { title: 'Task Completion', value: '97.1%', change: '+7.2%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Predictive Maintenance Use Case
  const predictiveMaintenanceKPIs = [
    { title: 'Failure Prediction', value: '94.8%', change: '+11%', icon: <Psychology />, color: '#1976d2' },
    { title: 'Maintenance Cost', value: '$1.2M', change: '-22%', icon: <Build />, color: '#388e3c' },
    { title: 'Downtime Reduction', value: '67%', change: '+15%', icon: <Engineering />, color: '#f57c00' },
    { title: 'Equipment Lifespan', value: '+28%', change: '+12%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Quality Control Use Case
  const qualityControlKPIs = [
    { title: 'Defect Detection', value: '99.7%', change: '+3.2%', icon: <ControlPoint />, color: '#1976d2' },
    { title: 'Inspection Speed', value: '8.4 sec/unit', change: '-25%', icon: <Speed />, color: '#388e3c' },
    { title: 'Accuracy Rate', value: '98.9%', change: '+2.8%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Recall Rate', value: '0.08%', change: '-58%', icon: <Security />, color: '#d32f2f' }
  ];

  // Human-Robot Collaboration Use Case
  const humanRobotCollabKPIs = [
    { title: 'Safety Score', value: '99.9%', change: '+0.5%', icon: <Security />, color: '#1976d2' },
    { title: 'Productivity Gain', value: '42%', change: '+18%', icon: <Engineering />, color: '#388e3c' },
    { title: 'Task Accuracy', value: '97.6%', change: '+8.4%', icon: <ControlPoint />, color: '#f57c00' },
    { title: 'Worker Satisfaction', value: '91%', change: '+12%', icon: <Psychology />, color: '#7b1fa2' }
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
        RoboVision
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Advanced robotics intelligence platform for industrial automation, computer vision, and autonomous systems
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="robotics use cases">
          <Tab label="Industrial Automation" />
          <Tab label="Computer Vision" />
          <Tab label="Autonomous Navigation" />
          <Tab label="Predictive Maintenance" />
          <Tab label="Quality Control" />
          <Tab label="Human-Robot Collab" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Industrial Automation & Manufacturing</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced robotic automation systems for manufacturing processes with intelligent scheduling, adaptive control, and real-time optimization.
        </Typography>
        {renderKPICards(industrialAutomationKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Production Alert:</strong> Line 3 robots operating at 102% efficiency. Production target exceeded by 247 units today.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Robotic Process Control</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Adaptive Control" color="primary" size="small" />
                  <Chip label="Real-time Optimization" color="secondary" size="small" />
                  <Chip label="Multi-robot Coordination" color="success" size="small" />
                </Box>
                <Typography variant="body2">Intelligent robotic systems with adaptive control algorithms and multi-robot coordination for optimal manufacturing efficiency.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Production Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Performance Metrics" color="primary" size="small" />
                  <Chip label="Efficiency Analysis" color="warning" size="small" />
                  <Chip label="Predictive Insights" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive production analytics providing real-time insights and predictive recommendations for continuous improvement.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Computer Vision & Image Processing</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced computer vision systems with deep learning models for object detection, classification, and real-time image analysis.
        </Typography>
        {renderKPICards(computerVisionKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Vision Update:</strong> New neural network model deployed. Object detection accuracy improved to 99.8% with 18% faster processing.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Deep Learning Models</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="CNN Architecture" color="primary" size="small" />
                  <Chip label="Transfer Learning" color="secondary" size="small" />
                  <Chip label="Real-time Inference" color="success" size="small" />
                </Box>
                <Typography variant="body2">State-of-the-art deep learning models optimized for real-time computer vision applications in industrial environments.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Image Processing Pipeline</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Edge Computing" color="primary" size="small" />
                  <Chip label="GPU Acceleration" color="warning" size="small" />
                  <Chip label="Multi-camera Fusion" color="info" size="small" />
                </Box>
                <Typography variant="body2">Optimized image processing pipeline with edge computing and GPU acceleration for maximum performance.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Autonomous Navigation & Path Planning</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Intelligent navigation systems with SLAM technology, dynamic path planning, and obstacle avoidance for autonomous mobile robots.
        </Typography>
        {renderKPICards(autonomousNavigationKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Navigation Alert:</strong> Robot R-247 encountered unexpected obstacle. Alternative path calculated. ETA adjusted by 3 minutes.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>SLAM Technology</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="LiDAR Mapping" color="primary" size="small" />
                  <Chip label="Visual SLAM" color="secondary" size="small" />
                  <Chip label="Sensor Fusion" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced SLAM technology combining LiDAR and visual sensors for accurate mapping and localization.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dynamic Path Planning</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="A* Algorithm" color="primary" size="small" />
                  <Chip label="Real-time Adaptation" color="warning" size="small" />
                  <Chip label="Collision Avoidance" color="error" size="small" />
                </Box>
                <Typography variant="body2">Intelligent path planning algorithms with real-time adaptation and advanced collision avoidance capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Predictive Maintenance & Diagnostics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          AI-powered predictive maintenance systems monitoring robot health, predicting failures, and optimizing maintenance schedules.
        </Typography>
        {renderKPICards(predictiveMaintenanceKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Maintenance Alert:</strong> Robot R-184 showing bearing wear patterns. Scheduled maintenance recommended within 72 hours.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Health Monitoring</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Vibration Analysis" color="primary" size="small" />
                  <Chip label="Thermal Monitoring" color="warning" size="small" />
                  <Chip label="Performance Tracking" color="info" size="small" />
                </Box>
                <Typography variant="body2">Continuous health monitoring using multiple sensor modalities for early detection of potential issues.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Failure Prediction</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="ML Algorithms" color="primary" size="small" />
                  <Chip label="Pattern Recognition" color="secondary" size="small" />
                  <Chip label="Anomaly Detection" color="error" size="small" />
                </Box>
                <Typography variant="body2">Advanced machine learning models for accurate failure prediction and proactive maintenance scheduling.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Automated Quality Control</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Precision quality control systems with robotic inspection, defect detection, and automated sorting for manufacturing excellence.
        </Typography>
        {renderKPICards(qualityControlKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Quality Update:</strong> 2,847 units inspected today with 99.7% defect detection rate. 12 defective units automatically sorted.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Robotic Inspection</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Multi-angle Scanning" color="primary" size="small" />
                  <Chip label="Precision Measurement" color="secondary" size="small" />
                  <Chip label="Automated Reporting" color="success" size="small" />
                </Box>
                <Typography variant="body2">High-precision robotic inspection systems with multi-angle scanning and automated quality reporting.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Defect Classification</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="AI Classification" color="primary" size="small" />
                  <Chip label="Severity Assessment" color="warning" size="small" />
                  <Chip label="Automated Sorting" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent defect classification with AI-powered severity assessment and automated sorting capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Human-Robot Collaboration</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Safe and efficient human-robot collaborative systems with advanced safety protocols, intuitive interfaces, and adaptive behavior.
        </Typography>
        {renderKPICards(humanRobotCollabKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Collaboration Update:</strong> 847 collaborative tasks completed today with 99.9% safety score and 42% productivity improvement.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Safety Systems</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Proximity Sensing" color="primary" size="small" />
                  <Chip label="Force Limiting" color="error" size="small" />
                  <Chip label="Emergency Stop" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Advanced safety systems with proximity sensing, force limiting, and instant emergency stop capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Adaptive Interaction</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Gesture Recognition" color="primary" size="small" />
                  <Chip label="Voice Commands" color="secondary" size="small" />
                  <Chip label="Learning Algorithms" color="success" size="small" />
                </Box>
                <Typography variant="body2">Intuitive human-robot interaction with gesture recognition, voice commands, and adaptive learning capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default RoboVision;
