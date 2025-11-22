import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  Chip,
  IconButton,
} from '@mui/material'
import {
  PlayArrow,
  TrendingUp,
  Security,
  Speed,
  Visibility,
  SmartToy,
  LocalShipping,
  HealthAndSafety,
  Power,
  DirectionsCar,
  AccountBalance,
  Flight,
  Precision,
  Build,
  Psychology,
  Memory,
  Shield,
  AutoFixHigh,
  CloudDone,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface Platform {
  id: string
  title: string
  subtitle: string
  description: string
  industry: string
  icon: React.ReactNode
  route: string
  color: string
  features: string[]
}

const platforms: Platform[] = [
  {
    id: 'predictive-oil',
    title: 'PredictiveOil Pro',
    subtitle: 'Predictive Maintenance Dashboard',
    description: 'AI-powered equipment monitoring and failure prediction for oil & gas operations',
    industry: 'Oil & Gas',
    icon: <Build />,
    route: '/predictive-oil-pro',
    color: '#f59e0b',
    features: ['Real-time Monitoring', 'Failure Prediction', 'Cost Optimization']
  },
  {
    id: 'grid-smart',
    title: 'GridSmart Pro',
    subtitle: 'Smart Grid Management',
    description: 'Advanced grid optimization and energy distribution management system',
    industry: 'Electricity',
    icon: <Power />,
    route: '/grid-smart-pro',
    color: '#3b82f6',
    features: ['Load Balancing', 'Outage Prevention', 'Energy Optimization']
  },
  {
    id: 'auto-vision',
    title: 'AutoVision AI',
    subtitle: 'Quality Control Dashboard',
    description: 'Computer vision-powered quality assurance for automotive manufacturing',
    industry: 'Automotive',
    icon: <DirectionsCar />,
    route: '/auto-vision-ai',
    color: '#dc2626',
    features: ['Defect Detection', 'Quality Analytics', 'Process Optimization']
  },
  {
    id: 'risk-guard',
    title: 'RiskGuard Pro',
    subtitle: 'AI Risk Assessment',
    description: 'Comprehensive risk analysis and fraud detection for financial institutions',
    industry: 'Finance',
    icon: <Security />,
    route: '/risk-guard-pro',
    color: '#059669',
    features: ['Fraud Detection', 'Risk Scoring', 'Compliance Monitoring']
  },
  {
    id: 'logi-smart',
    title: 'LogiSmart',
    subtitle: 'Route Optimization',
    description: 'AI-driven logistics and supply chain optimization platform',
    industry: 'Logistics',
    icon: <LocalShipping />,
    route: '/logi-smart',
    color: '#7c3aed',
    features: ['Route Planning', 'Fleet Management', 'Cost Reduction']
  },
  {
    id: 'trade-flow',
    title: 'TradeFlow Pro',
    subtitle: 'Supply Chain Optimization',
    description: 'Global trade and import/export management with AI insights',
    industry: 'Import/Export',
    icon: <Flight />,
    route: '/trade-flow-pro',
    color: '#0891b2',
    features: ['Trade Analytics', 'Customs Automation', 'Supply Optimization']
  },
  {
    id: 'robo-vision',
    title: 'RoboVision',
    subtitle: 'Computer Vision Platform',
    description: 'Advanced robotics control and computer vision processing system',
    industry: 'Robotics',
    icon: <SmartToy />,
    route: '/robo-vision',
    color: '#ea580c',
    features: ['Object Recognition', 'Motion Planning', 'Autonomous Control']
  },
  {
    id: 'med-scan',
    title: 'MedScan AI',
    subtitle: 'Medical Imaging Analysis',
    description: 'AI-powered medical image analysis and diagnostic assistance',
    industry: 'Healthcare',
    icon: <HealthAndSafety />,
    route: '/med-scan-ai',
    color: '#be185d',
    features: ['Image Analysis', 'Diagnostic Support', 'Patient Insights']
  },
  {
    id: 'agentic-pro',
    title: 'AgenticFlow Pro',
    subtitle: 'Autonomous AI Agents',
    description: 'Next-gen autonomous AI agents that work independently across your enterprise',
    industry: 'Enterprise AI',
    icon: <Psychology />,
    route: '/agentic-flow-pro',
    color: '#6366f1',
    features: ['Autonomous Decision Making', 'Multi-Agent Collaboration', 'Workflow Automation']
  },
  {
    id: 'multimodal-ai',
    title: 'MultiModal Nexus',
    subtitle: 'Vision + Language AI',
    description: 'Advanced multimodal AI processing text, images, video, and audio in real-time',
    industry: 'Multimodal AI',
    icon: <Visibility />,
    route: '/multimodal-nexus',
    color: '#8b5cf6',
    features: ['Cross-Modal Understanding', 'Real-time Processing', 'Content Generation']
  },
  {
    id: 'edge-intelligence',
    title: 'EdgeIntel Pro',
    subtitle: 'Real-time Edge AI',
    description: 'Ultra-fast AI inference at the edge for industrial IoT and autonomous systems',
    industry: 'Edge Computing',
    icon: <Memory />,
    route: '/edge-intel-pro',
    color: '#10b981',
    features: ['Sub-millisecond Latency', 'Offline Operation', 'Edge Optimization']
  },
  {
    id: 'quantum-ai',
    title: 'QuantumMind AI',
    subtitle: 'Quantum-Enhanced ML',
    description: 'Revolutionary quantum-classical hybrid AI for complex optimization problems',
    industry: 'Quantum Computing',
    icon: <AutoFixHigh />,
    route: '/quantum-mind-ai',
    color: '#f59e0b',
    features: ['Quantum Speedup', 'Complex Optimization', 'Scientific Computing']
  },
  {
    id: 'sovereign-ai',
    title: 'SovereignShield AI',
    subtitle: 'Privacy-First AI',
    description: 'Compliant AI platform ensuring data sovereignty and regulatory compliance',
    industry: 'Data Privacy',
    icon: <Shield />,
    route: '/sovereign-shield-ai',
    color: '#dc2626',
    features: ['Data Sovereignty', 'Regulatory Compliance', 'Local Processing']
  },
  {
    id: 'ai-model-hub',
    title: 'AI Model Hub 2025',
    subtitle: 'Latest AI Models',
    description: 'Comprehensive showcase of the most advanced AI models from HuggingFace and AVIX Suite',
    industry: 'AI Research',
    icon: <CloudDone />,
    route: '/ai-model-hub',
    color: '#6366f1',
    features: ['Latest Models', 'Performance Tracking', 'Multi-Platform Coverage']
  },
]

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <AppBar position="static" sx={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white', fontWeight: 600 }}>
            AI MVP Platforms Portfolio
          </Typography>
          <Button color="inherit" sx={{ color: 'white' }}>
            Contact Sales
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 2,
                background: 'linear-gradient(45deg, #fff 30%, #f0f9ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3.5rem' }
              }}
            >
              Professional AI Solutions
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Cutting-edge AI platforms designed to transform industries and drive business growth
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Chip label="Enterprise Ready" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="Demo Available" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="Scalable" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="AI-Powered" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            </Box>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {platforms.map((platform, index) => (
            <Grid item xs={12} sm={6} lg={3} key={platform.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: platform.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    {platform.icon}
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                    <Chip 
                      label={platform.industry} 
                      size="small" 
                      sx={{ 
                        mb: 2, 
                        bgcolor: `${platform.color}20`,
                        color: platform.color,
                        fontWeight: 500
                      }} 
                    />
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                      {platform.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 500 }}>
                      {platform.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {platform.description}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      {platform.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1, fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PlayArrow />}
                      onClick={() => navigate(platform.route)}
                      sx={{
                        bgcolor: platform.color,
                        '&:hover': {
                          bgcolor: platform.color,
                          filter: 'brightness(0.9)',
                        },
                      }}
                    >
                      Launch Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Box textAlign="center" mt={8} p={4} sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 3 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, maxWidth: 600, mx: 'auto' }}>
              Experience the power of AI-driven solutions tailored for your industry. 
              Schedule a personalized demo and see how our platforms can drive your success.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Schedule Demo
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HomePage