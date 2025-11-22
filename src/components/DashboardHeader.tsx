import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material'
import {
  Home,
  Settings,
  Notifications,
  AccountCircle,
  ExitToApp,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  color?: string
  showDemo?: boolean
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  color = '#2563eb',
  showDemo = true
}) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: color, 
                fontWeight: 600,
                mr: 2
              }}
            >
              {title}
            </Typography>
          </motion.div>
          
          {subtitle && (
            <Chip 
              label={subtitle} 
              size="small" 
              sx={{ 
                bgcolor: `${color}20`,
                color: color,
                fontWeight: 500
              }} 
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {showDemo && (
            <Chip 
              label="DEMO MODE" 
              size="small" 
              sx={{ 
                bgcolor: '#f59e0b',
                color: 'white',
                fontWeight: 600,
                mr: 2
              }} 
            />
          )}
          
          <IconButton 
            onClick={() => navigate('/')}
            sx={{ color: '#64748b' }}
          >
            <Home />
          </IconButton>
          
          <IconButton sx={{ color: '#64748b' }}>
            <Notifications />
          </IconButton>
          
          <IconButton sx={{ color: '#64748b' }}>
            <Settings />
          </IconButton>
          
          <IconButton onClick={handleMenuClick}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: color }}>
              A
            </Avatar>
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <AccountCircle sx={{ mr: 1 }} /> Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Settings sx={{ mr: 1 }} /> Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ExitToApp sx={{ mr: 1 }} /> Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardHeader