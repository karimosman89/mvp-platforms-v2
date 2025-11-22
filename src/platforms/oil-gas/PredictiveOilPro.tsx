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
} from 'recharts'
import { motion } from 'framer-motion'
import DashboardHeader from '../../components/DashboardHeader'
import MetricCard from '../../components/MetricCard'
import ChartCard from '../../components/ChartCard'

// Sample data for demo
const equipmentData = [
  { time: '00:00', temperature: 72, vibration: 1.2, pressure: 145, efficiency: 94 },
  { time: '04:00', temperature: 74, vibration: 1.4, pressure: 148, efficiency: 92 },
  { time: '08:00', temperature: 76, vibration: 1.6, pressure: 152, efficiency: 90 },
  { time: '12:00', temperature: 78, vibration: 1.8, pressure: 155, efficiency: 88 },
  { time: '16:00', temperature: 80, vibration: 2.1, pressure: 158, efficiency: 85 },
  { time: '20:00', temperature: 82, vibration: 2.3, pressure: 162, efficiency: 83 },
]

const maintenanceAlerts = [
  {
    id: 1,
    equipment: 'Pump Station A-1',
    type: 'Vibration Anomaly',
    severity: 'High',
    prediction: '3 days',
    confidence: 89,
    status: 'Active'
  },
  {
    id: 2,
    equipment: 'Compressor B-2',
    type: 'Temperature Rise',
    severity: 'Medium',
    prediction: '7 days',
    confidence: 76,
    status: 'Monitoring'
  },
  {
    id: 3,
    equipment: 'Valve C-3',
    type: 'Pressure Drop',
    severity: 'Low',
    prediction: '14 days',
    confidence: 68,
    status: 'Scheduled'
  },
]

const costSavingsData = [
  { month: 'Jan', savings: 45000, maintenance: 25000 },
  { month: 'Feb', savings: 52000, maintenance: 22000 },
  { month: 'Mar', savings: 48000, maintenance: 28000 },
  { month: 'Apr', savings: 61000, maintenance: 19000 },
  { month: 'May', savings: 58000, maintenance: 21000 },
  { month: 'Jun', savings: 67000, maintenance: 18000 },
]

const equipmentStatusData = [
  { name: 'Operational', value: 85, color: '#059669' },
  { name: 'Maintenance', value: 10, color: '#f59e0b' },
  { name: 'Offline', value: 5, color: '#dc2626' },
]

const PredictiveOilPro: React.FC = () => {
  const [liveData, setLiveData] = useState(equipmentData)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      setLiveData(prev => {
        const newData = [...prev]
        const lastPoint = newData[newData.length - 1]
        const newPoint = {
          ...lastPoint,
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          temperature: lastPoint.temperature + (Math.random() - 0.5) * 2,
          vibration: Math.max(0, lastPoint.vibration + (Math.random() - 0.5) * 0.2),
          pressure: lastPoint.pressure + (Math.random() - 0.5) * 5,
          efficiency: Math.max(70, Math.min(100, lastPoint.efficiency + (Math.random() - 0.5) * 3))
        }
        return [...newData.slice(-5), newPoint]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return '#dc2626'
      case 'Medium': return '#f59e0b'
      case 'Low': return '#059669'
      default: return '#64748b'
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <DashboardHeader 
        title="PredictiveOil Pro" 
        subtitle="Predictive Maintenance Dashboard"
        color="#f59e0b"
      />
      
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              Equipment Monitoring & Predictive Analytics
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Real-time monitoring and AI-powered failure prediction for oil & gas operations
            </Typography>
            <Chip 
              label={`Last Updated: ${currentTime.toLocaleTimeString()}`} 
              size="small" 
              sx={{ mt: 1, bgcolor: '#059669', color: 'white' }}
            />
          </Box>
        </motion.div>

        {/* Key Metrics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Active Equipment"
              value="247"
              change={2.3}
              icon={<Build />}
              color="#059669"
              subtitle="All systems operational"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Maintenance Alerts"
              value="3"
              change={-15.2}
              icon={<Warning />}
              color="#f59e0b"
              subtitle="Requires attention"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Cost Savings"
              value="$67K"
              unit="this month"
              change={12.5}
              icon={<TrendingUp />}
              color="#2563eb"
              subtitle="Predictive maintenance"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="System Efficiency"
              value="94.2"
              unit="%"
              change={3.7}
              icon={<Speed />}
              color="#7c3aed"
              subtitle="Overall performance"
            />
          </Grid>
        </Grid>

        {/* Real-time Monitoring */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={8}>
            <ChartCard title="Real-time Equipment Monitoring" subtitle="Live sensor data feed">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={liveData}>
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
                  <Line 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#dc2626" 
                    strokeWidth={2}
                    name="Temperature (°C)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="vibration" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    name="Vibration (mm/s)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pressure" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    name="Pressure (PSI)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <ChartCard title="Equipment Status" subtitle="Current operational state">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={equipmentStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {equipmentStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
        </Grid>

        {/* Predictive Maintenance Alerts */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ChartCard title="Predictive Maintenance Alerts" subtitle="AI-powered failure predictions">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>Equipment</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Issue Type</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Severity</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Prediction</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Confidence</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {maintenanceAlerts.map((alert) => (
                        <TableRow key={alert.id} sx={{ '&:hover': { bgcolor: '#f8fafc' } }}>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {alert.equipment}
                            </Typography>
                          </TableCell>
                          <TableCell>{alert.type}</TableCell>
                          <TableCell>
                            <Chip 
                              label={alert.severity} 
                              size="small"
                              sx={{ 
                                bgcolor: getSeverityColor(alert.severity),
                                color: 'white',
                                fontWeight: 500
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {alert.prediction}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <LinearProgress 
                                variant="determinate" 
                                value={alert.confidence} 
                                sx={{ width: 60, height: 6, borderRadius: 3 }}
                              />
                              <Typography variant="body2">{alert.confidence}%</Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={alert.status} 
                              size="small" 
                              variant="outlined"
                              color={alert.status === 'Active' ? 'error' : 'default'}
                            />
                          </TableCell>
                          <TableCell>
                            <Button 
                              size="small" 
                              variant="outlined"
                              sx={{ textTransform: 'none' }}
                            >
                              Schedule
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ChartCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Cost Analysis */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ChartCard title="Cost Savings Analysis" subtitle="Predictive vs reactive maintenance costs">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costSavingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px' 
                    }}
                    formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="savings" fill="#059669" name="Cost Savings" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="maintenance" fill="#f59e0b" name="Maintenance Costs" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PredictiveOilPro