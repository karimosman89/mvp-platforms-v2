import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Alert,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Badge,
  Tooltip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material'
import {
  Build,
  Warning,
  CheckCircle,
  TrendingUp,
  Speed,
  Thermostat,
  Opacity,
  ElectricBolt,
  Search,
  LocalGasStation,
  AccountTree,
  Factory,
  Security,
  Assessment,
  ExpandMore,
  LocationOn,
  Timeline,
  LocalShipping,
  Store,
  Engineering,
  Favorite,
  Landscape,
  Gavel,
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
  BarChart,
  Bar,
  PieChart,
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

// Comprehensive Oil & Gas Use Cases
interface UseCase {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  metrics: any[]
  charts: any[]
  alerts: any[]
}

const oilGasUseCases: UseCase[] = [
  {
    id: 'exploration',
    title: 'Exploration & Drilling',
    description: 'AI-powered geological analysis, seismic interpretation, and drilling optimization',
    icon: <Search />,
    color: '#f59e0b',
    metrics: [
      { title: 'Active Wells', value: '2,847', change: '+12%', icon: <LocationOn /> },
      { title: 'Drilling Efficiency', value: '94.2%', change: '+8%', icon: <Engineering /> },
      { title: 'Seismic Coverage', value: '89,450 km²', change: '+15%', icon: <Assessment /> },
      { title: 'Discovery Rate', value: '23%', change: '+5%', icon: <TrendingUp /> }
    ],
    charts: [
      {
        title: 'Drilling Performance Optimization',
        data: [
          { month: 'Jan', efficiency: 87, cost: 2.3, depth: 4500 },
          { month: 'Feb', efficiency: 89, cost: 2.1, depth: 4650 },
          { month: 'Mar', efficiency: 91, cost: 1.9, depth: 4800 },
          { month: 'Apr', efficiency: 93, cost: 1.8, depth: 5000 },
          { month: 'May', efficiency: 94, cost: 1.7, depth: 5200 },
          { month: 'Jun', efficiency: 96, cost: 1.6, depth: 5400 }
        ]
      },
      {
        title: 'Seismic Analysis Results',
        data: [
          { formation: 'Sandstone', probability: 85, reserves: 450 },
          { formation: 'Limestone', probability: 72, reserves: 320 },
          { formation: 'Shale', probability: 68, reserves: 180 },
          { formation: 'Dolomite', probability: 61, reserves: 240 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'New oil reservoir discovered in Sector 7-A' },
      { type: 'warning', message: 'Drilling rig #4 requires maintenance scheduling' },
      { type: 'info', message: 'Seismic survey completed for Block 15' }
    ]
  },
  {
    id: 'production',
    title: 'Production Optimization',
    description: 'Real-time monitoring and optimization of oil & gas production operations',
    icon: <LocalGasStation />,
    color: '#3b82f6',
    metrics: [
      { title: 'Daily Production', value: '485,672 bbl', change: '+3.2%', icon: <LocalGasStation /> },
      { title: 'Well Uptime', value: '97.8%', change: '+1.1%', icon: <CheckCircle /> },
      { title: 'Flow Rate Efficiency', value: '92.4%', change: '+2.8%', icon: <Opacity /> },
      { title: 'Pressure Optimization', value: '2,847 PSI', change: '+0.5%', icon: <Speed /> }
    ],
    charts: [
      {
        title: 'Production Trends',
        data: [
          { date: '2025-10-01', crude: 485000, gas: 2.8, water: 125000 },
          { date: '2025-10-02', crude: 487000, gas: 2.9, water: 124000 },
          { date: '2025-10-03', crude: 489000, gas: 3.0, water: 123000 },
          { date: '2025-10-04', crude: 491000, gas: 3.1, water: 122000 },
          { date: '2025-10-05', crude: 485672, gas: 2.85, water: 125500 }
        ]
      },
      {
        title: 'Well Performance Analysis',
        data: [
          { well: 'W-001', production: 95, efficiency: 98 },
          { well: 'W-002', production: 87, efficiency: 94 },
          { well: 'W-003', production: 92, efficiency: 96 },
          { well: 'W-004', production: 88, efficiency: 91 },
          { well: 'W-005', production: 96, efficiency: 99 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Production targets exceeded by 3.2%' },
      { type: 'warning', message: 'Well W-004 showing decreased flow rate' },
      { type: 'info', message: 'Optimization algorithm deployed to 12 wells' }
    ]
  },
  {
    id: 'AccountTree',
    title: 'Pipeline & Transportation',
    description: 'Monitoring pipeline integrity, flow optimization, and transportation logistics',
    icon: <AccountTree />,
    color: '#10b981',
    metrics: [
      { title: 'Pipeline Length', value: '12,847 km', change: '+2.1%', icon: <AccountTree /> },
      { title: 'Flow Rate', value: '2.8M bbl/day', change: '+1.8%', icon: <Timeline /> },
      { title: 'Integrity Score', value: '98.7%', change: '+0.3%', icon: <Security /> },
      { title: 'Transport Efficiency', value: '94.5%', change: '+2.2%', icon: <LocalShipping /> }
    ],
    charts: [
      {
        title: 'Pipeline Pressure Monitoring',
        data: [
          { segment: 'A1-A5', pressure: 1200, flow: 85000, integrity: 98 },
          { segment: 'B1-B8', pressure: 1180, flow: 92000, integrity: 97 },
          { segment: 'C1-C12', pressure: 1220, flow: 78000, integrity: 99 },
          { segment: 'D1-D6', pressure: 1195, flow: 88000, integrity: 96 }
        ]
      },
      {
        title: 'Transportation Analytics',
        data: [
          { route: 'Route A', volume: 125000, cost: 2.3, time: 48 },
          { route: 'Route B', volume: 98000, cost: 2.8, time: 52 },
          { route: 'Route C', volume: 145000, cost: 2.1, time: 45 },
          { route: 'Route D', volume: 87000, cost: 3.2, time: 58 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'All pipeline segments operating within normal parameters' },
      { type: 'warning', message: 'Segment C1-C12 requires scheduled maintenance' },
      { type: 'info', message: 'New pipeline route D1-D6 commissioned' }
    ]
  },
  {
    id: 'refining',
    title: 'Refining Operations',
    description: 'Optimizing refinery processes, product quality, and energy efficiency',
    icon: <Factory />,
    color: '#dc2626',
    metrics: [
      { title: 'Refinery Capacity', value: '450K bbl/day', change: '+1.5%', icon: <Factory /> },
      { title: 'Product Quality', value: '99.2%', change: '+0.8%', icon: <CheckCircle /> },
      { title: 'Energy Efficiency', value: '87.3%', change: '+3.1%', icon: <ElectricBolt /> },
      { title: 'Yield Optimization', value: '94.6%', change: '+2.4%', icon: <TrendingUp /> }
    ],
    charts: [
      {
        title: 'Refinery Output Composition',
        data: [
          { product: 'Gasoline', volume: 180000, margin: 15.2 },
          { product: 'Diesel', volume: 145000, margin: 18.7 },
          { product: 'Jet Fuel', volume: 85000, margin: 22.1 },
          { product: 'Heavy Oil', volume: 40000, margin: 8.9 }
        ]
      },
      {
        title: 'Process Efficiency Trends',
        data: [
          { unit: 'CDU-1', efficiency: 94, temperature: 350, pressure: 15 },
          { unit: 'CDU-2', efficiency: 91, temperature: 365, pressure: 14.5 },
          { unit: 'FCC-1', efficiency: 96, temperature: 520, pressure: 2.1 },
          { unit: 'HDS-1', efficiency: 98, temperature: 380, pressure: 35 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Yield optimization increased by 2.4%' },
      { type: 'warning', message: 'CDU-2 operating at elevated temperature' },
      { type: 'info', message: 'New catalyst deployed in FCC-1 unit' }
    ]
  },
  {
    id: 'safety',
    title: 'Safety & HSE Monitoring',
    description: 'Health, Safety, Environment monitoring with AI-powered risk assessment',
    icon: <Security />,
    color: '#7c3aed',
    metrics: [
      { title: 'Safety Score', value: '99.8%', change: '+0.2%', icon: <Security /> },
      { title: 'Incident Rate', value: '0.12/1M hrs', change: '-15%', icon: <Favorite /> },
      { title: 'Environmental Score', value: '96.4%', change: '+1.8%', icon: <Landscape /> },
      { title: 'Compliance Rate', value: '100%', change: '0%', icon: <Gavel /> }
    ],
    charts: [
      {
        title: 'Safety Metrics Tracking',
        data: [
          { month: 'Jan', incidents: 2, nearMiss: 15, training: 487 },
          { month: 'Feb', incidents: 1, nearMiss: 12, training: 523 },
          { month: 'Mar', incidents: 0, nearMiss: 8, training: 556 },
          { month: 'Apr', incidents: 1, nearMiss: 10, training: 498 },
          { month: 'May', incidents: 0, nearMiss: 6, training: 612 },
          { month: 'Jun', incidents: 0, nearMiss: 4, training: 587 }
        ]
      },
      {
        title: 'Environmental Impact Assessment',
        data: [
          { parameter: 'Emissions', current: 85, target: 80, compliance: 94 },
          { parameter: 'Water Usage', current: 92, target: 90, compliance: 98 },
          { parameter: 'Waste Reduction', current: 88, target: 85, compliance: 96 },
          { parameter: 'Energy Efficiency', current: 91, target: 88, compliance: 97 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Zero incidents recorded for 45 consecutive days' },
      { type: 'info', message: 'Safety training compliance at 100%' },
      { type: 'success', message: 'Environmental targets exceeded in all categories' }
    ]
  },
  {
    id: 'retail',
    title: 'Retail & Distribution',
    description: 'Fuel retail analytics, demand forecasting, and distribution optimization',
    icon: <Store />,
    color: '#0891b2',
    metrics: [
      { title: 'Retail Outlets', value: '2,847', change: '+5.2%', icon: <Store /> },
      { title: 'Fuel Sales', value: '12.8M L/day', change: '+3.8%', icon: <LocalGasStation /> },
      { title: 'Demand Accuracy', value: '96.7%', change: '+2.1%', icon: <Assessment /> },
      { title: 'Customer Satisfaction', value: '4.6/5', change: '+0.3', icon: <CheckCircle /> }
    ],
    charts: [
      {
        title: 'Retail Sales Analytics',
        data: [
          { region: 'North', gasoline: 285000, diesel: 195000, revenue: 4.2 },
          { region: 'South', gasoline: 325000, diesel: 245000, revenue: 5.1 },
          { region: 'East', gasoline: 298000, diesel: 187000, revenue: 4.6 },
          { region: 'West', gasoline: 312000, diesel: 203000, revenue: 4.8 }
        ]
      },
      {
        title: 'Demand Forecasting Accuracy',
        data: [
          { week: 'W1', forecast: 95.2, actual: 97.1 },
          { week: 'W2', forecast: 96.8, actual: 95.9 },
          { week: 'W3', forecast: 98.1, actual: 98.7 },
          { week: 'W4', forecast: 94.5, actual: 93.8 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Q3 sales targets exceeded by 8.2%' },
      { type: 'warning', message: 'Increased demand predicted for Region South' },
      { type: 'info', message: 'New outlet opened in metropolitan area' }
    ]
  }
]

const PredictiveOilProEnhanced: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(0)
  const [liveData, setLiveData] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentUseCase = oilGasUseCases[selectedUseCase]

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedUseCase(newValue)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', pb: 4 }}>
      <DashboardHeader 
        title="PredictiveOil Pro"
        subtitle="Comprehensive Oil & Gas AI Operations Platform"
        icon={<Build />}
        gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
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
              {oilGasUseCases.map((useCase, index) => (
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
                icon={<Favorite />} 
                label="Real-time Data" 
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
                  title="Real-time Alerts & Notifications"
                  avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><Warning /></Avatar>}
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
                            {alert.type === 'info' && <Assessment color="info" />}
                          </ListItemIcon>
                          <ListItemText 
                            primary={alert.message}
                            secondary={`${new Date().toLocaleTimeString()} - ${currentUseCase.title}`}
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
                      {index % 2 === 0 ? (
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
                      ) : (
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
                        </AreaChart>
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
                title="Oil & Gas Industry AI Impact Summary"
                avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><Assessment /></Avatar>}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Operational Excellence</Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI-driven optimization across exploration, production, and refining operations
                      delivers 15-25% efficiency improvements and $2.3B annual cost savings.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Safety & Compliance</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Predictive safety monitoring and automated compliance tracking reduce
                      incidents by 40% and ensure 100% regulatory adherence.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Future-Ready Infrastructure</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Advanced analytics and ML models enable proactive decision-making,
                      extending asset life by 20% and optimizing energy transition strategies.
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

export default PredictiveOilProEnhanced
