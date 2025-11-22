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
  DirectionsCar,
  Speed,
  Security,
  Assessment,
  Build,
  Navigation,
  LocalGasStation,
  WarningAmber,
  TrendingUp,
  CarRepair
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
      id={`automotive-tabpanel-${index}`}
      aria-labelledby={`automotive-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const AutoVisionAI: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Fleet Management Use Case
  const fleetManagementKPIs = [
    { title: 'Active Vehicles', value: '25,847', change: '+12%', icon: <DirectionsCar />, color: '#1976d2' },
    { title: 'Fleet Utilization', value: '94.2%', change: '+5.1%', icon: <Speed />, color: '#388e3c' },
    { title: 'On-Time Delivery', value: '98.7%', change: '+2.3%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Cost per Mile', value: '$2.14', change: '-8.5%', icon: <LocalGasStation />, color: '#7b1fa2' }
  ];

  // Predictive Maintenance Use Case
  const predictiveMaintenanceKPIs = [
    { title: 'Maintenance Alerts', value: '342', change: '+15%', icon: <Build />, color: '#d32f2f' },
    { title: 'Downtime Reduction', value: '67%', change: '+12%', icon: <TrendingUp />, color: '#388e3c' },
    { title: 'Parts Inventory', value: '89%', change: '+3%', icon: <CarRepair />, color: '#1976d2' },
    { title: 'Maintenance Cost', value: '$1.2M', change: '-22%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Autonomous Driving Use Case
  const autonomousDrivingKPIs = [
    { title: 'Autonomous Miles', value: '2.1M', change: '+45%', icon: <Navigation />, color: '#1976d2' },
    { title: 'Safety Score', value: '99.8%', change: '+0.5%', icon: <Security />, color: '#388e3c' },
    { title: 'AI Accuracy', value: '99.1%', change: '+1.2%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Incident Rate', value: '0.02%', change: '-45%', icon: <WarningAmber />, color: '#d32f2f' }
  ];

  // Supply Chain Optimization Use Case
  const supplyChainKPIs = [
    { title: 'Route Efficiency', value: '96.3%', change: '+8%', icon: <Navigation />, color: '#1976d2' },
    { title: 'Delivery Time', value: '2.1 hrs', change: '-15%', icon: <Speed />, color: '#388e3c' },
    { title: 'Fuel Savings', value: '$2.8M', change: '+18%', icon: <LocalGasStation />, color: '#f57c00' },
    { title: 'Customer Satisfaction', value: '97.4%', change: '+4%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Quality Control Use Case
  const qualityControlKPIs = [
    { title: 'Defect Detection', value: '99.7%', change: '+2%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Production Efficiency', value: '95.8%', change: '+6%', icon: <Speed />, color: '#388e3c' },
    { title: 'Quality Score', value: '98.9%', change: '+1.5%', icon: <Security />, color: '#f57c00' },
    { title: 'Recall Incidents', value: '0.01%', change: '-67%', icon: <WarningAmber />, color: '#d32f2f' }
  ];

  // Driver Safety & Analytics Use Case
  const driverSafetyKPIs = [
    { title: 'Driver Score', value: '94.6%', change: '+7%', icon: <Security />, color: '#1976d2' },
    { title: 'Accident Rate', value: '0.03%', change: '-34%', icon: <WarningAmber />, color: '#d32f2f' },
    { title: 'Training Completed', value: '89%', change: '+12%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Insurance Savings', value: '$450K', change: '+28%', icon: <TrendingUp />, color: '#7b1fa2' }
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
        AutoVision AI
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Comprehensive automotive intelligence platform for fleet management, autonomous driving, and manufacturing optimization
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="automotive use cases">
          <Tab label="Fleet Management" />
          <Tab label="Predictive Maintenance" />
          <Tab label="Autonomous Driving" />
          <Tab label="Supply Chain" />
          <Tab label="Quality Control" />
          <Tab label="Driver Safety" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Fleet Management & Optimization</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced fleet management with real-time vehicle tracking, route optimization, and comprehensive analytics for maximum operational efficiency.
        </Typography>
        {renderKPICards(fleetManagementKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Live Alert:</strong> 23 vehicles require route optimization due to traffic conditions. Estimated savings: $4,200 in fuel costs.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Route Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="AI Route Planning" color="primary" size="small" />
                  <Chip label="Traffic Analysis" color="secondary" size="small" />
                  <Chip label="Fuel Optimization" color="success" size="small" />
                </Box>
                <Typography variant="body2">Real-time route optimization reducing travel time by 18% and fuel consumption by 22%.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Fleet Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Performance Metrics" color="primary" size="small" />
                  <Chip label="Cost Analysis" color="warning" size="small" />
                  <Chip label="Utilization Reports" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive analytics dashboard providing insights into fleet performance and cost optimization opportunities.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Predictive Maintenance</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          AI-powered predictive maintenance system that anticipates vehicle service needs, reducing downtime and extending vehicle lifespan.
        </Typography>
        {renderKPICards(predictiveMaintenanceKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Maintenance Alert:</strong> Vehicle #2847 requires brake inspection within 72 hours. Predicted failure probability: 85%.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>AI Diagnostics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Engine Analysis" color="primary" size="small" />
                  <Chip label="Brake Systems" color="error" size="small" />
                  <Chip label="Transmission" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Advanced AI diagnostics providing early detection of potential mechanical issues before they become critical.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Maintenance Scheduling</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Smart Scheduling" color="success" size="small" />
                  <Chip label="Parts Management" color="info" size="small" />
                  <Chip label="Service Tracking" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Intelligent maintenance scheduling optimizing service intervals and parts inventory management.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Autonomous Driving Technology</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced autonomous driving capabilities with computer vision, sensor fusion, and AI decision-making for safe and efficient transportation.
        </Typography>
        {renderKPICards(autonomousDrivingKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Safety Update:</strong> Autonomous fleet has completed 1M+ miles without incident. New safety milestone achieved.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Computer Vision</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Object Detection" color="primary" size="small" />
                  <Chip label="Lane Recognition" color="success" size="small" />
                  <Chip label="Sign Reading" color="info" size="small" />
                </Box>
                <Typography variant="body2">Advanced computer vision systems for real-time object detection, lane keeping, and traffic sign recognition.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>AI Decision Making</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Path Planning" color="primary" size="small" />
                  <Chip label="Risk Assessment" color="warning" size="small" />
                  <Chip label="Emergency Response" color="error" size="small" />
                </Box>
                <Typography variant="body2">Intelligent decision-making algorithms for safe navigation and emergency situation handling.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Supply Chain Optimization</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Intelligent supply chain management optimizing logistics, delivery routes, and inventory levels for maximum efficiency and customer satisfaction.
        </Typography>
        {renderKPICards(supplyChainKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Optimization Alert:</strong> New route algorithm implemented. Expected delivery time reduction: 12 minutes average per delivery.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Logistics Intelligence</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Route Planning" color="primary" size="small" />
                  <Chip label="Load Optimization" color="success" size="small" />
                  <Chip label="Delivery Tracking" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered logistics optimization for efficient route planning and load distribution.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Inventory Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Demand Forecasting" color="primary" size="small" />
                  <Chip label="Stock Optimization" color="warning" size="small" />
                  <Chip label="Automated Ordering" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Intelligent inventory management with demand forecasting and automated reordering systems.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Manufacturing Quality Control</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced quality control systems using computer vision and AI to ensure manufacturing excellence and reduce defects in automotive production.
        </Typography>
        {renderKPICards(qualityControlKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Quality Alert:</strong> Paint defect detected on production line 3. Automatic halt initiated. Estimated resolution time: 45 minutes.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Visual Inspection</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Defect Detection" color="primary" size="small" />
                  <Chip label="Surface Analysis" color="warning" size="small" />
                  <Chip label="Dimensional Check" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered visual inspection systems detecting defects and ensuring quality standards across production lines.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Process Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Production Efficiency" color="success" size="small" />
                  <Chip label="Waste Reduction" color="error" size="small" />
                  <Chip label="Quality Metrics" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Continuous process improvement through AI analysis of production data and quality metrics.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Driver Safety & Analytics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Comprehensive driver monitoring and safety systems providing real-time feedback, training recommendations, and risk assessment.
        </Typography>
        {renderKPICards(driverSafetyKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Safety Alert:</strong> Driver #1247 showing signs of fatigue. Automatic rest break recommendation sent. ETA adjusted accordingly.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Behavior Monitoring</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Speed Analysis" color="primary" size="small" />
                  <Chip label="Fatigue Detection" color="warning" size="small" />
                  <Chip label="Distraction Alerts" color="error" size="small" />
                </Box>
                <Typography variant="body2">Real-time driver behavior monitoring with instant feedback and safety recommendations.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Training & Improvement</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Personalized Training" color="success" size="small" />
                  <Chip label="Performance Scoring" color="info" size="small" />
                  <Chip label="Safety Certification" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">AI-driven training programs and performance improvement recommendations for enhanced driver safety.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default AutoVisionAI;
