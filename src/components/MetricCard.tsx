import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material'
import { TrendingUp, TrendingDown, MoreVert } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface MetricCardProps {
  title: string
  value: string | number
  change?: number
  unit?: string
  icon?: React.ReactNode
  color?: string
  subtitle?: string
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  unit,
  icon,
  color,
  subtitle
}) => {
  const theme = useTheme()
  const isPositive = change ? change > 0 : false
  const changeColor = isPositive ? '#059669' : '#dc2626'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <Card sx={{ height: '100%', position: 'relative' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500 }}>
              {title}
            </Typography>
            {icon && (
              <Box 
                sx={{ 
                  bgcolor: color ? `${color}20` : theme.palette.primary.light + '20',
                  color: color || theme.palette.primary.main,
                  p: 1,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {icon}
              </Box>
            )}
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                color: color || theme.palette.text.primary
              }}
            >
              {value}
            </Typography>
            {unit && (
              <Typography variant="body2" color="text.secondary">
                {unit}
              </Typography>
            )}
          </Box>
          
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {subtitle}
            </Typography>
          )}
          
          {change !== undefined && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {isPositive ? (
                <TrendingUp sx={{ fontSize: 16, color: changeColor }} />
              ) : (
                <TrendingDown sx={{ fontSize: 16, color: changeColor }} />
              )}
              <Typography 
                variant="body2" 
                sx={{ 
                  color: changeColor,
                  fontWeight: 500
                }}
              >
                {Math.abs(change).toFixed(1)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                vs last period
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default MetricCard