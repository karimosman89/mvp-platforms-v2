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
  Shield,
  Security,
  Gavel,
  Assessment,
  LocationOn,
  VerifiedUser,
  Lock,
  TrendingUp,
  Business,
  Visibility
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
      id={`sovereign-tabpanel-${index}`}
      aria-labelledby={`sovereign-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const SovereignShieldAI: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Data Sovereignty Use Case
  const dataSovereigntyKPIs = [
    { title: 'Local Processing', value: '100%', change: '+100%', icon: <LocationOn />, color: '#1976d2' },
    { title: 'Sovereignty Score', value: '99.8%', change: '+15%', icon: <Shield />, color: '#388e3c' },
    { title: 'Cross-border Protection', value: '97.3%', change: '+34%', icon: <Security />, color: '#f57c00' },
    { title: 'Compliance Rate', value: '99.9%', change: '+2.1%', icon: <Gavel />, color: '#7b1fa2' }
  ];

  // Privacy-Preserving AI Use Case
  const privacyPreservingKPIs = [
    { title: 'Differential Privacy', value: '99.7%', change: '+8.4%', icon: <VerifiedUser />, color: '#1976d2' },
    { title: 'Federated Learning', value: '96.2%', change: '+23%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Homomorphic Encryption', value: '94.8%', change: '+67%', icon: <Lock />, color: '#f57c00' },
    { title: 'Privacy Budget', value: '89.1%', change: '+12%', icon: <TrendingUp />, color: '#7b1fa2' }
  ];

  // Regulatory Compliance Use Case
  const regulatoryComplianceKPIs = [
    { title: 'GDPR Compliance', value: '99.9%', change: '+1.8%', icon: <Gavel />, color: '#1976d2' },
    { title: 'CCPA Compliance', value: '99.7%', change: '+2.3%', icon: <Security />, color: '#388e3c' },
    { title: 'Audit Readiness', value: '98.4%', change: '+12%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Policy Adherence', value: '97.8%', change: '+8.9%', icon: <Business />, color: '#7b1fa2' }
  ];

  // Secure Computation Use Case
  const secureComputationKPIs = [
    { title: 'Secure Multi-party', value: '96.7%', change: '+18%', icon: <Lock />, color: '#1976d2' },
    { title: 'Zero-Knowledge Proofs', value: '94.3%', change: '+45%', icon: <VerifiedUser />, color: '#388e3c' },
    { title: 'Computation Speed', value: '847 ops/sec', change: '+89%', icon: <TrendingUp />, color: '#f57c00' },
    { title: 'Security Level', value: '256-bit', change: '+100%', icon: <Security />, color: '#7b1fa2' }
  ];

  // Transparency & Explainability Use Case
  const transparencyKPIs = [
    { title: 'Model Explainability', value: '93.8%', change: '+28%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Decision Transparency', value: '91.2%', change: '+34%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Audit Trail Coverage', value: '99.6%', change: '+5.7%', icon: <Gavel />, color: '#f57c00' },
    { title: 'Stakeholder Trust', value: '89.4%', change: '+42%', icon: <Business />, color: '#7b1fa2' }
  ];

  // Cross-Border Data Management Use Case
  const crossBorderKPIs = [
    { title: 'Data Localization', value: '100%', change: '+100%', icon: <LocationOn />, color: '#1976d2' },
    { title: 'Transfer Compliance', value: '98.7%', change: '+12%', icon: <Gavel />, color: '#388e3c' },
    { title: 'Jurisdiction Mapping', value: '95.3%', change: '+67%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Risk Mitigation', value: '97.1%', change: '+23%', icon: <Security />, color: '#7b1fa2' }
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
        SovereignShield AI
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Privacy-first AI platform ensuring data sovereignty, regulatory compliance, and secure computation with full transparency and auditability
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="sovereign AI use cases">
          <Tab label="Data Sovereignty" />
          <Tab label="Privacy-Preserving AI" />
          <Tab label="Regulatory Compliance" />
          <Tab label="Secure Computation" />
          <Tab label="Transparency" />
          <Tab label="Cross-Border Data" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Data Sovereignty & Local Processing</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Complete data sovereignty ensuring all AI processing happens within specified jurisdictions with full control over data location and access.
        </Typography>
        {renderKPICards(dataSovereigntyKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Sovereignty Update:</strong> 100% local processing maintained across 247 jurisdictions. Zero cross-border data transfers detected.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Jurisdiction Control</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Geographic Boundaries" color="primary" size="small" />
                  <Chip label="Data Residency" color="secondary" size="small" />
                  <Chip label="Access Controls" color="success" size="small" />
                </Box>
                <Typography variant="body2">Strict geographic boundary enforcement ensuring data never leaves designated jurisdictions without explicit authorization.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Local Infrastructure</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="On-Premise Deployment" color="primary" size="small" />
                  <Chip label="Edge Computing" color="warning" size="small" />
                  <Chip label="Air-Gapped Systems" color="error" size="small" />
                </Box>
                <Typography variant="body2">Complete local infrastructure deployment with air-gapped systems and edge computing capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Privacy-Preserving AI Techniques</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced privacy-preserving AI methods including differential privacy, federated learning, and homomorphic encryption for secure AI training.
        </Typography>
        {renderKPICards(privacyPreservingKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Privacy Alert:</strong> Federated learning completed across 847 nodes with 96.2% accuracy. Privacy budget consumption: 89.1%.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Differential Privacy</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Noise Injection" color="primary" size="small" />
                  <Chip label="Privacy Budget" color="secondary" size="small" />
                  <Chip label="Epsilon Control" color="warning" size="small" />
                </Box>
                <Typography variant="body2">Mathematical privacy guarantees through controlled noise injection and privacy budget management.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Homomorphic Encryption</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Encrypted Computation" color="primary" size="small" />
                  <Chip label="Zero Exposure" color="success" size="small" />
                  <Chip label="Secure Aggregation" color="info" size="small" />
                </Box>
                <Typography variant="body2">Computation on encrypted data without ever decrypting, ensuring complete data confidentiality.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Regulatory Compliance Management</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Comprehensive regulatory compliance framework supporting GDPR, CCPA, and other global privacy regulations with automated monitoring.
        </Typography>
        {renderKPICards(regulatoryComplianceKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Compliance Alert:</strong> GDPR audit scheduled for next week. All systems show 99.9% compliance with automated evidence collection ready.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Automated Compliance</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="GDPR Automation" color="primary" size="small" />
                  <Chip label="Right to Erasure" color="secondary" size="small" />
                  <Chip label="Consent Management" color="success" size="small" />
                </Box>
                <Typography variant="body2">Automated compliance monitoring with real-time policy enforcement and consent management.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Audit Trail Management</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Immutable Logs" color="primary" size="small" />
                  <Chip label="Chain of Custody" color="warning" size="small" />
                  <Chip label="Evidence Collection" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive audit trail management with immutable logging and automated evidence collection.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Secure Multi-Party Computation</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced secure computation protocols enabling collaborative AI training without revealing sensitive data to any party.
        </Typography>
        {renderKPICards(secureComputationKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Secure Computation:</strong> Multi-party computation completed with 96.7% efficiency. Zero-knowledge proofs verified across all participants.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Multi-Party Protocols</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Secret Sharing" color="primary" size="small" />
                  <Chip label="Garbled Circuits" color="secondary" size="small" />
                  <Chip label="Oblivious Transfer" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced cryptographic protocols enabling secure computation across multiple parties without data exposure.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Zero-Knowledge Systems</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="zk-SNARKs" color="primary" size="small" />
                  <Chip label="Proof Verification" color="warning" size="small" />
                  <Chip label="Privacy Preservation" color="success" size="small" />
                </Box>
                <Typography variant="body2">Zero-knowledge proof systems enabling verification of computation correctness without revealing inputs.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>AI Transparency & Explainability</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Complete AI transparency with explainable models, decision tracking, and stakeholder-friendly explanations for all AI operations.
        </Typography>
        {renderKPICards(transparencyKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Transparency Update:</strong> Model explanations generated for 2,847 decisions today. Stakeholder trust score: 89.4%.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Explainable AI</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="LIME/SHAP" color="primary" size="small" />
                  <Chip label="Feature Attribution" color="secondary" size="small" />
                  <Chip label="Counterfactual Analysis" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced explainability methods providing clear insights into AI decision-making processes.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Decision Documentation</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Decision Trees" color="primary" size="small" />
                  <Chip label="Reasoning Chains" color="warning" size="small" />
                  <Chip label="Stakeholder Reports" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive decision documentation with automated stakeholder reporting and reasoning chain tracking.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Cross-Border Data Management</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Sophisticated cross-border data management ensuring compliance with international data transfer regulations and sovereignty requirements.
        </Typography>
        {renderKPICards(crossBorderKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Border Control Alert:</strong> Data transfer request from Region 7 blocked. Jurisdiction compliance check failed. Alternative processing route activated.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Transfer Adequacy</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Adequacy Decisions" color="primary" size="small" />
                  <Chip label="Standard Contractual Clauses" color="secondary" size="small" />
                  <Chip label="Binding Corporate Rules" color="success" size="small" />
                </Box>
                <Typography variant="body2">Automated assessment of data transfer adequacy with support for multiple legal frameworks.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Jurisdiction Mapping</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Legal Framework Analysis" color="primary" size="small" />
                  <Chip label="Risk Assessment" color="warning" size="small" />
                  <Chip label="Compliance Routing" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent jurisdiction mapping with automated compliance routing and risk assessment for data transfers.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default SovereignShieldAI;
