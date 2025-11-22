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
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Alert,
  Badge,
  Tooltip,
  Paper,
  Divider,
  LinearProgress,
} from '@mui/material'
import {
  Power,
  Bolt,
  TrendingUp,
  Warning,
  CheckCircle,
  Home,
  Business,
  Factory,
  WbSunny,
  Air,
  BatteryChargingFull,
  ElectricBolt,
  Schedule,
  Insights,
  TrendingDown,
  Security,
  Landscape,
  Cable,
  Memory,
  Router,
  Timeline,
  Analytics,
  Engineering,
  MonitorHeart,
  Store,
  Assessment,
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

// Comprehensive Electricity Sector Use Cases
interface ElectricityUseCase {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  metrics: any[]
  charts: any[]
  alerts: any[]
}

const electricityUseCases: ElectricityUseCase[] = [
  {
    id: 'generation',
    title: 'Power Generation',
    description: 'Optimize electricity generation from multiple sources including renewables',
    icon: <ElectricBolt />,
    color: '#3b82f6',
    metrics: [
      { title: 'Total Capacity', value: '12.8 GW', change: '+5.2%', icon: <ElectricBolt /> },
      { title: 'Generation Efficiency', value: '94.7%', change: '+2.1%', icon: <TrendingUp /> },
      { title: 'Renewable Mix', value: '67.3%', change: '+8.5%', icon: <WbSunny /> },
      { title: 'Load Factor', value: '78.2%', change: '+1.8%', icon: <Assessment /> }
    ],
    charts: [
      {
        title: 'Generation Portfolio Mix',
        data: [
          { source: 'Solar', capacity: 4200, output: 3850, efficiency: 91.7 },
          { source: 'Wind', capacity: 3800, output: 3420, efficiency: 90.0 },
          { source: 'Hydro', capacity: 2400, output: 2280, efficiency: 95.0 },
          { source: 'Natural Gas', capacity: 1800, output: 1710, efficiency: 95.0 },
          { source: 'Nuclear', capacity: 600, output: 570, efficiency: 95.0 }
        ]
      },
      {
        title: 'Renewable Energy Trends',
        data: [
          { month: 'Jan', solar: 3200, wind: 2800, hydro: 2100, total: 8100 },
          { month: 'Feb', solar: 3400, wind: 3000, hydro: 2200, total: 8600 },
          { month: 'Mar', solar: 3650, wind: 3200, hydro: 2250, total: 9100 },
          { month: 'Apr', solar: 3800, wind: 3300, hydro: 2280, total: 9380 },
          { month: 'May', solar: 3900, wind: 3400, hydro: 2280, total: 9580 },
          { month: 'Jun', solar: 3850, wind: 3420, hydro: 2280, total: 9550 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Renewable energy target of 65% exceeded' },
      { type: 'info', message: 'Solar farm #12 connected to grid successfully' },
      { type: 'warning', message: 'Wind turbine W-45 requires maintenance' }
    ]
  },
  {
    id: 'transmission',
    title: 'Transmission & Distribution',
    description: 'Monitor and optimize electrical transmission and distribution networks',
    icon: <Cable />,
    color: '#10b981',
    metrics: [
      { title: 'Grid Stability', value: '99.8%', change: '+0.3%', icon: <Router /> },
      { title: 'Transmission Loss', value: '2.1%', change: '-0.5%', icon: <TrendingDown /> },
      { title: 'Network Reliability', value: '99.97%', change: '+0.02%', icon: <CheckCircle /> },
      { title: 'Load Balancing', value: '96.4%', change: '+1.2%', icon: <Timeline /> }
    ],
    charts: [
      {
        title: 'Grid Performance Metrics',
        data: [
          { region: 'North', load: 2847, capacity: 3200, reliability: 99.9 },
          { region: 'South', load: 3154, capacity: 3400, reliability: 99.8 },
          { region: 'East', load: 2698, capacity: 2900, reliability: 99.95 },
          { region: 'West', load: 2901, capacity: 3100, reliability: 99.92 }
        ]
      },
      {
        title: 'Transmission Line Monitoring',
        data: [
          { line: 'TL-001', voltage: 400, current: 1250, temperature: 65, status: 'Normal' },
          { line: 'TL-002', voltage: 400, current: 1180, temperature: 62, status: 'Normal' },
          { line: 'TL-003', voltage: 400, current: 1320, temperature: 68, status: 'Monitor' },
          { line: 'TL-004', voltage: 400, current: 1100, temperature: 59, status: 'Normal' }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Grid reliability maintained above 99.95%' },
      { type: 'warning', message: 'Transmission line TL-003 approaching thermal limit' },
      { type: 'info', message: 'Load balancing optimization deployed in West region' }
    ]
  },
  {
    id: 'smartgrid',
    title: 'Smart Grid Management',
    description: 'Advanced smart grid technologies for intelligent power management',
    icon: <Memory />,
    color: '#7c3aed',
    metrics: [
      { title: 'Smart Meters', value: '2.4M', change: '+12%', icon: <Memory /> },
      { title: 'Grid Intelligence', value: '94.2%', change: '+3.8%', icon: <Analytics /> },
      { title: 'Demand Response', value: '87.6%', change: '+5.2%', icon: <Schedule /> },
      { title: 'Self-Healing Events', value: '1,247', change: '+18%', icon: <Engineering /> }
    ],
    charts: [
      {
        title: 'Smart Grid Analytics',
        data: [
          { hour: '00:00', demand: 8500, supply: 8650, price: 0.12 },
          { hour: '06:00', demand: 9800, supply: 9950, price: 0.15 },
          { hour: '12:00', demand: 11200, supply: 11350, price: 0.18 },
          { hour: '18:00', demand: 12800, supply: 12950, price: 0.22 },
          { hour: '21:00', demand: 11500, supply: 11650, price: 0.19 }
        ]
      },
      {
        title: 'Demand Response Programs',
        data: [
          { program: 'Residential DR', participants: 485000, reduction: 850, savings: 1.2 },
          { program: 'Commercial DR', participants: 12400, reduction: 1200, savings: 2.8 },
          { program: 'Industrial DR', participants: 847, reduction: 2100, savings: 4.5 },
          { program: 'EV Charging DR', participants: 89000, reduction: 420, savings: 0.8 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Smart meter deployment reached 95% coverage' },
      { type: 'info', message: 'AI-powered grid optimization activated' },
      { type: 'success', message: 'Demand response program exceeded targets by 15%' }
    ]
  },
  {
    id: 'renewable',
    title: 'Renewable Integration',
    description: 'Optimize renewable energy integration and storage management',
    icon: <WbSunny />,
    color: '#f59e0b',
    metrics: [
      { title: 'Renewable Capacity', value: '8.4 GW', change: '+15.2%', icon: <WbSunny /> },
      { title: 'Integration Rate', value: '92.8%', change: '+4.1%', icon: <Landscape /> },
      { title: 'Storage Efficiency', value: '89.3%', change: '+2.7%', icon: <BatteryChargingFull /> },
      { title: 'Carbon Reduction', value: '2.8M tons', change: '+18%', icon: <Landscape /> }
    ],
    charts: [
      {
        title: 'Renewable Energy Production',
        data: [
          { date: '2025-10-01', solar: 3200, wind: 2800, hydro: 2100, storage: 450 },
          { date: '2025-10-02', solar: 3400, wind: 3000, hydro: 2200, storage: 520 },
          { date: '2025-10-03', solar: 3650, wind: 3200, hydro: 2250, storage: 580 },
          { date: '2025-10-04', solar: 3800, wind: 3300, hydro: 2280, storage: 650 },
          { date: '2025-10-05', solar: 3850, wind: 3420, hydro: 2280, storage: 720 }
        ]
      },
      {
        title: 'Energy Storage Management',
        data: [
          { facility: 'Battery Farm A', capacity: 200, stored: 185, efficiency: 92.5 },
          { facility: 'Battery Farm B', capacity: 150, stored: 138, efficiency: 92.0 },
          { facility: 'Pumped Hydro', capacity: 800, stored: 720, efficiency: 90.0 },
          { facility: 'Compressed Air', capacity: 100, stored: 89, efficiency: 89.0 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Renewable targets exceeded - 67.3% of total generation' },
      { type: 'info', message: 'New battery storage facility commissioned' },
      { type: 'success', message: 'Carbon emissions reduced by 18% year-over-year' }
    ]
  },
  {
    id: 'customer',
    title: 'Customer & Retail',
    description: 'Customer energy management, billing, and retail market operations',
    icon: <Store />,
    color: '#dc2626',
    metrics: [
      { title: 'Customer Base', value: '2.4M', change: '+3.2%', icon: <Store /> },
      { title: 'Satisfaction Score', value: '4.7/5', change: '+0.3', icon: <CheckCircle /> },
      { title: 'Bill Accuracy', value: '99.8%', change: '+0.1%', icon: <Assessment /> },
      { title: 'Energy Savings', value: '12.4%', change: '+2.1%', icon: <Landscape /> }
    ],
    charts: [
      {
        title: 'Customer Segmentation Analysis',
        data: [
          { segment: 'Residential', customers: 1950000, consumption: 4200, revenue: 125.4 },
          { segment: 'Small Business', customers: 380000, consumption: 2800, revenue: 89.2 },
          { segment: 'Industrial', customers: 12400, consumption: 8500, revenue: 285.7 },
          { segment: 'Municipal', customers: 57600, consumption: 1200, revenue: 38.9 }
        ]
      },
      {
        title: 'Energy Usage Patterns',
        data: [
          { hour: '00:00', residential: 1800, commercial: 1200, industrial: 3200 },
          { hour: '06:00', residential: 2400, commercial: 1800, industrial: 3400 },
          { hour: '12:00', residential: 2200, commercial: 3200, industrial: 3600 },
          { hour: '18:00', residential: 3200, commercial: 2800, industrial: 3500 },
          { hour: '21:00', residential: 2800, commercial: 1500, industrial: 3300 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Customer satisfaction increased to 4.7/5 rating' },
      { type: 'info', message: 'New time-of-use tariff program launched' },
      { type: 'success', message: 'Energy efficiency programs saved customers 12.4%' }
    ]
  },
  {
    id: 'maintenance',
    title: 'Asset Management & Maintenance',
    description: 'Predictive maintenance and asset lifecycle management for grid infrastructure',
    icon: <Engineering />,
    color: '#0891b2',
    metrics: [
      { title: 'Asset Health', value: '94.6%', change: '+2.3%', icon: <MonitorHeart /> },
      { title: 'Maintenance Efficiency', value: '96.8%', change: '+1.9%', icon: <Engineering /> },
      { title: 'Asset Lifespan', value: '+18.2%', change: '+3.1%', icon: <TrendingUp /> },
      { title: 'Downtime Reduction', value: '42%', change: '+8%', icon: <Schedule /> }
    ],
    charts: [
      {
        title: 'Asset Health Monitoring',
        data: [
          { asset: 'Transformers', health: 96, maintenance: 12, lifespan: 28 },
          { asset: 'Transmission Lines', health: 94, maintenance: 8, lifespan: 35 },
          { asset: 'Substations', health: 97, maintenance: 15, lifespan: 32 },
          { asset: 'Distribution Equipment', health: 93, maintenance: 18, lifespan: 25 }
        ]
      },
      {
        title: 'Predictive Maintenance Schedule',
        data: [
          { month: 'Oct', scheduled: 245, emergency: 12, cost: 2.8 },
          { month: 'Nov', scheduled: 268, emergency: 8, cost: 2.9 },
          { month: 'Dec', scheduled: 295, emergency: 6, cost: 3.1 },
          { month: 'Jan', scheduled: 220, emergency: 4, cost: 2.6 }
        ]
      }
    ],
    alerts: [
      { type: 'success', message: 'Predictive maintenance reduced unplanned outages by 42%' },
      { type: 'warning', message: 'Transformer T-245 scheduled for replacement next month' },
      { type: 'info', message: 'AI maintenance optimization deployed across 1,200 assets' }
    ]
  }
]

const GridSmartProEnhanced: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(0)
  const [liveData, setLiveData] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentUseCase = electricityUseCases[selectedUseCase]

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedUseCase(newValue)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', pb: 4 }}>
      <DashboardHeader 
        title="GridSmart Pro"
        subtitle="Comprehensive Electricity Grid AI Management Platform"
        icon={<Power />}
        gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
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
              {electricityUseCases.map((useCase, index) => (
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
                label="Real-time Grid Data" 
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
                  title="Grid Operations Center - Live Alerts"
                  avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><Bolt /></Avatar>}
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
                        <BarChart data={chart.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey={Object.keys(chart.data[0])[0]} />
                          <YAxis />
                          <RechartsTooltip />
                          <Bar dataKey={Object.keys(chart.data[0])[1]} fill={currentUseCase.color} />
                          <Bar dataKey={Object.keys(chart.data[0])[2]} fill="#ff7300" />
                        </BarChart>
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
                title="Electricity Sector AI Transformation Impact"
                avatar={<Avatar sx={{ bgcolor: currentUseCase.color }}><Power /></Avatar>}
              />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Grid Modernization</Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI-powered smart grid technologies improve reliability by 15%, reduce transmission 
                      losses by 8%, and enable 95% renewable energy integration.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Operational Excellence</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Predictive maintenance and real-time optimization reduce operational costs by 
                      $1.8B annually while improving grid stability to 99.8%.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Sustainable Future</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Advanced renewable integration and demand response programs achieve 67% 
                      clean energy mix and 2.8M ton carbon reduction annually.
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

export default GridSmartProEnhanced
