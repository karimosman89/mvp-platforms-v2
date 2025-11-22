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
  LocalHospital,
  MonitorHeart,
  Biotech,
  Assessment,
  Psychology,
  Healing,
  Visibility,
  Security,
  Speed,
  TrendingUp
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
      id={`healthcare-tabpanel-${index}`}
      aria-labelledby={`healthcare-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const MedScanAI: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Medical Imaging & Diagnostics Use Case
  const medicalImagingKPIs = [
    { title: 'Diagnostic Accuracy', value: '98.7%', change: '+4.2%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Scan Processing Time', value: '3.2 min', change: '-45%', icon: <Speed />, color: '#388e3c' },
    { title: 'Early Detection Rate', value: '94.8%', change: '+12%', icon: <Assessment />, color: '#f57c00' },
    { title: 'False Positive Rate', value: '1.1%', change: '-38%', icon: <Security />, color: '#d32f2f' }
  ];

  // Patient Monitoring Use Case
  const patientMonitoringKPIs = [
    { title: 'Real-time Alerts', value: '99.6%', change: '+2.1%', icon: <MonitorHeart />, color: '#1976d2' },
    { title: 'Patient Compliance', value: '89.3%', change: '+15%', icon: <LocalHospital />, color: '#388e3c' },
    { title: 'Emergency Response', value: '4.2 min', change: '-28%', icon: <Healing />, color: '#f57c00' },
    { title: 'Readmission Rate', value: '8.7%', change: '-34%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Drug Discovery Use Case
  const drugDiscoveryKPIs = [
    { title: 'Compound Success Rate', value: '23.4%', change: '+67%', icon: <Biotech />, color: '#1976d2' },
    { title: 'Discovery Timeline', value: '18 months', change: '-42%', icon: <Speed />, color: '#388e3c' },
    { title: 'Research Cost', value: '$42M', change: '-31%', icon: <TrendingUp />, color: '#f57c00' },
    { title: 'Clinical Trial Success', value: '78%', change: '+23%', icon: <Assessment />, color: '#7b1fa2' }
  ];

  // Personalized Medicine Use Case
  const personalizedMedicineKPIs = [
    { title: 'Treatment Efficacy', value: '92.8%', change: '+18%', icon: <Healing />, color: '#1976d2' },
    { title: 'Adverse Reactions', value: '2.1%', change: '-56%', icon: <Security />, color: '#d32f2f' },
    { title: 'Patient Outcomes', value: '94.3%', change: '+14%', icon: <LocalHospital />, color: '#388e3c' },
    { title: 'Cost Effectiveness', value: '87%', change: '+29%', icon: <TrendingUp />, color: '#f57c00' }
  ];

  // Mental Health Analytics Use Case
  const mentalHealthKPIs = [
    { title: 'Depression Detection', value: '91.7%', change: '+22%', icon: <Psychology />, color: '#1976d2' },
    { title: 'Intervention Success', value: '84.2%', change: '+16%', icon: <Healing />, color: '#388e3c' },
    { title: 'Patient Engagement', value: '78.9%', change: '+31%', icon: <MonitorHeart />, color: '#f57c00' },
    { title: 'Crisis Prevention', value: '89.4%', change: '+19%', icon: <Security />, color: '#7b1fa2' }
  ];

  // Epidemic Tracking Use Case
  const epidemicTrackingKPIs = [
    { title: 'Outbreak Prediction', value: '87.3%', change: '+34%', icon: <Assessment />, color: '#1976d2' },
    { title: 'Contact Tracing', value: '96.8%', change: '+8.7%', icon: <Security />, color: '#388e3c' },
    { title: 'Response Time', value: '6.4 hrs', change: '-52%', icon: <Speed />, color: '#f57c00' },
    { title: 'Public Health Impact', value: '92.1%', change: '+25%', icon: <LocalHospital />, color: '#7b1fa2' }
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
        MedScan AI
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Advanced healthcare intelligence platform for medical imaging, patient monitoring, and clinical decision support
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="healthcare use cases">
          <Tab label="Medical Imaging" />
          <Tab label="Patient Monitoring" />
          <Tab label="Drug Discovery" />
          <Tab label="Personalized Medicine" />
          <Tab label="Mental Health" />
          <Tab label="Epidemic Tracking" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Medical Imaging & AI Diagnostics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced AI-powered medical imaging analysis with deep learning models for radiology, pathology, and early disease detection.
        </Typography>
        {renderKPICards(medicalImagingKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Diagnostic Update:</strong> AI detected early-stage lung nodule in CT scan #CT-2847. Radiologist review completed. Patient referred for further evaluation.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Radiology AI</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="CNN Models" color="primary" size="small" />
                  <Chip label="Multi-modal Analysis" color="secondary" size="small" />
                  <Chip label="Real-time Processing" color="success" size="small" />
                </Box>
                <Typography variant="body2">Deep learning models for automated analysis of X-rays, CT scans, MRIs, and ultrasounds with radiologist-level accuracy.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Pathology Analysis</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Digital Pathology" color="primary" size="small" />
                  <Chip label="Cancer Detection" color="error" size="small" />
                  <Chip label="Tissue Classification" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered digital pathology for automated cancer detection and tissue classification with enhanced diagnostic precision.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Real-time Patient Monitoring</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Continuous patient monitoring systems with IoT sensors, predictive analytics, and automated alert systems for proactive healthcare.
        </Typography>
        {renderKPICards(patientMonitoringKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Patient Alert:</strong> Patient #P-1247 showing irregular heart rhythm patterns. Medical team notified. Immediate attention required.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Vital Signs Monitoring</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="IoT Sensors" color="primary" size="small" />
                  <Chip label="Real-time Analytics" color="secondary" size="small" />
                  <Chip label="Predictive Alerts" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Continuous monitoring of vital signs with intelligent alert systems for early detection of patient deterioration.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Remote Patient Care</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Wearable Devices" color="primary" size="small" />
                  <Chip label="Mobile Health" color="info" size="small" />
                  <Chip label="Telemedicine" color="success" size="small" />
                </Box>
                <Typography variant="body2">Remote patient monitoring solutions enabling continuous care outside hospital settings with telemedicine integration.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>AI-Powered Drug Discovery</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Accelerated drug discovery platform using machine learning for compound identification, molecular modeling, and clinical trial optimization.
        </Typography>
        {renderKPICards(drugDiscoveryKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Discovery Update:</strong> AI identified 23 promising compounds for Alzheimer's treatment. Molecular simulations show 89% binding affinity. Moving to Phase I trials.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Molecular Modeling</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Protein Folding" color="primary" size="small" />
                  <Chip label="Drug-Target Interaction" color="secondary" size="small" />
                  <Chip label="QSAR Modeling" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced molecular modeling and simulation for drug-target interaction prediction and compound optimization.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Clinical Trial Optimization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Patient Stratification" color="primary" size="small" />
                  <Chip label="Endpoint Prediction" color="warning" size="small" />
                  <Chip label="Risk Assessment" color="error" size="small" />
                </Box>
                <Typography variant="body2">AI-driven clinical trial design with patient stratification and endpoint prediction for improved success rates.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Personalized Medicine & Genomics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Precision medicine platform leveraging genomic data, biomarkers, and patient history for personalized treatment recommendations.
        </Typography>
        {renderKPICards(personalizedMedicineKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Treatment Update:</strong> Personalized therapy protocol for Patient #P-8472 shows 94% efficacy prediction. Treatment plan optimized based on genetic profile.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Genomic Analysis</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Whole Genome Sequencing" color="primary" size="small" />
                  <Chip label="Variant Analysis" color="secondary" size="small" />
                  <Chip label="Pharmacogenomics" color="success" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive genomic analysis for personalized treatment selection and drug dosing optimization.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Biomarker Discovery</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Multi-omics Integration" color="primary" size="small" />
                  <Chip label="Predictive Modeling" color="warning" size="small" />
                  <Chip label="Treatment Response" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered biomarker discovery for treatment response prediction and personalized therapy selection.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Mental Health Analytics</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Digital mental health platform with AI-powered mood analysis, intervention recommendations, and crisis prevention systems.
        </Typography>
        {renderKPICards(mentalHealthKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Mental Health Alert:</strong> Patient #MH-1847 showing signs of severe depression. Crisis intervention protocol activated. Therapist notified.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Digital Therapeutics</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="CBT Apps" color="primary" size="small" />
                  <Chip label="Mood Tracking" color="secondary" size="small" />
                  <Chip label="Behavioral Analytics" color="success" size="small" />
                </Box>
                <Typography variant="body2">Evidence-based digital therapeutics with cognitive behavioral therapy and mood tracking capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Crisis Prevention</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Risk Prediction" color="error" size="small" />
                  <Chip label="Early Intervention" color="warning" size="small" />
                  <Chip label="Support Networks" color="info" size="small" />
                </Box>
                <Typography variant="body2">AI-powered crisis prediction and prevention with early intervention protocols and support network activation.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Epidemic Tracking & Public Health</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced epidemic surveillance and public health monitoring with predictive modeling, contact tracing, and intervention planning.
        </Typography>
        {renderKPICards(epidemicTrackingKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Public Health Alert:</strong> Potential outbreak detected in Region 7. Contact tracing initiated for 142 individuals. Health authorities notified.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Disease Surveillance</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Real-time Monitoring" color="primary" size="small" />
                  <Chip label="Pattern Detection" color="secondary" size="small" />
                  <Chip label="Outbreak Prediction" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Real-time disease surveillance with pattern detection and early outbreak prediction capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Contact Tracing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Digital Tracing" color="primary" size="small" />
                  <Chip label="Privacy Protection" color="success" size="small" />
                  <Chip label="Risk Assessment" color="error" size="small" />
                </Box>
                <Typography variant="body2">Privacy-preserving digital contact tracing with risk assessment and automated notification systems.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default MedScanAI;
