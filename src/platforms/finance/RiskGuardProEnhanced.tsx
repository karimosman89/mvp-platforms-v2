import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Tabs,
  Tab,
  Alert,
  Badge,
  Tooltip,
  Paper,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import {
  Security,
  AccountBalance,
  TrendingUp,
  Warning,
  CheckCircle,
  CreditCard,
  Analytics,
  Assessment,
  MonetizationOn,
  Shield,
  Gavel,
  Business,
  Person,
  CompareArrows,
  TrendingDown,
  AttachMoney,
  Policy,
  MonitorHeart,
  Insights,
  Timeline,
  PieChart,
  BarChart,
  ShowChart,
} from '@mui/icons-material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ComposedChart,
  ScatterChart,
  Scatter,
  RadialBarChart,
  RadialBar,
} from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'
import DashboardHeader from '../../components/DashboardHeader'
import MetricCard from '../../components/MetricCard'
import ChartCard from '../../components/ChartCard'

// Comprehensive Finance Sector Use Cases
interface FinanceUseCase {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  metrics: any[]
  charts: any[]
  alerts: any[]
}

const financeUseCases: FinanceUseCase[] = [
  {
    id: 'fraud',
    title: 'Fraud Detection & Prevention',
    description: 'Real-time fraud monitoring and prevention across all financial transactions',
    icon: <Shield />,
    color: '#dc2626',
    metrics: [
      { title: 'Fraud Detection Rate', value: '99.7%', change: '+0.3%', icon: <Shield /> },
      { title: 'False Positives', value: '0.8%', change: '-0.2%', icon: <TrendingDown /> },
      { title: 'Response Time', value: '47ms', change: '-12ms', icon: <MonitorHeart /> },
      { title: 'Prevented Losses', value: '$24.8M', change: '+18%', icon: <AttachMoney /> }
    ],
    charts: [
      {
        title: 'Fraud Detection Performance',
        data: [
          { month: 'Jan', detected: 4847, prevented: 4782, losses: 2.3 },
          { month: 'Feb', detected: 5124, prevented: 5089, losses: 1.8 },
          { month: 'Mar', detected: 4965, prevented: 4938, losses: 1.2 },
          { month: 'Apr', detected: 5287, prevented: 5261, losses: 0.9 },
          { month: 'May', detected: 5456, prevented: 5439, losses: 0.7 },
          { month: 'Jun', detected: 5198, prevented: 5183, losses: 0.5 }
        ]
      },
      {
        title: 'Transaction Risk Scoring',
        data: [
          { risk: 'Low (0-30)', transactions: 2847650, fraud: 12, percentage: 0.0004 },
          { risk: 'Medium (31-70)', transactions: 189420, fraud: 145, percentage: 0.077 },
          { risk: 'High (71-90)', transactions: 12847, fraud: 987, percentage: 7.68 },
          { risk: 'Critical (91-100)', transactions: 2156, fraud: 1876, percentage: 87.01 }
        ]
      }
    ],
    alerts: [
      { type: 'warning', message: 'Suspicious activity pattern detected in Region 7' },
      { type: 'success', message: 'Fraud prevention saved $847K today' },
      { type: 'info', message: 'New ML model deployed - 15% accuracy improvement' }
    ]
  },
  {
    id: 'risk',
    title: 'Risk Assessment & Management',
    description: 'Comprehensive risk evaluation for lending, investments, and portfolio management',
    icon: <Assessment />,
    color: '#f59e0b',
    metrics: [
      { title: 'Portfolio Risk Score', value: '2.4/10', change: '-0.3', icon: <Assessment /> },
      { title: 'Default Prediction', value: '96.8%', change: '+1.2%', icon: <Analytics /> },
      { title: 'Risk-Adjusted Returns', value: '12.7%', change: '+2.1%', icon: <TrendingUp /> },
      { title: 'Capital Adequacy', value: '18.4%', change: '+0.8%', icon: <AccountBalance /> }
    ],
    charts: [
      {
        title: 'Risk Distribution Analysis',
        data: [
          { category: 'Credit Risk', exposure: 450, mitigation: 425, score: 2.8 },
          { category: 'Market Risk', exposure: 380, mitigation: 365, score: 2.1 },
          { category: 'Operational Risk', exposure: 290, mitigation: 278, score: 1.9 },
          { category: 'Liquidity Risk', exposure: 185, mitigation: 180, score: 1.4 }
        ]
      },
      {
        title: 'Credit Scoring Model Performance',
        data: [
          { segment: 'Prime', applications: 12450, approved: 11897, default: 0.8 },
          { segment: 'Near Prime', applications: 8947, approved: 7158, default: 2.4 },
          { segment: 'Subprime', applications: 5689, approved: 2845, default: 7.2 },
          { segment: 'Deep Subprime', applications: 2147, approved: 429, default: 18.9 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Portfolio risk reduced by 12% this quarter' },
      { type: 'warning', message: 'Market volatility increasing - review exposure limits' },
      { type: 'info', message: 'New ESG risk factors integrated into models' }
    ]
  },
  {
    id: 'trading',
    title: 'Algorithmic Trading & Markets',
    description: 'AI-powered trading algorithms and market analysis for optimal execution',
    icon: <ShowChart />,
    color: '#10b981',
    metrics: [
      { title: 'Trading Volume', value: '$2.8B', change: '+15.2%', icon: <CompareArrows /> },
      { title: 'Alpha Generation', value: '8.7%', change: '+1.9%', icon: <TrendingUp /> },
      { title: 'Execution Quality', value: '98.9%', change: '+0.4%', icon: <CheckCircle /> },
      { title: 'Market Making PnL', value: '$12.4M', change: '+24%', icon: <MonetizationOn /> }
    ],
    charts: [
      {
        title: 'Trading Performance Metrics',
        data: [
          { strategy: 'Momentum', returns: 12.4, sharpe: 1.8, drawdown: 3.2 },
          { strategy: 'Mean Reversion', returns: 8.9, sharpe: 2.1, drawdown: 2.1 },
          { strategy: 'Arbitrage', returns: 6.7, sharpe: 2.8, drawdown: 1.1 },
          { strategy: 'Market Making', returns: 15.2, sharpe: 1.9, drawdown: 4.1 }
        ]
      },
      {
        title: 'Market Liquidity Analysis',
        data: [
          { asset: 'Equities', volume: 1.2, spread: 0.008, depth: 450 },
          { asset: 'Fixed Income', volume: 0.8, spread: 0.012, depth: 320 },
          { asset: 'FX', volume: 2.1, spread: 0.004, depth: 780 },
          { asset: 'Commodities', volume: 0.4, spread: 0.018, depth: 150 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Trading algorithms generated $2.1M profit today' },
      { type: 'info', message: 'New high-frequency strategy deployed in FX markets' },
      { type: 'warning', message: 'Unusual market volatility detected - algorithms adapted' }
    ]
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance & Reporting',
    description: 'Automated compliance monitoring and regulatory reporting across jurisdictions',
    icon: <Policy />,
    color: '#7c3aed',
    metrics: [
      { title: 'Compliance Score', value: '99.9%', change: '+0.1%', icon: <Policy /> },
      { title: 'Regulatory Filings', value: '1,247', change: '+12%', icon: <Gavel /> },
      { title: 'Audit Readiness', value: '100%', change: '0%', icon: <CheckCircle /> },
      { title: 'Violation Risk', value: '0.02%', change: '-0.01%', icon: <Security /> }
    ],
    charts: [
      {
        title: 'Compliance Monitoring Dashboard',
        data: [
          { regulation: 'Basel III', score: 99.8, violations: 0, risk: 0.1 },
          { regulation: 'Dodd-Frank', score: 99.9, violations: 0, risk: 0.05 },
          { regulation: 'MiFID II', score: 99.7, violations: 1, risk: 0.15 },
          { regulation: 'GDPR', score: 100, violations: 0, risk: 0.0 }
        ]
      },
      {
        title: 'Regulatory Capital Requirements',
        data: [
          { tier: 'Tier 1 Capital', required: 8.0, actual: 12.4, buffer: 4.4 },
          { tier: 'Common Equity', required: 4.5, actual: 9.8, buffer: 5.3 },
          { tier: 'Capital Conservation', required: 2.5, actual: 3.1, buffer: 0.6 },
          { tier: 'Leverage Ratio', required: 3.0, actual: 5.2, buffer: 2.2 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'All regulatory reports submitted on time' },
      { type: 'info', message: 'New compliance framework integrated for crypto assets' },
      { type: 'success', message: 'Zero compliance violations for 18 consecutive months' }
    ]
  },
  {
    id: 'wealth',
    title: 'Wealth Management & Advisory',
    description: 'AI-driven wealth management, portfolio optimization, and financial advisory services',
    icon: <Business />,
    color: '#0891b2',
    metrics: [
      { title: 'Assets Under Management', value: '$847B', change: '+12.8%', icon: <Business /> },
      { title: 'Client Satisfaction', value: '4.8/5', change: '+0.2', icon: <Person /> },
      { title: 'Portfolio Performance', value: '11.4%', change: '+2.7%', icon: <TrendingUp /> },
      { title: 'Advisory Accuracy', value: '94.6%', change: '+1.8%', icon: <Analytics /> }
    ],
    charts: [
      {
        title: 'Portfolio Allocation Optimization',
        data: [
          { allocation: 'Equities', target: 60, actual: 58.7, performance: 12.4 },
          { allocation: 'Fixed Income', target: 25, actual: 26.2, performance: 5.8 },
          { allocation: 'Real Estate', target: 10, actual: 9.8, performance: 8.9 },
          { allocation: 'Alternatives', target: 5, actual: 5.3, performance: 15.2 }
        ]
      },
      {
        title: 'Client Segmentation Analysis',
        data: [
          { segment: 'UHNW (>$50M)', clients: 247, aum: 425, fees: 0.8 },
          { segment: 'HNW ($5-50M)', clients: 1847, aum: 298, fees: 1.2 },
          { segment: 'Affluent ($1-5M)', clients: 12450, aum: 89, fees: 1.5 },
          { segment: 'Mass Market (<$1M)', clients: 485000, aum: 35, fees: 1.8 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Q3 client acquisition exceeded targets by 18%' },
      { type: 'info', message: 'New ESG investment products launched' },
      { type: 'success', message: 'AI advisory platform achieved 94.6% accuracy' }
    ]
  },
  {
    id: 'banking',
    title: 'Digital Banking Operations',
    description: 'Core banking systems, digital payments, and customer experience optimization',
    icon: <CreditCard />,
    color: '#be185d',
    metrics: [
      { title: 'Transaction Volume', value: '2.4M/day', change: '+8.7%', icon: <CreditCard /> },
      { title: 'Digital Adoption', value: '87.3%', change: '+5.2%', icon: <CheckCircle /> },
      { title: 'Processing Speed', value: '2.1sec', change: '-0.3sec', icon: <MonitorHeart /> },
      { title: 'Customer NPS', value: '68', change: '+12', icon: <Person /> }
    ],
    charts: [
      {
        title: 'Digital Banking Metrics',
        data: [
          { channel: 'Mobile App', users: 1890000, transactions: 847000, satisfaction: 4.6 },
          { channel: 'Online Banking', users: 1245000, transactions: 456000, satisfaction: 4.3 },
          { channel: 'ATM Network', users: 987000, transactions: 289000, satisfaction: 4.1 },
          { channel: 'Branch', users: 234000, transactions: 98000, satisfaction: 4.8 }
        ]
      },
      {
        title: 'Payment Processing Analytics',
        data: [
          { type: 'Card Payments', volume: 1.8, value: 247, growth: 12.4 },
          { type: 'Wire Transfers', volume: 0.3, value: 189, growth: 8.7 },
          { type: 'ACH', volume: 0.9, value: 67, growth: 15.2 },
          { type: 'Digital Wallets', volume: 1.2, value: 89, growth: 28.9 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Mobile app usage increased 28% this quarter' },
      { type: 'info', message: 'New contactless payment limits implemented' },
      { type: 'success', message: 'Digital onboarding time reduced to 4.2 minutes' }
    ]
  }
]

const RiskGuardProEnhanced: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(0)
  const [liveData, setLiveData] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentUseCase = financeUseCases[selectedUseCase]

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedUseCase(newValue)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', pb: 4 }}>
      <DashboardHeader 
        title="RiskGuard Pro"
        subtitle="Comprehensive Financial AI Risk & Operations Platform"
        icon={<Security />}
        gradient="linear-gradient(135deg, #059669 0%, #047857 100%)"
      />

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Use Case Navigation */}
          <Paper sx={{ mb: 4 }}>
            <Tabs 
              value={selectedUseCase} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              {financeUseCases.map((useCase, index) => (
                <Tab
                  key={useCase.id}
                  label={useCase.title}
                  icon={useCase.icon}
                  iconPosition="start"
                  sx={{ minHeight: 72, textTransform: 'none' }}
                />
              ))}
            </Tabs>
          </Paper>

          {/* Live Data Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" color={currentUseCase.color}>
              {currentUseCase.title}
            </Typography>
            <Badge badgeContent="LIVE" color="success">
              <Chip 
                icon={<MonitorHeart />} 
                label="Real-time Financial Data" 
                color="success" 
                variant={liveData ? "filled" : "outlined"}
              />
            </Badge>
          </Box>

          <Typography variant="h6" color="text.secondary" paragraph>
            {currentUseCase.description}
          </Typography>

          {/* Key Metrics */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {currentUseCase.metrics.map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <MetricCard
                    title={metric.title}
                    value={metric.value}
                    change={metric.change}
                    icon={metric.icon}
                    color={currentUseCase.color}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Alerts Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Card>
                <CardHeader 
                  title="Financial Risk Monitoring Center - Live Alerts"
                  avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><Security /></Avatar>}
                />
                <CardContent>
                  <List>
                    {currentUseCase.alerts.map((alert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.4 }}
                      >
                        <ListItem>
                          <ListItemIcon>
                            {alert.type === 'success' && <CheckCircle color="success" />}
                            {alert.type === 'warning' && <Warning color="warning" />}
                            {alert.type === 'info' && <Insights color="info" />}
                          </ListItemIcon>
                          <ListItemText 
                            primary={alert.message}
                            secondary={`${new Date().toLocaleTimeString()} - ${currentUseCase.title} System`}
                          />
                        </ListItem>
                        {index < currentUseCase.alerts.length - 1 && <Divider />}
                      </motion.div>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={3}>
            {currentUseCase.charts.map((chart, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <ChartCard title={chart.title}>
                    <ResponsiveContainer width="100%" height={300}>
                      {index % 3 === 0 ? (
                        <ComposedChart data={chart.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey={Object.keys(chart.data[0])[0]} />
                          <YAxis />
                          <RechartsTooltip />
                          <Bar dataKey={Object.keys(chart.data[0])[1]} fill={currentUseCase.color} />
                          <Line 
                            type="monotone" 
                            dataKey={Object.keys(chart.data[0])[2]} 
                            stroke="#ff7300" 
                            strokeWidth={3}
                          />
                        </ComposedChart>
                      ) : index % 3 === 1 ? (
                        <AreaChart data={chart.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey={Object.keys(chart.data[0])[0]} />
                          <YAxis />
                          <RechartsTooltip />
                          <Area 
                            type="monotone" 
                            dataKey={Object.keys(chart.data[0])[1]} 
                            stroke={currentUseCase.color} 
                            fill={currentUseCase.color}
                            fillOpacity={0.3}
                          />
                          <Area 
                            type="monotone" 
                            dataKey={Object.keys(chart.data[0])[2]} 
                            stroke="#ff7300" 
                            fill="#ff7300"
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      ) : (
                        <RechartsBarChart data={chart.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey={Object.keys(chart.data[0])[0]} />
                          <YAxis />
                          <RechartsTooltip />
                          <Bar dataKey={Object.keys(chart.data[0])[1]} fill={currentUseCase.color} />
                          <Bar dataKey={Object.keys(chart.data[0])[2]} fill="#ff7300" />
                        </RechartsBarChart>
                      )}
                    </ResponsiveContainer>
                  </ChartCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Industry Summary */}
          <Box sx={{ mt: 6 }}>
            <Card>
              <CardHeader 
                title="Financial Services AI Transformation Impact"
                avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><AccountBalance /></Avatar>}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Risk Management Revolution</Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI-powered risk assessment and fraud detection prevent $24.8M in losses 
                      annually while maintaining 99.7% accuracy and sub-second response times.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Operational Excellence</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Automated compliance monitoring achieves 99.9% regulatory adherence while 
                      algorithmic trading generates $847M in additional alpha annually.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Customer Experience</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Digital banking transformation achieves 87.3% adoption rate with NPS of 68, 
                      while AI advisory services manage $847B with 94.6% accuracy.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default RiskGuardProEnhanced
