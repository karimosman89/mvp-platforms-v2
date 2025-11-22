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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Alert,
  IconButton,
  Avatar,
} from '@mui/material'
import {
  Security,
  Warning,
  TrendingUp,
  AccountBalance,
  CreditCard,
  MonetizationOn,
  Shield,
  Gavel,
  Visibility,
  Block,
  CheckCircle,
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
  ScatterChart,
  Scatter,
} from 'recharts'
import { motion } from 'framer-motion'
import DashboardHeader from '../../components/DashboardHeader'
import MetricCard from '../../components/MetricCard'
import ChartCard from '../../components/ChartCard'

// Sample data for demo
const riskTrends = [
  { time: '00:00', high: 12, medium: 45, low: 180, fraudAttempts: 8 },
  { time: '04:00', high: 8, medium: 52, low: 195, fraudAttempts: 5 },
  { time: '08:00', high: 25, medium: 78, low: 220, fraudAttempts: 18 },
  { time: '12:00', high: 32, medium: 89, low: 245, fraudAttempts: 24 },
  { time: '16:00', high: 28, medium: 72, low: 210, fraudAttempts: 19 },
  { time: '20:00', high: 18, medium: 58, low: 185, fraudAttempts: 12 },
]

const fraudAlerts = [
  {
    id: 1,
    time: '14:23:45',
    type: 'Credit Card Fraud',
    riskScore: 95,
    amount: 2500,
    location: 'New York, NY',
    status: 'Blocked',
    confidence: 98.2
  },
  {
    id: 2,
    time: '14:18:12',
    type: 'Account Takeover',
    riskScore: 87,
    amount: 850,
    location: 'London, UK',
    status: 'Under Review',
    confidence: 89.7
  },
  {
    id: 3,
    time: '14:12:33',
    type: 'Wire Transfer',
    riskScore: 78,
    amount: 15000,
    location: 'Dubai, UAE',
    status: 'Flagged',
    confidence: 84.3
  },
  {
    id: 4,
    time: '14:08:21',
    type: 'Identity Theft',
    riskScore: 92,
    amount: 3200,
    location: 'São Paulo, BR',
    status: 'Blocked',
    confidence: 96.1
  },
]

const riskDistribution = [
  { name: 'Low Risk', value: 68, color: '#059669' },
  { name: 'Medium Risk', value: 24, color: '#f59e0b' },
  { name: 'High Risk', value: 8, color: '#dc2626' },
]

const complianceMetrics = [
  { category: 'KYC Compliance', score: 94, target: 95, status: 'Good' },
  { category: 'AML Monitoring', score: 98, target: 96, status: 'Excellent' },
  { category: 'Transaction Screening', score: 92, target: 94, status: 'Needs Attention' },
  { category: 'Risk Assessment', score: 96, target: 93, status: 'Excellent' },
]

const transactionPatterns = [
  { hour: 0, normal: 120, suspicious: 2, volume: 1.2 },
  { hour: 6, normal: 180, suspicious: 3, volume: 1.8 },
  { hour: 12, normal: 450, suspicious: 12, volume: 4.6 },
  { hour: 18, normal: 380, suspicious: 8, volume: 3.9 },
]

const RiskGuardPro: React.FC = () => {
  const [activeAlerts, setActiveAlerts] = useState(fraudAlerts.length)
  const [totalTransactions, setTotalTransactions] = useState(247892)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      setTotalTransactions(prev => prev + Math.floor(Math.random() * 10))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getRiskColor = (score: number) => {
    if (score >= 80) return '#dc2626'
    if (score >= 60) return '#f59e0b'
    return '#059669'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Blocked': return '#dc2626'
      case 'Under Review': return '#f59e0b'
      case 'Flagged': return '#3b82f6'
      case 'Cleared': return '#059669'
      default: return '#64748b'
    }
  }

  const getComplianceStatus = (score: number, target: number) => {
    if (score >= target) return 'Excellent'
    if (score >= target - 5) return 'Good'
    return 'Needs Attention'
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <DashboardHeader 
        title="RiskGuard Pro" 
        subtitle="AI Risk Assessment Platform"
        color="#059669"
      />
      
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              Real-time Risk Management & Fraud Detection
            </Typography>
            <Typography variant="body1" color="text.secondary">
              AI-powered risk assessment, fraud prevention, and compliance monitoring
            </Typography>
            <Chip 
              label={`${totalTransactions.toLocaleString()} transactions processed today`} 
              size="small" 
              sx={{ mt: 1, bgcolor: '#059669', color: 'white' }}
            />
          </Box>
        </motion.div>

        {/* Critical Alerts */}
        {activeAlerts > 0 && (
          <Box sx={{ mb: 4 }}>
            <Alert 
              severity="warning" 
              sx={{ 
                borderRadius: 2,
                '& .MuiAlert-message': { width: '100%' }
              }}
              action={
                <Button color="inherit" size="small">
                  View All
                </Button>
              }
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {activeAlerts} high-risk transactions require immediate attention
                </Typography>
              </Box>
            </Alert>
          </Box>
        )}

        {/* Key Metrics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Risk Score"
              value="2.3"
              unit="%"
              change={-15.2}
              icon={<Security />}
              color="#059669"
              subtitle="Overall portfolio risk"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Fraud Prevented"
              value="$2.4M"
              change={23.5}
              icon={<Shield />}
              color="#3b82f6"
              subtitle="Losses avoided"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Active Alerts"
              value={activeAlerts.toString()}
              change={-8.3}
              icon={<Warning />}
              color="#f59e0b"
              subtitle="Requires review"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              title="Compliance Score"
              value="95.2"
              unit="%"
              change={2.1}
              icon={<Gavel />}
              color="#7c3aed"
              subtitle="Regulatory compliance"
            />
          </Grid>
        </Grid>

        {/* Risk Trends and Distribution */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={8}>
            <ChartCard title="Risk Trends" subtitle="Real-time risk monitoring across all channels">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={riskTrends}>
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
                    dataKey="low" 
                    stackId="1"
                    stroke="#059669" 
                    fill="#059669"
                    fillOpacity={0.6}
                    name="Low Risk"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="medium" 
                    stackId="1"
                    stroke="#f59e0b" 
                    fill="#f59e0b"
                    fillOpacity={0.6}
                    name="Medium Risk"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="high" 
                    stackId="1"
                    stroke="#dc2626" 
                    fill="#dc2626"
                    fillOpacity={0.6}
                    name="High Risk"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="fraudAttempts" 
                    stroke="#7c3aed" 
                    strokeWidth={3}
                    name="Fraud Attempts"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <ChartCard title="Risk Distribution" subtitle="Current portfolio breakdown">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
        </Grid>

        {/* Fraud Alerts */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <ChartCard title="High-Risk Transaction Alerts" subtitle="AI-detected suspicious activities">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Time</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Risk Score</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Confidence</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fraudAlerts.map((alert) => (
                      <TableRow key={alert.id} sx={{ '&:hover': { bgcolor: '#f8fafc' } }}>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {alert.time}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ width: 24, height: 24, bgcolor: getRiskColor(alert.riskScore) }}>
                              <Warning sx={{ fontSize: 14 }} />
                            </Avatar>
                            {alert.type}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            ${alert.amount.toLocaleString()}
                          </Typography>
                        </TableCell>
                        <TableCell>{alert.location}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LinearProgress 
                              variant="determinate" 
                              value={alert.riskScore} 
                              sx={{ 
                                width: 60, 
                                height: 6, 
                                borderRadius: 3,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: getRiskColor(alert.riskScore)
                                }
                              }}
                            />
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {alert.riskScore}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {alert.confidence}%
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={alert.status} 
                            size="small"
                            sx={{ 
                              bgcolor: getStatusColor(alert.status),
                              color: 'white',
                              fontWeight: 500
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small" sx={{ color: '#3b82f6' }}>
                              <Visibility sx={{ fontSize: 16 }} />
                            </IconButton>
                            <IconButton size="small" sx={{ color: '#dc2626' }}>
                              <Block sx={{ fontSize: 16 }} />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ChartCard>
          </Grid>
        </Grid>

        {/* Compliance and Transaction Patterns */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <ChartCard title="Compliance Metrics" subtitle="Regulatory compliance monitoring">
              <Box sx={{ p: 2 }}>
                {complianceMetrics.map((metric, index) => (
                  <Box key={metric.category} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {metric.category}
                      </Typography>
                      <Chip 
                        label={getComplianceStatus(metric.score, metric.target)} 
                        size="small"
                        sx={{ 
                          bgcolor: metric.score >= metric.target ? '#059669' : '#f59e0b',
                          color: 'white',
                          fontWeight: 500
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Score: {metric.score}% (Target: {metric.target}%)
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(metric.score / 100) * 100} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: '#e2e8f0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: metric.score >= metric.target ? '#059669' : '#f59e0b'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </ChartCard>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <ChartCard title="Transaction Patterns" subtitle="Hourly transaction analysis">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={transactionPatterns}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px' 
                    }}
                  />
                  <Bar dataKey="normal" fill="#059669" name="Normal Transactions" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="suspicious" fill="#dc2626" name="Suspicious Transactions" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default RiskGuardPro