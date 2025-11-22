import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { MoreVert, Fullscreen, Download, Refresh } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface ChartCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  height?: number
  actions?: React.ReactNode
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  height = 300,
  actions
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ height: '100%' }}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
          }
          subheader={subtitle}
          action={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {actions}
              <IconButton onClick={handleMenuClick}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Fullscreen sx={{ mr: 1, fontSize: 20 }} /> Full Screen
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Download sx={{ mr: 1, fontSize: 20 }} /> Export
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Refresh sx={{ mr: 1, fontSize: 20 }} /> Refresh
                </MenuItem>
              </Menu>
            </Box>
          }
        />
        <CardContent>
          <Box sx={{ height: height, width: '100%' }}>
            {children}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ChartCard