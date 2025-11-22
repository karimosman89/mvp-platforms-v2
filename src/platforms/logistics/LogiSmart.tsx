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
  LocalShipping,
  Schedule,
  Inventory,
  Assessment,
  LocationOn,
  TrendingUp,
  Warning,
  Speed,
  Business,
  AccountBalance
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
      id={`logistics-tabpanel-${index}`}
      aria-labelledby={`logistics-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const LogiSmart: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Warehouse Management Use Case
  const warehouseManagementKPIs = [
    { title: 'Inventory Accuracy', value: '99.7%', change: '+2.3%', icon: <Inventory />, color: '#1976d2' },
    { title: 'Order Fulfillment', value: '97.8%', change: '+5.2%', icon: <LocalShipping />, color: '#388e3c' },
    { title: 'Pick Efficiency', value: '94.5%', change: '+8.1%', icon: <Speed />, color: '#f57c00' },
    { title: 'Storage Utilization', value: '89.2%', change: '+3.7%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Route Optimization Use Case
  const routeOptimizationKPIs = [
    { title: 'Route Efficiency', value: '96.8%', change: '+12%', icon: <LocationOn />, color: '#1976d2' },
    { title: 'Delivery Time', value: '2.3 hrs', change: '-18%', icon: <Schedule />, color: '#388e3c' },
    { title: 'Fuel Savings', value: '$3.2M', change: '+24%', icon: <TrendingUp />, color: '#f57c00' },
    { title: 'On-Time Delivery', value: '98.4%', change: '+6.8%', icon: <LocalShipping />, color: '#7b1fa2' }
  ];

  // Demand Forecasting Use Case
  const demandForecastingKPIs = [
    { title: 'Forecast Accuracy', value: '94.7%', change: '+9.2%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Inventory Turnover', value: '12.4x', change: '+15%', icon: <TrendingUp />, color: '#388e3c' },
    { title: 'Stockout Reduction', value: '78%', change: '+22%', icon: <Inventory />, color: '#f57c00' },
    { title: 'Cost Savings', value: '$1.8M', change: '+19%', icon: <AccountBalance />, color: '#7b1fa2' }
  ];

  // Supply Chain Visibility Use Case
  const supplyChainVisibilityKPIs = [
    { title: 'Shipment Tracking', value: '99.9%', change: '+1.2%', icon: <LocationOn />, color: '#1976d2' },
    { title: 'Supply Chain Risk', value: '0.08%', change: '-45%', icon: <Warning />, color: '#d32f2f' },
    { title: 'Vendor Performance', value: '96.1%', change: '+7.3%', icon: <Business />, color: '#388e3c' },
    { title: 'Lead Time Accuracy', value: '95.6%', change: '+4.1%', icon: <Schedule />, color: '#f57c00' }
  ];

  // Last-Mile Delivery Use Case
  const lastMileDeliveryKPIs = [
    { title: 'Delivery Success', value: '98.9%', change: '+3.4%', icon: <LocalShipping />, color: '#1976d2' },
    { title: 'Customer Satisfaction', value: '97.2%', change: '+5.8%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Delivery Cost', value: '$4.12', change: '-12%', icon: <AccountBalance />, color: '#f57c00' },
    { title: 'Route Density', value: '15.7/hr', change: '+18%', icon: <Speed />, color: '#7b1fa2' }
  ];

  // Cross-Docking Optimization Use Case
  const crossDockingKPIs = [
    { title: 'Dock Utilization', value: '91.3%', change: '+8.4%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Turnaround Time', value: '2.8 hrs', change: '-25%', icon: <Schedule />, color: '#388e3c' },
    { title: 'Throughput', value: '1,247 units/hr', change: '+31%', icon: <Speed />, color: '#f57c00' },
    { title: 'Error Rate', value: '0.12%', change: '-67%', icon: <Warning />, color: '#d32f2f' }
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
        LogiSmart
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Advanced logistics intelligence platform for warehouse management, route optimization, and supply chain visibility
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="logistics use cases">
          <Tab label="Warehouse Management" />
          <Tab label="Route Optimization" />
          <Tab label="Demand Forecasting" />
          <Tab label="Supply Chain Visibility" />
          <Tab label="Last-Mile Delivery" />
          <Tab label="Cross-Docking" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Warehouse Management System</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          AI-powered warehouse operations with automated inventory tracking, intelligent picking routes, and real-time optimization.
        </Typography>
        {renderKPICards(warehouseManagementKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Warehouse Alert:</strong> Zone A requires restocking of SKU #14782. Automated transfer initiated from overflow storage.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Automated Inventory Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="RFID Tracking" color="primary" size="small" />
                  <Chip label="Real-time Updates" color="secondary" size="small" />
                  <Chip label="Cycle Counting" color="success" size="small" />
                </Box>
                <Typography variant="body2">AI-driven inventory management with automated tracking and predictive restocking algorithms.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Intelligent Picking</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Route Optimization" color="primary" size="small" />
                  <Chip label="Pick Sequencing" color="warning" size="small" />
                  <Chip label="Voice Picking" color="info" size="small" />
                </Box>
                <Typography variant="body2">Optimized picking routes and intelligent sequencing reducing travel time and improving accuracy.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Route Optimization & Planning</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced routing algorithms considering traffic, weather, and delivery constraints for optimal route planning and fuel efficiency.
        </Typography>
        {renderKPICards(routeOptimizationKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Route Update:</strong> Dynamic rerouting saved 47 minutes across 12 delivery routes due to traffic optimization.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dynamic Route Planning</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Real-time Traffic" color="primary" size="small" />
                  <Chip label="Weather Integration" color="warning" size="small" />
                  <Chip label="Vehicle Capacity" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered dynamic routing considering multiple variables for optimal delivery efficiency.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Fleet Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Load Balancing" color="success" size="small" />
                  <Chip label="Fuel Efficiency" color="primary" size="small" />
                  <Chip label="Driver Scheduling" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive fleet optimization balancing load distribution and driver schedules.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>AI-Powered Demand Forecasting</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Machine learning models analyzing historical data, market trends, and external factors for accurate demand prediction.
        </Typography>
        {renderKPICards(demandForecastingKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Demand Alert:</strong> 23% increase in demand predicted for Category B products next week. Recommended inventory adjustment: +450 units.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Predictive Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Time Series Analysis" color="primary" size="small" />
                  <Chip label="Seasonal Patterns" color="secondary" size="small" />
                  <Chip label="Market Trends" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced analytics identifying demand patterns and seasonal variations for accurate forecasting.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Inventory Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Safety Stock Calc" color="warning" size="small" />
                  <Chip label="Reorder Points" color="info" size="small" />
                  <Chip label="Economic Order Qty" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">AI-driven inventory optimization reducing carrying costs while maintaining service levels.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Supply Chain Visibility & Control</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          End-to-end supply chain visibility with real-time tracking, risk monitoring, and performance analytics across all partners.
        </Typography>
        {renderKPICards(supplyChainVisibilityKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Risk Alert:</strong> Supplier ABC experiencing delays due to weather conditions. Alternative supplier routing activated automatically.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Real-time Tracking</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="GPS Monitoring" color="primary" size="small" />
                  <Chip label="IoT Sensors" color="secondary" size="small" />
                  <Chip label="Status Updates" color="success" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive tracking system providing real-time visibility across the entire supply chain.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Risk Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Risk Assessment" color="error" size="small" />
                  <Chip label="Mitigation Plans" color="warning" size="small" />
                  <Chip label="Alternative Routes" color="info" size="small" />
                </Box>
                <Typography variant="body2">Proactive risk identification and automated mitigation strategies for supply chain resilience.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Last-Mile Delivery Optimization</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Specialized last-mile delivery solutions with customer preference optimization, delivery window management, and real-time tracking.
        </Typography>
        {renderKPICards(lastMileDeliveryKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Delivery Update:</strong> Customer notification system reports 97% customer satisfaction with delivery time accuracy.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Customer-Centric Delivery</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Time Windows" color="primary" size="small" />
                  <Chip label="Delivery Preferences" color="secondary" size="small" />
                  <Chip label="Real-time Updates" color="success" size="small" />
                </Box>
                <Typography variant="body2">Personalized delivery experience with flexible time windows and real-time customer communication.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Delivery Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Performance Metrics" color="warning" size="small" />
                  <Chip label="Cost Analysis" color="info" size="small" />
                  <Chip label="Route Density" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive analytics driving continuous improvement in last-mile delivery operations.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Cross-Docking Operations</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Optimized cross-docking operations with intelligent dock scheduling, load matching, and real-time coordination systems.
        </Typography>
        {renderKPICards(crossDockingKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Efficiency Update:</strong> Cross-dock operations achieving 91% dock utilization with 2.8-hour average turnaround time.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dock Scheduling</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Appointment Booking" color="primary" size="small" />
                  <Chip label="Load Matching" color="secondary" size="small" />
                  <Chip label="Resource Allocation" color="success" size="small" />
                </Box>
                <Typography variant="body2">Intelligent dock scheduling system optimizing facility utilization and minimizing wait times.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Flow Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Material Flow" color="warning" size="small" />
                  <Chip label="Queue Management" color="info" size="small" />
                  <Chip label="Automated Sorting" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Streamlined material flow with automated sorting and queue management for maximum throughput.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default LogiSmart;
