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
  ImportExport,
  Schedule,
  Gavel,
  Assessment,
  LocalShipping,
  TrendingUp,
  Warning,
  Security,
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
      id={`trade-tabpanel-${index}`}
      aria-labelledby={`trade-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const TradeFlowPro: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Customs Automation Use Case
  const customsAutomationKPIs = [
    { title: 'Clearance Time', value: '4.2 hrs', change: '-34%', icon: <Schedule />, color: '#1976d2' },
    { title: 'Compliance Rate', value: '99.8%', change: '+1.2%', icon: <Gavel />, color: '#388e3c' },
    { title: 'Document Accuracy', value: '98.9%', change: '+5.1%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Processing Cost', value: '$127', change: '-28%', icon: <AccountBalance />, color: '#7b1fa2' }
  ];

  // Trade Finance Use Case
  const tradeFinanceKPIs = [
    { title: 'LC Processing Time', value: '2.1 days', change: '-45%', icon: <Schedule />, color: '#1976d2' },
    { title: 'Credit Risk Score', value: '94.7%', change: '+3.8%', icon: <Security />, color: '#388e3c' },
    { title: 'Document Verification', value: '99.2%', change: '+2.1%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Cost Reduction', value: '$2.3M', change: '+67%', icon: <TrendingUp />, color: '#7b1fa2' }
  ];

  // Supply Chain Tracking Use Case
  const supplyChainTrackingKPIs = [
    { title: 'Shipment Visibility', value: '99.9%', change: '+0.8%', icon: <LocalShipping />, color: '#1976d2' },
    { title: 'On-Time Delivery', value: '96.4%', change: '+8.2%', icon: <Schedule />, color: '#388e3c' },
    { title: 'Transit Time', value: '12.3 days', change: '-18%', icon: <ImportExport />, color: '#f57c00' },
    { title: 'Tracking Accuracy', value: '98.7%', change: '+4.5%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Risk Management Use Case
  const riskManagementKPIs = [
    { title: 'Risk Score', value: '0.34%', change: '-52%', icon: <Warning />, color: '#d32f2f' },
    { title: 'Fraud Detection', value: '99.6%', change: '+12%', icon: <Security />, color: '#388e3c' },
    { title: 'Compliance Alerts', value: '23', change: '-31%', icon: <Gavel />, color: '#f57c00' },
    { title: 'Insurance Claims', value: '0.12%', change: '-78%', icon: <AccountBalance />, color: '#1976d2' }
  ];

  // Port Operations Use Case
  const portOperationsKPIs = [
    { title: 'Berth Utilization', value: '87.3%', change: '+11%', icon: <Business />, color: '#1976d2' },
    { title: 'Container Dwell Time', value: '3.8 days', change: '-22%', icon: <Schedule />, color: '#388e3c' },
    { title: 'Throughput', value: '2,847 TEU/day', change: '+15%', icon: <TrendingUp />, color: '#f57c00' },
    { title: 'Operational Cost', value: '$142/TEU', change: '-19%', icon: <AccountBalance />, color: '#7b1fa2' }
  ];

  // Market Intelligence Use Case
  const marketIntelligenceKPIs = [
    { title: 'Price Forecast Accuracy', value: '93.8%', change: '+7.2%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Market Share Growth', value: '12.4%', change: '+34%', icon: <TrendingUp />, color: '#388e3c' },
    { title: 'Opportunity Score', value: '89.2%', change: '+18%', icon: <Business />, color: '#f57c00' },
    { title: 'Revenue Impact', value: '$5.7M', change: '+42%', icon: <AccountBalance />, color: '#7b1fa2' }
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
        TradeFlow Pro
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Comprehensive trade intelligence platform for customs automation, supply chain tracking, and international commerce optimization
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="trade use cases">
          <Tab label="Customs Automation" />
          <Tab label="Trade Finance" />
          <Tab label="Supply Chain Tracking" />
          <Tab label="Risk Management" />
          <Tab label="Port Operations" />
          <Tab label="Market Intelligence" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Customs Automation & Compliance</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          AI-powered customs documentation processing with automated compliance checking and intelligent classification systems.
        </Typography>
        {renderKPICards(customsAutomationKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Customs Update:</strong> 847 shipments processed today with 99.8% compliance rate. Average clearance time: 4.2 hours.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Document Processing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="OCR Recognition" color="primary" size="small" />
                  <Chip label="Data Validation" color="secondary" size="small" />
                  <Chip label="Auto Classification" color="success" size="small" />
                </Box>
                <Typography variant="body2">Automated document processing with intelligent data extraction and validation for faster customs clearance.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Compliance Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Regulatory Updates" color="primary" size="small" />
                  <Chip label="Risk Assessment" color="warning" size="small" />
                  <Chip label="Audit Trails" color="info" size="small" />
                </Box>
                <Typography variant="body2">Real-time compliance monitoring with automated risk assessment and comprehensive audit trails.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Trade Finance Optimization</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Digital trade finance solutions with automated letter of credit processing, credit risk assessment, and blockchain verification.
        </Typography>
        {renderKPICards(tradeFinanceKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Finance Alert:</strong> 12 new LC applications received. AI pre-screening completed with 94.7% approval recommendation rate.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Letter of Credit Processing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Digital Processing" color="primary" size="small" />
                  <Chip label="Smart Contracts" color="secondary" size="small" />
                  <Chip label="Automated Matching" color="success" size="small" />
                </Box>
                <Typography variant="body2">Streamlined LC processing with blockchain verification and intelligent document matching.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Credit Risk Assessment</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="AI Scoring" color="primary" size="small" />
                  <Chip label="Market Analysis" color="warning" size="small" />
                  <Chip label="Real-time Monitoring" color="info" size="small" />
                </Box>
                <Typography variant="body2">Advanced AI-powered credit risk assessment with real-time market analysis and dynamic scoring.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Global Supply Chain Tracking</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          End-to-end supply chain visibility with real-time tracking, predictive analytics, and automated notifications across global trade routes.
        </Typography>
        {renderKPICards(supplyChainTrackingKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Tracking Alert:</strong> Shipment #TF-2847 experiencing 2-day delay at Port of Rotterdam due to congestion. Alternative routing suggested.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Real-time Visibility</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="GPS Tracking" color="primary" size="small" />
                  <Chip label="IoT Sensors" color="secondary" size="small" />
                  <Chip label="Multi-modal Tracking" color="success" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive tracking across air, sea, and land transportation with real-time status updates.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Predictive Analytics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="ETA Prediction" color="primary" size="small" />
                  <Chip label="Delay Analysis" color="warning" size="small" />
                  <Chip label="Route Optimization" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered predictive analytics for accurate delivery estimates and proactive delay management.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Trade Risk Management</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced risk assessment and mitigation with fraud detection, compliance monitoring, and automated alert systems.
        </Typography>
        {renderKPICards(riskManagementKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Risk Alert:</strong> High-risk transaction detected from Vendor #V847. Enhanced screening protocols activated automatically.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Fraud Detection</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Pattern Recognition" color="primary" size="small" />
                  <Chip label="Anomaly Detection" color="error" size="small" />
                  <Chip label="Machine Learning" color="secondary" size="small" />
                </Box>
                <Typography variant="body2">Advanced fraud detection using ML algorithms to identify suspicious patterns and transactions.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Compliance Monitoring</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Sanctions Screening" color="warning" size="small" />
                  <Chip label="KYC Verification" color="info" size="small" />
                  <Chip label="AML Compliance" color="success" size="small" />
                </Box>
                <Typography variant="body2">Automated compliance monitoring with real-time sanctions screening and KYC verification.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Smart Port Operations</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Intelligent port management with automated scheduling, container tracking, and operational optimization for maximum efficiency.
        </Typography>
        {renderKPICards(portOperationsKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Port Update:</strong> Berth 7 available ahead of schedule. Container ship MV Pacific can dock 4 hours early.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Automated Scheduling</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Berth Allocation" color="primary" size="small" />
                  <Chip label="Resource Planning" color="secondary" size="small" />
                  <Chip label="Equipment Optimization" color="success" size="small" />
                </Box>
                <Typography variant="body2">AI-driven scheduling system optimizing berth allocation and resource utilization for maximum throughput.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Container Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="RFID Tracking" color="primary" size="small" />
                  <Chip label="Yard Optimization" color="warning" size="small" />
                  <Chip label="Dwell Time Reduction" color="info" size="small" />
                </Box>
                <Typography variant="body2">Smart container tracking and yard management reducing dwell time and improving operational efficiency.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Market Intelligence & Analytics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced market analysis with price forecasting, trend identification, and competitive intelligence for strategic decision-making.
        </Typography>
        {renderKPICards(marketIntelligenceKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Market Insight:</strong> Cotton prices expected to rise 8% next quarter. Recommend securing contracts for Q3 shipments.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Price Forecasting</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="ML Algorithms" color="primary" size="small" />
                  <Chip label="Market Data Analysis" color="secondary" size="small" />
                  <Chip label="Trend Prediction" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced machine learning models analyzing global market data for accurate price forecasting.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Competitive Intelligence</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Market Share Analysis" color="primary" size="small" />
                  <Chip label="Competitor Tracking" color="warning" size="small" />
                  <Chip label="Opportunity Identification" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive competitive analysis identifying market opportunities and strategic advantages.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default TradeFlowPro;
