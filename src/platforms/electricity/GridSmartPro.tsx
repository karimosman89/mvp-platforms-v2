import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Switch,
  FormControlLabel,
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
} from '@mui/icons-material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from 'recharts'
import { motion } from 'framer-motion'
import DashboardHeader from '../../components/DashboardHeader'
import MetricCard from '../../components/MetricCard'
import ChartCard from '../../components/ChartCard'

// Sample data for demo
const energyData = [
  { time: '00:00', demand: 850, supply: 920, renewable: 280, price: 0.12 },
  { time: '04:00', demand: 720, supply: 890, renewable: 320, price: 0.10 },
  { time: '08:00', demand: 1100, supply: 1150, renewable: 450, price: 0.18 },
  { time: '12:00', demand: 1350, supply: 1380, renewable: 580, price: 0.22 },
  { time: '16:00', demand: 1280, supply: 1320, renewable: 520, price: 0.20 },
  { time: '20:00', demand: 1450, supply: 1480, renewable: 380, price: 0.25 },
]

const gridNodes = [
  { id: 1, name: 'Substation Alpha', status: 'Online', load: 85, efficiency: 94 },
  { id: 2, name: 'Substation Beta', status: 'Online', load: 72, efficiency: 96 },
  { id: 3, name: 'Substation Gamma', status: 'Warning', load: 95, efficiency: 89 },
  { id: 4, name: 'Substation Delta', status: 'Online', load: 68, efficiency: 97 },
]

const renewableData = [
  { source: 'Solar', capacity: 450, current: 380, percentage: 84 },
  { source: 'Wind', capacity: 320, current: 200, percentage: 63 },
  { source: 'Hydro', capacity: 180, current: 165, percentage: 92 },
  { source: 'Biomass', capacity: 80, current: 72, percentage: 90 },
]

const outageAlerts = [
  {
    id: 1,
    location: 'District 7, Sector B',
    type: 'Transformer Failure',
    affected: 2400,
    duration: '2h 15m',
    status: 'Repairing'
  },
  {
    id: 2,
    location: 'Industrial Zone C',
    type: 'Line Overload',
    affected: 850,
    duration: '45m',
    status: 'Monitoring'
  },
]

const demandForecast = [
  { hour: '22:00', predicted: 1380, actual: 1350, confidence: 94 },
  { hour: '23:00', predicted: 1250, actual: null, confidence: 91 },
  { hour: '00:00', predicted: 1100, actual: null, confidence: 89 },
  { hour: '01:00', predicted: 950, actual: null, confidence: 92 },
  { hour: '02:00', predicted: 820, actual: null, confidence: 88 },
  { hour: '03:00', predicted: 750, actual: null, confidence: 85 },
]

const GridSmartPro: React.FC = () => {
  const [realTimeMode, setRealTimeMode] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [gridLoad, setGridLoad] = useState(78)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      if (realTimeMode) {
        setGridLoad(prev => Math.max(60, Math.min(95, prev + (Math.random() - 0.5) * 5)))
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [realTimeMode])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return '#059669'
      case 'Warning': return '#f59e0b'
      case 'Offline': return '#dc2626'
      default: return '#64748b'
    }
  }

  const getLoadColor = (load: number) => {
    if (load > 90) return '#dc2626'
    if (load > 75) return '#f59e0b'
    return '#059669'
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <DashboardHeader 
        title="GridSmart Pro" 
        subtitle="Smart Grid Management System"
        color="#3b82f6"
      />
      
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Smart Grid Operations Center
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Real-time grid monitoring, load balancing, and renewable energy integration
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch 
                  checked={realTimeMode} 
                  onChange={(e) => setRealTimeMode(e.target.checked)}
                  color="primary"
                />
              }
              label="Real-time Mode"
            />
          </Box>
        </motion.div>

        {/* Key Metrics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Total Demand"
              value="1,450"
              unit="MW"
              change={5.2}
              icon={<Bolt />}
              color="#3b82f6"
              subtitle="Current load"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Grid Efficiency"
              value={gridLoad.toFixed(1)}
              unit="%"
              change={2.1}
              icon={<Power />}
              color="#059669"
              subtitle="System performance"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Renewable Share"
              value="42.3"
              unit="%"
              change={8.7}
              icon={<WbSunny />}
              color="#10b981"
              subtitle="Clean energy"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Active Alerts"
              value="2"
              change={-33.3}
              icon={<Warning />}
              color="#f59e0b"
              subtitle="Requires attention"
            />
          </Grid>
        </Grid>

        {/* Real-time Grid Monitoring */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={8}>
            <ChartCard title="Real-time Energy Flow" subtitle="Demand vs Supply with renewable integration">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="renewable" 
                    stackId="1"
                    stroke="#10b981" 
                    fill="#10b981"
                    fillOpacity={0.6}
                    name="Renewable (MW)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="demand" 
                    stroke="#dc2626" 
                    strokeWidth={3}
                    name="Demand (MW)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="supply" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Total Supply (MW)"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Grid Node Status
                </Typography>
                <List>
                  {gridNodes.map((node) => (
                    <ListItem key={node.id} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Avatar 
                          sx={{ 
                            bgcolor: getStatusColor(node.status),
                            width: 32,
                            height: 32
                          }}
                        >
                          <Power sx={{ fontSize: 16 }} />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {node.name}
                            </Typography>
                            <Chip 
                              label={`${node.load}%`} 
                              size="small"
                              sx={{ 
                                bgcolor: getLoadColor(node.load),
                                color: 'white',
                                fontWeight: 500,
                                minWidth: 45
                              }}
                            />
                          </Box>
                        }
                        secondary={`Efficiency: ${node.efficiency}%`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Renewable Energy Sources */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={6}>
            <ChartCard title="Renewable Energy Sources" subtitle="Current generation capacity">
              <Box sx={{ p: 2 }}>
                {renewableData.map((source, index) => (
                  <Box key={source.source} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {source.source}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {source.current}MW / {source.capacity}MW
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                      <Box 
                        sx={{ 
                          height: 8, 
                          bgcolor: '#e2e8f0', 
                          borderRadius: 4,
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${source.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{
                            height: '100%',
                            backgroundColor: source.source === 'Solar' ? '#f59e0b' : 
                                           source.source === 'Wind' ? '#3b82f6' :
                                           source.source === 'Hydro' ? '#06b6d4' : '#10b981',
                            borderRadius: 4
                          }}
                        />
                      </Box>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          position: 'absolute', 
                          right: 8, 
                          top: -2,
                          fontWeight: 600
                        }}
                      >
                        {source.percentage}%
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </ChartCard>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <ChartCard title="Demand Forecast" subtitle="AI-powered 6-hour prediction">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={demandForecast}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px' 
                    }}
                    formatter={(value: any, name: string) => [
                      name === 'confidence' ? `${value}%` : `${value}MW`,
                      name === 'predicted' ? 'Predicted' : name === 'actual' ? 'Actual' : 'Confidence'
                    ]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Predicted Demand (MW)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#059669" 
                    strokeWidth={3}
                    name="Actual Demand (MW)"
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
        </Grid>

        {/* Active Alerts */}
        {outageAlerts.length > 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Warning sx={{ color: '#f59e0b' }} />
                      Active Grid Alerts
                    </Typography>
                    {outageAlerts.map((alert) => (
                      <Box 
                        key={alert.id}
                        sx={{ 
                          p: 2, 
                          border: '1px solid #f59e0b', 
                          borderRadius: 2, 
                          bgcolor: '#fffbeb',
                          mb: 2
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {alert.type} - {alert.location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {alert.affected.toLocaleString()} customers affected • Duration: {alert.duration}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Chip 
                              label={alert.status} 
                              size="small"
                              sx={{ bgcolor: '#f59e0b', color: 'white' }}
                            />
                            <Button variant="outlined" size="small">
                              Details
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  )
}

export default GridSmartPro